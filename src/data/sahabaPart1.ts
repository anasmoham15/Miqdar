import type { Story } from "./stories";

const p = (...paragraphs: string[]) => paragraphs;

// Sahaba 1–25 — based on Siyar A'lam al-Nubala (al-Dhahabi),
// Sahih al-Bukhari, Sahih Muslim, al-Isaba (Ibn Hajar), and Tabaqat (Ibn Sa'd).
export const sahabaPart1: Story[] = [
  {
    id: "abu-bakr",
    title: "Abu Bakr al-Siddiq (RA) — The Truthful Successor",
    description:
      "The closest friend of the Prophet ﷺ, the first adult man to embrace Islam, and the first Caliph who held the Ummah together after the Prophet's passing.",
    category: "Sahaba",
    readTime: "8 min",
    sections: {
      intro: p(
        "Abu Bakr 'Abdullah ibn Abi Quhafa, of the noble Quraysh clan of Banu Taym, was born in Makkah about two and a half years after the Year of the Elephant. He was a respected merchant known for honesty, deep knowledge of Arab genealogy, and a gentle, dignified manner that drew people to him long before Islam.",
        "He never bowed to an idol in his life and was a close friend of Muhammad ﷺ from youth. His character — soft-hearted, quick to weep, generous beyond measure — earned him the title al-Siddiq, 'The Truthful', after he believed the Prophet's account of the Night Journey without hesitation.",
      ),
      life: p(
        "When the Prophet ﷺ first invited him to Islam, Abu Bakr accepted on the spot. He immediately began calling others, and through him 'Uthman, Talha, Zubayr, Sa'd ibn Abi Waqqas, and 'Abd ar-Rahman ibn 'Awf entered Islam — six of the ten promised Paradise.",
        "He spent the bulk of his wealth freeing tortured slaves, including Bilal ibn Rabah. When persecution intensified, he was the chosen companion of the Prophet ﷺ on the Hijrah. In the cave of Thawr, when the Quraysh search party stood at the entrance, the Prophet ﷺ comforted him: 'Do not grieve, indeed Allah is with us.' (Qur'an 9:40)",
        "He fought at Badr, Uhud, and every major battle. On the day of Tabuk he gave all his wealth in charity. When the Prophet ﷺ fell ill, he was appointed to lead the prayers — a sign to the Companions of who would lead them after.",
        "When the Prophet ﷺ passed away, the Ummah trembled. Abu Bakr stood and declared: 'Whoever worshipped Muhammad, Muhammad has died. Whoever worships Allah, Allah is Living and never dies.' He was elected Caliph and immediately faced the Ridda Wars — tribes refusing zakah and false prophets rising. Against the counsel of many, he insisted on fighting, saying: 'By Allah, if they withhold even a rope they used to give to the Messenger of Allah, I will fight them for it.' His firmness saved the Ummah.",
        "He commissioned the first compilation of the Qur'an into a single mushaf after many memorisers fell at the Battle of Yamamah. He ruled for just over two years and passed away in 13 AH at age 63, buried beside the Prophet ﷺ.",
      ),
      legacy: p(
        "Abu Bakr is the greatest of this Ummah after the Prophets. The Prophet ﷺ said: 'If I were to take a khalil (intimate friend) other than my Lord, I would have taken Abu Bakr.' He is the standard by which all later leaders are measured.",
        "His decisive action in the Ridda Wars preserved Islam as a unified faith. His commissioning of the mushaf preserved the Qur'an for every generation after him. His humility — refusing to be called 'Khalifatullah' and insisting on 'Khalifat Rasulillah' — set the tone for Islamic leadership.",
      ),
      keyFacts: [
        "Lived c. 573–634 CE; first Caliph 11–13 AH",
        "First adult free man to accept Islam",
        "Father-in-law of the Prophet ﷺ through 'A'isha (RA)",
        "Companion of the Prophet ﷺ in the cave of Thawr (Qur'an 9:40)",
        "Compiled the first written mushaf of the Qur'an",
        "Buried beside the Prophet ﷺ in 'A'isha's chamber",
      ],
      lessons: p(
        "Quiet conviction outlasts loud argument. Abu Bakr never debated whether the Isra' could happen — he simply trusted. Train yourself to trust Allah and His Messenger ﷺ before you demand explanations.",
        "Spend your wealth before it spends you. He gave it all on Tabuk and answered, 'Allah and His Messenger.' Loosen your grip on what you own; it is a tool, not a treasure.",
        "Stand firm when others waver. At the Prophet's death and at the Ridda, the whole community looked to him because he held the line. In moments of crisis, courage is more valuable than cleverness.",
        "Lead through service, not status. He continued to milk the goats of widows after becoming Caliph. Real authority lifts others; it does not exalt the self.",
      ),
    },
  },

  {
    id: "umar",
    title: "Umar ibn al-Khattab (RA) — The Just Caliph",
    description:
      "From feared persecutor of Muslims to the second Caliph whose justice shaped a global civilisation, Umar made truth and falsehood distinct.",
    category: "Sahaba",
    readTime: "9 min",
    sections: {
      intro: p(
        "'Umar ibn al-Khattab al-'Adawi, of the Quraysh clan of Banu 'Adi, was born in Makkah about thirteen years after the Year of the Elephant. Tall, powerfully built, literate in an age when few were, and famed for an iron will and a temper to match, he was a respected envoy of Quraysh before Islam.",
        "He was a fierce enemy of the Muslims in the early years of the message — until Allah honoured him with guidance. The Prophet ﷺ had specifically prayed: 'O Allah, strengthen Islam with the more beloved of these two men to You: Abu Jahl or 'Umar ibn al-Khattab.' Allah answered with 'Umar.",
      ),
      life: p(
        "His conversion came in his sixth year as an enemy of the message. Sword in hand, intending to kill the Prophet ﷺ, he was diverted to confront his sister Fatimah, whom he discovered reading Surah Ta-Ha. After striking her and seeing her blood, his heart broke. He read the verses and went straight to the Prophet ﷺ to declare Islam. The Muslims, who had prayed in secret, prayed openly at the Ka'bah for the first time that day.",
        "He fought at Badr, Uhud, the Trench, and every major engagement. When the Prophet ﷺ passed away, 'Umar was the one who refused to believe it until Abu Bakr's words steadied him. He pledged allegiance to Abu Bakr first, ensuring a smooth succession.",
        "On Abu Bakr's death he became the second Caliph in 13 AH and ruled for ten years. Under him, the Persian and Byzantine empires were broken; Sham, Egypt, Iraq, and Persia entered the fold of Islam. He established the diwan (state register), formal Islamic dating from the Hijrah, the night patrol, regular salaries for soldiers, and dedicated tarawih in congregation.",
        "Yet he walked the streets of Madinah at night carrying flour on his own back to feed a hungry widow's children. He wept when he saw a starving family in 'Am al-Ramada. He held governors to account so strictly that his envoys would arrive in cities and the people would flee for fear of being asked to govern.",
        "He was martyred in 23 AH while leading Fajr in the Prophet's Masjid, stabbed by Abu Lu'lu'a the Magian. He died with the Qur'an on his lips and was buried beside the Prophet ﷺ and Abu Bakr.",
      ),
      legacy: p(
        "'Umar is al-Faruq — the one who distinguishes truth from falsehood. The Prophet ﷺ said: 'If there were to be a Prophet after me, it would be 'Umar.' His justice became proverbial; even non-Muslims through the centuries have written of his fairness.",
        "He laid the foundations of Islamic governance: separation of judiciary from executive, public consultation, fixed stipends, accountability of rulers, and protection for non-Muslim citizens (the Pact of 'Umar in Jerusalem). Much of what we call 'good governance' today, 'Umar practised in the seventh century.",
      ),
      keyFacts: [
        "Lived c. 584–644 CE; second Caliph 13–23 AH",
        "Accepted Islam in the 6th year of prophethood",
        "Father of Hafsah (RA), Mother of the Believers",
        "Conquered Jerusalem in 637 CE; entered on foot leading his servant's camel",
        "Established the Hijri calendar and the diwan",
        "Martyred during Fajr salah; buried beside the Prophet ﷺ",
      ],
      lessons: p(
        "Allah can change any heart. The man who set out to kill the Prophet ﷺ became his second successor. Never write off anyone — including yourself — from Allah's mercy.",
        "Justice begins at home and reaches the furthest citizen. 'Umar feared that a stray camel by the Tigris would be his responsibility. Hold yourself to a higher standard than you hold others.",
        "Power is a trust, not a prize. He patched his own clothes, slept under a tree, and feared accountability more than he loved authority. If you are given authority over even one person, fear Allah in it.",
        "Strength and tenderness are not opposites. The same 'Umar who terrified empires wept until his beard was wet when he heard the Qur'an. Train both your spine and your heart.",
      ),
    },
  },

  {
    id: "uthman",
    title: "Uthman ibn Affan (RA) — The Possessor of Two Lights",
    description:
      "The wealthy merchant of Quraysh who married two daughters of the Prophet ﷺ, financed the army of Tabuk, and unified the Qur'an for all time.",
    category: "Sahaba",
    readTime: "8 min",
    sections: {
      intro: p(
        "'Uthman ibn 'Affan al-Umawi, of Quraysh's noble Banu Umayyah, was born in Ta'if about six years after the Year of the Elephant. He was strikingly handsome, soft-spoken, and modest to the point that the angels were said to feel shy in his presence. A successful international trader, he was wealthy long before Islam.",
        "He was known among Quraysh for his gentle character and freely giving generosity. He never drank wine in jahiliyyah, never bowed to an idol, never committed indecency.",
      ),
      life: p(
        "He accepted Islam early through Abu Bakr, becoming one of the very first believers. He married the Prophet's daughter Ruqayyah (RA), and after her death married her sister Umm Kulthum (RA) — earning him the title Dhu al-Nurayn, 'The Possessor of Two Lights.'",
        "He led one of the migrations to Abyssinia. Back in Madinah, when the Muslims had no fresh water source he bought the well of Ruma from a Jew and made it free for all — a charity that flowed for centuries. When the Masjid al-Nabawi needed expansion, he bought the adjoining land and donated it. For the army of Tabuk, in 'the year of hardship', he gave 950 fully equipped camels, 50 horses, and 10,000 dinars in gold — the Prophet ﷺ said: 'Nothing 'Uthman does after this day will harm him.'",
        "He became Caliph in 23 AH after Umar's martyrdom and ruled for twelve years. He extended the conquests across North Africa, Cyprus, Khorasan, and beyond, and built the first Muslim navy. His greatest gift to the Ummah was unifying the Qur'an: as new Muslims across vast lands began differing in recitation, he commissioned a standard mushaf based on the original compiled in Abu Bakr's time, and sent copies to every major city. Every Qur'an in the world today traces to that mushaf.",
        "In the latter years rebels gathered against him, fed by rumours and grievances. They besieged his house in Madinah. Refusing to spill Muslim blood in his defence, he was killed while reading the Qur'an — the page stained with his blood is among the most poignant relics of early Islam. He was 82.",
      ),
      legacy: p(
        "'Uthman's mushaf is his living legacy: every Muslim who recites the Qur'an today reads from his consolidation. His infrastructure of wells, mosques, and naval defence shaped early Muslim civilisation.",
        "His patient endurance during the siege — refusing to take up arms against fellow Muslims — set a standard of restraint that scholars cite to this day. The Prophet ﷺ had foretold: 'Allah will clothe you in a shirt; if they ask you to take it off, do not take it off.'",
      ),
      keyFacts: [
        "Lived c. 576–656 CE; third Caliph 23–35 AH",
        "Married two daughters of the Prophet ﷺ — Ruqayyah and Umm Kulthum",
        "Bought the well of Ruma and donated it to the Muslims",
        "Funded one third of the army of Tabuk",
        "Standardised the Qur'an into the mushaf used worldwide today",
        "Martyred in his home while reciting the Qur'an at age 82",
      ],
      lessons: p(
        "Modesty is a believer's adornment. Even angels were shy of 'Uthman. Cultivate haya — in your gaze, your speech, your dress, your interactions.",
        "Wealth is meant to flow, not pool. He used his fortune to buy water, land, and arms for the Ummah. Whatever Allah has given you — money, time, skill — circulate it for His sake.",
        "Restraint can be greater than retaliation. He chose not to defend himself with Muslim blood. There are battles a believer wins by refusing to fight them.",
        "Serve the Qur'an and the Qur'an will preserve your name. His one act of standardisation made him beloved in every Muslim home for fourteen centuries. Tie your life to the Book.",
      ),
    },
  },

  {
    id: "ali",
    title: "Ali ibn Abi Talib (RA) — The Lion of Allah",
    description:
      "Cousin and son-in-law of the Prophet ﷺ, the first child to embrace Islam, the gate of knowledge, and the fourth Caliph.",
    category: "Sahaba",
    readTime: "9 min",
    sections: {
      intro: p(
        "'Ali ibn Abi Talib al-Hashimi was born inside the Ka'bah itself — a unique honour — about ten years before the prophethood. His father Abu Talib was the Prophet's uncle and protector; his mother Fatimah bint Asad was an early Muslim.",
        "Raised in the Prophet's household from a young age (when Abu Talib's family fell on hardship), 'Ali absorbed the Prophet's manners, knowledge, and worship from childhood. He grew into a courageous, deeply learned, eloquent young man — slim, of medium height, with broad shoulders and a beautiful, dignified face.",
      ),
      life: p(
        "He was the first child to accept Islam, at perhaps ten years old. On the night of the Hijrah, when assassins surrounded the Prophet's house, 'Ali slept in his bed wrapped in his cloak, risking his life so the Prophet ﷺ could escape. He stayed behind to return the trusts people had left with the Prophet ﷺ, then made the Hijrah on foot.",
        "In Madinah the Prophet ﷺ married him to his beloved daughter Fatimah (RA). Through them came al-Hasan and al-Husayn, the leaders of the youth of Paradise. 'Ali fought in every battle except Tabuk (where the Prophet ﷺ left him in charge of Madinah, telling him: 'You are to me as Harun was to Musa, except there is no prophet after me.').",
        "At Khaybar, when the standard had passed from one commander to another, the Prophet ﷺ said: 'Tomorrow I will give the banner to a man who loves Allah and His Messenger and whom Allah and His Messenger love.' He gave it to 'Ali. He led duels at Badr, Uhud, and the Trench, and earned the title Asadullah, the Lion of Allah.",
        "He served Abu Bakr, 'Umar, and 'Uthman as a senior counsellor, especially in matters of jurisprudence and Qur'anic understanding. After 'Uthman's martyrdom he was elected the fourth Caliph in 35 AH. His caliphate was consumed by the fitna — the battles of the Camel, Siffin, and Nahrawan — as he tried to uphold justice and unity in the wake of 'Uthman's killing.",
        "He was martyred in Kufa in 40 AH, struck while going to lead Fajr by the Khariji 'Abd ar-Rahman ibn Muljam. He died saying, 'By the Lord of the Ka'bah, I have succeeded.'",
      ),
      legacy: p(
        "'Ali is among the foremost in knowledge of this Ummah. The Prophet ﷺ said: 'I am the city of knowledge and 'Ali is its gate.' His judgements, sermons, and supplications — collected later in Nahj al-Balagha and other works — shaped Islamic ethics, jurisprudence, and rhetoric.",
        "Through him and Fatimah (RA) descended the Ahl al-Bayt whom the Prophet ﷺ commanded us to love. His personal courage, asceticism, and devotion to justice make him a model for every Muslim, Sunni and Shi'a alike.",
      ),
      keyFacts: [
        "Lived c. 600–661 CE; fourth Caliph 35–40 AH",
        "First child to embrace Islam",
        "Cousin of the Prophet ﷺ; husband of Fatimah (RA)",
        "Father of al-Hasan and al-Husayn (RA)",
        "Slept in the Prophet's bed on the night of Hijrah",
        "Martyred at Fajr in Kufa by a Khariji assassin",
      ],
      lessons: p(
        "Knowledge and courage are twin virtues. 'Ali was the lion in battle and the gate of knowledge in peace. Build both your mind and your spine.",
        "Loyalty is proven in the dark. He risked death sleeping in the Prophet's bed. Show up for the people who need you when no one is watching.",
        "Justice will cost you. His caliphate was hard precisely because he refused to compromise on principle. Choose the right path even when the easy one is open.",
        "Speak with weight. His sermons still teach centuries later. Make your words few, true, and rooted in Allah's Book.",
      ),
    },
  },

  {
    id: "khadijah",
    title: "Khadijah bint Khuwaylid (RA) — The First Believer",
    description:
      "The noble merchant-woman of Quraysh, beloved wife of the Prophet ﷺ, and the very first to believe in his message.",
    category: "Sahaba",
    readTime: "8 min",
    sections: {
      intro: p(
        "Khadijah bint Khuwaylid ibn Asad, of the Quraysh clan of Banu Asad, was born in Makkah about fifteen years before the Year of the Elephant. Twice widowed by the time she was forty, she had inherited and built one of the largest trading enterprises in Arabia.",
        "She was known as al-Tahirah, 'The Pure One', long before Islam — a woman of integrity, intelligence, and strong character in a society where women rarely held public stature. She refused many noble proposals from the chiefs of Quraysh.",
      ),
      life: p(
        "She hired the young Muhammad ﷺ to lead a trade caravan to Sham after hearing of his honesty. Her servant Maysara returned with reports of his trustworthiness, kind dealing, and miraculous signs. She proposed to him through an intermediary; he was twenty-five, she was forty. The marriage was a partnership of love, mutual respect, and shared character. Together they had six children, including Fatimah (RA).",
        "When the first revelation came in the cave of Hira and the Prophet ﷺ returned home trembling, asking 'Cover me, cover me,' it was Khadijah who calmed him with the immortal words: 'By Allah, Allah will never disgrace you. You uphold the ties of kinship, you carry the weak, you provide for the destitute, you honour the guest, and you help against the calamities of truth.'",
        "She took him to her cousin Waraqah ibn Nawfal, a Christian scholar, who confirmed that this was the same revelation that came to Musa. From that moment, Khadijah was the first to believe. She prayed beside the Prophet ﷺ, supported him, and poured her enormous wealth into the cause until little remained.",
        "When Quraysh imposed the boycott on Banu Hashim in the valley of Abu Talib, she endured three years of hunger and hardship at his side, though she was already in her sixties. The boycott broke her health.",
        "She passed away in the tenth year of prophethood, three years before the Hijrah, in what became known as 'Am al-Huzn — the Year of Sorrow — for the Prophet ﷺ also lost Abu Talib that same year. The Prophet ﷺ remembered her and praised her for the rest of his life.",
      ),
      legacy: p(
        "Khadijah is one of the four greatest women in history, alongside Maryam, Asiya, and Fatimah. The Prophet ﷺ said of her years after her death: 'She believed in me when no one else did. She accepted me when the people rejected me. She supported me with her wealth when others deprived me. And Allah blessed me with children through her.'",
        "Jibril was once sent to her with greetings of peace from her Lord and tidings of a house in Paradise. Her example sets the standard for marital partnership, female leadership in faith, and steadfast support of truth.",
      ),
      keyFacts: [
        "Lived c. 555–619 CE; passed away in the Year of Sorrow",
        "First wife of the Prophet ﷺ; first human being to accept Islam",
        "Mother of Fatimah (RA)",
        "Greeted by Allah through Jibril and given news of a house in Paradise",
        "Funded the early Muslim community with her vast wealth",
        "One of the four greatest women in history",
      ],
      lessons: p(
        "The first to believe pays the highest price. She gave her wealth, her comfort, and her health. Be willing to invest fully in what you know is true.",
        "A spouse can be a sanctuary. Her response in the cave moment is a masterclass in marital support: she affirmed his character before addressing his fear. Speak to your loved ones in their hardest moments the way Khadijah did.",
        "Women carry Islam at its core. The first believer, the first martyr, mothers of the believers, daughters of the Prophet ﷺ — Islam was built on women's faith. Honour and learn from them.",
        "Build wealth so you can give it. She did not chase money for status; she used it to elevate truth. Earn lawfully, then spend purposefully.",
      ),
    },
  },

  {
    id: "aisha",
    title: "A'isha bint Abi Bakr (RA) — Mother of the Believers",
    description:
      "The brilliant young scholar-wife of the Prophet ﷺ, narrator of over two thousand hadiths, and a teacher of the Companions themselves.",
    category: "Sahaba",
    readTime: "8 min",
    sections: {
      intro: p(
        "'A'isha bint Abi Bakr al-Siddiq, of Quraysh's Banu Taym, was born in Makkah about eight years before the Hijrah, into the household of the Prophet's closest companion. She grew up surrounded by Islam from her earliest awareness.",
        "She was sharp-witted, fearless in argument, eloquent in speech, with a remarkable memory. Even as a young girl she displayed a thirst for knowledge that would shape the rest of her life and the Ummah's understanding of its religion.",
      ),
      life: p(
        "After Khadijah's death, the Prophet ﷺ was shown her in a dream wrapped in silk, and was told: 'This is your wife.' Their marriage was contracted in Makkah and consummated in Madinah. She was the only virgin he married and the most beloved of his wives in his later years.",
        "She lived in the chamber adjoining the Masjid al-Nabawi and absorbed the daily life of revelation. She memorised the Qur'an, learned its tafsir directly from the Prophet ﷺ, and observed his every act of worship, manner, and ruling.",
        "She was tested with the slander (al-Ifk) when hypocrites accused her falsely. She remained patient for a month while revelation paused, then Allah Himself declared her innocence in verses recited until the end of time (Surah al-Nur 11–20).",
        "When the Prophet ﷺ fell ill, he asked his wives' permission to be nursed in 'A'isha's chamber. He passed away with his head on her chest and was buried in the floor of her room.",
        "She lived another forty-seven years after him, becoming the foremost teacher of Madinah. Senior Companions including 'Umar and Ibn 'Abbas would send their hardest questions to her. She narrated 2,210 hadiths. The scholar al-Zuhri said: 'If the knowledge of 'A'isha were placed on one side of a scale and the knowledge of all the Mothers of the Believers and all the women of this Ummah on the other, hers would outweigh them.'",
        "She passed away in 58 AH, around age 66, and was buried in al-Baqi'.",
      ),
      legacy: p(
        "'A'isha is the most prolific female narrator of hadith and one of the four most prolific narrators overall. Much of what we know about the Prophet's home life, character, worship at night, and personal manners comes through her.",
        "She set the precedent that women in this Ummah are scholars, teachers, and authorities — not silent observers. Her chamber became a school; her opinions were corrections sought by men. Through her, Islam guarantees women a voice in religious knowledge.",
      ),
      keyFacts: [
        "Lived c. 614–678 CE",
        "Daughter of Abu Bakr (RA); wife of the Prophet ﷺ",
        "Narrated 2,210 hadiths — the foremost female narrator",
        "Declared innocent of slander by Qur'anic revelation",
        "The Prophet ﷺ passed away in her chamber and is buried there",
        "Taught senior Companions including 'Umar and Ibn 'Abbas",
      ],
      lessons: p(
        "Begin learning early and never stop. She was a scholar in her teens and a teacher into her sixties. Pursue beneficial knowledge at every age.",
        "Patience is rewarded with vindication. Allah Himself defended her when she had nothing but trust. When you are wronged, hold to your truth and let Allah respond.",
        "Question to understand. She would push back, ask for evidence, request clarification — and the Prophet ﷺ honoured this. Be a thoughtful, engaged seeker of knowledge.",
        "Pass on what you have. Forty-seven years after the Prophet's death she was still teaching. Whatever you learn, transmit it.",
      ),
    },
  },

  {
    id: "fatimah",
    title: "Fatimah al-Zahra (RA) — The Radiant Daughter",
    description:
      "The youngest and most beloved daughter of the Prophet ﷺ, mother of Hasan and Husayn, and chief of the women of Paradise.",
    category: "Sahaba",
    readTime: "7 min",
    sections: {
      intro: p(
        "Fatimah bint Muhammad ﷺ was born in Makkah about five years before prophethood, the youngest daughter of the Prophet ﷺ and Khadijah (RA). She grew up watching her father's mission unfold from its earliest secret days.",
        "She bore a striking resemblance to him in face, walk, and manner. She was called al-Zahra ('the Radiant') and al-Batul ('the Pure'), and was known for her shyness, her piety, and her quiet endurance.",
      ),
      life: p(
        "As a young girl in Makkah she once ran to the Ka'bah to remove the entrails of a camel that Quraysh had thrown on her father's back while he prayed — wiping the filth and crying as she did. Such moments forged a closeness between father and daughter unmatched in the household.",
        "After the Hijrah she was married to her cousin 'Ali ibn Abi Talib (RA). Their household was among the simplest in Madinah — a sheepskin to sleep on, a hand-mill to grind grain, a water-skin she carried until it left a mark on her chest. When 'Ali asked the Prophet ﷺ for a servant to ease her burden, he taught them instead the tasbih recited after every prayer: 33 SubhanAllah, 33 Alhamdulillah, 34 Allahu Akbar.",
        "She bore al-Hasan, al-Husayn, Zaynab, and Umm Kulthum. The Prophet ﷺ said: 'Fatimah is a part of me. Whoever angers her angers me.' He would stand when she entered, kiss her, and seat her in his place.",
        "She was beside her father in his final illness. He whispered something that made her cry, then something that made her smile. Later she explained: he told her of his impending death, then told her she would be the first of his family to follow him — and would be chief of the women of Paradise.",
        "She passed away just six months after the Prophet ﷺ, in 11 AH, at about twenty-eight years old. She was buried by 'Ali at night, as she had requested.",
      ),
      legacy: p(
        "Fatimah is the matriarch of the Ahl al-Bayt. Through her and 'Ali descend al-Hasan and al-Husayn and the entire line of the Prophet's recognised descendants — the Sayyids and Sharifs across the Muslim world.",
        "She is the chief of the women of Paradise. Her life is a model of patient endurance under hardship, devotion within marriage, and intimacy with Allah. The tasbih taught to her is recited daily by millions of Muslims, fourteen centuries on.",
      ),
      keyFacts: [
        "Lived c. 605–632 CE",
        "Youngest daughter of the Prophet ﷺ and Khadijah (RA)",
        "Wife of 'Ali ibn Abi Talib (RA)",
        "Mother of al-Hasan and al-Husayn (RA)",
        "Chief of the women of Paradise (mutual hadith)",
        "Passed away six months after the Prophet ﷺ",
      ],
      lessons: p(
        "Remembrance is better than relief. The Prophet ﷺ gave her dhikr instead of a servant. When life is heavy, reach for tasbih before reaching for ease.",
        "Your closeness to Allah is not measured by your comfort. Fatimah lived simply and ranks among the highest of women. Do not equate luxury with blessing.",
        "Honour your parents in their work. As a child she defended her father at the Ka'bah; as an adult she nursed him in illness. Care for your parents at every stage.",
        "A loving home is built on shared worship. She and 'Ali prayed, fasted, and did dhikr together. Build your marriage on Allah, not just on each other.",
      ),
    },
  },

  {
    id: "hasan",
    title: "Al-Hasan ibn Ali (RA) — The Peacemaker",
    description:
      "Beloved grandson of the Prophet ﷺ, leader of the youth of Paradise, who gave up his caliphate to spare Muslim blood.",
    category: "Sahaba",
    readTime: "6 min",
    sections: {
      intro: p(
        "Al-Hasan ibn 'Ali ibn Abi Talib was born in Madinah in 3 AH, the first child of 'Ali and Fatimah and the eldest grandson of the Prophet ﷺ. He bore the closest physical resemblance to the Prophet ﷺ from chest to head.",
        "He was gentle, generous, and deeply forbearing — a peacemaker by nature, with a calm dignity that drew people to him.",
      ),
      life: p(
        "The Prophet ﷺ adored him. He would carry him on his shoulders during prayer, kiss his belly, and say: 'O Allah, I love him, so love him, and love whoever loves him.' During sermons, when al-Hasan and al-Husayn would stumble in wearing red shirts, the Prophet ﷺ once descended the minbar to pick them up.",
        "He grew up in the Prophet's household and was nurtured by 'Ali and Fatimah. He performed the Hajj on foot more than twenty times. He was famously generous, giving away his wealth — sometimes half, sometimes all of it — three times in his life.",
        "After his father 'Ali's martyrdom, the people of Iraq pledged allegiance to al-Hasan as the fifth Caliph in 40 AH. He led for around six months. When Mu'awiyah marched against him with the army of Sham, al-Hasan saw that further fighting would shed Muslim blood for no benefit. He chose to abdicate and reconcile with Mu'awiyah on terms that protected the Ummah.",
        "The Prophet ﷺ had foretold this exact moment, saying of al-Hasan: 'This son of mine is a sayyid (chief), and through him Allah will reconcile two great groups of Muslims.' That year — 41 AH — became known as 'Am al-Jama'ah, the Year of Unity.",
        "He retired to Madinah and devoted himself to worship and teaching until his death in 50 AH at about forty-seven years old. He was buried in al-Baqi'.",
      ),
      legacy: p(
        "Al-Hasan's abdication is one of the noblest political acts in Islamic history — sacrificing personal authority to preserve Muslim unity. His title 'Sayyid' was given by the Prophet ﷺ himself.",
        "He and his brother are the leaders of the youth of Paradise (sayyida shabab ahl al-jannah), and the line of Sayyids descends from him. His generosity, forbearance, and political wisdom remain models for Muslim leadership.",
      ),
      keyFacts: [
        "Lived 3–50 AH (625–670 CE)",
        "Eldest grandson of the Prophet ﷺ",
        "Fifth Caliph for around six months",
        "Reconciled with Mu'awiyah in the Year of Unity (41 AH)",
        "Performed Hajj on foot over twenty times",
        "A leader of the youth of Paradise",
      ],
      lessons: p(
        "Peace can be greater than victory. He gave up power to stop bloodshed. Sometimes the most courageous choice is to step back.",
        "Generosity is a habit, not an event. He gave away half of all he owned three times. Build a regular discipline of giving.",
        "Honour fulfils prophecy. The Prophet ﷺ said he would unify two groups, and he did. Trust that Allah's plan for you may already have been written.",
      ),
    },
  },

  {
    id: "husayn",
    title: "Al-Husayn ibn Ali (RA) — The Martyr of Karbala",
    description:
      "Grandson of the Prophet ﷺ who stood against tyranny at Karbala and gave his life for the dignity of the Ummah.",
    category: "Sahaba",
    readTime: "7 min",
    sections: {
      intro: p(
        "Al-Husayn ibn 'Ali ibn Abi Talib was born in Madinah in 4 AH, the second son of 'Ali and Fatimah. The Prophet ﷺ named him as he had named his brother — Hasan and Husayn, names previously unknown to the Arabs and inspired, scholars say, by Harun's sons Shabbar and Shubayr.",
        "He was brave, principled, and uncompromising on matters of justice — a fitting heir to his father 'Ali's character.",
      ),
      life: p(
        "He grew up in the household of revelation. The Prophet ﷺ would pray with him on his shoulders, prolonging the prostration so as not to disturb him. He said of al-Husayn: 'Husayn is from me and I am from Husayn. Allah loves whoever loves Husayn.'",
        "He fought alongside his father at the Camel and Siffin and supported the reconciliation his brother al-Hasan made with Mu'awiyah. After Mu'awiyah's death in 60 AH, his son Yazid demanded the pledge of allegiance from al-Husayn. Yazid was widely considered unfit — known for impiety and tyranny — and al-Husayn refused to legitimise his rule.",
        "Letters poured in from Kufa inviting him to lead them. He sent his cousin Muslim ibn 'Aqil ahead. When the political ground shifted and Muslim was killed, al-Husayn decided to continue rather than turn back. With a small band of family and companions — perhaps seventy-two fighters — he was intercepted at Karbala in Iraq by the army of 'Ubaydullah ibn Ziyad.",
        "On the 10th of Muharram 61 AH (680 CE), with his camp deprived of water for days, al-Husayn and almost all his male companions were martyred. Among the slain were his sons, brothers, and nephews. The women and children of his household were taken captive to Damascus.",
        "He died with his face toward the qiblah, his last words on his lips. He was around fifty-six years old.",
      ),
      legacy: p(
        "Karbala stands as Islam's most powerful witness against tyranny. Al-Husayn's stand established the principle that the truth cannot be silenced, even when it costs everything. Both Sunni and Shi'a Muslims honour him as a martyr of the highest rank.",
        "Through him and his brother descend the Sayyids of the Husayni line. His example feeds the conscience of the Ummah in every generation that faces oppression.",
      ),
      keyFacts: [
        "Lived 4–61 AH (626–680 CE)",
        "Younger grandson of the Prophet ﷺ",
        "A leader of the youth of Paradise",
        "Refused allegiance to Yazid ibn Mu'awiyah",
        "Martyred at Karbala on 10 Muharram 61 AH",
        "His shrine in Karbala is visited by millions",
      ],
      lessons: p(
        "Some lines must not be crossed, whatever the cost. He could have lived comfortably by saying one word; he refused. Know what you will not compromise.",
        "Speak truth to power. His stand was small in numbers and immense in meaning. Numbers do not measure righteousness.",
        "Honour the family of the Prophet ﷺ. Loving them is part of the faith, and learning from their courage is part of practising it.",
      ),
    },
  },

  {
    id: "hamzah",
    title: "Hamzah ibn Abd al-Muttalib (RA) — Lion of Allah",
    description:
      "The Prophet's uncle and milk-brother whose conversion shook Quraysh, the master of martyrs at Uhud.",
    category: "Sahaba",
    readTime: "6 min",
    sections: {
      intro: p(
        "Hamzah ibn 'Abd al-Muttalib al-Hashimi was the uncle of the Prophet ﷺ, only two to four years his senior, and his milk-brother through Thuwaybah. A famed hunter, warrior, and noble of Quraysh, he was respected for his strength and feared in combat.",
        "Before Islam he lived the life of a Qurayshi noble, taking part in expeditions and tribal affairs without much engagement in religious matters.",
      ),
      life: p(
        "His acceptance of Islam was triggered by news that Abu Jahl had insulted and physically abused the Prophet ﷺ near the Ka'bah. Returning from a hunt, his bow still on his shoulder, Hamzah went straight to Abu Jahl, struck him with the bow, and declared: 'I follow the religion of Muhammad and bear witness that he is the Messenger of Allah.' His conversion gave the early Muslims much-needed protection in Makkah.",
        "He earned the title Asadullah wa Asad Rasulih — Lion of Allah and Lion of His Messenger. At the Battle of Badr he was among the first into the duel, killing 'Utbah ibn Rabi'ah and several others.",
        "At Uhud, his white plumes made him conspicuous. He was killed by Wahshi, an Abyssinian slave who had been promised freedom by Hind bint 'Utbah in revenge for her father killed at Badr. Wahshi struck him with a javelin from a distance. After his death, his body was mutilated.",
        "When the Prophet ﷺ saw what had been done to his uncle, his grief was such that the Companions had never seen him so stricken. He prayed over him and the other martyrs of Uhud and called him Sayyid al-Shuhada — Master of the Martyrs.",
      ),
      legacy: p(
        "Hamzah's conversion was a turning point in Makkah; his martyrdom at Uhud became a defining grief for the Prophet ﷺ and the Ummah. He stands as the archetype of the warrior-believer.",
        "Wahshi himself later embraced Islam and lived with deep regret. He went on to use the same javelin at the Battle of Yamamah to kill Musaylimah the Liar, saying: 'I killed the best of men with this spear in jahiliyyah, and the worst of men with it in Islam.'",
      ),
      keyFacts: [
        "Born c. 568 CE; martyred at Uhud in 3 AH (625 CE)",
        "Uncle and milk-brother of the Prophet ﷺ",
        "Title: Asadullah, Lion of Allah",
        "Master of the Martyrs (Sayyid al-Shuhada)",
        "Killed by Wahshi ibn Harb at the Battle of Uhud",
      ],
      lessons: p(
        "Loyalty answers injustice. The wrong done to his nephew moved him to faith. Defend the dignity of others, especially the believers.",
        "Strength is best when surrendered to Allah. He was a lion before Islam and a lion for Allah after. Direct your gifts to His service.",
        "Allah's mercy reaches even the killer. Wahshi was forgiven after Islam. Never assume the door of repentance is shut on anyone.",
      ),
    },
  },

  {
    id: "bilal",
    title: "Bilal ibn Rabah (RA) — The First Mu'adhdhin",
    description:
      "The Abyssinian slave whose 'Ahad, Ahad' beneath a burning rock became the first call to prayer of Islam.",
    category: "Sahaba",
    readTime: "6 min",
    sections: {
      intro: p(
        "Bilal ibn Rabah al-Habashi was born in slavery in Makkah, around 580 CE, of Abyssinian descent. Tall, dark-skinned, with a powerful voice and a quiet, steady character, he served Umayyah ibn Khalaf, one of Quraysh's bitterest opponents of Islam.",
        "When Bilal embraced Islam in its earliest days, his master decided to make an example of him.",
      ),
      life: p(
        "Umayyah dragged him into the Makkan desert at noon, laid him on the burning sand, and pressed a heavy rock onto his chest. Children threw stones at him. Through it all Bilal repeated only one word: 'Ahad, Ahad' — One, One.",
        "Abu Bakr (RA), passing by, was moved to tears. He bought Bilal at any price Umayyah named and freed him for the sake of Allah. Bilal became a free man and a beloved member of the early community.",
        "After the Hijrah to Madinah, when the Muslims debated how to call people to prayer, the Companion 'Abdullah ibn Zayd dreamt of the adhan. The Prophet ﷺ instructed Bilal to make the call, choosing him for his beautiful, far-reaching voice. Bilal became Islam's first mu'adhdhin.",
        "On the day Makkah was conquered, the Prophet ﷺ commanded Bilal to ascend the Ka'bah and call the adhan over the city that had once tortured him. The sound rang out across Makkah — the slave who had cried 'Ahad' under the rock now declared the oneness of Allah from the highest place in the city.",
        "After the Prophet's death, Bilal's voice cracked at the second adhan and he could not finish. Heartbroken, he asked 'Umar's permission to leave Madinah and joined the armies in Sham. He gave the adhan once more, in Damascus, when al-Hasan and al-Husayn requested it during a visit. The whole city wept, remembering the Prophet ﷺ. He died in Damascus around 20 AH.",
      ),
      legacy: p(
        "Bilal is the standard of Islam's commitment to human dignity beyond race or birth. The Prophet ﷺ heard the sound of Bilal's footsteps in Paradise.",
        "Every adhan called from every minaret in the world traces back to him. His example tells every Muslim of every background that nearness to Allah is determined by faith and conduct, never by colour or class.",
      ),
      keyFacts: [
        "Born c. 580 CE; died c. 640 CE in Damascus",
        "Of Abyssinian descent; born into slavery",
        "Tortured for his faith; freed by Abu Bakr (RA)",
        "First mu'adhdhin of Islam",
        "Called the adhan from atop the Ka'bah at the conquest of Makkah",
        "His footsteps were heard in Paradise by the Prophet ﷺ",
      ],
      lessons: p(
        "Hold to tawhid when everything is against you. 'Ahad, Ahad' under torture became his ticket to Paradise. In your hardest moment, return to the oneness of Allah.",
        "Free the oppressed. Abu Bakr's wealth bought a man his freedom and gave Islam its mu'adhdhin. Use what you have to lift others.",
        "Allah elevates whom He wills. A slave became the voice of Islam. Never measure a person by their starting point.",
      ),
    },
  },

  {
    id: "khalid",
    title: "Khalid ibn al-Walid (RA) — The Sword of Allah",
    description:
      "The undefeated general whose conversion changed the military balance of Arabia and who never lost a battle he commanded.",
    category: "Sahaba",
    readTime: "8 min",
    sections: {
      intro: p(
        "Khalid ibn al-Walid al-Makhzumi, of Quraysh's powerful Banu Makhzum, was born around 585 CE in Makkah. Trained as a horseman from childhood, he became one of the most gifted military minds Arabia ever produced.",
        "He was tactically brilliant, physically powerful, and completely fearless — qualities that first made him the Muslims' deadliest enemy and later their greatest commander.",
      ),
      life: p(
        "At Uhud, Khalid commanded the Quraysh cavalry. When the Muslim archers abandoned their posts, he wheeled around the mountain and turned a Muslim victory into near-disaster. For years afterwards he led campaigns against the Muslims.",
        "After the Treaty of Hudaybiyah, Khalid reflected deeply. His brother al-Walid wrote to him: 'No-one as intelligent as you can fail to see Islam.' In 8 AH he travelled to Madinah with 'Amr ibn al-'As and 'Uthman ibn Talha and embraced Islam. The Prophet ﷺ welcomed him: 'I always knew Khalid had a mind that would one day deliver him to Islam.'",
        "Within months he was leading Muslim forces. At the Battle of Mu'tah against the Byzantines in 8 AH, after three commanders fell as martyrs, Khalid took the banner. He broke nine swords that day and orchestrated a brilliant retreat that saved the army. The Prophet ﷺ named him Sayfullah al-Maslul — 'The Drawn Sword of Allah.'",
        "Under Abu Bakr he led the Ridda Wars, defeating Tulayhah, Musaylimah at Yamamah, and the rebel tribes. Then he turned to Iraq, conquering al-Hira, then made his legendary desert march from Iraq to Sham — five days through waterless wilderness — surprising the Byzantines.",
        "He won battle after battle: Ajnadayn, Fahl, Damascus, and the decisive Yarmouk in 15 AH where Roman power in Sham was broken forever. He commanded in over a hundred battles and lost none.",
        "Yet 'Umar (RA) removed him from command, fearing the Ummah would attribute victory to Khalid rather than to Allah. Khalid accepted the decision without complaint and continued to fight as a soldier under his successor. He died in his bed in Homs around 21 AH, weeping that he had not been granted martyrdom: 'I sought death in every battle, but I am to die on my bed like a camel.'",
      ),
      legacy: p(
        "Khalid is considered by historians, Muslim and non-Muslim, among the greatest commanders in human history. He brought the Persian and Byzantine empires to their knees on the battlefield.",
        "But his greater legacy is his obedience: removed from command at the height of his glory, he submitted without a word. His title — Sword of Allah — is a perpetual reminder that even the sharpest blade is wielded by Another's hand.",
      ),
      keyFacts: [
        "Born c. 585 CE; died c. 642 CE in Homs",
        "Title: Sayfullah al-Maslul — Drawn Sword of Allah",
        "Accepted Islam in 8 AH",
        "Led the retreat at Mu'tah and victory at Yarmouk",
        "Commanded over 100 battles; lost none",
        "Removed from command by 'Umar; obeyed without complaint",
      ],
      lessons: p(
        "Skill submitted to Allah outshines skill spent on self. He was deadly before Islam and unstoppable for Allah after. Devote your strongest gifts to Him.",
        "Obey leadership even when you disagree. Being demoted at his peak did not break him because his loyalty was to Allah, not his rank. Practise this discipline in your own teams.",
        "Victory is from Allah, not from you. 'Umar's reason for removing him was a teaching for the Ummah. Stay humble even when you are clearly the cause of success.",
        "Death finds you where Allah wills. He chased shahadah on every battlefield and was given a quiet death. Do your part; leave the outcome with Allah.",
      ),
    },
  },

  {
    id: "abu-ubaydah",
    title: "Abu Ubaydah ibn al-Jarrah (RA) — Trustee of the Ummah",
    description:
      "The humble commander whom the Prophet ﷺ called 'the trustworthy man of this Ummah', conqueror of Sham.",
    category: "Sahaba",
    readTime: "6 min",
    sections: {
      intro: p(
        "'Amir ibn 'Abdullah ibn al-Jarrah al-Fihri, known as Abu 'Ubaydah, was born around 583 CE in Makkah, of Quraysh. Tall, slim, with a sparse beard and gentle bearing, he was modest in speech and beloved for his sincerity.",
        "He was among the very first to embrace Islam, accepting the message through Abu Bakr in the same week as 'Uthman, Talha, Zubayr, and others.",
      ),
      life: p(
        "He migrated to Abyssinia and later to Madinah. At Badr he was forced into the agonising position of fighting his own father, who fell at his hand — and Allah revealed verses praising those who do not love their disbelieving relatives more than Allah.",
        "At Uhud, when two rings of the Prophet's helmet pierced his cheek, Abu 'Ubaydah pulled them out with his teeth, losing two of his own front teeth in the process. He was thereafter remembered for his beautiful gap-toothed smile.",
        "The Prophet ﷺ said of him: 'Every Ummah has a trustworthy man, and the trustworthy man of this Ummah is Abu 'Ubaydah ibn al-Jarrah.' That title — Amin al-Ummah — defined his life.",
        "Under Abu Bakr and 'Umar he became a senior commander in the conquest of Sham. After Khalid was removed from overall command, Abu 'Ubaydah was appointed in his place. He led the army into Damascus, Homs, and Jerusalem, distinguishing himself by his clemency, his refusal to wrong the conquered, and his firm enforcement of Islamic ethics.",
        "When plague broke out in 'Amwas in Sham in 18 AH, 'Umar ordered him to leave for safety. Abu 'Ubaydah refused, choosing to stay with his men. He fell ill and died in the plague at about fifty-eight years old. 'Umar wept openly when news reached him.",
      ),
      legacy: p(
        "Abu 'Ubaydah set the standard for Muslim military leadership: trustworthy in dealings, clement in victory, present with his men in hardship, and loyal to those above him.",
        "His refusal to abandon his soldiers in the plague is cited to this day in discussions of medical ethics, leadership, and trust. He is among the ten promised Paradise.",
      ),
      keyFacts: [
        "Born c. 583 CE; died 18 AH (639 CE) in the Plague of 'Amwas",
        "Title: Amin al-Ummah — Trustee of the Ummah",
        "Among the first to accept Islam",
        "One of the ten promised Paradise",
        "Conqueror of Damascus, Homs, and Jerusalem",
        "Lost two teeth removing the Prophet's helmet rings at Uhud",
      ],
      lessons: p(
        "Trustworthiness is earned in small things. He was named 'trustee' before any conquest. Be reliable in your daily promises and the title will follow.",
        "Lead from the front, including in danger. He stayed with his men in the plague. Real leadership shares the worst, not just the best.",
        "Faith over family when they conflict. He fought his father at Badr. When loved ones pull you away from Allah, your tie to Allah comes first.",
      ),
    },
  },

  {
    id: "saad-abi-waqqas",
    title: "Sa'd ibn Abi Waqqas (RA) — The Conqueror of Persia",
    description:
      "The first to shoot an arrow for Islam, one of the ten promised Paradise, and the commander at al-Qadisiyyah.",
    category: "Sahaba",
    readTime: "6 min",
    sections: {
      intro: p(
        "Sa'd ibn Malik (Abi Waqqas) al-Zuhri, of Quraysh, was born in Makkah around 595 CE. Maternal uncle of the Prophet ﷺ through Aminah's lineage, he was a skilled archer and horseman from youth.",
        "He embraced Islam at seventeen, among the very first six or seven Muslims, despite his mother Hamnah's intense opposition.",
      ),
      life: p(
        "His mother swore she would neither eat nor drink until he abandoned Islam. She lay before him for days. Sa'd told her: 'O mother, by Allah, even if you had a hundred souls and one left you each day, I would not abandon this religion.' Allah revealed verses about this very situation: 'But if they strive against you to make you associate with Me that of which you have no knowledge, do not obey them...' (Qur'an 31:15). She broke her fast.",
        "He was the first man to shoot an arrow in defence of Islam. At Uhud he stood firm and shot until his fingers bled. The Prophet ﷺ handed him arrows that day saying: 'Shoot, may my mother and father be ransomed for you' — a phrase he is reported to have said to no other Companion.",
        "Under 'Umar, Sa'd was given command of the army facing the Persian Empire. At al-Qadisiyyah in 15 AH, with around thirty thousand Muslims against perhaps a hundred thousand Persians under Rustam, he won one of history's most decisive battles. He went on to take the Persian capital al-Mada'in, and the Sasanian Empire began its final collapse.",
        "He founded the city of Kufa as a garrison-town that would become a major centre of Islamic learning. He served as governor of Kufa under 'Umar, was one of the six members of 'Umar's shura that elected 'Uthman, and withdrew from political conflict during the fitna of 'Ali's time, refusing to fight any Muslim faction.",
        "He died around 55 AH in al-'Aqiq near Madinah, the last of the ten promised Paradise to die. He was buried in al-Baqi'.",
      ),
      legacy: p(
        "Sa'd's victory at Qadisiyyah opened Persia to Islam — bringing one of the world's great civilisations into the fold of the religion. The city of Kufa he founded shaped Islamic jurisprudence for centuries.",
        "His refusal to fight in the fitna left the Ummah a precedent for principled neutrality when Muslims fight Muslims.",
      ),
      keyFacts: [
        "Born c. 595 CE; died c. 55 AH (675 CE)",
        "Maternal uncle of the Prophet ﷺ",
        "Among the first six or seven to embrace Islam",
        "One of the ten promised Paradise",
        "Commander of the Muslim army at al-Qadisiyyah (15 AH)",
        "Founder of Kufa",
      ],
      lessons: p(
        "Obey Allah even when it costs your relationships. He chose Allah over his own mother and Allah preserved both the religion and the family bond. Hold the line.",
        "Train hard skills and dedicate them to the truth. His archery at Uhud and Qadisiyyah served Islam. Whatever skill you have, sharpen it for His sake.",
        "Step back from civil strife. He refused to draw a sword on a fellow Muslim. In times of confusion, sometimes the right action is to withhold action.",
      ),
    },
  },

  {
    id: "talhah",
    title: "Talhah ibn Ubaydillah (RA) — The Living Martyr",
    description:
      "The Companion who shielded the Prophet ﷺ at Uhud with his own body and was promised Paradise while still walking the earth.",
    category: "Sahaba",
    readTime: "6 min",
    sections: {
      intro: p(
        "Talhah ibn 'Ubaydillah al-Taymi, of Quraysh's Banu Taym (the clan of Abu Bakr), was born in Makkah around 596 CE. A merchant who had travelled to Sham, he heard from a Christian monk of a prophet about to appear in Arabia.",
        "Returning home to find Muhammad ﷺ openly calling to Islam, he was guided by Abu Bakr to embrace the religion. He was the eighth person to enter Islam.",
      ),
      life: p(
        "Persecution from his own clan was severe. Nawfal ibn Khuwaylid, known as 'the Lion of Quraysh', tied Talhah and Abu Bakr together with one rope and left them in the sun. They became known as al-Qarinayn — 'the Two Companions'.",
        "He missed the Battle of Badr because the Prophet ﷺ had sent him on a scouting mission, but the Prophet ﷺ counted his reward and his share of the spoils with the fighters.",
        "At Uhud, when the Muslims were scattered and assassins closed in on the Prophet ﷺ, Talhah threw himself in front of him. He took blow after blow with his hand until his fingers were paralysed. He absorbed sword strikes, arrows, and a stone that knocked out a tooth and split the Prophet's lip. He was struck more than seventy times that day. The Prophet ﷺ said: 'Whoever wishes to see a martyr walking on the earth, let him look at Talhah ibn 'Ubaydillah.'",
        "He fought at the Trench, Khaybar, the conquest of Makkah, Hunayn, and Tabuk. He was renowned for his generosity — earning further titles like Talhah al-Khayr ('Talhah the Good') and Talhah al-Jud ('Talhah the Generous').",
        "He was killed at the Battle of the Camel in 36 AH, struck by a stray arrow from Marwan ibn al-Hakam. He was around sixty.",
      ),
      legacy: p(
        "Talhah is among the ten promised Paradise. His shielding of the Prophet ﷺ at Uhud is one of the iconic acts of self-sacrifice in Islamic history.",
        "His generosity set a template for Muslim merchants: a man who gives away vast wealth without ostentation, who treats wealth as a tool for service to Allah and His creation.",
      ),
      keyFacts: [
        "Born c. 596 CE; martyred at the Battle of the Camel in 36 AH",
        "Eighth person to embrace Islam",
        "One of the ten promised Paradise",
        "Lost the use of his hand shielding the Prophet ﷺ at Uhud",
        "Titles: Talhah al-Khayr, Talhah al-Jud",
      ],
      lessons: p(
        "Put yourself between the truth and harm. He gave his hand for the Prophet ﷺ. Be willing to take a hit so that good is preserved.",
        "Give wealth without seeking thanks. He is remembered as 'the Good' for his quiet generosity. Make your giving heavy on the scale, light on display.",
        "Reward is by intention. He missed Badr and still received Badr's reward. Sincere intention with sincere effort earns Allah's reward whether or not the world sees it.",
      ),
    },
  },

  {
    id: "zubayr",
    title: "Al-Zubayr ibn al-Awwam (RA) — Disciple of the Prophet ﷺ",
    description:
      "Cousin of the Prophet ﷺ, the first to draw a sword for Islam, and one of the ten promised Paradise.",
    category: "Sahaba",
    readTime: "6 min",
    sections: {
      intro: p(
        "Al-Zubayr ibn al-'Awwam al-Asadi, of Quraysh, was born in Makkah around 594 CE. His mother was Safiyyah bint 'Abd al-Muttalib — the Prophet's aunt — making him the Prophet's cousin. He was raised by his mother after his father's death and was brought up to be tough, brave, and self-reliant.",
        "He embraced Islam at fifteen or sixteen, among the first seven Muslims. His uncle tortured him by wrapping him in mats and lighting smoky fires beneath him, demanding he renounce. Al-Zubayr would only say: 'I will never return to disbelief.'",
      ),
      life: p(
        "He was the first person to draw his sword for Islam. A false rumour reached Makkah that the Prophet ﷺ had been killed; al-Zubayr unsheathed his sword and rushed through the streets ready to fight. The Prophet ﷺ, upon seeing him, prayed for him.",
        "He migrated to Abyssinia and later to Madinah. He fought at Badr, Uhud, the Trench, and every major battle. At Khaybar he was famous for cutting through the enemy lines.",
        "The Prophet ﷺ said: 'Every prophet has a disciple (hawari), and my disciple is al-Zubayr.' He was among the ten promised Paradise. He married Asma' bint Abi Bakr, sister of 'A'isha, and through her had 'Abdullah ibn al-Zubayr — the first child born to the Muhajirun in Madinah.",
        "He was a successful trader and one of the wealthier Companions. Yet he died deeply in debt because he had stood as guarantor for so many people's debts that they piled upon him.",
        "He was killed in 36 AH at the Battle of the Camel, after withdrawing from the fighting when 'Ali reminded him of a hadith of the Prophet ﷺ regarding their future conflict. Al-Zubayr left the battlefield and was killed treacherously while praying.",
      ),
      legacy: p(
        "Al-Zubayr's title 'Hawari' makes him uniquely the disciple of the Prophet ﷺ — a designation given to no other Companion in those words. His son 'Abdullah ibn al-Zubayr would later be a caliph in Makkah and a renowned worshipper.",
        "His withdrawal from the Camel, even at the cost of his life, set a powerful example: knowing when to step away from a fight, even one you have already entered, when the truth becomes clear.",
      ),
      keyFacts: [
        "Born c. 594 CE; martyred 36 AH at the Battle of the Camel",
        "Cousin of the Prophet ﷺ; nephew of Khadijah (RA)",
        "First to draw a sword for Islam",
        "Title: Hawari Rasulillah — Disciple of the Messenger ﷺ",
        "One of the ten promised Paradise",
        "Husband of Asma' bint Abi Bakr (RA)",
      ],
      lessons: p(
        "React quickly when the truth is in danger. He drew his sword on a rumour. Be among those who move toward truth, not away from it.",
        "Be a guarantor for your brothers and sisters. He died in debt because he stood for others. Carry weight for fellow Muslims when you can.",
        "Step back when evidence shifts. Hearing one hadith was enough to make him leave a battle. Truth-seekers change course; ego-defenders dig in.",
      ),
    },
  },

  {
    id: "abdrahman-awf",
    title: "Abd ar-Rahman ibn Awf (RA) — The Generous Merchant",
    description:
      "One of the ten promised Paradise, who turned every venture into wealth and gave most of it back to Allah's path.",
    category: "Sahaba",
    readTime: "6 min",
    sections: {
      intro: p(
        "'Abd ar-Rahman ibn 'Awf al-Zuhri, of Quraysh, was born in Makkah around 581 CE. Of medium height, fair-skinned, with a distinct walk caused by an injury at Uhud, he was a merchant by trade and an early Muslim — the eighth to enter Islam through Abu Bakr.",
        "He was famously honest in business, a man who 'could turn even sand into gold' as later writers would say.",
      ),
      life: p(
        "He migrated to Abyssinia and then to Madinah. The Prophet ﷺ paired him in brotherhood with the wealthy Ansari Sa'd ibn al-Rabi', who offered to share his wealth and even divorce one of his wives for him to marry. 'Abd ar-Rahman thanked him and asked only: 'Direct me to the marketplace.'",
        "Within days he had begun trading, and within years he was one of the wealthiest men in Madinah. He fought at Badr, Uhud (where he received twenty-one wounds and lost teeth), and every major battle.",
        "On the expedition of Tabuk he led the Prophet ﷺ in salah after the Prophet ﷺ arrived late from making wudu — and the Prophet ﷺ prayed behind him without correcting him, an honour given to almost no other Companion.",
        "His giving is legendary: 700 fully-loaded camels arrived in Madinah from one of his Sham caravans, and the city shook with the sound. He distributed the entire caravan in charity that very day. He freed thirty thousand slaves over his lifetime. He left behind enormous bequests to the wives of the Prophet ﷺ.",
        "Yet he wept that his ease in this world might be his portion: 'I fear that my good deeds have been hastened to me in this world.' He passed away in 32 AH at around seventy-five and was buried in al-Baqi'.",
      ),
      legacy: p(
        "'Abd ar-Rahman is the model of the believer in business: scrupulous in earnings, abundant in giving, wary of attachment to wealth. He proved that wealth is not the opposite of zuhd (asceticism) when it flows for Allah.",
        "He was one of the six members of 'Umar's shura that chose 'Uthman, and he himself withdrew his name from contention — a rare act of public renunciation of power.",
      ),
      keyFacts: [
        "Born c. 581 CE; died 32 AH (652 CE)",
        "Eighth to embrace Islam",
        "One of the ten promised Paradise",
        "Led the Prophet ﷺ in salah at Tabuk",
        "Freed thirty thousand slaves in his lifetime",
        "Member of 'Umar's shura; declined the caliphate",
      ],
      lessons: p(
        "Earn a lot so you can give a lot. He sought the marketplace, not a handout. Make your wealth a vehicle for charity.",
        "Trade with integrity. His business success rested on honest dealing. Cut every shortcut that involves deception.",
        "Fear ease, not only hardship. He worried his comfort might be his reward in full. Use whatever Allah gives you as fuel for the next life.",
      ),
    },
  },

  {
    id: "saeed-zayd",
    title: "Sa'id ibn Zayd (RA) — Promised Paradise on Earth",
    description:
      "Cousin and brother-in-law of 'Umar, one of the ten promised Paradise, and a quiet conqueror of Sham.",
    category: "Sahaba",
    readTime: "5 min",
    sections: {
      intro: p(
        "Sa'id ibn Zayd ibn 'Amr ibn Nufayl al-'Adawi, of Quraysh, was born in Makkah around 593 CE. His father Zayd ibn 'Amr had rejected idol-worship in jahiliyyah and sought the true religion of Ibrahim — dying just before Islam came.",
        "Sa'id was raised on this hanif tradition and embraced Islam very early, among the first ten or so Muslims. He married Fatimah bint al-Khattab, the sister of 'Umar.",
      ),
      life: p(
        "It was at his and Fatimah's home that 'Umar found his sister reading Surah Ta-Ha — the moment that led to 'Umar's conversion. Sa'id himself was beaten alongside Fatimah for their faith.",
        "He missed the Battle of Badr — the Prophet ﷺ had sent him with Talhah on a reconnaissance mission — but his share and reward were counted with the fighters. He fought at Uhud, the Trench, and every subsequent battle. He was present at the conquests of Sham and was among the conquerors of Damascus.",
        "Late in his life he was accused of seizing land belonging to a woman named Arwa. He swore an oath in front of witnesses: 'O Allah, if she is lying, blind her and make her grave in her own land.' Soon after, she lost her sight, and one day fell into a pit on her own land and died there. The story spread among the people of Madinah as a sign of his honesty.",
        "He died in 51 AH near Madinah at about seventy-eight, and was buried in al-Baqi'.",
      ),
      legacy: p(
        "Sa'id is among the ten promised Paradise — and remarkably, the Prophet ﷺ named these ten in a single hadith, including Sa'id by name.",
        "His quiet life reminds us that not every great Companion was a famous commander or scholar; some served by being present, faithful, and just.",
      ),
      keyFacts: [
        "Born c. 593 CE; died 51 AH (671 CE)",
        "Among the first ten Muslims",
        "One of the ten promised Paradise",
        "Brother-in-law of 'Umar (RA)",
        "Father raised him as a hanif before Islam",
      ],
      lessons: p(
        "Truth is enough; you do not need spectacle. He served quietly and earned the highest rank. Faithfulness in obscurity is not less than fame in service.",
        "Allah defends the oppressed swiftly. The story of Arwa is a reminder that false oaths and stolen rights are matters Allah handles. Speak only the truth, especially under oath.",
        "Inherit the search of righteous parents. His father sought truth before Islam; he received it. Honour the spiritual journey of those who came before you.",
      ),
    },
  },

  {
    id: "abu-hurayrah",
    title: "Abu Hurayrah (RA) — The Memoriser of Hadith",
    description:
      "The companion of three short years whose retentive memory transmitted more hadiths than anyone else.",
    category: "Sahaba",
    readTime: "7 min",
    sections: {
      intro: p(
        "'Abd ar-Rahman ibn Sakhr al-Dawsi, known as Abu Hurayrah, was born around 603 CE in the tribe of Daws in Yemen. He earned his nickname ('Father of the Kitten') from a small cat he used to carry around as a youth.",
        "He embraced Islam at the hands of al-Tufayl ibn 'Amr al-Dawsi, who had himself embraced Islam in Makkah and returned to call his tribe.",
      ),
      life: p(
        "He arrived in Madinah in 7 AH after the Battle of Khaybar — meaning he was a Companion of the Prophet ﷺ for only about three years. Yet in those three years he attached himself to the Prophet ﷺ utterly. He joined Ahl al-Suffah, the poor Companions who lived on the porch of the masjid devoting themselves to learning.",
        "He often went hungry, sometimes pressing a stone to his stomach to dull the pangs. He turned away from marriage, wealth, and trade in those years to be present at every gathering with the Prophet ﷺ. Other Companions were busy with families, farms, or markets; Abu Hurayrah was wherever the Prophet ﷺ was.",
        "He once asked the Prophet ﷺ to pray for his memory not to forget anything. The Prophet ﷺ asked him to spread out his cloak, recited a supplication, and gathered it back over his chest. Abu Hurayrah said: 'After that, I never forgot anything I heard.'",
        "He narrated 5,374 hadiths — the largest number of any single Companion. He served as governor of Bahrain under 'Umar (and was once dismissed when 'Umar suspected he had grown wealthy, then reinstated when he proved his earnings were lawful).",
        "He passed away in 57 or 59 AH at around seventy-eight, weeping on his deathbed: 'I weep not for this world, but for the long journey ahead and the little provision I have.'",
      ),
      legacy: p(
        "Abu Hurayrah is the most prolific narrator of hadith. Through him much of the Sunnah — supplications, manners, fiqh, descriptions of Paradise and Hell — has reached every Muslim home.",
        "His example proved that intense focus, even for a short time, can produce a legacy that lasts forever. Three years in the company of the Prophet ﷺ, fully present, gave the Ummah more knowledge than entire lifetimes of distraction.",
      ),
      keyFacts: [
        "Born c. 603 CE; died c. 678 CE",
        "Embraced Islam in 7 AH",
        "Companion of the Prophet ﷺ for around three years",
        "Narrated 5,374 hadiths — the most of any Companion",
        "Member of Ahl al-Suffah",
        "Governor of Bahrain under 'Umar",
      ],
      lessons: p(
        "Quality of attention beats quantity of time. Three focused years made him the greatest narrator. Be fully present in your study and your worship.",
        "Choose knowledge over comfort. He chose hunger and learning over food and trade. Sacrifice some worldly ease for time with revelation.",
        "Ask Allah for what you need to serve Him. He asked for memory and was given it. Make du'a for the tools you need to do good.",
        "Weep for the journey ahead. His death-bed concern was the akhirah, not the dunya. Live with that horizon in view.",
      ),
    },
  },

  {
    id: "ibn-masud",
    title: "Abdullah ibn Mas'ud (RA) — The Reciter of Quraysh",
    description:
      "The shepherd boy who became one of the foremost scholars of Qur'an, whose recitation the Prophet ﷺ loved to hear.",
    category: "Sahaba",
    readTime: "6 min",
    sections: {
      intro: p(
        "'Abdullah ibn Mas'ud ibn Ghafil al-Hudhali, of the tribe of Hudhayl allied to Quraysh, was born in Makkah around 594 CE. Short, slim, with thin legs, he served as a shepherd for 'Uqbah ibn Abi Mu'ayt before Islam.",
        "He was the sixth person to embrace Islam, in the very earliest days of the message.",
      ),
      life: p(
        "His conversion happened when, as a boy tending sheep, the Prophet ﷺ and Abu Bakr passed by and asked for milk. He explained the sheep were not his and could not be given. The Prophet ﷺ asked instead for a young female that had not yet been mated; he brought one. The Prophet ﷺ stroked her udder, prayed, and milked her — a miracle that astonished Ibn Mas'ud and led to his Islam.",
        "He became a constant companion of the Prophet ﷺ — entering his house freely, carrying his sandals, holding his miswak, walking beside him. The Companions joked that they thought him part of the household.",
        "He was the first person to recite the Qur'an aloud in Makkah, in front of Quraysh at the Ka'bah. They beat him until his face was bloodied; he returned the next day and did it again.",
        "The Prophet ﷺ said: 'Take the Qur'an from four: 'Abdullah ibn Mas'ud, Salim, Mu'adh, and Ubayy ibn Ka'b.' He once asked Ibn Mas'ud to recite to him; Ibn Mas'ud read from Surah al-Nisa', and when he reached verse 41 the Prophet ﷺ wept and said, 'Enough.'",
        "After the Prophet ﷺ, Ibn Mas'ud was sent by 'Umar to Kufa as a teacher, and there he laid the foundation of the Kufan school of Qur'anic recitation, fiqh, and Arabic — which produced students like Alqamah, Masruq, and through them, eventually, Imam Abu Hanifah's school.",
        "He passed away in Madinah in 32 AH at about sixty.",
      ),
      legacy: p(
        "Ibn Mas'ud's recitation, fiqh, and tafsir are foundational to Islamic scholarship. The Kufan school of Qur'anic recitation traces to him, as does much of the early jurisprudence of Iraq.",
        "He showed that intimacy with the Qur'an — its recitation, understanding, and application — is the highest pursuit a Muslim can take up.",
      ),
      keyFacts: [
        "Born c. 594 CE; died 32 AH (652 CE)",
        "Sixth person to embrace Islam",
        "First to recite the Qur'an publicly in Makkah",
        "Among the four foremost reciters per the Prophet ﷺ",
        "Founder of the Kufan school of recitation and fiqh",
      ],
      lessons: p(
        "Be brave for the Book of Allah. He recited at the Ka'bah knowing he would be beaten. Speak the Qur'an in your home and life without fear.",
        "Learn directly from the Source. He was the closest student of the Prophet's recitation. Study the Qur'an from teachers, not just from books.",
        "Small bodies, vast hearts. He was small in stature but mighty in knowledge. Do not measure capacity by appearance.",
      ),
    },
  },

  {
    id: "salman",
    title: "Salman al-Farisi (RA) — One of the Family",
    description:
      "The Persian seeker who travelled across continents searching for the true religion until he found the Prophet ﷺ in Madinah.",
    category: "Sahaba",
    readTime: "8 min",
    sections: {
      intro: p(
        "Salman, originally named Mahbah, was born in the Persian village of Jayy near Isfahan around 568 CE. The son of the village dihqan (chief), he was raised as a devout Zoroastrian, expected to inherit his father's role tending the sacred fire.",
        "But a chance encounter with Christians at prayer in a small chapel changed his life — and began one of the most remarkable spiritual journeys in human history.",
      ),
      life: p(
        "His father confined him at home when he showed interest in Christianity. Salman escaped, joined a caravan to Sham, and apprenticed himself to one righteous monk after another. As each teacher died, he was directed onward — first to Mosul, then Nasibin, then Ammuriyyah.",
        "His final teacher told him that the time of a final prophet had come, who would emerge from Arabia, migrate to a land of date palms between two lava plains, and bear specific signs: he would not eat charity, would accept gifts, and would have the seal of prophethood between his shoulders.",
        "Travelling with a Bedouin caravan to find this prophet, Salman was betrayed, sold into slavery, and ended up in Madinah. There he heard of Muhammad ﷺ. He tested him: he gave him dates as charity (the Prophet ﷺ gave them to his Companions and did not eat); he gave him dates as a gift (the Prophet ﷺ ate); and on the third visit the Prophet ﷺ saw him circling and let his cloak fall, revealing the seal between his shoulders.",
        "Salman wept and embraced Islam. He was still a slave, so the Prophet ﷺ helped him purchase his freedom by encouraging the Companions to plant 300 date palms for his master and pay a sum of gold.",
        "Years later at the Battle of the Trench (5 AH), when Madinah faced the largest army ever assembled against it, Salman suggested a strategy unknown to the Arabs but familiar to the Persians: dig a defensive trench. The trench saved the city. The Muhajirun claimed Salman as one of theirs; the Ansar claimed him as one of theirs. The Prophet ﷺ settled it: 'Salman is one of us, the Ahl al-Bayt.'",
        "He served as governor of al-Mada'in (the former Persian capital) under 'Umar — yet lived in such simplicity that visitors could not tell the governor from a labourer. He died around 35 AH, well into his eighties, possibly older.",
      ),
      legacy: p(
        "Salman's life answers anyone who claims they cannot find the truth. He crossed continents, was enslaved, was betrayed, and still arrived. Allah does not waste the search of a sincere heart.",
        "He embodies Islam's universality: a Persian who became Ahl al-Bayt by character. His engineering at the Trench shows the Ummah's openness to wisdom from any culture.",
      ),
      keyFacts: [
        "Born c. 568 CE in Jayy, Persia; died c. 656 CE",
        "Sought the truth across Sham, Mosul, Nasibin, and Ammuriyyah",
        "Sold into slavery; freed in Madinah with the Prophet's help",
        "Designed the Trench at the Battle of the Khandaq (5 AH)",
        "Declared 'one of us, the Ahl al-Bayt' by the Prophet ﷺ",
        "Governor of al-Mada'in under 'Umar",
      ],
      lessons: p(
        "Seek the truth and Allah will guide you. He left his home, his religion, even his freedom in pursuit, and arrived. Move toward truth; the path opens.",
        "Wisdom belongs to whoever picks it up. The trench was a Persian idea adopted in Madinah. Do not reject good ideas because of where they come from.",
        "Status is character, not lineage. He was Persian, a slave, then a governor, and the Prophet ﷺ called him family. Build the character; the standing will follow.",
        "Live simply even with authority. As governor he wove palm leaves to pay for his food. Do not let position raise your appetite.",
      ),
    },
  },

  {
    id: "musab-umayr",
    title: "Mus'ab ibn Umayr (RA) — The Ambassador of Madinah",
    description:
      "The handsome young noble who left luxury for Islam and became the first envoy of the Prophet ﷺ.",
    category: "Sahaba",
    readTime: "6 min",
    sections: {
      intro: p(
        "Mus'ab ibn 'Umayr al-'Abdari, of Quraysh's noble Banu 'Abd al-Dar, was born in Makkah around 595 CE into one of the wealthiest families in the city. His mother Khunas bint Malik was famous for her riches and her fierce protection of him.",
        "He was breathtakingly handsome, beautifully dressed, perfumed in the finest scents. The young women of Makkah longed for him; the young men envied him. He was the favourite child of his family.",
      ),
      life: p(
        "He heard about the Prophet's gatherings at Dar al-Arqam and went out of curiosity. He listened to the Qur'an and embraced Islam at perhaps eighteen years old. He kept his Islam secret at first, fearing his mother. When she discovered it, she had him bound and locked away. He escaped and migrated to Abyssinia.",
        "When he returned to Makkah, the contrast struck the Companions: the young man who once trailed the perfume of Ta'if's finest oils was now in patched, simple clothes. The Prophet ﷺ wept when he saw him: 'I have seen this Mus'ab, and there was no youth in Makkah more pampered by his parents than he. Then he abandoned all that for the love of Allah and His Messenger.'",
        "After the second Pledge of 'Aqabah, the Prophet ﷺ sent Mus'ab ahead of all the Muslims to Madinah as the first ambassador and teacher. Through his gentle, wise, patient da'wah, prominent figures like Sa'd ibn Mu'adh and Usayd ibn Hudayr embraced Islam, and through them their entire tribes. By the time the Prophet ﷺ migrated, almost every household in Madinah had a Muslim.",
        "He carried the banner of the Muhajirun at Badr and at Uhud. At Uhud, when the Muslim line broke and assassins closed on the Prophet ﷺ, Mus'ab stood firm holding the banner. His right hand was severed; he held the banner with his left and recited: 'Muhammad is but a messenger; messengers have passed away before him' (Qur'an 3:144). His left hand was severed; he held the banner against his chest with his stumps until he was speared and martyred.",
        "When his body was found, there was not enough cloth to cover him. If they covered his head, his feet were exposed; if his feet, his head. The Prophet ﷺ wept and said: 'Cover his head and put idhkhir grass over his feet.'",
      ),
      legacy: p(
        "Mus'ab is the model for the young Muslim called to da'wah: handsome, gifted, beloved, and willing to lay it all down for Allah. His success in Madinah prepared the city for the Prophet's arrival.",
        "His death scene — banner clutched to a torn body — is one of the most powerful images of martyrdom in Islamic history. His cloak became a symbol of how dunya means nothing once a believer has chosen Allah.",
      ),
      keyFacts: [
        "Born c. 595 CE; martyred at Uhud in 3 AH (625 CE)",
        "From the wealthiest youth of Makkah",
        "First ambassador of Islam — to Madinah before the Hijrah",
        "Standard-bearer of the Muhajirun at Badr and Uhud",
        "His burial cloth was too short to cover his whole body",
      ],
      lessons: p(
        "Beauty and wealth are tests, not rewards. He had everything and walked away from it for Allah. Ask what you would surrender for the same prize.",
        "Da'wah requires character before content. His gentleness in Madinah opened more doors than any argument. Be the person whose presence makes Islam attractive.",
        "Hold the banner with whatever you have left. He had no hands and used his chest. Whatever capacity you retain, use it for the truth.",
      ),
    },
  },

  {
    id: "khabbab",
    title: "Khabbab ibn al-Aratt (RA) — The Tortured Believer",
    description:
      "The blacksmith slave whose skin was scarred by the cruelty of jahiliyyah, and whose patience the Prophet ﷺ taught the Ummah.",
    category: "Sahaba",
    readTime: "5 min",
    sections: {
      intro: p(
        "Khabbab ibn al-Aratt al-Tamimi was born around 586 CE. Captured in early childhood during a raid, he was sold into slavery in Makkah to a woman named Umm Anmar of the tribe of Khuza'a. He worked as a blacksmith, making swords.",
        "He embraced Islam very early — among the first ten Muslims — and concealed nothing of his faith.",
      ),
      life: p(
        "His mistress and her brother tortured him brutally. They placed burning coals on his bare back; the heat of his own flesh extinguished the embers. They wrapped him in iron armour heated in the sun. Years later, when 'Umar asked him to describe what he had endured, Khabbab simply turned and showed his back — and 'Umar said he had never seen anything like it.",
        "He went to the Prophet ﷺ one day in the shade of the Ka'bah, with the Prophet's cloak under his head, complaining of the persecution: 'Will you not pray to Allah for help?' The Prophet ﷺ sat up, his face red, and said: 'There were people before you who had iron combs raked through their flesh between bone and skin, and yet that did not turn them from their religion. By Allah, this religion will be completed, until a rider travels from San'a to Hadramawt fearing none but Allah and the wolf for his sheep — but you are being hasty.'",
        "He fought at Badr and the major battles. He lived to see the Muslim conquests and the wealth that flowed back to Madinah. He wept when he saw the contrast with the early days: 'Our companions died and did not receive any of this; ours has been kept for us until now — we fear it has been our reward in advance.'",
        "He died in 37 AH in Kufa, the first Muhajir to be buried there.",
      ),
      legacy: p(
        "Khabbab's scarred back became a teaching tool for the early Ummah and a reminder for every later generation: this religion is not free of cost. His story is among the most cited when Muslims face hardship.",
        "His weeping over wealth at the end of his life is a classical reference point in discussions of zuhd: that sometimes Allah's worldly gifts can be a person's portion.",
      ),
      keyFacts: [
        "Born c. 586 CE; died 37 AH (657 CE)",
        "Among the first ten Muslims",
        "A slave blacksmith brutally tortured for his faith",
        "Heard the famous prophecy of San'a to Hadramawt from the Prophet ﷺ",
        "First Muhajir buried in Kufa",
      ],
      lessons: p(
        "Patience was demanded of believers before us. The Prophet ﷺ pointed to those whose flesh was combed off their bones. Whatever you face is small compared to what some endured for Allah.",
        "Don't be hasty for results. The Prophet ﷺ promised victory, but in Allah's time. Sow now; trust the harvest.",
        "Fear ease as well as hardship. He wept when wealth came. Both poverty and prosperity are tests of where your heart lies.",
      ),
    },
  },

  {
    id: "ammar",
    title: "Ammar ibn Yasir (RA) — Son of the First Martyrs",
    description:
      "Whose family was the first to be killed for Islam, and whom the Prophet ﷺ said was 'filled with faith from his head to his feet'.",
    category: "Sahaba",
    readTime: "6 min",
    sections: {
      intro: p(
        "'Ammar ibn Yasir al-'Ansi was born in Makkah around 570 CE, the son of Yasir, a Yemeni who had migrated to Makkah, and Sumayyah bint Khayyat, a slave-woman freed by Abu Hudhayfah. The family was poor and without strong tribal protection.",
        "All three — Yasir, Sumayyah, and 'Ammar — embraced Islam together very early.",
      ),
      life: p(
        "Without a powerful clan to protect them, the family was tortured savagely by Abu Jahl and the chiefs of Quraysh. The Prophet ﷺ would pass them as they writhed in the burning sand and say: 'Patience, family of Yasir — your appointment is Paradise.'",
        "Sumayyah was killed by Abu Jahl — speared through her chest while bound — becoming the first martyr of Islam. Yasir was killed under torture soon after — the second martyr. 'Ammar himself was tortured until, in extremis, he uttered words of disbelief his torturers demanded. He came to the Prophet ﷺ weeping, fearing he had left Islam. The Prophet ﷺ wiped his tears and said: 'If they do it again, say it again.' Allah revealed: 'Whoever disbelieves in Allah after his belief — except one who is forced while his heart is at rest with faith...' (Qur'an 16:106).",
        "He migrated to Madinah, fought at Badr, Uhud, the Trench, and every major battle. He helped build the first masjid of the Prophet ﷺ — the Prophet ﷺ would dust him off himself, saying: 'O 'Ammar, you will be killed by the rebellious party. You are calling them to Paradise and they are calling you to the Fire.'",
        "He served as governor of Kufa under 'Umar, beloved for his simplicity. During the fitna, he sided with 'Ali and was killed at the Battle of Siffin in 37 AH at about ninety-three years old. The hadith of the 'rebellious party' was a major sign for many Companions about the rightness of 'Ali's cause.",
      ),
      legacy: p(
        "'Ammar and his family stand as Islam's first great witnesses of martyrdom. The verse revealed about him is a permanent legal principle: a person under genuine duress whose heart remains firm is not a disbeliever for words spoken under coercion.",
        "His death at Siffin gave Companions a clear reference point in a confusing fitna. The Prophet's prophecy was fulfilled.",
      ),
      keyFacts: [
        "Born c. 570 CE; martyred at Siffin in 37 AH (657 CE)",
        "Son of the first two martyrs of Islam — Sumayyah and Yasir",
        "Subject of Qur'an 16:106 on duress",
        "The Prophet ﷺ said he was 'filled with faith from his head to his feet'",
        "Foretold by the Prophet ﷺ to be killed by 'the rebellious party'",
      ],
      lessons: p(
        "Allah accepts the trembling of forced tongues if hearts are firm. Do not be paralysed by fear of falling under coercion; Allah is merciful with the heart's reality.",
        "Your test is calibrated to your strength. The family of Yasir bore what they could and were honoured beyond measure. Trust that what you face is what He has measured for you.",
        "The Prophet's words come true. Multiple Companions tracked his prophecies through their lives. Take his sayings seriously; they are guidance and they are foresight.",
      ),
    },
  },

  {
    id: "abu-dharr",
    title: "Abu Dharr al-Ghifari (RA) — The Truthful Ascetic",
    description:
      "The fierce Bedouin who travelled alone to Makkah seeking the truth and lived as the conscience of the Ummah on wealth and justice.",
    category: "Sahaba",
    readTime: "7 min",
    sections: {
      intro: p(
        "Jundub ibn Junadah al-Ghifari, known as Abu Dharr, was born around 568 CE in the tribe of Ghifar near the Red Sea — a tribe famous in jahiliyyah for highway robbery. As a young man Abu Dharr himself raided caravans, but he had also rejected idols on his own and worshipped Allah alone for three years before he ever heard of Islam.",
        "He was tall, dark-skinned, lean, and had a tongue of iron — speaking truth without polish, without fear, and without compromise.",
      ),
      life: p(
        "When news reached him of a man in Makkah claiming prophethood, he sent his brother Unays to investigate, then went himself. Quietly entering Makkah, he was hosted by 'Ali (RA) for three days. On the fourth he met the Prophet ﷺ, accepted Islam, and immediately announced it openly at the Ka'bah — knowing it would mean a beating. He was beaten almost to death; al-'Abbas saved him by warning Quraysh that Ghifar controlled their trade routes.",
        "He returned to his tribe and called them to Islam; many embraced it. Then he came to Madinah and devoted himself to the Prophet ﷺ. He was famed for memorising hadith, especially on zuhd (asceticism), social justice, and the dangers of hoarded wealth.",
        "The Prophet ﷺ said of him: 'The earth has not carried, nor the sky shaded, anyone more truthful than Abu Dharr.'",
        "During 'Uthman's caliphate he became sharply critical of the wealth gathered by some governors, especially Mu'awiyah in Sham. He recited verses about the punishment for hoarding gold and silver loudly, in markets and at gatherings. 'Uthman, with his agreement, moved him to al-Rabadhah, a desert outpost, where he lived in simplicity.",
        "He died there around 32 AH, alone with his wife. A passing caravan led by 'Abdullah ibn Mas'ud and others washed and buried him. The Prophet ﷺ had foretold long before: 'May Allah have mercy on Abu Dharr — he walks alone, he dies alone, and he is resurrected alone.'",
      ),
      legacy: p(
        "Abu Dharr is the Ummah's voice of conscience on wealth, hoarding, and luxury. He challenges every generation that grows comfortable with extreme inequality.",
        "His personal asceticism, fearless honesty, and devotion to truth — even when it cost him every comfort — make him a permanent witness in Islamic moral life.",
      ),
      keyFacts: [
        "Born c. 568 CE; died c. 32 AH (652 CE) in al-Rabadhah",
        "Worshipped Allah alone before hearing of Islam",
        "The fifth person to embrace Islam by some accounts",
        "Declared Islam openly at the Ka'bah, beaten almost to death",
        "Foretold by the Prophet ﷺ to live, die, and be raised alone",
        "Famous for sayings on wealth, justice, and asceticism",
      ],
      lessons: p(
        "Truth is more important than comfort. He lost his home to keep his tongue. Speak truth to power even when the price is exile.",
        "Live below your means. He owned almost nothing and lacked nothing. Cultivate the freedom that comes from low needs.",
        "Walk alone if you must. He lived, died, and was raised in solitude — and Allah was with him. If conviction isolates you, do not abandon it for company.",
        "Wealth is a trust with sharp edges. He warned about gold and silver hoarded away from the poor. Audit your own savings for what you owe Allah and His creation.",
      ),
    },
  },
];
