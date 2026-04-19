import type { Story } from "./stories";

const p = (...paragraphs: string[]) => paragraphs;

// Sahaba 26–50 — based on Siyar A'lam al-Nubala (al-Dhahabi),
// Sahih al-Bukhari, Sahih Muslim, al-Isaba (Ibn Hajar), and Tabaqat (Ibn Sa'd).
export const sahabaPart2: Story[] = [
  {
    id: "muadh",
    title: "Mu'adh ibn Jabal (RA) — The Most Knowledgeable in Halal & Haram",
    description:
      "The young Ansari scholar whom the Prophet ﷺ sent to teach Yemen and whom he loved deeply.",
    category: "Sahaba",
    readTime: "6 min",
    sections: {
      intro: p(
        "Mu'adh ibn Jabal al-Khazraji was born in Madinah around 603 CE, of the Ansari tribe of Khazraj. Tall, fair, with bright teeth and a striking gaze, he embraced Islam at eighteen during the Pledge of 'Aqabah and was at the Prophet's side from the moment of the Hijrah.",
        "He was profoundly intelligent, gentle in speech, generous with his wealth — and a passionate student of revelation.",
      ),
      life: p(
        "The Prophet ﷺ said: 'The most knowledgeable of my Ummah in halal and haram is Mu'adh ibn Jabal.' He was among the four reciters from whom the Prophet ﷺ commanded the Companions to take the Qur'an. The Prophet ﷺ once held his hand and said: 'O Mu'adh, by Allah I love you. Do not forget after every prayer to say: O Allah, help me to remember You, to thank You, and to worship You well.'",
        "When the Prophet ﷺ sent him as governor and teacher to Yemen, he asked: 'How will you judge?' Mu'adh said: 'By the Book of Allah.' 'And if you find nothing there?' 'By the Sunnah of Allah's Messenger.' 'And if you find nothing there?' 'I will exert my own judgment (ijtihad), and I will not fall short.' The Prophet ﷺ struck his chest and said: 'Praise be to Allah, who has guided the messenger of the Messenger to what pleases the Messenger of Allah.'",
        "He served in Yemen for the rest of the Prophet's life. Returning under Abu Bakr, he was sent to Sham under 'Umar to teach the new Muslims. He died in the Plague of 'Amwas in 18 AH at around thirty-eight, leaving an immense scholarly legacy.",
      ),
      legacy: p(
        "Mu'adh's three-step methodology — Qur'an, then Sunnah, then ijtihad — became the foundation of Islamic legal reasoning (usul al-fiqh).",
        "He was a teacher of teachers in Sham; through his students much of the early scholarship of Damascus and Homs flowed.",
      ),
      keyFacts: [
        "Born c. 603 CE; died 18 AH (639 CE) in the Plague of 'Amwas",
        "Most knowledgeable of the Ummah in halal and haram (per the Prophet ﷺ)",
        "One of the four Qur'an reciters named by the Prophet ﷺ",
        "Sent to Yemen as judge and teacher",
        "Founded the methodology of Qur'an → Sunnah → ijtihad",
      ],
      lessons: p(
        "Love between teacher and student matters. The Prophet ﷺ told him 'I love you' and gave him the post-salah du'a. Build affectionate relationships with those you learn from and teach.",
        "Anchor your judgments in revelation. Mu'adh's method is your method: ask first what the Qur'an says, then the Sunnah, then bring your reasoning carefully.",
        "Never forget the dhikr after salah. Repeat his daily du'a — it is a gift the Prophet ﷺ left for every one of us.",
      ),
    },
  },

  {
    id: "ubayy",
    title: "Ubayy ibn Ka'b (RA) — Master of Reciters",
    description:
      "The Ansari scholar to whom the Prophet ﷺ recited Surah al-Bayyinah, declared the master of reciters of the Ummah.",
    category: "Sahaba",
    readTime: "5 min",
    sections: {
      intro: p(
        "Ubayy ibn Ka'b al-Khazraji was born in Madinah around 580 CE, of Banu al-Najjar of Khazraj — a literate scribe in an age when most Arabs could not read.",
        "He embraced Islam at the second 'Aqabah and became one of the Prophet's principal scribes of revelation.",
      ),
      life: p(
        "He was at every battle from Badr onward. The Prophet ﷺ once said to him: 'O Ubayy, Allah has commanded me to recite the Qur'an to you.' Ubayy asked, weeping: 'Did Allah mention me by name?' 'Yes.' He wept more.",
        "The Prophet ﷺ said: 'The most knowledgeable of my Ummah in recitation is Ubayy.' He named him 'Sayyid al-Qurra' — Master of the Reciters.",
        "After the Prophet's death, both Abu Bakr and 'Umar consulted Ubayy on Qur'anic matters constantly. He was on the committee under 'Uthman that produced the standardised mushaf. He led the people in tarawih during 'Umar's caliphate when 'Umar formally re-instituted congregational tarawih.",
        "He died in Madinah around 30 AH at about fifty.",
      ),
      legacy: p(
        "Ubayy is the foundational reciter of the Qur'an in the Madinan tradition. The recitations preserved through the Ummah trace partly to his transmission.",
        "He showed the dignity Allah gives to the people of the Qur'an — the Prophet ﷺ himself recited to him on Allah's command.",
      ),
      keyFacts: [
        "Born c. 580 CE; died c. 30 AH (650 CE)",
        "Master of the reciters (Sayyid al-Qurra')",
        "Allah commanded the Prophet ﷺ to recite Qur'an to him",
        "Member of 'Uthman's mushaf committee",
        "Led tarawih during 'Umar's caliphate",
      ],
      lessons: p(
        "Make the Qur'an your life's work. Ubayy's name lives forever because he served the Book. Devote serious time to recitation, memorisation, and understanding.",
        "Receive honour with humility. He wept when Allah mentioned him. When Allah blesses you, respond with gratitude, not with pride.",
      ),
    },
  },

  {
    id: "zayd-thabit",
    title: "Zayd ibn Thabit (RA) — Compiler of the Mushaf",
    description:
      "The teenage scribe who learned Hebrew and Syriac for the Prophet ﷺ and compiled the Qur'an for Abu Bakr and 'Uthman.",
    category: "Sahaba",
    readTime: "6 min",
    sections: {
      intro: p(
        "Zayd ibn Thabit al-Ansari was born in Madinah around 611 CE. His father was killed in jahiliyyah; he was raised by his mother. He was eleven when the Prophet ﷺ arrived in Madinah and was already memorising Surah Qaf.",
        "Bright, quick to learn, with a remarkable gift for languages, he became the Prophet's chief scribe.",
      ),
      life: p(
        "He came to the Prophet ﷺ at thirteen wishing to fight at Badr; he was sent home as too young. At Uhud (fourteen) he was again refused. Finally at the Trench he was allowed to fight.",
        "The Prophet ﷺ asked him to learn the language of the Jews of Madinah for correspondence; he mastered it in fifteen days. He then learned Syriac. He recorded letters to and from the Prophet ﷺ to foreign powers.",
        "He was one of the principal scribes of revelation. He memorised the entire Qur'an directly from the Prophet ﷺ, in the final review (al-'arda al-akhira) the year of the Prophet's death.",
        "After the Battle of Yamamah killed many memorisers of the Qur'an, 'Umar urged Abu Bakr to compile the Qur'an into a single book. Abu Bakr called Zayd. Zayd protested that this had not been done by the Prophet ﷺ — but Abu Bakr persuaded him, and the immense, careful work of collecting every verified verse from written and memorised sources fell to Zayd. He produced the first complete mushaf, kept in the custody of Hafsah (RA) after Abu Bakr.",
        "Years later 'Uthman called him again to lead the committee that standardised the mushaf for distribution. Zayd thus stands at the centre of the two greatest preservation projects in Islamic history.",
        "He served as judge in Madinah and was the foremost authority on inheritance law (faraid). He died around 45 AH.",
      ),
      legacy: p(
        "Every Qur'an in the world today is, in textual lineage, the work of Zayd ibn Thabit's compilation and standardisation under Abu Bakr and 'Uthman.",
        "He set the standard for the Muslim scholar: linguist, memoriser, scribe, jurist — devoted to faithful preservation of revelation.",
      ),
      keyFacts: [
        "Born c. 611 CE; died c. 45 AH (665 CE)",
        "Chief scribe of the Prophet ﷺ",
        "Mastered Hebrew and Syriac for the Prophet ﷺ",
        "Compiled the first mushaf for Abu Bakr",
        "Led 'Uthman's standardisation committee",
        "Foremost authority on inheritance law (faraid)",
      ],
      lessons: p(
        "Start serving young. He was a teenager when he became indispensable. Whatever your age, offer your skills now.",
        "Learn languages to serve Islam. He picked up two languages for the Prophet ﷺ in days. Use linguistic skill in service of the deen.",
        "Caution in great undertakings is not weakness. He hesitated to compile the Qur'an — and that very caution made him the safe pair of hands for the task.",
      ),
    },
  },

  {
    id: "ibn-abbas",
    title: "Abdullah ibn Abbas (RA) — Translator of the Qur'an",
    description:
      "The Prophet's young cousin for whom he prayed for understanding of the religion, and who became the foremost mufassir.",
    category: "Sahaba",
    readTime: "7 min",
    sections: {
      intro: p(
        "'Abdullah ibn al-'Abbas ibn 'Abd al-Muttalib was born in Makkah three years before the Hijrah, in the household of the Prophet's uncle al-'Abbas. He was about thirteen when the Prophet ﷺ passed away.",
        "Tall, fair, with a striking face and brilliant mind, he attached himself to the Prophet ﷺ as a child, fetching his wudu water, observing his every act.",
      ),
      life: p(
        "The Prophet ﷺ once embraced him and said: 'O Allah, give him understanding of the religion and teach him interpretation.' That du'a defined his life.",
        "After the Prophet's death — though he was only a teenager — Ibn 'Abbas refused to rest. He would walk to the houses of senior Companions in the heat of the day, sleep on their doorsteps if they were resting, and ask them about hadiths and rulings he had not witnessed himself. The older Companions would say: 'You are an Imam; we should be coming to you.' He would reply: 'No — knowledge comes to the seeker, not the other way.'",
        "By his thirties he was the leading scholar of the Ummah in tafsir, hadith, fiqh, and Arabic. 'Umar would seat him in the council of senior Companions and say to those who objected: 'You will see why.'",
        "He was largely blind in his old age. He fought at the Camel and Siffin alongside 'Ali, then withdrew from political conflict in his later years. He died in Ta'if around 68 AH at about seventy.",
        "When he was buried, a voice was heard reciting: 'O reassured soul, return to your Lord, well-pleased and pleasing to Him' (Qur'an 89:27–28).",
      ),
      legacy: p(
        "Ibn 'Abbas is called Hibr al-Ummah ('the Scholar of the Ummah') and Tarjuman al-Qur'an ('the Translator of the Qur'an'). His tafsir is foundational; almost every classical work of tafsir cites him constantly.",
        "His scholarly humility — chasing knowledge to the doorsteps of his elders — set the example for every later student. The school of Makkan scholarship traces to him.",
      ),
      keyFacts: [
        "Born 3 BH; died c. 68 AH (687 CE) in Ta'if",
        "Cousin of the Prophet ﷺ",
        "Subject of the Prophet's du'a for understanding and tafsir",
        "Title: Hibr al-Ummah, Tarjuman al-Qur'an",
        "Foundational source of classical tafsir",
      ],
      lessons: p(
        "Du'a shapes destiny. The Prophet's prayer for him made him what he became. Ask Allah for what you need and pray for those you love.",
        "Knowledge bows to the seeker. He went to others, slept on their doorsteps, never demanded to be served. Pursue knowledge with humility and effort.",
        "Don't let youth limit your ambition. He was the leading scholar in his thirties. Begin now.",
      ),
    },
  },

  {
    id: "ibn-umar",
    title: "Abdullah ibn Umar (RA) — Follower of the Sunnah",
    description:
      "The son of 'Umar who matched the Prophet's footsteps step for step, refusing to deviate from the Sunnah in even the smallest detail.",
    category: "Sahaba",
    readTime: "6 min",
    sections: {
      intro: p(
        "'Abdullah ibn 'Umar ibn al-Khattab was born in Makkah around 612 CE. He was about ten at the Hijrah and grew up in the Prophet's Madinah, deeply attached to him from childhood.",
        "He was scrupulous, pious, gentle, and exceedingly cautious — a man who built his entire life around imitating the Prophet ﷺ as exactly as he could.",
      ),
      life: p(
        "He sought to fight at Uhud at thirteen and was refused. He was finally allowed at fifteen at the Trench. He fought in the conquests of Sham, Iraq, and Egypt.",
        "He had a dream that he was taken into Paradise and was about to be cast into the Fire when an angel said: 'Have no fear.' He told his sister Hafsah, who told the Prophet ﷺ. The Prophet ﷺ said: 'What an excellent man 'Abdullah is — if only he prayed at night.' From that day on, Ibn 'Umar barely slept without praying tahajjud.",
        "His imitation of the Sunnah was extraordinary. He would camp at every spot the Prophet ﷺ had camped, sit under the same trees, water his camel at the same wells, even step into footprints he believed the Prophet ﷺ had left. He once turned his camel around in a road simply because he had seen the Prophet ﷺ do so there.",
        "He was offered the caliphate three times — after 'Uthman, by 'Ali's circle, and at other moments. He refused each time, saying he would not divide the Ummah or seek power for himself.",
        "He was deeply respected by all factions in the fitna and stayed neutral. He freed over a thousand slaves in his lifetime. He died in Makkah in 73 AH at about eighty-five, after being deliberately wounded by a poisoned spear during al-Hajjaj's siege of Ibn al-Zubayr.",
      ),
      legacy: p(
        "Ibn 'Umar is among the four prolific narrators of hadith — second only to Abu Hurayrah, with about 2,630 narrations. His scrupulous adherence to the Sunnah made him a living reference for the Companions.",
        "He set the standard for ittiba' (following) the Sunnah without addition or subtraction. The Hanbali school in particular draws much from his methodology.",
      ),
      keyFacts: [
        "Born c. 612 CE; died 73 AH (692 CE) in Makkah",
        "Son of 'Umar ibn al-Khattab (RA)",
        "Narrated around 2,630 hadiths",
        "Refused the caliphate multiple times",
        "Freed over 1,000 slaves",
        "Famous for exact imitation of the Prophet's actions",
      ],
      lessons: p(
        "A single dream can reshape a life. He prayed tahajjud for sixty years because of one dream. Take the signs Allah sends seriously.",
        "Imitation is love made practical. He copied the Prophet ﷺ in steps and stops. Study the Sunnah of daily life and put it into your own.",
        "Refuse power that will divide. Three offers of leadership, three refusals. Some honours are best declined.",
      ),
    },
  },

  {
    id: "anas",
    title: "Anas ibn Malik (RA) — Servant of the Prophet ﷺ",
    description:
      "The young Ansari boy whose mother gave him to serve the Prophet ﷺ for ten years, and who narrated thousands of hadiths.",
    category: "Sahaba",
    readTime: "6 min",
    sections: {
      intro: p(
        "Anas ibn Malik al-Ansari, of Khazraj's Banu al-Najjar, was born in Madinah around 612 CE. He was about ten when the Prophet ﷺ arrived as a Muhajir.",
        "His mother Umm Sulaym brought him to the Prophet ﷺ with the words: 'O Messenger of Allah, this is my son Anas; he will serve you.'",
      ),
      life: p(
        "For ten years Anas was the Prophet's personal servant. He later said: 'By Allah, I served him for ten years and he never said to me 'Why did you do this?' or 'Why did you not do that?''",
        "The Prophet ﷺ made du'a for him: 'O Allah, increase his wealth and his children, and bless what You give him.' Anas lived to see over a hundred descendants and an immense estate that bore fruit twice a year. He outlived almost every other Companion in Basrah, dying around 93 AH at perhaps over a hundred.",
        "He narrated 2,286 hadiths — the third most of any Companion. Because he served the Prophet ﷺ at home, his narrations include precious details of daily life: how he ate, slept, prayed, washed, dressed, and treated his family.",
        "He participated in the conquests under 'Umar and 'Uthman. When al-Hajjaj began oppressing him in Basrah in old age, Anas wrote to 'Abd al-Malik ibn Marwan, and al-Hajjaj was rebuked.",
      ),
      legacy: p(
        "Anas is one of the most prolific narrators of hadith and the principal source for the Prophet's intimate, household character. His longevity meant he taught generations of Tabi'in.",
        "His mother Umm Sulaym is celebrated for choosing the highest gift she could give — entrusting her child to the Messenger of Allah.",
      ),
      keyFacts: [
        "Born c. 612 CE; died c. 93 AH (712 CE) in Basrah",
        "Personal servant of the Prophet ﷺ for 10 years",
        "Narrated 2,286 hadiths",
        "Subject of the Prophet's du'a for wealth, children, and barakah",
        "Last of the Companions to die in Basrah",
      ],
      lessons: p(
        "Excellence in service. Ten years of attendance and not a word of rebuke. Aim for that quality of work in whatever you do.",
        "Du'a multiplies blessings. The Prophet's prayer turned a servant into a man of immense wealth and progeny. Seek the du'a of the righteous.",
        "Childhood proximity to good people shapes a lifetime. Place your children near scholars and the masjid.",
      ),
    },
  },

  {
    id: "jabir",
    title: "Jabir ibn Abdillah (RA) — The Devoted Narrator",
    description:
      "The Ansari youth whose father was martyred at Uhud, who narrated over fifteen hundred hadiths, and was beloved of the Prophet ﷺ.",
    category: "Sahaba",
    readTime: "6 min",
    sections: {
      intro: p(
        "Jabir ibn 'Abdillah al-Ansari, of Khazraj, was born in Madinah around 607 CE. His father 'Abdullah ibn 'Amr was an early Muslim who had attended the Pledge of 'Aqabah.",
        "He was raised in Islam from infancy and accompanied his father to the Prophet ﷺ from a young age.",
      ),
      life: p(
        "His father was martyred at Uhud, leaving Jabir to care for nine sisters and a debt-burdened estate. The Prophet ﷺ spoke to Jabir about his father's death with extraordinary tenderness: 'O Jabir, what is the matter? Your father — when Allah revived him after his death — said: 'O my Lord, return me so I can be killed in Your way again.' Allah said: 'I have decreed they will not return.''",
        "On his way back from a military expedition, the Prophet ﷺ rode beside Jabir on a slow camel, smacked it, and made it swift; he asked about Jabir's marriage, joked about it, paid off Jabir's father's debts, and bought his camel — then returned it to him as a gift.",
        "Jabir narrated 1,540 hadiths. He was renowned for his retention and would later host gatherings in Madinah where Companions and Tabi'in came to learn. He travelled all the way from Madinah to Sham — a journey of a month — just to hear one hadith from 'Abdullah ibn Unays.",
        "He lived a long life and was the last Ansari of the Pledge of 'Aqabah to die. He passed away in Madinah around 78 AH at about seventy-eight.",
      ),
      legacy: p(
        "Jabir's narrations are vital to fiqh and to our understanding of the Prophet's manhood, generosity, and tenderness. His travel for one hadith became a touchstone for the value classical scholars placed on direct transmission.",
        "He is among the most cited Companions and a major source for the rituals of Hajj, his account of the Farewell Pilgrimage being one of the most detailed in the entire Sunnah.",
      ),
      keyFacts: [
        "Born c. 607 CE; died c. 78 AH (697 CE) in Madinah",
        "Son of a martyr of Uhud",
        "Narrated 1,540 hadiths",
        "Travelled a month to Sham for one hadith",
        "Last surviving 'Aqabah Ansari",
      ],
      lessons: p(
        "Honour the parents who came before you. Jabir kept his father's debts and his father's faith. Carry the responsibilities of those you have lost.",
        "Hunt knowledge where it lives. He travelled a month for one hadith. Effort in seeking is part of the value of what you find.",
        "The Prophet's care extended into the smallest details of life. He bought and re-gifted a camel; he asked about marriage. Imitate this attentiveness with the people in your life.",
      ),
    },
  },

  {
    id: "saad-muadh",
    title: "Sa'd ibn Mu'adh (RA) — For Whom the Throne Shook",
    description:
      "The chief of Aws whose conversion brought a tribe to Islam, and whose death shook 'the Throne of the Most Merciful'.",
    category: "Sahaba",
    readTime: "6 min",
    sections: {
      intro: p(
        "Sa'd ibn Mu'adh al-Ansari, of the Aws tribe, was born in Madinah around 591 CE. Tall, broad-shouldered, dignified, he was already the chief of his people in his early thirties.",
        "Mus'ab ibn 'Umayr arrived in Madinah as the Prophet's emissary, and through his patient, beautiful da'wah, Sa'd embraced Islam. He immediately turned to his tribe of Aws and said: 'O Aws, what do you know of me?' They said: 'Our chief, the best of us in opinion and the most blessed.' He said: 'Then your men and women are forbidden to speak to me until you embrace Islam.' By evening, every man and woman of Aws had embraced Islam.",
      ),
      life: p(
        "He was a pillar of the Ansar at Badr — when the Prophet ﷺ consulted his Companions about facing Quraysh, Sa'd stood and said for the Ansar: 'Go where you wish; we are with you. By the One who sent you with the truth, if you took us into the sea, we would plunge in with you.'",
        "At Uhud he fought beside the Prophet ﷺ. At the Trench he was struck by an arrow in the arm; the wound severed an artery and would not heal.",
        "When the Banu Qurayzah betrayed the treaty and were besieged after the Trench, they surrendered on condition that Sa'd, as their old ally, would judge them. Sa'd was carried out on a stretcher. He ruled according to their own scripture: the men were to be killed, the women and children taken captive. The Prophet ﷺ said: 'You have judged them with the judgment of Allah from above seven heavens.'",
        "His arrow wound reopened. He died from it in 5 AH at about thirty-seven. The Prophet ﷺ said: 'The Throne of the Most Merciful shook for the death of Sa'd ibn Mu'adh.' Seventy thousand angels attended his funeral. The Prophet ﷺ helped carry his body and said the earth pressed him before Allah relieved him.",
      ),
      legacy: p(
        "Sa'd's conversion brought an entire tribe to Islam in a single day, demonstrating the power of principled leadership.",
        "His death and the shaking of the Throne is one of the most extraordinary honours mentioned in the hadith literature for any Companion. He stands as a model for the Muslim leader who lays everything — wealth, influence, life — at Allah's feet.",
      ),
      keyFacts: [
        "Born c. 591 CE; died 5 AH (627 CE) of a Trench wound",
        "Chief of Aws in Madinah",
        "Brought his entire tribe to Islam in one day",
        "Judged the Banu Qurayzah by Allah's judgment",
        "The Throne of the Most Merciful shook at his death",
      ],
      lessons: p(
        "Use your influence for guidance. He used his standing among Aws to lead them all to Islam. Whatever influence you have — in family, work, community — direct it toward Allah.",
        "Be the first to volunteer your loved ones. He pledged the Ansar to plunge into the sea with the Prophet ﷺ. Make your loyalty to truth visible and unconditional.",
        "Death from a small wound, honour from the Throne. Allah does not measure as we do. Live so that your end, however it comes, finds you ready.",
      ),
    },
  },

  {
    id: "saad-ubadah",
    title: "Sa'd ibn Ubadah (RA) — The Generous Chief",
    description:
      "The chief of Khazraj whose home fed every hungry guest of the Prophet ﷺ and whose hospitality became proverbial.",
    category: "Sahaba",
    readTime: "5 min",
    sections: {
      intro: p(
        "Sa'd ibn 'Ubadah al-Ansari, of the tribe of Khazraj, was born in Madinah and was already a chief of his people when Islam came. He embraced Islam at the second 'Aqabah.",
        "He was famed for his generosity even before Islam — his family had fed the hungry for generations, and a sign at his door read: 'Whoever wishes for fat and meat, let him come to Sa'd ibn 'Ubadah.'",
      ),
      life: p(
        "After the Hijrah, his home in Madinah became one of the principal sites for hosting the poor Muhajirun, especially the Ahl al-Suffah. He daily sent food to the masjid and brought home as many guests as he could carry.",
        "He fought at Badr (though sources differ) and at every subsequent battle. He was the standard-bearer of the Ansar at the conquest of Makkah.",
        "After the Prophet's death he was a candidate for the caliphate at Saqifat Bani Sa'idah; the Ansar gathered around him. The matter was settled with Abu Bakr, but Sa'd never gave the pledge of allegiance — though he never opposed it openly. He left Madinah for Sham and died there around 14 AH.",
      ),
      legacy: p(
        "Sa'd ibn 'Ubadah's hospitality became a proverb among the Arabs. Every later book of adab cites him.",
        "His da'wah was the da'wah of food: he opened his home, fed strangers, and let the message flow through generosity.",
      ),
      keyFacts: [
        "Chief of the Khazraj tribe of Madinah",
        "Embraced Islam at the second 'Aqabah",
        "Standard-bearer of the Ansar at the conquest of Makkah",
        "Famous host of the Ahl al-Suffah",
        "Died c. 14 AH (635 CE) in Sham",
      ],
      lessons: p(
        "Open your home. Some of the greatest da'wah is a hot meal and a warm seat. Be the household where hungry believers are welcome.",
        "Honour family traditions of good. His grandfathers fed the hungry; he continued it for Islam. Carry forward your family's best practices and add Islam to them.",
      ),
    },
  },

  {
    id: "ubadah",
    title: "Ubadah ibn al-Samit (RA) — The Bayʿah Companion",
    description:
      "Of the Pledges of 'Aqabah and Badr, who taught the Qur'an in Sham and stood up to governors for the truth.",
    category: "Sahaba",
    readTime: "5 min",
    sections: {
      intro: p(
        "'Ubadah ibn al-Samit al-Ansari, of Khazraj, was born in Madinah around 587 CE. Tall, broad, courageous, he embraced Islam at the first 'Aqabah and was among the twelve Naqibs (chiefs) the Prophet ﷺ appointed at the second 'Aqabah.",
      ),
      life: p(
        "He fought at Badr, Uhud, the Trench, and every battle. Under 'Umar he was sent to Sham as a teacher — one of the principal teachers in Damascus and Homs alongside Abu al-Darda' and Mu'adh ibn Jabal.",
        "He famously stood up to Mu'awiyah (then governor of Sham) over a matter of riba (usury). When Mu'awiyah ordered something contrary to a hadith 'Ubadah had heard from the Prophet ﷺ, 'Ubadah refused and said: 'I will not stay in a land where you are over me' — and prepared to leave. 'Umar wrote from Madinah: 'Return 'Ubadah to his post; there is no good in a land that has no 'Ubadah.'",
        "He narrated 181 hadiths and died in Ramla in 34 AH at about seventy-two.",
      ),
      legacy: p(
        "'Ubadah is foundational to the Sham school of hadith and fiqh. His confrontation with Mu'awiyah is cited as a model of holding leaders accountable to revelation.",
        "He is among the original twelve Naqibs — leaders the Prophet ﷺ appointed before the Hijrah.",
      ),
      keyFacts: [
        "Born c. 587 CE; died 34 AH (655 CE) in Ramla",
        "One of the twelve Naqibs at the second 'Aqabah",
        "Fought at Badr and beyond",
        "Foundational teacher of Sham",
        "Confronted Mu'awiyah over a hadith on riba",
      ],
      lessons: p(
        "Truth is above titles. He answered to Allah, not to the governor. Hold yourself and others to the Prophet's words above any official position.",
        "Be the kind of person whose absence is a loss to the land. 'Umar's words are a measure: live so that your community would feel diminished if you left.",
      ),
    },
  },

  {
    id: "abu-darda",
    title: "Abu al-Darda (RA) — The Sage of Sham",
    description:
      "The wise Companion whose maxims on knowledge, worship, and the heart shaped the spiritual life of Sham.",
    category: "Sahaba",
    readTime: "5 min",
    sections: {
      intro: p(
        "'Uwaymir ibn Malik al-Khazraji, known as Abu al-Darda', was born in Madinah and was the last of his household to embrace Islam. After his conversion he turned wholly to worship and learning, abandoning trade.",
        "He was famed for his wisdom, brevity of speech, and depth of insight into hearts and motives.",
      ),
      life: p(
        "He fought at Uhud and beyond. The Prophet ﷺ said: 'Abu al-Darda' is a sage of my Ummah.'",
        "He was sent by 'Umar to Sham as a teacher and judge, settling in Damascus. His circles in the Umayyad Mosque (then the Great Mosque) drew over a thousand students daily who sat in groups around assistant teachers.",
        "His sayings are quoted across the literature: 'Whoever increases in knowledge of Allah increases in fear of Him.' 'I would rather sit with people of knowledge for an hour than stand in prayer all night.' 'You will not be a scholar until you are a student, and you will not be a true scholar until you act on what you know.'",
        "He died in Damascus around 32 AH.",
      ),
      legacy: p(
        "Abu al-Darda' shaped the spiritual and intellectual atmosphere of Damascus for centuries. His students taught the next generation of Sham scholars.",
        "His sayings on the relationship between knowledge, action, and fear of Allah are cornerstones of Islamic spirituality.",
      ),
      keyFacts: [
        "Died c. 32 AH (652 CE) in Damascus",
        "Called 'a sage of my Ummah' by the Prophet ﷺ",
        "Foundational teacher of Damascus",
        "Famous for wisdom maxims on knowledge and worship",
      ],
      lessons: p(
        "Sit with the people of knowledge. He preferred an hour with scholars to a night of prayer. Choose your circles carefully.",
        "Knowledge that does not change you is not yet knowledge. Apply what you learn before you seek more.",
      ),
    },
  },

  {
    id: "abu-musa",
    title: "Abu Musa al-Ash'ari (RA) — The Beautiful Reciter",
    description:
      "The Yemeni Companion whose recitation the Prophet ﷺ praised as 'a flute from the flutes of the family of David'.",
    category: "Sahaba",
    readTime: "5 min",
    sections: {
      intro: p(
        "'Abdullah ibn Qays al-Ash'ari, known as Abu Musa, was born in Yemen around 602 CE. He travelled to Makkah seeking truth, embraced Islam early, and migrated to Abyssinia. He returned to Madinah after Khaybar.",
      ),
      life: p(
        "He had an exceptionally beautiful voice. The Prophet ﷺ once heard him reciting at night and said: 'Abu Musa has been given a flute from the flutes of the family of David.' Abu Musa said when he heard this: 'O Messenger of Allah, had I known you were listening, I would have made it more beautiful for you.'",
        "He was governor of Zabid and 'Adan in Yemen under the Prophet ﷺ. Under 'Umar he was governor of Basrah and Kufa, founding much of the early jurisprudence and Qur'anic teaching of those cities. He led the conquests of Ahwaz and Isfahan in Persia.",
        "He was one of the two arbitrators chosen at Siffin (37 AH) — a difficult, controversial role that did not resolve the fitna. He withdrew to Makkah after that and devoted himself to worship.",
        "He died around 50 AH.",
      ),
      legacy: p(
        "Abu Musa's recitation set the standard for beautiful Qur'anic voice. His teaching shaped Basrah and Kufa, two of the most important cities of early Islam.",
        "He narrated 360 hadiths and was a major source of the early fiqh of Iraq.",
      ),
      keyFacts: [
        "Born c. 602 CE; died c. 50 AH (670 CE)",
        "Migrated to Abyssinia",
        "Governor in Yemen, Basrah, and Kufa",
        "Praised by the Prophet ﷺ for his recitation",
        "Arbitrator at Siffin",
      ],
      lessons: p(
        "Beautify your recitation. The Prophet ﷺ noticed it. Spend time on tajwid and on the beauty of your voice for the Qur'an.",
        "Public office is heavy. He served well, then withdrew. There is honour in stepping back when your work is done.",
      ),
    },
  },

  {
    id: "amr-aas",
    title: "Amr ibn al-As (RA) — Conqueror of Egypt",
    description:
      "The brilliant strategist who once led Quraysh against Islam, then led Muslim armies into Africa as the conqueror of Egypt.",
    category: "Sahaba",
    readTime: "6 min",
    sections: {
      intro: p(
        "'Amr ibn al-'As ibn Wa'il al-Sahmi, of Quraysh, was born in Makkah around 583 CE. A skilled diplomat and military commander, he led the Quraysh delegation to the Negus of Abyssinia in an attempt to extradite the Muslim refugees there.",
        "It was that very mission that began the cracks in his opposition: he saw the Negus's tears at the recitation of Surah Maryam and his refusal to surrender the Muslims.",
      ),
      life: p(
        "Years later, in 8 AH, he travelled to Madinah with Khalid ibn al-Walid and 'Uthman ibn Talha and embraced Islam. The Prophet ﷺ welcomed him: 'Islam wipes out what came before it.'",
        "He was immediately given commands. The Prophet ﷺ sent him on the Dhat al-Salasil expedition with senior Companions including Abu Bakr and 'Umar under his command — a mark of the trust placed in his judgment. Asked once who was most beloved to the Prophet ﷺ, 'Amr said: 'A'isha among women, her father among men.' Then he said: 'And then Abu Bakr, then 'Umar...' — counting himself far down the list.",
        "Under 'Umar he was sent to conquer Egypt. With a small force he took Pelusium, Bilbeis, the fortress of Babylon, and finally Alexandria in 21 AH, ending Byzantine rule in Egypt and opening the country to Islam. He founded the city of Fustat (which became Cairo) and built its central mosque — the first mosque in Africa, still standing.",
        "He governed Egypt with a mix of administrative brilliance and political pragmatism. He was removed by 'Uthman, supported Mu'awiyah in the fitna, and was reinstated as governor of Egypt under Mu'awiyah. He died there in 43 AH at about sixty.",
      ),
      legacy: p(
        "'Amr is the conqueror of Egypt and the founder of Fustat-Cairo. The Mosque of 'Amr in Cairo is one of the oldest mosques in the world.",
        "He is a complex figure — politically pragmatic in the fitna — but his service to Islam at the Prophet's command and during the conquests is monumental.",
      ),
      keyFacts: [
        "Born c. 583 CE; died 43 AH (664 CE) in Egypt",
        "Embraced Islam in 8 AH",
        "Led the Dhat al-Salasil expedition",
        "Conqueror of Egypt; founder of Fustat",
        "Built the first mosque in Africa",
      ],
      lessons: p(
        "Allah opens the door to whomever turns toward Him. The man who once led delegations against Islam led armies for it. Never close the door on anyone.",
        "Use your gifts. He had a genius for strategy and politics; he poured both into Islam's spread. Identify your gift and dedicate it.",
        "Build institutions that outlast you. His mosque is still in use 1,400 years later. Build with eternity in mind.",
      ),
    },
  },

  {
    id: "amr-jamuh",
    title: "Amr ibn al-Jamuh (RA) — The Limping Martyr",
    description:
      "The elderly lame Ansari who insisted on fighting at Uhud so he could 'walk with this lame leg into Paradise'.",
    category: "Sahaba",
    readTime: "5 min",
    sections: {
      intro: p(
        "'Amr ibn al-Jamuh al-Ansari, of Banu Salimah, was born in Madinah long before Islam. He was a chief of his clan, lame in one leg from birth.",
        "He was the last man of Banu Salimah to embrace Islam — his sons quietly mocked his idol Manat by throwing it into a well, until 'Amr realised the truth and accepted Islam.",
      ),
      life: p(
        "When Uhud approached, he was an old man with a serious limp. Allah had given him exemption from fighting because of his disability. His four strapping sons — all Muslims — were going. He came to the Prophet ﷺ and pleaded: 'O Messenger of Allah, my sons want me to stay behind. By Allah, I hope to walk with this lame leg of mine into Paradise.' The Prophet ﷺ told his sons: 'Let him be — perhaps Allah will grant him martyrdom.'",
        "He fought at Uhud limping forward, sword in hand, calling: 'I want Paradise! I want Paradise!' He was martyred there alongside two of his sons.",
        "The Prophet ﷺ ordered him buried beside his brother-in-law 'Abdullah ibn 'Amr (Jabir's father). Years later when their grave had to be moved due to a flood, both bodies were found fresh and undecayed, their wounds still bleeding.",
      ),
      legacy: p(
        "'Amr ibn al-Jamuh is the patron saint of every Muslim who has been told they cannot serve because of weakness or disability. He insisted on fighting and earned martyrdom and Paradise.",
        "His insistence on his right to die for Allah, despite age and disability, is one of the most moving moments at Uhud.",
      ),
      keyFacts: [
        "Born long before Islam; martyred at Uhud in 3 AH",
        "Lame from birth, yet fought at Uhud",
        "Two of his sons martyred with him",
        "Body found uncorrupted years after burial",
      ],
      lessons: p(
        "Don't let your weakness define your offering. He had every excuse and used none. Bring whatever capacity you have to Allah's service.",
        "Long for Paradise audibly. He marched calling its name. Speak about Jannah; let it shape your goals.",
      ),
    },
  },

  {
    id: "anas-nadr",
    title: "Anas ibn al-Nadr (RA) — 'I Smell Paradise'",
    description:
      "Who missed Badr and swore he would not miss the next, then died at Uhud after declaring 'I smell Paradise beyond Uhud!'",
    category: "Sahaba",
    readTime: "5 min",
    sections: {
      intro: p(
        "Anas ibn al-Nadr al-Ansari, uncle of the famous narrator Anas ibn Malik, was born in Madinah and embraced Islam in its early days there.",
        "He missed the Battle of Badr — and the loss devastated him.",
      ),
      life: p(
        "He told the Prophet ﷺ: 'O Messenger of Allah, I missed the first battle you fought against the polytheists. By Allah, if Allah lets me witness any battle against them, He will see what I will do.'",
        "At Uhud the line of Muslims broke and many fled. He met some of them retreating and rebuked them: 'Why are you living when the Messenger of Allah is dead?' (He had heard the rumour of the Prophet's death.) He drew his sword and walked forward through the chaos.",
        "He met Sa'd ibn Mu'adh and said: 'O Sa'd, by the Lord of the Ka'bah, I smell Paradise beyond Uhud!' He plunged into the enemy and fought until he was killed.",
        "When his body was found after the battle, his sister Rubayyi' could only identify him by his fingertips — over eighty wounds, sword cuts, spear thrusts, and arrow wounds were on his body. Allah revealed about him: 'Among the believers are men true to what they pledged to Allah; some have fulfilled their vow, and some are still waiting...' (Qur'an 33:23).",
      ),
      legacy: p(
        "Anas ibn al-Nadr is the archetype of fulfilling a vow to Allah. His verse stands forever as a description of believers who back their words with their blood.",
        "His words — 'I smell Paradise beyond Uhud' — are among the most moving in the entire Sirah.",
      ),
      keyFacts: [
        "Martyred at Uhud in 3 AH",
        "Subject (along with others) of Qur'an 33:23",
        "Eighty-plus wounds found on his body",
        "Uncle of Anas ibn Malik (RA)",
      ],
      lessons: p(
        "Make a vow to Allah and keep it. He pledged in private and paid in public. Promise less, fulfil more.",
        "Smell Paradise in your acts of obedience. Let the next world be that close to your heart and your senses.",
      ),
    },
  },

  {
    id: "abdullah-rawaha",
    title: "Abdullah ibn Rawahah (RA) — The Poet Martyr",
    description:
      "The poet whose verses defended the Prophet ﷺ against Quraysh's poets, and who marched to martyrdom at Mu'tah singing them.",
    category: "Sahaba",
    readTime: "5 min",
    sections: {
      intro: p(
        "'Abdullah ibn Rawahah al-Ansari, of Khazraj, was born in Madinah and embraced Islam at the second 'Aqabah. He was one of the twelve Naqibs of the Ansar.",
        "He was a celebrated poet, with one of the sharpest tongues in Arabia, whom the Prophet ﷺ used along with Hassan ibn Thabit and Ka'b ibn Malik to answer Quraysh's poetic attacks.",
      ),
      life: p(
        "He was scrupulous, weeping easily, deeply God-conscious. He wrote a couplet that became famous: 'But I have sworn — and there is no avoiding it — to plunge wherever the army plunges; and if the believer is not killed today, he will die another day.'",
        "He fought at Badr, Uhud, the Trench, and the conquest of Khaybar. The Prophet ﷺ sent him as one of three commanders to the Battle of Mu'tah against the Byzantines in 8 AH. The first commander Zayd ibn Harithah fell; the second Ja'far ibn Abi Talib fell; then 'Abdullah took the banner.",
        "He hesitated for a heartbeat — and rebuked himself in poetry: 'O my soul! I see you reluctant to enter Paradise! How long will you live? Plunge in, or you will not be honoured.' He charged in and was killed. The Prophet ﷺ in Madinah saw the battle in vision and wept for the three commanders.",
      ),
      legacy: p(
        "'Abdullah ibn Rawahah is the poet of the Companions, his verses on faith, longing for Paradise, and the dignity of the believer recited for centuries after.",
        "His final self-rebuke at Mu'tah — speaking sternly to his own soul to enter Paradise — is among the most striking moments of personal courage in Islamic history.",
      ),
      keyFacts: [
        "Martyred at Mu'tah in 8 AH (629 CE)",
        "One of the twelve Naqibs of the Ansar",
        "Among the Prophet's defending poets alongside Hassan and Ka'b",
        "Third commander to fall at Mu'tah",
      ],
      lessons: p(
        "Discipline your soul out loud. He spoke to his nafs and rebuked it openly. Train your inner voice to push you toward truth.",
        "Use your art for Allah. His poetry was worship. Whatever creative gift you have — writing, art, music in halal forms — direct it.",
      ),
    },
  },

  {
    id: "jaafar",
    title: "Ja'far ibn Abi Talib (RA) — The Two-Winged",
    description:
      "Cousin of the Prophet ﷺ, leader of the migrants to Abyssinia, who lost both arms holding the banner at Mu'tah and was given two wings in Paradise.",
    category: "Sahaba",
    readTime: "6 min",
    sections: {
      intro: p(
        "Ja'far ibn Abi Talib al-Hashimi, of Banu Hashim, was born in Makkah around 590 CE. Older brother of 'Ali, cousin of the Prophet ﷺ, he was raised in poverty after his father Abu Talib's wealth diminished.",
        "He bore the closest physical resemblance to the Prophet ﷺ in face and character of any of the Banu Hashim. He embraced Islam very early.",
      ),
      life: p(
        "He led the second migration to Abyssinia. When Quraysh's delegation under 'Amr ibn al-'As tried to extradite the Muslims from the Negus, it was Ja'far who stood and gave one of the most beautiful explanations of Islam ever recorded: 'O King, we were a people in jahiliyyah, worshipping idols, eating dead meat, committing immoralities, severing kinship, mistreating the weak — until Allah sent us a messenger from among us, whose lineage we knew, and his truthfulness, trustworthiness, and chastity.' He recited Surah Maryam, and the Negus wept until his beard was wet.",
        "Ja'far stayed in Abyssinia for over a decade. He returned to Madinah in 7 AH at the time of Khaybar. The Prophet ﷺ embraced him and said: 'I do not know which of these two delights me more — the conquest of Khaybar or the arrival of Ja'far.'",
        "He cared for the poor of the Suffah deeply, often hosting them at his home, and was nicknamed Abu al-Masakin — 'Father of the Poor.'",
        "At Mu'tah in 8 AH, when Zayd ibn Harithah was martyred, Ja'far took the banner. He fought on horseback until he was about to be unhorsed; he hamstrung his own horse and continued on foot. His right arm was severed; he held the banner with his left. His left was severed; he held it against his chest with his stumps. He was struck down and killed. Over ninety wounds were found on the front of his body — none on his back.",
        "The Prophet ﷺ said: 'Allah has given Ja'far two wings in their place, by which he flies in Paradise wherever he wishes.' He became known as Ja'far al-Tayyar — 'Ja'far the Flyer'.",
      ),
      legacy: p(
        "Ja'far's speech before the Negus is one of the great da'wah moments of early Islam. His martyrdom at Mu'tah and the prophetic vision of his two wings in Jannah stand among the highest honours given to any Companion.",
        "His care for the poor was so distinctive that 'Father of the Poor' became his name in the Companions' memory.",
      ),
      keyFacts: [
        "Born c. 590 CE; martyred at Mu'tah in 8 AH (629 CE)",
        "Brother of 'Ali (RA), cousin of the Prophet ﷺ",
        "Led the migrants to Abyssinia",
        "Title: Abu al-Masakin — Father of the Poor",
        "Title: Ja'far al-Tayyar — given two wings in Paradise",
      ],
      lessons: p(
        "Speak Islam beautifully. His words to the Negus moved a king to tears. Learn to express your faith with clarity and dignity.",
        "Care for the poor as if they were family. He earned a name from his care. Make the marginalised your priority.",
        "Pay any price for the banner. He had no arms left and held it with his chest. Whatever Allah has put in your trust, hold it to the last breath.",
      ),
    },
  },

  {
    id: "zayd-harithah",
    title: "Zayd ibn Harithah (RA) — The Beloved",
    description:
      "The freed slave whom the Prophet ﷺ adopted as a son, the only Companion mentioned by name in the Qur'an, beloved of the Messenger ﷺ.",
    category: "Sahaba",
    readTime: "6 min",
    sections: {
      intro: p(
        "Zayd ibn Harithah al-Kalbi was born around 581 CE in the tribe of Kalb in northern Arabia. As a young boy, while travelling with his mother, he was kidnapped by raiders and sold in the slave market of 'Ukaz. Khadijah (RA) bought him and gave him to Muhammad ﷺ as a gift before prophethood.",
      ),
      life: p(
        "When his family eventually located him and came to Makkah to ransom him, Muhammad ﷺ gave Zayd the choice: return free with his father, or stay. To his family's astonishment, Zayd chose to stay: 'I have seen in this man what I have not seen in anyone. I will never choose anyone over him.' Muhammad ﷺ took him to the Ka'bah and publicly declared him his adopted son. He was thereafter called 'Zayd ibn Muhammad' until Allah revealed Surah al-Ahzab forbidding adoption-naming.",
        "Zayd was the second male to embrace Islam (after 'Ali, by some accounts the very first). He fought at Badr, Uhud, the Trench, and was placed in command of multiple expeditions.",
        "He is the only Companion mentioned by name in the Qur'an: 'And when you said to him on whom Allah has bestowed favour and whom you have favoured: 'Keep your wife to yourself and fear Allah'... So when Zayd had ended his relationship with her, We gave her to you in marriage' (Qur'an 33:37).",
        "He was the father of Usamah ibn Zayd, also beloved of the Prophet ﷺ. The Prophet ﷺ said of Zayd: 'He was among the most beloved of people to me, and his son after him.'",
        "He commanded the Muslim army at Mu'tah in 8 AH and was the first of the three commanders to be martyred there.",
      ),
      legacy: p(
        "Zayd is the only Companion named in the Qur'an itself. His freely chosen attachment to the Prophet ﷺ — preferring him over his own family — is one of the most touching episodes of the Sirah.",
        "His martyrdom at Mu'tah, his closeness to the Prophet ﷺ, and the love between them set an example of bonds forged not by blood but by faith.",
      ),
      keyFacts: [
        "Born c. 581 CE; martyred at Mu'tah in 8 AH",
        "Adopted son of the Prophet ﷺ before adoption-naming was forbidden",
        "Among the very first Muslims",
        "Only Companion named by name in the Qur'an (33:37)",
        "First commander to fall at Mu'tah",
      ],
      lessons: p(
        "Choose the company of the righteous over even your blood family. He chose Muhammad ﷺ over his father. Be willing to make that choice for your imam, your masjid, your community.",
        "Names change; bonds remain. He was renamed by Allah's command and the love did not lessen. Identity in Islam is rooted deeper than labels.",
      ),
    },
  },

  {
    id: "usamah",
    title: "Usamah ibn Zayd (RA) — The Beloved Son of the Beloved",
    description:
      "Son of Zayd, raised in the Prophet's home, given command of an army at age eighteen against the Byzantines.",
    category: "Sahaba",
    readTime: "5 min",
    sections: {
      intro: p(
        "Usamah ibn Zayd ibn Harithah was born in Makkah around 612 CE, the son of Zayd ibn Harithah and Umm Ayman, the Prophet's nurse. The Prophet ﷺ raised him almost as a grandchild, sometimes carrying him on one knee with al-Hasan on the other and saying: 'O Allah, I love them both — so love them.'",
      ),
      life: p(
        "He fought first at the Trench at age fifteen. In one of the campaigns, he killed a man who had said the shahadah at the moment of Usamah's sword-strike. The Prophet ﷺ rebuked him sharply: 'Did you split his heart open to know whether he meant it?' Usamah said he wished he had not been a Muslim before that day so he could have entered Islam fresh and clean.",
        "In the final days of the Prophet's life, the Prophet ﷺ appointed Usamah — at eighteen — as commander of an army to march against the Byzantines, with senior Companions including Abu Bakr and 'Umar in the ranks. Some objected to his youth. The Prophet ﷺ said firmly: 'If you are objecting to his command, you also objected to the command of his father before him. By Allah, his father was worthy of command and so is he.'",
        "The expedition was delayed by the Prophet's death. Abu Bakr's first major decision as Caliph was to insist on dispatching Usamah's army despite the Ridda crisis. 'I will not pull down a banner the Messenger of Allah raised,' he said. The expedition succeeded.",
        "Usamah lived in Madinah, refused to take part in the fitna, and died around 54 AH.",
      ),
      legacy: p(
        "Usamah's story shaped Muslim military and ethical doctrine: that no one can be killed once they have testified, even in the heat of battle.",
        "His command at eighteen, with senior Companions in his ranks, set a precedent for placing leadership where competence and the Prophet's directive lay, not where age and seniority demanded.",
      ),
      keyFacts: [
        "Born c. 612 CE; died c. 54 AH (674 CE)",
        "Son of Zayd ibn Harithah; raised by the Prophet ﷺ",
        "Beloved 'son of the beloved' — Hibb ibn al-Hibb",
        "Commander of an army at age 18",
        "His army was dispatched on Abu Bakr's orders after the Prophet's death",
      ],
      lessons: p(
        "Never assume the heart of another. The shahadah is taken at face value. Hold this rule with you in every conflict.",
        "Trust the qualified young. Eighteen is not too young for command if Allah has placed competence there. Promote on merit.",
      ),
    },
  },

  {
    id: "umm-salamah",
    title: "Umm Salamah (RA) — Mother of the Believers",
    description:
      "The wise widow whose counsel saved the Hudaybiyah crisis, and who became one of the most learned wives of the Prophet ﷺ.",
    category: "Sahaba",
    readTime: "6 min",
    sections: {
      intro: p(
        "Hind bint Abi Umayyah, known as Umm Salamah, was born in Makkah around 596 CE into the noble Quraysh clan of Banu Makhzum. She was strikingly beautiful, intelligent, and from a wealthy family.",
        "She married Abu Salamah, an early Muslim and a relative of the Prophet ﷺ. They migrated together to Abyssinia and later to Madinah.",
      ),
      life: p(
        "Their migration to Madinah was one of the most painful episodes of early Islam. Her clan refused to let her leave with her husband; her husband's clan then took their son. For a year she sat in the desert weeping daily, separated from both. Eventually they relented and she crossed the desert alone with a small child to reach Madinah.",
        "Abu Salamah died of an old wound after Uhud. Umm Salamah recited the du'a he had taught her — 'O Allah, recompense me for my affliction and give me something better' — though she could not imagine anyone better than him. The Prophet ﷺ proposed to her. She mentioned her age, her children, and her jealousy. He addressed each, and she accepted.",
        "Her finest hour was at Hudaybiyah in 6 AH. After signing what seemed an unfavourable treaty, the Prophet ﷺ ordered the Companions to shave their heads and slaughter their sacrificial animals. They sat stunned, none moving — overwhelmed by what they perceived as a humiliation. The Prophet ﷺ went to Umm Salamah's tent in distress. She advised: 'Go out yourself, do not speak to anyone, sacrifice your animal, and call your barber.' He did. The Companions, seeing him act, jumped up and followed. The crisis dissolved. Her counsel preserved the unity of the army.",
        "She narrated 378 hadiths, becoming one of the great female scholars of Madinah after 'A'isha. She lived the longest of all the wives of the Prophet ﷺ, dying around 62 AH at perhaps eighty-four.",
      ),
      legacy: p(
        "Umm Salamah is one of the most cited female narrators after 'A'isha. Her counsel at Hudaybiyah is taught to every leader who studies the Sirah — proof that wise women's voices change history.",
        "Her endurance through the year of separation and her trust in Allah's promise of 'something better' became a model for every grieving Muslim.",
      ),
      keyFacts: [
        "Born c. 596 CE; died c. 62 AH (681 CE)",
        "Migrated to Abyssinia and then to Madinah",
        "Counselled the Prophet ﷺ at Hudaybiyah",
        "Narrated 378 hadiths",
        "Last of the wives of the Prophet ﷺ to die",
      ],
      lessons: p(
        "Recite the du'a of grief: 'O Allah, recompense me and give me better.' She doubted, then received better. Trust this du'a.",
        "Listen to wise women in the room. The Prophet ﷺ took her advice and changed the course of Islamic history. Build councils that include women's voices.",
        "Endure the year of separation. There may be a long darkness before the door opens. Hold the line.",
      ),
    },
  },

  {
    id: "umm-sulaym",
    title: "Umm Sulaym bint Milhan (RA) — The Wise Mother",
    description:
      "Mother of Anas ibn Malik, who taught Islam to her own husband-to-be and showed extraordinary patience at her child's death.",
    category: "Sahaba",
    readTime: "5 min",
    sections: {
      intro: p(
        "Al-Rumaysa' bint Milhan, known as Umm Sulaym, was an Ansari woman of Banu al-Najjar in Madinah. She embraced Islam early, before the Hijrah.",
        "Her husband Malik refused Islam and left her in anger. She raised her son Anas alone, teaching him the kalimah from his earliest words.",
      ),
      life: p(
        "When Abu Talhah, a noble of Madinah, proposed to her, she told him: 'O Abu Talhah, do you not know that the god you worship is a piece of wood that grew from the earth, that a craftsman of Banu so-and-so carved? If you embrace Islam, your Islam shall be my dowry; I want nothing else.' He embraced Islam, and their dowry became one of the most blessed in history.",
        "She brought her son Anas to the Prophet ﷺ to serve him. She fought at Uhud and Hunayn — bandaging the wounded, carrying water — and was even seen by the Prophet ﷺ wearing a dagger at her waist.",
        "Her young child by Abu Talhah fell sick and died while Abu Talhah was out. She washed the body, covered him, and instructed the household not to inform Abu Talhah. When he returned and asked about the boy, she said the boy was at rest. She prepared his dinner, beautified herself, and the night passed as a husband and wife. In the morning she said: 'O Abu Talhah, what would you say of a people who lent something to a household and then asked for it back?' He said: 'They have every right.' She said: 'Then count your son among them.' He went angry to the Prophet ﷺ, who said: 'May Allah bless your night.' She conceived 'Abdullah, who would have ten sons, all memorisers of the Qur'an.",
      ),
      legacy: p(
        "Umm Sulaym is the model of the believing wife who da'wahs her own household to Islam, and the believing mother whose patience in loss was proverbial.",
        "Her dowry — Abu Talhah's Islam — is cited in books of fiqh as the noblest mahr ever given.",
      ),
      keyFacts: [
        "Of Banu al-Najjar in Madinah",
        "Mother of Anas ibn Malik (RA)",
        "Took Abu Talhah's Islam as her dowry",
        "Fought at Uhud and Hunayn carrying a dagger",
        "Subject of one of the most famous hadiths on patience",
      ],
      lessons: p(
        "Make your faith your dowry. She set the highest possible price and refused to lower it. Choose a spouse for deen above all.",
        "Patience in loss can move Heaven. Her response to her son's death brought ten Qur'an-memorising grandchildren. Trust Allah with your grief.",
        "Mothers are the first teachers. Anas was raised on the kalimah from infancy. Be deliberate with what you teach your children.",
      ),
    },
  },

  {
    id: "asma",
    title: "Asma' bint Abi Bakr (RA) — She of the Two Belts",
    description:
      "Daughter of Abu Bakr, sister of 'A'isha, who fed the Prophet ﷺ in the cave and lived to a hundred years for Allah.",
    category: "Sahaba",
    readTime: "6 min",
    sections: {
      intro: p(
        "Asma' bint Abi Bakr al-Siddiq was born in Makkah around 595 CE, the elder sister of 'A'isha by ten years. She embraced Islam in its earliest days and was the eighteenth person to do so.",
        "She married al-Zubayr ibn al-'Awwam (RA), one of the ten promised Paradise, and bore him 'Abdullah ibn al-Zubayr — the first child born to the Muhajirun in Madinah.",
      ),
      life: p(
        "On the night of the Hijrah, when the Prophet ﷺ and Abu Bakr hid in the cave of Thawr, Asma' carried provisions to them through the dark. Having no rope to tie the food to her camel, she split her waistband (nitaq) in two — half to tie the food, half to keep her clothing. From that night she was known as Dhat al-Nitaqayn — 'She of the Two Belts.'",
        "She migrated to Madinah while pregnant and gave birth to 'Abdullah on arrival, breaking the rumoured Jewish 'spell' that the Muhajirun would have no children there. The Prophet ﷺ chewed a date and placed it in the baby's mouth.",
        "She was deeply pious, generous, and known for her self-discipline. Late in life, when her son 'Abdullah ibn al-Zubayr was Caliph in Makkah and was finally besieged and killed by al-Hajjaj, she was over a hundred and blind. He came to her at the end and asked her advice. She told him: 'If your cause is right, do not let the fear of death make you weaken. If your cause is wrong, then no leader was ever excused for unjust killing.' He kissed her head and went out to die. Al-Hajjaj crucified him. She demanded the body. She survived him by only days.",
      ),
      legacy: p(
        "Asma' is the icon of the believing woman in support of the Prophet ﷺ — climbing the mountain at night with food, splitting her belt, raising sons of stature.",
        "Her death-scene counsel to her son is one of the most powerful moments of motherhood in Islamic history.",
      ),
      keyFacts: [
        "Born c. 595 CE; died c. 73 AH (692 CE) at over 100",
        "Daughter of Abu Bakr (RA), sister of 'A'isha (RA)",
        "Wife of al-Zubayr ibn al-'Awwam (RA)",
        "Mother of 'Abdullah ibn al-Zubayr (RA)",
        "Title: Dhat al-Nitaqayn — She of the Two Belts",
      ],
      lessons: p(
        "Be the supply line of the truth. She climbed a mountain by night for the Prophet ﷺ. Whatever the truth needs, deliver it.",
        "Raise children who would die for Allah. Her son went out to martyrdom on her counsel. Plant such convictions deep.",
        "Live long for Allah. She served Islam past a hundred. Make your years count, not just your moments.",
      ),
    },
  },

  {
    id: "khansa",
    title: "Al-Khansa' (RA) — Mother of the Martyrs",
    description:
      "The greatest Arab poetess, whose Islam transformed her grief into glory when all four sons were martyred at al-Qadisiyyah.",
    category: "Sahaba",
    readTime: "5 min",
    sections: {
      intro: p(
        "Tumadir bint 'Amr ibn al-Sharid, known as al-Khansa', was born in central Arabia around 575 CE in the tribe of Sulaym. She was already the greatest poetess of Arabia long before Islam — her elegies for her two brothers Sakhr and Mu'awiyah, killed in tribal warfare, were considered the pinnacle of Arabic poetry.",
        "She embraced Islam when the delegation of Sulaym came to Madinah to give bay'ah. The Prophet ﷺ used to admire her poetry.",
      ),
      life: p(
        "When the Battle of al-Qadisiyyah came in 15 AH against Persia, she was an old woman with four sons. She gathered them on the eve of battle and addressed them with one of the most famous orations in Arabic literature: 'My sons, you embraced Islam willingly and migrated by choice. By Allah besides Whom there is no god, you are sons of one man as you are sons of one woman... Tomorrow, when you wake — if Allah wills — into safety, set out to fight your enemy with insight... When the war heats up, plunge into its core. Strike hard at the heads of the enemy and you will earn the spoils of honour and the dwelling of eternity.'",
        "All four sons were martyred at al-Qadisiyyah. When the news reached her, she did not weep or wail. She said: 'Praise be to Allah, who honoured me with their martyrdom. I hope my Lord will gather me with them in the dwelling of His mercy.'",
        "She died around 24 AH during 'Uthman's caliphate.",
      ),
      legacy: p(
        "Al-Khansa' is honoured as the greatest poetess in Arabic literary history and as Umm al-Shuhada' — Mother of the Martyrs.",
        "Her transformation from a woman whose grief produced the world's greatest elegies into a woman whose four-fold loss produced gratitude is a witness to what Islam does to a heart.",
      ),
      keyFacts: [
        "Born c. 575 CE; died c. 24 AH (645 CE)",
        "Greatest poetess of pre-Islamic and Islamic Arabia",
        "Embraced Islam with her tribe of Sulaym",
        "All four sons martyred at al-Qadisiyyah (15 AH)",
        "Title: Umm al-Shuhada' — Mother of the Martyrs",
      ],
      lessons: p(
        "Let Islam reframe your grief. The same heart that wailed for Sakhr praised Allah for four sons. Faith does not erase loss; it transmutes it.",
        "Send your children out with truth. Her orations to her sons were da'wah and battle preparation in one. Equip your children for the real battles ahead.",
      ),
    },
  },

  {
    id: "abu-talha",
    title: "Abu Talhah al-Ansari (RA) — The Beloved Garden",
    description:
      "The Ansari noble whose generosity inspired one of the most famous donations in Islamic history.",
    category: "Sahaba",
    readTime: "5 min",
    sections: {
      intro: p(
        "Zayd ibn Sahl al-Ansari, known as Abu Talhah, was born in Madinah and was a noble of Banu al-Najjar. He embraced Islam to marry Umm Sulaym, his Islam being her dowry.",
      ),
      life: p(
        "He was a powerful warrior. At Uhud he stood in front of the Prophet ﷺ as a human shield, drawing the arrows of Quraysh into himself. The Prophet ﷺ said: 'The voice of Abu Talhah in the army is better than a hundred men.'",
        "When Allah revealed: 'You will not attain righteousness until you spend from what you love' (Qur'an 3:92), Abu Talhah came to the Prophet ﷺ. His most beloved property was the garden of Bayraha' opposite the masjid, beautifully irrigated, with fresh-water springs that the Prophet ﷺ himself sometimes drank from. 'O Messenger of Allah, my most beloved property is Bayraha', and it is sadaqah for Allah, hoping for its righteousness and treasure with Allah. Place it where Allah shows you.' The Prophet ﷺ exclaimed: 'Excellent! Excellent! That is wealth that yields. I think you should give it to your relatives.' Abu Talhah did so, distributing it among his kin and cousins.",
        "He fasted for forty years after the Prophet's death except for days when fasting was forbidden. He died on a sea expedition around 34 AH; the ship could not find an island for burial for several days, yet his body did not change.",
      ),
      legacy: p(
        "Abu Talhah's gift of Bayraha' is the classical example of the Qur'anic command to give what you love. Every Muslim who has struggled to part with a beloved possession looks to him.",
        "His martyrdom posture at Uhud — shielding the Prophet ﷺ — and his decades of fasting after the Prophet's death make him a model of total devotion.",
      ),
      keyFacts: [
        "Of Banu al-Najjar in Madinah",
        "Married Umm Sulaym; her dowry was his Islam",
        "Gave away the garden of Bayraha' upon Qur'an 3:92",
        "Shielded the Prophet ﷺ at Uhud",
        "Died c. 34 AH on a sea expedition",
      ],
      lessons: p(
        "Give what you love most. Donating what you would not miss is easy; the verse demands the harder gift. Identify your Bayraha' and offer it.",
        "Family first in your charity. The Prophet ﷺ directed him to relatives. Before distant causes, look to your own kin.",
      ),
    },
  },

  {
    id: "barakah-umm-ayman",
    title: "Umm Ayman (RA) — Mother of the Prophet ﷺ After His Mother",
    description:
      "The Abyssinian woman who nursed the Prophet ﷺ as a child and whom he called 'my mother after my mother'.",
    category: "Sahaba",
    readTime: "5 min",
    sections: {
      intro: p(
        "Barakah, known as Umm Ayman, was an Abyssinian woman, originally a slave of 'Abdullah, the father of the Prophet ﷺ. After Aminah's death, when the Prophet ﷺ was six, Umm Ayman was the one who travelled with the orphaned child back to Makkah.",
        "She raised him through his earliest years and remained part of his household his entire life.",
      ),
      life: p(
        "When the Prophet ﷺ married Khadijah, he freed Umm Ayman. She married 'Ubayd ibn Zayd; their son was Ayman, a Companion martyred at Hunayn. After 'Ubayd's death she married Zayd ibn Harithah, the Prophet's adopted son — and bore Usamah ibn Zayd, beloved of the Prophet ﷺ.",
        "She embraced Islam at its dawn, migrated to Madinah in extreme heat (a journey she undertook on foot, fasting, despite which Allah miraculously dropped a bucket of cold water from the sky for her), and lived in Madinah for the rest of the Prophet's life.",
        "The Prophet ﷺ called her: 'My mother after my mother.' He visited her regularly and used to sleep at her house at times. After his death, both Abu Bakr and 'Umar visited her one day. She wept. They asked why. She said: 'I do not weep that the Messenger of Allah has died — I know the next world is better for him. I weep because revelation from heaven has ceased.' They wept too.",
        "She died not long after, in 'Umar's caliphate.",
      ),
      legacy: p(
        "Umm Ayman is honoured by the Prophet's own words as his mother. She represents Islam's elevation of caregiving — that those who raise prophets and ordinary people alike are honoured by Allah.",
        "Her children Ayman and Usamah continued her legacy in the Prophet's household.",
      ),
      keyFacts: [
        "Originally an Abyssinian slave of the Prophet's father",
        "Raised the Prophet ﷺ from age six",
        "Mother of Ayman (RA) and Usamah ibn Zayd (RA)",
        "Called 'my mother after my mother' by the Prophet ﷺ",
        "Embraced Islam early; migrated to Madinah",
      ],
      lessons: p(
        "Honour those who raised you. The Prophet ﷺ never forgot Umm Ayman. Continue to honour your parents and parental figures.",
        "Weep for the right losses. She mourned the cessation of revelation more than the Messenger ﷺ's body. Calibrate your grief to what truly matters.",
      ),
    },
  },

  {
    id: "abu-ayyub",
    title: "Abu Ayyub al-Ansari (RA) — Host of the Prophet ﷺ",
    description:
      "The Ansari whose home received the Prophet ﷺ on the day of the Hijrah, and who died fighting at the walls of Constantinople.",
    category: "Sahaba",
    readTime: "5 min",
    sections: {
      intro: p(
        "Khalid ibn Zayd al-Ansari, known as Abu Ayyub, was of the Khazraj tribe of Madinah. He was at the second 'Aqabah and gave his pledge to the Prophet ﷺ before the Hijrah.",
      ),
      life: p(
        "When the Prophet ﷺ entered Madinah on the day of the Hijrah, every household pulled at his camel's bridle, begging him to stay with them. The Prophet ﷺ said: 'Let her go — she is commanded.' She knelt at the door of Abu Ayyub. The Prophet ﷺ stayed in his home for seven months while the Masjid al-Nabawi was being built.",
        "Abu Ayyub and his wife lived on the upper floor and gave the Prophet ﷺ the lower. After one night Abu Ayyub realised that he and his wife were walking above the head of the Messenger of Allah. They could not bear the thought. They begged him to swap, and he eventually agreed.",
        "He fought at Badr, Uhud, the Trench, and every battle. He participated in the conquests of Sham. In old age, when the Muslim army was sent to besiege Constantinople in 49 AH under Yazid ibn Mu'awiyah's command, Abu Ayyub joined despite his age. He fell ill at the walls of Constantinople and asked to be buried as deep into Byzantine territory as the army could push. He was buried beneath the very walls of the city.",
        "His grave was preserved by the Byzantines, who came to honour it as a site of blessing during droughts. When the Ottomans conquered Constantinople in 1453, the grave was rediscovered and a great mosque built around it — Eyüp Sultan Camii — which stands in Istanbul to this day.",
      ),
      legacy: p(
        "Abu Ayyub is the ultimate host of the Sirah. His seven months hosting the Prophet ﷺ and the etiquette he showed (refusing to walk above him) are taught in books of adab.",
        "His grave at Constantinople predicted the future conquest of the city, and his shrine is a major site of Islamic heritage in Turkey.",
      ),
      keyFacts: [
        "Of Khazraj in Madinah",
        "Hosted the Prophet ﷺ for seven months on arrival in Madinah",
        "Fought at Badr and beyond",
        "Died at the walls of Constantinople c. 52 AH (672 CE)",
        "His shrine in Istanbul (Eyüp Sultan) is a major Islamic site",
      ],
      lessons: p(
        "Honour the guest beyond the call of duty. He would not even walk above the Prophet's head. Treat your guests with the highest regard.",
        "Serve Islam to your last breath. He went to fight at Constantinople in his eighties. There is no retirement from doing good.",
      ),
    },
  },

  {
    id: "thabit-qays",
    title: "Thabit ibn Qays (RA) — Orator of the Prophet ﷺ",
    description:
      "The eloquent Ansari spokesman whose voice answered Quraysh, who feared a single verse, and was promised Paradise.",
    category: "Sahaba",
    readTime: "5 min",
    sections: {
      intro: p(
        "Thabit ibn Qays ibn Shammas al-Ansari, of Khazraj, was born in Madinah. He was famed for a deep, powerful voice and skilled oratory. He embraced Islam at the second 'Aqabah and became the Prophet's spokesman to delegations.",
      ),
      life: p(
        "When the delegation of Banu Tamim came in 9 AH boasting of their poet and orator, the Prophet ﷺ matched them with Hassan ibn Thabit and Thabit ibn Qays — and Thabit's oration left the delegation in admiration.",
        "When Allah revealed 'Do not raise your voices above the voice of the Prophet' (Qur'an 49:2), Thabit was terrified — his voice was naturally loud. He shut himself in his house in tears, certain he was destined for the Fire. The Prophet ﷺ asked after him and was told. He sent for Thabit and told him: 'You are not of the people of the Fire — you are of the people of Paradise.'",
        "He fought at every battle from Uhud onward. He was killed at the Battle of Yamamah in 12 AH against Musaylimah the Liar. Before he was killed, he gave away an expensive piece of armour. After his death, a Companion saw him in a dream telling him exactly where the armour was and asking that it be returned. The dream's instructions were followed and the armour was found exactly as described — one of the few cases in Islamic history where a posthumous instruction was acted upon.",
      ),
      legacy: p(
        "Thabit was the Prophet's orator — answering delegations on behalf of Madinah with the eloquence Islam required.",
        "His self-imposed seclusion over a Qur'anic verse, and the Prophet's reassurance, is among the most touching exchanges of the Sirah on the fear of Allah balanced with hope.",
      ),
      keyFacts: [
        "Of Khazraj in Madinah",
        "Spokesman of the Prophet ﷺ to delegations",
        "Promised Paradise by the Prophet ﷺ",
        "Martyred at Yamamah in 12 AH (633 CE)",
        "Subject of a notable posthumous-dream incident regarding inheritance",
      ],
      lessons: p(
        "Tremble at Allah's words. He nearly died of fear over one verse. Take revelation that personally.",
        "Hope answers fear. The Prophet ﷺ followed the verse's discipline with reassurance. Hold the wings of khawf and raja' together.",
      ),
    },
  },

  {
    id: "hassan-thabit",
    title: "Hassan ibn Thabit (RA) — The Poet of the Prophet ﷺ",
    description:
      "The Ansari poet whose verses defended the Messenger ﷺ and whom the Prophet ﷺ supported with the Holy Spirit.",
    category: "Sahaba",
    readTime: "5 min",
    sections: {
      intro: p(
        "Hassan ibn Thabit al-Ansari, of Khazraj, was born in Madinah around 563 CE. He was already a famous poet of the Ghassanid kings of Sham before Islam.",
        "He embraced Islam in Madinah and lived a long life — about 120 years — sixty in jahiliyyah and sixty in Islam.",
      ),
      life: p(
        "When Quraysh's poets attacked the Prophet ﷺ in verse, the Prophet ﷺ called Hassan: 'Answer them; Jibril is with you.' He set up a minbar in the masjid for Hassan to compose and recite his replies. The Prophet ﷺ said: 'What Hassan does to them is more painful than the strikes of arrows.'",
        "He recited verses praising the Prophet ﷺ that were memorised across Arabia. One famous line: 'A more beautiful sight than you my eye has never seen, and a finer being than you no woman has ever borne; you were created free of every flaw — as if you were created just as you wished.'",
        "He did not fight in the battles due to a physical condition. He stayed with the women in the fortress at the Trench, where he killed a Jewish spy with a single blow, defending Safiyyah bint 'Abd al-Muttalib (the Prophet's aunt) and the women.",
        "He died in Madinah around 54 AH at over a hundred and twenty.",
      ),
      legacy: p(
        "Hassan is the Prophet's poet — his verses are recited at Mawlid gatherings and in praise-poetry across the Muslim world to this day.",
        "His role at Madinah established the legitimate place of poetry in Islam: praise of the Prophet ﷺ, defence of the truth, and beautiful articulation of faith.",
      ),
      keyFacts: [
        "Born c. 563 CE; died c. 54 AH (674 CE)",
        "Lived 60 years in jahiliyyah and 60 in Islam",
        "Defended the Prophet ﷺ in poetry; supported by Jibril",
        "Killed a Jewish spy at the Trench, defending the women",
      ],
      lessons: p(
        "Use the most powerful art of your culture for Islam. Poetry was the social media of his day. He converted that platform to da'wah.",
        "Be of service even when you cannot fight. He did not march in the battles but contributed enormously. Find your unique contribution.",
      ),
    },
  },

  {
    id: "saaib-yazid",
    title: "Al-Saa'ib ibn Yazid (RA) — The Long-Lived Witness",
    description:
      "The Companion who, as a child, was brought to the Prophet ﷺ and lived to over ninety, transmitting precious memories of him.",
    category: "Sahaba",
    readTime: "4 min",
    sections: {
      intro: p(
        "Al-Sa'ib ibn Yazid ibn Sa'id was born in Madinah and was about seven years old when the Prophet ﷺ performed the Farewell Pilgrimage. His parents took him on Hajj with them.",
      ),
      life: p(
        "His maternal aunts took him to the Prophet ﷺ during the Farewell, telling him their nephew was sick. The Prophet ﷺ wiped his head, made du'a, and gave him water from his own wudu to drink. Al-Sa'ib later said: 'I saw the seal of prophethood between his shoulders, like the bump of a tent button, surrounded by hairs like the hair of a horse.'",
        "He lived an extraordinarily long life — over ninety years. Even into deep old age his hair did not turn fully white; he attributed it to the Prophet's blessing.",
        "He served in administrative roles in Madinah, including being placed in charge of the markets of Madinah by 'Umar (RA). He narrated the famous hadith about 'Umar adding a third adhan for Jumu'ah due to the growth of the city.",
        "He died around 91 AH, one of the very last of the Companions to die in Madinah.",
      ),
      legacy: p(
        "Al-Sa'ib's longevity allowed precious eyewitness details — including descriptions of the seal of prophethood — to reach the Tabi'in.",
        "His life is a reminder of how the Prophet's barakah extended into the lives of those he touched, sometimes for nearly a century.",
      ),
      keyFacts: [
        "Born c. 2 AH; died c. 91 AH (710 CE)",
        "Saw the Prophet ﷺ at the Farewell Pilgrimage",
        "Drank water from the Prophet's wudu by the Prophet's hand",
        "Last of the Companions to die in Madinah",
        "Source of important hadith on the markets and the Jumu'ah adhan",
      ],
      lessons: p(
        "Bring your children near scholars and the masjid. He was carried as a sick child to the Prophet ﷺ and the blessing lasted ninety years. Bring your kids close to good people.",
        "Witness matters. He preserved what he saw. Honour the elders in your family who carry living memory.",
      ),
    },
  },
];
