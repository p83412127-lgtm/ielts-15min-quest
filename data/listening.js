window.IELTS_DATA = window.IELTS_DATA || {};

window.IELTS_DATA.listening = [
  {
    id: "L1",
    title: "Form & Note Completion：社區攝影俱樂部報名",
    badge: "Section 1",
    durationMin: 3,
    accent: "en-GB",
    tipFromNotes: "Section 1 必先圈字數限制（如 ONE WORD ONLY 寫大 1，連字號複合字如 self-employed 算一字）；小心郵遞區號字母確認（P Papa vs B Bravo）、自我修正日期，以及可數名詞空格前無 a/an 時必查複數 -s！",
    audioScript: "Speaker A: Good morning, Riverside Photography Club. How can I help you?\nSpeaker B: Hi, I'd like to register for the autumn workshop. My surname is Carter, and my postcode is DG7 4PH—that's P for Papa, not B for Bravo.\nSpeaker A: Got it, DG7 4PH. And what is your current occupation? We ask for our membership form.\nSpeaker B: I used to work at a local agency, but since January I've been self-employed.\nSpeaker A: Lovely. For the outdoor sessions, you won't need tripods, as we lend those out, though members must bring their own cameras—ideally two if you have a spare.\nSpeaker B: No problem. Does the course start on the 12th of November?\nSpeaker A: That was the original schedule, actually, but we've pushed it back one week, so we'll begin on the 19th of November instead.",
    mapSvg: "",
    questions: [
      {
        id: "L1-1",
        qType: "input",
        prompt: "Postcode: ______（填入完整郵遞區號，注意字母發音確認）",
        options: [],
        answer: ["DG7 4PH", "DG74PH"],
        paraphrase: "P for Papa, not B for Bravo → 精準區分字母 P 與 B",
        explanation: "筆記高頻考點：Section 1 常考英式郵遞區號（如講義範例 DG7 4PH）與無線電字母確認（P Papa vs B Bravo）。聽到 not B 立刻排除 B，填寫 DG7 4PH。"
      },
      {
        id: "L1-2",
        qType: "input",
        prompt: "Current occupation: ______（ONE WORD ONLY，注意紅筆拼字地雷）",
        options: [],
        answer: ["self-employed"],
        paraphrase: "since January I've been self-employed → current occupation（目前職業）",
        explanation: "紅筆錯題重現（W6 Q40）：曾誤拼為 self-employeed（多了一個 e）。連字號複合詞 self-employed 在 IELTS 計為 1 個字，符合 ONE WORD ONLY 限制；同時排除過去式干擾項 local agency。"
      },
      {
        id: "L1-3",
        qType: "input",
        prompt: "Equipment members must bring: their own ______（ONE WORD ONLY）",
        options: [],
        answer: ["cameras"],
        paraphrase: "must bring their own cameras → 必帶裝備（排除俱樂部出借的 tripods）",
        explanation: "紅筆最高頻失分點（W8 Q37）：漏寫複數 -s！空格前為 their own（無 a/an），且原音明確讀出複數 cameras（並補充 ideally two），切勿寫成單數 camera；tripods 為否定干擾項（won't need）。"
      },
      {
        id: "L1-4",
        qType: "input",
        prompt: "Workshop start date: ______（NO MORE THAN TWO WORDS AND/OR A NUMBER）",
        options: [],
        answer: ["19th November", "19 November", "November 19", "November 19th"],
        paraphrase: "pushed it back one week, so we'll begin on the 19th of November → start date",
        explanation: "經典自我修正干擾項：先拋出原本的日期 12th of November（original schedule），隨即以 actually / but 轉折延後一週，最終確認開課日為 19th November。"
      }
    ]
  },
  {
    id: "L2",
    title: "Map & Location Labeling：Minster Park 園區導覽",
    badge: "Section 2",
    durationMin: 3,
    accent: "en-AU",
    tipFromNotes: "地圖題口訣「1. 找位子（Orientation 基準點）→ 2. 跟著動線走」。先圈起點地標（Lily Pond、River、Crawley Road、West/East/South Gate）與指北針，抓緊 sharp bend、right-angle bend、close proximity 等方位訊號！",
    audioScript: "Speaker A: Welcome to Minster Park. Before you explore, let's get our bearings on the map. We're standing at the South Gate on Crawley Road, with the River along the northern edge and the Lily Pond right in the centre. First, our famous stone statue is located immediately to the north of the Lily Pond, almost in the middle of the park. If you enjoy art, walk in from the East Gate until the path makes a sharp bend near the river bank—you'll spot the new wooden sculptures right there. For active visitors, the tennis courts are still in the south-west corner, right beside the right-angle bend in the path. Finally, the old tea kiosk near the bushes was knocked down last year, so our new park café now sits in the south-east, facing the junction in close proximity to Crawley Road.",
    mapSvg: "<svg viewBox='0 0 420 260' xmlns='http://www.w3.org/2000/svg' style='width:100%;max-width:460px;height:auto;border-radius:10px;border:1px solid #cbd5e1;background:#eef6ec;font-family:system-ui,sans-serif;'><rect x='0' y='0' width='420' height='34' fill='#bae6fd'/><text x='210' y='22' text-anchor='middle' font-size='13' font-weight='700' fill='#0369a1'>River</text><rect x='0' y='226' width='420' height='34' fill='#cbd5e1'/><text x='210' y='248' text-anchor='middle' font-size='13' font-weight='700' fill='#334155'>Crawley Road</text><g stroke='#ffffff' stroke-width='8' fill='none' stroke-linecap='round' stroke-linejoin='round'><path d='M12 134 L174 134'/><path d='M210 226 L210 156'/><path d='M115 134 L115 62'/><path d='M115 134 L115 198 L58 198'/><path d='M408 134 L322 62 L246 134'/><path d='M210 188 L340 188'/></g><g stroke='#94a3b8' stroke-width='1.2' stroke-dasharray='4 3' fill='none'><path d='M12 134 L174 134'/><path d='M210 226 L210 156'/><path d='M115 134 L115 62'/><path d='M115 134 L115 198 L58 198'/><path d='M408 134 L322 62 L246 134'/><path d='M210 188 L340 188'/></g><ellipse cx='210' cy='134' rx='36' ry='22' fill='#93c5fd' stroke='#2563eb' stroke-width='2'/><text x='210' y='138' text-anchor='middle' font-size='11' font-weight='700' fill='#1e3a8a'>Lily Pond</text><circle cx='144' cy='174' r='9' fill='#86efac'/><circle cx='158' cy='168' r='10' fill='#4ade80'/><circle cx='171' cy='175' r='8' fill='#86efac'/><text x='158' y='160' text-anchor='middle' font-size='9' fill='#166534'>Bushes</text><g transform='translate(34,64)'><circle cx='0' cy='0' r='16' fill='#ffffff' stroke='#64748b' stroke-width='1.5'/><line x1='0' y1='10' x2='0' y2='-7' stroke='#0f172a' stroke-width='2'/><polygon points='0,-12 -4,-4 4,-4' fill='#ef4444'/><text x='0' y='26' text-anchor='middle' font-size='10' font-weight='700' fill='#0f172a'>N ↑</text></g><text x='42' y='124' text-anchor='middle' font-size='10' font-weight='700' fill='#475569'>West Gate</text><text x='376' y='124' text-anchor='middle' font-size='10' font-weight='700' fill='#475569'>East Gate</text><text x='210' y='221' text-anchor='middle' font-size='10' font-weight='700' fill='#475569'>South Gate</text><g font-size='12' font-weight='700' text-anchor='middle'><circle cx='115' cy='62' r='12' fill='#1e293b'/><text x='115' y='66' fill='#ffffff'>A</text><circle cx='210' cy='86' r='12' fill='#1e293b'/><text x='210' y='90' fill='#ffffff'>B</text><circle cx='322' cy='54' r='12' fill='#1e293b'/><text x='322' y='58' fill='#ffffff'>C</text><circle cx='68' cy='198' r='12' fill='#1e293b'/><text x='68' y='202' fill='#ffffff'>D</text><circle cx='158' cy='192' r='12' fill='#1e293b'/><text x='158' y='196' fill='#ffffff'>E</text><circle cx='340' cy='188' r='12' fill='#1e293b'/><text x='340' y='192' fill='#ffffff'>F</text></g></svg>",
    questions: [
      {
        id: "L2-1",
        qType: "mcq",
        prompt: "根據導覽音檔，石雕像（stone statue）位於地圖上哪個位置？",
        options: ["A. 位置 A", "B. 位置 B", "C. 位置 C", "D. 位置 D", "E. 位置 E", "F. 位置 F"],
        answer: "B",
        paraphrase: "immediately to the north of the Lily Pond, almost in the middle → 緊鄰蓮花池正北方",
        explanation: "補帖實戰原題拆解（Minster Park）：先鎖定中央地標 Lily Pond，正上方（北方）緊鄰且位於園區中央的位置即為 B。"
      },
      {
        id: "L2-2",
        qType: "mcq",
        prompt: "木雕作品（wooden sculptures）位於地圖上哪個位置？",
        options: ["A. 位置 A", "B. 位置 B", "C. 位置 C", "D. 位置 D", "E. 位置 E", "F. 位置 F"],
        answer: "C",
        paraphrase: "from the East Gate ... sharp bend near the river bank → 東門小徑靠近河岸的急轉彎處",
        explanation: "跟著動線走：從右側 East Gate 往內走，小徑在北側 River 河岸處形成一個 sharp bend（急轉彎），正對應該處的位置 C。"
      },
      {
        id: "L2-3",
        qType: "mcq",
        prompt: "網球場（tennis courts）位於地圖上哪個位置？",
        options: ["A. 位置 A", "B. 位置 B", "C. 位置 C", "D. 位置 D", "E. 位置 E", "F. 位置 F"],
        answer: "D",
        paraphrase: "south-west corner ... right-angle bend in the path → 西南角直角轉彎旁",
        explanation: "鎖定方位 south-west（西南角）與路形訊號 right-angle bend（直角轉彎），左下角直角彎道旁即為位置 D。"
      },
      {
        id: "L2-4",
        qType: "mcq",
        prompt: "新的公園咖啡廳（new park café）位於地圖上哪個位置？",
        options: ["A. 位置 A", "B. 位置 B", "C. 位置 C", "D. 位置 D", "E. 位置 E", "F. 位置 F"],
        answer: "F",
        paraphrase: "south-east, facing the junction in close proximity to Crawley Road → 東南方、緊鄰馬路",
        explanation: "避開拆除干擾項：灌木叢旁的舊茶亭（位置 E）已被 knocked down（拆除 = demolished）；新 café 位於東南方（south-east），且 in close proximity to（非常接近，螢光筆重點）Crawley Road，故選 F。"
      }
    ]
  },
  {
    id: "L3",
    title: "Multiple Choice & Attitude Trap：城市鳥類研究討論",
    badge: "Section 3",
    durationMin: 3,
    accent: "en-GB",
    tipFromNotes: "單選四大陷阱：①時間線年份混淆（2013/2015/2016）；②Previously（舊觀念）vs we discovered（新發現）；③態度強度（don't...at all 完全反對、dubious=doubtful）；④情緒同義替換（hesitant=reluctant）。",
    audioScript: "Speaker A: Maya, let's check our timeline for the urban wildlife report. The city survey was drawn up in 2013 and revised in 2015, right?\nSpeaker B: Yes, though fieldwork only finally got going in 2016. Also, make sure we highlight the navigation section. Previously, biologists assumed city pigeons navigated using their beaks, yet our study discovered they actually rely on tiny sensors in the middle ear.\nSpeaker A: Brilliant. To save time, should we omit the methodology slides?\nSpeaker B: I'm dubious about that—actually, I don't like the sound of that at all. The tutor expects full details.\nSpeaker A: Fair enough. How did you find the phone interviews with local residents?\nSpeaker B: To be honest, I was quite hesitant at first, because I feared people would hang up. Yet the sound quality was fine and most calls lasted over thirty minutes, so I'm keen to expand them.",
    mapSvg: "",
    questions: [
      {
        id: "L3-1",
        qType: "mcq",
        prompt: "When did the fieldwork for the city wildlife survey actually begin?",
        options: [
          "A. In 2013",
          "B. In 2015",
          "C. In 2016"
        ],
        answer: "C",
        paraphrase: "finally got going in 2016 → actually begin（真正展開）",
        explanation: "補帖經典時間線陷阱：依序唸出 2013（drawn up 起草）與 2015（revised 修訂），必須聽清動作動詞，直到 2016 才出現 got going（正式動工/開始）。"
      },
      {
        id: "L3-2",
        qType: "mcq",
        prompt: "According to the new study, what do urban pigeons rely on to navigate?",
        options: [
          "A. Receptors located in their beaks",
          "B. Sensors inside their middle ear",
          "C. Visual landmarks along main roads"
        ],
        answer: "B",
        paraphrase: "Previously (old) → beak（干擾項）；we discovered (NEW) → middle ear（正解）",
        explanation: "W4 Script D 藍筆重點：聽到 Previously 立刻警覺那是過去的錯誤認知（beaks 為干擾項），轉折後聽到 our study discovered 才是新發現正解（middle ear）。"
      },
      {
        id: "L3-3",
        qType: "mcq",
        prompt: "What is Maya's reaction to Liam's suggestion to leave out the methodology slides?",
        options: [
          "A. She agrees up to a point",
          "B. She is strongly opposed to the idea",
          "C. She wants to ask the tutor first"
        ],
        answer: "B",
        paraphrase: "omit → leave out；I don't like the sound of that at all → strongly opposed",
        explanation: "W3 態度強弱三級分類：螢光筆必背片語 I don't like the sound of that at all 代表「完全不同意（Complete disagreement）」，且題幹將原音 omit 同義替換為 leave out。"
      },
      {
        id: "L3-4",
        qType: "mcq",
        prompt: "How did Maya feel initially about conducting the telephone interviews?",
        options: [
          "A. Reluctant",
          "B. Enthusiastic",
          "C. Annoyed by the poor sound quality"
        ],
        answer: "A",
        paraphrase: "hesitant at first → initially reluctant（起初猶豫、不情願）",
        explanation: "態度同義配對＋時間限定詞：題幹問 initially（起初），原音為 hesitant at first（= reluctant）。B 選項 enthusiastic（對應 keen）是後來的態度；C 選項已被 sound quality was fine 明確排除。"
      }
    ]
  },
  {
    id: "L4",
    title: "Matching & Multi-select：商管簡報修改與雙選題",
    badge: "Section 3",
    durationMin: 3,
    accent: "en-US",
    tipFromNotes: "配對題項目會依序出現，重心先看懂選項關鍵字；Section 3 最常出現「A 先提案、B 隨即推翻」陷阱，務必聽到最後共識！複選題則要逐一聽清否定與轉折，切忌只抓單一關鍵字。",
    audioScript: "Speaker A: Chloe, let's finalize the changes to our business presentation. For the Introduction, I thought we could focus on social justice across the wider economy.\nSpeaker B: No, that's way too general. Let's cross out the broad overview and tailor it specifically to one entrepreneur's story.\nSpeaker A: Good call. What about the Literature Review? Should we cut it down?\nSpeaker B: Rather the opposite—the tutor said it's too brief, so we need to add recent case studies on mergers and takeovers.\nSpeaker A: Right. And for the Conclusion, we've already verified all our sources, so instead of rechecking references, let's make sure we have current data.\nSpeaker B: Agreed. Before we wrap up, which two factors made small firms most vulnerable in the survey? Surprisingly, high taxes weren't the main barrier, and staff turnover was minimal. What really hurt them was strict government bureaucracy and poor digital infrastructure.",
    mapSvg: "",
    questions: [
      {
        id: "L4-1",
        qType: "mcq",
        prompt: "【配對題】Introduction（前言）— 兩人最終決定如何修改？",
        options: [
          "A. Focus on broad social justice trends",
          "B. Adjust it to centre on a single individual's case",
          "C. Reduce the overall length",
          "D. Verify all academic sources again"
        ],
        answer: "B",
        paraphrase: "tailor it specifically to one entrepreneur's story → adjust it to centre on a single individual's case",
        explanation: "先提後推翻陷阱（比照 Bleak House 筆記）：A 先提 social justice，B 立刻否決（No, too general）並說 cross out（刪去），最後達成共識 tailor（= adjust/modify）成單一企業家的故事。"
      },
      {
        id: "L4-2",
        qType: "mcq",
        prompt: "【配對題】Literature Review（文獻回顧）— 兩人最終決定如何修改？",
        options: [
          "A. Shorten the section significantly",
          "B. Leave out all commercial examples",
          "C. Expand it with up-to-date corporate merger cases",
          "D. Reorder the references chronologically"
        ],
        answer: "C",
        paraphrase: "Rather the opposite ... add recent case studies on mergers and takeovers → expand with up-to-date corporate merger cases",
        explanation: "轉折訊號 rather the opposite（相反而不是這樣）：排除 A 提議的 cut it down（縮短），改為補充最新併購（mergers and takeovers）案例。"
      },
      {
        id: "L4-3",
        qType: "mcq",
        prompt: "【配對題】Conclusion（結論）— 兩人最終決定做什麼？",
        options: [
          "A. Double-check the accuracy of their references",
          "B. Ensure the statistics included are up to date",
          "C. Add a new questionnaire for consumers",
          "D. Remove the final summary table"
        ],
        answer: "B",
        paraphrase: "already verified all our sources → 排除 A；make sure we have current data → ensure statistics are up to date",
        explanation: "補帖原題思維重現：學生常誤選 check sources，但原音明確說 already verified all our sources（已完成驗證），最終決定確認最新數據（current data）。"
      },
      {
        id: "L4-4",
        qType: "multiselect",
        prompt: "【五選二複選題】Which TWO factors made small firms most vulnerable according to the survey?（請選出兩個選項）",
        options: [
          "A. Excessive corporate taxation",
          "B. Rigid administrative bureaucracy",
          "C. High employee turnover rates",
          "D. Inadequate digital infrastructure",
          "E. Lack of consumer interest"
        ],
        answer: ["B", "D"],
        paraphrase: "strict government bureaucracy → rigid administrative bureaucracy；poor digital infrastructure → inadequate digital infrastructure",
        explanation: "排除否定干擾項：high taxes weren't the main barrier（排除 A）、staff turnover was minimal（排除 C）、E 未提及。同時複習紅筆商管高頻字 bureaucracy（官僚制度，Q16-Q3）與 infrastructure（基礎建設，Q6-Q4）。"
      }
    ]
  },
  {
    id: "L5",
    title: "Section 4 Academic Lecture Spelling Boss：乾旱農業與生態保育",
    badge: "Section 4",
    durationMin: 3,
    accent: "en-GB",
    tipFromNotes: "Section 4 紅筆鐵則：①講者唸到答案字會放慢語速；②填空題必須填「原音原詞」，絕對不可自行同義改寫（如把 legislation 改成 regulation）；③最後務必逐字檢查拼字（variety、extinction、moist）與複數（-s/-es）！",
    audioScript: "Speaker A: Today's lecture examines how arid regions are restoring degraded farmland while safeguarding native wildlife. First, policy reform proved vital. Rather than relying on voluntary guidelines, the government passed strict national legislation to limit groundwater extraction. Second, engineers redesigned water delivery. By installing underground drip irrigation pipes, farmers can keep the top layer of soil sufficiently moist even during prolonged droughts, cutting evaporation dramatically. Third, agronomists focused on biodiversity. This study found that planting a wider variety of drought-tolerant native grasses stabilizes loose topsoil far better than single-crop fields. Finally, ecologists noted that these green corridors also serve as breeding shelters for wild bees, effectively preventing the local extinction of crucial pollinators.",
    mapSvg: "",
    questions: [
      {
        id: "L5-1",
        qType: "input",
        prompt: "Policy reform: Government passed strict national ______ to restrict groundwater use.（ONE WORD ONLY）",
        options: [],
        answer: ["legislation"],
        paraphrase: "limit groundwater extraction → restrict groundwater use；原音原詞為 legislation",
        explanation: "紅筆痛點重現（W6 Q35）：音檔原詞是 legislation（立法），絕對不可自行同義替換成 regulation 或 law！填空題必須嚴格填寫聽到的原字。"
      },
      {
        id: "L5-2",
        qType: "input",
        prompt: "Water delivery: Drip irrigation keeps the upper soil sufficiently ______ during droughts.（ONE WORD ONLY）",
        options: [],
        answer: ["moist"],
        paraphrase: "top layer of soil → upper soil；prolonged droughts → droughts",
        explanation: "紅筆拼字地雷（W10A Q35）：曾誤拼為 moised，正解為形容詞 moist（潮濕的），注意字尾是 -st 而非 -sed；同時空格前為副詞 sufficiently，預判必填形容詞。"
      },
      {
        id: "L5-3",
        qType: "input",
        prompt: "Biodiversity findings: Growing a greater ______ of native grasses stabilizes topsoil.（ONE WORD ONLY）",
        options: [],
        answer: ["variety"],
        paraphrase: "This study found that ... planting a wider variety → growing a greater variety",
        explanation: "紅筆拼字地雷（W10A Q36）：曾漏寫字母 e 而誤拼為 varity，正確拼法為 variety（v-a-r-i-e-t-y）。同時聽到 This study found that... 即為實驗重點 finding 訊號！"
      },
      {
        id: "L5-4",
        qType: "input",
        prompt: "Ecological impact: Green corridors help prevent the local ______ of pollinators.（ONE WORD ONLY）",
        options: [],
        answer: ["extinction"],
        paraphrase: "effectively preventing the local extinction → help prevent the local extinction",
        explanation: "紅筆近音混淆地雷（W4 Q2）：曾因發音相近誤聽寫成 exhibiton（exhibition），務必結合語意「阻止授粉昆蟲在當地滅絕」確認為 extinction（e-x-t-i-n-c-t-i-o-n）。"
      }
    ]
  }
];
