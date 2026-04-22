import type { Story } from "./stories";

const p = (...paragraphs: string[]) => paragraphs;

// The Four Imams — founders of the four surviving Sunni schools of fiqh.
// Sources: al-Dhahabi's Siyar A'lam al-Nubala, Tarikh Baghdad, Manaqib al-A'imma works.
export const fourImamsStories: Story[] = [
  {
    id: "imam-abu-hanifa",
    title: "Imam Abu Hanifa — The Greatest Imam (Al-Imam al-A'zam)",
    description:
      "The Kufan jurist who turned a silk-trader's shop into the cradle of Hanafi fiqh, and who died in prison rather than serve as a judge for tyrants.",
    category: "FourImams",
    readTime: "9 min",
    sections: {
      intro: p(
        "Al-Nu'man ibn Thabit, known as Abu Hanifa, was born in Kufa in 80 AH (699 CE). His grandfather was a Persian who had embraced Islam, and his family were silk merchants. He grew up trading in the bazaars of Kufa with a sharp mind, scrupulous honesty and a memory like a vault.",
        "His turning point came when the great scholar al-Sha'bi noticed him in the marketplace and said: 'I see in you intelligence and life. Sit with the scholars.' From that day Abu Hanifa divided his life between trade and the study circles, eventually withdrawing fully into knowledge.",
      ),
      life: p(
        "He met several Companions — by the soundest reports, Anas ibn Malik (RA), making him technically a Tabi'i. He studied under Hammad ibn Abi Sulayman for eighteen years, inheriting his circle on Hammad's death.",
        "His method was to gather a council of forty of his best students and debate every question of fiqh openly. A ruling was not finalised until the entire council was satisfied. From this circle came giants like Abu Yusuf and Muhammad ibn al-Hasan al-Shaybani — through whom Hanafi fiqh became the most widely followed school in Islamic history.",
        "He pioneered the systematic use of qiyas (analogy), istihsan (juristic preference), and detailed hypothetical fiqh — anticipating cases before they happened so the ummah would have answers ready.",
        "His honesty was legendary. A woman once brought silk to his shop; he pointed out a small flaw she had not seen and lowered the price. When his partner once sold defective cloth without disclosing it, Abu Hanifa gave away the entire profit of that season — thirty thousand dirhams — in charity rather than touch a doubtful dirham.",
        "The Umayyads, then the Abbasids, repeatedly tried to force him to accept the post of qadi (chief judge). Each refusal was a death sentence in instalments. The governor of Kufa Ibn Hubayra had him whipped daily; he refused. The caliph al-Mansur summoned him, demanded he serve, and on his refusal had him imprisoned and beaten.",
        "He died in prison in Baghdad in 150 AH (767 CE) — by most reports poisoned. His janazah was prayed by tens of thousands; the funeral prayer had to be repeated six times because the crowds could not all be accommodated at once.",
      ),
      legacy: p(
        "The Hanafi madhhab became the official school of the Abbasid, Seljuk, Mughal and Ottoman empires. Today it is followed by perhaps the largest portion of Sunni Muslims in the world — from Turkey to Central Asia, the Indian subcontinent and the Balkans.",
        "Imam al-Shafi'i, his junior, said: 'All people are dependents of Abu Hanifa in fiqh.' His refusal to bend to power even at the cost of his life established the principle that the dignity of the scholar is not for sale.",
      ),
      keyFacts: [
        "Born 80 AH in Kufa; died 150 AH (767 CE) in Baghdad",
        "Founder of the Hanafi madhhab — the largest Sunni school today",
        "Tabi'i: met Anas ibn Malik (RA) and possibly other Companions",
        "Council-based ijtihad with about 40 senior students",
        "Refused judgeship under Umayyads and Abbasids; died in prison",
        "Famed for trading honesty and lifelong tahajjud",
      ],
      lessons: [
        "Knowledge is built by debate, not by solo opinion",
        "The honour of a scholar is in refusing what others crave",
        "Honesty in trade is a foundation of honesty in fatwa",
        "A jurist must anticipate the questions of the next generation",
        "Death in prison for principle is a longer life than freedom in compromise",
      ],
    },
  },
  {
    id: "imam-malik",
    title: "Imam Malik ibn Anas — The Imam of the Abode of Hijrah",
    description:
      "The scholar of Madinah who spent his life teaching in the Prophet's ﷺ city, authored the Muwatta', and was beaten for a fatwa rather than retract it.",
    category: "FourImams",
    readTime: "8 min",
    sections: {
      intro: p(
        "Malik ibn Anas ibn Malik al-Asbahi was born in Madinah in 93 AH (711 CE). His family had migrated from Yemen and settled in the Prophet's ﷺ city, where his grandfather had been among the narrators of hadith from the Companions.",
        "He grew up in the city of revelation, walking the same streets, sitting in the same Prophet's Mosque, learning from those who learned from those who learned from the Prophet ﷺ himself. He gathered knowledge from over three hundred teachers and taught for nearly seventy years from a single seat.",
      ),
      life: p(
        "He revered hadith and the city of Madinah with a unique reverence. He never rode a mount within the city limits, saying: 'I am ashamed before Allah to tread the soil where the Messenger of Allah ﷺ is buried with the hooves of an animal.' He performed wudu and dressed in his finest clothes before teaching hadith and would refuse to teach if he was distressed.",
        "His great work, al-Muwatta' (The Well-Trodden Path), was the first systematic compilation of hadith and Madinan fiqh. The caliph al-Mansur asked him to make it the law of the empire; Malik refused, saying the Companions had spread to many lands and people had taken knowledge from them all — uniformity by force was not the way of the Sahaba.",
        "He was beaten for a fatwa. The governor of Madinah, on behalf of the Abbasids, had taken oaths of allegiance from people under coercion. Malik issued a fatwa that a forced oath is not binding — quoting the hadith: 'Divorce or emancipation under compulsion does not count.' The governor saw this as undermining the bay'ah, had Malik publicly flogged so severely that his arms were dislocated. Malik never retracted the fatwa.",
        "He famously refused to give fatwa unless he was certain. 'La adri — I do not know' was a constant phrase on his lips. Of forty questions once asked of him, he answered four and said 'I do not know' to the rest, adding: 'When the scholar leaves out la adri, his fatwas become a calamity.'",
      ),
      legacy: p(
        "The Maliki madhhab spread through North and West Africa, Andalusia, Sudan and the Gulf, and remains the dominant school in those regions to this day.",
        "Al-Muwatta' is among the earliest surviving books of hadith and fiqh, and Imam al-Shafi'i — his student — said: 'There is no book on the face of the earth, after the Book of Allah, more authentic than the book of Malik.'",
        "He died in Madinah in 179 AH (795 CE) and was buried in al-Baqi', having spent his life within walking distance of the Prophet's ﷺ grave. ",
      ),
      keyFacts: [
        "Born 93 AH in Madinah; died 179 AH (795 CE)",
        "Founder of the Maliki madhhab",
        "Author of al-Muwatta', the earliest surviving book of hadith and fiqh",
        "Studied under more than 300 teachers in Madinah",
        "Refused to allow his book to be made the law of the empire",
        "Publicly flogged for upholding a fatwa",
      ],
      lessons: [
        "Reverence for the place of the Prophet ﷺ is part of reverence for him",
        "'I do not know' is half of knowledge",
        "A scholar's fatwa must serve truth, not the throne",
        "Patience under oppression is its own ijtihad",
        "Diversity of practice is part of the mercy of the Sahaba's spread",
      ],
    },
  },
  {
    id: "imam-al-shafii",
    title: "Imam al-Shafi'i — The Architect of Usul al-Fiqh",
    description:
      "The Qurashi orphan raised in poverty who memorised the Muwatta' before adolescence and gave the science of legal theory its systematic form.",
    category: "FourImams",
    readTime: "9 min",
    sections: {
      intro: p(
        "Muhammad ibn Idris al-Shafi'i was born in Gaza in 150 AH (767 CE) — the same year Imam Abu Hanifa died. He was a descendant of Hashim, the great-grandfather of the Prophet ﷺ, making him a Qurashi of the noblest lineage.",
        "His father died when he was an infant. His mother carried him to Makkah so he could grow up in the Sacred City. They lived in deep poverty. He had no money for paper; he wrote on bones, palm leaves and shards of pottery, then memorised what he had written and erased it for the next lesson.",
      ),
      life: p(
        "He memorised the Qur'an by seven and the Muwatta' of Imam Malik by ten. He was sent into the desert to learn pure Arabic from the Hudhayl tribe, returning a master of language and poetry — a foundation that later made him incomparable in deriving meaning from text.",
        "He travelled to Madinah and joined the circle of Imam Malik. Malik tested him by handing him the Muwatta' and asking him to read; the boy recited it from memory. He stayed with Malik until Malik's death.",
        "Then he travelled to Iraq and immersed himself in the rationalist tradition of Abu Hanifa through his student Muhammad ibn al-Hasan al-Shaybani. He combined the textual rigour of the Madinan school with the systematic reasoning of the Kufan school.",
        "His genius produced a new science: usul al-fiqh — legal theory. His al-Risala is the first systematic work in Islamic history defining the sources of law (Qur'an, Sunnah, ijma', qiyas), the conditions of evidence, the rules of language, and how to derive a ruling from a text. Every later science of fiqh, in every madhhab, walks in its footsteps.",
        "He had two distinct schools — the 'old' (qadim) developed in Iraq and the 'new' (jadid) developed in Egypt — because he revised many of his earlier opinions in light of fresh evidence. He famously said: 'If a hadith is authentic, that is my madhhab.' That single sentence is the charter of every ahl al-hadith scholar after him.",
        "He moved finally to Egypt, where he taught in the mosque of 'Amr ibn al-'As until his death in 204 AH (820 CE), aged 54. He is buried in Cairo, where his shrine remains a focus of visitation.",
      ),
      legacy: p(
        "The Shafi'i madhhab spread through Egypt, the Levant, Yemen, East Africa, and most of Southeast Asia. Today it is the dominant school in Indonesia, Malaysia and much of the Indian Ocean rim.",
        "His Risala created the discipline that made Islamic law a coherent science. Imam Ahmad said: 'Al-Shafi'i was like the sun for the world and like wellbeing for the body.'",
        "He combined sharp intellect, eloquent Arabic poetry, deep zuhd and unmatched humility. His advice 'Knowledge is what benefits, not what is memorised' is among the most quoted lines in Islamic education.",
      ),
      keyFacts: [
        "Born 150 AH in Gaza; died 204 AH (820 CE) in Egypt",
        "Founder of the Shafi'i madhhab",
        "Author of al-Risala — the first systematic book of usul al-fiqh",
        "Memorised the Qur'an by 7 and the Muwatta' by 10",
        "Studied under Imam Malik and the students of Abu Hanifa",
        "Famous saying: 'If a hadith is authentic, that is my madhhab'",
      ],
      lessons: [
        "Poverty is no obstacle to becoming a giant of knowledge",
        "Master the language before you master the law",
        "Combine the strengths of opposing schools rather than choosing sides",
        "Be willing to revise your opinions when evidence grows",
        "True knowledge is what benefits the heart, not what fills the page",
      ],
    },
  },
  {
    id: "imam-ahmad",
    title: "Imam Ahmad ibn Hanbal — The Imam of Ahl al-Sunnah Who Stood Alone",
    description:
      "The hadith master of Baghdad whose endurance through the Mihna (Inquisition) saved Sunni creed for every generation after him.",
    category: "FourImams",
    readTime: "9 min",
    sections: {
      intro: p(
        "Ahmad ibn Muhammad ibn Hanbal al-Shaybani was born in Baghdad in 164 AH (780 CE). His father, a soldier, died when he was an infant. His widowed mother raised him in poverty in the capital of the Abbasid Empire.",
        "He showed an exceptional appetite for hadith from his teens, walking to mosques before dawn carrying ink and pen. By his twenties he had begun the most ambitious journeys of any scholar of his time — to Kufa, Basra, Makkah, Madinah, Yemen, Syria — collecting hadith directly from the great masters.",
      ),
      life: p(
        "His Musnad contains around thirty thousand hadith, drawn from a memory said to hold a million. He combined this hadith mastery with deep fiqh, creating the Hanbali madhhab — strictly evidence-based, cautious in qiyas, and unflinching in following the Salaf.",
        "He lived in extreme zuhd. He often had nothing in the house. When students sent him gifts he would refuse or quietly return them. He patched his own clothes. He was offered enormous gifts by the caliph al-Mutawakkil and refused them all, saying he had no need.",
        "His great trial came under three Abbasid caliphs — al-Ma'mun, al-Mu'tasim, and al-Wathiq — who, influenced by the Mu'tazila, imposed the doctrine that the Qur'an is created and forced every scholar to publicly declare it. Most scholars complied under coercion. A handful refused. Of those, after deaths and recantations, Ahmad alone stood firm.",
        "He was chained, dragged from Baghdad in irons, imprisoned for years. Under al-Mu'tasim he was beaten so severely with whips of leather that his flesh tore, his joints dislocated and he repeatedly lost consciousness. Between strokes he would say: 'Bring me one verse from the Book of Allah or one hadith from the Messenger ﷺ that says the Qur'an is created, and I will say it.' They could not.",
        "Years later, when caliph al-Mutawakkil reversed the policy and restored the Sunni creed, Ahmad was vindicated. He still refused political honours. When asked why he would not visit the caliph who had vindicated him, he said: 'I do not want my name to be dignified by the dunya.'",
        "He died in Baghdad in 241 AH (855 CE). His funeral was the largest the city had seen — one estimate, almost certainly exaggerated but indicative, was eight hundred thousand men and sixty thousand women. Many Jews, Christians and Magians embraced Islam that day.",
      ),
      legacy: p(
        "The Hanbali madhhab is followed today especially in the Arabian Peninsula. Its emphasis on strict adherence to text and the way of the Salaf shaped later Sunni revivalist movements.",
        "More importantly, Ahmad's stand under the Mihna preserved the Sunni creed that the Qur'an is the uncreated speech of Allah — and established the principle that on matters of 'aqida the scholar bows to no power but Allah.",
        "Ali ibn al-Madini, the great hadith master, said: 'Allah strengthened this religion through Abu Bakr on the day of the Riddah, and through Ahmad on the day of the Mihna.'",
      ),
      keyFacts: [
        "Born 164 AH in Baghdad; died 241 AH (855 CE)",
        "Founder of the Hanbali madhhab",
        "Compiled al-Musnad: c. 30,000 hadith",
        "Endured imprisonment and flogging under three caliphs in the Mihna",
        "Refused all gifts and posts from rulers, even after vindication",
        "His funeral remembered as the largest in Baghdad's history",
      ],
      lessons: [
        "One man holding firm can save the creed of an entire ummah",
        "Knowledge is built by travel, sacrifice and lifelong effort",
        "Reject the gifts of the powerful if they will buy your silence",
        "Truth is not a majority opinion; it is what the evidence says",
        "When the lash falls, hold to the text — and let Allah hold you",
      ],
    },
  },
  {
    id: "imam-al-bukhari",
    title: "Imam al-Bukhari — The Sifter of a Million Hadith",
    description:
      "The young man from Bukhara who memorised hadith as a child, travelled the Muslim world for sixteen years, and produced the most authentic book after the Qur'an.",
    category: "FourImams",
    readTime: "8 min",
    sections: {
      intro: p(
        "Muhammad ibn Isma'il al-Bukhari was born in Bukhara in 194 AH (810 CE). His father, a hadith scholar himself, died young. His mother, a righteous and saintly woman, raised him alone.",
        "As a young child he became blind. His mother wept and prayed through the nights. She saw the Prophet Ibrahim (AS) in a dream, who told her: 'Allah has restored your son's sight because of your du'a.' He awoke seeing.",
      ),
      life: p(
        "By the age of ten he had begun memorising hadith. By eleven he was correcting the great teachers in his city when they made mistakes in chains of narration. By sixteen he had memorised the books of Ibn al-Mubarak and Waki' and travelled with his mother and brother to Makkah for hajj. He stayed behind in the Hijaz to study.",
        "For sixteen years he travelled the Muslim world — Makkah, Madinah, Basra, Kufa, Baghdad, Egypt, Syria, Khurasan — collecting hadith. He met around a thousand teachers. He memorised, by his own account, around one hundred thousand authentic hadith and two hundred thousand others.",
        "His project was unprecedented: to compile a book of only authentic hadith. He set conditions stricter than any predecessor — every narrator in every chain must be of confirmed integrity, with confirmed memory, and with confirmed direct meeting with the previous narrator. He performed two rak'ahs of istikhara before including a single hadith.",
        "The result, al-Jami' al-Sahih (Sahih al-Bukhari), distilled around seven thousand reports (with repetitions) from six hundred thousand he had examined. Sunnis from his day to ours have called it the most authentic book on the face of the earth after the Qur'an.",
        "He was tested at the end of his life. The governor of Bukhara wanted Bukhari to come to his palace and teach his children privately. Bukhari refused, saying knowledge is honoured by being sought, not delivered to homes. The enraged governor exiled him. Bukhari died alone in a village near Samarqand in 256 AH (870 CE), praying: 'O Allah, the earth has become narrow upon me; take me to You.'",
      ),
      legacy: p(
        "Sahih al-Bukhari became the cornerstone of the Sunni hadith tradition. Every later collection — Muslim, the four Sunan, the later books of takhrij — built on his methodology.",
        "His standards in narrator criticism became the gold standard for the science of hadith. His refusal to compromise the dignity of knowledge in old age sealed his life with the same nobility with which he had begun it.",
        "His mother's du'a in the dark of Bukhara restored his sight. His own du'a in the dark of exile gave the ummah a book that has lit hearts ever since.",
      ),
      keyFacts: [
        "Born 194 AH in Bukhara; died 256 AH (870 CE) near Samarqand",
        "Author of Sahih al-Bukhari — most authentic book after the Qur'an",
        "Travelled for 16 years collecting hadith from c. 1,000 teachers",
        "Sifted around 600,000 reports to produce his Sahih",
        "Lost and regained his sight in childhood through his mother's du'a",
        "Died in exile after refusing to teach in a ruler's palace",
      ],
      lessons: [
        "A mother's du'a in the night moves the affairs of the universe",
        "Genius requires sixteen years of patient travel, not a clever shortcut",
        "Knowledge must come to the seeker, not the seeker be servant to power",
        "Verify before you believe, especially in matters of religion",
        "End your life on the same principles you began it on",
      ],
    },
  },
];
