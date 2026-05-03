import type { Story } from "./stories";

const p = (...paragraphs: string[]) => paragraphs;

// The Four Imams — founders of the four surviving Sunni schools of fiqh.
// Sources: al-Dhahabi's Siyar A'lam al-Nubala, Tarikh Baghdad, Hilyat al-Awliya
// of Abu Nu'aym, the Manaqib literature for each Imam (al-Saymari and al-Muwaffaq
// for Abu Hanifa; Qadi 'Iyad's Tartib al-Madarik for Malik; al-Bayhaqi's Manaqib
// al-Shafi'i; Ibn al-Jawzi and Ibn Abi Ya'la for Ahmad), Tarikh Dimashq of Ibn
// 'Asakir, and the introductions of the major fiqh works of each madhhab.
export const fourImamsStories: Story[] = [
  {
    id: "imam-abu-hanifa",
    title: "Imam Abu Hanifa — The Greatest Imam (Al-Imam al-A'zam)",
    description:
      "The Kufan jurist who turned a silk-trader's shop into the cradle of Hanafi fiqh, who debated kings, taught a circle of forty masters, and died in prison rather than serve as a judge for tyrants.",
    category: "FourImams",
    readTime: "18 min",
    sections: {
      intro: p(
        "Al-Nu'man ibn Thabit ibn Zuta ibn Marzuban, known to the Ummah as Abu Hanifa, was born in Kufa in 80 AH (699 CE). His grandfather Zuta was a freeborn Persian of noble Marzuban stock from Kabul who had embraced Islam at the hand of 'Ali ibn Abi Talib (RA). 'Ali made du'a for the family — that Allah would bless him and his descendants — and the scholars of later generations saw the bursting forth of fiqh through Abu Hanifa as a fruit of that du'a.",
        "His father Thabit, a silk-merchant, brought him as a small child to 'Ali (RA), who again invoked Allah's blessing upon him. Thabit raised his son in the bazaars of Kufa, training him in trade. Abu Hanifa grew into a tall, dark-skinned, handsome man with a piercing gaze, scrupulous honesty in the marketplace, and a memory like a sealed vault. He spoke beautifully, dressed well, perfumed himself with the most expensive musk, and held himself with the quiet dignity of a man who knew the worth of his own word.",
        "His turning point came almost by accident. He was striding through the streets of Kufa one morning when the great Tabi'i scholar al-Sha'bi noticed him and called him over. 'Where do you go, young man?' Abu Hanifa named the merchant whose shop he was heading to. Al-Sha'bi said: 'I do not mean that. I mean which scholar are you sitting with?' Abu Hanifa, embarrassed, admitted he sat with none. Al-Sha'bi, reading something in his face, said: 'I see in you intelligence, life and movement. Sit with the scholars, attend their gatherings, take notes — for I see in you the makings of a scholar.' Abu Hanifa later said: 'It struck my heart. I left the markets and turned to knowledge, and Allah benefited me through the words of al-Sha'bi.'",
      ),
      life: p(
        "He met several Companions of the Prophet ﷺ. By the soundest reports he saw Anas ibn Malik (RA) in Kufa, and is also reported to have met 'Abdullah ibn Abi Awfa, Sahl ibn Sa'd al-Sa'idi and others — making him, by the criteria of the muhaddithun, a Tabi'i. This single fact gave his fiqh a unique closeness to the era of the Companions, since his teachers were themselves the major students of the Sahaba.",
        "He first plunged into 'ilm al-kalam (theology) and became one of the sharpest debaters of his city, demolishing Khawarij, Mu'tazila and Shi'i sects with such ease that crowds gathered to watch him. He travelled more than twenty times to Basra, the heart of theological controversy, to debate. Then he saw the limits of polemic. He turned to fiqh, saying: 'I have looked at the people of every science. I found none more sincere or more beneficial to the Ummah than the fuqaha'. The disputants drown the people in argument, but the fuqaha' guide them to live and to worship.'",
        "He attached himself to Hammad ibn Abi Sulayman, the leading jurist of Kufa, who himself sat in the chain of Ibrahim al-Nakha'i, 'Alqamah, and Ibn Mas'ud (RA). For eighteen years Abu Hanifa attended Hammad's circle without missing a single session. He once said: 'When Hammad sat, I sat at his foot, and I would not raise my voice or stretch my legs in his presence out of reverence.' He memorised every fatwa Hammad issued in those eighteen years. When Hammad died in 120 AH, the people unanimously seated Abu Hanifa in his place. He was forty.",
        "He also travelled extensively to Makkah and Madinah during the hajj seasons, sitting with 'Ata' ibn Abi Rabah, Nafi' the freedman of Ibn 'Umar, 'Ikrimah the freedman of Ibn 'Abbas, al-Zuhri, 'Amr ibn Dinar and many others. His teachers numbered in the hundreds. He later said of 'Ata': 'I have not seen anyone better than 'Ata',' and of Nafi': 'I have not seen anyone more knowledgeable of the fatwas of Ibn 'Umar than Nafi'.'",
        "His method of teaching transformed Islamic jurisprudence. Rather than dictating rulings to silent students, he gathered around forty of the sharpest minds in Iraq into a permanent council. Among them were Abu Yusuf, Muhammad ibn al-Hasan al-Shaybani, Zufar ibn al-Hudhayl, al-Hasan ibn Ziyad, Dawud al-Ta'i, Asad ibn 'Amr, Hafs ibn Ghiyath, and many more. A question would be put before the council. Each man would speak. Abu Hanifa would steer the discussion, sometimes for days on a single mas'ala. A ruling was finalised only when the entire circle was satisfied. Through this collective ijtihad — unique in Islamic history — the Hanafi madhhab was systematically built into the most fully developed body of fiqh of the early period.",
        "He pioneered the systematic use of qiyas (analogical reasoning), istihsan (juristic preference where strict analogy produces hardship), and the science of hypothetical fiqh — anticipating cases before they occurred so the Ummah would have answers ready. He was the first to organise fiqh into ordered chapters: tahara, salah, zakah, sawm, hajj, mu'amalat, marriage, inheritance, jihad — the structure every later madhhab would inherit.",
        "His honesty in trade became proverbial. A woman once brought silk to his shop. He examined it, pointed out a small flaw she had not seen, and lowered the price for himself. When his partner Hafs ibn 'Abd al-Rahman once sold a defective bolt of cloth without disclosing the flaw, Abu Hanifa gave away the entire profit of that season — thirty thousand dirhams, an immense sum — in charity rather than touch a doubtful coin. He used to say: 'A dirham of halal earned through fatigue is dearer to me than a thousand of doubtful provenance.'",
        "His worship was extraordinary. For forty years he prayed Fajr with the wudu of 'Isha — meaning he stood the entire night in prayer. He was reported to have completed the Qur'an seven thousand times in his lifetime, and once to have recited the entire Qur'an in a single rak'ah at the Maqam of Ibrahim. He wept so much in prayer that his neighbour, hearing him through the wall night after night, asked: 'Does this man ever sleep?'",
        "His political stand cost him his life. The Umayyads tried first. The governor of Kufa Yazid ibn 'Umar ibn Hubayra summoned him to be the chief of the bayt al-mal and the seal-bearer of every official decree — meaning every act of the regime would carry the religious legitimacy of his name. Abu Hanifa refused. The governor had him whipped publicly, eleven days in succession, ten lashes added each day. His head swelled. Still he refused. The governor finally released him.",
        "When the Abbasids came to power he hoped, like many, that justice had returned. But when al-Mansur turned on the family of the Prophet ﷺ and killed Muhammad al-Nafs al-Zakiyya and his brother Ibrahim — descendants of al-Hasan (RA) whose revolt Abu Hanifa had quietly supported — Abu Hanifa lost all faith in him. Al-Mansur summoned him to be qadi of Baghdad, the highest judicial post in the empire. Abu Hanifa refused. The caliph swore by Allah that he would force him. Abu Hanifa swore by Allah that he would not accept. The caliph had him imprisoned, then beaten, ten lashes a day. He grew weaker but never bent. He said: 'If he ordered me to count the doors of his palace I would not do it for him — how then will I rule on the blood of Muslims by his appointment?'",
        "He died in prison in Baghdad in the month of Rajab, 150 AH (767 CE), aged seventy. Most narrations say he was poisoned. He had been making sajdah at the moment of death. His janazah was prayed by such crowds that the funeral prayer had to be repeated six successive times — fifty thousand at each prayer — and even after burial people continued praying over his grave for twenty days.",
      ),
      legacy: p(
        "The Hanafi madhhab became the official school of the Abbasid, Seljuk, Mughal and Ottoman empires — the schools of state for over a thousand years. Today it is followed by approximately a third of the world's Muslims and is the dominant madhhab from Turkey through the Levant's Hanafi pockets, Iraq, Central Asia, Afghanistan, the Indian subcontinent, China and the Balkans.",
        "Imam al-Shafi'i, his junior by three generations, said: 'All people are dependents of Abu Hanifa in fiqh.' Imam Malik, asked about him, said: 'I have seen a man who, were he to argue that this pillar of the mosque is gold, he would prove it to you.' Sufyan al-Thawri, often a critic in life, wept on the day of his death and said: 'A man has died today the like of whom the world has not seen since.'",
        "His refusal to accept judicial office under tyrants — at the cost of imprisonment, flogging and finally death — established for every later 'alim the principle that the dignity of sacred knowledge is not for sale, and that the throne does not authenticate the scholar; the scholar authenticates the throne by his refusal of it.",
        "His circle's collective ijtihad produced an unmatched volume of recorded fiqh — the Zahir al-Riwayah works of al-Shaybani run to thousands of pages and remain the foundational corpus of Hanafi law. Through his students Abu Yusuf, who became chief qadi of the Abbasid empire, and al-Shaybani, who taught al-Shafi'i, Hanafi fiqh shaped the legal mind of Islam itself.",
      ),
      keyFacts: [
        "Born 80 AH in Kufa; died 150 AH (767 CE) in Baghdad",
        "Founder of the Hanafi madhhab — the largest Sunni school today",
        "Tabi'i: met Anas ibn Malik (RA) and several other Companions",
        "Studied 18 years under Hammad ibn Abi Sulayman, then inherited his circle",
        "Council-based ijtihad with ~40 senior students including Abu Yusuf and al-Shaybani",
        "Refused judgeship under both Umayyads and Abbasids; flogged twice",
        "Died in prison in Baghdad, most likely by poison, while in sajdah",
        "Funeral salah repeated six times to accommodate the crowds",
        "Famed for trading honesty, lifelong tahajjud and weeping recitation",
      ],
      lessons: [
        "Knowledge is built by debate among masters, not by solo opinion",
        "The honour of a scholar is in refusing what others crave",
        "Honesty in trade is the foundation of honesty in fatwa",
        "A jurist must anticipate the questions of the next generation",
        "Death in prison for principle is a longer life than freedom in compromise",
        "A righteous teacher's word — like al-Sha'bi's to a young trader — can change a life and a Ummah",
      ],
    },
  },
  {
    id: "imam-malik",
    title: "Imam Malik ibn Anas — The Imam of the Abode of Hijrah",
    description:
      "The scholar of Madinah who never rode within its walls out of reverence, taught from a single seat for seventy years, authored the Muwatta', and was flogged for a fatwa rather than retract it.",
    category: "FourImams",
    readTime: "16 min",
    sections: {
      intro: p(
        "Malik ibn Anas ibn Malik ibn Abi 'Amir al-Asbahi was born in Madinah in 93 AH (711 CE) — the year Anas ibn Malik (RA), the last great Companion of Madinah, died. His family had migrated from Yemen and settled in the Prophet's ﷺ city generations earlier; his great-grandfather Abu 'Amir was a Companion who had fought at every battle with the Prophet ﷺ except Badr.",
        "He was born into a household of knowledge. His father Anas, his uncle Abu Suhayl Nafi', and his grandfather Malik were all narrators of hadith. His mother carried him for either two or three years — a long pregnancy noted by his biographers — and he was born tall, fair-skinned, with a noble bearing he kept all his life. As a youth he was so tall and broad-shouldered that strangers mistook him for a soldier rather than a student of knowledge.",
        "He grew up in the city of revelation itself, walking the streets the Prophet ﷺ had walked, sitting in the very mosque where revelation had descended, learning from those who learned from those who learned from the Messenger of Allah ﷺ. The first teacher he attached himself to was Rabi'ah al-Ra'i, the leading jurist of Madinah, whose circle he attended as a youth.",
      ),
      life: p(
        "He gathered knowledge from over three hundred teachers. From the Tabi'in he learned from Nafi' the freedman of Ibn 'Umar (the chain Bukhari called the 'silsilat al-dhahab' — golden chain — when joined to Ibn 'Umar from the Prophet ﷺ), Ibn Shihab al-Zuhri, Yahya ibn Sa'id al-Ansari, Hisham ibn 'Urwah, Ja'far al-Sadiq, Abu Hazim Salamah ibn Dinar, and many others. He used to say: 'I did not give a fatwa or transmit a hadith until seventy of the people of knowledge of Madinah testified that I was qualified for it.'",
        "He revered hadith and the city of Madinah with a reverence that became proverbial. He never rode a mount within the city limits, saying: 'I am ashamed before Allah to tread the soil where the Messenger of Allah ﷺ is buried with the hooves of an animal.' When his foot was paralysed in old age he was carried by hand rather than ride. He would never relieve himself within Madinah out of reverence; he would walk to the outskirts for it.",
        "Before teaching hadith he would perform a fresh ghusl, perfume himself, comb his beard, sit in his finest robes upon his cushion, and only then begin. If anyone raised his voice in his lesson he would say: 'Lower your voice, for Allah has commanded the believers to lower their voices in the presence of His Prophet ﷺ; and the Prophet ﷺ in his death is as he was in his life.' He would not teach if he was distressed, agitated or rushed, saying: 'I do not love that I should narrate the hadith of the Messenger of Allah ﷺ except in a state of dignity.'",
        "His great work, al-Muwatta' (The Well-Trodden Path), was composed over forty years. He sifted, by his own account, around one hundred thousand hadith down to roughly seventeen hundred — both Prophetic narrations and the rulings and practice of the Companions and Tabi'in of Madinah. He revised it repeatedly. Each major version is named after the student who narrated it; the most famous today is the recension of Yahya ibn Yahya al-Laythi.",
        "The caliph Abu Ja'far al-Mansur, on hajj, asked him to make the Muwatta' the official law of the empire — to be hung in the Ka'bah and imposed on every province. Malik refused, saying: 'O Amir al-Mu'minin, do not do so. The Companions of the Messenger of Allah ﷺ scattered to the lands; in every land they took fatwa from those Companions who had settled there. If you force people away from what they have inherited you will cause fitna. Leave the people of every land to what they have chosen.' Al-Mansur accepted the answer and said: 'Had you agreed I would have done it.'",
        "He was beaten for a fatwa. The governor of Madinah, Ja'far ibn Sulayman al-Hashimi, was acting under the Abbasid caliph al-Mansur. The caliph had taken oaths of allegiance from people across the Hijaz under coercion. Malik issued a fatwa, citing the hadith 'There is no divorce and no emancipation under compulsion,' that an oath taken under duress is not binding. The fatwa spread through Madinah and the people began to feel free of the bay'ah. The governor saw this as undermining the legitimacy of the throne. He had Malik dragged from his house, stripped, and publicly flogged — seventy lashes by some reports — until his shoulders dislocated and his arms hung loose for the rest of his life. Then he was paraded through the streets on a camel, the crier shouting that this was the punishment of one who had defied the bay'ah.",
        "Malik bore it without a word. When he was returned home, blood-soaked, he said only: 'I have called upon Allah to forgive Ja'far ibn Sulayman, for I do not love that any soul should be punished on my account.' He never retracted the fatwa. The caliph al-Mansur, when he heard, was furious with the governor and offered Malik public revenge. Malik refused, saying: 'A man whom the Prophet ﷺ has honoured by relating to me does not need vengeance from me.' From that day his prestige in Madinah was untouchable.",
        "He famously refused to give fatwa unless he was certain. 'La adri — I do not know' was a constant phrase on his lips. A man came to him with forty questions. He answered four and said 'la adri' to thirty-six. The man said: 'I have come to you from Africa, from a journey of many months, with these questions for you to answer for our people!' Malik replied: 'When you return, tell them: I asked Malik, and he said: I do not know.' He used to say: 'When the scholar leaves out la adri, his fatwas become a calamity.' And: 'Whoever loves to answer a question, let him present it first to Paradise and Hell — how he will save himself before he answers it.'",
        "His students were the leading jurists of the next generation. Most famous are al-Shafi'i (who studied under him in Madinah and recited the Muwatta' from memory back to him), 'Abdullah ibn Wahb, 'Abd al-Rahman ibn al-Qasim, Ashhab, Ibn al-Majishun, Ma'n ibn 'Isa, and Yahya ibn Yahya al-Laythi who carried the Muwatta' to Andalusia.",
      ),
      legacy: p(
        "The Maliki madhhab spread through North and West Africa, Andalusia, Sudan, Mauritania and parts of the Gulf. It remains today the dominant school of an entire civilisational arc from Morocco to Mali to Mauritania to Upper Egypt. In Andalusia under the Umayyads it was made the official madhhab and shaped the legal life of one of Islam's greatest civilisations.",
        "Al-Muwatta' is among the earliest surviving books of hadith and fiqh in any sustained form. Imam al-Shafi'i — his student — said: 'There is no book on the face of the earth, after the Book of Allah, more authentic than the book of Malik.' (This was before the compilation of Sahih al-Bukhari.) The Muwatta' became the seedbed of the entire science of riwayah and the model for every later combined work of hadith and fiqh.",
        "He died in Madinah in Rabi' al-Awwal 179 AH (795 CE), aged 86. He was buried in al-Baqi', a few hundred paces from the grave of the Prophet ﷺ — having spent his entire life within walking distance of the Master he had served, and never once mounted a beast on the soil that held him.",
      ),
      keyFacts: [
        "Born 93 AH in Madinah; died 179 AH (795 CE), buried in al-Baqi'",
        "Founder of the Maliki madhhab",
        "Author of al-Muwatta', composed and revised over 40 years",
        "Studied under more than 300 teachers in Madinah",
        "Refused to allow his book to be made the law of the empire",
        "Publicly flogged for upholding a fatwa; refused to retract or seek revenge",
        "Never rode a mount within the city limits of Madinah out of reverence",
        "Famous for the constant phrase la adri — 'I do not know'",
      ],
      lessons: [
        "Reverence for the place of the Prophet ﷺ is part of reverence for him",
        "'I do not know' is half of knowledge",
        "A scholar's fatwa must serve truth, not the throne",
        "Patience under oppression — without seeking revenge — multiplies one's standing",
        "Diversity of practice is part of the mercy of the Sahaba's spread",
        "Forty years of careful composition outweighs forty hasty books",
      ],
    },
  },
  {
    id: "imam-al-shafii",
    title: "Imam al-Shafi'i — The Architect of Usul al-Fiqh",
    description:
      "The Qurashi orphan raised in poverty in Makkah who memorised the Muwatta' before adolescence, mastered desert Arabic with the Hudhayl, and gave the science of legal theory its systematic form.",
    category: "FourImams",
    readTime: "17 min",
    sections: {
      intro: p(
        "Muhammad ibn Idris ibn al-'Abbas ibn 'Uthman ibn Shafi' al-Shafi'i was born in Gaza in Sha'ban 150 AH (767 CE) — the same month and year, by the most famous report, that Imam Abu Hanifa died, as if the lamp of fiqh in the East was being passed to a new hand in the West.",
        "His lineage met that of the Prophet ﷺ at 'Abd Manaf — making him a Qurashi of the noblest stock. His ancestor Shafi' was a Companion who as a youth had pledged allegiance to the Prophet ﷺ; Shafi's father al-Sa'ib carried the standard of Banu Hashim at Badr, was captured and ransomed, and embraced Islam.",
        "His father Idris died when he was an infant. His mother, an Azdi woman of immense piety and resolve, feared her son's noble lineage would be lost in the obscurity of Gaza. She gathered what little she had and travelled with him to Makkah so he could grow up in the Sacred City among his own people. They lived in deep poverty in a quarter of Makkah called Shi'b al-Khayf. He had no money for paper; he wrote on bones, palm leaves, broken pottery and bits of leather, then memorised what he had written, washed the surface, and reused it for the next lesson.",
      ),
      life: p(
        "He memorised the Qur'an by the age of seven. By ten he had memorised the Muwatta' of Imam Malik — a feat that would mark anyone for life. By thirteen he was sitting in the great mosque of Makkah, a beardless boy, and the muftis of the city were sending him questions to answer because his answers were so often correct.",
        "His mother sent him into the desert to live with the Hudhayl tribe, the most eloquent of the Arabs and the purest of speech. He spent ten years among them. He memorised their poetry by the thousand line. He absorbed the genius of pre-Islamic and early Islamic Arabic at its source. He returned to Makkah a master of language, a poet of unusual power, and an unmatched tracker of meaning in a Qur'anic verse or a Prophetic word — a foundation that later made his usul al-fiqh inseparable from his philology.",
        "He also became a horseman and an archer of rare skill. He used to say: 'A man should be expert in three things — fiqh, archery, and the mounting of horses,' and was capable of striking nine out of ten targets at full gallop.",
        "He travelled to Madinah and joined the circle of Imam Malik. The governor of Makkah had given him a letter of introduction. Malik received him coldly at first, but when he asked Shafi'i to read from the Muwatta', the boy began reciting it from memory without the book in front of him, with such accuracy and beauty of voice that Malik finally said: 'If anyone is to succeed in this world, it is this young man.' He stayed with Malik until Malik's death in 179 AH.",
        "After Malik died, Shafi'i fell into desperate poverty. He travelled to Yemen, took a position under its governor, and was caught up in a political accusation: that he and a group of Alid sympathisers were plotting against the Abbasids. He was dragged in chains from Yemen to Baghdad, brought before Harun al-Rashid, and stood trial for his life. His eloquence and the intervention of Muhammad ibn al-Hasan al-Shaybani — chief jurist of Iraq and student of Abu Hanifa — saved him. Harun freed him and even welcomed him to the city.",
        "He stayed in Baghdad and immersed himself in Hanafi fiqh through al-Shaybani. They studied together day and night. Al-Shaybani gave him a camel-load of his books to take and read. Shafi'i later said: 'I took from Muhammad ibn al-Hasan a camel's load of knowledge.' He combined the textual rigour of the Madinan school of his teacher Malik with the systematic reasoning of the Kufan school of Abu Hanifa — and from that fusion was born something new.",
        "His genius produced a discipline that did not exist before him as a stand-alone science: usul al-fiqh — the legal theory of Islam. His al-Risala, written first in Iraq and revised in Egypt, is the first systematic work in Islamic history defining the four sources (Qur'an, Sunnah, ijma' and qiyas), the conditions of valid evidence, the rules of language by which a text yields its meaning (general and particular, absolute and qualified, command and prohibition, abrogating and abrogated), the criteria of authentic transmission, and the steps by which a mujtahid moves from text to ruling. Every later science of fiqh, in every madhhab, walks in its footsteps. Imam Ahmad said: 'Before al-Shafi'i, people did not know the general from the particular, nor the abrogating from the abrogated, until al-Shafi'i came and explained.'",
        "He had two distinct schools: the qadim (old) developed in Iraq and the jadid (new) developed in Egypt. The reason was simple: he revised many of his earlier opinions in light of fresh evidence and new conditions. His famous statement — 'If a hadith is authentic, that is my madhhab' — is the charter of every ahl al-hadith scholar after him, and the standing humility of a master who held his own opinions lightly when text demanded otherwise.",
        "He moved finally to Egypt in 199 AH. He taught in the mosque of 'Amr ibn al-'As in Fustat. He combined three sittings each day: one for tafsir and hadith after Fajr; one for fiqh and usul; one for poetry, history and Arabic. Students gathered around him from across the Muslim world. From Egypt his madhhab spread.",
        "His worship was as dazzling as his learning. He divided his nights into three: a third for sleep, a third for the Qur'an (he completed the Qur'an sixty times each Ramadan, all in salah), and a third for writing. He used to weep so much in tahajjud that the carpets beneath him would be wet by Fajr. Al-Rabi' ibn Sulayman, his student, said: 'Al-Shafi'i would recite a third of the Qur'an in his tahajjud, and I never saw him pass through Surat al-Sharh, Surat al-Duha, Surat al-'Alaq, or the verses of mercy without weeping.'",
        "He died in Egypt at the end of Rajab, 204 AH (820 CE), aged 54. He had been suffering from haemorrhoids and a long internal illness, which he bore with remarkable patience. His last words were verses of poetry he had composed on his death-bed, including: 'When my heart hardened and my paths narrowed, I made my hope in Your forgiveness a stairway. My sin seemed great to me — but when I weighed it against Your forgiveness, O Lord, Your forgiveness was greater.'",
      ),
      legacy: p(
        "The Shafi'i madhhab spread through Egypt, the Levant, the Hijaz, Yemen, the Kurdish regions, East Africa, the Hadramawt diaspora and most of Southeast Asia. Today it is the dominant school in Indonesia, Malaysia, Brunei, Yemen, the Comoros, Sri Lanka, southern India, Kurdistan and most of Sunni East Africa. It is followed by an estimated quarter of the world's Muslims.",
        "His Risala created the discipline that made Islamic law a coherent science. Without al-Shafi'i, the relationship between Qur'an and Sunnah, the position of khabar al-wahid, the workings of qiyas and ijma', and the methodology of istinbat would have remained scattered. Imam Ahmad said: 'Al-Shafi'i was like the sun for the world and like wellbeing for the body. Find replacements for these two if you can.'",
        "He combined sharp intellect, eloquent Arabic poetry (his Diwan is still read), deep zuhd, and unmatched humility. His advice — 'Knowledge is what benefits, not what is memorised'; 'No one who insists upon his opinion ever achieves leadership'; 'My opinion is correct with the possibility of error, and my opponent's opinion is wrong with the possibility of being correct' — became the inheritance of every later mujtahid.",
        "He is buried in al-Qarafa cemetery in Cairo, in a domed shrine that has been a place of visitation since shortly after his death.",
      ),
      keyFacts: [
        "Born 150 AH in Gaza; died 204 AH (820 CE) in Cairo",
        "Founder of the Shafi'i madhhab",
        "Author of al-Risala — the first systematic book of usul al-fiqh",
        "Memorised the Qur'an by 7 and the Muwatta' by 10",
        "Spent 10 years with the Hudhayl tribe mastering pure Arabic",
        "Studied under Imam Malik in Madinah and al-Shaybani in Iraq",
        "Two distinct schools: qadim (Iraq) and jadid (Egypt)",
        "Famous saying: 'If a hadith is authentic, that is my madhhab'",
        "Completed the Qur'an 60 times each Ramadan in tahajjud",
      ],
      lessons: [
        "Poverty is no obstacle to becoming a giant of knowledge",
        "Master the language before you master the law",
        "Combine the strengths of opposing schools rather than choosing sides",
        "Be willing to revise your opinions when evidence grows",
        "True knowledge is what benefits the heart, not what fills the page",
        "'My opinion is right with the possibility of error' — the charter of intellectual humility",
        "End your life weighing your sins against Allah's forgiveness, not against your works",
      ],
    },
  },
  {
    id: "imam-ahmad",
    title: "Imam Ahmad ibn Hanbal — The Imam of Ahl al-Sunnah Who Stood Alone",
    description:
      "The hadith master of Baghdad, raised in poverty by a widowed mother, whose endurance through the Mihna (Inquisition) under three caliphs saved Sunni 'aqida for every generation after him.",
    category: "FourImams",
    readTime: "17 min",
    sections: {
      intro: p(
        "Ahmad ibn Muhammad ibn Hanbal al-Shaybani al-Marwazi was born in Baghdad in Rabi' al-Awwal 164 AH (780 CE). His family were originally from Marw in Khurasan; his grandfather Hanbal had been governor of Sarakhs under the Umayyads and an early supporter of the Abbasid revolution. His father, a soldier, died very young — Ahmad was an infant. His widowed mother, Safiyyah bint Maymunah, raised him alone in the capital of the Abbasid Empire, scrupulously honest and immensely devout.",
        "He grew up tall, dark-haired, with a slight reddish tinge in his beard, a humble bearing, and a soft voice that almost never rose. He was so light-skinned of soul that even as a youth other students would bring their problems to him. The teacher of his neighbourhood maktab once said to his mother: 'Safiyyah, your son is not like other children.'",
      ),
      life: p(
        "He showed an exceptional appetite for hadith from his early teens, walking before dawn to the great mosques of Baghdad carrying his ink-pot and pen. His mother used to fasten his cloak in the cold and weep as she sent him out, begging Allah to keep him safe. By his twenties he had begun the most ambitious journeys of any scholar of his time. He travelled five times to Kufa, five times to Basra, twice to Yemen, four times to the Hijaz, and to Syria, the Jazirah and Khurasan — each journey on foot or by mule, often without provision, sometimes selling his water-skin for bread.",
        "He met around two hundred and eighty teachers, the giants of the age: Hushaym ibn Bashir, Sufyan ibn 'Uyaynah, 'Abd al-Razzaq al-San'ani in Yemen (with whom he stayed two years), Yazid ibn Harun, Yahya ibn Sa'id al-Qattan, 'Abd al-Rahman ibn Mahdi, Waki' ibn al-Jarrah, and above all al-Shafi'i, who became his closest teacher and dearest friend in Iraq. Al-Shafi'i used to say: 'I left Baghdad and I did not leave behind anyone more excellent, more learned, more pious or more god-fearing than Ahmad ibn Hanbal.' Ahmad in turn used to say: 'Al-Shafi'i was for us like the sun for the world and like wellbeing for the body.'",
        "His Musnad, dictated to his son 'Abdullah, contains around twenty-seven thousand hadith (with repetitions; about thirty thousand by some counts) drawn from a memory said to hold roughly a million reports including weak ones. He combined this hadith mastery with deep fiqh — strictly evidence-based, cautious in qiyas, unwilling to give a fatwa where a Companion or Tabi'i had not spoken before him. From his rulings, recorded by his sons and major students, the Hanbali madhhab was constructed.",
        "He lived in extreme zuhd. He owned a single rough cloak. He often had nothing in the house. When his wife, Umm 'Abdullah, asked for a new garment after years, he sold a few of his books to buy it. He was repeatedly offered enormous gifts by the Abbasid caliph al-Mutawakkil — chests of gold, monthly stipends, robes of honour — and refused them all, saying: 'I have no need.' When al-Mutawakkil insisted on giving stipends to his sons, Ahmad would not eat from any food bought with that money and ate only from what his nephew earned by manual labour.",
        "He patched his own clothes with his own hand. He sat on the floor among the poorest students. He never let anyone walk behind him to honour him. He once heard a man say: 'May Allah reward you for what you have done for Islam,' and he wept and said: 'Rather, may Allah reward Islam for what it has done for me. Who am I, and what is my standing?'",
        "His great trial — the Mihna — came under the caliph al-Ma'mun. Influenced by the Mu'tazila, al-Ma'mun adopted the doctrine that the Qur'an is created (khalq al-Qur'an), in opposition to the Sunni position that the Qur'an is the uncreated speech of Allah. In the year 218 AH he wrote to his governors ordering every scholar, judge and muhaddith to be examined and to publicly declare that the Qur'an is created — on pain of dismissal, imprisonment or death.",
        "Most scholars complied under coercion, reasoning that to save themselves and their families they could outwardly affirm the doctrine. A handful refused. Of those who refused publicly without dissimulation, after deaths in prison and recantations under the lash, by the end of the Mihna only two stood firm — and one of them, Muhammad ibn Nuh, died in chains on the road to Tarsus where Ahmad was praying over him. Ahmad alone remained.",
        "He was chained, dragged from Baghdad in irons, then — when al-Ma'mun died en route — returned to prison in Baghdad. Under al-Mu'tasim he was brought before the caliph day after day. The chief Mu'tazili theologians Ahmad ibn Abi Du'ad and Bishr al-Marisi debated him. Ahmad answered every argument with verses of the Qur'an and authentic hadith, demolishing their proofs one by one. The caliph, embarrassed and infuriated, ordered him flogged.",
        "He was beaten with whips of leather by the strongest executioners. They took turns. They struck him until his flesh tore from his back and his joints dislocated. He repeatedly lost consciousness. They poured water over him to revive him and beat him again. Between strokes he would say in a calm voice: 'Bring me one verse from the Book of Allah or one hadith from the Messenger ﷺ that says the Qur'an is created, and I will say it.' They could not. The flogging continued for days. His private parts were exposed; he made du'a to Allah, and his lower garment, by the witness of those present, was tightened by an unseen hand. After thirty-eight lashes by some accounts, hundreds by others, he was dragged unconscious back to his cell.",
        "Al-Mu'tasim eventually released him out of fear of public revolt — the streets of Baghdad were on the verge of rising. Ahmad was carried home half-dead. His wounds took years to heal. His arm-bones had to be set by a bone-setter who said: 'I have set the arms of fighters and brigands but I have never seen wounds like these.' He never complained. When asked how he endured, he said: 'I remembered the saying of al-Hasan al-Basri: by Allah, if forbearance were a man, it would be a noble man.'",
        "Under al-Wathiq the Mihna continued and Ahmad lived in hiding in his own house, not coming out for prayer in the masjid. When al-Mutawakkil came to power in 232 AH, he reversed the policy and restored the Sunni creed. He summoned Ahmad to Samarra, lavished honours upon him, offered him robes, gold and influence. Ahmad refused everything. He declined even to enter the caliph's palace. He used to say: 'I do not want my name to be dignified by the dunya.' When asked why he would not visit the caliph who had vindicated him, he said: 'I fear that he would honour me and I would be among those whose deeds Allah counts among the deeds of those who lean upon oppressors.'",
        "He died in Baghdad on Friday, 12 Rabi' al-Awwal 241 AH (855 CE), aged 77. His funeral was the largest the city had seen — the historians of Baghdad estimated, almost certainly with exaggeration but indicative of the scale, that eight hundred thousand men and sixty thousand women prayed over him. Many Jews, Christians and Magians embraced Islam that day, struck by the sight of a city in mourning for a man who had owned nothing.",
      ),
      legacy: p(
        "The Hanbali madhhab is followed today especially in the Arabian Peninsula — the Najd, the Hijaz, Qatar — and has had immense influence on Sunni revivalist movements globally. Its emphasis on strict adherence to text and the way of the Salaf shaped Ibn Taymiyyah, Ibn al-Qayyim, the Najdi reform, and much of contemporary Sunni discourse.",
        "More importantly than any madhhab, Ahmad's stand under the Mihna preserved the Sunni creed that the Qur'an is the uncreated speech of Allah — and established the principle that on matters of 'aqida the scholar bows to no power but Allah, and that the truth is not whatever the throne can compel the masses to repeat.",
        "'Ali ibn al-Madini, the great hadith critic, said: 'Allah strengthened this religion through Abu Bakr on the day of the Riddah, and through Ahmad on the day of the Mihna.' Ishaq ibn Rahawayh said: 'Ahmad is hujjah (a proof) between Allah and His creation.' Bishr al-Hafi, asked why he himself had not stood up like Ahmad, said weeping: 'Ahmad was at the rank of the Prophets. I am not at his rank.'",
        "His Musnad remains one of the great hadith works of Islam. His responses on creed — recorded by his students in Usul al-Sunnah and al-Radd 'ala al-Jahmiyyah — became the canonical statements of Sunni doctrine on the Qur'an, the attributes, the seeing of Allah in the Hereafter, and the unbroken chain of orthodoxy.",
      ),
      keyFacts: [
        "Born 164 AH in Baghdad; died 241 AH (855 CE)",
        "Founder of the Hanbali madhhab",
        "Compiled al-Musnad: c. 27,000–30,000 hadith from c. 280 teachers",
        "Travelled five times each to Kufa and Basra, and to Yemen, Syria, Hijaz",
        "Endured years of imprisonment and severe flogging under three caliphs in the Mihna",
        "Refused all gifts and posts from rulers, even after vindication",
        "His funeral remembered as the largest ever held in Baghdad",
        "Buried in Baghdad; grave swept away by Tigris floods in later centuries",
      ],
      lessons: [
        "One man holding firm can save the creed of an entire Ummah",
        "Knowledge is built by travel, sacrifice and lifelong effort",
        "Reject the gifts of the powerful if they will buy your silence",
        "Truth is not a majority opinion; it is what the evidence says",
        "When the lash falls, hold to the text — and let Allah hold you",
        "Refuse to be honoured by the dunya, even by those who finally honour you",
        "True zuhd is not poverty by force — it is wealth refused",
      ],
    },
  },
];
