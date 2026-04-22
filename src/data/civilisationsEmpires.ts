import type { Story } from "./stories";

const p = (...paragraphs: string[]) => paragraphs;

// Islamic Civilisation and Empires — the Abbasid golden age, Andalusia, the Ottomans, and more.
// Sources: Hugh Kennedy, Marshall Hodgson, Caroline Finkel, Maria Rosa Menocal, classical chronicles.
export const civilisationsEmpiresStories: Story[] = [
  {
    id: "civ-abbasid-golden-age",
    title: "The Abbasid Golden Age — Baghdad, the Bayt al-Hikma and the Translation Movement",
    description:
      "The dynasty that built the Round City, sponsored the largest knowledge transfer in pre-modern history, and made Baghdad the intellectual capital of the world for two centuries.",
    category: "CivilisationsEmpires",
    readTime: "10 min",
    sections: {
      intro: p(
        "The Abbasid Caliphate (132–656 AH / 750–1258 CE) was founded by descendants of al-'Abbas, the uncle of the Prophet ﷺ, on the ruins of the Umayyad dynasty. They moved the capital eastward and, in 145 AH (762 CE), the second Abbasid caliph al-Mansur founded a new capital on the western bank of the Tigris.",
        "He called it Madinat al-Salam — the City of Peace — but the world knew it as Baghdad. Built as a circular city of three concentric walls with four gates pointing to Kufa, Basra, Khurasan and Damascus, it became, within fifty years, the largest and richest city on earth.",
      ),
      life: p(
        "The architect of the golden age was Harun al-Rashid (r. 170–193 AH / 786–809 CE) and his son al-Ma'mun (r. 198–218 AH / 813–833 CE). They presided over a state that stretched from North Africa to Central Asia, drew tax revenue greater than Tang China, and traded with everywhere from Scandinavia to Korea.",
        "The crown jewel was the Bayt al-Hikma — the House of Wisdom — a vast library and translation institute attached to the caliph's palace. The state paid translators by weight: a manuscript translated and authenticated received its weight in gold. Scholars from across the empire — Muslim, Christian, Jewish, Sabian — translated Greek, Persian, Sanskrit, Syriac and Pahlavi texts into Arabic.",
        "Within seventy years almost every surviving Greek scientific and philosophical text — Aristotle, Galen, Euclid, Ptolemy, Archimedes, Hippocrates — had been translated, often through Syriac intermediaries. Indian astronomy and mathematics (the decimal system) entered through Sanskrit. Persian administrative and literary works were Arabicised. The translation movement of Baghdad is, in scale and impact, the largest single act of cross-civilisational knowledge transfer the world has ever seen.",
        "But the Abbasids did not merely translate. They built. Al-Khwarizmi created algebra. Al-Kindi philosophised. The Banu Musa brothers wrote on engineering and pioneered ingenious mechanical devices. Hunayn ibn Ishaq translated Galen so well that his Arabic versions are now used to reconstruct lost Greek originals. Al-Tabari wrote his vast tafsir and history. Al-Razi (Rhazes) revolutionised medicine. Al-Farabi ('the Second Teacher' after Aristotle) wrote on logic, music and politics.",
        "Baghdad in 800 CE had paper mills (paper-making having been learned from Chinese prisoners of war at Talas in 134 AH/751 CE), a postal system that connected the empire in days, hospitals (bimaristan) with separate wards, exam-certified physicians, public baths, street lighting, and a bureaucracy whose records were kept in standardised Arabic. The first known free public hospitals in human history are an Abbasid creation.",
        "The decline came slowly. Civil war between al-Amin and al-Ma'mun in 198 AH damaged Baghdad. The introduction of Turkish slave-soldier units led to military coups by the late ninth century. The caliphs became puppets of Turkish, then Persian Buyid, then Seljuk masters. The Fatimid counter-caliphate in Egypt and the Andalusi Umayyad caliphate in Cordoba split the political world even as the cultural world remained one.",
        "The end came in Safar 656 AH (1258 CE). Hulagu Khan's Mongol army sacked Baghdad after a brief siege. The last Abbasid caliph al-Musta'sim was rolled in a carpet and trampled by Mongol horses (so that Mongol blood-prohibitions on shedding royal blood would not be violated). The Tigris ran black with the ink of books thrown into it from the libraries; another tributary ran red with blood. The City of Peace fell.",
      ),
      legacy: p(
        "The Abbasid golden age preserved virtually all surviving Greek science, advanced it dramatically, integrated Indian, Persian and Chinese knowledge, and transmitted the result back to Europe through Andalusia, Sicily and the Crusades — laying the foundation of the European Renaissance.",
        "Without Baghdad's translators we would have lost most of Aristotle, much of Galen, large parts of Euclid and Ptolemy. Without Baghdad's mathematicians there is no algebra, no algorithm, no decimal system in the modern world.",
        "Politically the Abbasids established the model of a multi-ethnic Islamic empire administered through a literate bureaucracy in Arabic — a model the Ottomans, Mughals and Safavids would all inherit.",
        "Spiritually, the same period produced the great Sunni schools of fiqh, the canonical hadith collections (al-Bukhari, Muslim, the four Sunan), the great works of tafsir, and the first formal works of usul al-fiqh and tasawwuf. The Abbasid era is the substrate of Sunni civilisation.",
      ),
      keyFacts: [
        "Abbasid Caliphate: 132–656 AH (750–1258 CE)",
        "Baghdad founded 145 AH (762 CE) by al-Mansur",
        "House of Wisdom flourished under Harun al-Rashid and al-Ma'mun",
        "Translated virtually all Greek, much Indian and Persian science into Arabic",
        "First free public hospitals in human history",
        "Sacked by the Mongol Hulagu in 656 AH (1258 CE)",
      ],
      lessons: [
        "Investing in knowledge transfer is the highest form of investment in civilisation",
        "Pay scholars by weight if you must — never let books die in untranslated languages",
        "Build hospitals, libraries, postal systems — civilisation is institutions",
        "Decline begins with handing your sword to mercenaries",
        "Even the City of Peace can fall when its rulers stop being worthy of it",
      ],
    },
  },
  {
    id: "civ-andalusia",
    title: "Al-Andalus — Eight Centuries of Muslim Spain",
    description:
      "From Tariq's landing at Gibraltar to the fall of Granada — the rise of Cordoba, the splendour of Madinat al-Zahra, the convivencia of three faiths, and the bitter expulsion of the Moriscos.",
    category: "CivilisationsEmpires",
    readTime: "11 min",
    sections: {
      intro: p(
        "In Rajab 92 AH (April 711 CE), the Berber Muslim general Tariq ibn Ziyad landed with around 7,000 men at the rock that would bear his name — Jabal Tariq, today Gibraltar. Within seven years almost the entire Iberian peninsula was under Muslim rule. The Visigothic kingdom that had ruled Spain collapsed at the Battle of Guadalete.",
        "The Muslim civilisation that grew on Iberian soil — al-Andalus — lasted from 92 AH (711 CE) to 897 AH (1492 CE) — almost eight centuries — and produced one of the most luminous chapters in human history.",
      ),
      life: p(
        "The first Andalusian century was governed from Damascus as a province of the Umayyad caliphate. When the Abbasids overthrew the Umayyads and massacred their princes in 132 AH (750 CE), one survivor, the young 'Abd al-Rahman, fled west across North Africa and reached Spain. In 138 AH (756 CE) he founded the Umayyad emirate of Cordoba — 'the Falcon of Quraysh', as al-Mansur called him.",
        "Two centuries later his descendant 'Abd al-Rahman III declared himself Caliph in 316 AH (929 CE), founding the Caliphate of Cordoba. Under him and his son al-Hakam II, Cordoba became the largest city in Europe — perhaps half a million people, with paved and lit streets, 700 mosques, 300 public baths, and a library of 400,000 books at a time when the largest library in Christian Europe held 600.",
        "Outside Cordoba 'Abd al-Rahman III built Madinat al-Zahra — a palace city of marble, gold leaf and orchards, employing 10,000 workers for forty years. Visitors from Christendom returned home dazed, recording that the streets were swept and lit, the women veiled and educated, the markets rich, the mosques carpeted in silk.",
        "Andalusia produced giants in every science: Ibn Hazm in fiqh and theology, Ibn Rushd (Averroes) in philosophy, Ibn al-'Arabi in tasawwuf, Ibn Tufayl, al-Zahrawi (al-Bucasis) in surgery, Ibn al-Baitar in pharmacology, Ibn Bajja in music, the geographer al-Idrisi (working in Norman Sicily), the historian Ibn al-Khatib, the polymath Ibn Khaldun (born in Tunis but Andalusian by family), and the great Maliki jurists who shaped North African law.",
        "Three communities coexisted with a fluency rare in human history. Jews entered a golden age — Maimonides was born in Cordoba; the Hebrew poetry of Ibn Gabirol and Yehuda Halevi was written in Andalusia; Jews served as viziers and physicians. Christians in Muslim territory (Mozarabs) preserved their faith while adopting Arabic so completely that they had to translate Latin scripture into Arabic for their own use. This convivencia was not modern liberal pluralism — it was an Islamic dhimma order — but it was, by the standards of medieval Europe, a marvel.",
        "The unity broke after 422 AH (1031 CE) when the Caliphate dissolved into the Taifa kingdoms — small Muslim emirates competing with each other, paying tribute to Christian kingdoms in the north. Two waves of Berber reform — the Almoravids (al-Murabitun) from 484 AH and the Almohads (al-Muwahhidun) from 540 AH — temporarily reunified al-Andalus and held back the Christian Reconquista.",
        "After the catastrophic Almohad defeat at Las Navas de Tolosa in 609 AH (1212 CE), Cordoba fell in 633 AH (1236 CE), Seville in 646 AH (1248 CE), and only the Nasrid kingdom of Granada survived in the south. For 250 more years Granada flourished — its Alhambra palace remains one of the wonders of human architecture — until on 2 Rabi' al-Awwal 897 AH (2 January 1492 CE) the last Sultan Muhammad XII (Boabdil) handed over its keys to Ferdinand and Isabella.",
        "What followed was tragedy. The promises of the surrender treaty were swiftly broken. Forced conversion of Muslims to Christianity began in 1499. The Spanish Inquisition tortured suspected secret Muslims (Moriscos) for generations. Finally between 1609 and 1614, between 300,000 and 500,000 Moriscos were expelled from Spain — many drowned at sea, many starved on North African shores, families torn apart, libraries burned, mosques converted to churches.",
      ),
      legacy: p(
        "Al-Andalus transmitted the Greek-Arabic intellectual heritage to Christian Europe. The translation movement at Toledo in the 12th and 13th centuries — Christian, Muslim and Jewish scholars working together — translated Aristotle, Ibn Sina, Ibn Rushd, al-Khwarizmi and dozens more from Arabic into Latin. The European universities of Paris, Bologna and Oxford were built on this foundation.",
        "Andalusian agriculture brought oranges, lemons, sugar cane, rice, cotton, artichokes and dozens of other crops to Europe. Andalusian engineers built the irrigation systems that transformed Spanish farming. Andalusian poets shaped the troubadour tradition that became the foundation of medieval European lyric.",
        "The Alhambra, the Mosque-Cathedral of Cordoba, the Giralda of Seville, the Madinat al-Zahra ruins, and the Aljaferia of Zaragoza remain — proof in stone of what Muslim civilisation in Iberia achieved.",
        "And the lesson of its fall — Taifa fragmentation, dependence on enemies, internal disunity — is studied by every later Muslim civilisation as a warning.",
      ),
      keyFacts: [
        "Muslim rule in Iberia: 92–897 AH (711–1492 CE), c. 781 years",
        "Caliphate of Cordoba founded 316 AH (929 CE) by 'Abd al-Rahman III",
        "Cordoba in 10th century: largest city in Europe; library of 400,000 books",
        "Granada fell 2 Jan 1492; Moriscos expelled 1609–1614",
        "Produced Ibn Rushd, Ibn Hazm, al-Zahrawi, Ibn al-'Arabi, Ibn Khaldun's family",
      ],
      lessons: [
        "A civilisation is built by patronage of knowledge, not by accident",
        "Coexistence is possible under just Islamic governance",
        "Internal fragmentation invites external conquest",
        "Treaties signed by enemies of the deen will be broken when convenient",
        "Stones outlast empires — leave behind buildings worthy of your faith",
      ],
    },
  },
  {
    id: "civ-ottoman",
    title: "The Ottoman Empire — Six Centuries on Three Continents",
    description:
      "From Osman's tribal beylik on the Byzantine frontier to Suleyman's empire stretching from Algeria to Iraq — the longest-lived Muslim empire and the last Sunni caliphate.",
    category: "CivilisationsEmpires",
    readTime: "11 min",
    sections: {
      intro: p(
        "Around 700 AH (1300 CE), in the small north-western Anatolian town of Sogut, a Turkmen ghazi chieftain named Osman (Othman) ibn Ertugrul declared independence from the collapsing Seljuk Sultanate of Rum. He had perhaps a few hundred horsemen.",
        "His descendants — the Al-i Osman, the House of Osman — would, over six centuries, build the longest-lived Muslim empire in history, ruling from the gates of Vienna to the deserts of Yemen, from Algiers to Basra.",
      ),
      life: p(
        "Under Osman's son Orhan (r. 1323–1362), the Ottomans crossed into Europe at Gallipoli in 1354. By the time of Murad I they had taken Edirne (Adrianople) and made it their capital. They defeated the Serbs at Kosovo in 1389. Bayezid I (the Thunderbolt) defeated a vast Crusader coalition at Nicopolis in 1396 — and was himself defeated, captured and humiliated by Timur (Tamerlane) at Ankara in 1402, throwing the empire into a decade of civil war.",
        "It recovered. Murad II rebuilt. His son Mehmed II (Mehmet the Conqueror) took the imperial city itself. On 29 May 1453 — 20 Jumada al-Ula 857 AH — after a 53-day siege using the largest cannons ever cast, the Ottomans broke into Constantinople. The city that the Prophet ﷺ had foretold would be conquered nine centuries earlier ('You will conquer Constantinople. What an excellent commander will her commander be, and what an excellent army will that army be!') fell.",
        "Mehmed prayed in the Hagia Sophia, converted it into a mosque, granted the Greek Orthodox Patriarch a charter of religious autonomy that lasted four centuries, repopulated the city, and made it his capital — Istanbul, the seat of the empire for the next 470 years.",
        "Selim I (the Grim, r. 1512–1520) doubled the empire in eight years. He smashed the Mamluks at Marj Dabiq in 1516 and took Syria. He took Egypt at Ridaniya in 1517. The last Abbasid shadow caliph, al-Mutawakkil III, was brought to Istanbul; the keys of Makkah and Madinah were handed to Selim by the Sharif of Mecca; the Ottomans now bore the title Khadim al-Haramayn al-Sharifayn — Servant of the Two Holy Sanctuaries — and from this point Sunni jurists generally regarded the Ottoman sultan as the Sunni Caliph.",
        "Suleyman I (the Magnificent in Europe, the Lawgiver — Kanuni — to his own people, r. 1520–1566) presided over the empire's high noon. Belgrade fell in 1521, Rhodes in 1522, Hungary at Mohacs in 1526. He besieged Vienna in 1529. He codified the empire's secular law, reformed the administration, and patronised the architect Sinan, who built the Suleymaniye and Selimiye mosques among the masterpieces of world architecture.",
        "Under Suleyman the empire stretched from Algiers to Baghdad to Yemen to Crimea. It controlled the great Muslim cities — Makkah, Madinah, Damascus, Jerusalem, Cairo, Baghdad, Tunis. Its navy under Khayr al-Din Barbarossa contested the Mediterranean. Its janissaries were the most disciplined infantry in the world.",
        "Then began the long, slow decline. Defeats at Lepanto (1571) at sea and the failed second siege of Vienna (1683) on land. Loss of Hungary to the Habsburgs in 1699. The 18th and 19th centuries: 'the sick man of Europe', battered by Russian wars, by Greek and Balkan independence movements, by Egyptian semi-independence under Muhammad Ali, by European debt diplomacy, by colonial seizures — Algeria to France in 1830, Egypt to Britain in 1882, Tripolitania to Italy in 1911, the Balkans piece by piece.",
        "Reform attempts — the Tanzimat of the 19th century, the Young Ottomans, then the Young Turks of 1908 — could not stop the decline. The empire entered World War I in 1914 on the side of the Central Powers and was dismembered after the Allied victory. The British and French carved up Syria, Iraq, Palestine, Transjordan, Lebanon. The empire's Anatolian heartland, after a war of independence under Mustafa Kemal (Atatürk), became the Republic of Turkey.",
        "The caliphate itself was the last to go. Sultan Mehmed VI was deposed in 1922; the title of caliph was held briefly by his cousin Abdulmecid II in a ceremonial capacity. On 3 March 1924 — 27 Rajab 1342 AH — the Turkish Grand National Assembly abolished the caliphate. Abdulmecid was put on the Orient Express to Switzerland the same day. The institution founded in 11 AH ended after 1331 lunar years.",
      ),
      legacy: p(
        "The Ottoman Empire was the political backbone of the Sunni Muslim world for half a millennium. It protected the Two Holy Sanctuaries, financed the hajj caravans, defended Sunni territory against Safavid and European pressure, and provided a unified administrative space across three continents.",
        "Architecturally it gave us Sinan's mosques — Suleymaniye, Selimiye, Sultan Ahmed (the Blue Mosque). Culturally it preserved Arabic-Islamic learning while creating its own Turkish-Persian-Arabic synthesis in poetry, music, calligraphy and miniature painting. Legally it codified Hanafi fiqh into the most sophisticated state legal system the Muslim world had yet produced.",
        "Its end in 1924 — the abolition of the caliphate — left a wound the Muslim world is still reckoning with. For most of Islamic history there had been a caliph, however nominal. After 1924 there was none. The political fragmentation of the Muslim world today is, in important ways, the long shadow of that single morning in March 1924.",
        "But the Ottomans also showed what is possible: a Muslim empire that could last six centuries, govern dozens of peoples, defend the Haramayn, build mosques that still take the breath away, and protect the Sunni tradition through a half-millennium of European pressure.",
      ),
      keyFacts: [
        "Founded c. 700 AH (1300 CE) by Osman I; abolished 1924",
        "Conquered Constantinople in 857 AH (1453 CE) under Mehmed II",
        "Took Egypt and the Hijaz under Selim I in 922–923 AH (1516–1517 CE)",
        "Greatest extent under Suleyman the Magnificent (r. 1520–1566)",
        "Last recognised Sunni Caliphate; abolished 27 Rajab 1342 AH (3 March 1924)",
        "Lasted approximately 624 years",
      ],
      lessons: [
        "Long civilisations are built on patient defence of borders, not just bold conquest",
        "Service of the Haramayn is the highest political honour any Muslim state can carry",
        "Codified law and impartial bureaucracy outlast charismatic rulers",
        "Build architecture worthy of the Creator — it will preach long after you",
        "When unity goes, fragments fall one by one — guard unity at every cost",
      ],
    },
  },
  {
    id: "civ-mughal",
    title: "The Mughal Empire — Islam in the Indian Subcontinent",
    description:
      "From Babur's small Central Asian army to Aurangzeb's empire of 150 million people — three centuries of Muslim rule that gave the world Akbar's tolerance, Shah Jahan's Taj Mahal, and the spread of Islam across South Asia.",
    category: "CivilisationsEmpires",
    readTime: "10 min",
    sections: {
      intro: p(
        "Islam reached India in the first century of Hijra — Muslim traders on the Malabar coast, Muhammad ibn al-Qasim's conquest of Sind in 92 AH (711 CE) the same year Tariq landed in Spain. Successive dynasties — the Ghaznavids, the Ghurids, the Delhi Sultanate (1206–1526) — established Muslim rule across northern India.",
        "Then in 932 AH (1526 CE) a young prince from Ferghana, descendant of both Timur and Genghis Khan, defeated the Sultan of Delhi at Panipat with 12,000 men using gunpowder artillery. His name was Zahir al-Din Muhammad Babur, and his dynasty — the Mughals (a Persianised form of Mongol) — would rule most of the Indian subcontinent for the next 330 years.",
      ),
      life: p(
        "Babur (r. 1526–1530) was a poet as much as a soldier. His Baburnama is one of the most beautiful autobiographies in pre-modern literature, full of observations on tulips, melons, fortresses, friends and Allah. He died young; his son Humayun lost the empire to the Afghan Sher Shah Suri, lived as a refugee in Persia, and recovered the throne in 1555 only to die a year later by falling down his library stairs.",
        "His thirteen-year-old son Akbar (r. 1556–1605) inherited a fragile state and built it into one of the great empires of human history. He won India militarily, then won it politically through marriage alliances with Rajput princes, abolition of the jizya (controversially among scholars), and a religious policy of universal tolerance. His court at Fatehpur Sikri hosted Sunni 'ulama, Shi'a theologians, Hindu pandits, Jain monks, Parsi priests and Jesuit missionaries in formal debate.",
        "Akbar's later religious experiment — the Din-i Ilahi — was rejected by the orthodox 'ulama as innovation. The reformer Shaykh Ahmad Sirhindi (Mujaddid Alf Thani — the Renewer of the Second Millennium) led a Naqshbandi-Mujaddidi reform movement that recalled Mughal Islam to mainstream Sunni doctrine.",
        "Jahangir (r. 1605–1627) ruled in Akbar's shadow, refined court arts and miniature painting to its peak, and was largely managed by his brilliant Persian-born wife Nur Jahan. Shah Jahan (r. 1628–1658) brought the Mughal aesthetic to its zenith — building the Taj Mahal as a tomb for his beloved wife Mumtaz Mahal (1632–1648), the Red Fort and the Jama Masjid in Delhi, the Shalimar Gardens.",
        "Aurangzeb (r. 1658–1707) extended the empire to its greatest territorial extent — virtually the entire Indian subcontinent except the southern tip — and reverted to a more orthodox Sunni religious policy. He commissioned the Fatawa-yi 'Alamgiri, a vast compendium of Hanafi fiqh that remained authoritative across South Asia for centuries. He memorised the Qur'an, sewed caps and copied mushafs by hand for sale, and refused state funds for his personal expenses, living on the income of his copying.",
        "After Aurangzeb the empire began its long decline. Internal succession disputes, the Maratha Confederacy in the south, the Sikh kingdoms in the Punjab, Persian and Afghan invasions (Nadir Shah sacked Delhi in 1739; Ahmad Shah Durrani repeatedly raided), and the steady expansion of British East India Company power. By 1803 the British controlled Delhi; by 1857 the last Mughal emperor Bahadur Shah Zafar was a powerless figurehead.",
        "The 1857 War of Independence (the 'Indian Mutiny' to the British) ended catastrophically for the Muslims. After the British recaptured Delhi, Bahadur Shah was tried and exiled to Rangoon. Two of his sons were shot dead; their heads were placed on a plate and brought to him. He died in Rangoon in 1862, the last of a 332-year dynasty. The British formally absorbed India into the Crown in 1858. The Mughal Empire was over.",
      ),
      legacy: p(
        "The Mughals presided over the largest gathering of Muslims under one rule in pre-modern history — by Aurangzeb's death the empire had perhaps 25% of the world's population.",
        "Islam in South Asia spread rapidly under Mughal rule, though not by force — primarily through Sufi networks (the Chishtiyya, Naqshbandiyya, Qadiriyya, Suhrawardiyya), through trade, and through conversion of marginal communities seeking the equality of Islam. Today South Asia (Pakistan, Bangladesh, India) is home to over 600 million Muslims — by far the largest concentration of Muslims in the world.",
        "Architecturally they gave humanity the Taj Mahal — perhaps the single most beautiful building ever made — alongside the Red Fort, Jama Masjid Delhi, Lahore's Badshahi Mosque, Humayun's Tomb, the gardens of Kashmir, and a flowering of miniature painting and Persian-Urdu poetry.",
        "Intellectually they produced the Fatawa-yi 'Alamgiri, the reform movement of Shah Wali Allah of Delhi (whose Hujjat Allah al-Baligha is one of the great works of late classical Islamic thought), the poetry of Ghalib and Iqbal in Urdu, and the Deobandi and Barelvi movements that emerged from late-Mughal North India and dominate South Asian Sunni Islam today.",
        "Their fall left a power vacuum filled by the British, whose colonial pen drew the borders that produced the partition of 1947, the creation of Pakistan, and many of the political problems of South Asia today.",
      ),
      keyFacts: [
        "Founded 932 AH (1526 CE) by Babur; ended 1858 CE",
        "Greatest extent under Aurangzeb (r. 1658–1707): nearly entire subcontinent",
        "At its height: c. 25% of world population, c. 25% of world GDP",
        "Built the Taj Mahal (1632–1648), Red Fort and Jama Masjid Delhi",
        "Commissioned Fatawa-yi 'Alamgiri — major Hanafi legal compendium",
        "Last emperor Bahadur Shah Zafar exiled by the British in 1858",
      ],
      lessons: [
        "A small army with discipline and gunpowder can defeat a kingdom",
        "Religious orthodoxy needs renewal in every generation (Sirhindi's example)",
        "A ruler who works with his hands for his bread is freer than one who lives off the treasury",
        "Build something beautiful — Allah is beautiful and loves beauty",
        "Empire is borrowed; only what was built for the akhirah lasts",
      ],
    },
  },
  {
    id: "civ-west-african-empires",
    title: "The Great West African Muslim Empires — Ghana, Mali and Songhay",
    description:
      "Three successive empires that turned the West African Sahel into a Muslim civilisation — the gold trade of Ghana, the legendary hajj of Mansa Musa, and Timbuktu's libraries that astonished the world.",
    category: "CivilisationsEmpires",
    readTime: "9 min",
    sections: {
      intro: p(
        "Islam reached West Africa across the Sahara within the first century of Hijra. Berber merchants from North Africa carried it south along the salt-and-gold trade routes. By the third Islamic century there were Muslim quarters in the cities of the Sahel; by the sixth Islamic century, three of the great empires of African history had embraced Islam and built civilisations on it.",
        "Their names — Ghana, Mali, Songhay — defined the West African Sahel from roughly 300 to 1000 AH (900 to 1591 CE). Their cities — Walata, Djenné, Gao, and above all Timbuktu — became centres of Islamic learning that drew scholars from across the Muslim world.",
      ),
      life: p(
        "The Empire of Ghana (the original 'Ghana', north of the modern country) reached its peak in the 9th–11th centuries CE. Its rulers controlled the trans-Saharan trade in gold (south to north) and salt (north to south). The Arab geographer al-Bakri described its capital Kumbi Saleh as having two cities — a royal Soninke city and a Muslim merchant city with twelve mosques. Islam came peacefully through the merchants; the king himself, though sympathetic, retained Soninke traditions until late.",
        "Ghana fell to the Almoravids in 469 AH (1076 CE) — the same Berber Muslim movement that conquered al-Andalus. Out of its ruins rose, in the 13th century CE, a new and greater empire: Mali, founded by the Mandinka king Sundjata Keita around 1235 CE.",
        "Mali's most famous ruler was Mansa Musa (r. 1312–1337 CE). In 1324 he set out from Niani for hajj, taking — by the most conservative Egyptian chronicler estimates — 60,000 people, 12,000 personal slaves each carrying four pounds of gold, 80 camels each loaded with 300 pounds of gold dust, and his queen Inari Konte with 500 attendants. He distributed so much gold in Cairo on his stop there that the price of gold collapsed and did not recover in Egypt for over a decade.",
        "He returned with the Andalusian architect Abu Ishaq al-Sahili, who designed the great Djinguereber Mosque of Timbuktu and several other landmark buildings. He recruited scholars in Cairo, Mecca and Medina to come and teach in Mali. Under him and his successors, Timbuktu became one of the great university cities of Islamic civilisation.",
        "Timbuktu's Sankore University — really a network of mosque-madrasas around the Sankore Mosque — flourished in the 15th and 16th centuries. At its height it had perhaps 25,000 students out of a city population of 100,000. Its scholars wrote, copied and traded books on a vast scale. The market for books was reportedly the most profitable in the city.",
        "Mali declined in the 15th century and was replaced by the Songhay Empire under Sunni 'Ali (r. 1464–1492) and especially Askia Muhammad I (Muhammad Ture, r. 1493–1528), who consolidated Songhay's hold on the Sahel and went on his own famous hajj in 1497. Askia was given the title Khalifat al-Sudan ('Caliph of the Sudan' — meaning the West African Sahel) by the Abbasid shadow caliph in Cairo.",
        "Under Askia, the great scholar-jurist Mahmud Ka'ti began Tarikh al-Fattash; later the chronicler 'Abd al-Rahman al-Sa'di wrote Tarikh al-Sudan; the Timbuktu native Ahmad Baba (1556–1627) became one of the most prolific Maliki scholars of his age, writing over forty works.",
        "Songhay fell in 999 AH (1591 CE) when a Moroccan Sa'di army of 4,000 — many of them Andalusian musketeers — crossed the Sahara and defeated the Songhay army at Tondibi. Timbuktu was sacked. Ahmad Baba was deported in chains to Marrakesh, where he was held for years and produced fatwas including a famous condemnation of the trans-Saharan slavery of free Muslim Africans.",
      ),
      legacy: p(
        "The West African Muslim empires demonstrated that Islamic civilisation was never confined to its Arab, Persian and Turkish heartlands. Black African Muslim civilisation, in its own languages and aesthetics, produced cities, scholarship and architecture that astonished medieval Arab travellers like Ibn Battuta when he visited Mali in 1352.",
        "The Timbuktu manuscripts — many tens of thousands of them — survive today, having been hidden in family libraries through Moroccan conquest, French colonisation, and most recently the 2012 jihadi occupation when local librarians smuggled them out at great personal risk. They are an irreplaceable record of Sahelian Islamic civilisation.",
        "The Maliki madhhab, brought by Berber and Andalusian scholars, became and remains the dominant school of fiqh across West Africa. The tarbiya of the Tijaniyya and Qadiriyya tariqas continues to shape Muslim spirituality from Senegal to Sudan.",
        "And the legacy of Mansa Musa — a black African Muslim king who, on his way to hajj, broke the Egyptian gold market — remains the greatest reminder that the dignity of Islam in Africa was never derivative.",
      ),
      keyFacts: [
        "Ghana Empire: c. 300–469 AH (c. 900–1076 CE)",
        "Mali Empire: c. 632–870 AH (c. 1235–1465 CE)",
        "Songhay Empire: c. 870–999 AH (c. 1465–1591 CE)",
        "Mansa Musa's hajj of 1324 CE collapsed Egypt's gold market",
        "Timbuktu's Sankore University: tens of thousands of students",
        "Songhay fell to a Moroccan Sa'di army at Tondibi, 999 AH (1591 CE)",
      ],
      lessons: [
        "Islamic civilisation belongs to whichever people sincerely embrace it",
        "Trade routes can carry the deen further than armies can",
        "Invest hajj wealth in knowledge, books and architecture for your people",
        "Books are a city's truest treasure — protect them through every storm",
        "Africa is not the periphery of Islam; it is one of its great heartlands",
      ],
    },
  },
];
