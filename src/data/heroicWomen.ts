import type { Story } from "./stories";

const p = (...paragraphs: string[]) => paragraphs;

// The Heroic Women of the Sahaba — beyond the wives and daughters of the Prophet ﷺ,
// these are the women who fought with swords, nursed the wounded, taught hadith,
// migrated alone, and gave sons to martyrdom for Allah's sake.
// Sources: Ibn Hisham's Sira, al-Bukhari, Muslim, Ibn Sa'd's Tabaqat al-Kubra
// (especially the volume on women), al-Dhahabi's Siyar A'lam al-Nubala,
// Ibn Hajar's al-Isabah fi Tamyiz al-Sahabah.
export const heroicWomenStories: Story[] = [
  {
    id: "women-nusaybah-bint-kab",
    title: "Nusaybah bint Ka'b (Umm 'Umarah) (RA) — The Shield of the Prophet at Uhud",
    description:
      "An Ansari woman who at Uhud picked up a sword and shield to defend the Prophet ﷺ when the men retreated, taking thirteen wounds in his service.",
    category: "HeroicWomen",
    readTime: "8 min",
    sections: {
      intro: p(
        "Nusaybah bint Ka'b al-Ansariyyah, better known by her kunyah Umm 'Umarah, was an Ansari woman of the Khazraj clan of Banu Najjar in Madinah. She was among the small group of women who attended the Second Pledge of al-'Aqabah — pledging her allegiance to the Prophet ﷺ before he had even reached Madinah.",
        "She married twice, had four children — Habib, 'Abdullah, Tamim, Khawlah — and lived a normal Ansari householder's life until the moment Islam asked something extraordinary of her.",
        "Her character was a combination of warmth at home and ferocity in defence. The Prophet ﷺ said of her at Uhud: 'I did not turn left or right at Uhud except that I saw her fighting in front of me.' (Ibn Sa'd)",
      ),
      life: p(
        "She had gone out to Uhud carrying a water-skin to give the wounded fighters water. When the Muslim archers left their post, the cavalry of Khalid ibn al-Walid — still then on the side of Quraysh — wheeled round the back and the Muslim ranks broke. Many of the men ran. The Prophet ﷺ was suddenly exposed.",
        "Umm 'Umarah dropped her water-skin, picked up a sword and a shield from the ground, and threw herself into the fighting around the Prophet ﷺ. Her son 'Abdullah and her husband Ghaziyyah were both fighting nearby; she joined them at the Prophet's side.",
        "A polytheist named Ibn Qami'a charged toward the Prophet ﷺ shouting: 'Show me Muhammad!' Umm 'Umarah blocked him with her shield and struck him with her sword. He returned and struck her on the shoulder, gashing her so deeply that the wound stayed with her for the rest of her life. She kept fighting.",
        "She took thirteen separate wounds at Uhud. Her son 'Abdullah was wounded; she bound up his wound with a piece of her own headcover, told him to go back into the fighting, and turned to fight on. The Prophet ﷺ saw it and said: 'Who can do what you do, Umm 'Umarah?'",
        "When the dust settled, the Prophet ﷺ supplicated for her and her household. He said: 'O Allah, make them my companions in Paradise.' She wept and said: 'O Messenger of Allah, ask Allah to gather us with you in Paradise.' He said: 'O Allah, make them my companions in Paradise.' She said: 'I do not care what afflicts me of this world.'",
        "She fought again at the Treaty of Hudaybiyah journey, at Khaybar, and at Hunayn. After the Prophet's death, when Musaylimah the Liar's army had to be confronted at Yamamah, she was already an older woman — and she went anyway. She fought at Yamamah, where her son Habib had been captured by Musaylimah some time earlier and tortured to death for refusing to deny that Muhammad ﷺ was the Messenger of Allah. She lost a hand at Yamamah and bore eleven wounds.",
        "She died in Madinah some years after Yamamah, an old woman with a body marked from neck to feet by the wounds she had taken in defence of the Messenger of Allah ﷺ.",
      ),
      legacy: p(
        "Umm 'Umarah is one of the great refutations of any reading of Islam that wants to silence or hide women. The Prophet ﷺ told the world that on the worst day of his life — when men around him fled — a woman was the one he saw turning everywhere he turned, sword in hand, blocking the blows from him.",
        "She is also one of the great mothers of martyrs. Her son Habib was tortured and dismembered by Musaylimah for refusing to deny Muhammad ﷺ — and her response was to ride to Yamamah and lose her own hand to the same enemy.",
        "Ibn Sa'd, in his Tabaqat, dedicates one of the most striking narrations of his entire work to her. The Prophet ﷺ said: 'The standing of Nusaybah bint Ka'b on the day of Uhud is better than the standing of so-and-so and so-and-so.' (Ibn Sa'd)",
      ),
      keyFacts: [
        "Ansari woman of Banu Najjar; took the Second Pledge of al-'Aqabah",
        "Took 13 wounds defending the Prophet ﷺ at Uhud",
        "Her shoulder was permanently scarred from a sword blow defending him",
        "The Prophet ﷺ said: 'I did not turn anywhere at Uhud except I saw her fighting in front of me'",
        "Her son Habib was martyred by Musaylimah, who tortured him for refusing to deny the Prophet ﷺ",
        "Lost her hand and took eleven wounds at the Battle of Yamamah",
        "Died in Madinah years after Yamamah",
      ],
      lessons: p(
        "Step into the gap when others step back. The Prophet ﷺ was exposed, the men were running, and Umm 'Umarah picked up a sword. Whatever your gap looks like — at home, at work, in your community — step in.",
        "Send your sons back into the line. After binding her son's wound she sent him back into the fighting. Raise children whose mother does not flinch when the deen needs them.",
        "A woman's standing is measured by Allah, not by the loud voices of culture. The Prophet ﷺ ranked Umm 'Umarah's standing above many famous men. Allah's measure does not match the world's.",
        "Ask for Paradise, not for safety. She did not ask for healing. She asked to be with him ﷺ in Jannah, and said the rest did not matter. Train your du'a to ask for the highest things.",
        "A scar is a record. Her body carried Uhud and Yamamah for the rest of her life. Carry the marks of your service to Islam — visible or invisible — with quiet pride.",
      ),
    },
  },
  {
    id: "women-rufaydah",
    title: "Rufaydah bint Sa'd al-Aslamiyyah (RA) — The First Nurse of Islam",
    description:
      "The Ansari woman who set up a tent inside the Prophet's mosque to care for the wounded — the first Muslim nurse and the first field hospital in Islamic history.",
    category: "HeroicWomen",
    readTime: "6 min",
    sections: {
      intro: p(
        "Rufaydah bint Sa'd al-Aslamiyyah was an Ansari woman of the tribe of Aslam. Her father had been a healer, and she had learned the skill from him before Islam. When she embraced Islam she put her medical knowledge into the service of the Muslim community.",
        "Her character was practical, organised, and deeply compassionate. She is one of the earliest documented examples in human history of an organised, named, professional female nurse — and Islam was the framework that drew her gift out into public service.",
      ),
      life: p(
        "Rufaydah set up a tent inside the courtyard of Masjid al-Nabawi in Madinah, with the permission of the Prophet ﷺ, in which she treated the sick, the injured, and the poor. She gathered other Ansari women and taught them basic care. This was the first organised Muslim nursing service.",
        "When the Battle of the Trench was fought in 5 AH, Sa'd ibn Mu'adh — chief of the Aws and one of the great heroes of Islam — was struck in the arm by an arrow that severed a major vein. The wound was serious. The Prophet ﷺ said: 'Place him in the tent of Rufaydah, so that I may visit him from nearby.'",
        "Sa'd ibn Mu'adh was treated in Rufaydah's tent for some time. Eventually he died there, after having delivered his famous judgement on Banu Qurayzah. The Prophet ﷺ said of him: 'The throne of the Most Merciful shook for the death of Sa'd.' (Bukhari)",
        "Rufaydah went out with the Prophet ﷺ on his campaigns to tend the wounded on the battlefield as well — a moving field hospital. She continued her work in Madinah until the end of her life, treating women, men, children, the wealthy and the poor without discrimination, asking only the satisfaction of Allah.",
        "She also paid for medical supplies from her own wealth and distributed food and clothing to the destitute. Her tent at the masjid became the natural meeting place for any Muslim in need of physical care, and her name has been preserved in classical sources as the founder of Muslim nursing.",
      ),
      legacy: p(
        "Rufaydah's tent at Masjid al-Nabawi is the seed from which the long Islamic tradition of free public hospitals — the famous bimaristans of Damascus, Cairo, Baghdad and Cordoba — would later grow. Long before Europe had an organised public hospital, Muslim societies were running them, staffed by men and women trained in the tradition Rufaydah began.",
        "She is also a powerful refutation of the idea that the early Muslim community confined women to the home. The Prophet ﷺ permitted her to set up a public clinic at his own mosque, sent her one of his most beloved Companions for treatment, and took her with him on military campaigns.",
        "In modern times she has become the namesake of nursing schools, hospital wings, and prizes for nursing across the Muslim world — a quiet Ansari woman whose name now sits over surgical wards.",
      ),
      keyFacts: [
        "Ansari of the tribe of Aslam; trained as a healer by her father",
        "Set up a treatment tent inside the courtyard of Masjid al-Nabawi",
        "Treated Sa'd ibn Mu'adh after he was wounded at the Battle of the Trench",
        "Trained other Ansari women in nursing",
        "Accompanied the Prophet ﷺ on campaigns as a battlefield nurse",
        "Funded medical supplies and food for the poor from her own wealth",
        "Considered the first nurse in Islamic history and the founder of Muslim nursing tradition",
      ],
      lessons: p(
        "Bring your worldly skill into the masjid. Rufaydah's medical knowledge became 'ibadah the moment she put it in service of the Muslims. Whatever you can do — first aid, accounting, teaching, IT — bring it through the masjid door.",
        "Set up systems, not just acts of kindness. Rufaydah's tent was an institution that survived long after her. Build something repeatable.",
        "Women's leadership in Islam is real. The Prophet ﷺ permitted a woman to run a public clinic at his masjid. Anyone who pretends Islam excludes women from public service is rewriting the Sira.",
        "Care for the wounded is care for the wounded; status does not matter. Rufaydah treated commanders and the destitute equally. Health care should know no class.",
        "Your private wealth can fund public mercy. She paid for supplies herself. Allocate part of your halal wealth to running, not just one-off donations.",
      ),
    },
  },
  {
    id: "women-asma-bint-yazid",
    title: "Asma bint Yazid (RA) — The Orator of the Women",
    description:
      "She stood up before the Prophet ﷺ and spoke for all the women of the world — and she fought at Yarmouk with a tent pole, killing nine Roman soldiers.",
    category: "HeroicWomen",
    readTime: "7 min",
    sections: {
      intro: p(
        "Asma bint Yazid ibn al-Sakan al-Ansariyyah was an Ansari woman of the Aws tribe in Madinah. She was related to the Mothers of the Believers — Mu'adh ibn Jabal was her cousin. She embraced Islam early in Madinah and gave bay'ah to the Prophet ﷺ.",
        "She was famously eloquent — so much so that she was called Khatibat al-Nisa' — 'the Orator of the Women'. She narrated 81 hadiths from the Prophet ﷺ.",
        "Her character combined a sharp tongue, a clear mind, and — as Yarmouk would later prove — a willingness to swing a tent pole at the Roman empire.",
      ),
      life: p(
        "Her most famous moment as an orator came when she went to the Prophet ﷺ as a delegate of the Muslim women. She said: 'O Messenger of Allah, may my father and mother be sacrificed for you, I have come as the spokeswoman of the women. Allah has sent you to all men and women, and we believed in you and in your Lord. We women are confined and restricted, the support of our households, the place into which men plant their desires, and the carriers of their children. And you men have been favoured over us with the Friday prayer, the congregations, visiting the sick, attending funerals, repeated pilgrimages, and — better than all that — jihad in the path of Allah. When a man goes out for Hajj or 'Umrah or to defend the borders, we keep your wealth, weave your clothes, and raise your children. Will we not share with you in the reward, O Messenger of Allah?'",
        "The Prophet ﷺ turned to his Companions in amazement and said: 'Have you ever heard a woman ask a better question about her religion than this one?' They said: 'O Messenger of Allah, we did not think a woman could be guided to such a question.' The Prophet ﷺ then turned to her and said: 'Go back, O Asma, and inform the women behind you that the excellent treatment of any of you of her husband, her seeking of his pleasure, and her following of his approval — equals all of that for the men.'",
        "She returned to the women with the answer that lifted the spirits of every Muslim woman in Madinah and that has lifted the spirits of believing women in every century since. She had stood as their advocate in front of the Messenger of Allah ﷺ — and Allah's Messenger had answered her with one of the most beautiful affirmations of women's worship in the Sunnah.",
        "Years later, after the Prophet's death, she took part in the great campaigns into Sham. At the Battle of Yarmouk in 15 AH — the decisive battle that broke the Roman empire's hold on Syria — she fought with the women alongside the men. When the Romans broke through the Muslim lines at one point, she picked up a tent pole and rushed into the fighting with it. She killed nine Roman soldiers with that pole and was wounded herself.",
        "She survived Yarmouk and continued narrating hadith. She died in Sham in old age and was buried there.",
      ),
      legacy: p(
        "Asma bint Yazid is the woman who went to the Prophet ﷺ on behalf of half the Muslim community. Her question opened the door of clarity for every Muslim woman who has ever wondered if her quiet domestic worship is equal in Allah's eyes to her brother's loud public worship. The Prophet's answer settled it for the Ummah forever.",
        "Her oratory is one of the great proofs that Islam never silenced its women. The 'Orator of the Women' had a public voice in the household of revelation itself — and the Prophet ﷺ celebrated her question, not censured it.",
        "Her tent pole at Yarmouk is a separate kind of legacy. The same woman who advocated eloquently for the women of Madinah went on to bring down nine soldiers of Heraclius with a piece of wood — proof that articulation and physical courage live easily together in believing women.",
      ),
      keyFacts: [
        "Ansari of the Aws; cousin of Mu'adh ibn Jabal",
        "Called Khatibat al-Nisa' — the Orator of the Women",
        "Spoke to the Prophet ﷺ as the spokeswoman of the women of the Ummah",
        "Narrated 81 hadiths from the Prophet ﷺ",
        "Fought at the Battle of Yarmouk in 15 AH",
        "Killed 9 Roman soldiers with a tent pole at Yarmouk",
        "Died and was buried in Sham",
      ],
      lessons: p(
        "Speak up for those you represent. Asma went to the Prophet ﷺ for all the women, not just for herself. If you have a voice, use it for those who do not.",
        "A good question is half of knowledge. The Prophet ﷺ celebrated her question above the Companions' silence. Train yourself to ask the questions that solve doubts for whole communities.",
        "Quiet worship has equal weight. The Prophet's answer to her means that the woman raising children, weaving clothes, and pleasing her husband for Allah's sake earns what the men earn in jihad. Honour this in your treatment of the women in your home.",
        "Eloquence and effort are not opposites. The same tongue that argued for women's worship later swung a tent pole at the Romans. Develop both.",
        "Go to the front, even with what you have. She did not have a sword; she had a tent pole. Use what is in your hand for Allah.",
      ),
    },
  },
  {
    id: "women-umm-haram",
    title: "Umm Haram bint Milhan (RA) — The First Woman Martyr at Sea",
    description:
      "An Ansari woman whose dream the Prophet ﷺ confirmed: that she would sail with the first Muslim naval expedition — and she did, dying on the shores of Cyprus.",
    category: "HeroicWomen",
    readTime: "6 min",
    sections: {
      intro: p(
        "Umm Haram bint Milhan al-Ansariyyah was the sister of Umm Sulaym and the maternal aunt of Anas ibn Malik. She was married to 'Ubadah ibn al-Samit, one of the great Ansari leaders and one of the twelve naqibs of the Second Pledge of al-'Aqabah.",
        "She was among the women whose home the Prophet ﷺ used to visit and rest in when he passed through her area in Quba. Al-Bukhari records that he would enter her house, sleep, and she would sit beside him picking lice from his blessed head while he slept — an unusually close family relationship she enjoyed because she was a mahram to him through fosterage relations on his maternal side.",
      ),
      life: p(
        "On one such visit, the Prophet ﷺ slept and then woke up smiling. Umm Haram asked: 'What makes you smile, O Messenger of Allah?' He said: 'A people of my ummah were shown to me, riding upon the sea like kings on thrones.'",
        "She said: 'O Messenger of Allah, ask Allah to make me one of them.' He supplicated for her and slept again. He woke smiling a second time and gave the same answer. She asked the same question. He said: 'You are among the first.' (Bukhari, Muslim)",
        "Decades later, in 27 AH (648 CE), in the caliphate of 'Uthman, Mu'awiya was given permission to launch the first Muslim naval expedition. He led the fleet to Cyprus. Umm Haram, by then an old woman, sailed with her husband 'Ubadah ibn al-Samit.",
        "When they landed on Cyprus, a riding mule was brought for her. She mounted it; it threw her; she broke her neck and died on the shore. She was buried there. Her grave on Cyprus, known as the Tomb of Hala Sultan, became a famous site of pilgrimage and remains one of the most revered Islamic shrines in the eastern Mediterranean to this day.",
      ),
      legacy: p(
        "Umm Haram is the first Muslim woman to die in a sea expedition for the cause of Allah. The Prophet's ﷺ prophecy was fulfilled in her with mathematical precision: she sailed with the first naval expedition, and she was 'among the first' martyrs of that frontier.",
        "Her tomb on Cyprus remained, through twelve centuries of Byzantine and Latin and Ottoman rule, a symbol of how far the women of the Sahaba travelled — and where they were willing to be buried — for the sake of this religion.",
      ),
      keyFacts: [
        "Sister of Umm Sulaym; aunt of Anas ibn Malik",
        "Wife of 'Ubadah ibn al-Samit",
        "The Prophet ﷺ prophesied she would sail with the first naval expedition",
        "Sailed with Mu'awiya's expedition to Cyprus, 27 AH",
        "Died and was buried on Cyprus — the Tomb of Hala Sultan",
      ],
      lessons: p(
        "Ask the Prophet ﷺ — through his Sunnah — for the highest stations. She did not ask for safety; she asked to be of those riding the sea like kings.",
        "A pious dream becomes a destination. She held the Prophet's ﷺ words in her heart for decades until she could enact them.",
        "Old age does not exempt you from frontiers. She boarded a wooden ship across the Mediterranean as a grandmother.",
        "Where you die for Allah is where you belong. A Madinan woman lies buried on a Cypriot beach because the call came and she answered.",
      ),
    },
  },
  {
    id: "women-umm-ammarah-yamama",
    title: "Umm 'Umarah at Yamama (RA) — The Old Woman Who Killed Musaylima's Champion",
    description:
      "Years after Uhud, the same Nusaybah bint Ka'b went out under Khalid ibn al-Walid to fight Musaylima the Liar — and lost her hand and her son in a single afternoon.",
    category: "HeroicWomen",
    readTime: "6 min",
    sections: {
      intro: p(
        "After the death of the Prophet ﷺ in 11 AH, the false prophet Musaylima al-Kadhdhab gathered tens of thousands of the Banu Hanifah in Yamama and rebelled against the new Muslim state. Abu Bakr dispatched Khalid ibn al-Walid against him. Umm 'Umarah, already in her sixties and bearing the scars of Uhud, asked Abu Bakr's permission to go.",
        "He granted it. She marched east with the army that would fight the bloodiest battle the Muslims had yet known.",
      ),
      life: p(
        "Her son Habib ibn Zayd had been sent earlier as the Prophet's ﷺ envoy to Musaylima. Musaylima had captured him and demanded he testify that Musaylima was a prophet alongside Muhammad ﷺ. Habib refused. Musaylima cut off a piece of him; asked again; cut another piece; asked again. Habib died of his wounds, limb by limb, refusing to deny the Prophet ﷺ.",
        "When Umm 'Umarah heard, she vowed she would either kill Musaylima herself or die trying.",
        "At Yamama in 12 AH the two armies met in the bloodiest fighting Arabia had seen. Over 1,200 Muslims fell, including some seventy huffaz of the Qur'an. The battle turned in the orchard later called the Garden of Death, where the remaining Hanafis were trapped.",
        "Umm 'Umarah fought beside her surviving son 'Abdullah and lost her hand to a sword stroke. She continued to fight one-handed. She and 'Abdullah pressed toward Musaylima. 'Abdullah is reported to have struck Musaylima alongside Wahshi ibn Harb (the Abyssinian who had killed Hamzah at Uhud and now redeemed his earlier deed by killing the false prophet). Sources differ over which of the three landed the killing blow; what is agreed is that Umm 'Umarah's family was at the centre of the fighting that ended Musaylima.",
        "She returned to Madinah with eleven new wounds added to the thirteen of Uhud, missing a hand, and missing a son. Abu Bakr came to visit her and dressed her wounds himself.",
      ),
      legacy: p(
        "Umm 'Umarah is the only woman in Islamic history known to have fought in pitched battle under both the Prophet ﷺ and the first Caliph, against both Quraysh and the Riddah.",
        "Her family alone — herself, her two husbands, her four children — gave more wounds and more martyrs to the cause than entire tribes. The Prophet's ﷺ supplication, 'O Allah, make them my companions in Paradise,' was answered in this world by lives spent entirely in His service.",
      ),
      keyFacts: [
        "Fought at Uhud (3 AH), Hudaybiyya (6 AH), Khaybar (7 AH), Hunayn (8 AH), and Yamama (12 AH)",
        "Lost her hand at Yamama",
        "Her son Habib was tortured to death by Musaylima for refusing to deny the Prophet ﷺ",
        "Her son 'Abdullah was among those who killed Musaylima",
        "Carried twenty-four battle wounds in her lifetime",
      ],
      lessons: p(
        "Some families are entire armies. Make your household one of them.",
        "Old age is no excuse. She fought in her sixties what younger men could not.",
        "Avenge what the deen has lost, not what your ego has lost. Her vow was for the Prophet's ﷺ envoy, not for personal revenge.",
        "Wounds heal; the cause endures. Twenty-four wounds were the price of a lifetime of nearness.",
      ),
    },
  },
  {
    id: "women-safiyyah-bint-abd-al-muttalib",
    title: "Safiyyah bint 'Abd al-Muttalib (RA) — Aunt of the Prophet, Killer of the Spy",
    description:
      "The paternal aunt of the Prophet ﷺ and full sister of Hamzah, who at Khandaq killed a Jewish spy with a tent pole when no man would defend the women's fort.",
    category: "HeroicWomen",
    readTime: "6 min",
    sections: {
      intro: p(
        "Safiyyah bint 'Abd al-Muttalib was the daughter of 'Abd al-Muttalib, the paternal aunt of the Prophet ﷺ, and the full sister of Hamzah ibn 'Abd al-Muttalib. She was the mother of al-Zubayr ibn al-'Awwam — one of the ten promised Paradise and the Disciple (Hawari) of the Prophet ﷺ.",
        "She was an early convert and migrated to Madinah. Strong-willed, physically powerful, and sharp of tongue — qualities she passed in full to her son al-Zubayr.",
      ),
      life: p(
        "During the Battle of the Trench (Khandaq, 5 AH) the Muslim men were stationed at the trench facing the Confederate armies on the north of Madinah. The women and children were placed in the fortress of Hassan ibn Thabit (the poet) for protection.",
        "Banu Qurayza, the Jewish tribe inside Madinah, had broken their treaty and joined the Confederates. They began sending scouts to assess the women's fort to see if it could be raided from inside the city while the men were pinned at the trench.",
        "Safiyyah saw a Jewish man circling the fortress, examining its weak points. She went to Hassan ibn Thabit and said: 'Get up and kill this man. He is spying on us.' Hassan, a poet rather than a fighter, said: 'By Allah, O daughter of 'Abd al-Muttalib, that is not something I can do.'",
        "Safiyyah took up a tent pole, went down, opened the gate, struck the spy on the head and killed him. She then returned to Hassan and said: 'Go down now and strip him of his weapons; I would have done it myself but he is a man and I am a woman.' Hassan, ashamed, refused even that.",
        "She went down a second time, stripped the body of its weapons, and threw the head over the wall toward the Jewish positions. When Banu Qurayza saw the head they assumed the women's fort was defended by armed men. They sent no further raiding parties. The Madinan women were saved by one woman with a tent pole.",
      ),
      legacy: p(
        "Safiyyah is one of the very few Muslim women in the Sira to have personally killed an enemy combatant in defence of the Muslim community. Her courage at Khandaq complemented her brother Hamzah's at Uhud — the same blood ran in both.",
        "She lived into the caliphate of 'Umar and died in Madinah around 20 AH, aged over seventy. She was buried in al-Baqi'.",
        "Her son al-Zubayr inherited her ferocity and became one of the foremost knights of the Sahaba — and her grandson 'Abdullah ibn al-Zubayr would become the caliph who ruled Makkah for nine years against the Umayyads.",
      ),
      keyFacts: [
        "Paternal aunt of the Prophet ﷺ; full sister of Hamzah",
        "Mother of al-Zubayr ibn al-'Awwam (one of the ten promised Paradise)",
        "Killed a Jewish spy at Khandaq with a tent pole, 5 AH",
        "Grandmother of the Caliph 'Abdullah ibn al-Zubayr",
        "Died in Madinah c. 20 AH, buried in al-Baqi'",
      ],
      lessons: p(
        "When men hesitate, the deen does not wait. Step forward.",
        "Use what is in your hand. A tent pole became a weapon of strategic deception.",
        "Defend the vulnerable before they realise they are in danger. She acted before the spy reported back.",
        "Courage is inherited and cultivated. Her son and grandson built nations on what she demonstrated in one afternoon.",
      ),
    },
  },
  {
    id: "women-shifa-bint-abdullah",
    title: "Al-Shifa' bint 'Abdullah (RA) — The Literate Quraysh Woman 'Umar Made Inspector of the Market",
    description:
      "A Qurashi woman who taught the wives of the Prophet ﷺ to read and write, and whom 'Umar appointed to oversee the market of Madinah — perhaps the first Muslim woman to hold a public administrative post.",
    category: "HeroicWomen",
    readTime: "6 min",
    sections: {
      intro: p(
        "Al-Shifa' bint 'Abdullah ibn 'Abd Shams was of the Banu 'Adi clan of Quraysh — the same clan as 'Umar ibn al-Khattab. Her real name was Layla; al-Shifa' ('the healer') was a nickname she earned from her skill in ruqyah (Qur'anic and prophetic incantation) for the bite of ants and snakes.",
        "She was one of the very few women in pre-Islamic Quraysh who could read and write — a skill exceedingly rare among Arab women of that time, and rare even among the men.",
      ),
      life: p(
        "She accepted Islam early in Makkah and migrated to Madinah. The Prophet ﷺ knew of her literacy and her knowledge of ruqyah. He came to her one day and said: 'Will you not teach Hafsa the ruqyah for ant-bite, just as you taught her writing?' (Abu Dawud)",
        "She taught Hafsa bint 'Umar — the daughter of 'Umar and a wife of the Prophet ﷺ — both how to read and write and how to perform the ruqyah. The Prophet ﷺ used to visit her at her home and would sometimes nap in her house.",
        "When 'Umar became caliph he showed her exceptional respect. He used to consult her, prefer her opinion, and visit her. He gave her a house in the market area of Madinah.",
        "Then he did something unprecedented: he appointed her as muhtasibah — inspector of the market — with authority to oversee weights, measures, and trading practices. This made her arguably the first Muslim woman to hold a public administrative office in Islamic history. Some sources qualify the appointment but the core of it — that 'Umar entrusted her with public market oversight — is firmly attested in al-Qurtubi, Ibn Hajar's Isabah, and Ibn al-Athir's Usd al-Ghabah.",
        "She continued to teach women to write throughout her life. The line of literate women in Madinah — through Hafsa, 'A'isha, and others — passed in part through her hand.",
      ),
      legacy: p(
        "Al-Shifa' is the proof that the early Muslim community recognised, valued, and publicly empowered female literacy and competence. The same Caliph 'Umar who is sometimes caricatured as harsh on women appointed her to a public role — because she was the most competent person available.",
        "She narrated twelve hadiths, was consulted by Companions on ruqyah and on commercial matters, and her line of teaching gave the Mothers of the Believers a literacy that allowed them to become the great hadith-narrators of the next generation.",
        "She died in Madinah around 20 AH and was buried in al-Baqi'.",
      ),
      keyFacts: [
        "One of the few literate Quraysh women of her time",
        "Taught Hafsa bint 'Umar to read and write at the Prophet's ﷺ request",
        "Expert in shar'i ruqyah for snake and ant bites",
        "Appointed by 'Umar as inspector of the market of Madinah",
        "Narrated twelve hadiths; died c. 20 AH",
      ],
      lessons: p(
        "Teach what you know. A single literate woman raised the literacy of an entire generation of Mothers of the Believers.",
        "Competence is the only valid criterion for public trust. 'Umar's appointment was not symbolic — it was meritocratic.",
        "Useful knowledge is dignified knowledge. Ruqyah, writing, market regulation — every skill she had served the ummah.",
        "When the Caliph asks you to teach, teach. When the Caliph asks you to govern, govern.",
      ),
    },
  },
  {
    id: "women-umm-waraqah",
    title: "Umm Waraqah bint 'Abdullah (RA) — The Martyr of Her Own Household",
    description:
      "An Ansari woman who memorised the Qur'an, was given a mu'adhdhin by the Prophet ﷺ to lead her household in prayer, and was murdered by her own slaves in the caliphate of 'Umar.",
    category: "HeroicWomen",
    readTime: "5 min",
    sections: {
      intro: p(
        "Umm Waraqah bint 'Abdullah ibn al-Harith al-Ansariyyah was an Ansari woman of Madinah who had memorised the Qur'an in the Prophet's ﷺ lifetime — one of the few women to do so. The Prophet ﷺ used to call her 'the martyr' (al-Shahidah) even though she had not yet died, in anticipation of how she would die.",
      ),
      life: p(
        "When the expedition of Badr was about to leave, she came to the Prophet ﷺ and asked permission to accompany the army to nurse the wounded and to seek martyrdom. He said: 'Stay in your house — Allah will grant you martyrdom.' From then on she was called 'the martyr'.",
        "Because she had memorised the Qur'an, the Prophet ﷺ commanded that an adhan be called in her house and that she lead her household — including her two slaves (a male and a female), her freed slave, and other women of her household — in prayer. He appointed an old man as her mu'adhdhin. This is one of the central evidences cited by jurists who permit a woman to lead other women (and her own household, in some views) in prayer.",
        "She continued in this manner for years, leading the prayer in her own home, the Qur'an her constant companion. In the caliphate of 'Umar her two slaves — eager for freedom and resentful of her continued life — strangled her with a cloth in the night and fled.",
        "In the morning the household discovered her dead. 'Umar said from the minbar: 'By Allah, the Prophet ﷺ used to say, Let us go and visit the martyr. Now I see what he meant.' He had the slaves pursued, captured, and crucified — they were the first to be crucified in Madinah for their crime.",
      ),
      legacy: p(
        "Umm Waraqah is one of the most important figures in the discussion of women's leadership in prayer, of women as Qur'an memorisers in the Prophet's ﷺ time, and of the breadth of what 'martyrdom' includes in Islam — for she was killed by treachery in her own house and the Prophet ﷺ had named her a martyr decades in advance.",
        "Her hadith is narrated in Abu Dawud, Ahmad, and others. The fiqh built on it is extensive.",
      ),
      keyFacts: [
        "Memorised the Qur'an in the Prophet's ﷺ lifetime",
        "Asked to go to Badr; the Prophet ﷺ promised her martyrdom at home",
        "The Prophet ﷺ appointed a mu'adhdhin for her house and ordered her to lead her household in prayer",
        "Murdered by her two slaves in the caliphate of 'Umar",
        "'Umar had the killers crucified — the first crucifixion in Madinah",
      ],
      lessons: p(
        "Martyrdom is not only on the battlefield. The Prophet ﷺ named a woman in her own house 'the martyr'.",
        "Memorise the Qur'an. It elevated her to a station the Companions came to visit.",
        "Lead prayer in your house — for women, this is a permitted noble service.",
        "Kindness to those in your power is not a guarantee — but injustice from them does not diminish your reward.",
      ),
    },
  },
  {
    id: "women-umm-hakim-bint-al-harith",
    title: "Umm Hakim bint al-Harith (RA) — From Daughter of the Enemy to Killer of Romans at Marj al-Saffar",
    description:
      "A Qurashi woman of Banu Makhzum, daughter of the man killed at Badr, who accepted Islam at the Conquest of Makkah and killed seven Byzantine soldiers with a tent pole at Marj al-Saffar.",
    category: "HeroicWomen",
    readTime: "5 min",
    sections: {
      intro: p(
        "Umm Hakim bint al-Harith ibn Hisham was a Qurashi noblewoman of Banu Makhzum. Her father al-Harith was a leader of Quraysh; her uncle was Abu Jahl, killed at Badr. Her husband 'Ikrimah ibn Abi Jahl was one of the most ferocious enemies of Islam in the early years.",
        "At the Conquest of Makkah in 8 AH her husband fled toward Yemen. She accepted Islam, then went out alone after him and brought him back to the Prophet ﷺ to take Islam — saving the life of one of the men whose blood the Prophet ﷺ had permitted to be shed.",
      ),
      life: p(
        "She and 'Ikrimah lived together as Muslims for less than a year before 'Ikrimah went out on the Syrian fronts and was killed at Yarmouk in 15 AH, his body covered in wounds.",
        "She married Khalid ibn Sa'id ibn al-'As, who was killed in the same campaign at Marj al-Saffar in 14 AH (some sources reverse the order). On her wedding night to Khalid the Roman army attacked. She put on her wedding dress and her armour together, picked up a tent pole — for she had no sword — and entered the fighting beside the men.",
        "She killed seven Byzantine soldiers with that tent pole at the Bridge of Marj al-Saffar. The bridge was thereafter called 'the Bridge of Umm Hakim' in the histories of al-Tabari and Ibn al-Athir.",
        "She married a third time, to Yazid ibn Abi Sufyan, who died in the plague of 'Amwas. She lost three husbands in the cause of Allah within five years.",
      ),
      legacy: p(
        "Umm Hakim is the answer to the claim that the noble Quraysh women of Makhzum were ornamental. The daughter of the chief of Banu Makhzum, the wife of three commanders, killed seven Romans on her wedding day with a tent pole. She bridged Jahiliyyah and Islam in a single life and gave Islam more than most men gave it.",
      ),
      keyFacts: [
        "Daughter of al-Harith ibn Hisham; niece of Abu Jahl",
        "Brought her husband 'Ikrimah ibn Abi Jahl to Islam after the Conquest",
        "Killed seven Byzantine soldiers with a tent pole at Marj al-Saffar",
        "The bridge there was named after her in the chronicles",
        "Lost three husbands — 'Ikrimah, Khalid ibn Sa'id, Yazid ibn Abi Sufyan — all in the cause of Allah",
      ],
      lessons: p(
        "Where you came from does not determine where you go. The niece of Abu Jahl became a slayer of Romans.",
        "Bring your family to Islam, even at risk to yourself. She rode alone after a fugitive husband.",
        "Wedding dress and armour are not opposites in this deen.",
        "A tent pole in the right hand is a sword.",
      ),
    },
  },
  {
    id: "women-sumayyah-bint-khayyat",
    title: "Sumayyah bint Khayyat (RA) — The First Martyr of Islam",
    description:
      "An elderly Abyssinian slave-woman of Banu Makhzum in Makkah who, with her husband Yasir and son 'Ammar, was tortured for refusing to renounce Islam — and was killed by Abu Jahl, becoming the first martyr in Islam.",
    category: "HeroicWomen",
    readTime: "5 min",
    sections: {
      intro: p(
        "Sumayyah bint Khayyat was an Abyssinian slave-woman owned by Abu Hudhayfah ibn al-Mughirah of Banu Makhzum in Makkah. She was married to Yasir ibn 'Amir, a Yemeni who had come to Makkah and entered the protection of Abu Hudhayfah; she bore him 'Ammar ibn Yasir.",
        "She was already an old woman when she accepted Islam — among the very first seven who openly declared their faith in the Prophet ﷺ. The seven were Abu Bakr, the Prophet ﷺ himself, 'Ammar, his mother Sumayyah, Suhayb, Bilal, and al-Miqdad.",
      ),
      life: p(
        "Because she was a slave with no clan to defend her, Quraysh — led by Abu Jahl — felt free to torture her openly to force her to renounce Islam and to use her family as an example to others.",
        "She, Yasir, and 'Ammar were dragged out into the burning desert in the worst heat of the day, stripped of clothing, and tortured day after day. The Prophet ﷺ used to pass by them in their torment, unable to free them, and would say: 'Patience, family of Yasir. Your appointment is Paradise.' (Hakim, Mustadrak)",
        "Abu Jahl personally tortured her. When she refused to deny the Prophet ﷺ even at the last, he came to her with a spear and stabbed her in the lower body — the most degrading wound he could choose, to humiliate her even in death — and killed her. Her husband Yasir died under torture shortly after. 'Ammar survived only because, at his breaking point, he uttered the words of disbelief with his tongue while his heart held fast — and the Qur'an was revealed defending him: 'Except one who is forced while his heart is at peace with faith.' (al-Nahl 106)",
        "Sumayyah thus became the first soul in Islam to die for La ilaha illa Allah. She was perhaps in her sixties or seventies when she was killed.",
      ),
      legacy: p(
        "An old African slave-woman, owned and tortured, who could have spoken a single word and been spared, opened the gate of martyrdom for the entire ummah. Every shahid who followed walked through the door she opened.",
        "The Prophet ﷺ remembered her. After Badr he stood over the body of Abu Jahl in the well of Badr and said: 'This is the Pharaoh of this ummah.' Her son 'Ammar lived to be a senior Companion, fought at Badr, helped build the Prophet's ﷺ Mosque, and was killed at Siffin in 37 AH at over ninety years of age — fulfilling the Prophet's ﷺ prophecy: ''Ammar will be killed by the transgressing party.'",
      ),
      keyFacts: [
        "Abyssinian slave-woman of Banu Makhzum in Makkah",
        "Among the first seven to openly declare Islam",
        "Mother of 'Ammar ibn Yasir",
        "Tortured publicly with her husband and son for years",
        "Killed by Abu Jahl with a spear — the first martyr in Islam",
      ],
      lessons: p(
        "The first to enter a path is rewarded by every soul who follows it.",
        "The least powerful in this world can be the highest in the next.",
        "Abu Jahl's name is cursed; Sumayyah's is honoured fifteen centuries later.",
        "When you cannot rescue the oppressed, at least promise them Paradise — and mean it.",
      ),
    },
  },
  {
    id: "women-khawlah-bint-al-azwar",
    title: "Khawlah bint al-Azwar (RA) — The Veiled Knight of Yarmouk",
    description:
      "A poetess and warrior of Banu Asad who fought alongside Khalid ibn al-Walid in Syria, freed her captured brother in single combat, and led the Muslim women prisoners to defeat their Roman captors with tent poles.",
    category: "HeroicWomen",
    readTime: "6 min",
    sections: {
      intro: p(
        "Khawlah bint al-Azwar was the sister of Dirar ibn al-Azwar, one of the leading Companion-warriors who fought under Khalid ibn al-Walid in the Syrian campaigns. The family was of Banu Asad. She was a noted poetess as well as a warrior — a rare combination in any age.",
      ),
      life: p(
        "When her brother Dirar was wounded and captured by the Byzantines at the Battle of Sahurah (some sources: Ajnadayn) in 13 AH, Khawlah was among the women travelling with the army. The news of his capture reached the camp. She mounted her horse, wrapped a green cloak around her body and a green scarf around her face, took up a spear and a sword, and charged the Byzantine column alone.",
        "Khalid ibn al-Walid saw the masked rider cut down Roman soldier after Roman soldier and assumed it was a Companion he had not yet identified. After the column had been broken and Dirar had been freed, the rider returned to the Muslim ranks. Khalid asked who he was. She removed her face-covering. Khalid was astonished and said: 'O sister of Dirar, by Allah you have shamed the men.'",
        "She fought at Yarmouk in 15 AH. During that battle a section of Muslim women including her was overrun by Roman cavalry and taken captive. The Romans put them in a tent under guard. Khawlah turned to the women and said: 'Do you accept that these uncircumcised dogs should take you as concubines? Where is your honour, where is the courage you used to display before the wives of 'Umar and the Prophet's ﷺ family?'",
        "She told them to take the tent-poles — for they had no weapons — and to form a tight circle, each woman protecting the next. They burst out of the tent. Khawlah herself led the charge. She killed the first guard with his own sword, then a second, then a third. The other women followed. They killed the Roman detachment that had captured them, freed themselves, and rejoined the Muslim line. At least five Roman soldiers fell to Khawlah's hand alone in that single fight.",
        "She continued to fight in the Syrian campaigns. Some sources record her at the siege of Damascus and the campaigns into the Hawran. She was wounded multiple times and lived to old age.",
      ),
      legacy: p(
        "Khawlah bint al-Azwar is remembered in Arabic literary tradition as the Joan of Arc of Islam — though she preceded Joan by eight centuries and survived her wars. Her poetry, fragments of which survive in the literary anthologies, was as sharp as her sword.",
        "She is the standing answer to the claim that the Muslim woman is confined: she rode where Khalid rode, she struck where Khalid struck, and she shamed Khalid's own men into harder fighting.",
      ),
      keyFacts: [
        "Sister of the Companion-warrior Dirar ibn al-Azwar",
        "Freed her captured brother in single combat against a Roman column",
        "Led captured Muslim women to defeat their Byzantine guards with tent poles",
        "Fought at Sahurah (or Ajnadayn), Yarmouk, and the Syrian campaigns",
        "Both a poetess and a warrior — rare in any era",
      ],
      lessons: p(
        "Fight first; ask permission later. She mounted and rode before any council debated her right to.",
        "Captivity is not surrender. As long as a tent pole is within reach, the fight continues.",
        "Cover your face if you must — but do not cover your courage.",
        "Shame the hesitant by your example, not by your tongue.",
      ),
    },
  },
  {
    id: "women-asma-bint-umays",
    title: "Asma' bint 'Umays (RA) — The Migrant of the Two Migrations",
    description:
      "Wife in turn of Ja'far ibn Abi Talib, Abu Bakr al-Siddiq, and 'Ali ibn Abi Talib — the only woman to have been wife to three of the closest men to the Prophet ﷺ, and a migrant to both Abyssinia and Madinah.",
    category: "HeroicWomen",
    readTime: "7 min",
    sections: {
      intro: p(
        "Asma' bint 'Umays al-Khath'amiyyah was a sister of Maymunah bint al-Harith (the Prophet's ﷺ wife) on her mother's side, and one of the very early Muslimahs in Makkah. She married Ja'far ibn Abi Talib, the Prophet's ﷺ cousin and the brother of 'Ali, before the Hijra.",
        "She and Ja'far emigrated to Abyssinia in the second migration. They lived there for over fifteen years under the protection of the Negus, raising three sons — 'Abdullah, Muhammad, and 'Awn — all born in Abyssinian exile.",
      ),
      life: p(
        "She returned with Ja'far to Madinah in 7 AH, the same year the Prophet ﷺ conquered Khaybar. The Prophet ﷺ stood and embraced Ja'far between the eyes and said: 'I do not know which delights me more — the conquest of Khaybar or the coming of Ja'far.'",
        "In 8 AH at the Battle of Mu'tah, Ja'far was killed — both his arms cut off, then his body run through. The Prophet ﷺ came to Asma' carrying the news. She had just kneaded her dough and prepared the children. He took the three boys, kissed them, and wept. She knew. She let out the cry of mourning. The Prophet ﷺ told the women of Madinah to prepare food for the family of Ja'far for three days, saying: 'Today they are too occupied with their grief to think of food.'",
        "Some months later Abu Bakr proposed to her and she accepted. She bore him a son, Muhammad ibn Abi Bakr, on the way to the Farewell Hajj in 10 AH — she gave birth at Dhul Hulayfah and the Prophet ﷺ instructed Abu Bakr that she should still perform 'umrah and hajj.",
        "When Abu Bakr was on his deathbed in 13 AH he asked her to bathe his body when he died — placing the most intimate trust of his last rites in her hands. She did so. After his death she married 'Ali ibn Abi Talib, who had been her brother-in-law through Ja'far.",
        "She bore 'Ali two sons, Yahya and 'Awn. Her son Muhammad ibn Abi Bakr was raised in 'Ali's household and became one of 'Ali's closest companions; 'Ali used to say of him: 'Muhammad is my son from the back of Abu Bakr.'",
        "She was a major narrator of hadith — sixty hadiths from her are recorded in the canonical books, including the foundational hadith on the menstruating woman in ihram and many on family law. She taught 'A'isha and many of the Tabi'in.",
      ),
      legacy: p(
        "Asma' bint 'Umays is the human bridge of the early ummah. She was wife to Ja'far (martyr of Mu'tah), to Abu Bakr (the first Caliph), and to 'Ali (the fourth Caliph). Her sons led men: 'Abdullah ibn Ja'far became the most famously generous man of his generation; Muhammad ibn Abi Bakr became governor of Egypt for 'Ali.",
        "She made the Hijra to Abyssinia and to Madinah — placing her in the small group called 'those of the two migrations'. She lived to see Karbala approach but died before her grandson 'Abdullah ibn Ja'far's children were caught in it. She was buried in Madinah.",
      ),
      keyFacts: [
        "Sister-in-law of the Prophet ﷺ through her sister Maymunah",
        "Wife in turn of Ja'far ibn Abi Talib, Abu Bakr al-Siddiq, and 'Ali ibn Abi Talib",
        "Migrated to both Abyssinia and Madinah",
        "Mother of 'Abdullah ibn Ja'far, Muhammad ibn Abi Bakr, Yahya and 'Awn ibn 'Ali",
        "Bathed the body of Abu Bakr at his request",
        "Narrated 60 hadiths",
      ],
      lessons: p(
        "A long widowhood is not Allah's punishment — it can be His preparation for the next station.",
        "Raise the orphan: the child of one martyr becomes the companion of the next caliph.",
        "Carry knowledge across generations.",
        "The trust of the dying is the highest trust. Abu Bakr gave it to her, not to a man.",
      ),
    },
  },
  {
    id: "women-umm-hani-bint-abi-talib",
    title: "Umm Hani' bint Abi Talib (RA) — The Woman Who Hosted the Isra' and Gave Sanctuary at the Conquest",
    description:
      "The cousin of the Prophet ﷺ, sister of 'Ali, in whose Makkan house the night of al-Isra' wa al-Mi'raj began — and who, at the Conquest, gave sanctuary to two pagan men against her own brother's sword.",
    category: "HeroicWomen",
    readTime: "6 min",
    sections: {
      intro: p(
        "Umm Hani' — her real name was Fakhitah (some say Hind) bint Abi Talib — was the daughter of Abu Talib and the full sister of 'Ali, Ja'far, and 'Aqil. She was therefore the first cousin of the Prophet ﷺ, and the Prophet ﷺ had wanted to marry her in his early manhood, but Abu Talib married her to Hubayrah ibn Abi Wahb of Banu Makhzum.",
      ),
      life: p(
        "On the night of al-Isra' wa al-Mi'raj — most reports place it in her house in Makkah — the Prophet ﷺ had been her overnight guest. She narrated: 'The Messenger of Allah ﷺ was taken on his night journey from my house. He prayed 'Isha with us, then he slept and we slept. At dawn the Messenger of Allah ﷺ woke us up, prayed Subh, and said: O Umm Hani', I have prayed 'Isha with you in this valley as you saw, then I went to Bayt al-Maqdis and prayed there, then I prayed Subh with you now as you see.'",
        "She begged him not to tell Quraysh, knowing they would call him a liar. He said: 'By Allah, I will tell them.' He went out and the people refused to believe him until he described al-Aqsa in detail.",
        "Her husband Hubayrah remained a polytheist. When Makkah was conquered in 8 AH he fled to Najran and never returned to Islam. Their marriage was therefore dissolved, and the Prophet ﷺ proposed to her after the Conquest, but she declined out of consideration for her young children — and the Prophet ﷺ accepted her excuse and praised her for it.",
        "On the morning of the Conquest of Makkah, two of her in-laws from Banu Makhzum — al-Harith ibn Hisham and Zuhayr ibn Abi Umayyah, both of whom had fought against the Muslims — fled to her house seeking protection. 'Ali her brother came in armed, intending to kill them as enemy combatants. She stood in front of them and refused. She went to the Prophet ﷺ at his bath, while his daughter Fatimah held a screen for him, and explained.",
        "He said: 'We have given protection to whomever you have given protection, O Umm Hani'.' This is one of the foundational evidences in Islamic law for amān — the right of any free Muslim, man or woman, to grant binding sanctuary to a non-Muslim.",
        "She then prayed eight rak'ahs of Duha in his presence in his house — and this is the basis of Salat al-Duha as a recommended prayer of eight rak'ahs.",
      ),
      legacy: p(
        "Umm Hani' is the source of two pillars of practice that every Muslim today inherits: the Salat al-Duha as it is commonly described, and the principle of amān granted by a single Muslim including a woman. Her house was the launching point of al-Isra' — perhaps the most blessed dwelling in Makkah after the Prophet's ﷺ own birthplace.",
        "She lived into the caliphate of 'Ali and is buried in al-Baqi'.",
      ),
      keyFacts: [
        "Daughter of Abu Talib; sister of 'Ali, Ja'far, and 'Aqil; cousin of the Prophet ﷺ",
        "The night of al-Isra' began from her house in Makkah",
        "Source of the eight-rak'ah Salat al-Duha",
        "Granted sanctuary to two enemy combatants at the Conquest of Makkah; the Prophet ﷺ ratified it",
        "Declined the Prophet's ﷺ proposal of marriage out of duty to her children",
      ],
      lessons: p(
        "A woman's word of protection is binding in this deen — even on the brother who comes with the sword.",
        "Place your young children before even the highest worldly honour.",
        "Open your house to the righteous; you may be hosting the night that Allah will not let history forget.",
        "Pray the Duha in eight rak'ahs as Umm Hani' did. She is your teacher in this.",
      ),
    },
  },
  {
    id: "women-lubabah-al-kubra",
    title: "Lubabah al-Kubra (Umm al-Fadl) (RA) — The Second Woman in Islam",
    description:
      "Wife of al-'Abbas, mother of six men of distinction including 'Abdullah ibn 'Abbas, sister of Maymunah — and reportedly the second woman after Khadijah to embrace Islam.",
    category: "HeroicWomen",
    readTime: "6 min",
    sections: {
      intro: p(
        "Lubabah bint al-Harith al-Hilaliyyah, known as Umm al-Fadl, was the wife of al-'Abbas ibn 'Abd al-Muttalib, the Prophet's ﷺ paternal uncle. She was the sister of Maymunah bint al-Harith (later wife of the Prophet ﷺ) and of Asma' bint 'Umays through their mother. The Prophet ﷺ used to call the four sisters 'the believing sisters'.",
        "She is reported by Ibn Sa'd, Ibn al-Athir, and al-Dhahabi to have been the second woman to embrace Islam after Khadijah — entering Islam in Makkah while the Prophet's ﷺ uncle al-'Abbas remained outwardly with Quraysh for many years to protect the Prophet ﷺ from inside.",
      ),
      life: p(
        "She bore al-'Abbas six sons — al-Fadl (the eldest, after whom she was nicknamed), 'Abdullah (the great scholar Ibn 'Abbas), 'Ubaydullah, Ma'bad, Qutham, and 'Abd al-Rahman — every one of whom became a person of standing. The Prophet ﷺ said of her: 'The two sisters of faith are Umm al-Fadl and Maymunah.'",
        "She was inside the Ka'bah area when Abu Lahab heard the news of Quraysh's defeat at Badr — Abu Lahab had not gone, having sent a substitute. When the news reached him he sat down crushed. A man named Abu Rafi' (al-'Abbas's freed slave) was sitting nearby and rejoiced quietly at the news. Abu Lahab heard him, leapt at him, and beat him.",
        "Umm al-Fadl picked up a wooden tent peg, struck Abu Lahab on the head, and split his skull open. She said: 'Do you take advantage of him because his master is absent?' Abu Lahab walked away with the wound. It festered. Within a week he died of it — his body was so foul that no one would bury him; his sons hired men to push his corpse into a pit and throw stones over it from a distance.",
        "Umm al-Fadl thus, with a tent peg, killed the Prophet's ﷺ uncle who had cursed him in Surah al-Masad — the same uncle whose hands Allah cursed in 'Tabbat yada Abi Lahabin wa-tabb'.",
        "She narrated 30 hadiths, including the famous report that she gave the Prophet ﷺ a cup of milk while he was on his camel at 'Arafat in his Farewell Hajj — settling for the entire ummah the question of whether the Prophet ﷺ fasted that day (he did not, and the people followed him).",
      ),
      legacy: p(
        "Umm al-Fadl gave the ummah Ibn 'Abbas — the Sea of Knowledge, the Interpreter of the Qur'an, the source of so much tafsir that no commentary on the Qur'an exists without him. Her household was the cradle of the 'Abbasid line that would later rule the Muslim world for five centuries.",
        "She killed Abu Lahab — Allah's named enemy — with a tent peg and the courage of a believing aunt-in-law. She also gave the ummah a sealed answer on the Day of 'Arafat with a cup of milk.",
        "She died in Madinah in the caliphate of 'Uthman, around 30 AH.",
      ),
      keyFacts: [
        "Wife of al-'Abbas; mother of 'Abdullah ibn 'Abbas (Ibn 'Abbas)",
        "Reportedly the second woman to embrace Islam after Khadijah",
        "Sister of Maymunah (Mother of the Believers) and of Asma' bint 'Umays",
        "Struck Abu Lahab with a tent peg; he died of the wound a week later",
        "Settled the question of fasting on 'Arafat with the milk hadith",
        "Narrated 30 hadiths",
      ],
      lessons: p(
        "Be the second when you cannot be the first. To be the second believer in the world is no small thing.",
        "Defend the weak slave when his master is away. Allah will avenge them both through your hand.",
        "A tent peg in the hand of a believing woman is as deadly as a sword in the hand of an unbeliever.",
        "Raise sons who shake centuries. She raised six.",
      ),
    },
  },
  {
    id: "women-umm-mabad",
    title: "Umm Ma'bad al-Khuza'iyyah (RA) — The Tent of the Hijra and the Greatest Description of the Prophet ﷺ",
    description:
      "A Bedouin woman in a tent on the Hijra route who fed the Prophet ﷺ from a barren goat — and gave the world the most beautiful physical description of the Messenger of Allah ﷺ ever recorded.",
    category: "HeroicWomen",
    readTime: "7 min",
    sections: {
      intro: p(
        "Atikah bint Khalid al-Khuza'iyyah, known as Umm Ma'bad, lived in a tent at Qudayd, on the road from Makkah to Madinah. Her custom — and that of her husband Abu Ma'bad — was to sit at the door of the tent with food and water for travellers, in the noble Arab tradition of hospitality. The year was 1 AH; it was the moment of the Hijra.",
      ),
      life: p(
        "The Prophet ﷺ, Abu Bakr, the freedman 'Amir ibn Fuhayrah, and the guide 'Abdullah ibn Urayqit stopped at her tent. They asked to buy meat or dates. She apologised — she had nothing. Drought had emptied the camp. The men of the family were away pasturing what little remained. The only animal in the tent was a barren goat, too weak to be sent out with the herd, so weak that it had no milk at all.",
        "The Prophet ﷺ asked her permission to milk the goat. She said: 'By Allah, if there were any milk in her you would not have asked. She has been barren and weak for a long time.' He smiled, called for the goat, wiped over its udder with his blessed hand, mentioned the name of Allah, and milked it. Milk poured out so abundantly that he filled a large vessel. He gave Umm Ma'bad to drink first, then his Companions, then drank himself last and said: 'The cup-bearer of a people drinks last.' He milked the goat a second time and filled the vessel again, leaving it with her.",
        "Her husband Abu Ma'bad returned that evening driving thin, exhausted goats. He saw the milk and was astonished. He asked: 'Where did this come from? Our goats are barren and there is not a milking goat in the camp!' She said: 'By Allah, no — but a blessed man passed by us today, of such-and-such description...' He said: 'Describe him to me.'",
        "What she said next is one of the treasures of the Sirah — recorded by al-Hakim, al-Tabarani, and al-Bayhaqi: 'I saw a man of conspicuous beauty, of bright face, of well-formed build, neither marred by leanness nor disfigured by stoutness. Handsome and well-proportioned. His eyes had a deep blackness, his eyelashes were long, his voice was deep, his neck was long, his beard was thick. His eyebrows were arched. When silent, dignity covered him; when he spoke, splendour rose from him. He was the most beautiful and the most striking of men from a distance, and the sweetest from up close. His speech was clear, decisive, neither too little nor too much, as if his words were beads of pearl falling one after another. Of medium height — the eye neither despised him for shortness nor turned from him for tallness. He had companions who surrounded him; when he spoke they listened, when he commanded they hastened, served and attended, never frowning nor refuting.'",
        "Abu Ma'bad said: 'By Allah, this is the man of Quraysh whose news has reached us. I had wanted to follow him; if I find a way, I shall.' Both of them embraced Islam and later joined the Prophet ﷺ in Madinah. Umm Ma'bad was a Sahabiyyah; her description of him became one of the most quoted descriptions of the Prophet ﷺ in all of Islamic literature.",
      ),
      legacy: p(
        "Umm Ma'bad gave the ummah two priceless gifts. The first is the miracle of the barren goat — proof on the Hijra road that the Prophet ﷺ was sustained by Allah even where there was no sustenance. The second is the description: every later artist, every later writer, every Muslim who tried to imagine the face of the Messenger ﷺ has drawn from her words.",
        "She lived into Islam and is counted among the Sahabiyyat. The exact date of her death is not preserved, but her legacy is read every Mawlid season and every Sirah class on earth.",
      ),
      keyFacts: [
        "Bedouin woman of Khuza'a at Qudayd on the Hijra route",
        "Hosted the Prophet ﷺ, Abu Bakr, 'Amir ibn Fuhayrah, and Ibn Urayqit",
        "The Prophet ﷺ milked her barren goat by miracle",
        "Gave the most famous physical description of the Prophet ﷺ ever recorded",
        "She and her husband Abu Ma'bad embraced Islam and joined him in Madinah",
      ],
      lessons: p(
        "Sit at the door of your tent with whatever you have. Allah may send you the Messenger ﷺ.",
        "When you have nothing, offer it anyway. Barakah follows honesty in poverty.",
        "Watch carefully and remember precisely. Your description may feed the imagination of the ummah for fifteen centuries.",
        "The cup-bearer of a people drinks last.",
      ),
    },
  },
  {
    id: "women-fatimah-bint-al-khattab",
    title: "Fatimah bint al-Khattab (RA) — The Sister Who Brought 'Umar to Islam",
    description:
      "Her brother burst into her house with a sword to kill the new Muslims — and left it carrying the parchment of Surah Ta-Ha and a kalimah on his lips.",
    category: "HeroicWomen",
    readTime: "6 min",
    sections: {
      intro: p(
        "Fatimah bint al-Khattab al-'Adawiyyah was the younger sister of 'Umar ibn al-Khattab. She and her husband Sa'id ibn Zayd — one of the ten promised Paradise — had embraced Islam in the early days of the Makkan call, while 'Umar was still its most violent opponent.",
        "She kept her Islam secret because she knew her brother. Khabbab ibn al-Aratt would come to her house quietly to teach her and her husband the Qur'an from a parchment of Surah Ta-Ha.",
      ),
      life: p(
        "One day in the sixth year of prophethood, 'Umar set out from his house with his sword drawn, intending to kill the Prophet ﷺ once and for all. On the way Nu'aym ibn 'Abdullah met him and said: 'O 'Umar, will you not first set right your own household? Your sister and her husband have followed Muhammad.' 'Umar turned in fury and went to her door.",
        "Inside, Khabbab was teaching them Surah Ta-Ha. They heard 'Umar's voice and Khabbab hid; the parchment was hidden under Fatimah's thigh. 'Umar burst in and demanded to know what they had been reading. They denied it. He struck Sa'id, then struck Fatimah across the face with such force that her face bled. The blood ran onto her dress.",
        "Seeing his sister bleeding for what she believed in, something broke in him. His tone changed. 'Show me what you were reading.' She said: 'You are impure in your shirk. None touches it but the pure.' He went and washed.",
        "He read: 'Ta-Ha. We have not sent down the Qur'an upon you to cause you distress…' By the time he reached: 'Indeed I am Allah; there is no god but Me, so worship Me and establish prayer for My remembrance,' he said: 'Take me to Muhammad.' He went straight to Dar al-Arqam, knocked on the door with his sword still in his hand, and embraced Islam in front of the Prophet ﷺ.",
        "Fatimah lived a long life in Madinah. She raised her sons and daughters with Sa'id, narrated hadith, and saw her brother become the second Khalifah and the conqueror of two empires. The blood on her face had been the seed of all of it.",
      ),
      legacy: p(
        "Fatimah bint al-Khattab is the woman whose patience under a slap from her own brother bought the Ummah 'Umar ibn al-Khattab. The Prophet ﷺ had supplicated: 'O Allah, strengthen Islam with one of the two 'Umars — 'Umar ibn al-Khattab or 'Amr ibn Hisham (Abu Jahl).' Fatimah's blood was the answer.",
        "She is the model of the believing relative who keeps the deen alive inside a hostile household, waiting patiently for Allah to open the heart of the one who hates her for it.",
      ),
      keyFacts: [
        "Sister of 'Umar ibn al-Khattab; wife of Sa'id ibn Zayd (one of the ten promised Paradise)",
        "Embraced Islam years before 'Umar, in secret",
        "Was struck by 'Umar; her bleeding face softened him",
        "Refused to let him touch the Qur'an parchment until he washed",
        "Her brother went directly from her house to embrace Islam at Dar al-Arqam",
        "Lived to see 'Umar conquer Persia and Sham",
      ],
      lessons: p(
        "Bleed for the truth before you preach it. 'Umar saw blood, not a sermon, and that is what moved him.",
        "Give the Qur'an its dignity. She refused her brother's hand on it until he was pure — and that demand was itself da'wah.",
        "Be patient with the harshest member of your family. The one most violent against Islam may yet become its sword.",
        "The believer at home is a key. Many a tyrant has been turned by the silent iman of a sister, a wife, a mother in his own house.",
      ),
    },
  },
  {
    id: "women-umm-kulthum-bint-uqbah",
    title: "Umm Kulthum bint 'Uqbah (RA) — The Woman Who Crossed the Desert Alone",
    description:
      "The first Qurashi woman to make hijrah from Makkah on her own — and the reason Allah revealed the verse forbidding the return of believing women to the disbelievers.",
    category: "HeroicWomen",
    readTime: "6 min",
    sections: {
      intro: p(
        "Umm Kulthum bint 'Uqbah ibn Abi Mu'ayt was a young Qurashi woman of Banu Umayyah. Her father 'Uqbah was one of the most vicious enemies of the Prophet ﷺ, the man who threw the camel's entrails on his back as he prayed and was later executed after Badr.",
        "She was the half-sister, by mother, of 'Uthman ibn 'Affan. Despite her father's hostility she had become Muslim secretly in Makkah and longed to migrate.",
      ),
      life: p(
        "After the Treaty of Hudaybiyah in 6 AH, one of the conditions was that any Makkan who came to Madinah would be returned. The Companions assumed this applied to women as well as men.",
        "Umm Kulthum slipped out of Makkah on her own — a young woman crossing the open desert without escort, family, or caravan, with nothing but her trust in Allah and her direction toward Madinah. She reached the city alive.",
        "Her two brothers, al-Walid and 'Umarah, came after her demanding her return under the treaty. She begged the Prophet ﷺ not to send her back. Allah then revealed: 'O you who believe, when believing women come to you as emigrants, examine them. Allah is most knowing as to their faith. And if you know them to be believers, then do not return them to the disbelievers… (al-Mumtahanah 60:10).' The Prophet ﷺ refused to hand her over.",
        "She married Zayd ibn Harithah, then after his martyrdom Zubayr ibn al-'Awwam, then 'Abd al-Rahman ibn 'Awf, then 'Amr ibn al-'As — four of the most prominent Companions in succession. She narrated hadith and lived through 'Uthman's caliphate.",
      ),
      legacy: p(
        "Umm Kulthum is the woman whose lone journey caused a verse of the Qur'an to be revealed in her defence. Her hijrah established as a permanent ruling that no believing woman who flees to the Muslims for her faith is to be returned.",
        "She is the proof that a single sincere woman walking toward Allah can change the legal landscape of the Ummah.",
      ),
      keyFacts: [
        "First Qurashi woman to migrate to Madinah on her own after Hudaybiyah",
        "Half-sister (by mother) of 'Uthman ibn 'Affan",
        "Daughter of 'Uqbah ibn Abi Mu'ayt, an arch-enemy of the Prophet ﷺ",
        "Cause of revelation of Qur'an 60:10 protecting migrating believing women",
        "Married Zayd, then al-Zubayr, then 'Abd al-Rahman ibn 'Awf, then 'Amr ibn al-'As",
      ],
      lessons: p(
        "Do not let your father's record decide your faith. She came from one of the worst houses in Quraysh and walked alone toward the Prophet ﷺ.",
        "A woman's hijrah can be a legal precedent. Her courage protected every fleeing sister after her.",
        "Walk toward Allah even if no one walks with you. The desert was empty; her destination was not.",
      ),
    },
  },
  {
    id: "women-umm-atiyyah",
    title: "Umm 'Atiyyah al-Ansariyyah (RA) — The Washer of the Prophet's Daughter",
    description:
      "An Ansari woman who fought in seven expeditions, washed the body of the Prophet's own daughter Zaynab, and transmitted the entire fiqh of women's burial to the Ummah.",
    category: "HeroicWomen",
    readTime: "6 min",
    sections: {
      intro: p(
        "Nusaybah bint al-Harith — known as Umm 'Atiyyah al-Ansariyyah — was a woman of the Ansar who embraced Islam early and lived a long, full life of service to the Prophet ﷺ and his household.",
        "She is a primary source in the Sunnah for two distinct fields: the participation of women in jihad, and the rulings of ghusl al-mayyit (washing the dead) for women.",
      ),
      life: p(
        "She narrated: 'I went out with the Messenger of Allah ﷺ on seven expeditions. I would stay in their tents, prepare their food, treat the wounded, and look after the sick.' (Muslim) Among these expeditions were Khaybar and Hunayn.",
        "When the Prophet's daughter Zaynab (RA) died in 8 AH, the Prophet ﷺ entered the women and gave Umm 'Atiyyah and a small group the duty of washing her body. He instructed: 'Wash her three times, or five, or more if you see fit, with water and lote-leaf. Make the last washing with camphor — or a touch of camphor. When you have finished, inform me.' When they finished, he handed them his own waist-cloth and said: 'Wrap her in this innermost.' (Bukhari, Muslim)",
        "From this single episode the entire fiqh of washing a deceased woman is derived: odd numbers, sidr, camphor in the last wash, the tying of the hair into three braids behind her, beginning with the right side and the parts of wudu — all of it on Umm 'Atiyyah's authority.",
        "She also narrated the hadith commanding women — including young girls and even those in their menses — to come out for the 'Eid prayer: 'We were ordered to bring out the unmarried girls and the menstruating women on the two 'Eids, that they may witness the gathering of the Muslims and the supplication, while the menstruating women remain apart from the prayer-place.' (Bukhari, Muslim)",
        "She lived a long life, settled in Basra in her later years, and taught both men and women.",
      ),
      legacy: p(
        "Umm 'Atiyyah is one of the major women narrators of the fiqh of janazah and the participation of women in 'Eid and in expeditions. Her hadith are foundational in every madhhab on these chapters.",
        "She is the proof that the women of the Sahaba were not bystanders to the Sunnah but its primary transmitters in the most intimate matters of life and death.",
      ),
      keyFacts: [
        "Of the Ansar of Madinah",
        "Accompanied the Prophet ﷺ on seven expeditions",
        "Washed the body of Zaynab bint Muhammad (RA), the Prophet's daughter",
        "Primary narrator for the fiqh of washing a female corpse",
        "Narrator of the hadith commanding women out for the two 'Eids",
        "Settled in Basra in later life and taught the Tabi'in",
      ],
      lessons: p(
        "Some sisters carry whole chapters of fiqh. Honour the women narrators of the Sunnah.",
        "Serve the Prophet's household in life and in death. Her hands prepared his daughter for burial.",
        "Bring your daughters to the 'Eid gathering. The Sunnah is for them too.",
      ),
    },
  },
  {
    id: "women-umm-sharik",
    title: "Umm Sharik al-Dawsiyyah (RA) — The Woman Who Spread Islam Through the Women of Makkah",
    description:
      "A Qurashi woman of Daws who used her access to other women's homes to call them to Islam — until her own clan tortured her in the desert sun.",
    category: "HeroicWomen",
    readTime: "5 min",
    sections: {
      intro: p(
        "Ghaziyyah bint Jabir, known as Umm Sharik, was of the tribe of Daws (the same tribe as Abu Hurayrah). She was married into Quraysh and lived in Makkah, which gave her unusual social access to the women of the city.",
      ),
      life: p(
        "When she embraced Islam she did not hide it from the Makkan women. She moved from house to house quietly calling them to the new religion, and a number of women accepted Islam through her — slipping into the community of believers without their husbands knowing.",
        "When her clan discovered what she was doing they seized her, tied her up, and took her out into the desert sun. They withheld water from her for three days in the height of summer, hoping to force her to renounce Islam. She narrated: 'I would have been finished, but every night I would feel a cool bucket placed between my hands. I would drink, and it would be lifted away. They came in the morning and said: Who has given you food and drink? I said: He who provides for you all without account. Allah's hand was upon me.' Eventually they realised they could not break her and let her go.",
        "She made hijrah to Madinah. Some narrations report that she offered herself in marriage to the Prophet ﷺ, and the verse 'a believing woman who offers herself to the Prophet' (al-Ahzab 33:50) was revealed in connection with such cases. The Prophet ﷺ did not consummate the marriage but gave her the honour of being one of those who offered herself for his sake.",
        "She was generous, kept the doors of her house open to guests, and spent on travellers and the poor.",
      ),
      legacy: p(
        "Umm Sharik is the model of the believing woman who uses her natural social access — to other women's homes, to women's gatherings — as a quiet field of da'wah.",
        "Her three days in the desert sun, sustained by an unseen bucket, are remembered as one of the early karamat granted to a woman tortured for the deen.",
      ),
      keyFacts: [
        "Of Daws by birth, married into Quraysh",
        "Brought a number of Makkan women to Islam through quiet visits",
        "Tortured for three days in the desert sun without water",
        "Reported to have been miraculously sustained by hidden water",
        "Among those who offered themselves in marriage to the Prophet ﷺ",
      ],
      lessons: p(
        "Use the access Allah gives you. Doors closed to men are open to women — go through them with the deen.",
        "The torture cannot break the one Allah is feeding in secret. Trust the unseen bucket.",
        "Quiet da'wah inside homes converts more than loud speeches in the street.",
      ),
    },
  },
  {
    id: "women-umm-ruman",
    title: "Umm Ruman (RA) — Mother of 'A'isha and the Siddiq's Wife",
    description:
      "The Kinani woman who married Abu Bakr, raised 'A'isha and 'Abd al-Rahman, and of whom the Prophet ﷺ said: 'Whoever wishes to look at a woman of the people of Paradise, let him look at Umm Ruman.'",
    category: "HeroicWomen",
    readTime: "5 min",
    sections: {
      intro: p(
        "Zaynab bint 'Amir ibn 'Uwaymir, known as Umm Ruman, was a woman of the Banu Kinanah of Sarat. After the death of her first husband 'Abdullah ibn al-Harith, she came to Makkah, where Abu Bakr al-Siddiq married her.",
        "From this marriage came two of the most beloved figures of early Islam: 'Abd al-Rahman ibn Abi Bakr and 'A'isha bint Abi Bakr, the Mother of the Believers.",
      ),
      life: p(
        "She embraced Islam in the very earliest days of the Makkan call, alongside her husband Abu Bakr — among the first handful of human beings ever to accept the Prophet ﷺ. She bore the boycott in the valley of Abu Talib, the persecution, and the long years of waiting in Makkah while her husband emptied his wealth in the cause.",
        "She made hijrah to Madinah after the Prophet ﷺ, and it was in her household that the most delicate moment in 'A'isha's life unfolded. When the slander of the Hypocrites (the ifk) was spread against 'A'isha after the expedition of Banu al-Mustaliq, 'A'isha came home weeping. She did not know yet what was being said. She asked her mother. Umm Ruman tried to soften it: 'O my daughter, take it easy on yourself. By Allah, rarely is there a beautiful woman beloved to her husband who has co-wives, except that they invent things against her.'",
        "Then came the verses of Surah al-Nur clearing 'A'isha entirely. Umm Ruman lived to see her daughter publicly vindicated by Allah from above the seven heavens.",
        "She died in Madinah during the Prophet's lifetime, around 6 AH. The Prophet ﷺ descended into her grave himself to lay her in it, and he said: 'O Allah, what You have done for Umm Ruman is not hidden from You — what she bore in You and in Your Messenger.' He then said: 'Whoever would like to look at a woman of the people of Paradise, let him look at Umm Ruman.'",
      ),
      legacy: p(
        "Umm Ruman is remembered as a woman of Paradise by the testimony of the Prophet ﷺ himself. She raised the most knowledgeable woman in the history of the Ummah, and stood by the most truthful man in the history of the Ummah, in poverty and in exile, without complaint.",
        "She is the mother who, when the world said the worst it could about her daughter, advised her with calm and waited for Allah's verdict.",
      ),
      keyFacts: [
        "Of Banu Kinanah; second wife of Abu Bakr al-Siddiq",
        "Mother of 'A'isha (RA) and 'Abd al-Rahman ibn Abi Bakr (RA)",
        "Among the very first to embrace Islam",
        "Made hijrah to Madinah",
        "Counselled 'A'isha calmly during the slander (ifk)",
        "Died c. 6 AH; the Prophet ﷺ entered her grave himself",
        "Testified by the Prophet ﷺ as a woman of Paradise",
      ],
      lessons: p(
        "Bear with a husband who gives everything to Allah. Abu Bakr emptied his wealth; she did not complain.",
        "When your child is publicly attacked, advise calmly. Do not add panic to her grief. Wait for Allah.",
        "Aim for the testimony of the Prophet ﷺ. She received it because she lived a quiet life of patience under the Siddiq's roof.",
      ),
    },
  },
  {
    id: "women-umm-mihjan",
    title: "Umm Mihjan (RA) — The Black Woman Who Swept the Masjid",
    description:
      "A poor woman whose only service was to clean the Prophet's masjid — and when she died, the Prophet ﷺ asked for her grave so that he could pray over her himself.",
    category: "HeroicWomen",
    readTime: "5 min",
    sections: {
      intro: p(
        "Umm Mihjan — also reported as a black woman whose name was not even fully recorded by every chronicler — was a poor Sahabiyyah of Madinah whose service was the simplest possible: she swept the floor of the Masjid of the Prophet ﷺ.",
        "She had no wealth, no lineage, no battles, no narrations. She had a broom and a love for the house of Allah.",
      ),
      life: p(
        "She would come quietly to the masjid and sweep it, day after day, and pick up whatever debris had fallen. The Prophet ﷺ noticed her, and her absence noticed her more.",
        "She died, and the Companions, knowing how small a person she was in the eyes of the world, did not bother to inform the Prophet ﷺ. They prayed over her at night and buried her quietly.",
        "The next day the Prophet ﷺ asked: 'What happened to that woman who used to sweep the masjid? I have not seen her.' They said: 'O Messenger of Allah, she died in the night, and we did not want to disturb you.' He said: 'Why did you not inform me?' It was as if they had made light of her affair. He said: 'Show me her grave.' They led him to it. He stood at her grave and prayed the funeral prayer over her, and then said: 'These graves are full of darkness for their inhabitants, and Allah illuminates them for them by my prayer over them.' (Bukhari, Muslim)",
      ),
      legacy: p(
        "Umm Mihjan is the woman whose broom in the masjid earned her the funeral prayer of the Messenger of Allah ﷺ at her own graveside. She is the proof that the smallest service done with love for Allah's house outweighs the loudest service done for show.",
        "Her story is one of the most repeated in books of zuhd, raqa'iq and the rights of the masjid — taught to every child who learns that no act of service is too small for Allah.",
      ),
      keyFacts: [
        "A poor black Sahabiyyah of Madinah",
        "Her only known service: sweeping the Prophet's masjid",
        "Died quietly; Companions buried her without informing the Prophet ﷺ",
        "The Prophet ﷺ went to her grave and prayed janazah over her",
        "Subject of the famous hadith on illuminating graves through the funeral prayer",
      ],
      lessons: p(
        "Pick up the trash in the masjid. The smallest hand-broom can earn the largest prayer.",
        "Do not measure people by what the world sees. The Prophet ﷺ noticed the sweeper; we should too.",
        "Aim for invisible service. The Companions did not even think to mention her — and the Prophet ﷺ went to her grave anyway.",
      ),
    },
  },
  {
    id: "women-umm-kulthum-bint-ali",
    title: "Umm Kulthum bint 'Ali (RA) — Granddaughter of the Prophet ﷺ, Wife of 'Umar",
    description:
      "The daughter of 'Ali and Fatimah whom 'Umar al-Khattab asked for in marriage to attach himself to the Prophet's household — and who lived to bury her brothers and her son.",
    category: "HeroicWomen",
    readTime: "6 min",
    sections: {
      intro: p(
        "Umm Kulthum bint 'Ali ibn Abi Talib was the daughter of 'Ali and Fatimah al-Zahra (RA), the granddaughter of the Prophet ﷺ, and the younger sister of al-Hasan and al-Husayn.",
        "She was born in Madinah a few years before the Prophet's death and was raised in the most blessed household of the Ummah.",
      ),
      life: p(
        "When she came of age, 'Umar ibn al-Khattab — then Khalifah — sent to 'Ali asking for her hand. 'Ali initially proposed a younger daughter; 'Umar insisted on Umm Kulthum, saying: 'I heard the Messenger of Allah ﷺ say: Every lineage and relation will be cut off on the Day of Resurrection except my lineage and my relation. I love that there be between me and the Messenger of Allah ﷺ both lineage and relation.' (Reported in many sources including al-Hakim and al-Bayhaqi.)",
        "'Ali agreed and gave her in marriage to 'Umar. From them came Zayd ibn 'Umar and Ruqayyah bint 'Umar.",
        "After 'Umar's assassination in 23 AH she returned to her family. She was later married to 'Awn ibn Ja'far, then to his brother Muhammad ibn Ja'far, then to 'Abdullah ibn Ja'far — three sons of Ja'far ibn Abi Talib in succession after the death of each.",
        "She lived through the murder of her brother al-Husayn at Karbala in 61 AH. Her own son Zayd ibn 'Umar — the son she had with the Khalifah 'Umar — was killed shortly afterwards in a tribal clash, and she died of grief on the same day, in the same hour. They were buried together. She was around fifty.",
      ),
      legacy: p(
        "Umm Kulthum bint 'Ali is the bridge between the household of the Prophet ﷺ and the household of 'Umar — a marriage that, in classical Sunni scholarship, is itself a refutation of the later claim of unbridgeable enmity between 'Umar and the family of 'Ali.",
        "She is the Hashimi princess who bore the title 'Mother of Zayd ibn 'Umar', and who, after a lifetime of loss, was buried beside her son on the day they both died.",
      ),
      keyFacts: [
        "Daughter of 'Ali ibn Abi Talib and Fatimah al-Zahra (RA)",
        "Granddaughter of the Prophet ﷺ; sister of al-Hasan and al-Husayn",
        "Married to 'Umar ibn al-Khattab; bore him Zayd and Ruqayyah",
        "Later married three sons of Ja'far ibn Abi Talib in succession",
        "Lived to see Karbala; died on the same day as her son Zayd",
      ],
      lessons: p(
        "Honour the Prophet's lineage, and honour what Islam joined together. The marriage of 'Umar and Umm Kulthum is itself a Sunni heritage.",
        "A long life is a long parade of funerals. Build your sabr now while you still have the chance.",
        "Marry to be near the Prophet ﷺ in the akhirah. 'Umar said it openly; we should pray for it quietly.",
      ),
    },
  },
  {
    id: "women-umm-hisham-bint-harithah",
    title: "Umm Hisham bint Harithah (RA) — She Who Memorised Surah Qaf from the Minbar",
    description:
      "The Ansariyyah whose oven shared smoke with the Prophet's household for two years, and who learned Surah Qaf only by hearing him recite it every Jumu'ah.",
    category: "HeroicWomen",
    readTime: "4 min",
    sections: {
      intro: p(
        "Umm Hisham bint Harithah ibn al-Nu'man al-Ansariyyah was a woman of the Ansar of Madinah, sister of the Companion Harithah ibn al-Nu'man, in whose house the Prophet ﷺ frequently visited and prayed.",
      ),
      life: p(
        "Her family lived close to the Masjid of the Prophet ﷺ — so close that, as she narrated, 'Our oven and the Messenger of Allah's oven were one for two years or so.' (Muslim)",
        "She was a frequent attendant at the Friday khutbah. She narrated: 'I did not memorise Surah Qaf — By the glorious Qur'an — except from the tongue of the Messenger of Allah ﷺ. He used to recite it every Jumu'ah on the minbar when he addressed the people.' (Muslim, Abu Dawud, al-Nasa'i, and others.)",
        "From this single narration the Sunnah of reciting Surah Qaf in the Friday khutbah is preserved, and the practice of women attending the khutbah and learning Qur'an from it is established.",
        "She lived a quiet life of worship in Madinah and transmitted her hadiths to the early Tabi'in.",
      ),
      legacy: p(
        "Umm Hisham is the woman who preserved a Sunnah of the Prophet's Friday sermon — a Sunnah that no man's report alone established as fully as hers. Her hadith is in Sahih Muslim and is the foundation of the chapter on what is recited from the minbar.",
        "She is the proof that women in the back rows of the masjid are not absent from the transmission of the deen — they are sometimes its sole preservers.",
      ),
      keyFacts: [
        "Of the Ansar; sister of Harithah ibn al-Nu'man (RA)",
        "Lived next door to the Prophet's household",
        "Memorised Surah Qaf solely by hearing the Friday khutbah",
        "Sole narrator of the hadith that the Prophet ﷺ used to recite Qaf on the minbar",
        "Hadith recorded in Sahih Muslim",
      ],
      lessons: p(
        "Attend the Friday khutbah ready to learn. A surah can enter your heart between two adhans.",
        "Sit close to the people of knowledge. Her oven shared smoke with the Prophet's; her chest carried his Qur'an.",
        "A woman's narration can carry an entire Sunnah. Honour the female chains of the deen.",
      ),
    },
  },
  {
    id: "women-umm-waraqah-bint-abdullah-al-ansariyyah",
    title: "Umm Waraqah bint 'Abdullah (RA) — The Imam of Her Own Household",
    description:
      "An Ansari woman who memorised the Qur'an in the lifetime of the Prophet ﷺ and was appointed by him as imam of her household, the first woman in Islam given that station.",
    category: "HeroicWomen",
    readTime: "4 min",
    sections: {
      intro: p(
        "Umm Waraqah bint 'Abdullah ibn al-Harith al-Ansariyyah was a woman of the Ansar of Madinah. She was one of the small number of Companions — male or female — who had memorised the entire Qur'an in the lifetime of the Prophet ﷺ.",
      ),
      life: p(
        "When the expedition of Badr was about to march, Umm Waraqah came to the Prophet ﷺ and said: 'O Messenger of Allah, give me permission to go out with you on this expedition. I will tend to your wounded and nurse your sick. Perhaps Allah will grant me martyrdom.' He said: 'Stay in your house, for Allah will grant you martyrdom.' From that day she was called al-Shahidah — 'the Martyr.'",
        "Because of her memorisation of the Qur'an, the Prophet ﷺ appointed her to lead the people of her household — including a male mu'adhdhin — in prayer in her own home. She had a male caller to prayer who would call the adhan, and she would lead the household. (Abu Dawud, Ahmad)",
        "She had freed two of her slaves on the condition of mudabbar — that they would be free upon her death. Years later, in the caliphate of 'Umar ibn al-Khattab (RA), those two became impatient for their freedom. They strangled her in her own bed at night and fled.",
        "When her body was discovered, 'Umar (RA) stood in Madinah and said: 'By Allah, the Messenger of Allah ﷺ spoke the truth. He used to say: Come, let us visit the martyr.' He hunted down the two slaves and crucified them — the first crucifixion in Madinah after the Prophet ﷺ.",
      ),
      legacy: p(
        "Umm Waraqah is the proof from the lifetime of the Prophet ﷺ that a woman of knowledge can lead the prayer of her own household — a position recorded in the books of Abu Dawud, Ahmad, and Ibn Khuzaymah, and discussed by every major school of fiqh.",
        "She is also the proof that martyrdom is not only on the battlefield. The Prophet ﷺ called her al-Shahidah while she lived, and she died, decades later, exactly as he had foretold.",
      ),
      keyFacts: [
        "Ansariyyah; one of the few female huffaz of the Qur'an in the Prophet's lifetime",
        "Called al-Shahidah ('the Martyr') by the Prophet ﷺ before her death",
        "Appointed by the Prophet ﷺ to lead the prayer of her household",
        "Killed by two of her slaves in the caliphate of 'Umar (RA), as foretold",
        "Hadith of her imamate recorded by Abu Dawud and Ahmad",
      ],
      lessons: p(
        "Memorise the Book of Allah. It changes the station Allah gives you, in this life and the next.",
        "Ambition for martyrdom is not foolishness — it is faith. Allah answers the sincere request even from a quiet bedroom.",
        "Knowledge confers leadership. Where the Prophet ﷺ placed knowledge, he placed authority.",
      ),
    },
  },
  {
    id: "women-umm-sulaym-bint-milhan-second",
    title: "Umm Haram bint Milhan (RA) — The First Martyr of the Sea",
    description:
      "An Ansari woman, aunt of Anas ibn Malik, whom the Prophet ﷺ foretold would sail with the first naval expedition of Islam — and she did, dying as a martyr at sea.",
    category: "HeroicWomen",
    readTime: "4 min",
    sections: {
      intro: p(
        "Umm Haram bint Milhan al-Ansariyyah was a woman of Banu Najjar, sister of Umm Sulaym, aunt of Anas ibn Malik (RA), and wife of 'Ubadah ibn al-Samit (RA), one of the great Companions and a participant at the Pledges of al-'Aqabah.",
        "She was a mahram of the Prophet ﷺ through breastfeeding ties, which is why he visited her house in Quba' and rested there.",
      ),
      life: p(
        "Anas ibn Malik narrated: 'The Messenger of Allah ﷺ entered upon Umm Haram bint Milhan, and she fed him. He slept, then woke up smiling. She said: What makes you smile, O Messenger of Allah? He said: People of my ummah were shown to me, riding upon this sea like kings upon thrones. She said: O Messenger of Allah, ask Allah to make me one of them. He supplicated for her, then slept again. He woke smiling and said the same thing. She asked the same question. He said: You will be among the first.' (Bukhari, Muslim)",
        "Decades passed. In the caliphate of 'Uthman ibn 'Affan (RA), in 27 AH, Mu'awiyah — then governor of Sham — was given permission to launch the first Muslim naval expedition, against Cyprus. Umm Haram, by now an old woman, sailed with her husband 'Ubadah ibn al-Samit on that fleet. She had not forgotten the Prophet's promise.",
        "The Muslims landed on Cyprus and conquered the island. As Umm Haram dismounted from her riding animal after the campaign, the animal threw her. Her neck broke. She died there, on the soil of Cyprus, exactly as the Prophet ﷺ had foretold — among the first of his ummah to ride upon the sea like kings.",
      ),
      legacy: p(
        "Her grave is in Larnaca, Cyprus, to this day — known as the Tomb of Hala Sultan and one of the most visited Muslim sites in the eastern Mediterranean.",
        "Her hadith is one of the foundational evidences for naval jihad in Islamic law and one of the clearest miracles of the Prophet's foreknowledge: a promise made in a small Ansari house in Quba' in the 1st year of the Hijrah, fulfilled on a Mediterranean island a quarter of a century later.",
      ),
      keyFacts: [
        "Ansariyyah of Banu Najjar; aunt of Anas ibn Malik (RA)",
        "Wife of 'Ubadah ibn al-Samit (RA)",
        "Foretold by the Prophet ﷺ to be among the first to sail in Allah's path",
        "Sailed with the first Muslim naval expedition (Cyprus, 27 AH)",
        "Died on Cyprus; her tomb stands there to this day",
      ],
      lessons: p(
        "Ask Allah for great things. The Prophet ﷺ never refused a sincere request for martyrdom.",
        "A promise of Allah's Messenger ﷺ is a debt that time always pays.",
        "Old age is not a barrier to jihad, hijrah, or sea-travel for the sake of Allah.",
      ),
    },
  },
  {
    id: "women-arwa-bint-abd-al-muttalib",
    title: "Arwa bint 'Abd al-Muttalib (RA) — The Aunt Who Defended the Prophet ﷺ",
    description:
      "Paternal aunt of the Prophet ﷺ who stood publicly against Quraysh in defence of her nephew, accepted Islam, and migrated to Madinah.",
    category: "HeroicWomen",
    readTime: "4 min",
    sections: {
      intro: p(
        "Arwa bint 'Abd al-Muttalib was a paternal aunt of the Prophet ﷺ — sister of his father 'Abdullah, of Hamzah, of Abu Talib, and of Safiyyah. She was married to 'Umayr ibn Wahb and was the mother of Tulayb ibn 'Umayr, one of the early Companions.",
      ),
      life: p(
        "Her son Tulayb accepted Islam early, in Dar al-Arqam, and went home to his mother. He said: 'I have followed Muhammad and submitted to Allah, the Lord of the worlds.' She said: 'The most worthy of your support and aid is your cousin. By Allah, if we could do what the men do, we would protect him and defend him.' He said: 'What stops you from accepting Islam and following him? Your brother Hamzah has accepted it.' She said: 'I will see what my sisters do, then I will be like one of them.' He said: 'I beg you to go to him and greet him with salam, believe in him, and bear witness that there is no god but Allah and that he is the Messenger of Allah.' She did.",
        "When Quraysh increased their persecution of the Prophet ﷺ and Abu Lahab spoke against him publicly, Tulayb struck Abu Lahab on the head and split it open. Abu Lahab's people seized Tulayb. Arwa came out and said in front of the gathered Quraysh: 'How excellent is what he has done — defending the son of his maternal uncle who has come to him with the truth from his Lord!' Abu Lahab said: 'I see you have followed Muhammad as well!' She said: 'Yes — so help your nephew. By Allah, if I could fight beside him, I would.'",
        "She migrated to Madinah and lived there as a Sahabiyyah. Her son Tulayb was at Badr.",
      ),
      legacy: p(
        "Arwa is one of the early aunts of the Prophet ﷺ who openly took his side at a time when his own uncle Abu Lahab was leading the war against him. Her words in the courtyard of the Ka'bah — 'How excellent is what he has done!' — are preserved by Ibn Sa'd and Ibn Hisham as one of the bravest public declarations made by a Qurayshi woman in the Makkan period.",
      ),
      keyFacts: [
        "Paternal aunt of the Prophet ﷺ; sister of Hamzah and Abu Talib",
        "Mother of Tulayb ibn 'Umayr, one of the early Companions of Dar al-Arqam",
        "Defended the Prophet ﷺ publicly against Abu Lahab",
        "Accepted Islam in Makkah and migrated to Madinah",
        "Recorded by Ibn Sa'd in Tabaqat al-Kubra and Ibn Hisham in the Sira",
      ],
      lessons: p(
        "Family ties tested by truth reveal who is truly noble. Arwa chose her nephew over her clan.",
        "A mother's words can shape a son's courage. Tulayb struck Abu Lahab because he was raised on truth.",
        "Public testimony for Islam in a hostile setting is a station the Prophet ﷺ never forgot.",
      ),
    },
  },
  {
    id: "women-barakah-umm-ayman-second",
    title: "Umm Sharik al-Dawsiyyah (RA) — The Tortured Da'iyah of Makkah",
    description:
      "A Qurayshi woman of Banu 'Amir who took Islam back to the women of Makkah, was arrested and tortured for it, and was sustained by miraculous food sent down from heaven.",
    category: "HeroicWomen",
    readTime: "4 min",
    sections: {
      intro: p(
        "Umm Sharik al-Dawsiyyah — Ghaziyyah bint Jabir — was a woman of the tribe of Daws who had married into Quraysh of the Banu 'Amir ibn Lu'ayy clan. She accepted Islam in Makkah in the early period and immediately began taking the message to the women of Quraysh in secret.",
      ),
      life: p(
        "She would slip from house to house, telling the women: 'Muhammad ﷺ has come with the truth, with a Lord who is one, with a religion that lifts you from buried daughters and idols of stone.' Many women accepted Islam through her. Quraysh found out.",
        "Her own clansmen seized her. They said: 'If it were not for the honour of your clan, we would have killed you. But we will hand you over to your people.' They put her on a slow camel, gave her no food and no water but a little, and led her out into the desert toward her tribe. The sun was furious. They would camp in shade and tie her in the sun, telling her: 'Renounce the religion of Muhammad and we will leave you alone.' She refused.",
        "She narrated: 'When the heat became unbearable and they had withheld water from me for three days, I lost the ability to hear or understand what they said. While I was in that state, I felt something cold on my chest. I took it: it was a vessel of water. I drank a little. It was lifted away. I drank again. I poured it on my head, my face, my clothes. They came back and saw me dripping, with the vessel still beside me. They said: Where did you get the water from? We have been guarding our skins! I said: Allah, the Lord of Muhammad ﷺ, sent it to me. They looked at their water-skins — sealed and untouched — and they said: We bear witness that your Lord is our Lord. They all accepted Islam.' (Ibn Sa'd, Ibn Hajar in al-Isabah)",
        "She made hijrah to Madinah. She lived there as one of the great Sahabiyyat and was, according to one well-known opinion in tafsir, the woman referred to in Surah al-Ahzab: 'And a believing woman if she gives herself to the Prophet…' — she had offered herself in marriage to the Prophet ﷺ.",
      ),
      legacy: p(
        "Umm Sharik is one of the great women of da'wah of the Makkan period — a woman who carried the message into other women's houses when men could not enter. Her miracle in the desert is recorded in the major books of sirah and Sahabah biographies.",
      ),
      keyFacts: [
        "From the tribe of Daws; married into Quraysh of Banu 'Amir",
        "Secret da'iyah to the women of Makkah",
        "Tortured in the desert with thirst and sun for refusing to leave Islam",
        "Sustained by water lowered to her — a karamah preserved by Ibn Sa'd",
        "Migrated to Madinah and was a Sahabiyyah of high standing",
      ],
      lessons: p(
        "Carry the deen to those whom no one else can reach. The first da'iyat were women who walked into other women's homes.",
        "Allah does not abandon the tortured believer. Water reached her chest in the open desert.",
        "A miracle given to one believer became the cause of an entire convoy embracing Islam.",
      ),
    },
  },
];
