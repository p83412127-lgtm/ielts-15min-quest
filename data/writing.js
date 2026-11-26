window.IELTS_DATA = window.IELTS_DATA || {};

window.IELTS_DATA.writing = [
  {
    id: "W1",
    title: "關卡 1：Sentence-Level Paraphrasing 同義改寫實戰",
    badge: "Paraphrasing",
    stageMode: "quiz",
    durationMin: 3,
    tipFromNotes: "Task 1 避免重複 shows / increased a lot / about！善用 illustrates、rose considerably、accounted for、approximately 與 Despite + V-ing/N 進行高分改寫。",
    questions: [
      {
        id: "W1-1",
        qType: "mcq",
        prompt: "Task 1 題幹為「The graph shows the number of tourists visiting three cities between 2000 and 2020.」，下列哪一句 Paraphrase 改寫最自然且完全沒有文法或搭配錯誤？",
        options: [
          "A. The graph illustrates to the figure for tourists visiting three cities from 2000 to 2020.",
          "B. The line graph presents data regarding how many tourists visited three cities over a twenty-year period.",
          "C. The line graph shows the number of tourists visiting three cities over a twenty-year periods.",
          "D. The chart provides information about tourists visited three cities between 2000 and 2020."
        ],
        answer: "B",
        explanation: "補帖 Paraphrasing 黃金法則：'shows the number of...' 可改寫為 'presents data regarding how many...' 或 'illustrates the figure for...'，且 'over a twenty-year period' 有冠詞 a，period 必用單數（排除 C）。A 錯在紅筆地雷 'illustrate to'（illustrate 為及物動詞，直接接受詞不加 to）；D 錯在少了關代或分詞結構（應為 tourists visiting）。"
      },
      {
        id: "W1-2",
        qType: "input",
        prompt: "請改寫學生手寫原誤句中的倍數表達：「Over the twenty-year period, the most significant growth was recorded in Country A, which [more than twice data].」請填入正確的 3 字動詞片語（全小寫）：",
        answer: ["more than doubled", "more than double"],
        explanation: "補帖折線圖高分句型與選詞精確度訂正：'more than twice data' 為中式英文誤寫，表「成長超過兩倍」應直接用動詞片語 'more than doubled'（過去式對應 Over the twenty-year period）；若用名詞比較結構則寫 'twice the number of...'。"
      },
      {
        id: "W1-3",
        qType: "mcq",
        prompt: "在 Pie Chart（圓餅圖）描述中，下列哪一句完全符合老師紅筆訂正後的高分精準選詞？",
        options: [
          "A. Food constituted the largest portion, accounting for about 35% of total spending.",
          "B. In contrast, transportation stands only a minimal share of the budget.",
          "C. The remaining categories each comprised less than 10%, indicating a relatively minor contribution.",
          "D. The rest categories each made up less than 10% of overall expenditure."
        ],
        answer: "C",
        explanation: "補帖 Pie Chart 6 大實戰句型紅筆訂正：'The remaining categories' 取代不自然的 'The rest categories'（排除 D）；'comprised / constituted / accounted for / made up / represented' 皆為必背佔比動詞。A 的 'about' 建議替換為學術詞 'approximately'；B 犯了兩個紅筆訂正錯誤：應將 'stands' 改為 'represented'，'minimal' 改為 'marginal'。"
      },
      {
        id: "W1-4",
        qType: "input",
        prompt: "請填入正確的 1 個讓步介系詞，完成再生能源折線圖進階考點句型：「________ starting at the lowest point, Country A rose steadily, surpassing Country B.」",
        answer: ["Despite", "despite"],
        explanation: "補帖折線圖讓步介系詞陷阱：'Despite + V-ing / N'（此處後方為動名詞片語 starting at the lowest point，故必填 Despite）。若使用 although / whereas / even though，後方必須接完整子句（S + V），不可直接接 V-ing。"
      },
      {
        id: "W1-5",
        qType: "mcq",
        prompt: "Task 2 寫作中，要將口語句「In my opinion, we should think about the bad points of automation.」改寫為高分學術表達，下列何者最符合補帖建議？",
        options: [
          "A. In my point of view, we must take into consideration of the shortcomings of automation.",
          "B. I strongly believe that we should take the drawbacks of automation into consideration.",
          "C. In my opinion, we cannot ignore the disadvantages of automation like mass unemployment.",
          "D. I am of the opinion that automation has bad points that we can not underestimate."
        ],
        answer: "B",
        explanation: "補帖 Task 2 鐵則與替換詞庫：1) 勿寫 'In my opinion / In my point of view'（老師批註：畫蛇添足，essay = opinion），直接用 'I strongly believe...' 或 'I am of the opinion that...'；2) 'take ... into consideration / account' 不加 of（排除 A）；3) 正式寫作不用口語 'like' 表舉例（排除 C，應改 such as）；4) 'cannot' 必須連寫不可拆成 'can not'（排除 D）。"
      }
    ]
  },
  {
    id: "W2",
    title: "關卡 2：Academic Task 1 全題型攻略",
    badge: "Task 1",
    stageMode: "quiz",
    durationMin: 3,
    tipFromNotes: "Task 1 絕對鐵則：No conclusions!! 審題先鎖定 What / When / Where，採三段式結構（Intro+Overview → Body 1 → Body 2），從大寫到小！",
    questions: [
      {
        id: "W2-1",
        qType: "mcq",
        prompt: "【Line Graph ＆ 通用架構避雷】關於 Academic Task 1 的結構與 Overview 寫法，下列哪一項敘述完全正確？",
        options: [
          "A. 為了讓文章完整，Task 1 最後一定要加上第 4 段 Conclusion，並推測數據上升的社會原因。",
          "B. Overview 越詳細越好，最好把每一年份的精確百分比都寫進去，以展現分析能力。",
          "C. 採標準三段式（Intro + Overview、Body 1、Body 2），Overview 只抓整體最顯著趨勢，絕對不寫個人意見或結論段。",
          "D. 數據描述應嚴格照年份由小到大逐一流水帳列出，不需要比較異同或分組。"
        ],
        answer: "C",
        explanation: "補帖紅筆重點警告：1) Task 1 'No conclusions!!' 絕不可寫結論段或主觀推測原因（排除 A）；2) 藍筆警語「Overview 不可寫太滿——這裡把大部分都寫了，後面沒得寫」，概覽段只抓最大特徵，細節數據留給主體段（排除 B）；3) 描述順序原則為「從大寫到小（明顯）→（細節）」，並須比較異同（排除 D）。"
      },
      {
        id: "W2-2",
        qType: "mcq",
        prompt: "【Bar Chart 紅筆修正】下列哪一句長條圖比較句型，完全符合老師紅筆訂正後的正確介系詞與固定搭配？",
        options: [
          "A. The bar chart compares the percentage of X in five different countries in 2020.",
          "B. Country A recorded the highest figures, Country D reported the lowest.",
          "C. Although the data between C and D were close, C outperformed D.",
          "D. Overall, the data reveal a clear dominance of urban areas over rural regions in all categories."
        ],
        answer: "D",
        explanation: "補帖 Bar Chart 6 大高分句型與紅筆修正：D 正確使用固定搭配 'dominance of A over B'（取代 than）及 'the data reveal'（data 為複數）。A 錯在應用 'among / across' 取代 'in'；B 為 Run-on sentence，紅筆要求補對比連接詞 'while / whereas'；C 紅筆訂正為 'the figures for C and D were comparable, C was slightly higher than D'。"
      },
      {
        id: "W2-3",
        qType: "mcq",
        prompt: "【Pie Chart 策略與格式】撰寫多組圓餅圖（如美國餐點營養素比例：晚餐在鈉與飽和脂肪最高、點心在添加糖最高）時，下列哪項寫作策略最符合補帖心法？",
        options: [
          "A. 依照「題目改寫 → Overview 交代極值與大方向 → 依相似特徵分組寫細節」撰寫，且非百分比或年份的數字 1~10 用英文拼字。",
          "B. 為了節省字數，在內文中盡量使用 don't、it's 等縮寫，並把 1~10 全部寫成阿拉伯數字。",
          "C. 把四個餐點的 3 張圓餅圖共 12 個百分比全部寫進 Overview，讓考官一眼看完。",
          "D. 在最後一段總結「美國人應該少吃晚餐和點心以維持健康」。"
        ],
        answer: "A",
        explanation: "補帖 Pie Chart 審題策略與全科鐵則：先歸納最大特徵寫進 Overview，再依相似特徵分組寫 Body 1 & 2；手寫提醒「1~10 用拼字的」（如 one, five, half）。B 違反「禁止縮寫」與數字拼字原則；C 違反「Overview 不可寫太滿」；D 違反 Task 1 客觀事實原則與「No conclusions!!」。"
      },
      {
        id: "W2-4",
        qType: "input",
        prompt: "【Process Diagram 流程圖紅筆禁忌】描述牛奶／農產品生產流程時，紅筆特別警告「不可用 manufactured」，應改用哪一個被動過去分詞？請填 1 個字完成句子：「The picture illustrates how milk is ________ through modern technology nowadays.」",
        answer: ["produced", "processed"],
        explanation: "補帖 Process Diagram 選詞紅筆禁忌：農產品／乳製品生產不可用 'manufactured'（多指工業工廠製造），必須使用 'produced'（生產）或 'processed'（加工）。同時留意流程圖以「物品／原料」為主詞，多用現在簡單式被動語態（is collected / is transferred / is produced）。"
      },
      {
        id: "W2-5",
        qType: "mcq",
        prompt: "【Map 地圖題時態與趨勢】題目比較某小鎮「1920 年」與「現今（today）」的變化，從原本的工業區轉型為現代住宅與服務區。下列哪一組寫法在時態與詞彙上最精準？",
        options: [
          "A. 兩張圖全部用過去簡單式；Overview 只寫「There are many changes in the town.」。",
          "B. 描述 1920 年舊貌用過去式，描述現況轉變用現在式或現在完成式（如 has been converted into），Overview 點出由 predominantly industrial zone 演變為 more residential and service-oriented area。",
          "C. 描述現況用未來式（will be replaced by），並且在 Body 2 忽略完全沒有變動的建築物。",
          "D. 用 'been convert into' 描述改建，並在最後一段評論該鎮的都市更新非常成功。"
        ],
        answer: "B",
        explanation: "補帖 Map 時態鐵則與架構公式：過去年份用過去式、現況用現在式或現在完成式（強調變化結果：has replaced / has been converted into）、未來規劃才用未來式；Overview 必須點出整體定位轉變（如 leisure-oriented → function-oriented 或 industrial → residential and service-oriented）；Body 2/3 也要簡述維持不變的設施（A-B 同）。D 錯在漏寫被動 -ed（應為 been converted into）且加了個人評論。"
      }
    ]
  },
  {
    id: "W3",
    title: "關卡 3：Task 2 三明治架構與論點展開",
    badge: "Task 2",
    stageMode: "quiz",
    durationMin: 2,
    tipFromNotes: "Task 2 佔 2/3 分數、目標 300 字↑ 衝 7 分！先花 3-5 分鐘畫 Mind Map，每個 Body Paragraph 只有一個 Controlling idea，嚴守三明治寫法！",
    questions: [
      {
        id: "W3-1",
        qType: "mcq",
        prompt: "【審題與結構】面對雙邊討論題「Discuss both these views and give your own opinion.」，下列哪一種 40 分鐘規劃最符合補帖標準四段式架構？",
        options: [
          "A. 全文只寫自己支持的那一邊（三個理由），另一邊觀點在結論一句帶過即可。",
          "B. 先花 3-5 分鐘畫 Mind Map 展開雙邊觀點；P1 改寫題目＋立場＋Thesis Statement，P2 討論觀點 A，P3 討論觀點 B（並融入己方立場與讓步反駁），P4 總結並重申立場，字數衝 300 字↑。",
          "C. P1 到 P3 全部客觀中立討論兩邊，直到最後一句才說「兩邊都有道理，看個人選擇」。",
          "D. 為了湊滿 250 字，每個主體段塞入 3 到 4 個彼此無關的論點，不做舉例說明。"
        ],
        answer: "B",
        explanation: "補帖 Task 2 雙邊討論題架構公式：必須完整回應「討論雙邊觀點＋給出明確個人立場」（排除 A、C），標準四段式為 Intro（restate Q → Your stand → Thesis Statement）→ Body 1 (A) → Body 2 (B + 讓步反駁) → Conclusion（Summary + Reinforce stand）。學生手寫目標「7 分要 300 字↑」，且每段只聚焦一個核心重點（排除 D）。"
      },
      {
        id: "W3-2",
        qType: "mcq",
        prompt: "【Introduction 改寫與標點】下列哪一組 Task 2 引言段句子，完整呈現「背景導入 → 正反觀點 → Thesis Statement」且標點與用字完全零失誤？",
        options: [
          "A. It is often argued that social media isolates individuals, however, others maintain that it strengthens connectivity.",
          "B. The question of whether automation helps or harms society has sparked heated debate. In my opinion, it's drawbacks are huge.",
          "C. It is often argued that social media isolates individuals; however, others maintain that it strengthens global connectivity. This essay will argue that although it has some benefits, the drawbacks are far more significant.",
          "D. Although social media strengthens connectivity, but it isolates individuals. This essay will discuss it."
        ],
        answer: "C",
        explanation: "補帖 Introduction 萬用句型與紅筆標點：C 正確使用 '; however,' 連接兩個獨立子句，並以 'This essay will argue that although..., the drawbacks ... are far more significant.' 清楚宣告 Thesis Statement。A 犯了 comma splice（however 前須用分號）；B 誤用 'In my opinion' 與所有格 'it's'（應為 its）；D 犯了紅筆大叉 'Although ... but' 連接詞重複。"
      },
      {
        id: "W3-3",
        qType: "mcq",
        prompt: "【Body Paragraph 三明治寫法】關於單段主體段的「三明治寫法」與論點展開公式，下列何者敘述最正確？",
        options: [
          "A. 每段必須只有一個 Controlling idea，依序由 Topic Sentence → Support（用 explain / details / examples / facts 展開）→ Conclusion Sentence 組成，並可善用 'A compelling illustration of this can be seen in...' 舉例。",
          "B. Topic Sentence 應該放在段落最後一句，前面先講故事製造懸疑感。",
          "C. 承認對方觀點時，只要寫出對方的優點就好，不需要用 'but this argument fails to take into account...' 轉折拉回己方立場。",
          "D. 為了增加字數，Support 1、2、3 可以直接用不同字把 Topic Sentence 重複抄寫三遍。"
        ],
        answer: "A",
        explanation: "補帖紅筆強調：每個 Body Paragraph「每段都只有一個重點（Controlling idea）」，遵循三明治結構：Topic Sentence（點題）→ Support 1, 2, 3（透過 explain / details / examples / facts 具體展開，搭配遞進、因果、讓步反駁或舉例公式）→ Conclusion Sentence（收束回扣主題）。"
      },
      {
        id: "W3-4",
        qType: "mcq",
        prompt: "【Conclusion 結論段寫法】下列哪一句最符合補帖 Task 2 結論段公式（含藍筆圈選介系詞與高分警語結構）？",
        options: [
          "A. In conclusion, while there are valid arguments in both sides, I think government should do something. Also, nuclear energy is another totally new issue we should discuss.",
          "B. In conclusion, while there are valid arguments on both sides, I am of the opinion that environmental protection must take precedence. Unless immediate action is taken, the situation is likely to deteriorate further.",
          "C. To sum up, because economic growth is important, so we cannot ignore it.",
          "D. In conclusion, don't underestimate the importance of education, which is a very actual problem."
        ],
        answer: "B",
        explanation: "補帖 Conclusion 萬用公式：1) 藍筆特別圈選介系詞 'arguments on both sides'（不是 in，排除 A）；2) 結論段應 Summarize points → Reinforce your stand → Further thought（如 Unless 條件句＋deteriorate 惡化），絕不應引入全新論點（排除 A）；3) 排除 C 的 'because ... so' 重複連接詞；4) 排除 D 的縮寫 'don't' 與中式英文 'very actual problem'（應改 pressing/current problem）。"
      }
    ]
  },
  {
    id: "W4",
    title: "關卡 4：Sentence Corrections 文法改錯 Boss 戰",
    badge: "Grammar Boss",
    stageMode: "quiz",
    durationMin: 2,
    tipFromNotes: "直擊 21 堂課 Sentence-Corrections 與紅筆錯題精華：意志動詞假設語氣、不可數名詞、懸垂分詞、比較對象對等與倒裝縮寫陷阱，一題都不能放過！",
    questions: [
      {
        id: "W4-1",
        qType: "input",
        prompt: "【★ 紅筆大星星：意志動詞假設語氣】請訂正以下講義原題的錯誤動詞（填寫 1 個正確動詞，不含 should）：「The law requires that everyone [retires] at 65.」",
        answer: ["retire"],
        explanation: "補帖 05 紅筆大星星 ★＋綠螢光筆框選公式（Aug.19 Q10）：要求（ask, require）／命令（order, demand）／建議（advise, suggest）／主張 + that + S + (should) + V原。即使主詞是第三人稱單數 everyone，動詞也絕對不可加 -s，必須用原形 'retire'！"
      },
      {
        id: "W4-2",
        qType: "mcq",
        prompt: "【不可數名詞 ＆ 主詞動詞一致】下列哪一句在名詞可數性（advice / happiness / research / findings）與主詞動詞一致上完全正確？",
        options: [
          "A. Recent researches have provided many useful advices on how to pursue happinesses.",
          "B. People jogging in the park is twice what it was five years ago.",
          "C. The number of students studying abroad is expected to drop sharply, according to recent research findings.",
          "D. The drawbacks of mass unemployment is far more significant than the benefits."
        ],
        answer: "C",
        explanation: "補帖 05 主詞動詞一致與名詞單複數整理：1) 'advice / happiness / laughter / research / nourish' 皆為不可數名詞不可加 s，而 'findings'（研究發現）一定要用複數（排除 A）；2) 'People' 為複數不可配 is，須在句首補 'The number of people ... is'（排除 B）；3) 'The number of + 複數名詞' 必配單數動詞 is（C 完全正確！）；4) 'The drawbacks' 為複數主詞，動詞須用 are（排除 D）。"
      },
      {
        id: "W4-3",
        qType: "mcq",
        prompt: "【與過去相反假設語氣 ＆ 倒裝陷阱】請選出講義原題「Hadn't I seen it, I wouldn't have believed it.」最符合學術寫作的正確改法：",
        options: [
          "A. Hadn't I seen it, I would not have believed it.",
          "B. Had I not seen it, I would not have believed it.",
          "C. If I didn't see it, I wouldn't have believed it.",
          "D. If I had not seen it, I never have believed it."
        ],
        answer: "B",
        explanation: "補帖 05 假設語氣紅筆公式：1) 省略 If 倒裝時，'not' 絕對不可與 'Had' 縮寫提前（不可寫 Hadn't I），必須寫 'Had I not'，且寫作全文禁縮寫（wouldn't → would not）；2) 與過去事實相反公式為 'If S + had + Vpp..., S + would/could/might + have + Vpp'（排除時態混亂的 C 與漏掉 would 的 D）。"
      },
      {
        id: "W4-4",
        qType: "mcq",
        prompt: "【★ 懸垂分詞 ＆ 平行結構】講義原題「In assessing the problems, the question arises as to whether to withhold goods is taking advantage of consumers.」包含兩處經典文法錯誤，下列哪一句完全修正？",
        options: [
          "A. In assessing the problems, the question arises as to whether to withhold goods is to take advantage of consumers.",
          "B. In an assessment of the problems, the question arises as to whether to withhold goods is to take advantage of consumers.",
          "C. In an assessment of the problems, the question arises as to whether withholding goods is to take advantage of consumers.",
          "D. Assessing the problems, the question arises as to whether to withhold goods is taking advantage of consumers."
        ],
        answer: "B",
        explanation: "補帖 05 紅筆大星兩大考點合一：1) 避免懸垂分詞——無生命主詞 'the question' 不能執行 'assessing' 動作，須改為名詞片語 'In an assessment (evaluation) of the problems'（排除 A、D）；2) 主詞補語平行對稱——'To V ... is to V ...' 或 'V-ing ... is V-ing ...'，不可混搭（排除 C）。"
      },
      {
        id: "W4-5",
        qType: "input",
        prompt: "【綠螢光筆＋紅筆：倍數比較結構】請補齊講義原題漏掉的 1 個關鍵字（全小寫）：「Small startups are half ________ likely to succeed as established corporations.」",
        answer: ["as"],
        explanation: "補帖 05 比較級倍數結構（綠螢光筆＋紅筆）：固定公式為「倍數 + as + adj./adv. + as」（half as likely to succeed as...），漏掉第一個 'as' 是考場最常見的扣分陷阱！同時複習比較對象須對等（如 than those of Taiwan corporations、than in rural areas、than ... did）。"
      },
      {
        id: "W4-6",
        qType: "mcq",
        prompt: "【高頻介系詞、被動語態與中式英文避雷】下列四個句子皆改編自講義與學生紅筆訂正，請問哪一句「完全正確」沒有任何錯誤？",
        options: [
          "A. The most noticeable change can observed in Category X, which rose nearly 40%.",
          "B. Many people fail to take into consideration of the vital fact that language diversity is essential.",
          "C. I could not help but realizing that we had run out from time.",
          "D. People differ in their attitudes toward technology, and we should be impressed with its rapid progress."
        ],
        answer: "D",
        explanation: "補帖 05 高頻介系詞與慣用語訂正：D 的 'differ in their attitudes' 與星號必背 'be impressed with'（取代 impressed by）皆完全正確！A 漏掉被動語態 be（應為 can be observed）；B 多了介系詞 of（應為 take ... into consideration）；C 錯兩處：'could not help but + V原'（realize）且「用完」為 'run out of'（不是 from）。"
      }
    ]
  },
  {
    id: "W5",
    title: "關卡 5：5 分鐘微寫作衝刺（含 WPM 打字速度檢測）",
    badge: "Mini-Writing",
    stageMode: "sprint",
    durationMin: 5,
    tipFromNotes: "手寫提醒：打字練 30 分打完、目標 1 分鐘 20 字（WPM ≥ 20），Task 2 衝 7 分要 300 字↑！Task 1 絕對不寫個人結論（No conclusions!!），全文禁止縮寫（cannot 連寫）！",
    sprintPrompts: [
      {
        id: "W5-1",
        label: "Task 1 — 再生能源折線圖 Intro + Overview",
        prompt: "The line graph below shows the percentage of electricity generated from renewable energy sources in three countries (Country A, Country B, and Country C) between 2000 and 2020. （數據提示：2000 年 A 國最低僅 5%、B 國 15%、C 國 20%；至 2020 年三國皆上升，但速率差異顯著：A 國劇烈飆升並超越 B 國達 45%，C 國穩定成長至 50% 居冠，B 國後期趨於平緩停在 25%。）\n\n請在 5 分鐘內寫出一段「題目改寫 (Introduction) ＋ 整體趨勢 (Overview)」，目標 60 字以上、WPM ≥ 20。",
        targetWords: 60,
        targetWpm: 20,
        keyPhrases: ["illustrates", "overall", "considerably", "surpassing", "despite"],
        modelAnswer: "The line graph illustrates the proportion of electricity produced from renewable sources across three countries over a twenty-year period from 2000 to 2020. Overall, while all three nations witnessed upward trends in green energy reliance, the rate of growth varied considerably. Notably, despite starting at the lowest point, Country A demonstrated the most dramatic surge, surpassing Country B, whereas Country C maintained its leading position throughout the period.",
        checklist: [
          "已改寫題目 (What / When / Where)，避免照抄 shows / percentage",
          "已寫出整體最顯著趨勢 (Overall) 且沒有把細節數據寫太滿",
          "沒有加入個人意見或結論段 (No conclusions!!)",
          "時態完全對應 2000–2020 年份（使用過去簡單式）",
          "全文零縮寫，且正確使用 despite + V-ing 或 surpassing 等高分詞組"
        ]
      },
      {
        id: "W5-2",
        label: "Task 2 — 議論文 Body Paragraph（三明治結構）",
        prompt: "題目：Some people believe that university students should study whatever subject they are interested in, while others argue that they should focus on practical subjects that lead to better job opportunities. Discuss both views and give your own opinion.\n\n請參考筆記心智圖（enthusiasm → the best、diverse → 避免社會停滯 standstill；或 practical → salary / country prosperity），在 5 分鐘內以「三明治結構」寫出其中一個 Body Paragraph（單一核心論點），目標 90 字以上、WPM ≥ 20。",
        targetWords: 90,
        targetWpm: 20,
        keyPhrases: ["in favor of", "furthermore", "direct consequence", "compelling illustration", "take into account"],
        modelAnswer: "One of the primary arguments in favor of allowing students to pursue their own interests is that genuine enthusiasm drives academic excellence and innovation. When undergraduates study subjects they are passionate about, higher creativity is a direct consequence of their intrinsic motivation, which in turn leads to breakthroughs across diverse fields. Furthermore, the impact of intellectual diversity extends beyond individual career satisfaction, preventing society from falling into stagnation as well. A compelling illustration of this can be seen in interdisciplinary fields such as design and technology, where arts graduates have revolutionized user experience. Although proponents of practical majors emphasize immediate employability, this argument fails to take into account the long-term value of a diverse workforce.",
        checklist: [
          "本段只聚焦一個核心論點 (Controlling idea)",
          "符合三明治結構：Topic Sentence → Support / Example → Concluding / Concession Sentence",
          "套用至少 2 組筆記高分論證公式（如 in favor of / extends beyond / compelling illustration / fails to take into account）",
          "全文零縮寫（cannot 連寫）、無 In my opinion、無 although...but / because...so",
          "檢查主詞動詞單複數一致，以及個人易錯拼字（sustainable / environmental / noticeable）"
        ]
      }
    ]
  }
];
