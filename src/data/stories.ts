export type StoryCategory = "Prophets" | "Sahaba" | "Prophet Muhammad";

export interface Story {
  id: string;
  title: string;
  description: string;
  category: StoryCategory;
  readTime: string;
  content: string[];
}

export const categoryMeta: Record<StoryCategory, { label: string; arabic: string; blurb: string }> = {
  Prophets: {
    label: "Prophets (AS)",
    arabic: "الأنبياء",
    blurb: "Stories of the messengers mentioned in the Quran",
  },
  Sahaba: {
    label: "Sahaba",
    arabic: "الصحابة",
    blurb: "Companions of the Prophet ﷺ",
  },
  "Prophet Muhammad": {
    label: "Prophet Muhammad ﷺ",
    arabic: "السيرة",
    blurb: "Key moments from the life of the final Messenger",
  },
};

export const stories: Story[] = [
  // ===== Prophets =====
  {
    id: "adam",
    title: "Prophet Adam (AS) — The First Human",
    description: "The creation of the first man, his life in Paradise, the test, and his descent to Earth as the father of humanity.",
    category: "Prophets",
    readTime: "6 min",
    content: [
      "Allah announced to the angels: 'I am going to place a successor (Khalifah) on the earth.' The angels questioned, 'Will You place upon it one who causes corruption and sheds blood, while we glorify You?' Allah replied, 'Indeed, I know that which you do not know.'",
      "Allah created Adam (AS) from clay gathered from every corner of the earth — which is why his descendants vary in colour, character, and disposition. He shaped him with His own hand and breathed into him from His spirit. Then He taught Adam the names of all things.",
      "Allah commanded the angels to prostrate to Adam in honour. They all prostrated except Iblis, who refused out of arrogance, saying, 'I am better than him. You created me from fire and created him from clay.' For this disobedience Iblis was cursed and expelled, but he asked for respite until the Day of Judgement to mislead Adam's children — and Allah granted it as a test.",
      "Adam was placed in Paradise with his wife Hawwa (Eve), and they were told to eat freely from anywhere they wished, except from one tree. Iblis whispered to them until they ate from it. Immediately their covering fell away and they realised their mistake. They turned to Allah saying: 'Our Lord, we have wronged ourselves, and if You do not forgive us and have mercy upon us, we will surely be among the losers.'",
      "Allah forgave them but sent them down to Earth to live, work, and worship. Adam (AS) became the first Prophet, teaching his children to worship Allah alone. His story reminds us that mistakes are part of being human — what matters is sincere repentance and returning to Allah.",
    ],
  },
  {
    id: "nuh",
    title: "Prophet Nuh (AS) — The Great Flood",
    description: "950 years of patient calling, a mocking people, and the ark that carried the believers through Allah's punishment.",
    category: "Prophets",
    readTime: "7 min",
    content: [
      "Generations after Adam, people began worshipping idols named after righteous men of the past. Allah sent Nuh (AS) to call them back to the worship of the One God. He preached for 950 years — by night and by day, in public and in secret — but only a small handful believed.",
      "His people mocked him relentlessly. They covered their ears, pulled their cloaks over their heads, and grew more arrogant with every passing year. The leaders told the masses: 'Do not abandon your gods.' Even Nuh's own son and his wife rejected him.",
      "Finally, Allah revealed to Nuh: 'No one from your people will believe except those who have already believed.' He instructed him to build a great ark on dry land, far from any sea. As Nuh hammered the timbers, his people walked by laughing.",
      "When the ark was complete, Allah commanded Nuh to take aboard a pair of every kind of animal, his family of believers, and those who had accepted faith. Then the sky burst open and water gushed from the ground. The flood rose higher than the mountains.",
      "Nuh called out to his son who stood on a hill: 'O my son, embark with us and be not with the disbelievers!' The son replied, 'I will take refuge on a mountain that will protect me from the water.' Nuh said, 'There is no protector today from the decree of Allah.' A wave came between them, and his son was among the drowned.",
      "When the waters receded, the ark settled on Mount Judi. Nuh and the believers descended to begin life anew. The story teaches us that guidance is from Allah alone, that family ties cannot save a person without faith, and that patience in calling to truth — even for centuries — is never wasted.",
    ],
  },
  {
    id: "ibrahim",
    title: "Prophet Ibrahim (AS) — The Friend of Allah",
    description: "From smashing idols to being thrown in fire, from building the Ka'bah to the ultimate test of sacrifice.",
    category: "Prophets",
    readTime: "8 min",
    content: [
      "Ibrahim (AS) grew up in a society drowning in idolatry. Even his own father Azar carved idols and sold them. From a young age, Ibrahim looked at the stars, the moon, and the sun, and reasoned that none of them — things that rise and set — could be his Lord. His heart turned to the One who created them all.",
      "He gently tried to reason with his father: 'O my father, why do you worship that which does not hear, does not see, and will not benefit you at all?' His father threatened to stone him.",
      "One day, while the people were away at a festival, Ibrahim entered the temple and smashed every idol except the largest, hanging the axe on its shoulder. When the people returned in fury, he said innocently, 'Rather, this — the largest of them — did it. So ask them, if they can speak.' Caught in their own absurdity, they fell silent.",
      "Enraged, they built a massive fire and catapulted Ibrahim into it. As he flew through the air, the angel Jibreel offered help. Ibrahim replied, 'From you, I need nothing. Allah is sufficient for me.' Allah commanded the fire: 'O fire, be coolness and safety upon Ibrahim.' He walked out untouched.",
      "Ibrahim later journeyed with his wife Hajar and infant son Isma'il to a barren valley in Makkah. He left them there by Allah's command. When their water ran out, Hajar ran seven times between the hills of Safa and Marwah searching for help — an act commemorated in Hajj forever. Allah caused the well of Zamzam to gush forth at the feet of baby Isma'il.",
      "Years later, Ibrahim saw in a dream that he was sacrificing his beloved son. He told Isma'il, who replied with stunning faith: 'O my father, do as you are commanded. You will find me, if Allah wills, of the patient.' As Ibrahim laid him down and raised the blade, Allah called out and replaced Isma'il with a magnificent ram. This is remembered every year on Eid al-Adha.",
      "Together, father and son raised the foundations of the Ka'bah, praying: 'Our Lord, accept this from us. Indeed You are the All-Hearing, the All-Knowing.' Ibrahim (AS) is called Khalilullah — the friend of Allah — and his legacy of pure monotheism lives on in every believer.",
    ],
  },
  {
    id: "yusuf",
    title: "Prophet Yusuf (AS) — From the Well to the Throne",
    description: "Betrayed by his brothers, sold into slavery, imprisoned unjustly — and raised by Allah to rule Egypt.",
    category: "Prophets",
    readTime: "10 min",
    content: [
      "Yusuf (AS) was the beloved son of Prophet Ya'qub (AS). As a young boy, he saw a dream: eleven stars, the sun, and the moon prostrating to him. His father wisely told him: 'Do not relate your vision to your brothers, lest they plan against you.'",
      "His brothers, jealous of their father's affection for Yusuf, plotted against him. They convinced Ya'qub to let Yusuf join them in the fields, then threw him into a deep well and returned home with his shirt stained in false blood, claiming a wolf had eaten him. Ya'qub, knowing better, said, 'Beautiful patience — and Allah is the One whose help is sought.'",
      "A passing caravan pulled Yusuf out and sold him into slavery in Egypt. He was bought by a high official, Al-Aziz, whose wife later tried to seduce him. Yusuf refused, saying, 'I seek refuge in Allah.' Despite his innocence, he was thrown into prison.",
      "In prison, he interpreted the dreams of two fellow prisoners. Years later, when the King of Egypt had a troubling dream of seven fat cows and seven lean ones, Yusuf was remembered. He interpreted it: seven years of plenty followed by seven years of famine. The King was so impressed that he made Yusuf the minister in charge of the kingdom's storehouses.",
      "When the famine struck, Yusuf's brothers came from Canaan to buy grain — not recognising the powerful minister before them. Yusuf eventually revealed himself with the words: 'I am Yusuf, and this is my brother. Allah has certainly favoured us.' His brothers begged for forgiveness, and he replied, 'No blame upon you today. May Allah forgive you, and He is the Most Merciful of the merciful.'",
      "Yusuf sent his shirt back to his father; when it was placed on Ya'qub's face, his sight — lost from years of weeping — was restored. The whole family was reunited in Egypt, and as they entered, they prostrated to Yusuf. He said, 'O my father, this is the interpretation of my dream of long ago. My Lord has made it reality.'",
      "The story of Yusuf is called the most beautiful of stories in the Quran. It teaches sabr (patience), the danger of jealousy, the rewards of chastity and trust in Allah, and the boundless mercy of forgiveness.",
    ],
  },
  {
    id: "musa",
    title: "Prophet Musa (AS) — The Pharaoh and the Sea",
    description: "Raised in Pharaoh's palace, called by Allah at the burning bush, and parting the sea to free his people.",
    category: "Prophets",
    readTime: "9 min",
    content: [
      "Pharaoh ruled Egypt with absolute tyranny, claiming divinity itself. Fearing a prophecy that an Israelite boy would end his rule, he ordered every newborn boy of Bani Isra'il to be killed. When Musa was born, Allah inspired his mother to place him in a basket and set him on the Nile.",
      "The basket drifted to Pharaoh's own palace, where his wife Asiya — a secret believer — found the child and convinced Pharaoh to keep him. Musa grew up in the very household that sought to destroy him, nursed by his own mother who was hired as a wet nurse without anyone realising.",
      "As a young man, Musa intervened in a fight between an Israelite and an Egyptian, accidentally killing the Egyptian with a single blow. Fearing punishment, he fled to the land of Madyan. There he helped two women water their flock and was given shelter by their father, the righteous Shu'ayb, marrying one of the daughters and tending sheep for ten years.",
      "While returning to Egypt with his family, Musa saw a fire on Mount Tur. Approaching it, he heard a voice: 'O Musa, indeed I am your Lord.' Allah gave him two signs: his staff that turned into a serpent, and his hand that shone brilliantly white. He was commanded to go to Pharaoh and call him to the worship of Allah.",
      "Musa, joined by his brother Harun, confronted Pharaoh. Pharaoh gathered his greatest magicians to defeat Musa, but when they cast their ropes, Musa threw down his staff and it swallowed all their illusions. The magicians themselves fell into prostration: 'We believe in the Lord of Musa and Harun.' Pharaoh had them tortured and killed for their faith.",
      "Plague after plague struck Egypt — locusts, lice, frogs, blood — yet Pharaoh remained defiant. Finally Allah commanded Musa to lead Bani Isra'il out of Egypt by night. Pharaoh pursued with his entire army. Trapped between the sea and the chariots, the people panicked. Musa said with absolute certainty: 'No! Indeed, with me is my Lord; He will guide me.'",
      "Allah commanded Musa to strike the sea with his staff. The waters split into towering walls, and the people walked across on dry ground. When Pharaoh and his army followed, the waters crashed down upon them. As he drowned, Pharaoh cried, 'I believe!' — but it was too late. His body was preserved as a sign for those who come after.",
      "Musa's story is mentioned more than any other prophet's in the Quran — a testament to standing firm against tyranny with full reliance upon Allah.",
    ],
  },

  // ===== Sahaba =====
  {
    id: "abu-bakr",
    title: "Abu Bakr As-Siddiq (RA) — The Truthful One",
    description: "The first man to embrace Islam, the closest friend of the Prophet ﷺ, and the first Caliph of the Muslims.",
    category: "Sahaba",
    readTime: "7 min",
    content: [
      "Abu Bakr (RA) was a wealthy and respected merchant of Quraysh, known throughout Makkah for his honesty, gentle nature, and deep knowledge of Arab lineages. He was a close friend of Muhammad ﷺ long before prophethood.",
      "When the Prophet ﷺ first shared his message privately, Abu Bakr accepted Islam without hesitation — the first free adult man to do so. The Prophet ﷺ said, 'I have not invited anyone to Islam except that he showed some hesitation, except Abu Bakr.'",
      "He earned the title 'As-Siddiq' (the truthful, the affirmer) on the night of Al-Isra wal-Mi'raj. When the Quraysh mocked the Prophet ﷺ for claiming to have travelled to Jerusalem and the heavens in a single night, they ran to Abu Bakr expecting him to deny it. He said simply: 'If he said it, then it is true. I believe him in matters greater than that — I believe him about revelation from the heavens.'",
      "Abu Bakr spent his entire fortune in the cause of Islam. He purchased and freed slaves who were being tortured for their faith — including Bilal ibn Rabah. When he was about to migrate to Madinah and was bringing all his wealth, the Prophet ﷺ asked, 'What have you left for your family?' Abu Bakr replied, 'I have left for them Allah and His Messenger.'",
      "He was the Prophet's ﷺ companion in the Cave of Thawr during the Hijrah. As enemies stood at the cave's mouth, Abu Bakr whispered in fear for the Prophet's life. The Prophet ﷺ comforted him with the words now preserved in the Quran: 'Do not grieve. Indeed Allah is with us.'",
      "When the Prophet ﷺ passed away, the Muslims were stunned. Umar (RA) drew his sword refusing to believe it. Abu Bakr stepped forward and recited: 'Muhammad is not but a messenger. Messengers have passed away before him. So if he was to die or be killed, would you turn back on your heels?' His calm words steadied the entire community.",
      "Elected as the first Caliph, he led the Muslims through the Wars of Apostasy and laid the foundation for the compilation of the Quran. He ruled for just over two years before passing away, and was buried beside the Prophet ﷺ. His life remains the gold standard of friendship, faith, and selfless service.",
    ],
  },
  {
    id: "umar",
    title: "Umar ibn al-Khattab (RA) — The Just Caliph",
    description: "Once the fiercest enemy of Islam, transformed by a single Surah into the second Caliph who shaped a global empire with justice.",
    category: "Sahaba",
    readTime: "7 min",
    content: [
      "Umar ibn al-Khattab (RA) was tall, powerful, and feared — a man of fierce loyalty to the traditions of Quraysh and an open enemy of Islam. He once set out from his home with his sword drawn, intending to kill the Prophet Muhammad ﷺ.",
      "On the way, he was told that his own sister Fatimah and her husband had secretly accepted Islam. Burning with rage, he stormed into their house and struck his sister. Seeing blood on her face, his heart softened. He demanded to see what they were reading. They had been reciting Surah Ta-Ha.",
      "As Umar read the verses, the words pierced his heart: 'Indeed, I am Allah. There is no deity except Me, so worship Me and establish prayer for My remembrance.' He said, 'Take me to Muhammad.' He went straight to the Prophet ﷺ and embraced Islam on the spot.",
      "His conversion was a turning point. The Muslims, who had worshipped in secret, now prayed openly at the Ka'bah. Ibn Mas'ud (RA) said, 'We were unable to pray at the Ka'bah until Umar accepted Islam.'",
      "After Abu Bakr's death, Umar became the second Caliph. Under his leadership, the Muslim state expanded across Persia, the Levant, Egypt, and beyond — yet he lived in extreme simplicity. He patched his own clothes, slept on the floor of the mosque, and walked the streets of Madinah at night to check on the welfare of his people.",
      "Once, during a famine, he refused to eat butter or meat, saying, 'How can I care for my people if I do not feel what they feel?' He carried sacks of flour on his own back to a starving widow when he heard her children crying.",
      "He established the Islamic calendar, organised the army registry, set up public treasuries, and instituted regular night patrols. The Prophet ﷺ had said of him: 'If there were to be a Prophet after me, it would have been Umar.' He was martyred while leading the Fajr prayer, struck by a Persian assassin, and was buried beside Abu Bakr and the Prophet ﷺ.",
    ],
  },
  {
    id: "bilal",
    title: "Bilal ibn Rabah (RA) — The First Muezzin",
    description: "An Abyssinian slave tortured for his faith, freed by Abu Bakr, and chosen to call the world to prayer from atop the Ka'bah.",
    category: "Sahaba",
    readTime: "6 min",
    content: [
      "Bilal ibn Rabah (RA) was born into slavery in Makkah, owned by Umayyah ibn Khalaf, one of the cruelest enemies of Islam. When Bilal heard of the Prophet ﷺ and accepted Islam in secret, his master discovered it and unleashed unimaginable torture upon him.",
      "Umayyah would drag Bilal out into the burning desert sand at midday, lay him on his back, and place a massive boulder on his chest. He demanded that Bilal renounce Islam and worship the idols Lat and Uzza. Through cracked lips, Bilal would only repeat one word: 'Ahad. Ahad.' (One. One.) — affirming the oneness of Allah.",
      "Abu Bakr (RA) passed by during one of these tortures. His heart was shattered. He immediately purchased Bilal at a high price and set him free for the sake of Allah. Bilal became one of the most beloved companions of the Prophet ﷺ.",
      "When the call to prayer (adhan) was prescribed, the Prophet ﷺ chose Bilal to be the first muezzin. His powerful, beautiful voice echoed across Madinah five times a day, calling the believers to stand before their Lord.",
      "On the day Makkah was conquered and the Ka'bah was cleansed of idols, the Prophet ﷺ asked Bilal — the formerly enslaved African — to climb on top of the Ka'bah and call the adhan. Some of the proud Quraysh muttered in disbelief that a former slave was given such an honour. But this was Islam: a religion that judges by taqwa (God-consciousness), not by colour or status.",
      "After the Prophet ﷺ passed away, Bilal could not bring himself to call the adhan in Madinah — every word reminded him too painfully of his beloved Messenger. He left for Sham. Years later, he visited Madinah, and the grandsons of the Prophet ﷺ, Hasan and Husayn, begged him to call the adhan one more time.",
      "When his voice rose over Madinah saying 'Ashhadu anna Muhammadan Rasulullah,' the entire city wept, remembering the days of the Prophet ﷺ. Bilal's life is a timeless reminder that Islam shattered the barriers of race and class fourteen centuries ago.",
    ],
  },
  {
    id: "khadijah",
    title: "Khadijah bint Khuwaylid (RA) — Mother of the Believers",
    description: "The first to believe, the strongest support — the noble lady who stood beside the Prophet ﷺ when no one else would.",
    category: "Sahaba",
    readTime: "7 min",
    content: [
      "Khadijah bint Khuwaylid (RA) was a noblewoman of Quraysh, a successful merchant known throughout Makkah for her intelligence, integrity, and generosity. She was called At-Tahirah — the Pure One — long before Islam.",
      "She hired a young man named Muhammad ﷺ, then 25, to lead her trade caravan to Syria. Her servant Maysarah returned amazed at his honesty, kindness, and the unusual signs that seemed to follow him. Khadijah, then 40, proposed marriage. He accepted, and theirs became one of the most loving partnerships in human history.",
      "For 15 years they lived together before the first revelation. When the Prophet ﷺ returned trembling from the Cave of Hira, having met the angel Jibreel for the first time, he rushed home crying, 'Cover me! Cover me!' Khadijah wrapped him in a cloak and listened.",
      "Her response is etched into Islamic history: 'By Allah, Allah will never disgrace you. You keep good relations with your kin, you help the poor and the destitute, you serve your guests generously, and you assist those struck by calamity.' She then took him to her cousin Waraqah ibn Nawfal, a learned Christian, who confirmed that this was the same angel sent to Musa (AS).",
      "Khadijah was the first person to accept Islam — before any man, woman, or child. She prayed beside the Prophet ﷺ when the entire world rejected him. She spent her vast wealth supporting the early Muslims through years of persecution and the brutal three-year boycott in the valley of Abu Talib, during which the Muslims ate leaves and faced near-starvation.",
      "She bore the Prophet ﷺ his children and was the only wife who shared his life until that point. When she passed away, the Prophet ﷺ called that year 'Aam al-Huzn' — the Year of Sorrow.",
      "Years later, whenever he heard her sister's voice, he would tremble — for it reminded him of Khadijah. When Aisha (RA) once expressed jealousy of an old woman, he replied: 'She believed in me when no one else did. She accepted Islam when people rejected me. And she helped and comforted me when there was no one else to lend me a helping hand.' Allah Himself sent her salaam through Jibreel and gave her the glad tidings of a palace in Paradise.",
    ],
  },

  // ===== Prophet Muhammad ﷺ =====
  {
    id: "first-revelation",
    title: "The First Revelation — Cave of Hira",
    description: "At 40 years of age, in the silence of a mountain cave, the Prophet ﷺ received the first words of the Quran: 'Read!'",
    category: "Prophet Muhammad",
    readTime: "6 min",
    content: [
      "By the age of 40, Muhammad ﷺ had become deeply troubled by the state of his society — the idol worship, the burying of baby girls, the oppression of the weak, the endless tribal feuds. He began withdrawing for long periods to a cave on Mount Hira, just outside Makkah, to reflect and worship the One God of his ancestor Ibrahim (AS).",
      "On a night in the month of Ramadan, as he sat alone in the cave, a presence filled the space. The angel Jibreel appeared in his true form and embraced him with overwhelming force, commanding: 'Read!' The Prophet ﷺ replied, 'I am not one who can read.'",
      "Jibreel embraced him a second time, releasing him and again commanding: 'Read!' Again the Prophet ﷺ replied, 'I am not one who can read.' A third time the angel embraced him with all his might, and then released him saying:",
      "'Read! In the name of your Lord who created — created man from a clinging clot. Read! And your Lord is the Most Generous — who taught by the pen, taught man that which he knew not.' (Surah Al-'Alaq, the very first verses of the Quran.)",
      "The Prophet ﷺ rushed down the mountain, his heart pounding violently. He reached his home and cried to Khadijah: 'Cover me! Cover me!' She wrapped him in a cloak until his fear subsided. He told her, 'I fear for myself.' She replied with words of unwavering certainty that comforted him deeply.",
      "Khadijah took him to her elderly cousin Waraqah ibn Nawfal, a learned Christian who had studied the previous scriptures. After hearing the account, Waraqah said: 'This is the same Namus (angel) who came to Musa. I wish I were young and could be alive when your people will turn you out.' The Prophet ﷺ asked, 'Will they drive me out?' Waraqah replied, 'Yes. No one has come with what you have come with except that he was met with hostility.'",
      "Thus began 23 years of revelation that would transform Arabia and shape the world. The first command — 'Read!' — set the tone for a religion built upon knowledge, reflection, and submission to the Most Generous Lord.",
    ],
  },
  {
    id: "hijrah",
    title: "The Hijrah — Migration to Madinah",
    description: "Hunted by assassins, hidden in the Cave of Thawr, the Prophet ﷺ and Abu Bakr migrated to begin a new chapter of Islam.",
    category: "Prophet Muhammad",
    readTime: "8 min",
    content: [
      "After 13 years of preaching in Makkah, the persecution against Muslims had grown unbearable. The leaders of Quraysh held a secret council and decided that one young man from each major tribe would simultaneously strike the Prophet ﷺ down — so that his blood would be spread among all the clans, and his family Banu Hashim would be unable to take revenge.",
      "Allah informed the Prophet ﷺ of the plot. He went to Abu Bakr (RA) and said, 'I have been given permission to migrate.' Abu Bakr asked, 'Companionship, O Messenger of Allah?' The Prophet ﷺ replied, 'Yes, companionship.' Abu Bakr wept with joy. He had been preparing two camels for months in anticipation of this moment.",
      "On the night of the planned assassination, the assassins surrounded the Prophet's ﷺ house. He instructed Ali (RA) to sleep in his bed wrapped in his green cloak. The Prophet ﷺ then walked out — Allah had cast a sleep over the assassins — and recited verses of Surah Ya-Sin, sprinkling dust as he passed. None of them saw him.",
      "He met Abu Bakr and the two slipped out of Makkah, heading south rather than north toward Madinah, to mislead any pursuers. They climbed Mount Thawr and hid in a cave. Quraysh placed a bounty of 100 camels on each of their heads — dead or alive.",
      "Trackers followed their trail right up to the mouth of the cave. Abu Bakr could see their feet. He whispered, 'O Messenger of Allah, if one of them merely looks down, he will see us.' The Prophet ﷺ replied calmly, 'O Abu Bakr, what do you think of two whose third is Allah?'",
      "Allah caused a spider to spin a web across the cave's mouth and a dove to lay eggs there, making the entrance look untouched for years. The trackers left. Allah preserved this moment in the Quran: 'Do not grieve. Indeed Allah is with us.'",
      "After three nights, they began the long journey to Yathrib — soon to be renamed Madinatun-Nabi (the City of the Prophet). When they arrived, the Ansar (helpers) of Madinah came out singing in joy. The Prophet ﷺ let his she-camel walk freely and built his mosque on the spot where she knelt.",
      "The Hijrah marks the beginning of the Islamic calendar — not because of a battle, a birth, or a victory, but because of a sacrifice for faith. It teaches that sometimes Allah commands us to leave behind everything familiar so that something far greater can be built.",
    ],
  },
  {
    id: "isra-miraj",
    title: "Al-Isra wal-Mi'raj — The Night Journey",
    description: "The Prophet ﷺ travelled from Makkah to Jerusalem and ascended through the seven heavens in a single miraculous night.",
    category: "Prophet Muhammad",
    readTime: "8 min",
    content: [
      "In the most difficult period of the Prophet's ﷺ life — after the death of his beloved wife Khadijah and his uncle Abu Talib, after being stoned and rejected at Ta'if — Allah honoured him with one of the greatest miracles ever granted to a human being.",
      "One night, as he slept near the Ka'bah, Jibreel came to him with a winged steed called Al-Buraq, whose every stride reached the horizon. They flew from Makkah to Masjid al-Aqsa in Jerusalem in moments. There, the Prophet ﷺ led all the previous Prophets — Ibrahim, Musa, 'Isa, and others — in prayer, signifying the completion of the prophetic line.",
      "Then began the ascension (Mi'raj). They rose through the seven heavens. At each level, the Prophet ﷺ met one of the great Prophets: Adam in the first heaven; 'Isa and Yahya in the second; Yusuf in the third; Idris in the fourth; Harun in the fifth; Musa in the sixth; and Ibrahim in the seventh, leaning against the Bayt al-Ma'mur — the heavenly Ka'bah where 70,000 angels enter daily and never return.",
      "He was shown Paradise and the Hellfire. He saw rivers of milk and honey, the spirits of the righteous, and the tortures awaiting the oppressors and the corrupt. Each scene was a lesson he would carry back to his people.",
      "Finally, the Prophet ﷺ ascended to the Sidrat al-Muntaha — the Lote Tree of the utmost boundary, beyond which no creation passes. There, in a place no human had ever reached, Allah spoke to him directly. Among the gifts given that night was the command of the five daily prayers.",
      "Originally Allah prescribed 50 prayers a day. Returning, the Prophet ﷺ passed Musa (AS), who told him: 'Your nation will not be able to bear this. Return to your Lord and ask Him to lighten it.' The Prophet ﷺ kept returning until the prayers were reduced to five — yet Allah declared they would carry the reward of fifty.",
      "At dawn the Prophet ﷺ returned to Makkah. When he told the Quraysh, they mocked him relentlessly and rushed to Abu Bakr, expecting he would deny his closest friend. Abu Bakr's reply earned him the title As-Siddiq forever: 'If he said it, then it is true.'",
      "The Night Journey is a reminder that after every period of hardship, Allah lifts the believer to heights beyond imagination. It also cemented the central place of Masjid al-Aqsa in the Muslim heart — a sacred site forever linked to our Prophet ﷺ.",
    ],
  },
  {
    id: "conquest-makkah",
    title: "The Conquest of Makkah — Mercy at Its Peak",
    description: "Returning to the city that drove him out, the Prophet ﷺ entered as a victor and forgave his greatest enemies.",
    category: "Prophet Muhammad",
    readTime: "7 min",
    content: [
      "Eight years after the Hijrah, the Treaty of Hudaybiyyah between the Muslims and Quraysh was broken when Quraysh's allies attacked an ally of the Muslims. The Prophet ﷺ quietly mobilised an army of 10,000 — the largest force Arabia had ever seen — and marched on Makkah.",
      "He moved with such secrecy that Quraysh had no idea of the army's size or direction until it was upon them. The Muslims camped outside Makkah and lit 10,000 separate fires that night. Abu Sufyan, the leader of Quraysh, was brought before the Prophet ﷺ and accepted Islam, sparing the city from bloodshed.",
      "The Prophet ﷺ entered Makkah with his head bowed so low in humility that his beard nearly touched his saddle. This was the city where he was born, where he was mocked, where his companions were tortured and killed, where his family was boycotted to the point of starvation. He could have taken any revenge he wished.",
      "He divided the army into four columns and gave strict instructions: no fighting except in self-defence. He entered the Ka'bah, which housed 360 idols, and personally smashed them while reciting: 'Truth has come and falsehood has perished. Indeed, falsehood is ever bound to perish.'",
      "Then he gathered the Quraysh — the very people who had hunted him for two decades. They stood trembling, awaiting their fate. He asked, 'O Quraysh, what do you think I will do with you?' They replied, 'Good. A noble brother and the son of a noble brother.'",
      "His response is one of the most beautiful sentences ever spoken: 'Go, for you are free.' (Idhhabu fa antum at-tulaqa.) He echoed the words of his brother Yusuf (AS): 'No blame upon you today. May Allah forgive you, and He is the Most Merciful of the merciful.'",
      "Even his fiercest enemies — Hind, who had eaten the liver of his beloved uncle Hamzah; Wahshi, who had killed Hamzah; Ikrimah, son of Abu Jahl — all came to accept Islam, and all were forgiven. Bilal climbed atop the Ka'bah and called the adhan, his voice declaring the oneness of Allah over a city now finally free of idols.",
      "The Conquest of Makkah is the high point of mercy in human history. It teaches that true strength is shown not in revenge but in forgiveness, and that Islam is, at its core, a religion of mercy: 'And We have not sent you, [O Muhammad], except as a mercy to the worlds.'",
    ],
  },
];

export const getStoryById = (id: string) => stories.find((s) => s.id === id);
export const getStoriesByCategory = (cat: StoryCategory) =>
  stories.filter((s) => s.category === cat);
