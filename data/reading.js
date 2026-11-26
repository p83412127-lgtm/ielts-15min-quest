window.IELTS_DATA = window.IELTS_DATA || {};
window.IELTS_DATA.reading = [
  {
    id: "R1",
    title: "T/F/NG 與 Y/N/NG 陷阱判別：數位時代的博物館",
    badge: "T/F/NG",
    durationMin: 3,
    tipFromNotes: "補帖口訣：T/F/NG 核對「客觀事實」，Y/N/NG 核對「作者觀點（先看贊成/反對 → 再看細節）」。紅筆界線：原文有明確相反或矛盾才是 FALSE / NO；若原文只提年份或現象、沒提資料蒐集時間或兩者關聯，果斷選 NOT GIVEN，切忌腦補！",
    passage: "<h3>Museums in Transition: Steering a Narrow Course</h3><p><strong>[A]</strong> For over two centuries, national museums were regarded as infallible repositories of historical testimony, presenting physical artifacts behind glass cases to a largely passive audience. In 1995, a comprehensive survey revealed that the majority of visitors spent fewer than thirty seconds examining any single display. Since then, institutions have faced mounting pressure to modernise their galleries by introducing interactive screens and immersive digital prototypes.</p><p><strong>[B]</strong> Critics, however, express deep scepticism about this shift, warning that an over-reliance on entertainment risks the vulgarisation of serious scholarship. Whilst digital reconstructions can undoubtedly broaden public access, their appeal is often transient unless anchored in rigorous research. Defenders of traditional curation argue that tactile replicas cannot replace the authentic resonance of original objects.</p><p><strong>[C]</strong> Nevertheless, the debate should not be framed as a rigid choice between academic integrity and popular engagement. Museums must steer a narrow course: harnessing technology to clarify complex context whilst refusing to compromise scholarly standards. In fact, recent visitor findings indicate that when interactive tools are thoughtfully integrated rather than treated as mere spectacles, public comprehension of historical evidence improves substantially. Ultimately, institutions that neglect either accessibility or academic rigour jeopardize their long-term cultural relevance.</p>",
    questions: [
      {
        id: "R1-1",
        qType: "mcq",
        prompt: "[T/F/NG] The data for the 1995 museum visitor survey was collected over a five-year period.",
        options: ["A. TRUE", "B. FALSE", "C. NOT GIVEN"],
        answer: "C",
        evidence: "In 1995, a comprehensive survey revealed that the majority of visitors spent fewer than thirty seconds examining any single display.",
        explanation: "經典紅筆地雷（對照 8/28 Environment Q28）：原文只提到 1995 年發布調查結果，完全沒有提及資料蒐集的時間長度或起點。沒有矛盾證據不可誤判 FALSE，應果斷選 NOT GIVEN。"
      },
      {
        id: "R1-2",
        qType: "mcq",
        prompt: "[T/F/NG] According to the 1995 survey, most visitors spent over half a minute looking at each exhibit.",
        options: ["A. TRUE", "B. FALSE", "C. NOT GIVEN"],
        answer: "B",
        evidence: "...the majority of visitors spent fewer than thirty seconds examining any single display.",
        explanation: "原文明確指出大多數訪客（the majority = most）在單一展品（display = exhibit）前停留「少於 30 秒（fewer than thirty seconds）」，與題幹「超過半分鐘（over half a minute）」直接矛盾，故選 FALSE。"
      },
      {
        id: "R1-3",
        qType: "mcq",
        prompt: "[T/F/NG] Critics doubt whether entertainment-focused exhibits can maintain high academic standards.",
        options: ["A. TRUE", "B. FALSE", "C. NOT GIVEN"],
        answer: "A",
        evidence: "Critics, however, express deep scepticism about this shift, warning that an over-reliance on entertainment risks the vulgarisation of serious scholarship.",
        explanation: "同義替換精準對應：doubt ↔ scepticism（質疑，8/28 Q35 紅筆高頻詞）；over-reliance on entertainment risks the vulgarisation of serious scholarship（過度依賴娛樂恐使嚴肅學術庸俗化），與題幹完全相符，故選 TRUE。"
      },
      {
        id: "R1-4",
        qType: "mcq",
        prompt: "[Y/N/NG] The writer believes that well-designed interactive features can enhance visitors' understanding of history.",
        options: ["A. YES", "B. NO", "C. NOT GIVEN"],
        answer: "A",
        evidence: "In fact, recent visitor findings indicate that when interactive tools are thoughtfully integrated rather than treated as mere spectacles, public comprehension of historical evidence improves substantially.",
        explanation: "套用 Y/N/NG 紅筆兩步法「看贊成/反對 → 看細節」：作者以 In fact（補充強調）引出研究發現，肯定妥善整合（thoughtfully integrated）的互動工具能大幅提升公眾對歷史證據的理解（comprehension improves substantially），立場明確贊同，選 YES。"
      },
      {
        id: "R1-5",
        qType: "mcq",
        prompt: "[Y/N/NG] In the writer's view, museums should prioritise scholarly rigour even if it means sacrificing public accessibility.",
        options: ["A. YES", "B. NO", "C. NOT GIVEN"],
        answer: "B",
        evidence: "Museums must steer a narrow course: harnessing technology to clarify complex context whilst refusing to compromise scholarly standards. ... institutions that neglect either accessibility or academic rigour jeopardize their long-term cultural relevance.",
        explanation: "作者主張博物館必須謹慎平衡（steer a narrow course），並明確指出忽略「普及性（accessibility）」或「學術嚴謹度（academic rigour）」任一方都會危及長期價值，與題幹「為學術而犧牲普及性」直接相反，故選 NO。"
      }
    ]
  },
  {
    id: "R2",
    title: "Matching Headings 段落主旨配對：潮汐能源開發",
    badge: "Headings",
    durationMin: 3,
    tipFromNotes: "補帖口訣：「挑標題 → 大綱 (last)」，用 Skimming 快速抓各段首句主題句與轉折詞（Whilst / Nevertheless / Consequently），寫下左欄 1–3 字摘要。★ 7/17 紅筆黃金避雷：「不選干擾項的原因是結尾句，看主題句就好！」切勿被段尾延伸細節誤導。",
    passage: "<h3>Tidal Power: Harnessing Ocean Energy</h3><p><strong>[A]</strong> Unlike wind and solar generation, which suffer from unpredictable weather fluctuations, tidal energy relies on the gravitational pull of the moon and sun. Consequently, coastal engineers can forecast electricity output decades in advance with remarkable precision. This reliability makes tidal streams an attractive cornerstone for national grids seeking to mitigate carbon emissions. In northern Scotland, for instance, submerged turbines are anchored at depths of roughly 40 metres to capture fast-moving currents.</p><p><strong>[B]</strong> Whilst the theoretical potential of ocean currents is tremendous, harsh marine environments pose formidable technical hurdles. Saltwater salinity accelerates metal corrosion, compelling engineers to use costly, durable alloys that can withstand relentless underwater pressure. Moreover, routine maintenance requires specialised vessels that can only operate during brief windows of calm seas, further escalating operational expenditure.</p><p><strong>[C]</strong> Beyond financial constraints, conservationists have raised serious concerns regarding the ecological repercussions of large-scale tidal barrages. Altering natural water circulation can disrupt sediment accumulation, thereby jeopardizing intertidal habitats that migratory birds depend on for feeding. Although newer open-rotor designs aim to minimise harm to aquatic wildlife, long-term environmental impact assessments remain fragmented. Some coastal communities have also voiced nostalgic attachment to traditional fishing routes used by their ancestors.</p><p><strong>[D]</strong> Nevertheless, recent breakthroughs in modular turbine design are gradually improving the commercial viability of marine renewables. Thanks to lighter composite blades and streamlined underwater cabling, installation costs have halved over the past decade in pilot projects. Combined with stringent government decarbonisation targets and targeted subsidies, tidal power is poised to transition from experimental prototypes into a mainstream contributor to global energy security.</p>",
    questions: [
      {
        id: "R2-1",
        qType: "mcq",
        prompt: "Choose the correct heading for Paragraph [A].",
        options: [
          "A. i. The unmatched predictability of ocean-based power",
          "B. ii. Ideal underwater depths for Scottish wind farms",
          "C. iii. Why solar energy has superseded tidal technology",
          "D. iv. Historical origins of gravitational astronomy"
        ],
        answer: "A",
        evidence: "Unlike wind and solar generation, which suffer from unpredictable weather fluctuations, tidal energy relies on the gravitational pull of the moon and sun. Consequently, coastal engineers can forecast electricity output decades in advance...",
        explanation: "首句對比風能、太陽能的不穩定，接著用結論詞 Consequently 點出潮汐能可提前數十年精準預測（forecast ... with remarkable precision），主旨為 A。選項 B 只抓段尾蘇格蘭水深 40 公尺的補充例子（且錯置為 wind farms），正是 7/17 紅筆警告的「結尾句陷阱」！"
      },
      {
        id: "R2-2",
        qType: "mcq",
        prompt: "Choose the correct heading for Paragraph [B].",
        options: [
          "A. i. Solutions for preventing underwater metal corrosion",
          "B. ii. Technical and financial barriers in marine environments",
          "C. iii. The rapid decline in vessel maintenance expenses",
          "D. iv. Comparing saltwater salinity across global oceans"
        ],
        answer: "B",
        evidence: "Whilst the theoretical potential of ocean currents is tremendous, harsh marine environments pose formidable technical hurdles. ... further escalating operational expenditure.",
        explanation: "遇到轉折詞 Whilst（7/24 紅筆重點：可表轉折），重心在後半句：嚴酷海洋環境帶來巨大的技術阻礙（formidable technical hurdles），後面再用 Moreover 補充營運成本攀升（escalating operational expenditure），完美對應 B。"
      },
      {
        id: "R2-3",
        qType: "mcq",
        prompt: "Choose the correct heading for Paragraph [C].",
        options: [
          "A. i. The preservation of ancestral coastal fishing customs",
          "B. ii. Proven methods for restoring intertidal bird sanctuaries",
          "C. iii. Potential threats to coastal ecosystems and marine life",
          "D. iv. Why open-rotor turbines have eliminated all ecological risks"
        ],
        answer: "C",
        evidence: "Beyond financial constraints, conservationists have raised serious concerns regarding the ecological repercussions of large-scale tidal barrages.",
        explanation: "主題句清楚指出保育人士對潮汐壩生態後果（ecological repercussions，Quiz 5 紅筆訂正詞）與潮間帶棲地（intertidal habitats）的憂慮，故選 C。選項 A 僅來自最後一句的漁民情感延伸，務必用「看主題句就好」口訣排除！"
      },
      {
        id: "R2-4",
        qType: "mcq",
        prompt: "Choose the correct heading for Paragraph [D].",
        options: [
          "A. i. Why government subsidies failed to lower energy prices",
          "B. ii. Technological advances and policy backing driving future adoption",
          "C. iii. The complete replacement of fossil fuels within five years",
          "D. iv. Limitations of composite materials in deep-sea cabling"
        ],
        answer: "B",
        evidence: "Nevertheless, recent breakthroughs in modular turbine design are gradually improving the commercial viability... Combined with stringent government decarbonisation targets and targeted subsidies, tidal power is poised to transition...",
        explanation: "段首轉折 Nevertheless 引出正向發展：技術突破（breakthroughs）讓安裝成本減半（halved = 50%），加上政府減碳目標與補助（subsidies），推動潮汐能邁向主流應用，對應 B。"
      }
    ]
  },
  {
    id: "R3",
    title: "五選二複選與單選題：資訊理論與夏農",
    badge: "複選+單選",
    durationMin: 3,
    tipFromNotes: "補帖口訣：五選二（Choose TWO）務必圈出 TWO 與定位段，「複數題答案高度集中於同一段的列舉結構（如 First... Second...）」。四選一單選題則「先看 Q 再看文章（一題一題看）」，特別留意比例換算（halved = 50%、quarter = 25%）與同義替換！",
    passage: "<h3>Information Theory: From Noise to Clarity</h3><p><strong>[A]</strong> In 1948, mathematician Claude Shannon published a groundbreaking paper that laid the foundation for modern digital communication. Rather than focusing on the emotional meaning of a message, Shannon treated information as a measurable quantity transmitted by means of binary digits, or bits. Despite the tremendous impact of his work on telecommunications, Shannon famously shunned public acclaim, preferring to spend his time tinkering with mechanical gadgets in his workshop.</p><p><strong>[B]</strong> A central insight of Shannon's framework was how to safeguard signals against interference—what engineers call \"noise\"—without wasting bandwidth. First, he demonstrated that ordinary human languages contain substantial redundancy, meaning certain letters or words can be omitted without destroying comprehension. Second, he proved that by adding carefully structured error-correcting codes, engineers could transmit data reliably even through noisy channels, preventing sudden system failure in deep-space probes.</p><p><strong>[C]</strong> Subsequent compression algorithms applied these principles to practical media transmission. In one landmark 1970s experiment, researchers successfully halved the volume of data required to relay satellite images back to Earth while maintaining visual clarity. However, Shannon himself cautioned against overstating the reach of his equations, warning that applying information theory indiscriminately to psychology or sociology risked distorting its mathematical precision.</p>",
    questions: [
      {
        id: "R3-1",
        qType: "multiselect",
        prompt: "Choose TWO letters, A–E. Which TWO key principles from Paragraph [B] did Shannon establish regarding signal transmission?",
        options: [
          "A. Everyday languages include extra elements that can be left out safely.",
          "B. Emotional meaning is the primary factor determining data speed.",
          "C. Error-correcting codes allow dependable transmission across noisy channels.",
          "D. Deep-space probes require twice as much bandwidth as terrestrial radios.",
          "E. Noise can be completely eliminated by removing all binary digits."
        ],
        answer: ["A", "C"],
        evidence: "First, he demonstrated that ordinary human languages contain substantial redundancy, meaning certain letters or words can be omitted without destroying comprehension. Second, he proved that by adding carefully structured error-correcting codes, engineers could transmit data reliably even through noisy channels...",
        explanation: "套用 7/31 紅筆五選二心法：答案集中於 [B] 段 First... Second... 列舉處。A 精準替換 redundancy（冗餘 → extra elements）與 omitted（省略 → left out，9/11 考點詞）；C 對應 error-correcting codes 與 reliably（→ dependable）。"
      },
      {
        id: "R3-2",
        qType: "mcq",
        prompt: "What was the outcome of the 1970s satellite image experiment described in Paragraph [C]?",
        options: [
          "A. Image quality dropped by a quarter during transmission.",
          "B. Data volume was reduced by 50% without sacrificing clarity.",
          "C. Satellite probes stopped working after applying compression.",
          "D. Transmission speed doubled only when visual clarity was omitted."
        ],
        answer: "B",
        evidence: "In one landmark 1970s experiment, researchers successfully halved the volume of data required to relay satellite images back to Earth while maintaining visual clarity.",
        explanation: "8/7 紅筆必背數量換算：halved（減半）＝ reduced by 50%！且 maintaining visual clarity 對應 without sacrificing clarity。選項 A 的 a quarter（25%）與 C 的 stopped working（failure）皆為錯誤干擾。"
      },
      {
        id: "R3-3",
        qType: "mcq",
        prompt: "Why did Shannon warn against using information theory in fields like psychology or sociology?",
        options: [
          "A. He believed social scientists lacked basic mathematical training.",
          "B. He felt it could undermine the mathematical accuracy of his theory.",
          "C. He wanted to avoid receiving public acclaim from non-engineers.",
          "D. He argued that human behaviour contains no measurable redundancy."
        ],
        answer: "B",
        evidence: "...cautioned against overstating the reach of his equations, warning that applying information theory indiscriminately to psychology or sociology risked distorting its mathematical precision.",
        explanation: "鎖定 [C] 段尾句：overstating（誇大 = exaggerate）與 risked distorting its mathematical precision（恐扭曲其數學精確性），同義替換為 B 的 undermine the mathematical accuracy。選項 C 屬移花接木 [A] 段的 shunned acclaim。"
      }
    ]
  },
  {
    id: "R4",
    title: "Summary / Gap-Fill 填空題：拉戈梅拉島哨語",
    badge: "Summary 填空",
    durationMin: 3,
    tipFromNotes: "補帖口訣：動筆前雙底線圈出字數上限（NO MORE THAN ONE WORD），檢查「① 疑問詞／語意 ② 詞性 ③ 單複數」！先依定位詞鎖定段落，「段落中沒出現 → 先跳」。抄寫原文單字務必逐字母核對，提防 radio/ratio 筆誤與 findings 必加複數 -s！",
    passage: "<h3>Silbo Gomero: The Whistled Language of La Gomera</h3><p><strong>[A]</strong> On the steep volcanic island of La Gomera in the Canary Islands, deep ravines historically made everyday travel arduous and slow. To overcome this rugged topography, local inhabitants developed Silbo Gomero, a whistled form of Spanish capable of carrying messages across distances of up to five kilometres. Rather than relying on an independent vocabulary, Silbo translates spoken syllables into distinct pitches and rhythms, allowing shepherds to coordinate livestock movements or warn neighbours of approaching hazards.</p><p><strong>[B]</strong> During the late twentieth century, however, the proliferation of paved roads and mobile phones caused daily usage of the whistled code to decline sharply. Fearing the permanent demise of this cultural heritage, the regional government intervened in 1999 by making Silbo a mandatory subject in every local primary school. Recent linguistic findings reveal that the brain processes whistled speech in the same regions used for spoken language, demonstrating remarkable cognitive adaptability. Thanks to compulsory education and UNESCO recognition, the tradition now thrives among younger generations.</p>",
    questions: [
      {
        id: "R4-1",
        qType: "input",
        prompt: "Write NO MORE THAN ONE WORD from the passage: Because deep valleys made travel difficult on La Gomera, residents created a whistled communication system to overcome the island's challenging ________.",
        options: [],
        answer: ["topography"],
        evidence: "To overcome this rugged topography, local inhabitants developed Silbo Gomero...",
        explanation: "空格前為形容詞 challenging（↔ rugged 崎嶇的），故須填入名詞。定位 [A] 段 overcome，原詞為 Quiz 15 地質必考字 topography（地形），限填一字。"
      },
      {
        id: "R4-2",
        qType: "input",
        prompt: "Write NO MORE THAN ONE WORD from the passage: Instead of having its own set of words, Silbo converts spoken ________ into varying musical tones and beats.",
        options: [],
        answer: ["syllables"],
        evidence: "Rather than relying on an independent vocabulary, Silbo translates spoken syllables into distinct pitches and rhythms...",
        explanation: "同義替換定位：Instead of ↔ Rather than、converts ↔ translates、musical tones and beats ↔ pitches and rhythms。空格在 spoken 之後需填複數名詞 syllables（音節），抄寫時留意雙 l 與複數 s。"
      },
      {
        id: "R4-3",
        qType: "input",
        prompt: "Write NO MORE THAN ONE WORD from the passage: To prevent the disappearance of this tradition, authorities made Silbo a ________ course in local elementary schools in 1999.",
        options: [],
        answer: ["mandatory", "compulsory"],
        evidence: "Fearing the permanent demise of this cultural heritage, the regional government intervened in 1999 by making Silbo a mandatory subject in every local primary school.",
        explanation: "空格夾在 a 與名詞 course（↔ subject）之間，需填形容詞。以年份 1999 與 primary school（↔ elementary schools）定位，原文精準答案為 mandatory（必修的、強制的；同段末句 compulsory 亦表強制）。"
      },
      {
        id: "R4-4",
        qType: "input",
        prompt: "Write NO MORE THAN ONE WORD from the passage: Modern linguistic ________ show that human brains handle whistled signals in the exact same areas as spoken words.",
        options: [],
        answer: ["findings"],
        evidence: "Recent linguistic findings reveal that the brain processes whistled speech in the same regions used for spoken language...",
        explanation: "7/10 課堂手寫特別提醒：findings（研究發現 = conclusions / results）一定要用複數！此處後方動詞 show（↔ reveal）為複數形態，正好雙重驗證必加 -s。"
      }
    ]
  },
  {
    id: "R5",
    title: "Paraphrase Speed-Match：閱讀考點詞同義替換閃電戰",
    badge: "同義替換",
    durationMin: 3,
    tipFromNotes: "補帖核心：IELTS Reading 的本質就是「同義替換」與「邏輯訊號判讀」！本關直接取材自 7/8 閱讀考點詞庫（#1–380）、7/24 轉折語紅筆訂正與 Quiz 紅筆高頻錯題，訓練看到原詞 3 秒內秒反應同義詞的考場反射力。",
    passage: "",
    questions: [
      {
        id: "R5-1",
        qType: "mcq",
        prompt: "【380 閱讀考點詞庫】在學術閱讀中，若題幹出現 \"a distinctive trait\"，原文最可能替換為下列哪一個表達？",
        options: [
          "A. a notable property",
          "B. a minor hindrance",
          "C. a fleeting rumour",
          "D. an arbitrary sanction"
        ],
        answer: "A",
        evidence: "trait (n. 特徵) ↔ property / characteristic / feature（7/8 講義螢光筆特別劃記）",
        explanation: "trait（特徵、屬性）在雅思閱讀中極常與 property（性質、特質，亦為 Quiz 12-Q15 紅筆訂正詞）互換。B 為阻礙、C 為短暫傳言、D 為武斷制裁。"
      },
      {
        id: "R5-2",
        qType: "mcq",
        prompt: "【8/28 真題紅筆錯題】原文寫到專家對環境預測抱持 \"deep scepticism\"，題幹選項最常同義改寫為？",
        options: [
          "A. enthusiastic acclaim",
          "B. strong criticism and doubt",
          "C. complete apathy",
          "D. immediate ratification"
        ],
        answer: "B",
        evidence: "scepticism ↔ doubtfulness / criticism（8/28 Environment Q35 紅筆訂正）",
        explanation: "8/28 Q35 曾因漏抓 scepticism（懷疑態度）＝ criticism（質疑批評）而選錯選項。A 為讚揚、C 為冷漠、D 為批准。"
      },
      {
        id: "R5-3",
        qType: "mcq",
        prompt: "【7/24 轉折語紅筆訂正】下列哪一組 Cohesive Devices 在閱讀中皆表示「對比／轉折（Contrast）」關係？",
        options: [
          "A. consequently / to illustrate this",
          "B. moreover / indeed",
          "C. whilst / nonetheless",
          "D. hence / owing to"
        ],
        answer: "C",
        evidence: "對比／轉折：although, despite, whilst, nonetheless（7/24 紅筆強調：whilst 也可以當轉折語！）",
        explanation: "7/24 紅筆訂正重點：whilst 除「同時」外常作轉折語，與 nonetheless 同屬 Contrast。A 為結論＋舉例（to illustrate this 是舉例非結論！）、B 為補充強調、D 為因果。"
      },
      {
        id: "R5-4",
        qType: "mcq",
        prompt: "【9/4 段落配對紅筆錯題】題幹要求找出 \"an account of how children develop self-awareness\"，原文對應的核心動詞應為？",
        options: [
          "A. calculate",
          "B. mimic",
          "C. explain",
          "D. omit"
        ],
        answer: "C",
        evidence: "account (for / of) ↔ explain（9/4 Sense of identity Q14 紅筆訂正）",
        explanation: "9/4 Q14 曾因沒反應出 account ＝ explain（解釋、說明）而誤選段落。B mimic 是模仿（↔ imitation）、D omit 是省略（↔ leave out）。"
      },
      {
        id: "R5-5",
        qType: "mcq",
        prompt: "【Quiz 1 & 2 雙重紅筆錯題】原文形容某條件是 \"paramount\" 或 \"indispensable\"，其精準同義替換為？",
        options: [
          "A. marginal and trivial",
          "B. vital and essential",
          "C. optional and redundant",
          "D. transient and superficial"
        ],
        answer: "B",
        evidence: "paramount / indispensable ↔ vital / crucial / essential / imperative（反義：marginal / trivial / optional）",
        explanation: "paramount（至關重要的）與 indispensable（不可或缺的）在 Quiz 1、2、9 皆曾誤選反義詞 marginal / trivial / optional，考前務必把整串核心正向替換詞背熟。"
      },
      {
        id: "R5-6",
        qType: "mcq",
        prompt: "【Quiz 1 紅筆錯題】環境類文章常見 \"mitigate the adverse effects\"，下列何者為最精準的同義替換？",
        options: [
          "A. exacerbate the harmful impacts",
          "B. trigger the negative outcomes",
          "C. alleviate the detrimental impacts",
          "D. neglect the severe repercussions"
        ],
        answer: "C",
        evidence: "mitigate ↔ alleviate / reduce（減輕）；adverse ↔ detrimental / harmful（負面的）",
        explanation: "Quiz 1-Q10 曾誤選 trigger（觸發）；mitigate 意為「減輕、緩解」，同義詞為 alleviate / reduce。A 的 exacerbate 是反義詞「惡化」。"
      },
      {
        id: "R5-7",
        qType: "mcq",
        prompt: "【Quiz 9 紅筆大字標記「錯」】原文形容某種社會現象相當 \"pervasive\"（或 \"ubiquitous\"），下列何者為同義替換？",
        options: [
          "A. widespread and prevalent",
          "B. fleeting and transitory",
          "C. fragmented and scarce",
          "D. static and stagnant"
        ],
        answer: "A",
        evidence: "pervasive / ubiquitous ↔ widespread / prevalent / rife / rampant（對比：fleeting / transient 短暫的）",
        explanation: "Quiz 9-Q14 曾誤將 pervasive（普遍的、無所不在的）選成反義／干擾詞 fleeting（短暫的）。務必分清：普遍＝pervasive / ubiquitous / widespread；短暫＝fleeting / transient / ephemeral。"
      },
      {
        id: "R5-8",
        qType: "mcq",
        prompt: "【380 閱讀考點詞庫】原文寫 \"the term was coined by a linguist in 1960\"，題幹最可能改寫為下列哪一句？",
        options: [
          "A. the term was first invented in 1960",
          "B. the term was widely disputed in 1960",
          "C. the term was officially abolished in 1960",
          "D. the term was accurately assessed in 1960"
        ],
        answer: "A",
        evidence: "coin (v.) ↔ first used / invent（7/8 閱讀考點詞庫 #1–11 螢光筆重點）",
        explanation: "coin 作動詞意為「創造（新詞或說法）」，雅思閱讀固定替換為 first used 或 invent。選項 D 的 assessed 則是 measure（衡量、評估）的同義詞。"
      }
    ]
  }
];
