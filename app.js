(() => {
  const STORAGE_KEY = "ielts_15min_quest_v1";

  const SKILL_META = {
    listening: {
      key: "listening",
      icon: "🎧",
      name: "Listening 聽力",
      desc: "Form/Note 填空、方位地圖、態度干擾項、配對多選、Section 4 拼字",
      color: "#2563eb",
    },
    speaking: {
      key: "speaking",
      icon: "🎤",
      name: "Speaking 口說",
      desc: "Part 1 快問快答、Part 2 題卡計時、Part 3 深度討論、高分替換閃電戰",
      color: "#7c3aed",
    },
    reading: {
      key: "reading",
      icon: "📖",
      name: "Reading 閱讀",
      desc: "T/F/NG、Matching Headings、五選二複選、摘要填空、同義替換配對",
      color: "#0d9488",
    },
    writing: {
      key: "writing",
      icon: "✍️",
      name: "Writing 寫作",
      desc: "句型改寫、Task 1 全圖表、Task 2 三明治架構、文法改錯、WPM 微寫作",
      color: "#d97706",
    },
  };

  // JS getDay(): 0=Sun, 1=Mon, 2=Tue, 3=Wed, 4=Thu, 5=Fri, 6=Sat
  const WEEKLY_PLAN = [
    { dayIdx: 1, label: "週一", skills: ["listening"], text: "🎧 聽力 15分 + 複習 5分" },
    { dayIdx: 2, label: "週二", skills: ["reading"], text: "📖 閱讀 15分 + 複習 5分" },
    { dayIdx: 3, label: "週三", skills: ["writing"], text: "✍️ 寫作 15分 + 複習 5分" },
    { dayIdx: 4, label: "週四", skills: ["speaking"], text: "🎤 口說 15分 + 複習 5分" },
    { dayIdx: 5, label: "週五", skills: [], text: "📕 錯題本 + 彈性補弱點" },
    { dayIdx: 6, label: "週六", skills: ["reading", "writing"], text: "📖 閱讀 15分 ＋ ✍️ 寫作 15分" },
    { dayIdx: 0, label: "週日", skills: ["listening", "speaking"], text: "🎧 聽力 15分 ＋ 🎤 口說 15分" },
  ];

  const defaultState = {
    xp: 0,
    streak: 0,
    lastPracticeDate: null,
    completedDays: {}, // "YYYY-MM-DD": ["listening", ...]
    clearedStages: {}, // "L1": true
    mistakes: [], // { id, skill, prompt, yourAnswer, correctAnswer, explanation }
    reminderTime: "20:00",
    reminderEnabled: false,
  };

  let state = loadState();
  let currentView = { page: "home", skill: null, stageIdx: 0 };

  // Global 15-min Timer
  let timerSeconds = 15 * 60;
  let timerInterval = null;

  // Speaking local media/speech handles
  let activeRecognition = null;
  let activeMediaRecorder = null;
  let activeChunks = [];
  let speakCountdown = null;

  function loadState() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return { ...defaultState };
      return { ...defaultState, ...JSON.parse(raw) };
    } catch {
      return { ...defaultState };
    }
  }

  function saveState() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    updateHud();
  }

  function todayStr() {
    const d = new Date();
    return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
  }

  function recordPractice(skillKey) {
    const today = todayStr();
    if (!state.completedDays[today]) state.completedDays[today] = [];
    if (skillKey && !state.completedDays[today].includes(skillKey)) {
      state.completedDays[today].push(skillKey);
    }
    if (state.lastPracticeDate !== today) {
      const yesterday = new Date();
      yesterday.setDate(yesterday.getDate() - 1);
      const yStr = `${yesterday.getFullYear()}-${String(yesterday.getMonth() + 1).padStart(2, "0")}-${String(yesterday.getDate()).padStart(2, "0")}`;
      state.streak = state.lastPracticeDate === yStr ? state.streak + 1 : 1;
      state.lastPracticeDate = today;
    }
    saveState();
  }

  function addXP(amount) {
    state.xp += amount;
    saveState();
    showToast(`+${amount} XP！繼續保持！`);
  }

  function addMistake(item) {
    if (!state.mistakes.some((m) => m.id === item.id)) {
      state.mistakes.unshift(item);
      saveState();
    }
  }

  function removeMistake(id) {
    state.mistakes = state.mistakes.filter((m) => m.id !== id);
    saveState();
    renderMistakeModal();
  }

  function showToast(msg) {
    const t = document.getElementById("toast");
    t.textContent = msg;
    t.classList.remove("hidden");
    clearTimeout(t._timer);
    t._timer = setTimeout(() => t.classList.add("hidden"), 2600);
  }

  function updateHud() {
    document.getElementById("streakCount").textContent = state.streak;
    document.getElementById("xpCount").textContent = state.xp;
    document.getElementById("mistakeCount").textContent = state.mistakes.length;
  }

  function formatTime(sec) {
    const m = Math.floor(sec / 60);
    const s = sec % 60;
    return `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
  }

  function startGlobalTimer(resetTo15 = false) {
    if (resetTo15) timerSeconds = 15 * 60;
    if (timerInterval) return;
    document.getElementById("timerToggleBtn").textContent = "暫停";
    timerInterval = setInterval(() => {
      if (timerSeconds > 0) {
        timerSeconds--;
        document.getElementById("timerDisplay").textContent = formatTime(timerSeconds);
      } else {
        clearInterval(timerInterval);
        timerInterval = null;
        document.getElementById("timerToggleBtn").textContent = "開始";
        showToast("🎉 15 分鐘專注練習達成！記得回顧 5 分鐘錯題本！");
      }
    }, 1000);
  }

  function pauseGlobalTimer() {
    clearInterval(timerInterval);
    timerInterval = null;
    document.getElementById("timerToggleBtn").textContent = "開始";
  }

  function stopMediaAndSpeech() {
    if (window.speechSynthesis) window.speechSynthesis.cancel();
    if (activeRecognition) {
      try { activeRecognition.stop(); } catch {}
      activeRecognition = null;
    }
    if (activeMediaRecorder && activeMediaRecorder.state !== "inactive") {
      try { activeMediaRecorder.stop(); } catch {}
    }
    clearInterval(speakCountdown);
  }

  function escapeHtml(str) {
    return String(str ?? "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function normalizeText(s) {
    return String(s || "")
      .trim()
      .toLowerCase()
      .replace(/[.,!?;:'"()\-]/g, "")
      .replace(/\s+/g, " ");
  }

  function checkAnswer(q, userVal) {
    if (q.qType === "multiselect") {
      const expected = Array.isArray(q.answer) ? [...q.answer].sort() : [q.answer];
      const actual = Array.isArray(userVal) ? [...userVal].sort() : [];
      return expected.length === actual.length && expected.every((v, i) => v === actual[i]);
    }
    if (q.qType === "mcq") {
      return String(userVal || "").toUpperCase() === String(q.answer || "").toUpperCase();
    }
    // input
    const normUser = normalizeText(userVal);
    if (!normUser) return false;
    const accepted = Array.isArray(q.answer) ? q.answer : [q.answer];
    return accepted.some((a) => normalizeText(a) === normUser);
  }

  // ==================== HOME VIEW ====================
  function renderHome() {
    stopMediaAndSpeech();
    const root = document.getElementById("appRoot");
    const todayDow = new Date().getDay();
    const todayPlan = WEEKLY_PLAN.find((w) => w.dayIdx === todayDow) || WEEKLY_PLAN[0];
    const data = window.IELTS_DATA || {};

    const todayBtns = todayPlan.skills.length
      ? todayPlan.skills
          .map(
            (sk) =>
              `<button class="btn btn-white" data-open-skill="${sk}">開始今日任務：${SKILL_META[sk].icon} ${SKILL_META[sk].name} (15分)</button>`
          )
          .join("")
      : `<button class="btn btn-white" id="heroMistakeBtn">📕 開啟今日錯題複習</button>`;

    const weekHtml = WEEKLY_PLAN.map((w) => {
      const isToday = w.dayIdx === todayDow;
      const doneToday = isToday && (state.completedDays[todayStr()] || []).length > 0;
      return `
        <div class="day-card ${isToday ? "today" : ""} ${doneToday ? "done" : ""}">
          <div class="day-name">${w.label}${isToday ? "（今天）" : ""}</div>
          <div class="day-plan">${w.text}</div>
          <div class="day-status">${doneToday ? "✅ 已打卡" : isToday ? "🔥 進行中" : "—"}</div>
        </div>`;
    }).join("");

    const skillCardsHtml = ["listening", "speaking", "reading", "writing"]
      .map((sk) => {
        const meta = SKILL_META[sk];
        const stages = data[sk] || [];
        const cleared = stages.filter((s) => state.clearedStages[s.id]).length;
        const pct = stages.length ? Math.round((cleared / stages.length) * 100) : 0;
        const chips = stages
          .map(
            (s, idx) =>
              `<button class="stage-chip ${state.clearedStages[s.id] ? "cleared" : ""}" data-open-skill="${sk}" data-stage="${idx}">
                ${state.clearedStages[s.id] ? "✅ " : ""}${escapeHtml(s.badge || s.part || s.id)}
              </button>`
          )
          .join("");
        return `
          <div class="skill-card">
            <div class="skill-head">
              <div>
                <div class="skill-title">${meta.icon} ${meta.name}</div>
                <div class="skill-meta">${meta.desc}</div>
              </div>
              <span class="hud-pill">${cleared}/${stages.length} 關</span>
            </div>
            <div class="progress-bar"><div class="progress-fill" style="width:${pct}%"></div></div>
            <div class="stage-chips">${chips}</div>
            <div style="margin-top:auto; display:flex; gap:8px;">
              <button class="btn btn-primary" style="flex:1;" data-open-skill="${sk}" data-stage="0">🚀 進入 15 分鐘闖關</button>
            </div>
          </div>`;
      })
      .join("");

    root.innerHTML = `
      <section class="hero">
        <div>
          <span class="hero-badge">📅 今日計畫（${todayPlan.label}）</span>
          <h1>${todayPlan.text}</h1>
          <p>一到四每天 20 分鐘（15 分鐘闖關＋5 分鐘錯題回顧）；週六閱讀＋寫作；週日聽力＋口說。</p>
        </div>
        <div class="hero-actions">${todayBtns}</div>
      </section>

      <div class="section-title"><span>📆 每週複習節奏表</span></div>
      <div class="week-grid">${weekHtml}</div>

      <div class="section-title"><span>🎮 四大能力題型闖關（內容 100% 源自你的 OneNote 補帖）</span></div>
      <div class="skill-grid">${skillCardsHtml}</div>

      <div class="reminder-bar">
        <div>
          <strong>🔔 每日練習提醒設定</strong>
          <div class="skill-meta">可開啟網頁通知，或直接雙擊專案資料夾內的 <code>IELTS_每日複習提醒.ics</code> 匯入 Google 日曆／手機行事曆！</div>
        </div>
        <div style="display:flex; align-items:center; gap:8px; flex-wrap:wrap;">
          <input type="time" id="reminderTimeInput" value="${state.reminderTime}" style="padding:6px 10px; border-radius:8px; border:1px solid var(--border);" />
          <button class="btn btn-outline btn-sm" id="toggleReminderBtn">
            ${state.reminderEnabled ? "🔔 網頁提醒已開啟" : "🔕 開啟網頁每日提醒"}
          </button>
        </div>
      </div>
    `;

    root.querySelectorAll("[data-open-skill]").forEach((btn) => {
      btn.addEventListener("click", () => {
        const sk = btn.getAttribute("data-open-skill");
        const st = parseInt(btn.getAttribute("data-stage") || "0", 10);
        openSkill(sk, st);
      });
    });

    const heroMistakeBtn = document.getElementById("heroMistakeBtn");
    if (heroMistakeBtn) heroMistakeBtn.addEventListener("click", openMistakeModal);

    document.getElementById("reminderTimeInput").addEventListener("change", (e) => {
      state.reminderTime = e.target.value;
      saveState();
      showToast(`已更新每日提醒時間為 ${state.reminderTime}`);
    });

    document.getElementById("toggleReminderBtn").addEventListener("click", async () => {
      if (!("Notification" in window)) {
        showToast("此瀏覽器不支援通知，建議匯入 IELTS_每日複習提醒.ics 到手機日曆！");
        return;
      }
      if (!state.reminderEnabled) {
        const perm = await Notification.requestPermission();
        if (perm === "granted") {
          state.reminderEnabled = true;
          saveState();
          renderHome();
          showToast("🔔 已開啟每日網頁練習提醒！");
        } else {
          showToast("未取得通知權限，請改用 IELTS_每日複習提醒.ics 匯入行事曆。");
        }
      } else {
        state.reminderEnabled = false;
        saveState();
        renderHome();
      }
    });
  }

  // ==================== SKILL STAGE VIEW ====================
  function openSkill(skillKey, stageIdx = 0) {
    stopMediaAndSpeech();
    currentView = { page: "skill", skill: skillKey, stageIdx };
    if (!timerInterval && timerSeconds === 15 * 60) {
      startGlobalTimer(false);
    }
    renderSkillStage();
  }

  function renderSkillStage() {
    stopMediaAndSpeech();
    const root = document.getElementById("appRoot");
    const { skill, stageIdx } = currentView;
    const meta = SKILL_META[skill];
    const stages = (window.IELTS_DATA && window.IELTS_DATA[skill]) || [];
    const stage = stages[stageIdx];

    if (!stage) {
      root.innerHTML = `<div class="card"><p>尚無此科資料，請確認 <code>data/${skill}.js</code> 已載入。</p><button class="btn btn-primary" id="backHomeBtn">回首頁</button></div>`;
      document.getElementById("backHomeBtn").onclick = () => { currentView = { page: "home" }; renderHome(); };
      return;
    }

    const tabsHtml = stages
      .map(
        (s, idx) => `
        <button class="stage-tab ${idx === stageIdx ? "active" : ""} ${state.clearedStages[s.id] ? "cleared" : ""}" data-tab="${idx}">
          ${state.clearedStages[s.id] ? "✅ " : ""}${idx + 1}. ${escapeHtml(s.badge || s.part || s.id)}
        </button>`
      )
      .join("");

    let bodyHtml = "";
    if (skill === "listening") {
      bodyHtml = renderListeningBody(stage);
    } else if (skill === "speaking") {
      bodyHtml = stage.mode === "quiz" ? renderQuizBody(stage, skill) : renderSpeakingBody(stage);
    } else if (skill === "reading") {
      bodyHtml = renderReadingBody(stage);
    } else if (skill === "writing") {
      bodyHtml = stage.stageMode === "sprint" ? renderWritingSprintBody(stage) : renderQuizBody(stage, skill);
    }

    root.innerHTML = `
      <div class="stage-nav">
        <button class="btn btn-outline btn-sm" id="backHomeBtn">← 回儀表板</button>
        <div class="stage-tabs">${tabsHtml}</div>
      </div>

      <div class="card">
        <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:8px; margin-bottom:10px;">
          <h2 style="margin:0; font-size:20px;">${meta.icon} ${escapeHtml(stage.title)}</h2>
          <span class="hud-pill">建議時間：約 ${stage.durationMin || 3} 分鐘</span>
        </div>
        ${stage.tipFromNotes ? `<div class="tip-box"><strong>📌 筆記重點提醒：</strong>${escapeHtml(stage.tipFromNotes)}</div>` : ""}
        ${bodyHtml}
      </div>

      <div style="display:flex; justify-content:space-between; gap:10px;">
        <button class="btn btn-outline" id="prevStageBtn" ${stageIdx === 0 ? "disabled" : ""}>← 上一關</button>
        <button class="btn btn-primary" id="nextStageBtn">${stageIdx < stages.length - 1 ? "下一關 →" : "🎉 完成本科回首頁"}</button>
      </div>
    `;

    document.getElementById("backHomeBtn").onclick = () => {
      currentView = { page: "home" };
      renderHome();
    };
    root.querySelectorAll("[data-tab]").forEach((b) => {
      b.onclick = () => openSkill(skill, parseInt(b.getAttribute("data-tab"), 10));
    });
    document.getElementById("prevStageBtn").onclick = () => {
      if (stageIdx > 0) openSkill(skill, stageIdx - 1);
    };
    document.getElementById("nextStageBtn").onclick = () => {
      if (stageIdx < stages.length - 1) openSkill(skill, stageIdx + 1);
      else {
        currentView = { page: "home" };
        renderHome();
      }
    };

    // Bind interactive handlers per skill
    if (skill === "listening") {
      bindAudioControls(stage);
      bindQuizHandlers(stage, skill);
    } else if (skill === "speaking") {
      if (stage.mode === "quiz") bindQuizHandlers(stage, skill);
      else bindSpeakingHandlers(stage);
    } else if (skill === "reading") {
      bindQuizHandlers(stage, skill);
    } else if (skill === "writing") {
      if (stage.stageMode === "sprint") bindWritingSprintHandlers(stage);
      else bindQuizHandlers(stage, skill);
    }
  }

  // ==================== LISTENING ====================
  function renderListeningBody(stage) {
    return `
      <div class="audio-panel">
        <div class="audio-controls">
          <button class="btn btn-primary btn-sm" id="playAudioBtn">▶️ 播放聽力音檔</button>
          <button class="btn btn-outline btn-sm" id="stopAudioBtn">⏹️ 停止</button>
          <select id="accentSelect" title="口音切換">
            <option value="en-GB" ${stage.accent === "en-GB" ? "selected" : ""}>🇬🇧 英國口音 (en-GB)</option>
            <option value="en-AU" ${stage.accent === "en-AU" ? "selected" : ""}>🇦🇺 澳洲口音 (en-AU)</option>
            <option value="en-US" ${stage.accent === "en-US" ? "selected" : ""}>🇺🇸 美國口音 (en-US)</option>
          </select>
          <select id="rateSelect" title="語速">
            <option value="0.85">0.85x 慢速</option>
            <option value="1.0" selected>1.0x 標準</option>
            <option value="1.15">1.15x 挑戰</option>
          </select>
          <button class="btn btn-outline btn-sm" id="toggleTranscriptBtn">👁️ 顯示/隱藏逐字稿</button>
          <span id="audioStatus" style="font-size:13px; color:#93c5fd;">就緒</span>
        </div>
        <div id="transcriptBox" class="transcript-box hidden">${escapeHtml(stage.audioScript)}</div>
      </div>
      ${stage.mapSvg ? `<div class="map-box">${stage.mapSvg}</div>` : ""}
      ${renderQuestionsHtml(stage.questions)}
    `;
  }

  function bindAudioControls(stage) {
    const playBtn = document.getElementById("playAudioBtn");
    const stopBtn = document.getElementById("stopAudioBtn");
    const accentSel = document.getElementById("accentSelect");
    const rateSel = document.getElementById("rateSelect");
    const statusEl = document.getElementById("audioStatus");
    const toggleTr = document.getElementById("toggleTranscriptBtn");
    const trBox = document.getElementById("transcriptBox");

    toggleTr.onclick = () => trBox.classList.toggle("hidden");
    stopBtn.onclick = () => {
      if (window.speechSynthesis) window.speechSynthesis.cancel();
      statusEl.textContent = "已停止";
    };

    playBtn.onclick = () => {
      if (!("speechSynthesis" in window)) {
        showToast("此瀏覽器不支援語音合成，請展開逐字稿閱讀。");
        trBox.classList.remove("hidden");
        return;
      }
      window.speechSynthesis.cancel();
      const lang = accentSel.value;
      const rate = parseFloat(rateSel.value);
      const voices = window.speechSynthesis.getVoices();
      const matchedVoice =
        voices.find((v) => v.lang.toLowerCase().startsWith(lang.toLowerCase())) ||
        voices.find((v) => v.lang.toLowerCase().startsWith("en"));

      // Split into sentences so long scripts don't get cut off by browser TTS limits
      const lines = stage.audioScript
        .split(/\n+/)
        .map((l) => l.replace(/^Speaker\s*[A-Z0-9]+:\s*/i, "").trim())
        .filter(Boolean);

      statusEl.textContent = "🔊 播放中...";
      lines.forEach((line, idx) => {
        const u = new SpeechSynthesisUtterance(line);
        u.lang = lang;
        u.rate = rate;
        if (matchedVoice) u.voice = matchedVoice;
        if (idx === lines.length - 1) {
          u.onend = () => { statusEl.textContent = "✅ 播放完畢"; };
        }
        window.speechSynthesis.speak(u);
      });
    };
  }

  // ==================== READING ====================
  function renderReadingBody(stage) {
    if (!stage.passage) {
      return renderQuestionsHtml(stage.questions);
    }
    return `
      <div class="split-pane">
        <div class="passage-pane">${stage.passage}</div>
        <div>${renderQuestionsHtml(stage.questions)}</div>
      </div>
    `;
  }

  // ==================== SHARED QUIZ ENGINE ====================
  function renderQuizBody(stage) {
    return renderQuestionsHtml(stage.questions);
  }

  function renderQuestionsHtml(questions) {
    const qHtml = (questions || [])
      .map((q, idx) => {
        let inputHtml = "";
        if (q.qType === "mcq" || q.qType === "multiselect") {
          const hint = q.qType === "multiselect" ? `<div class="skill-meta" style="margin-bottom:6px;">（複選題：請選出 2 個選項）</div>` : "";
          inputHtml =
            hint +
            `<div class="opt-list" data-qid="${q.id}" data-qtype="${q.qType}">` +
            (q.options || [])
              .map((opt) => {
                const letter = opt.trim().charAt(0).toUpperCase();
                return `<button type="button" class="opt-btn" data-letter="${letter}">${escapeHtml(opt)}</button>`;
              })
              .join("") +
            `</div>`;
        } else {
          inputHtml = `<input type="text" class="q-input" data-input-qid="${q.id}" placeholder="請輸入英文答案（注意拼字與單複數）..." autocomplete="off" />`;
        }
        return `
          <div class="q-card" id="qcard-${q.id}">
            <div class="q-prompt">Q${idx + 1}. ${escapeHtml(q.prompt)}</div>
            ${inputHtml}
            <div class="q-feedback hidden" id="qfb-${q.id}"></div>
          </div>`;
      })
      .join("");

    return `
      <div>${qHtml}</div>
      <div style="margin-top:14px; display:flex; align-items:center; gap:12px; flex-wrap:wrap;">
        <button class="btn btn-green" id="submitQuizBtn">✅ 送出並批改本關</button>
        <span id="quizScoreText" style="font-weight:800; font-size:15px;"></span>
      </div>
    `;
  }

  function bindQuizHandlers(stage, skillKey) {
    const answers = {};
    document.querySelectorAll(".opt-list").forEach((list) => {
      const qid = list.getAttribute("data-qid");
      const qtype = list.getAttribute("data-qtype");
      list.querySelectorAll(".opt-btn").forEach((btn) => {
        btn.onclick = () => {
          const letter = btn.getAttribute("data-letter");
          if (qtype === "multiselect") {
            if (!Array.isArray(answers[qid])) answers[qid] = [];
            if (answers[qid].includes(letter)) {
              answers[qid] = answers[qid].filter((x) => x !== letter);
              btn.classList.remove("selected");
            } else {
              answers[qid].push(letter);
              btn.classList.add("selected");
            }
          } else {
            answers[qid] = letter;
            list.querySelectorAll(".opt-btn").forEach((b) => b.classList.remove("selected"));
            btn.classList.add("selected");
          }
        };
      });
    });

    document.getElementById("submitQuizBtn").onclick = () => {
      let correctCount = 0;
      const total = stage.questions.length;

      stage.questions.forEach((q) => {
        let userVal = answers[q.id];
        if (q.qType === "input") {
          const inp = document.querySelector(`[data-input-qid="${q.id}"]`);
          userVal = inp ? inp.value : "";
        }
        const ok = checkAnswer(q, userVal);
        const card = document.getElementById(`qcard-${q.id}`);
        const fb = document.getElementById(`qfb-${q.id}`);
        card.classList.remove("correct", "wrong");
        card.classList.add(ok ? "correct" : "wrong");

        const ansDisplay = Array.isArray(q.answer) ? q.answer.join(" / ") : q.answer;
        if (ok) {
          correctCount++;
        } else {
          addMistake({
            id: q.id,
            skill: SKILL_META[skillKey].name,
            prompt: q.prompt,
            yourAnswer: Array.isArray(userVal) ? userVal.join(", ") : userVal || "（未作答）",
            correctAnswer: ansDisplay,
            explanation: q.explanation || "",
          });
        }

        fb.innerHTML = `
          <div><strong>${ok ? "✅ 答對！" : `❌ 答錯！正確答案：${escapeHtml(ansDisplay)}`}</strong></div>
          ${q.paraphrase ? `<div style="color:#1d4ed8; margin-top:4px;">🔁 <strong>同義替換：</strong>${escapeHtml(q.paraphrase)}</div>` : ""}
          ${q.evidence ? `<div style="color:#0f766e; margin-top:4px;">🔎 <strong>原文定位：</strong>${escapeHtml(q.evidence)}</div>` : ""}
          <div style="margin-top:4px;">💡 ${escapeHtml(q.explanation)}</div>
        `;
        fb.classList.remove("hidden");
      });

      const pct = total ? Math.round((correctCount / total) * 100) : 0;
      document.getElementById("quizScoreText").textContent = `得分：${correctCount} / ${total}（${pct}%）`;
      state.clearedStages[stage.id] = true;
      recordPractice(skillKey);
      addXP(correctCount * 20 + 20);
      const tr = document.getElementById("transcriptBox");
      if (tr) tr.classList.remove("hidden");
    };
  }

  // ==================== SPEAKING ====================
  function renderSpeakingBody(stage) {
    return (stage.tasks || [])
      .map(
        (t, idx) => `
        <div class="q-card" id="sp-${t.id}">
          <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:8px;">
            <span class="hud-pill">${escapeHtml(stage.part)}｜${escapeHtml(t.topic || "口說實戰")}</span>
            <span class="skill-meta">準備 ${t.prepSec} 秒 ／ 作答 ${t.speakSec} 秒</span>
          </div>
          <h3 style="margin:10px 0 6px;">Task ${idx + 1}: ${escapeHtml(t.question)}</h3>
          ${
            t.cuePoints && t.cuePoints.length
              ? `<div class="cue-card"><strong>You should say:</strong><ul style="margin:6px 0 0 18px;">${t.cuePoints
                  .map((c) => `<li>${escapeHtml(c)}</li>`)
                  .join("")}</ul></div>`
              : ""
          }
          <div style="font-size:13.5px; color:#1d4ed8; margin:8px 0;"><strong>📐 筆記答題公式：</strong>${escapeHtml(t.formula)}</div>
          <div style="font-size:13px; color:var(--muted);">點擊你已說出的目標加分字彙（語音辨識也會自動亮燈）：</div>
          <div class="vocab-chips" data-vocab-for="${t.id}">
            ${(t.targetVocab || []).map((v) => `<button type="button" class="vocab-chip" data-word="${escapeHtml(v.split("(")[0].trim().toLowerCase())}">${escapeHtml(v)}</button>`).join("")}
          </div>

          <div style="display:flex; flex-wrap:wrap; gap:8px; margin-top:12px;">
            <button class="btn btn-amber btn-sm" data-prep-btn="${t.id}" data-sec="${t.prepSec}">⏳ 開始準備倒數 (${t.prepSec}s)</button>
            <button class="btn btn-primary btn-sm" data-rec-btn="${t.id}" data-sec="${t.speakSec}">🎙️ 開始錄音＋語音轉文字 (${t.speakSec}s)</button>
            <button class="btn btn-red btn-sm hidden" data-stop-btn="${t.id}">⏹️ 停止錄音</button>
            <span id="sp-timer-${t.id}" style="font-weight:800; color:var(--primary-dark); align-self:center;"></span>
          </div>

          <div class="speech-box" id="sp-transcript-${t.id}" style="color:var(--muted);">🎙️ 按下「開始錄音」後，你的英文口說將即時顯示於此（若瀏覽器不支援語音辨識，仍可使用倒數與錄音回放）...</div>
          <audio id="sp-audio-${t.id}" controls class="hidden" style="width:100%; margin-top:8px;"></audio>

          <div style="margin-top:12px;">
            <button class="btn btn-outline btn-sm" data-sample-btn="${t.id}">👀 查看 Band 7.5+ 示範回答</button>
            <div id="sp-sample-${t.id}" class="q-feedback hidden" style="margin-top:8px;">
              <strong>示範回答：</strong><br/>${escapeHtml(t.sampleAnswer)}
            </div>
          </div>

          <ul class="checklist">
            ${(t.selfCheck || [])
              .map((c) => `<li><label><input type="checkbox" /> ${escapeHtml(c)}</label></li>`)
              .join("")}
          </ul>
          <button class="btn btn-green btn-sm" data-done-sp="${t.id}">✅ 完成此題打卡 (+40 XP)</button>
        </div>`
      )
      .join("");
  }

  function bindSpeakingHandlers(stage) {
    document.querySelectorAll(".vocab-chip").forEach((chip) => {
      chip.onclick = () => chip.classList.toggle("used");
    });

    document.querySelectorAll("[data-sample-btn]").forEach((btn) => {
      btn.onclick = () => {
        const id = btn.getAttribute("data-sample-btn");
        document.getElementById(`sp-sample-${id}`).classList.toggle("hidden");
      };
    });

    document.querySelectorAll("[data-prep-btn]").forEach((btn) => {
      btn.onclick = () => {
        clearInterval(speakCountdown);
        const id = btn.getAttribute("data-prep-btn");
        let left = parseInt(btn.getAttribute("data-sec"), 10);
        const el = document.getElementById(`sp-timer-${id}`);
        el.textContent = `準備倒數：${left}s`;
        speakCountdown = setInterval(() => {
          left--;
          if (left > 0) el.textContent = `準備倒數：${left}s`;
          else {
            clearInterval(speakCountdown);
            el.textContent = "🔔 準備時間到！請開始作答！";
          }
        }, 1000);
      };
    });

    document.querySelectorAll("[data-rec-btn]").forEach((btn) => {
      btn.onclick = async () => {
        stopMediaAndSpeech();
        const id = btn.getAttribute("data-rec-btn");
        const stopBtn = document.querySelector(`[data-stop-btn="${id}"]`);
        const trEl = document.getElementById(`sp-transcript-${id}`);
        const timerEl = document.getElementById(`sp-timer-${id}`);
        const audioEl = document.getElementById(`sp-audio-${id}`);
        let left = parseInt(btn.getAttribute("data-sec"), 10);

        stopBtn.classList.remove("hidden");
        trEl.style.color = "var(--text)";
        trEl.textContent = "🎙️ 正在聆聽中，請開始說英文...";
        timerEl.textContent = `作答剩餘：${left}s`;

        speakCountdown = setInterval(() => {
          left--;
          if (left > 0) timerEl.textContent = `作答剩餘：${left}s`;
          else {
            clearInterval(speakCountdown);
            timerEl.textContent = "⏰ 作答時間到！";
            stopBtn.click();
          }
        }, 1000);

        // 1. Speech-to-Text
        const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
        if (SR) {
          activeRecognition = new SR();
          activeRecognition.lang = "en-US";
          activeRecognition.continuous = true;
          activeRecognition.interimResults = true;
          let finalText = "";
          activeRecognition.onresult = (ev) => {
            let interim = "";
            for (let i = ev.resultIndex; i < ev.results.length; i++) {
              const txt = ev.results[i][0].transcript;
              if (ev.results[i].isFinal) finalText += txt + " ";
              else interim += txt;
            }
            const combined = (finalText + interim).trim();
            trEl.textContent = combined || "🎙️ 正在聆聽...";
            const lower = combined.toLowerCase();
            document.querySelectorAll(`[data-vocab-for="${id}"] .vocab-chip`).forEach((chip) => {
              const w = chip.getAttribute("data-word");
              if (w && lower.includes(w)) chip.classList.add("used");
            });
          };
          try { activeRecognition.start(); } catch {}
        }

        // 2. Audio Recording
        if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
          try {
            const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
            activeChunks = [];
            activeMediaRecorder = new MediaRecorder(stream);
            activeMediaRecorder.ondataavailable = (e) => { if (e.data.size > 0) activeChunks.push(e.data); };
            activeMediaRecorder.onstop = () => {
              const blob = new Blob(activeChunks, { type: "audio/webm" });
              audioEl.src = URL.createObjectURL(blob);
              audioEl.classList.remove("hidden");
              stream.getTracks().forEach((tr) => tr.stop());
            };
            activeMediaRecorder.start();
          } catch {
            // Mic permission denied or unavailable; countdown + manual practice still works
          }
        }

        stopBtn.onclick = () => {
          stopMediaAndSpeech();
          stopBtn.classList.add("hidden");
          timerEl.textContent = "✅ 已停止錄音";
        };
      };
    });

    document.querySelectorAll("[data-done-sp]").forEach((btn) => {
      btn.onclick = () => {
        state.clearedStages[stage.id] = true;
        recordPractice("speaking");
        addXP(40);
        btn.textContent = "✅ 已完成打卡";
        btn.disabled = true;
      };
    });
  }

  // ==================== WRITING SPRINT ====================
  function renderWritingSprintBody(stage) {
    const prompts = stage.sprintPrompts || [];
    const tabs = prompts
      .map((p, idx) => `<button class="stage-tab ${idx === 0 ? "active" : ""}" data-sp-tab="${idx}">${escapeHtml(p.label)}</button>`)
      .join("");
    return `
      <div class="stage-tabs" style="margin-bottom:14px;">${tabs}</div>
      <div id="sprintContainer"></div>
    `;
  }

  function bindWritingSprintHandlers(stage) {
    const prompts = stage.sprintPrompts || [];
    function renderPrompt(idx) {
      const p = prompts[idx];
      if (!p) return;
      let startTime = null;
      const box = document.getElementById("sprintContainer");
      box.innerHTML = `
        <div class="q-card">
          <div class="q-prompt">${escapeHtml(p.prompt)}</div>
          <div style="font-size:13px; color:var(--muted);">目標必用替換詞（打字命中會自動變綠）：</div>
          <div class="vocab-chips" id="wrKeyPhrases">
            ${(p.keyPhrases || []).map((k) => `<span class="vocab-chip" data-kp="${escapeHtml(k.toLowerCase())}">${escapeHtml(k)}</span>`).join("")}
          </div>
          <div class="sprint-stats">
            <div class="stat-badge" id="wrWords">字數：0 / ${p.targetWords} 字</div>
            <div class="stat-badge" id="wrWpm">打字速度：0 WPM（目標 ≥ ${p.targetWpm}）</div>
          </div>
          <textarea class="essay-area" id="wrEssay" placeholder="開始計時打字！目標 1 分鐘至少 20 字..."></textarea>
          <div style="margin-top:10px; display:flex; gap:10px; flex-wrap:wrap;">
            <button class="btn btn-outline btn-sm" id="wrModelBtn">👀 對照筆記範文</button>
            <button class="btn btn-green btn-sm" id="wrDoneBtn">✅ 完成微寫作打卡 (+50 XP)</button>
          </div>
          <div id="wrModelBox" class="q-feedback hidden" style="margin-top:10px;">
            <strong>📝 高分範文參考：</strong><br/>${escapeHtml(p.modelAnswer)}
          </div>
          <ul class="checklist">
            ${(p.checklist || []).map((c) => `<li><label><input type="checkbox" /> ${escapeHtml(c)}</label></li>`).join("")}
          </ul>
        </div>
      `;

      const area = document.getElementById("wrEssay");
      area.addEventListener("input", () => {
        if (!startTime) startTime = Date.now();
        const text = area.value.trim();
        const words = text ? text.split(/\s+/).length : 0;
        const mins = Math.max((Date.now() - startTime) / 60000, 0.15);
        const wpm = Math.round(words / mins);

        const wBadge = document.getElementById("wrWords");
        wBadge.textContent = `字數：${words} / ${p.targetWords} 字`;
        wBadge.classList.toggle("good", words >= p.targetWords);

        const wpmBadge = document.getElementById("wrWpm");
        wpmBadge.textContent = `打字速度：${wpm} WPM（目標 ≥ ${p.targetWpm}）`;
        wpmBadge.classList.toggle("good", wpm >= p.targetWpm && words >= 10);

        const lower = text.toLowerCase();
        document.querySelectorAll("#wrKeyPhrases .vocab-chip").forEach((el) => {
          const kp = el.getAttribute("data-kp");
          el.classList.toggle("used", lower.includes(kp));
        });
      });

      document.getElementById("wrModelBtn").onclick = () => {
        document.getElementById("wrModelBox").classList.toggle("hidden");
      };
      document.getElementById("wrDoneBtn").onclick = () => {
        state.clearedStages[stage.id] = true;
        recordPractice("writing");
        addXP(50);
      };
    }

    document.querySelectorAll("[data-sp-tab]").forEach((btn) => {
      btn.onclick = () => {
        document.querySelectorAll("[data-sp-tab]").forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");
        renderPrompt(parseInt(btn.getAttribute("data-sp-tab"), 10));
      };
    });
    renderPrompt(0);
  }

  // ==================== MISTAKE MODAL ====================
  function openMistakeModal() {
    renderMistakeModal();
    document.getElementById("mistakeModal").classList.remove("hidden");
  }

  function renderMistakeModal() {
    const body = document.getElementById("mistakeList");
    if (!state.mistakes.length) {
      body.innerHTML = `<p style="color:var(--muted); text-align:center; padding:24px;">目前沒有錯題！開始闖關後，答錯的題目會自動收錄在這裡。</p>`;
      return;
    }
    body.innerHTML = state.mistakes
      .map(
        (m) => `
        <div class="q-card wrong">
          <div style="display:flex; justify-content:space-between; align-items:center; gap:8px;">
            <span class="hud-pill">${escapeHtml(m.skill)}</span>
            <button class="btn btn-green btn-sm" data-mastered="${m.id}">✅ 我會了，移出錯題本</button>
          </div>
          <div class="q-prompt" style="margin-top:8px;">${escapeHtml(m.prompt)}</div>
          <div style="font-size:13.5px;">你的答案：<span style="color:var(--red);">${escapeHtml(m.yourAnswer)}</span> ｜ 正確答案：<strong style="color:var(--green);">${escapeHtml(m.correctAnswer)}</strong></div>
          <div style="font-size:13.5px; margin-top:4px;">💡 ${escapeHtml(m.explanation)}</div>
        </div>`
      )
      .join("");

    body.querySelectorAll("[data-mastered]").forEach((btn) => {
      btn.onclick = () => {
        removeMistake(btn.getAttribute("data-mastered"));
        addXP(10);
      };
    });
  }

  // ==================== REMINDER CHECKER ====================
  let lastNotifiedDate = null;
  setInterval(() => {
    if (!state.reminderEnabled || !("Notification" in window) || Notification.permission !== "granted") return;
    const now = new Date();
    const hhmm = `${String(now.getHours()).padStart(2, "0")}:${String(now.getMinutes()).padStart(2, "0")}`;
    const today = todayStr();
    if (hhmm === state.reminderTime && lastNotifiedDate !== today) {
      lastNotifiedDate = today;
      const plan = WEEKLY_PLAN.find((w) => w.dayIdx === now.getDay());
      new Notification("🎯 IELTS 每日 15 分鐘複習時間到了！", {
        body: plan ? `今日任務：${plan.text}` : "打開 IELTS 15-Min Quest 打卡拿 XP！",
      });
    }
  }, 30000);

  // ==================== INIT ====================
  document.getElementById("goHomeBtn").onclick = () => {
    currentView = { page: "home" };
    renderHome();
  };
  document.getElementById("timerToggleBtn").onclick = () => {
    if (timerInterval) pauseGlobalTimer();
    else startGlobalTimer(false);
  };
  document.getElementById("timerResetBtn").onclick = () => {
    pauseGlobalTimer();
    timerSeconds = 15 * 60;
    document.getElementById("timerDisplay").textContent = formatTime(timerSeconds);
  };
  document.getElementById("openMistakesBtn").onclick = openMistakeModal;
  document.getElementById("closeMistakesBtn").onclick = () => {
    document.getElementById("mistakeModal").classList.add("hidden");
  };

  // ==================== PASSCODE GATE ====================
  const UNLOCK_KEY = "ielts_15min_unlocked_v1";
  const PASSCODE = "ielts2026";
  function initLockScreen() {
    const lockEl = document.getElementById("lockScreen");
    if (!lockEl || localStorage.getItem(UNLOCK_KEY) === "1") return;
    lockEl.classList.remove("hidden");
    const inp = document.getElementById("passcodeInput");
    const err = document.getElementById("passcodeErr");
    const tryUnlock = () => {
      if ((inp.value || "").trim().toLowerCase() === PASSCODE) {
        localStorage.setItem(UNLOCK_KEY, "1");
        lockEl.classList.add("hidden");
        showToast("🔓 解鎖成功！祝今天練習順利！");
      } else {
        err.textContent = "密碼錯誤，請再試一次";
      }
    };
    document.getElementById("unlockBtn").onclick = tryUnlock;
    inp.addEventListener("keydown", (e) => { if (e.key === "Enter") tryUnlock(); });
  }

  updateHud();
  renderHome();
  initLockScreen();
})();
