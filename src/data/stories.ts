export type StoryCategory = "Prophets" | "Sahaba";

export interface Story {
  id: string;
  title: string;
  description: string;
  category: StoryCategory;
  readTime: string;
  content: string[];
}

export const categoryMeta: Record<StoryCategory, { label: string; arabic: string; blurb: string; source: string }> = {
  Prophets: {
    label: "Prophets (AS)",
    arabic: "الأنبياء",
    blurb: "The 25 prophets named in the Qur'an",
    source: "Based on Imam Ibn Kathir's Qisas al-Anbiya (Stories of the Prophets) and the Qur'an.",
  },
  Sahaba: {
    label: "Sahaba (RA)",
    arabic: "الصحابة",
    blurb: "Companions of the Prophet ﷺ",
    source: "Based on classical sources including Sahih al-Bukhari, Sahih Muslim, Siyar A'lam al-Nubala by al-Dhahabi, and al-Isaba by Ibn Hajar.",
  },
};

const p = (...paragraphs: string[]) => paragraphs;

export const stories: Story[] = [
  {
    id: "adam",
    title: "Adam (AS) — The First Human",
    description: "The creation of the first man, his life in Paradise, the test, and his descent to Earth as the father of humanity.",
    category: "Prophets",
    readTime: "6 min",
    content: p(
      "Allah announced to the angels: 'I am going to place a successor (Khalifah) on the earth.' The angels questioned, 'Will You place upon it one who causes corruption and sheds blood, while we glorify You?' Allah replied, 'Indeed, I know that which you do not know.'",
      "Allah created Adam (AS) from clay gathered from every corner of the earth — which is why his descendants vary in colour, character, and disposition. He shaped him with His own hand and breathed into him from His spirit. Then He taught Adam the names of all things.",
      "When Allah commanded the angels to prostrate to Adam, all of them did so — except Iblis, who refused out of arrogance, claiming superiority because he was made of fire while Adam was made of clay. By this refusal Iblis was cursed and cast out, and he vowed to mislead Adam's descendants until the Last Day.",
      "Adam was placed in Paradise with his wife Hawwa (Eve), and they were permitted to eat from any tree except one. Iblis whispered to them until they ate from the forbidden tree. Realising their mistake, they turned to Allah in sincere repentance, and He accepted them and sent them down to the earth as its first inhabitants.",
      "Ibn Kathir notes that Adam's repentance teaches a foundational lesson: every human will err, but the door of tawbah (repentance) is always open to those who return to Allah with humility."
    ),
  },
  {
    id: "idris",
    title: "Idris (AS) — The Truthful Prophet",
    description: "A prophet of great patience and knowledge, the first to write with the pen, raised by Allah to a high station.",
    category: "Prophets",
    readTime: "3 min",
    content: p(
      "Idris (AS) was a descendant of Shith ibn Adam. The Qur'an describes him as 'a man of truth, a prophet, and We raised him to a high station.' (Maryam 19:56-57)",
      "Classical scholars including Ibn Kathir mention that Idris was the first to write with the pen, the first to study the stars and arithmetic, and a prophet of immense worship.",
      "He called his people back to Allah after they had begun to stray from the path of Adam and Shith. His patience and reliance on Allah set the example for the prophets who came after him."
    ),
  },
  {
    id: "nuh",
    title: "Nuh (AS) — The Ark and the Flood",
    description: "950 years of patient calling, the building of the Ark, and the great flood that purified the earth.",
    category: "Prophets",
    readTime: "6 min",
    content: p(
      "Nuh (AS) was sent to a people who had fallen into idolatry, worshipping statues named Wadd, Suwa', Yaghuth, Ya'uq, and Nasr — once righteous men whose images had gradually become idols.",
      "He called them to the worship of Allah alone for nine hundred and fifty years. He called them by night and by day, openly and secretly, but most placed their fingers in their ears and refused to listen, even mocking him.",
      "When Allah revealed that none more would believe, He commanded Nuh to build a great Ark on dry land, far from the sea. His people laughed at him, but he continued building under divine instruction.",
      "When the time came, water gushed from the earth and poured from the sky. Nuh boarded the Ark with the believers and a pair from every kind of animal. His own son refused to board, saying he would climb a mountain — but no mountain could save him from the decree of Allah, and he drowned with the disbelievers.",
      "After the flood, the Ark settled upon Mount Judi. Ibn Kathir highlights the lesson that lineage alone offers no salvation — only faith and righteous action do."
    ),
  },
  {
    id: "hud",
    title: "Hud (AS) — Sent to 'Ad",
    description: "Sent to the mighty people of 'Ad, who were destroyed by a furious wind for their arrogance and rejection.",
    category: "Prophets",
    readTime: "4 min",
    content: p(
      "Hud (AS) was sent to the people of 'Ad, who lived in Al-Ahqaf in southern Arabia. They were tall, strong, and built towering monuments on every high place, boasting of their power.",
      "He called them to worship Allah alone and abandon their idols. They responded with mockery, accusing him of foolishness and challenging him to bring upon them the punishment he warned of.",
      "Allah first withheld the rain. Then He sent a black cloud which they thought was a blessing — but it carried a furious wind that raged for seven nights and eight days, lifting the disbelievers and casting them down lifeless 'as if they were hollow trunks of palm trees.' Hud and the believers were saved."
    ),
  },
  {
    id: "salih",
    title: "Salih (AS) — The She-Camel of Thamud",
    description: "Sent to Thamud with a miraculous she-camel as a sign — and the destruction that followed when they hamstrung her.",
    category: "Prophets",
    readTime: "4 min",
    content: p(
      "Salih (AS) was sent to Thamud, who lived in Al-Hijr and carved their homes into the mountains. They demanded a sign, so Allah brought forth a magnificent she-camel from a rock as Salih had asked.",
      "Salih instructed them to leave her to drink on her appointed day and graze freely in the land. For a time they obeyed, but their arrogance grew, and the most wretched among them rose up and hamstrung her.",
      "Salih warned them that punishment would come within three days. On the third day a mighty blast (sayhah) seized them, and they were left lifeless in their homes. Salih and the believers had already departed."
    ),
  },
  {
    id: "ibrahim",
    title: "Ibrahim (AS) — The Friend of Allah",
    description: "From smashing his people's idols to the fire that became cool, the sacrifice of his son, and building the Ka'bah.",
    category: "Prophets",
    readTime: "8 min",
    content: p(
      "Ibrahim (AS), Khalilullah — the Friend of Allah — was born among a people of idol-worshippers. From his youth he reasoned with his father and his people: he watched a star, then the moon, then the sun rise and set, and concluded that none of these could be his Lord. His Lord is the One who created them.",
      "He confronted his people during their festival, smashing all their idols except the largest, then placing the axe upon its shoulder. When they returned and accused him, he said: 'Rather, this — the largest of them — did it; so ask them, if they should be able to speak.' They were silenced by their own reasoning, then turned in anger.",
      "They built a great fire and cast him into it. Allah commanded: 'O fire, be coolness and safety upon Ibrahim.' He emerged untouched, and many came to believe.",
      "Ibrahim migrated with his wife Sarah and later with Hajar and his son Isma'il. By divine command he left Hajar and the infant Isma'il in the barren valley of Makkah, where the well of Zamzam later sprang from beneath the child's feet.",
      "When Isma'il grew, Ibrahim was shown in a dream that he was sacrificing him. Both father and son submitted. As Ibrahim placed the blade, Allah ransomed Isma'il with a great ram — a test of love and submission that became the basis of the Eid sacrifice.",
      "Father and son together raised the foundations of the Ka'bah, praying: 'Our Lord, accept this from us. Indeed You are the All-Hearing, the All-Knowing.'"
    ),
  },
  {
    id: "lut",
    title: "Lut (AS) — The People of Sodom",
    description: "Sent to a people who openly committed indecency, and the destruction that overturned their cities.",
    category: "Prophets",
    readTime: "4 min",
    content: p(
      "Lut (AS), the nephew of Ibrahim, was sent to the people of Sodom who openly practised an indecency none had committed before them — approaching men with desire instead of women, and committing crimes in their gatherings.",
      "He called them to purity for years, but they responded with threats, even threatening to expel him for being among 'people who keep themselves pure.'",
      "Allah sent angels in the form of handsome young men to Lut. When his people came demanding them, Lut was distressed, but the angels revealed their identity and commanded him to leave with his family by night — except his wife, who was of the disbelievers.",
      "At dawn the cities were overturned and pelted with stones of baked clay. The Dead Sea region remains, by Ibn Kathir's account, a sign for those who reflect."
    ),
  },
  {
    id: "ismail",
    title: "Isma'il (AS) — The Patient Sacrifice",
    description: "The first-born of Ibrahim, the patient son who submitted to the sacrifice, and ancestor of the Arabs.",
    category: "Prophets",
    readTime: "4 min",
    content: p(
      "Isma'il (AS) was the firstborn of Ibrahim, born to Hajar in old age. As an infant he was placed by his mother in the barren valley of Makkah, where she ran seven times between Safa and Marwah seeking water — until Zamzam burst forth at his feet.",
      "He grew up among the tribe of Jurhum, learning eloquent Arabic. The Qur'an honours him as 'true to his promise, and a messenger and a prophet.'",
      "When Ibrahim was commanded in a dream to sacrifice him, Isma'il replied: 'O my father, do as you are commanded. You will find me, if Allah wills, of the steadfast.' Allah ransomed him with a great ram.",
      "Together they built the Ka'bah. From his descendants came the final Prophet Muhammad ﷺ."
    ),
  },
  {
    id: "ishaq",
    title: "Ishaq (AS) — The Promised Son",
    description: "The son promised to Ibrahim and Sarah in their old age, and the father of Ya'qub.",
    category: "Prophets",
    readTime: "3 min",
    content: p(
      "Ishaq (AS) was born to Ibrahim and Sarah after they had grown old, when angels visiting Ibrahim brought the glad tidings of his birth — and of a grandson, Ya'qub, after him.",
      "Allah blessed him with prophethood and a righteous progeny. He is described in the Qur'an as 'one of the chosen and the most excellent.' (Sad 38:47)",
      "He married Rifqa and had two sons, including Ya'qub (Israel), through whom the line of the Israelite prophets continued."
    ),
  },
  {
    id: "yaqub",
    title: "Ya'qub (AS) — Israel and the Twelve Tribes",
    description: "The patient father of Yusuf, who never lost hope in Allah's mercy, and the ancestor of the twelve tribes.",
    category: "Prophets",
    readTime: "4 min",
    content: p(
      "Ya'qub (AS), also called Israel, was the son of Ishaq and grandson of Ibrahim. From his twelve sons descended the twelve tribes of Bani Isra'il.",
      "When his beloved son Yusuf was taken from him, Ya'qub bore the trial with dignity, saying 'beautiful patience' (sabrun jamil) and never despairing of Allah's mercy. He wept until his eyes turned white from grief, yet he never complained except to Allah.",
      "When Yusuf was finally restored to him after decades, the joy was complete. Ya'qub passed away in Egypt, having gathered his sons and instructed them: 'What will you worship after me?' They said: 'We will worship your God and the God of your fathers — Ibrahim, Isma'il, and Ishaq — one God.'"
    ),
  },
  {
    id: "yusuf",
    title: "Yusuf (AS) — From the Well to the Throne",
    description: "Cast into a well by his brothers, sold into slavery, falsely imprisoned, and raised to power in Egypt.",
    category: "Prophets",
    readTime: "9 min",
    content: p(
      "Yusuf (AS) saw in a dream eleven stars, the sun, and the moon prostrating to him. His father Ya'qub warned him not to tell his brothers, foreseeing their jealousy.",
      "Driven by envy, his brothers cast him into the bottom of a well and lied to their father, returning with his shirt stained with false blood. A passing caravan drew him out and sold him as a slave in Egypt.",
      "He was bought by Al-'Aziz, whose wife later attempted to seduce him. Yusuf refused, saying 'I seek refuge in Allah,' and prison was preferred to her invitation. He spent years in prison, where he interpreted the dreams of two fellow inmates.",
      "When the king of Egypt dreamt of seven fat cows being eaten by seven lean ones, Yusuf interpreted it as seven years of plenty followed by seven of drought. The king summoned him; his innocence was publicly established, and he was placed in charge of the storehouses of Egypt.",
      "Years later his brothers came seeking food, not recognising him. After testing them, he revealed himself: 'I am Yusuf, and this is my brother. Allah has been gracious to us. Whoever fears Allah and is patient — Allah does not waste the reward of the doers of good.'",
      "He forgave them completely: 'There is no blame upon you today. Allah will forgive you, and He is the most merciful of the merciful.' Ya'qub was reunited with his son in Egypt, and the dream of his childhood was fulfilled."
    ),
  },
  {
    id: "ayyub",
    title: "Ayyub (AS) — The Patient One",
    description: "Stripped of wealth, family and health, he never complained, and Allah restored everything to him manifold.",
    category: "Prophets",
    readTime: "4 min",
    content: p(
      "Ayyub (AS) was a wealthy prophet, blessed with abundant property, many children, and good health. He was deeply grateful and generous to the poor.",
      "Allah tested him by taking his wealth, then his children, then his health, until he was confined for years to a bed of illness. Yet he never complained against his Lord. His only words were of remembrance and gratitude for what remained.",
      "Only when his strength was nearly gone did he turn to Allah: 'Indeed, adversity has touched me, and You are the most merciful of the merciful.' He did not even ask for relief — only acknowledged his weakness.",
      "Allah commanded him: 'Strike with your foot; this is a cool bath and a drink.' A spring burst forth; he bathed and drank, and his health was restored. Allah returned to him his family and the like of them with them, as a mercy and a reminder for the worshippers."
    ),
  },
  {
    id: "shuaib",
    title: "Shu'aib (AS) — The Orator of the Prophets",
    description: "Sent to Madyan, calling them to honest weights and measures, and the destruction of those who rejected him.",
    category: "Prophets",
    readTime: "4 min",
    content: p(
      "Shu'aib (AS) was sent to the people of Madyan, who cheated in their weights and measures and corrupted the markets. He combined the call to tawhid with a clear call to economic justice.",
      "He pleaded with them gently: 'O my people, worship Allah; you have no deity other than Him. And do not decrease from the measure and the scale.' His eloquence earned him the title 'orator of the prophets.'",
      "When they persisted in mockery and threats, the punishment came as a tremor and a shout that left them lifeless in their homes. Shu'aib and the believers were saved."
    ),
  },
  {
    id: "musa",
    title: "Musa (AS) — The One Who Spoke with Allah",
    description: "From the basket on the Nile, to confronting Pharaoh, the splitting of the sea, and receiving the Torah.",
    category: "Prophets",
    readTime: "10 min",
    content: p(
      "Musa (AS) was born at a time when Pharaoh was slaughtering the male children of Bani Isra'il. By divine inspiration his mother placed him in a sealed basket on the Nile, and Pharaoh's own household drew him out and raised him as their own.",
      "As a young man he struck an Egyptian who was oppressing an Israelite, and the man died. Fearing for his life, he fled to Madyan, where he met Shu'aib, married his daughter, and shepherded for ten years.",
      "Returning with his family, he saw a fire on Mount Tur. There Allah spoke to him directly, gave him the staff and the white hand as signs, and commanded him to go to Pharaoh — the most arrogant tyrant of his age.",
      "Pharaoh rejected him and gathered his magicians. When the magicians' ropes appeared as serpents, Musa cast his staff and it swallowed all their illusions. The magicians themselves fell in prostration, declaring: 'We believe in the Lord of Musa and Harun.' Pharaoh tortured them, but they died as believers.",
      "After plagues and signs, Musa led Bani Isra'il out by night. Pharaoh pursued with his army. When the sea was before them and the army behind, Allah commanded: 'Strike the sea with your staff.' It split into twelve dry paths. Bani Isra'il crossed; Pharaoh and his army were drowned.",
      "On Mount Tur, Musa received the Tawrah. He led his people for forty years through the wilderness — a time of trials, complaints, and Allah's continued mercy. Ibn Kathir notes that Musa's life is the most often-told prophetic story in the Qur'an, because in it lies guidance for every nation."
    ),
  },
  {
    id: "harun",
    title: "Harun (AS) — Brother and Helper of Musa",
    description: "Granted prophethood at his brother's request, the eloquent supporter who stood with Musa before Pharaoh.",
    category: "Prophets",
    readTime: "3 min",
    content: p(
      "Harun (AS) was the elder brother of Musa, more eloquent in speech. When Musa was commissioned, he asked: 'And appoint for me a minister from my family — Harun, my brother. Through him strengthen my back.'",
      "Allah granted the request, and Harun stood beside Musa before Pharaoh and throughout the trials with Bani Isra'il.",
      "When Musa went to Mount Tur and Bani Isra'il fell into the worship of the calf, Harun pleaded with them and warned them, but they nearly killed him. The Qur'an records the brothers' love and the gentle defence Musa gave him on his return."
    ),
  },
  {
    id: "dhulkifl",
    title: "Dhul-Kifl (AS) — The Patient Steward",
    description: "A righteous prophet praised among the patient, who undertook a heavy duty and fulfilled it faithfully.",
    category: "Prophets",
    readTime: "2 min",
    content: p(
      "Dhul-Kifl (AS) is mentioned in the Qur'an among the patient and the righteous: 'And Isma'il, Idris, and Dhul-Kifl — all were of the patient. And We admitted them into Our mercy. Indeed, they were of the righteous.' (Al-Anbiya 21:85-86)",
      "Classical exegetes including Ibn Kathir narrate that he undertook a difficult duty — judging justly among his people, fasting by day, and standing in prayer by night — and fulfilled it without weakening, earning his title 'the one who took on the burden.'"
    ),
  },
  {
    id: "dawud",
    title: "Dawud (AS) — King and Reciter of the Zabur",
    description: "The young shepherd who slew Jalut, was given kingship and the Zabur, and whose recitation moved the mountains.",
    category: "Prophets",
    readTime: "5 min",
    content: p(
      "Dawud (AS) was a young man among the army of Talut (Saul) when Bani Isra'il faced the giant warrior Jalut (Goliath). With a sling and a stone, by Allah's leave, he killed Jalut and turned the battle.",
      "Allah granted him prophethood, kingship, and the Zabur (Psalms). His recitation was so beautiful that the mountains and the birds joined him in glorifying Allah morning and evening.",
      "He was given great wisdom in judgement, and Allah taught him the craft of making chain mail, softening iron in his hands. He fasted half the year — fasting one day and breaking the next — a fast Allah's Messenger ﷺ called the most beloved fast to Allah.",
      "Dawud combined kingship with humility: he ate from the work of his own hands and was constantly in prayer and remembrance."
    ),
  },
  {
    id: "sulaiman",
    title: "Sulaiman (AS) — The King of Wind, Jinn and Beasts",
    description: "Granted a kingdom unlike any other, he understood the speech of birds and ants, and ruled with justice.",
    category: "Prophets",
    readTime: "6 min",
    content: p(
      "Sulaiman (AS), son of Dawud, inherited prophethood and kingship from his father. He prayed: 'My Lord, forgive me and grant me a kingdom such as will not belong to anyone after me.'",
      "Allah subjected to him the wind — running gently by his command — and the jinn who built and dove for him, and a fountain of molten brass. He understood the speech of birds and beasts.",
      "Passing a valley, he heard an ant warning her colony to enter their dwellings lest Sulaiman and his army crush them unknowingly. He smiled at her speech and asked Allah to enable him to be grateful for the favour.",
      "When the Hudhud (hoopoe) bird informed him of Bilqis, the Queen of Sheba, who worshipped the sun, Sulaiman wrote to her inviting her to Islam. She came; her throne was brought to her by one who had knowledge of the Book — in less than the blink of an eye. She submitted to Allah with Sulaiman.",
      "Sulaiman died standing, leaning upon his staff. The jinn continued labouring, unaware of his death, until a worm ate through the staff and his body fell — proving that they had no knowledge of the unseen."
    ),
  },
  {
    id: "ilyas",
    title: "Ilyas (AS) — The Caller in Lebanon",
    description: "Sent to Bani Isra'il in the region of Ba'lbek, calling them away from the worship of the idol Ba'l.",
    category: "Prophets",
    readTime: "3 min",
    content: p(
      "Ilyas (AS) was sent to a people who worshipped the idol Ba'l in the region known later as Ba'lbek. He said: 'Will you not fear Allah? Do you call upon Ba'l and leave the best of creators?'",
      "Most of his people rejected him and persisted in their idol-worship, and Allah's punishment overtook them — except a remnant of believers. Allah praises him in Surah As-Saffat: 'Peace be upon Ilyasin.'"
    ),
  },
  {
    id: "alyasa",
    title: "Al-Yasa' (AS) — The Successor of Ilyas",
    description: "A prophet who continued the call of Ilyas to Bani Isra'il, mentioned among the chosen and excellent.",
    category: "Prophets",
    readTime: "2 min",
    content: p(
      "Al-Yasa' (AS) succeeded Ilyas in calling Bani Isra'il back to the worship of Allah alone. The Qur'an honours him: 'And Isma'il, Al-Yasa', Yunus, and Lut — all We preferred over the worlds.' (Al-An'am 6:86)",
      "Classical sources note that he continued the work of his predecessor with patience, despite the stubbornness of his people."
    ),
  },
  {
    id: "yunus",
    title: "Yunus (AS) — The Companion of the Whale",
    description: "He left his people in anger, was swallowed by a great fish, and called out from three darknesses.",
    category: "Prophets",
    readTime: "4 min",
    content: p(
      "Yunus (AS) was sent to the people of Nineveh. When they rejected him repeatedly, he left them in anger before Allah had given him permission to depart.",
      "He boarded a ship that began to sink. Lots were drawn, and his name came out three times. He was cast into the sea, and a great fish swallowed him.",
      "In the darkness of the sea, the night, and the belly of the fish, he called out: 'There is no deity except You; glory be to You. Indeed, I have been of the wrongdoers.' Allah saved him; the fish cast him onto a barren shore, and a gourd plant grew over him.",
      "His people, meanwhile, when they saw the signs of punishment approaching, repented sincerely as a community — and Allah lifted the punishment from them. They are the only nation the Qur'an mentions whose belief, after their prophet had departed, benefited them."
    ),
  },
  {
    id: "zakariya",
    title: "Zakariya (AS) — The Whispered Prayer",
    description: "An elderly prophet who quietly asked Allah for a son, and was given Yahya — pure from his birth.",
    category: "Prophets",
    readTime: "3 min",
    content: p(
      "Zakariya (AS) was the guardian of Maryam in the temple. Each time he entered her chamber he found provision with her. He asked her about it, and she said: 'It is from Allah. Indeed, Allah provides for whom He wills without account.'",
      "Inspired by what he saw, though he was old and his wife barren, he made a private supplication: 'My Lord, do not leave me alone, while You are the best of inheritors.'",
      "Allah answered him with Yahya — a name no one had been given before — and described the boy as one who would be 'honourable, abstinent, and a prophet from among the righteous.'"
    ),
  },
  {
    id: "yahya",
    title: "Yahya (AS) — Pure from Birth",
    description: "Granted wisdom as a boy, devoted to worship, dutiful to his parents, and a martyr at the hands of a tyrant.",
    category: "Prophets",
    readTime: "3 min",
    content: p(
      "Yahya (AS), son of Zakariya, was given wisdom while still a child. The Qur'an describes him as devoted in worship, dutiful to his parents, never arrogant or disobedient.",
      "He called to Allah and lived a life of asceticism, eating from the leaves of trees and weeping much from the fear of Allah.",
      "He was killed unjustly at the order of a tyrannical king, becoming a martyr. Allah greets him in the Qur'an: 'Peace be upon him the day he was born, the day he dies, and the day he is raised alive.' (Maryam 19:15)"
    ),
  },
  {
    id: "isa",
    title: "'Isa (AS) — The Messiah, Son of Maryam",
    description: "Born without a father by the word of Allah, he spoke from the cradle, healed the sick, and was raised to the heavens.",
    category: "Prophets",
    readTime: "7 min",
    content: p(
      "Maryam, the chosen woman of her time, devoted herself to worship in the temple. The angel Jibril appeared to her as a man, and she sought refuge from him. He said: 'I am only the messenger of your Lord to give you a pure boy.'",
      "She conceived 'Isa (AS) and withdrew to a distant place. She gave birth alone beneath a palm tree, and a stream sprang up at her feet, and ripe dates fell into her hand.",
      "When she returned with the child, her people accused her. She pointed to the infant. They said: 'How can we speak to one in the cradle?' Then 'Isa spoke: 'Indeed, I am the servant of Allah. He has given me the Book and made me a prophet.'",
      "He was given the Injil (Gospel) and granted miracles by Allah's leave: he healed the blind and the leper, gave life to the dead, and fashioned a bird from clay that flew.",
      "When some of Bani Isra'il plotted to crucify him, Allah raised him to the heavens, and another was made to resemble him. The Qur'an states clearly: 'They did not kill him, nor did they crucify him; but it was made to appear so to them.'",
      "He will return before the Day of Judgement, break the cross, kill the Dajjal, and rule with the law of Muhammad ﷺ."
    ),
  },
  {
    id: "muhammad",
    title: "Muhammad ﷺ — The Final Messenger",
    description: "From the Year of the Elephant to the Farewell Pilgrimage — the seal of the prophets and a mercy to the worlds.",
    category: "Prophets",
    readTime: "10 min",
    content: p(
      "Muhammad ﷺ was born in Makkah in the Year of the Elephant, in the noble tribe of Quraysh, descended from Isma'il son of Ibrahim. His father 'Abdullah died before his birth; his mother Aminah died when he was six. He was raised by his grandfather 'Abd al-Muttalib, then by his uncle Abu Talib.",
      "From his youth he was known as al-Amin — 'the Trustworthy.' He earned his living as a shepherd, then as a merchant. At twenty-five he married Khadijah bint Khuwaylid, a noble and intelligent widow, who became the first to believe in him.",
      "At forty, while in retreat in the cave of Hira, the angel Jibril appeared and brought him the first revelation: 'Read in the name of your Lord who created.' Trembling, he returned to Khadijah. She comforted him with words still etched in the heart of every believer: 'By Allah, Allah will never disgrace you. You uphold the ties of kinship, you carry the weak, you give to the destitute, you honour the guest, and you assist in the trials of truth.'",
      "For thirteen years he called the people of Makkah to tawhid, enduring boycott, ridicule, the deaths of Khadijah and Abu Talib in the 'Year of Sorrow,' and the persecution of the early believers — Bilal, Sumayyah (the first martyr), Yasir, 'Ammar, and many others.",
      "After the Night Journey and Ascension (Isra and Mi'raj), the five daily prayers were prescribed. The Hijrah to Madinah followed, and there a community was forged: the Ansar opening their homes to the Muhajirun, the Constitution of Madinah, the Mosque of the Prophet, and the great battles of Badr, Uhud, and the Trench.",
      "After the conquest of Makkah without bloodshed, he forgave even those who had fought him most fiercely, saying: 'Go, for you are free.' On the Farewell Pilgrimage he addressed over a hundred thousand companions, declaring the inviolability of life, wealth, and honour, and the equality of all human beings before Allah.",
      "He passed away in Madinah at the age of sixty-three, leaving behind, in the words of his last sermon, two things by which his Ummah would never go astray: the Book of Allah and his Sunnah."
    ),
  },
  {
    id: "abu-bakr",
    title: "Abu Bakr al-Siddiq (RA)",
    description: "The first man to embrace Islam, lifelong companion of the Prophet ﷺ, and the first Caliph.",
    category: "Sahaba",
    readTime: "5 min",
    content: p(
      "Abu Bakr 'Abdullah ibn Abi Quhafah (RA) was the closest friend of the Prophet ﷺ before Islam and the first free man to accept his message. The Prophet ﷺ said: 'I have never invited anyone to Islam except that he showed some hesitation — except Abu Bakr.'",
      "He freed many tortured slaves with his wealth, including Bilal ibn Rabah. He accompanied the Prophet ﷺ in the Hijrah, hiding with him in the cave of Thawr, of which Allah revealed: '...the second of two, when they were in the cave, when he said to his companion: Do not grieve; indeed Allah is with us.' (At-Tawbah 9:40)",
      "After the Prophet's death, he steadied the Ummah with his famous words: 'Whoever worshipped Muhammad — Muhammad has died. Whoever worships Allah — Allah is alive and does not die.' He was elected the first Caliph and led the Ridda wars, preserving the unity of Islam. He compiled the first Mushaf of the Qur'an.",
      "He died after about two years of Caliphate and was buried beside the Prophet ﷺ."
    ),
  },
  {
    id: "umar",
    title: "'Umar ibn al-Khattab (RA)",
    description: "Al-Faruq — who distinguished truth from falsehood — and the second Caliph who expanded Islam to two great empires.",
    category: "Sahaba",
    readTime: "5 min",
    content: p(
      "'Umar ibn al-Khattab (RA) was a fierce opponent of Islam in his early years. The Prophet ﷺ once prayed: 'O Allah, strengthen Islam with the more beloved of these two men to You — 'Umar ibn al-Khattab or Abu Jahl ibn Hisham.'",
      "His conversion came when he set out to kill the Prophet ﷺ and was directed first to his sister's house, where he heard verses of Surah Ta-Ha being recited. He embraced Islam at the hand of the Prophet ﷺ that very day, and Muslims prayed openly at the Ka'bah for the first time.",
      "As the second Caliph, he established the Islamic calendar, organised the diwan (registry), appointed judges, and during his rule Islam reached Persia, Egypt, the Levant, and beyond. Yet he walked the streets of Madinah at night checking on the poor, and patched his garments with his own hands.",
      "He was martyred while leading Fajr prayer in Madinah. His justice became a standard for rulers in every age."
    ),
  },
  {
    id: "uthman",
    title: "'Uthman ibn 'Affan (RA)",
    description: "Dhu al-Nurayn — possessor of two lights — generous companion who compiled the Qur'an into a single text.",
    category: "Sahaba",
    readTime: "5 min",
    content: p(
      "'Uthman ibn 'Affan (RA) was among the earliest believers, a wealthy and modest merchant of Quraysh. The Prophet ﷺ married him to his daughter Ruqayyah, and after her death to her sister Umm Kulthum — earning him the title Dhu al-Nurayn, 'Possessor of the Two Lights.'",
      "He bought the well of Rumah and gave it as charity for the Muslims, and equipped the Army of Hardship (Tabuk) at his own expense. The Prophet ﷺ said: 'Nothing will harm 'Uthman after this day, whatever he does.'",
      "As the third Caliph, he ordered the standardisation of the Mushaf, sending official copies to the major cities — preserving the Qur'an in one recitation as it remains today. The frontiers of Islam continued to expand under his rule.",
      "He was martyred while reciting the Qur'an in his home, refusing to shed Muslim blood in his defence."
    ),
  },
  {
    id: "ali",
    title: "'Ali ibn Abi Talib (RA)",
    description: "Cousin of the Prophet ﷺ, raised in his household, the first young man to accept Islam, and the fourth Caliph.",
    category: "Sahaba",
    readTime: "5 min",
    content: p(
      "'Ali ibn Abi Talib (RA), cousin of the Prophet ﷺ, was raised in his household and was the first child to accept Islam. He slept in the Prophet's bed on the night of the Hijrah while the Prophet ﷺ left Makkah safely.",
      "He married Fatimah, the daughter of the Prophet ﷺ, and from them came al-Hasan and al-Husayn. The Prophet ﷺ called him 'the brother of the Messenger of Allah' and gave him the banner at Khaybar, saying: 'I will give the banner tomorrow to a man who loves Allah and His Messenger, and whom Allah and His Messenger love.'",
      "Known for his deep knowledge, the Prophet ﷺ said: 'I am the city of knowledge and 'Ali is its gate.' He was renowned for his eloquence, courage in battle, and ascetic life.",
      "As the fourth Caliph, he faced great civil strife. He was martyred in Kufa while heading to Fajr prayer."
    ),
  },
  {
    id: "khadijah",
    title: "Khadijah bint Khuwaylid (RA)",
    description: "The first to believe in the Prophet ﷺ, his beloved wife, and a pillar of support in the early years.",
    category: "Sahaba",
    readTime: "4 min",
    content: p(
      "Khadijah bint Khuwaylid (RA) was a noble, intelligent, and successful merchant of Makkah, known as al-Tahirah ('the Pure') even before Islam. She proposed marriage to Muhammad ﷺ herself after observing his honesty as her trade agent.",
      "When the first revelation came and the Prophet ﷺ returned to her trembling, she comforted him and took him to her cousin Waraqah, who recognised the signs of prophethood. She was the first human being to accept Islam.",
      "She supported him with her wealth, her counsel, and her unwavering love through the years of persecution and the boycott of Banu Hashim. The Prophet ﷺ said of her: 'She believed in me when people disbelieved, she trusted me when people rejected me, and she gave me children when other women did not.'",
      "She passed away in the 'Year of Sorrow,' shortly before Abu Talib. Her station in Paradise was promised by Jibril himself."
    ),
  },
  {
    id: "aisha",
    title: "'A'ishah bint Abi Bakr (RA)",
    description: "Mother of the Believers, beloved wife of the Prophet ﷺ, jurist, and the greatest narrator of his Sunnah.",
    category: "Sahaba",
    readTime: "5 min",
    content: p(
      "'A'ishah bint Abi Bakr (RA), Umm al-Mu'minin, was the daughter of Abu Bakr and the wife dearest to the Prophet ﷺ after Khadijah. The revelation came to him while he was beneath her covering — a distinction granted to no other wife.",
      "She narrated over two thousand ahadith, becoming a primary source for the rituals, manners, and family life of the Prophet ﷺ. The senior companions referred to her on matters of Sunnah, and she corrected even the great fuqaha when needed.",
      "When the slander (al-ifk) was hurled at her, she remained patient, and Allah revealed her innocence in verses recited until the Day of Judgement.",
      "She lived through the early Caliphate, taught generations of scholars, and is remembered as one of the most learned women in Islamic history."
    ),
  },
  {
    id: "fatimah",
    title: "Fatimah al-Zahra (RA)",
    description: "The beloved daughter of the Prophet ﷺ, leader of the women of Paradise.",
    category: "Sahaba",
    readTime: "4 min",
    content: p(
      "Fatimah al-Zahra (RA) was the youngest daughter of the Prophet ﷺ and Khadijah, and the closest to him in nature, walk, and speech. He would stand when she entered and seat her in his place.",
      "She married 'Ali ibn Abi Talib in a household of poverty but immense baraka. From them came al-Hasan, al-Husayn, Zaynab, and Umm Kulthum — the family of the Prophet ﷺ.",
      "She bore the hardships of the early years, grinding flour with her own hands until they blistered. The Prophet ﷺ taught her instead to say SubhanAllah, Alhamdulillah, and Allahu Akbar in a specific number — the famous tasbih of Fatimah.",
      "He told her in his final illness, in confidence, that she would be the first of his family to follow him — and she was, only six months later. He called her 'the leader of the women of the people of Paradise.'"
    ),
  },
  {
    id: "hamza",
    title: "Hamza ibn 'Abd al-Muttalib (RA)",
    description: "The Prophet's uncle, Lion of Allah, and one of the great martyrs of Uhud.",
    category: "Sahaba",
    readTime: "4 min",
    content: p(
      "Hamza (RA) was the uncle of the Prophet ﷺ, of similar age, and his foster brother through nursing. He was a renowned warrior of Quraysh.",
      "He embraced Islam in defence of his nephew when Abu Jahl had insulted him. From that day, the early Muslims grew bolder, sheltered by the prestige of Hamza. The Prophet ﷺ called him Asadullah — Lion of Allah.",
      "He was martyred at the battle of Uhud, his body cruelly mutilated. The Prophet ﷺ wept over him and called him Sayyid al-Shuhada — Master of the Martyrs."
    ),
  },
  {
    id: "bilal",
    title: "Bilal ibn Rabah (RA)",
    description: "The first muezzin of Islam, an Abyssinian slave whose 'Ahad, Ahad' under torture lit the way for generations.",
    category: "Sahaba",
    readTime: "4 min",
    content: p(
      "Bilal ibn Rabah (RA) was an Abyssinian slave of Umayyah ibn Khalaf in Makkah. When he embraced Islam, he was tortured in the burning desert sand, a heavy stone placed upon his chest, while he repeated only: 'Ahad, Ahad' — One, One.",
      "Abu Bakr bought and freed him. When the call to prayer was instituted in Madinah, the Prophet ﷺ chose Bilal as the first muezzin of Islam.",
      "On the day Makkah was conquered, the Prophet ﷺ commanded Bilal — once humiliated in those streets — to ascend the Ka'bah and call the adhan. After the Prophet's death, he could no longer bring himself to call the adhan in Madinah, and migrated to Sham."
    ),
  },
  {
    id: "khalid",
    title: "Khalid ibn al-Walid (RA)",
    description: "Sayfullah — the Sword of Allah — undefeated commander of over a hundred battles.",
    category: "Sahaba",
    readTime: "5 min",
    content: p(
      "Khalid ibn al-Walid (RA) was the commander whose flank turned the tide against the Muslims at Uhud. After years of distinguished combat for Quraysh, Allah opened his heart to Islam, and he came to Madinah in the year of Khaybar.",
      "From that day he never lost a battle. The Prophet ﷺ named him Sayfullah al-Maslul — the Drawn Sword of Allah. At Mu'tah, after three commanders fell, Khalid took the banner and brought the army back safely against overwhelming odds.",
      "Under Abu Bakr he led the Ridda wars, then turned to Iraq and Sham, achieving the stunning victory at Yarmuk against the Byzantines.",
      "When 'Umar removed him from command — to demonstrate that victory comes from Allah, not from any individual — Khalid obeyed without complaint and continued to fight as a soldier under his successor. He died in his bed and is reported to have wept that he had not been granted martyrdom."
    ),
  },
  {
    id: "abu-ubayda",
    title: "Abu 'Ubaydah ibn al-Jarrah (RA)",
    description: "Amin al-Ummah — the Trustworthy of this Nation — among the ten promised Paradise.",
    category: "Sahaba",
    readTime: "3 min",
    content: p(
      "Abu 'Ubaydah ibn al-Jarrah (RA) embraced Islam in its earliest days through Abu Bakr. The Prophet ﷺ said: 'Every nation has a trustworthy man, and the trustworthy of this nation is Abu 'Ubaydah ibn al-Jarrah.'",
      "At Badr he killed his own father, who fought on the side of the disbelievers, demonstrating that faith outweighs blood. He led armies in Sham with quiet humility, and was 'Umar's first choice as Caliph after himself, had he lived.",
      "He died in the plague of 'Amwas in Sham, refusing to leave his army."
    ),
  },
  {
    id: "saad-abi-waqqas",
    title: "Sa'd ibn Abi Waqqas (RA)",
    description: "The first to shoot an arrow in the path of Allah, conqueror of Persia, and one of the ten promised Paradise.",
    category: "Sahaba",
    readTime: "4 min",
    content: p(
      "Sa'd ibn Abi Waqqas (RA) was among the first seven to embrace Islam, at the age of seventeen. The Prophet ﷺ said of him at Uhud: 'Shoot, Sa'd! May my mother and father be your ransom!' — a phrase he said to no one else.",
      "His mother tried to force him to leave Islam by refusing food. He told her he loved her, but if she had a hundred souls and lost them all, he would not abandon his faith.",
      "He led the Muslim army at the great battle of Qadisiyyah, defeating the Persian Empire. He was among the ten promised Paradise during their lifetime."
    ),
  },
  {
    id: "saeed-ibn-zayd",
    title: "Sa'id ibn Zayd (RA)",
    description: "Among the early believers and the ten promised Paradise; his sister's conversion brought 'Umar to Islam.",
    category: "Sahaba",
    readTime: "3 min",
    content: p(
      "Sa'id ibn Zayd (RA) embraced Islam early, alongside his wife Fatimah bint al-Khattab — the sister of 'Umar. It was in their house that 'Umar heard the Qur'an being recited and accepted Islam.",
      "He participated in all the major events with the Prophet ﷺ except Badr, having been sent on a mission. He fought at Yarmuk and other battles in Sham. He is among the ten promised Paradise."
    ),
  },
  {
    id: "talha",
    title: "Talha ibn 'Ubaydillah (RA)",
    description: "The 'living martyr' of Uhud who shielded the Prophet ﷺ with his own body.",
    category: "Sahaba",
    readTime: "3 min",
    content: p(
      "Talha ibn 'Ubaydillah (RA) was among the early believers. At Uhud, when the Muslims were scattered, he stood firm beside the Prophet ﷺ, taking arrows in his hand and body to shield him. His hand was permanently paralysed from that day.",
      "The Prophet ﷺ said: 'Whoever wishes to see a martyr walking on the earth, let him look at Talha ibn 'Ubaydillah.' He was generous to a degree that earned him the name Talha al-Khayr — Talha the Good."
    ),
  },
  {
    id: "zubayr",
    title: "Al-Zubayr ibn al-'Awwam (RA)",
    description: "The disciple (hawari) of the Prophet ﷺ, the first to draw his sword in defence of Islam.",
    category: "Sahaba",
    readTime: "3 min",
    content: p(
      "Al-Zubayr (RA) accepted Islam at fifteen. Hearing a false rumour that the Prophet ﷺ had been seized, he ran through the streets of Makkah with sword drawn — the first to brandish a sword in defence of Islam. The Prophet ﷺ prayed for him and his sword.",
      "He was the cousin of the Prophet ﷺ through Safiyyah, his aunt, and the husband of Asma bint Abi Bakr. The Prophet ﷺ said: 'Every prophet has a disciple (hawari), and my disciple is al-Zubayr.' He is among the ten promised Paradise."
    ),
  },
  {
    id: "abdurrahman-awf",
    title: "'Abd al-Rahman ibn 'Awf (RA)",
    description: "A wealthy companion who arrived in Madinah with nothing and built fortunes in charity.",
    category: "Sahaba",
    readTime: "3 min",
    content: p(
      "'Abd al-Rahman ibn 'Awf (RA) embraced Islam in its earliest days. When he migrated to Madinah, his Ansari brother Sa'd ibn al-Rabi' offered to share his wealth and family. 'Abd al-Rahman replied: 'May Allah bless you in your wealth and family. Just show me the market.'",
      "Through honest trade he became one of the wealthiest companions and gave most of it in charity — once donating a caravan of seven hundred camels with their loads in a single day. He is among the ten promised Paradise."
    ),
  },
  {
    id: "muadh",
    title: "Mu'adh ibn Jabal (RA)",
    description: "The most knowledgeable in halal and haram, sent by the Prophet ﷺ to teach Yemen.",
    category: "Sahaba",
    readTime: "3 min",
    content: p(
      "Mu'adh ibn Jabal (RA) was a young Ansari of striking intelligence and beauty of character. The Prophet ﷺ said: 'The most knowledgeable of my Ummah in matters of halal and haram is Mu'adh ibn Jabal.'",
      "When sent as governor and judge to Yemen, the Prophet ﷺ asked how he would judge. He replied: 'By the Book of Allah. Then by the Sunnah. Then I will exert my own judgement.' The Prophet ﷺ struck his chest and said: 'Praise be to Allah who has guided the messenger of His Messenger to that which pleases His Messenger.'",
      "He died in the plague of 'Amwas in Sham."
    ),
  },
  {
    id: "ibn-masud",
    title: "'Abdullah ibn Mas'ud (RA)",
    description: "Reciter of the Qur'an, scholar of fiqh, and one of the closest companions to the Prophet ﷺ in conduct.",
    category: "Sahaba",
    readTime: "4 min",
    content: p(
      "Ibn Mas'ud (RA) was a young shepherd in Makkah when he met the Prophet ﷺ and embraced Islam. He was the first to recite the Qur'an publicly at the Ka'bah, and was beaten until his face bled — yet returned the next day to recite again.",
      "The Prophet ﷺ said: 'Whoever wishes to recite the Qur'an as fresh as it was revealed, let him recite it according to the recitation of Ibn Umm 'Abd' (i.e. Ibn Mas'ud).",
      "He was so close to the household of the Prophet ﷺ that some thought he was a member of his family. He was a foundational teacher of the Kufa school of fiqh."
    ),
  },
  {
    id: "ibn-abbas",
    title: "'Abdullah ibn 'Abbas (RA)",
    description: "Tarjuman al-Qur'an — the Interpreter of the Qur'an — and the great scholar of the Ummah.",
    category: "Sahaba",
    readTime: "4 min",
    content: p(
      "Ibn 'Abbas (RA) was the cousin of the Prophet ﷺ. The Prophet ﷺ once embraced him and prayed: 'O Allah, teach him wisdom and the interpretation of the Book.'",
      "Allah answered the prayer. He became the foremost authority on tafsir among the companions, and senior companions including 'Umar would seat him in their assemblies despite his youth.",
      "He was about thirteen when the Prophet ﷺ died, but he had already memorised much of his guidance. He went on to teach a generation of tabi'in — the foundation of classical tafsir."
    ),
  },
  {
    id: "ibn-umar",
    title: "'Abdullah ibn 'Umar (RA)",
    description: "Son of 'Umar, devoted follower of the Sunnah down to the smallest detail.",
    category: "Sahaba",
    readTime: "3 min",
    content: p(
      "Ibn 'Umar (RA) embraced Islam as a child with his father. He was famous among the companions for his strict imitation of the Prophet ﷺ — even resting his camel where the Prophet's camel had rested.",
      "He narrated over a thousand ahadith. He refused all positions of governance during the civil strife and died as one of the last great companions in Makkah."
    ),
  },
  {
    id: "ibn-amr",
    title: "'Abdullah ibn 'Amr ibn al-'As (RA)",
    description: "The companion who wrote down everything he heard from the Prophet ﷺ in his Sahifah Sadiqah.",
    category: "Sahaba",
    readTime: "3 min",
    content: p(
      "'Abdullah ibn 'Amr ibn al-'As (RA) was a devout young companion who asked the Prophet ﷺ for permission to write down everything he said. The Prophet ﷺ permitted him, saying: 'Write, for by the One in whose hand is my soul, nothing comes out of it except truth.'",
      "His written collection, al-Sahifah al-Sadiqah, was an early documented body of hadith. He fasted continuously and stood in prayer at night until the Prophet ﷺ moderated him to the fast of Dawud (AS)."
    ),
  },
  {
    id: "abu-hurayrah",
    title: "Abu Hurayrah (RA)",
    description: "The greatest narrator of hadith, who devoted himself to the company of the Prophet ﷺ.",
    category: "Sahaba",
    readTime: "4 min",
    content: p(
      "Abu Hurayrah (RA) embraced Islam in the seventh year of Hijrah and dedicated himself entirely to the company of the Prophet ﷺ for the few years that remained. He lived in poverty on the Suffah, often binding stones to his stomach from hunger, that he might miss no gathering.",
      "The Prophet ﷺ once spread his cloak and asked him to gather it to himself; from that day, he said, he never forgot anything he heard. He narrated more ahadith than any other companion — over 5,000.",
      "He served as governor of Bahrain under 'Umar and lived a life of humility, charity, and continual remembrance."
    ),
  },
  {
    id: "anas",
    title: "Anas ibn Malik (RA)",
    description: "The personal servant of the Prophet ﷺ for ten years, who never heard a word of complaint from him.",
    category: "Sahaba",
    readTime: "3 min",
    content: p(
      "Anas ibn Malik (RA) was given by his mother Umm Sulaym to serve the Prophet ﷺ when he was about ten years old. He served him for ten years and said: 'By Allah, he never said to me of anything I did, Why did you do that? — nor of anything I left, Why did you not do that?'",
      "The Prophet ﷺ prayed for him to be blessed in wealth and children and to enter Paradise. He lived a long life, narrating widely, and saw his progeny multiply."
    ),
  },
  {
    id: "muawiyah",
    title: "Mu'awiyah ibn Abi Sufyan (RA)",
    description: "Scribe of the Revelation, governor of Sham, and founder of the Umayyad Caliphate.",
    category: "Sahaba",
    readTime: "3 min",
    content: p(
      "Mu'awiyah (RA) embraced Islam at the conquest of Makkah and became one of the scribes of the Revelation. The Prophet ﷺ prayed for him: 'O Allah, teach him the Book and protect him from punishment.'",
      "He served as governor of Sham for around twenty years, then as Caliph for nearly twenty more — during which time the Muslims reached as far as North Africa and laid the first siege of Constantinople."
    ),
  },
  {
    id: "amr-as",
    title: "'Amr ibn al-'As (RA)",
    description: "Brilliant strategist and conqueror of Egypt.",
    category: "Sahaba",
    readTime: "3 min",
    content: p(
      "'Amr ibn al-'As (RA) embraced Islam shortly before the conquest of Makkah, alongside Khalid ibn al-Walid. The Prophet ﷺ said of him: '`Amr has accepted Islam.'",
      "He is known above all for the conquest of Egypt during the caliphate of 'Umar — a campaign of patience, diplomacy, and tactical genius. He governed Egypt and laid the foundations of Fustat."
    ),
  },
  {
    id: "salman",
    title: "Salman al-Farisi (RA)",
    description: "The Persian seeker who travelled the world looking for the final prophet, until he found him in Madinah.",
    category: "Sahaba",
    readTime: "5 min",
    content: p(
      "Salman al-Farisi (RA) was born into a noble family of Persia, raised as a fire-worshipper. After encountering Christian monks who told him of a coming prophet, he travelled from monastery to monastery, serving each scholar until his death, and being directed onward.",
      "He was sold into slavery and brought to Madinah, where he recognised the signs of prophethood the monks had described — the seal between the shoulders, accepting gifts but not charity.",
      "He proposed digging a trench around Madinah at the Battle of the Khandaq, a Persian tactic that saved the city. The Prophet ﷺ said: 'Salman is from us, the family of the Household.'",
      "He served as governor of Mada'in but lived in such humility that his entire estate at his death was worth a few dirhams."
    ),
  },
  {
    id: "abu-dharr",
    title: "Abu Dharr al-Ghifari (RA)",
    description: "An ascetic of the desert who walked alone, lived alone, and died alone — and entered Paradise alone.",
    category: "Sahaba",
    readTime: "4 min",
    content: p(
      "Abu Dharr (RA) was among the earliest believers, the fifth or sixth to embrace Islam. He returned to his tribe of Ghifar and called them to Islam — and they were among the first tribes to accept him.",
      "He was famed for blunt speech, ascetic living, and uncompromising honesty. The Prophet ﷺ said: 'The earth has not carried, nor has the sky shaded, anyone more truthful than Abu Dharr.'",
      "Exiled to al-Rabadhah, he died in the desert with only his wife and a few companions — fulfilling the Prophet's prediction that he would walk alone, die alone, and be raised alone."
    ),
  },
  {
    id: "miqdad",
    title: "Al-Miqdad ibn al-Aswad (RA)",
    description: "The mounted knight of the Prophet ﷺ who spoke up at Badr with words that delighted his heart.",
    category: "Sahaba",
    readTime: "3 min",
    content: p(
      "Al-Miqdad (RA) was among the earliest Muslims and one of only a few mounted men at Badr. When the Prophet ﷺ consulted his companions about facing Quraysh, al-Miqdad said: 'O Messenger of Allah, go forward to what Allah has shown you. We are with you. By Allah, we will not say to you what Bani Isra'il said to Musa: Go you and your Lord and fight; we are sitting here. Rather, go you and your Lord and fight; we are with you, fighting.'",
      "The face of the Prophet ﷺ glowed at his words."
    ),
  },
  {
    id: "ammar",
    title: "'Ammar ibn Yasir (RA)",
    description: "Son of the first martyr; the Prophet ﷺ said of him that the rebellious party would kill him.",
    category: "Sahaba",
    readTime: "3 min",
    content: p(
      "'Ammar (RA), his father Yasir, and his mother Sumayyah were among the earliest Muslims and among those most severely tortured. Sumayyah was killed by Abu Jahl — the first martyr in Islam.",
      "The Prophet ﷺ said as he passed them under torture: 'Patience, family of Yasir; your appointed place is Paradise.'",
      "'Ammar fought in all the great battles. The Prophet ﷺ said of him: 'The transgressing party will kill 'Ammar' — a prophecy fulfilled at Siffin, where he was killed at the age of over ninety."
    ),
  },
  {
    id: "suhayb",
    title: "Suhayb al-Rumi (RA)",
    description: "He bought his Hijrah with all of his wealth and earned the title 'the trader who profited.'",
    category: "Sahaba",
    readTime: "3 min",
    content: p(
      "Suhayb (RA) was raised among the Romans after being captured as a child, then bought and freed in Makkah. He embraced Islam early.",
      "When he set out for the Hijrah, Quraysh blocked his path and said: 'You came to us poor and grew rich among us; we will not let you take your wealth away.' He told them where his wealth was buried, and they let him go. The Prophet ﷺ greeted him in Madinah saying: 'The trade has profited, O Abu Yahya! The trade has profited!' — and Surah al-Baqarah verse 207 was revealed."
    ),
  },
  {
    id: "khabbab",
    title: "Khabbab ibn al-Aratt (RA)",
    description: "Tortured on burning coals, he showed the Prophet ﷺ the scars on his back.",
    category: "Sahaba",
    readTime: "3 min",
    content: p(
      "Khabbab (RA) was an early Muslim, a blacksmith by trade. His owners tortured him by laying him on burning coals until his back was scarred for life.",
      "He once came to the Prophet ﷺ as he sat in the shade of the Ka'bah and complained of the persecution. The Prophet ﷺ replied: 'Those before you would have a saw placed on their heads and be sawn in two — and it would not turn them from their religion. By Allah, this matter will be perfected, until a rider will travel from Sana'a to Hadramaut fearing none but Allah — but you are hasty.'"
    ),
  },
  {
    id: "musab",
    title: "Mus'ab ibn 'Umayr (RA)",
    description: "The pampered noble of Makkah who became Islam's first ambassador and died as a martyr at Uhud.",
    category: "Sahaba",
    readTime: "4 min",
    content: p(
      "Mus'ab ibn 'Umayr (RA) was the most pampered youth of Makkah, dressed in the finest garments. When his mother learned he had embraced Islam, she cut off his support and imprisoned him. He emerged transformed — pale, simply dressed, but utterly content.",
      "The Prophet ﷺ sent him to Madinah as the first ambassador of Islam, where through his gentle teaching the city was prepared to receive the Prophet ﷺ.",
      "He carried the banner at Uhud and was killed defending the Prophet ﷺ. When his body was found, his shroud was so short that if it covered his head it exposed his feet, and if it covered his feet it exposed his head. The Prophet ﷺ wept and ordered his head covered and his feet wrapped in idhkhir grass."
    ),
  },
  {
    id: "saad-muadh",
    title: "Sa'd ibn Mu'adh (RA)",
    description: "The Ansari leader for whose death the Throne of the Most Merciful shook.",
    category: "Sahaba",
    readTime: "3 min",
    content: p(
      "Sa'd ibn Mu'adh (RA) was the chief of the Aws of Madinah. Through his acceptance of Islam — and his command to his tribe — the entire Aws embraced Islam in a single day.",
      "He was wounded at the Battle of the Trench. He prayed: 'O Allah, if any war remains with Quraysh, keep me alive for it; and if You have ended the war, take me to You.'",
      "He passed away from his wounds. The Prophet ﷺ said: 'The Throne of the Most Merciful shook for the death of Sa'd ibn Mu'adh.'"
    ),
  },
  {
    id: "saad-ubadah",
    title: "Sa'd ibn 'Ubadah (RA)",
    description: "The chief of the Khazraj, famed for his generosity, whose home fed dozens daily.",
    category: "Sahaba",
    readTime: "2 min",
    content: p(
      "Sa'd ibn 'Ubadah (RA) was the chief of the Khazraj of Madinah and one of the noble Naqibs at the Pledge of 'Aqabah. His home was so famed for hospitality that the Suffah companions would be sent to him in groups, and his table never failed."
    ),
  },
  {
    id: "ubayy",
    title: "Ubayy ibn Ka'b (RA)",
    description: "Sayyid al-Qurra' — Master of the Reciters — to whom the Prophet ﷺ recited the Qur'an by Allah's command.",
    category: "Sahaba",
    readTime: "3 min",
    content: p(
      "Ubayy ibn Ka'b (RA) was an Ansari scholar who memorised the Qur'an in the lifetime of the Prophet ﷺ. The Prophet ﷺ once said: 'Allah has commanded me to recite to you the Qur'an,' and Ubayy wept.",
      "He was a primary teacher of recitation, and 'Umar called him 'the master of the Muslims.'"
    ),
  },
  {
    id: "zayd-thabit",
    title: "Zayd ibn Thabit (RA)",
    description: "The young scribe of the Revelation entrusted by Abu Bakr with compiling the Mushaf.",
    category: "Sahaba",
    readTime: "3 min",
    content: p(
      "Zayd ibn Thabit (RA) was an Ansari boy who came to the Prophet ﷺ at the time of Badr offering to fight, but was sent back for his youth. He memorised what was revealed and learned Hebrew and Syriac at the Prophet's instruction.",
      "After the Yamamah battles in which many Qur'an reciters were martyred, Abu Bakr — at 'Umar's urging — entrusted Zayd with the great task of gathering the Qur'an into a single book. Later, 'Uthman entrusted him with the standardisation as well."
    ),
  },
  {
    id: "zayd-haritha",
    title: "Zayd ibn Harithah (RA)",
    description: "The freed slave whom the Prophet ﷺ called 'son,' and the only companion named in the Qur'an.",
    category: "Sahaba",
    readTime: "3 min",
    content: p(
      "Zayd ibn Harithah (RA) was captured as a boy and sold into slavery. He was given to Khadijah, who gave him to the Prophet ﷺ. When his family found him, the Prophet ﷺ gave him the choice — and Zayd chose to remain.",
      "The Prophet ﷺ freed him and announced his adoption — until adoption with renaming was abrogated by Allah. Zayd is the only companion mentioned by name in the Qur'an (Al-Ahzab 33:37).",
      "He led many expeditions and was martyred at Mu'tah at the head of the army."
    ),
  },
  {
    id: "usama",
    title: "Usamah ibn Zayd (RA)",
    description: "The 'beloved son of the beloved' — appointed by the Prophet ﷺ to lead the army at age eighteen.",
    category: "Sahaba",
    readTime: "3 min",
    content: p(
      "Usamah ibn Zayd (RA), son of Zayd ibn Harithah, was raised in the Prophet's household. The Prophet ﷺ called him and al-Hasan his 'two beloveds.'",
      "In his final illness, the Prophet ﷺ appointed Usamah — only eighteen years old — to lead an army to the borders of Sham. After the Prophet's death, Abu Bakr insisted the expedition proceed, despite the turmoil, saying he would not undo what the Prophet ﷺ had decreed. The expedition succeeded and stabilised the frontier."
    ),
  },
  {
    id: "abu-ayyub",
    title: "Abu Ayyub al-Ansari (RA)",
    description: "The Ansari who hosted the Prophet ﷺ in Madinah, and died fighting at the walls of Constantinople.",
    category: "Sahaba",
    readTime: "3 min",
    content: p(
      "Abu Ayyub al-Ansari (RA) was the Ansari at whose home the Prophet's camel knelt when he arrived in Madinah. The Prophet ﷺ stayed with him until the mosque and his apartments were built.",
      "He participated in every battle. In his old age he marched with the army to the walls of Constantinople and was buried there, where his grave remains a known site to this day."
    ),
  },
  {
    id: "abu-talha",
    title: "Abu Talha al-Ansari (RA)",
    description: "Champion archer who shielded the Prophet ﷺ at Uhud, and gave his most beloved garden in charity.",
    category: "Sahaba",
    readTime: "3 min",
    content: p(
      "Abu Talha (RA) was a renowned archer of the Ansar, the husband of Umm Sulaym. At Uhud he stood before the Prophet ﷺ shielding him with his body and emptying his quivers.",
      "When the verse 'You will never attain righteousness until you spend from that which you love' was revealed, he gave away his most beloved garden, Bayruha, as charity in the path of Allah."
    ),
  },
  {
    id: "umm-sulaym",
    title: "Umm Sulaym bint Milhan (RA)",
    description: "Mother of Anas, who took Islam as her dowry and bore loss with breathtaking faith.",
    category: "Sahaba",
    readTime: "3 min",
    content: p(
      "Umm Sulaym (RA) embraced Islam early. When Abu Talha proposed marriage, she said: 'Your dowry is that you embrace Islam.' He did, and the Prophet ﷺ called it 'the most honourable dowry he had ever heard of.'",
      "When her young son died, she prepared dinner for Abu Talha before telling him, then asked: 'If a family lent something and were asked to return it, would they refuse?' Then she told him. He went to the Prophet ﷺ, who prayed for them — and they were blessed with another son."
    ),
  },
  {
    id: "umm-salamah",
    title: "Umm Salamah (RA)",
    description: "Mother of the Believers, whose wisdom guided the Prophet ﷺ at the Treaty of Hudaybiyyah.",
    category: "Sahaba",
    readTime: "3 min",
    content: p(
      "Umm Salamah (RA) migrated to Abyssinia, then to Madinah after enduring great hardship — separated from her husband Abu Salamah and her young son for a time. After Abu Salamah's death, the Prophet ﷺ married her.",
      "At Hudaybiyyah, when the companions hesitated to shave their heads and slaughter, she advised the Prophet ﷺ to do it himself first, without speaking — and the companions immediately followed. Her counsel preserved the moment."
    ),
  },
  {
    id: "hafsa",
    title: "Hafsah bint 'Umar (RA)",
    description: "Mother of the Believers and the keeper of the first compiled Mushaf.",
    category: "Sahaba",
    readTime: "2 min",
    content: p(
      "Hafsah (RA), daughter of 'Umar, was widowed early and married to the Prophet ﷺ. She was known for her devotion to fasting and prayer.",
      "After the Qur'an was first compiled in the time of Abu Bakr, the Mushaf was kept with her — the source from which 'Uthman's standardised copies were later made."
    ),
  },
  {
    id: "asma",
    title: "Asma' bint Abi Bakr (RA)",
    description: "Dhat al-Nitaqayn — Possessor of Two Belts — who carried food to the cave of the Hijrah.",
    category: "Sahaba",
    readTime: "3 min",
    content: p(
      "Asma' (RA), daughter of Abu Bakr and wife of al-Zubayr, brought food to her father and the Prophet ﷺ in the cave of Thawr during the Hijrah. Having nothing to tie the bundle, she tore her belt in two — earning the title Dhat al-Nitaqayn.",
      "She was the mother of 'Abdullah ibn al-Zubayr and lived to over a hundred, witnessing his death with patience and dignity."
    ),
  },
  {
    id: "sumayyah",
    title: "Sumayyah bint Khayyat (RA)",
    description: "The first martyr of Islam, killed by Abu Jahl for refusing to renounce her faith.",
    category: "Sahaba",
    readTime: "2 min",
    content: p(
      "Sumayyah (RA), the mother of 'Ammar, was an aged slave-woman of Bani Makhzum. She, her husband Yasir, and her son were tortured for their faith.",
      "Abu Jahl killed her with a spear for her refusal to renounce Islam — making her the first martyr in the history of Islam."
    ),
  },
  {
    id: "khansa",
    title: "Al-Khansa' bint 'Amr (RA)",
    description: "The poetess of Arabia who praised Allah when all four of her sons were martyred at Qadisiyyah.",
    category: "Sahaba",
    readTime: "3 min",
    content: p(
      "Al-Khansa' (RA) was the most celebrated woman poet of the Arabs. Before Islam she had wept for years over her brother Sakhr.",
      "After embracing Islam, she sent her four sons into the battle of Qadisiyyah with a stirring exhortation to patience and martyrdom. When word came that all four had been killed, she said: 'Praise be to Allah who has honoured me with their martyrdom. I hope my Lord will join me with them in the abode of His mercy.'"
    ),
  },
  {
    id: "nusaybah",
    title: "Nusaybah bint Ka'b — Umm 'Umarah (RA)",
    description: "The Ansari woman who fought beside the Prophet ﷺ at Uhud and shielded him with her own body.",
    category: "Sahaba",
    readTime: "3 min",
    content: p(
      "Nusaybah (RA), known as Umm 'Umarah, was an Ansari woman who came to Uhud to bring water and tend the wounded. When the Muslims were scattered, she drew her sword and fought in defence of the Prophet ﷺ, taking many wounds.",
      "The Prophet ﷺ said: 'Wherever I turned, on right or left, on the day of Uhud, I saw her fighting in my defence.' She fought also in the Ridda wars and was wounded at al-Yamamah."
    ),
  },
  {
    id: "hasan-husayn",
    title: "Al-Hasan and al-Husayn (RA)",
    description: "The two beloveds of the Prophet ﷺ, masters of the youth of Paradise.",
    category: "Sahaba",
    readTime: "4 min",
    content: p(
      "Al-Hasan and al-Husayn (RA), sons of 'Ali and Fatimah, were the grandchildren of the Prophet ﷺ. He carried them on his shoulders, kissed them, and lengthened his prostration when they climbed onto his back. He said: 'They are the masters of the youth of the people of Paradise.'",
      "Al-Hasan, after a brief Caliphate, surrendered authority to Mu'awiyah to spare Muslim blood — fulfilling the Prophet's prediction that Allah would reconcile through him 'two great parties of the Muslims.' Al-Husayn was martyred at Karbala, refusing to give allegiance to a tyrant — an event that has shaped Muslim memory ever since."
    ),
  },
  {
    id: "abu-musa",
    title: "Abu Musa al-Ash'ari (RA)",
    description: "Beautiful reciter of the Qur'an, judge, and governor of Basra and Kufa.",
    category: "Sahaba",
    readTime: "3 min",
    content: p(
      "Abu Musa (RA) was famed for the beauty of his recitation. The Prophet ﷺ said to him: 'You have been given a flute from the flutes of the family of Dawud.'",
      "He served as governor and judge under 'Umar and 'Uthman, and his letters to 'Umar on judicial procedure became foundational texts in Islamic jurisprudence."
    ),
  },
  {
    id: "hudhayfah",
    title: "Hudhayfah ibn al-Yaman (RA)",
    description: "The keeper of the Prophet's secret, entrusted with the names of the hypocrites.",
    category: "Sahaba",
    readTime: "3 min",
    content: p(
      "Hudhayfah (RA) was entrusted by the Prophet ﷺ with the names of the hypocrites. 'Umar himself would ask Hudhayfah whether he was named, and Hudhayfah would say only: 'No, but I will not clear anyone after you.'",
      "He was sent on the most dangerous reconnaissance at the Battle of the Trench, slipping into the camp of Quraysh on a freezing night and returning with intelligence that would lead to their withdrawal."
    ),
  },
  {
    id: "abbas",
    title: "Al-'Abbas ibn 'Abd al-Muttalib (RA)",
    description: "The uncle of the Prophet ﷺ, captured at Badr, later a pillar of the early Caliphate.",
    category: "Sahaba",
    readTime: "3 min",
    content: p(
      "Al-'Abbas (RA), uncle of the Prophet ﷺ, was captured at Badr and ransomed himself and others. He embraced Islam openly before the conquest of Makkah.",
      "He stood beside the Prophet ﷺ at Hunayn when the army wavered, calling out the believers in his powerful voice. 'Umar would later seek the rain through his supplication, saying: 'O Allah, we used to seek rain through our Prophet, and now we seek it through the uncle of our Prophet.'"
    ),
  },
];

export const getStoriesByCategory = (cat: StoryCategory) =>
  stories.filter((s) => s.category === cat);

export const getStoryById = (id: string) => stories.find((s) => s.id === id);
