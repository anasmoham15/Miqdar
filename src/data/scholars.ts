import type { Story } from "./stories";

const p = (...paragraphs: string[]) => paragraphs;

// Great Scholars across the centuries — beyond the four imams.
// Sources: al-Dhahabi's Siyar A'lam al-Nubala, Ibn Kathir's al-Bidaya wa'l-Nihaya, modern academic biographies.
export const scholarsStories: Story[] = [
  {
    id: "scholar-imam-al-ghazali",
    title: "Imam al-Ghazali — The Proof of Islam (Hujjat al-Islam)",
    description:
      "The Persian scholar who reached the highest academic post in the Muslim world at 33, abandoned it for spiritual seclusion, and returned to write the Ihya' that has shaped Muslim hearts for nine centuries.",
    category: "Scholars",
    readTime: "9 min",
    sections: {
      intro: p(
        "Abu Hamid Muhammad ibn Muhammad al-Ghazali was born in Tus, Khurasan, in 450 AH (1058 CE). His father was a poor wool spinner who, on his deathbed, entrusted Abu Hamid and his brother Ahmad to a Sufi friend with whatever little he had, asking that they be educated.",
        "When the money ran out, the Sufi sent the boys to a madrasa where the food and lodging were free. 'We sought knowledge for other than Allah,' al-Ghazali later wrote, 'but knowledge refused to be sought except for Allah.'",
      ),
      life: p(
        "He studied in Tus, then Jurjan, then under the great Imam al-Haramayn al-Juwayni at the Nizamiyya of Nishapur — the most prestigious institute of its time. By the time al-Juwayni died, al-Ghazali had so far surpassed his peers that the Seljuk vizier Nizam al-Mulk appointed him head of the Nizamiyya of Baghdad in 484 AH. He was 33.",
        "For four years he stood at the summit of the Muslim academic world. Three hundred of the brightest students of the era attended his lectures. Caliphs and viziers consulted him. Then a crisis seized him.",
        "He realised, as he describes in al-Munqidh min al-Dalal (Deliverance from Error), that he was teaching for fame, not for Allah. His tongue refused to speak. He was unable to eat for days. Doctors said no medicine would help — it was a disease of the heart.",
        "He left everything. He distributed his wealth, kept only what he needed for his family, and walked away from Baghdad in disguise, bound for Damascus. There, in the minaret of the Umayyad Mosque, he secluded himself for years in worship and reflection. He travelled to Jerusalem, prayed in the Dome of the Rock, performed Hajj, and lived in poverty for over a decade.",
        "From this seclusion came his magnum opus: Ihya' 'Ulum al-Din (The Revival of the Religious Sciences). In forty books across four volumes — Acts of Worship, Customs, Destructive Vices, Saving Virtues — he united fiqh, theology and tasawwuf into a single map of the Muslim soul. No book after it has matched its scope or impact on personal piety.",
        "He also wrote Tahafut al-Falasifa (The Incoherence of the Philosophers), a precise critique of the Aristotelian theology of al-Farabi and Ibn Sina that protected Islamic creed for centuries. He returned briefly to teaching in Nishapur at the urging of the Sultan, then returned to Tus where he ran a small khanqah for students until his death in 505 AH (1111 CE).",
      ),
      legacy: p(
        "The Ihya' became, after the Qur'an and Sahih al-Bukhari, perhaps the most influential book in Sunni Islamic history. It is read everywhere from West African zawiyas to Indonesian pesantren and modern Western mosques.",
        "Al-Ghazali succeeded in something rare: he made fiqh, kalam and tasawwuf speak the same language. His critique of philosophy redrew the intellectual map of Sunni Islam. His honesty about his own crisis of intention modelled a kind of inward audit every seeker since has had to take.",
        "He is remembered as Hujjat al-Islam — the Proof of Islam — because his writings stand as a living argument for the depth and beauty of the religion.",
      ),
      keyFacts: [
        "Born 450 AH in Tus; died 505 AH (1111 CE)",
        "Head of the Nizamiyya of Baghdad at age 33",
        "Author of Ihya' 'Ulum al-Din, al-Munqidh min al-Dalal, Tahafut al-Falasifa",
        "Underwent a famous spiritual crisis and 11-year withdrawal",
        "Reconciled fiqh, kalam and tasawwuf in one synthesis",
      ],
      lessons: [
        "Audit your intentions, no matter how high you have climbed",
        "Sometimes leaving a position is more honest than holding it",
        "Knowledge of the head must marry knowledge of the heart",
        "Solitude with Allah is the laboratory of every great work",
        "True scholarship serves people's hearts, not the scholar's name",
      ],
    },
  },
  {
    id: "scholar-ibn-taymiyya",
    title: "Ibn Taymiyya — Shaykh al-Islam of the Mongol Era",
    description:
      "The Damascene scholar who out-debated philosophers, rallied armies against the Mongols, and wrote thousands of pages from a prison cell where he eventually died.",
    category: "Scholars",
    readTime: "9 min",
    sections: {
      intro: p(
        "Taqi al-Din Ahmad ibn 'Abd al-Halim ibn Taymiyya was born in Harran in 661 AH (1263 CE). His family fled the advancing Mongols when he was six and settled in Damascus, where his father was a respected Hanbali scholar.",
        "He memorised the Qur'an young, mastered Arabic and the religious sciences before twenty, and at 21 inherited his father's teaching post. He had a memory described by his contemporaries as photographic — he is said to have memorised entire books on a single reading.",
      ),
      life: p(
        "He combined deep traditional learning with a fearless willingness to debate anyone — Sufis who exaggerated saint-veneration, philosophers who deified Aristotle, Shi'a polemicists, Christian theologians, antinomian groups. His engagement was not destructive; it was reformist, calling Muslims back to the Qur'an, Sunnah and the way of the Salaf.",
        "When the Mongol Ilkhan Ghazan Khan invaded Syria, the people of Damascus panicked. Many scholars and notables fled to Egypt. Ibn Taymiyya rode out personally to meet Ghazan, rebuked him to his face for invading Muslim lands, and reportedly secured the safety of many captives. He then mobilised the people of Damascus to stand and fight.",
        "At the decisive Battle of Marj al-Saffar (702 AH / 1303 CE), Ibn Taymiyya was on the front lines. His fatwa permitting fasting Muslims to break their fast that day so they could fight at full strength — and personally drinking water before the army to encourage them — is famous in Hanbali fiqh.",
        "His outspoken positions earned him repeated imprisonment. He was jailed in Cairo, in Alexandria, and finally for the rest of his life in the citadel of Damascus. He was permitted books and pen until his enemies, frustrated that his prison had become a school, confiscated even those.",
        "On the day they took his pen and ink, his cell became silent. He turned fully to worship and Qur'an. He died in that cell in 728 AH (1328 CE). His funeral filled Damascus from the citadel to the Jabal al-Salihiyya.",
      ),
      legacy: p(
        "Ibn Taymiyya wrote on virtually every subject of Islamic learning. His Majmu' al-Fatawa runs to 37 volumes. Works like al-'Aqida al-Wasitiyya, Iqtida' al-Sirat al-Mustaqim and his refutation of the philosophers continue to be studied across the Sunni world.",
        "His student Ibn al-Qayyim systematised much of his thought. His influence later shaped 18th and 20th century reform movements, though he himself remained a Hanbali jurist working strictly within classical tradition.",
        "He united the rare combination of jihad on the battlefield, jihad in debate, and jihad against the self — and proved that a man with a pen and a prayer can outlast empires that sit on thrones.",
      ),
      keyFacts: [
        "Born 661 AH in Harran; died 728 AH (1328 CE) in Damascus prison",
        "Hanbali jurist, theologian, polemicist, mujahid",
        "Confronted the Mongol Ilkhan Ghazan Khan in person",
        "Personally fought at the Battle of Marj al-Saffar",
        "Wrote Majmu' al-Fatawa (37 vols) and dozens of other works",
        "Died in prison after his pen and ink were taken",
      ],
      lessons: [
        "Knowledge that does not move you to defend the ummah is incomplete",
        "Truth is sometimes a prison sentence — and sometimes a liberation",
        "Engage opponents with arguments, not abuse",
        "A scholar's body may be confined; his books cross continents",
        "When the pen is taken, turn to dhikr — the heart cannot be jailed",
      ],
    },
  },
  {
    id: "scholar-ibn-al-qayyim",
    title: "Ibn al-Qayyim — The Heart-Doctor of Damascus",
    description:
      "The brilliant student who walked beside Ibn Taymiyya into prison and emerged with books on the soul — Madarij al-Salikin, Zad al-Ma'ad, al-Da' wa'l-Dawa' — that still cure hearts today.",
    category: "Scholars",
    readTime: "8 min",
    sections: {
      intro: p(
        "Muhammad ibn Abi Bakr ibn Ayyub, known as Ibn Qayyim al-Jawziyya (his father was the supervisor — qayyim — of the Jawziyya school in Damascus), was born in Damascus in 691 AH (1292 CE).",
        "He was raised in the rich scholarly atmosphere of Mamluk Damascus, mastered hadith, fiqh, tafsir, kalam, language and Arabic poetry early, and at around 23 he met the man who would change his life: Ibn Taymiyya.",
      ),
      life: p(
        "He attached himself to Ibn Taymiyya and remained his closest student for the rest of the master's life. When Ibn Taymiyya was imprisoned, Ibn al-Qayyim was imprisoned with him. When Ibn Taymiyya was released, his student was released. When the master's pen was taken, Ibn al-Qayyim shared the silence.",
        "He inherited his teacher's methodology — return to Qur'an and Sunnah, classical Hanbali fiqh, suspicion of unwarranted innovation — but added his own gentle, lyrical, deeply spiritual voice. Where Ibn Taymiyya is the lion of the proof, Ibn al-Qayyim is the doctor of the heart.",
        "His Madarij al-Salikin (Stations of the Travellers) is a three-volume meditation on Surat al-Fatihah and the spiritual stations of 'iyyaka na'budu wa iyyaka nasta'in', mapping the soul's journey to Allah through love, fear, hope, repentance, gratitude.",
        "His Zad al-Ma'ad (Provisions for the Hereafter) on the Prophetic Sira is a unique work — at every event in the Prophet's ﷺ life, he extracts fiqh, manners, medicine, military strategy, marriage advice, and lessons in worship. It became a standard reference across the Muslim world.",
        "His Al-Da' wa'l-Dawa' (The Disease and the Cure) is a heartbreaking and healing book on sin, addiction and repentance — diagnosing the diseases of the heart with the same precision a physician uses for the body.",
        "He also wrote on hajj (al-Manar al-Munif), on inheritance, on legal theory (I'lam al-Muwaqqi'in), on prayer (Asrar al-Salah), on patience and gratitude ('Uddat al-Sabirin), on raising children (Tuhfat al-Mawdud) and dozens more.",
        "He died in Damascus in 751 AH (1350 CE), 22 years after his teacher. He had asked to be buried in the Bab al-Saghir cemetery, and was.",
      ),
      legacy: p(
        "Ibn al-Qayyim's books have a unique reach: they are read by jurists for fiqh, by Sufis for spiritual stations, by ordinary Muslims for tarbiya, and by students of Sira for prophetic guidance.",
        "He preserved and humanised the legacy of Ibn Taymiyya. Without him, much of the master's work would not have reached us in the form it has.",
        "His diagnostic skill on the heart — sin as disease, dhikr as cure, love of Allah as the goal — has comforted and corrected generations of seekers and continues to do so today.",
      ),
      keyFacts: [
        "Born 691 AH in Damascus; died 751 AH (1350 CE)",
        "Closest student of Ibn Taymiyya; imprisoned with him",
        "Author of Madarij al-Salikin, Zad al-Ma'ad, al-Da' wa'l-Dawa', I'lam al-Muwaqqi'in",
        "Combined Hanbali jurisprudence with deep spiritual writing",
        "Buried in Bab al-Saghir cemetery in Damascus",
      ],
      lessons: [
        "Sit at the feet of one master long enough for his light to enter you",
        "Pair the proof with the heart's medicine",
        "The diseases of the soul have cures as precise as medicine",
        "Spiritual stations are not abstract — they walk with daily prayer",
        "Loyalty to a teacher includes carrying his work after he is gone",
      ],
    },
  },
  {
    id: "scholar-an-nawawi",
    title: "Imam al-Nawawi — Forty Hadith That Travelled the World",
    description:
      "The young Damascene scholar who slept little, ate less, never married, and in 45 short years gave the ummah Riyad al-Salihin and the Forty Hadith now memorised on every continent.",
    category: "Scholars",
    readTime: "8 min",
    sections: {
      intro: p(
        "Yahya ibn Sharaf al-Nawawi was born in the village of Nawa, south of Damascus, in 631 AH (1233 CE). His father was a baker, and the boy used to mind the shop.",
        "Even as a child his teachers noticed his refusal to play with other children when there was Qur'an to be memorised. A passing scholar, hearing him recite, told his father: 'This child will be the imam of his age.' He was sent to Damascus at nineteen and never really left.",
      ),
      life: p(
        "He lived in a tiny room in the Madrasat al-Rawahiyya. He attended twelve lessons a day from the masters of Damascus — covering hadith, fiqh, usul, language, logic, tafsir — taking detailed notes and reviewing them through the night. He slept only briefly, often falling asleep over his books.",
        "He ate only one meal a day — at the time of suhur — and the meal was usually only the dry bread his father sent from Nawa. He drank only water from a single pot. He did not marry, saying he feared marriage would distract him from knowledge and worship. He owned almost nothing.",
        "He turned down salaries from waqf endowments, considering them suspect, and lived on the dry bread. When asked how he kept up his strength, he said the cold water of Damascus and remembrance of Allah were enough.",
        "Despite this short, austere life, his output is staggering. He wrote: al-Minhaj — the standard later commentary on Sahih Muslim, used across the Sunni world; al-Majmu' — a vast unfinished commentary on Shafi'i fiqh that is still a primary reference; Riyad al-Salihin — perhaps the most loved book of hadith on character and worship in the Muslim world; al-Adhkar — the gold-standard manual of daily du'a and dhikr; the Forty Hadith of al-Nawawi — forty-two foundational hadith that today nearly every serious student of Islam memorises.",
        "He stood up to the Mamluk Sultan Baybars on multiple occasions, refusing to endorse new taxes that violated Shari'ah, walking into the Sultan's audience without lowering his head and walking out without compromising. The Sultan, awed by him, did not harm him.",
        "He returned to Nawa in 676 AH (1277 CE) to visit his parents and the graves of his teachers. He fell ill there and died at the age of 45.",
      ),
      legacy: p(
        "Riyad al-Salihin and al-Adhkar are read aloud in homes from Morocco to Indonesia. The Forty Hadith are recited in Friday khutbas, taught in children's classes, and inscribed on the walls of mosques worldwide.",
        "His al-Minhaj is the indispensable commentary on Sahih Muslim. His al-Majmu' is one of the great works of comparative fiqh in Islamic history.",
        "He proved what a single life of focus, austerity and sincerity can produce — a 45-year life that has fed Muslim hearts for almost eight centuries.",
      ),
      keyFacts: [
        "Born 631 AH in Nawa; died 676 AH (1277 CE), aged 45",
        "Author of Riyad al-Salihin, al-Adhkar, Forty Hadith, al-Minhaj, al-Majmu'",
        "Attended 12 lessons a day in his student years in Damascus",
        "Never married; lived in austere poverty by choice",
        "Confronted Sultan Baybars over unjust taxes",
      ],
      lessons: [
        "A short life of focus can outweigh a long life of distraction",
        "Discipline of food and sleep is the foundation of discipline of mind",
        "Refuse suspect income, even when it is offered with honour",
        "Speak truth to rulers, but with dignity — not contempt",
        "Write for the ordinary believer's heart, not just the specialist's library",
      ],
    },
  },
  {
    id: "scholar-ibn-kathir",
    title: "Ibn Kathir — The Tafsir That Shaped Sunni Reading of the Qur'an",
    description:
      "The Damascene historian and exegete whose tafsir of the Qur'an by the Qur'an, the Sunnah and the Sahaba became one of the most relied-upon commentaries in the Sunni world.",
    category: "Scholars",
    readTime: "7 min",
    sections: {
      intro: p(
        "Isma'il ibn 'Umar ibn Kathir was born in Bosra (Syria) in 701 AH (1301 CE). His father was a khatib who died when Ibn Kathir was a small child. He was raised in Damascus by his elder brother.",
        "Damascus was then home to giants — Ibn Taymiyya, Ibn al-Qayyim, al-Mizzi (the great hadith master, whose daughter Ibn Kathir would marry), al-Dhahabi, and al-Subki. He studied with all of them.",
      ),
      life: p(
        "He attached himself especially to al-Mizzi in hadith, to Ibn Taymiyya in fiqh and 'aqida, and to al-Dhahabi in history. He combined the strengths of his teachers into a unique scholarly profile: a hadith expert who also wrote tafsir and history with confident command.",
        "He served as a teacher and judge in Damascus, became blind in his last years, and died in 774 AH (1373 CE). He was buried near his teacher Ibn Taymiyya in the Sufi cemetery of Damascus.",
        "His three monumental works are: Tafsir al-Qur'an al-'Azim — a tafsir of the Qur'an by the Qur'an itself, then by the Sunnah, then by the statements of the Sahaba and Tabi'een, with careful authentication of narrations. It is among the most widely read Sunni tafsirs to this day.",
        "Al-Bidaya wa'l-Nihaya — a 14-volume universal history from creation to his own day, integrating Qisas al-Anbiya, Sira, the early caliphates, the Umayyads, the Abbasids, and contemporary events. It remains a primary reference for the early period.",
        "Jami' al-Masanid wa'l-Sunan — a comprehensive arrangement of hadith from major collections.",
      ),
      legacy: p(
        "Ibn Kathir's tafsir, especially in its modern abridgements, is now perhaps the most distributed tafsir in the world — translated into virtually every major Muslim language.",
        "His al-Bidaya wa'l-Nihaya remains the standard narrative source for Sunni history of the early Islamic period.",
        "He demonstrated the discipline of his teachers in a unique way: a methodical, calm, evidence-driven scholarship that wears its erudition lightly. Even today a beginner can open his tafsir and find clarity, while a specialist finds depth.",
      ),
      keyFacts: [
        "Born 701 AH in Bosra; died 774 AH (1373 CE) in Damascus",
        "Studied under al-Mizzi, Ibn Taymiyya, al-Dhahabi",
        "Author of Tafsir Ibn Kathir and al-Bidaya wa'l-Nihaya",
        "Married al-Mizzi's daughter; raised in scholarly Damascus",
        "Lost his sight in old age but continued teaching",
      ],
      lessons: [
        "Interpret the Qur'an by the Qur'an before reaching for opinion",
        "Combine the disciplines of your teachers rather than choosing one",
        "Patient scholarship outlasts brilliant polemics",
        "Even a long life is not enough — start your great works young",
        "Lose your sight, not your sincerity — the heart still sees",
      ],
    },
  },
];
