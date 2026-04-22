import type { Story } from "./stories";

const p = (...paragraphs: string[]) => paragraphs;

// The Rightly-Guided Caliphs in depth — the era of each of the four caliphs
// as full historical narrative. Sources: al-Tabari, Ibn Kathir, Ibn al-Athir,
// al-Suyuti's Tarikh al-Khulafa.
export const rightlyGuidedCaliphsStories: Story[] = [
  {
    id: "rg-abu-bakr-era",
    title: "The Caliphate of Abu Bakr (RA) — Holding the Ummah Together (11–13 AH)",
    description:
      "Two and a half years that decided whether Islam would survive the Prophet's ﷺ death — the Riddah wars, the dispatch of the armies, and the first compilation of the Qur'an.",
    category: "RightlyGuidedCaliphs",
    readTime: "10 min",
    sections: {
      intro: p(
        "When the Prophet ﷺ died in Rabi' al-Awwal 11 AH (632 CE), the Muslim community was paralysed by shock. 'Umar ibn al-Khattab drew his sword and declared the Prophet ﷺ was not dead. The Madinan Ansar gathered separately at the Saqifa of Banu Sa'ida to consider succession.",
        "Abu Bakr al-Siddiq, oldest companion of the Prophet ﷺ since boyhood, was at the Prophet's ﷺ bedside. He emerged, kissed the Prophet's ﷺ forehead, and said: 'Whoever worshipped Muhammad — Muhammad has died. Whoever worshipped Allah — Allah is alive and never dies.' He then recited Aal 'Imran 144: 'Muhammad is no more than a Messenger; many were the Messengers that passed away before him...' The Companions later said it was as if they had never heard the verse before.",
      ),
      life: p(
        "He hurried with 'Umar and Abu 'Ubayda to the Saqifa. There, after debate, the Muhajirun and Ansar gave the bay'ah to Abu Bakr. The next day a public bay'ah was given in the Prophet's ﷺ Mosque. The first Muslim caliphate had begun.",
        "Within weeks, Arabia exploded. Most of the tribes outside Madinah and Makkah apostatised — some abandoning Islam entirely, some refusing to pay zakat, some following false prophets like Musaylima the Liar in Yamama, Tulayha al-Asadi, al-Aswad al-'Ansi in Yemen, and Sajah the prophetess.",
        "The Companions urged Abu Bakr to compromise — to leave the zakat issue, to consolidate, to wait. He stood firm and said: 'By Allah, if they withhold from me even a kid that they used to give to the Messenger of Allah ﷺ I will fight them for it. By Allah, if they refuse a rope of a camel they used to give him I will fight them for it.' 'Umar later said: 'I knew Allah had opened Abu Bakr's chest to fight them, and I knew it was the truth.'",
        "Abu Bakr divided the Muslim forces into eleven armies, each with a banner and a destination, and unleashed them across Arabia. Khalid ibn al-Walid was sent against Tulayha and then Musaylima. The Battle of Yamama against Musaylima's forces was the bloodiest battle the Muslims had yet fought — over 1,200 Muslims fell, including over 70 huffaz of the Qur'an.",
        "Within a year all of Arabia was reunited under Islam. The Riddah wars are arguably the single most decisive episode in Islamic history after the Sira itself. Without Abu Bakr's iron will, Islam would have remained a Hijazi religion.",
        "He then turned outward. He dispatched Khalid ibn al-Walid against Sasanian Iraq and a four-pronged army into Byzantine Syria — among them Abu 'Ubayda, 'Amr ibn al-'As, Yazid ibn Abi Sufyan, and Shurahbil ibn Hasana. The conquests had begun.",
        "The deaths of so many huffaz at Yamama alarmed 'Umar. He came to Abu Bakr and proposed compiling the Qur'an into a single mushaf. Abu Bakr hesitated — 'How can I do something the Messenger of Allah ﷺ did not do?' — until Allah opened his heart to it. He commissioned Zayd ibn Thabit to gather the Qur'an from every available palm leaf, parchment, stone tablet and the breasts of men. Within months, the first complete written mushaf existed, kept in Abu Bakr's house, then 'Umar's, then Hafsa's.",
        "Abu Bakr fell ill in the late summer of 13 AH. On his deathbed he consulted senior Companions about succession and named 'Umar. He said: 'I have appointed over you the best of you.' He died in Jumada al-Akhira 13 AH (634 CE), aged 63 — the same age the Prophet ﷺ had died at — and was buried beside him.",
      ),
      legacy: p(
        "Abu Bakr's two and a half years preserved Islam from political collapse, secured the Arabian peninsula, launched the great conquests, and produced the first written mushaf. Few rulers in history have done so much in so short a time.",
        "He left an estate worth almost nothing. He had returned to the public treasury, on his deathbed, the small stipend he had taken from it during his caliphate. He insisted his land be sold to repay it.",
        "He stands as the proof that the Prophet's ﷺ choice was correct — the man whose softness in worship hid a steel that held an empire together at its most fragile hour.",
      ),
      keyFacts: [
        "Caliph 11–13 AH (632–634 CE), c. 2 years 3 months",
        "Riddah wars reunified Arabia under Islam",
        "Battle of Yamama: c. 1,200 Muslims martyred including c. 70 huffaz",
        "Launched conquests of Sasanian Iraq and Byzantine Syria",
        "Commissioned the first compilation of the Qur'an",
        "Returned his stipend to the treasury before death",
      ],
      lessons: [
        "Soft hearts can carry hard decisions",
        "Compromise on principle in a moment of crisis costs centuries",
        "Quick, complete, decisive action ends crises that delay would prolong",
        "Preserve the Qur'an in writing before its bearers are taken",
        "Leave an estate of zero, and a legacy of everything",
      ],
    },
  },
  {
    id: "rg-umar-era",
    title: "The Caliphate of 'Umar (RA) — The Decade That Built an Empire (13–23 AH)",
    description:
      "Ten years in which Persia fell, Byzantium was rolled out of Syria, Egypt was opened, Jerusalem entered without bloodshed, and the institutions of the Muslim state were forged from scratch.",
    category: "RightlyGuidedCaliphs",
    readTime: "11 min",
    sections: {
      intro: p(
        "When 'Umar ibn al-Khattab took the caliphate in 13 AH he inherited armies in Iraq and Syria already engaged. Within a decade he had presided over the conquests of the entire Sasanian Empire, most of Byzantine Syria and Egypt, Cyprus, and parts of Libya — and had built an entire administrative machinery to govern them.",
        "He refused the title 'Caliph of the Caliph of the Messenger of Allah'. He chose Amir al-Mu'minin — Commander of the Believers — a title every caliph after him would carry.",
      ),
      life: p(
        "On the eastern front, Khalid ibn al-Walid had taken Hira and pushed into Iraq. 'Umar transferred Khalid to Syria — a controversial decision but one 'Umar had long signalled. In Iraq the command passed to Sa'd ibn Abi Waqqas, who in 14 AH (636 CE) faced the great Sasanian commander Rustam at al-Qadisiyya.",
        "Al-Qadisiyya was the decisive battle of the Persian front — three days of brutal fighting against war elephants, then a fourth day in which a violent dust storm allowed the Muslims to break the Persian line. Rustam was killed. The road to the Persian capital Ctesiphon (al-Mada'in) was open.",
        "Sa'd entered Ctesiphon in 16 AH. The Muslims captured the imperial treasury — the famous Bisat al-Kisra (Carpet of Khusraw), a single carpet sixty cubits square, woven with gold thread, gems and pearls. They cut it into pieces and distributed it. 'Ali's piece was sold for 20,000 dinars.",
        "Battle followed battle — Jalula, Nahavand (called 'the Victory of Victories'), Hamadan. By 21 AH the Sasanian Empire — over a thousand years old — had effectively ceased to exist as a political entity.",
        "On the western front, in 15 AH, Abu 'Ubayda and Khalid ibn al-Walid won Yarmouk against the Byzantines — perhaps the single most strategically decisive battle in Islamic history. After Yarmouk, Byzantine Syria collapsed. Damascus had already fallen the year before.",
        "In 16 AH (637 CE), 'Umar was summoned to Jerusalem because the Patriarch Sophronius would only surrender the city to the Caliph in person. 'Umar travelled from Madinah with one servant and one camel. They took turns riding. When they reached the city it was the servant's turn to ride. The Caliph of the Believers entered Jerusalem on foot, leading a camel on which his servant rode, wearing a patched garment with the dust of the road on him.",
        "He guaranteed the Christians of Jerusalem the safety of their lives, churches and crosses in the famous 'Umarian Covenant. When prayer time came, Sophronius offered him to pray inside the Church of the Holy Sepulchre. 'Umar refused, saying that if he prayed there, future Muslims would convert the church into a mosque on his precedent. He prayed outside; that spot became the Mosque of 'Umar, which still stands.",
        "In 18 AH (639 CE) plague broke out in Syria — the Plague of 'Amwas. It killed perhaps 25,000 Muslims, including Abu 'Ubayda ibn al-Jarrah, Mu'adh ibn Jabal, Yazid ibn Abi Sufyan, and Shurahbil ibn Hasana. The same year a famine struck Madinah; 'Umar refused to eat butter, oil or meat for nine months, saying: 'How can I care for my people if I am not affected by what affects them?' His skin darkened from his diet of bread and oil.",
        "On the institutional side he created: the Hijri calendar (proposed by 'Ali, decided by 'Umar in 17 AH), the diwan (state register and pension system), the bayt al-mal (public treasury) as a permanent institution, the system of regional garrison cities (Basra, Kufa, Fustat) which became the new metropolises of Islam, the night patrol of Madinah, and the office of the qadi as a separate independent judiciary.",
        "He was assassinated in Madinah while leading Fajr prayer in Dhul Hijja 23 AH (644 CE), stabbed six times by Abu Lu'lu'a, a Persian Christian slave with a personal grievance. He survived three days. He consulted the Companions and named six men — those of whom the Prophet ﷺ had died pleased — and instructed them to choose one of themselves as caliph: 'Uthman, 'Ali, al-Zubayr, Talha, 'Abd al-Rahman ibn 'Awf, and Sa'd ibn Abi Waqqas.",
      ),
      legacy: p(
        "By the time 'Umar died, the Muslim state was the largest empire on earth. Persia had fallen, Egypt had been added by 'Amr ibn al-'As, Jerusalem was Muslim, and the institutions to manage all of it were in place.",
        "His justice became proverbial. He stood between his own son and the lash for the offence of drinking — and the boy died of the punishment. He held governors to terrifying accountability. He fired Khalid ibn al-Walid lest people imagine victory came from a man and not from Allah.",
        "He is the prototype of the just ruler in Islamic political imagination — and the only man whose justice was held up to the same standard as that of the Prophet ﷺ.",
      ),
      keyFacts: [
        "Caliph 13–23 AH (634–644 CE), c. 10.5 years",
        "Conquered the entire Sasanian Empire, most of Byzantine Syria and Egypt",
        "Battles of Yarmouk (Syria, 15 AH) and Qadisiyya (Iraq, 14 AH)",
        "Entered Jerusalem in person in 16 AH; signed the 'Umarian Covenant",
        "Established the Hijri calendar (17 AH), the diwan, and bayt al-mal",
        "Assassinated leading Fajr in Madinah, Dhul Hijja 23 AH",
      ],
      lessons: [
        "Justice must reach your own household first",
        "Walk where your servants walk; eat what your people eat",
        "Build institutions, not just victories",
        "Remove even your best general if his fame might mislead the people",
        "A great life can end in the mihrab — the noblest place to fall",
      ],
    },
  },
  {
    id: "rg-uthman-era",
    title: "The Caliphate of 'Uthman (RA) — The Mushaf and the First Fitna (23–35 AH)",
    description:
      "Twelve years that gave us the unified mushaf still recited today, doubled the empire, and ended in the unprecedented siege and martyrdom of the Caliph in his own house.",
    category: "RightlyGuidedCaliphs",
    readTime: "11 min",
    sections: {
      intro: p(
        "After 'Umar's death the council of six (shura) deliberated for three days. 'Abd al-Rahman ibn 'Awf removed himself from candidacy in order to mediate; he then went door to door asking the Muhajirun, the Ansar and even women in their homes whom they preferred. The answer was overwhelming: 'Uthman, with 'Ali a close second.",
        "On the morning of the bay'ah, 'Abd al-Rahman ibn 'Awf gave 'Uthman the bay'ah on the conditions that he would govern by the Book of Allah, the Sunnah of the Messenger ﷺ, and the practice of Abu Bakr and 'Umar. 'Uthman accepted.",
      ),
      life: p(
        "The first six years were a golden age. Conquests pushed eastward through Khurasan into Central Asia and southward into Sind. The fleet, founded by Mu'awiya in Syria with 'Uthman's permission, won the great naval Battle of the Masts (Dhat al-Sawari) against the Byzantines in 34 AH — the first major Muslim naval victory.",
        "Cyprus was opened. North African expansion continued under 'Abd Allah ibn Sa'd. Armenia and Azerbaijan were brought into the empire. By the end of 'Uthman's reign, the Muslim state stretched from Tripoli to the borders of India and Central Asia.",
        "His most lasting achievement was the unification of the mushaf. As the conquests took the Qur'an to Persians, Berbers, Turks and others who could not handle the seven ahruf (recitation modes), recitational disputes broke out — even between Muslim soldiers in Armenia. Hudhayfa ibn al-Yaman raced back to Madinah and warned 'Uthman: 'Catch this ummah before they differ over their book like the Jews and Christians did before them.'",
        "'Uthman commissioned a committee — Zayd ibn Thabit, 'Abd Allah ibn al-Zubayr, Sa'id ibn al-'As, 'Abd al-Rahman ibn al-Harith — to produce a single authoritative copy of the mushaf in the Qurashi dialect (the Prophet's ﷺ own), based on the Suhuf kept by Hafsa. They produced a master copy and sent identical copies to Makkah, Kufa, Basra, Sham and Yemen, with a qari trained in its recitation. They ordered all variant codices burned.",
        "This single act preserved the Qur'an as the unified text of one and a half billion Muslims today. Every printed mushaf in the world descends from 'Uthman's mushaf.",
        "The second half of his caliphate was the unraveling. Critics accused him of nepotism — appointing relatives from Banu Umayya as governors. Some appointments were sound (Mu'awiya in Syria proved the most capable governor of his time). Others were disasters — al-Walid ibn 'Uqba in Kufa was deposed for drinking. 'Uthman's gentle nature meant he did not cut these scandals quickly enough.",
        "Agitators from Egypt, Kufa and Basra — many of them new converts who had not been shaped by the Prophet's ﷺ companionship — descended on Madinah in the last months of 35 AH. They besieged 'Uthman's house. The senior Companions ('Ali, al-Zubayr, Talha, the sons of the great) sent their own sons to guard the Caliph. Al-Hasan ibn 'Ali stood at the door with his sword.",
        "'Uthman refused to allow blood to be shed in his defence. He saw a dream of the Prophet ﷺ inviting him to break his fast with him that day. He fasted, sat reading the Qur'an. Rebels climbed over the wall from a neighbour's house, broke in, and killed him while he was reading the Qur'an. Drops of his blood fell on the verse: 'And Allah will suffice you against them, and He is the All-Hearing, the All-Knowing.' (al-Baqara 137) That mushaf — stained with his blood — was preserved.",
        "His wife Na'ila lost two fingers defending him. He was 82. He was the third caliph to die a martyr.",
      ),
      legacy: p(
        "The 'Uthmani mushaf is the single most important physical legacy of the Companions to the ummah. There is no other text on earth more carefully preserved than the Qur'an as 'Uthman left it.",
        "His martyrdom, however, opened wounds that would not close. The first fitna had begun. Civil war between the Companions over how to handle his killing would dominate the next five years. The Muslim community would never be politically unified in the same way again.",
        "'Uthman remains a model of haya' (modesty), generosity (he had bought the well of Ruma for the Muslims, equipped the Tabuk army single-handedly, expanded the Prophet's ﷺ Mosque), and patience under provocation. The Prophet ﷺ had foretold his trial, and he met it as foretold — with the Qur'an in his hand.",
      ),
      keyFacts: [
        "Caliph 23–35 AH (644–656 CE), c. 12 years",
        "Commissioned the unified 'Uthmani mushaf — basis of every mushaf today",
        "Conquests reached Central Asia, Sind, Cyprus, Armenia, North Africa",
        "Naval Battle of the Masts (Dhat al-Sawari) won in 34 AH",
        "Besieged in his house by rebels from Egypt, Kufa, Basra",
        "Martyred reading the Qur'an, Dhul Hijja 35 AH (656 CE), aged 82",
      ],
      lessons: [
        "A single act of farsighted preservation can serve a billion people",
        "Gentleness in a ruler is mercy — but discipline must follow it",
        "Refuse to let your defenders shed Muslim blood for you",
        "The Qur'an in your lap is the best companion in your last hour",
        "Test of leadership is not the easy years — it is the last year",
      ],
    },
  },
  {
    id: "rg-ali-era",
    title: "The Caliphate of 'Ali (RA) — Justice in the Storm (35–40 AH)",
    description:
      "Five years of civil war fought between the Companions of the Prophet ﷺ themselves — the Camel, Siffin, Nahrawan — and the assassination of the cousin and son-in-law of the Messenger ﷺ.",
    category: "RightlyGuidedCaliphs",
    readTime: "11 min",
    sections: {
      intro: p(
        "After 'Uthman's martyrdom Madinah was in chaos. The rebels remained in the city. The Companions were stunned. After several days the people pressed 'Ali to take the bay'ah — there was no one else of his stature. He accepted reluctantly, saying: 'Leave me and seek another. We are facing a matter that has many faces and many colours; hearts will not stand firm before it, nor minds remain steady.'",
        "The Muhajirun and Ansar in Madinah gave him bay'ah. But the question of 'Uthman's killers — punishment now, or stability now and justice later — divided the ummah immediately and irrevocably.",
      ),
      life: p(
        "'A'isha (RA), with Talha and al-Zubayr, marched to Basra demanding immediate justice for 'Uthman's killers. 'Ali argued that the situation was too unstable, that the rebels were embedded in the army, and that pursuing them now would split the state. He marched to confront the Basran group.",
        "At Basra in 36 AH (656 CE) the two sides nearly negotiated peace. The agitators, who would lose everything if peace held, attacked both camps in the night to provoke battle. By dawn each side believed the other had betrayed the truce. Fighting broke out around 'A'isha's red-curtained camel howdah. The battle is therefore called the Battle of the Camel.",
        "Talha was killed by an arrow in the back, fired by Marwan ibn al-Hakam who blamed him for 'Uthman's death. Al-Zubayr withdrew from the battle on the advice of 'Ali, was followed and killed in a ravine by 'Amr ibn Jarmuz. 'Ali wept over al-Zubayr and said: 'Tell the killer of Ibn Safiyya the Fire is his.'",
        "After the battle 'Ali entered 'A'isha's tent and treated her with utmost respect. He sent her back to Madinah with an honour guard of women dressed as soldiers, and a stipend of 12,000 dirhams. They reconciled. She used to say afterwards: 'There was nothing between 'Ali and me except what is between a woman and the in-laws she respects.'",
        "Mu'awiya in Syria refused the bay'ah, holding 'Uthman's blood-stained shirt and Na'ila's severed fingers in the mosque of Damascus. He demanded immediate punishment of the killers; 'Ali demanded the bay'ah first, justice afterward. The standoff led to the Battle of Siffin (37 AH / 657 CE) on the Euphrates.",
        "Siffin lasted weeks of skirmishing then exploded into open battle. After a night and a day of fighting in which thousands fell, the Syrian army facing defeat raised pages of the Qur'an on their spear-points and called for arbitration by the Book of Allah. 'Ali knew it was a trick. His army insisted. The arbitration was agreed.",
        "A faction of 'Ali's own army then turned against him for accepting arbitration — saying 'judgment belongs only to Allah'. They withdrew to Harura' and then Nahrawan. They became the Khawarij — the first sect in Islam, the original extremists who declared every Muslim who disagreed with them to be a kafir. They began assassinating Companions. 'Ali confronted them at Nahrawan in 38 AH and crushed them; only nine of perhaps four thousand survived.",
        "The arbitration with Mu'awiya, when it finally took place at Adhruh, achieved little. Mu'awiya's representative 'Amr ibn al-'As outmaneuvered 'Ali's representative Abu Musa al-Ash'ari. The political stalemate continued. 'Ali governed from Kufa, Mu'awiya governed Syria, and the conquests largely paused.",
        "On a Friday morning, 17 Ramadan 40 AH (661 CE), as 'Ali entered the mosque of Kufa to call the people to prayer, a Khariji named 'Abd al-Rahman ibn Muljam struck him on the head with a poisoned sword. 'Ali survived for two days. He instructed his sons to treat the assassin justly and not to mutilate him. He died on the 21st of Ramadan and was buried in Najaf — though his exact burial place was kept secret for fear his enemies would desecrate the grave.",
      ),
      legacy: p(
        "'Ali's caliphate was the first time in Islamic history that Muslim swords were drawn against Muslim swords on a national scale. The unity of the early ummah, already broken by 'Uthman's killing, never fully recovered.",
        "But his rulings, his sermons (collected as Nahj al-Balagha, though with debated authenticity), his fearless justice, his refusal of nepotism (he removed 'Uthman's governors immediately on principle), and his mastery of fiqh and Qur'an made him 'the gate of the city of knowledge' — as the Prophet ﷺ said: 'I am the city of knowledge and 'Ali is its gate.'",
        "The first fitna ended his life and exhausted the unity of the Companions, but it also produced a wealth of Islamic political and legal precedent that every later jurist drew upon. Al-Hasan ibn 'Ali handed over the caliphate to Mu'awiya the next year — the Year of Unity ('Am al-Jama'a, 41 AH) — fulfilling the Prophet's ﷺ prophecy: 'This son of mine is a sayyid, and Allah will reconcile through him two great groups of the Muslims.'",
        "'Ali stands as the model of the scholar-warrior-ruler, and his treatment of his political enemies — refusing to curse them from the minbar, refusing to attack first, walking into the mosque without guards — set a moral standard that even his opponents acknowledged.",
      ),
      keyFacts: [
        "Caliph 35–40 AH (656–661 CE), c. 4 years 9 months",
        "Battle of the Camel against 'A'isha, Talha, al-Zubayr (36 AH)",
        "Battle of Siffin against Mu'awiya (37 AH)",
        "Battle of Nahrawan against the Khawarij (38 AH)",
        "Assassinated by the Khariji Ibn Muljam in Kufa, Ramadan 40 AH",
        "Buried in Najaf, Iraq",
      ],
      lessons: [
        "Civil war between Muslims is the worst evil — every effort must be made to avert it",
        "Treat your defeated opponents with honour; that is half the victory",
        "Reject extremism in religion as fiercely as you reject open disbelief",
        "A scholar in the saddle is the highest combination of human gifts",
        "Even the gate of the city of knowledge can be killed by a man who memorised the Qur'an",
      ],
    },
  },
  {
    id: "rg-hasan-handover",
    title: "Al-Hasan ibn 'Ali (RA) and the Year of Unity — The Caliphate That Saved the Ummah",
    description:
      "The grandson of the Prophet ﷺ took the caliphate after his father, and within months handed it to Mu'awiya to stop Muslim blood — fulfilling a prophecy made decades earlier from the minbar.",
    category: "RightlyGuidedCaliphs",
    readTime: "8 min",
    sections: {
      intro: p(
        "Al-Hasan ibn 'Ali ibn Abi Talib was born in Madinah in 3 AH (625 CE). He was the first grandson of the Prophet ﷺ, son of 'Ali and Fatima, the elder of the 'two masters of the youth of Paradise'.",
        "The Prophet ﷺ loved him with visible tenderness. Once he was on the minbar with the small Hasan beside him, looking sometimes at the people and sometimes at the boy, and he said: 'This son of mine is a sayyid, and perhaps Allah will reconcile through him two great groups of the Muslims.' (Sahih al-Bukhari)",
      ),
      life: p(
        "He was raised in the Prophet's ﷺ household, then in his father's. He fought at the Camel and Siffin alongside 'Ali, but his temperament was always more reconciler than warrior.",
        "When his father was assassinated in Ramadan 40 AH, the people of Iraq immediately gave bay'ah to al-Hasan. The bay'ah of the Iraqi army of 40,000 was strong, but al-Hasan saw what his father's experience had shown — that the Iraqi armies were politically fractured, that loyalty was conditional, and that his army would dissolve at the first reverse.",
        "He marched out toward Syria with his army. At al-Mada'in his troops mutinied, plundered his own tent, and even wounded him with a dagger. He withdrew, recovered, and faced a clear choice: continue a war that would slaughter tens of thousands of Muslims with no certain outcome, or negotiate.",
        "He chose the harder path — the path of self-effacement. He sent envoys to Mu'awiya and negotiated a peace. The terms included: a complete amnesty for his supporters across the Hijaz, Iraq and beyond; respect for the wealth and rights of the Muslims; and that the matter of succession after Mu'awiya should be returned to consultation among the Muslims (a term Mu'awiya later violated when he nominated Yazid).",
        "In Rabi' al-Awwal 41 AH (661 CE), al-Hasan formally handed over the caliphate to Mu'awiya in Kufa. He rode out and gave the bay'ah publicly. His brother al-Husayn was distressed but obeyed. Some Khariji-leaning supporters called him 'humiliator of the believers'; he replied with a verse: 'Better humiliation than the Fire.'",
        "He returned to Madinah and lived there as a private man — beloved, generous, performing hajj many times on foot, and famous for marrying often (which he did mostly to make alliances and to honour requests). He was poisoned in 49 or 50 AH (670 CE), aged about 47. The poisoner was reportedly one of his wives, allegedly bribed by enemies. He refused to name her, saying: 'I will not surrender her on the basis of suspicion.'",
        "He was buried in al-Baqi' in Madinah, having explicitly refused to be buried near the Prophet ﷺ to avoid any conflict with 'A'isha (RA), in whose chamber the Prophet ﷺ was buried.",
      ),
      legacy: p(
        "By giving up the caliphate, al-Hasan did what no one in his position before or after has done — he chose unity over rule, the ummah over his own throne. The Prophet's ﷺ prophecy from the minbar twenty-five years earlier was fulfilled to the letter.",
        "The year 41 AH became known as 'Am al-Jama'a — the Year of Unity. Many Sunni scholars include al-Hasan as the fifth of the Rightly-Guided Caliphs, completing the thirty years foretold by the Prophet ﷺ: 'The caliphate after me will last thirty years; thereafter it will be a kingdom.'",
        "His act remains the supreme model of placing the welfare of the ummah above personal entitlement, no matter how legitimate. He showed that giving up power for the sake of Allah is itself a form of rule — perhaps the highest.",
      ),
      keyFacts: [
        "Born 3 AH; died 49 or 50 AH (670 CE), aged c. 47",
        "Caliph for c. 6–7 months in 40–41 AH",
        "Handed over the caliphate to Mu'awiya in 41 AH — the Year of Unity",
        "Fulfilled the Prophet's ﷺ prophecy of reconciling two great groups",
        "Considered by many Sunni scholars the fifth Rightly-Guided Caliph",
        "Master of the youth of Paradise (with al-Husayn) — Sahih al-Tirmidhi",
      ],
      lessons: [
        "Sometimes giving up rule is the highest form of leadership",
        "Avoid Muslim bloodshed even at the cost of your own legitimate right",
        "Refuse to accuse on suspicion — even your own poisoner",
        "Prophecy works through the choices of the righteous, not despite them",
        "Better the humiliation of the world than the disgrace of the akhirah",
      ],
    },
  },
];
