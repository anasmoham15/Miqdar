import type { Story } from "./stories";

const p = (...paragraphs: string[]) => paragraphs;

// Major Battles of Islamic history — Badr, Uhud, Khandaq, Khaybar, Mu'tah, Hunayn, Tabuk.
// Sources: Ibn Hisham's Sira, al-Tabari, Ibn Kathir's al-Bidaya wa'l-Nihaya, al-Waqidi's Maghazi.
export const majorBattlesStories: Story[] = [
  {
    id: "battle-badr",
    title: "The Battle of Badr — The Day of the Criterion",
    description:
      "313 ill-equipped Muslims faced a Quraysh army of 1,000 and won the most decisive victory in Islamic history — the day Allah Himself called yawm al-furqan, the Day of the Criterion.",
    category: "MajorBattles",
    readTime: "10 min",
    sections: {
      intro: p(
        "The Battle of Badr was fought on the 17th of Ramadan, 2 AH (March 624 CE), near the wells of Badr, about 130 km southwest of Madinah. It was the first major military engagement of the Muslim community.",
        "It was not planned as a battle. The Prophet ﷺ had set out with around 313 lightly-armed Muslims to intercept a wealthy Quraysh trade caravan led by Abu Sufyan returning from Syria. The caravan slipped past. But Quraysh, hearing of the Muslim move, marched out from Makkah with around 1,000 fighters, 700 camels and 100 horses — a force of vengeance and pride.",
      ),
      life: p(
        "When the Prophet ﷺ realised they would face the army instead of the caravan, he consulted his Companions. Abu Bakr spoke. Then 'Umar. Then al-Miqdad ibn 'Amr stood and said: 'O Messenger of Allah, go forward where Allah commands you. By Allah, we will not say to you what the Children of Israel said to Musa: ''Go you and your Lord and fight; we will sit here.'' Rather we say: Go you and your Lord and fight; we will fight with you. By the One who sent you with the truth, if you take us to Bark al-Ghimad we will fight beside you until you reach it.'",
        "Then the Prophet ﷺ wanted to hear from the Ansar — for they had pledged to defend him only inside Madinah. Sa'd ibn Mu'adh, chief of Aws, stood and said: 'O Messenger of Allah, perhaps you mean us? By the One who sent you with the truth, if you commanded us to plunge our horses into the sea we would do it. Lead us against the enemy with the blessing of Allah.' The Prophet's ﷺ face lit up.",
        "On the night before battle, Allah sent a gentle rain — softening the sand on the Muslim side into firm footing, and turning the Quraysh side into mud. The Prophet ﷺ slept while the Companions kept watch, then prayed in his arish (small shelter) raising his hands so much that his cloak fell from his shoulders. Abu Bakr replaced the cloak and said: 'O Messenger of Allah, this much du'a from you is enough; Allah will fulfil His promise.'",
        "The battle began at dawn with single combats. 'Ali, Hamza and 'Ubayda ibn al-Harith stepped forward against three of the strongest Qurayshis and killed them. Then the lines crashed together. The Prophet ﷺ took a handful of pebbles, threw them at the Quraysh, and said: 'May their faces be disfigured!' (Qur'an 8:17 records: 'It was not you who threw when you threw, but Allah threw.')",
        "Allah sent angels — a thousand, then three thousand, then five thousand bearing distinguishing marks. The Companions reported seeing horsemen they did not recognise, hearing voices urging the lines forward, watching enemy heads fall before any Muslim sword had reached them.",
        "By midday it was over. Around 70 Qurayshi nobles were dead — including Abu Jahl, the Pharaoh of this ummah, killed by two young Ansari boys, Mu'adh and Mu'awwidh, who had asked which man was Abu Jahl and then thrown themselves at him like falcons. Around 70 were captured. The Muslims lost 14 — six Muhajirun and eight Ansar.",
      ),
      legacy: p(
        "Allah revealed Surat al-Anfal in connection with this battle. He called it yawm al-furqan, the Day of the Criterion (Qur'an 8:41) — the day truth was distinguished from falsehood by force.",
        "The People of Badr (Ahl Badr) were given a unique status. The Prophet ﷺ said of them: 'Perhaps Allah has looked upon the people of Badr and said: ''Do as you wish, for I have forgiven you.''' (Sahih al-Bukhari)",
        "The treatment of prisoners set a humanitarian standard new to Arabia. Captives ate the bread of their captors while the Muslims ate dates. Many prisoners earned their freedom by teaching ten Madinan children to read and write — the first literacy programme in Islamic history.",
        "Badr remains the eternal proof that numbers, equipment and political power do not decide outcomes. Sincerity and reliance on Allah do.",
      ),
      keyFacts: [
        "17 Ramadan 2 AH (13 March 624 CE)",
        "Muslims: c. 313 with 2 horses and 70 camels",
        "Quraysh: c. 1,000 with 100 horses and 700 camels",
        "Muslim losses: 14 martyrs; Quraysh: c. 70 killed, c. 70 captured",
        "Surat al-Anfal revealed in connection with the battle",
        "Allah called it yawm al-furqan — the Day of the Criterion",
      ],
      lessons: [
        "Outcomes belong to Allah, not to numbers or equipment",
        "True consultation (shura) precedes every major decision",
        "Tahajjud and du'a do more than swords",
        "Treat prisoners with dignity even in the heat of victory",
        "Forgiveness from Allah is the highest reward — and Badr earned it",
      ],
    },
  },
  {
    id: "battle-uhud",
    title: "The Battle of Uhud — A Lesson Written in Blood",
    description:
      "The day discipline was broken on a hilltop and victory turned to loss — when seventy Companions including Hamza were martyred and the Prophet's ﷺ tooth was broken, yet the lesson saved the ummah.",
    category: "MajorBattles",
    readTime: "10 min",
    sections: {
      intro: p(
        "The Battle of Uhud was fought in Shawwal 3 AH (March 625 CE) on the slopes of Mount Uhud, just north of Madinah. It came one year after Badr — Quraysh had spent the year mourning, organising and saving the proceeds of an entire caravan to fund revenge.",
        "Quraysh marched out with 3,000 fighters, 200 horses and 700 men in armour, accompanied by the women of the noble houses to sing for war. They camped near Uhud.",
      ),
      life: p(
        "The Prophet ﷺ consulted the Companions. He himself preferred to defend Madinah from within. The young Companions who had missed Badr were eager for the field. Out of respect for them he agreed to march out. He put on his armour. Then the young men reconsidered and offered to defer to his judgment. He said: 'It is not for a Prophet, once he has put on his armour, to take it off until Allah judges between him and his enemies.'",
        "He marched out with around 1,000. On the road, the hypocrite 'Abd Allah ibn Ubayy ibn Salul withdrew with his 300 followers — the first stab in the back of the Madinan period.",
        "The 700 remaining Muslims took up position with Mount Uhud at their backs. The Prophet ﷺ stationed 50 archers under 'Abd Allah ibn Jubayr on a small hill — later called Jabal al-Rumat, the Archers' Mount — and gave them an absolute command: 'If you see us being killed, do not come down to help us. If you see us victorious and gathering spoils, do not come down to share. Stay in your positions until I send for you.'",
        "The battle opened with single combats and then a furious Muslim charge. The Quraysh lines broke. They began to flee. The Muslims poured into the Quraysh camp and began to gather spoils. The archers on the hill saw victory complete. Forty of them, against the order, came down to join the spoils. Only ten stayed.",
        "Khalid ibn al-Walid — still on the side of Quraysh — saw the gap. He led the Quraysh cavalry around the hill, killed the remaining ten archers, and struck the Muslims from the rear at the moment of triumph.",
        "Confusion exploded. Muslims found themselves attacked from both sides. A cry went up that the Prophet ﷺ had been killed (he had not — but he was wounded; an enemy sword had broken his lower right tooth, his cheek had been pierced by a ring of his helmet, and blood ran into his face). Many Companions, hearing the false news, threw down their weapons and sat in despair.",
        "Hamza ibn 'Abd al-Muttalib, the Lion of Allah, was martyred — speared by Wahshi, the Abyssinian slave hired by Hind for her revenge. Mus'ab ibn 'Umayr fell holding the banner. 'Abd Allah ibn Jahsh fell. By the end, 70 Companions were martyred.",
        "When it was clear the Prophet ﷺ was alive, the Companions rallied to him on the slopes of Uhud. The Quraysh, exhausted and unwilling to climb the mountain, retreated. The next day, despite their wounds, the Prophet ﷺ pursued them as far as Hamra' al-Asad — a show of strength that ended Quraysh's appetite for further attack that year.",
      ),
      legacy: p(
        "Allah revealed about 60 verses of Surat Aal 'Imran (verses 121–179) about Uhud — diagnosing the disobedience of the archers, the panic of those who fled, the steadfastness of the few, and the death of Hamza, while reaffirming His mercy and the believers' rank.",
        "Hamza became Sayyid al-Shuhada' — the Master of Martyrs. The Prophet ﷺ wept for him as he wept for no one else. His killer Wahshi later embraced Islam, and the Prophet ﷺ asked him only one thing: 'Hide your face from me' — though he forgave him completely.",
        "Uhud taught the ummah that disobedience to a single command — even small in itself — can turn certain victory into defeat. It taught that the dunya is not a resort, that prophets are tested, that the path of truth is not protected from blood.",
        "The Prophet ﷺ later said: 'Uhud is a mountain that loves us and we love it.' (Sahih al-Bukhari) The 70 martyrs are buried at its feet — a sacred ground every Muslim still visits when they reach Madinah.",
      ),
      keyFacts: [
        "Shawwal 3 AH (March 625 CE)",
        "Muslims: c. 700 (after 300 hypocrites withdrew); Quraysh: c. 3,000",
        "70 Companions martyred, including Hamza ibn 'Abd al-Muttalib",
        "Prophet ﷺ wounded — tooth broken, cheek pierced, head bloodied",
        "Disobedience of 40 archers turned victory into loss",
        "Surat Aal 'Imran 121–179 revealed about the battle",
      ],
      lessons: [
        "A single act of disobedience can collapse an entire victory",
        "Greed for spoils has destroyed more than enemies have",
        "Stay at your post even when you think the work is done",
        "Defeat that teaches is more useful than victory that flatters",
        "The dunya is a test, not a reward — even for prophets",
      ],
    },
  },
  {
    id: "battle-khandaq",
    title: "The Battle of the Trench (Khandaq) — When a Trench Saved the Ummah",
    description:
      "Ten thousand confederates marched on Madinah; the Prophet ﷺ and the Companions dug a trench by hand, ate stones of hunger, and Allah sent a wind that scattered the largest army Arabia had ever assembled.",
    category: "MajorBattles",
    readTime: "9 min",
    sections: {
      intro: p(
        "The Battle of the Trench, also called the Battle of the Confederates (Ahzab), was fought in Shawwal 5 AH (627 CE). It is the supreme example in the Sira of an existential threat — the moment all the enemies of Islam in Arabia united in one final attempt to extinguish it.",
        "The Jewish leaders of Banu Nadir, exiled to Khaybar after their treachery, travelled to Quraysh and to Ghatafan and the desert tribes, building a coalition of around 10,000 fighters — the largest army Arabia had ever assembled — to march on Madinah.",
      ),
      life: p(
        "The Prophet ﷺ consulted the Companions. The Persian Companion Salman al-Farisi, drawing on Sasanian military experience, suggested digging a trench across the only exposed approach to Madinah. The other sides of the city were protected by lava fields and thick palm groves.",
        "The Muslims — about 3,000 — dug for six days in the cold of late autumn, with little food. The Prophet ﷺ dug with them, carrying earth on his back. Anas reports the Companions singing as they dug, the Prophet ﷺ joining them, the rhythm of pickaxes and du'a.",
        "Hunger was severe. Jabir ibn 'Abd Allah noticed the Prophet ﷺ tying a stone to his stomach to suppress hunger; on closer look the Prophet ﷺ had two stones tied. Jabir went home, slaughtered his only sheep, and told his wife to prepare it for the Prophet ﷺ and a few men. The Prophet ﷺ called all 1,000 of the diggers to share the meal. The food multiplied. All ate; food remained.",
        "When the confederate army arrived they were stunned. Trenches were unknown to Arab warfare. They camped on the far side, unable to cross, settling in for a long siege. The Banu Qurayza Jews inside Madinah, who had a treaty with the Prophet ﷺ, broke it under the urging of the Banu Nadir chief — opening a knife at the Muslims' back.",
        "The siege lasted nearly a month. Cold, hunger, fear, the freezing nights, the threat from inside the city — Allah describes the test in Surat al-Ahzab: 'When eyes shifted in fear, hearts reached the throats, and you began to assume about Allah various assumptions. There the believers were tested and shaken with a severe shaking.' (33:10–11)",
        "A few horsemen managed to leap the trench at its narrowest point. 'Ali ibn Abi Talib killed their champion 'Amr ibn 'Abd Wadd in single combat. Otherwise the trench held.",
        "On a freezing night, Allah sent a violent wind that uprooted the confederate tents, overturned cooking pots, blinded their men with sand, and broke the alliance from within. Abu Sufyan stood and announced retreat. By morning, the largest army ever raised against Islam had simply melted away.",
        "The Prophet ﷺ said: 'Now we will attack them, and they will not attack us.' From that day, Quraysh never marched on Madinah again. The next year would bring Hudaybiyah; two years later, the conquest of Makkah.",
      ),
      legacy: p(
        "Surat al-Ahzab was revealed about this battle, capturing the inner experience of believers under siege and condemning the hypocrites who tried to abandon the city.",
        "Banu Qurayza were judged after the siege according to their own Torah by Sa'd ibn Mu'adh, who had been mortally wounded in the battle. His ruling was carried out and his soul taken; the Throne of the Most Merciful is reported in the hadith to have shaken at his death.",
        "The Trench is the Sira's masterclass in trust under siege — that planning (Salman's trench) and reliance (the wind) are not opposites but partners. You dig the trench, then Allah sends the wind.",
      ),
      keyFacts: [
        "Shawwal 5 AH (627 CE)",
        "Confederate army: c. 10,000; Muslims: c. 3,000",
        "Trench dug in 6 days following Salman al-Farisi's suggestion",
        "Siege lasted approximately one month",
        "Allah sent a violent wind that broke the alliance",
        "Quraysh never marched on Madinah again",
      ],
      lessons: [
        "Use every wisdom Allah has placed in His servants — even from other lands",
        "Plan with your hands; rely with your heart",
        "Hunger shared is barakah multiplied",
        "When eyes shift and hearts rise to throats — that is the moment of truest faith",
        "Allah's victory often comes through forces no one can plan for",
      ],
    },
  },
  {
    id: "battle-khaybar",
    title: "The Conquest of Khaybar — The Banner Given to the One Allah Loves",
    description:
      "The fortified Jewish stronghold north of Madinah that had become the headquarters of every conspiracy against Islam — opened by 'Ali ibn Abi Talib after the Prophet ﷺ named him 'the man Allah and His Messenger love'.",
    category: "MajorBattles",
    readTime: "8 min",
    sections: {
      intro: p(
        "Khaybar was an oasis of palm groves and seven major fortresses about 150 km north of Madinah, populated by powerful Jewish tribes. After Banu Nadir was exiled there, it became the operational base for every plot against the Muslim community — financing the Confederates' march, sheltering hostile leaders, planning further coalitions.",
        "After the truce of Hudaybiyah secured the southern flank, the Prophet ﷺ marched on Khaybar in Muharram 7 AH (628 CE) with around 1,400 Companions — those who had pledged at Hudaybiyah.",
      ),
      life: p(
        "The Muslims arrived at night. The Prophet ﷺ had a habit of not attacking until dawn so that he could hear if the adhan was called from the place — and not strike believers by mistake. At dawn the people of Khaybar walked out to their fields with their tools, saw the Muslim army, and ran back crying: 'Muhammad and the army! Muhammad and the army!'",
        "The Muslims besieged the fortresses one by one — Na'im, then al-Sa'b ibn Mu'adh. After several days the largest, the fortress of al-Qamus, remained. The Muslims attempted to take it day after day. Each day a Companion was given the banner; each day they returned without victory.",
        "On the night before what would prove the final day, the Prophet ﷺ said: 'Tomorrow I will give the banner to a man through whose hands Allah will grant victory — a man who loves Allah and His Messenger and whom Allah and His Messenger love.' The Companions could not sleep that night, each hoping he would be the one.",
        "At dawn the Prophet ﷺ asked: 'Where is 'Ali ibn Abi Talib?' They said his eyes were inflamed and he could barely see. 'Bring him.' 'Ali was led forward. The Prophet ﷺ wiped his blessed saliva over 'Ali's eyes — they were healed instantly and never bothered him again. He gave 'Ali the banner.",
        "'Ali advanced to the gate of al-Qamus. The fortress's champion, the giant Marhab, came out chanting his war poetry. 'Ali killed him in single combat with one stroke. The Muslims poured into the fortress. Tradition reports — though some details are debated — that 'Ali at one point used a heavy door of the fortress as a shield because his own had broken.",
        "Khaybar fell. The Jews of Khaybar surrendered on terms: they would remain on the land as cultivators, paying half the produce in tax. This arrangement lasted until 'Umar later removed them under the Prophet's ﷺ deathbed instruction that two religions should not coexist in the Hijaz.",
        "Among the events at Khaybar: the famous attempt by the Jewish woman Zaynab bint al-Harith to poison the Prophet ﷺ with a roasted lamb. The Prophet ﷺ tasted it, the meat itself spoke and warned him, and he spat it out. His Companion Bishr ibn al-Bara' had already swallowed and died. The Prophet ﷺ later said in his final illness that he could still feel the effect of that poison in his aorta.",
        "On the way back, the Prophet ﷺ met his cousin Ja'far ibn Abi Talib, returning at last from Abyssinia after fifteen years. The Prophet ﷺ embraced him and said: 'I do not know which makes me happier — the conquest of Khaybar or the return of Ja'far.'",
      ),
      legacy: p(
        "Khaybar ended the Jewish military and political power in Arabia. It secured the northern flank of the Muslim state and opened the way to the conquest of Makkah a year later.",
        "The hadith of the banner — 'a man who loves Allah and His Messenger and whom they love' — became one of the most famous virtues of 'Ali (RA) and is in the Sahihs.",
        "The Khaybar precedent of Jewish cultivators paying a share of produce became a foundation for later fiscal policy in conquered lands.",
        "And the poisoned lamb is part of the doctrine that the Prophet ﷺ's death in Madinah years later, in pain, also ranked him among the martyrs — as he himself said.",
      ),
      keyFacts: [
        "Muharram 7 AH (628 CE)",
        "Muslim force: c. 1,400 (Hudaybiyah pledgers)",
        "Multiple fortresses taken in succession; al-Qamus the largest",
        "'Ali ibn Abi Talib's eyes healed by the Prophet's ﷺ saliva",
        "Marhab killed in single combat by 'Ali",
        "Attempted poisoning of the Prophet ﷺ by Zaynab bint al-Harith",
      ],
      lessons: [
        "Patience in siege — answers do not always come on day one",
        "True love of Allah and His Messenger can be made visible by Allah",
        "Du'a and the saliva of the Prophet ﷺ healed bodies and futures",
        "Treat conquered peoples with terms, not vengeance",
        "Even the Prophet ﷺ tasted poison in this dunya — it is a test, not a reward",
      ],
    },
  },
  {
    id: "battle-mutah",
    title: "The Battle of Mu'tah — Three Banners, Three Martyrs, and the Sword of Allah",
    description:
      "Three thousand Muslims faced a Byzantine-led army of perhaps a hundred thousand at Mu'tah — three commanders fell in succession, then Khalid ibn al-Walid took the banner and saved the army.",
    category: "MajorBattles",
    readTime: "8 min",
    sections: {
      intro: p(
        "The Battle of Mu'tah was fought in Jumada al-Ula 8 AH (629 CE) at Mu'tah, in modern southern Jordan. It was the first major engagement between the Muslims and the Byzantine Empire and its Arab vassals.",
        "Its cause was the murder of the Prophet's ﷺ ambassador al-Harith ibn 'Umayr by the Ghassanid Christian Arab governor Shurahbil ibn 'Amr. The Prophet ﷺ assembled an army of 3,000 to respond.",
      ),
      life: p(
        "He named three commanders in succession: 'If Zayd is killed, Ja'far takes the banner. If Ja'far is killed, 'Abd Allah ibn Rawaha takes it. If he is killed, let the Muslims choose one of their own.'",
        "The army marched north. They learned at Ma'an that the Byzantine emperor Heraclius had massed an enormous force — by some reports 100,000 Byzantines and 100,000 Christian Arab auxiliaries — to crush them. The Muslims debated whether to send word back to the Prophet ﷺ for reinforcements or instructions.",
        "'Abd Allah ibn Rawaha rose: 'O people, by Allah, the thing you fear is the very thing you came out for — martyrdom! We do not fight people with numbers, strength or many men, but with this religion that Allah has honoured us with. So go forward — only one of two beautiful things awaits us: victory or martyrdom.' The army moved forward.",
        "At Mu'tah they met the enemy. Zayd ibn Haritha — beloved freed servant and adopted son of the Prophet ﷺ — took the banner first and fell, pierced by spears. Ja'far ibn Abi Talib leapt from his horse, hamstrung it (so he could not be tempted to flee), seized the banner, and plunged in. His right arm was severed; he held the banner with his left. His left was severed; he clutched it to his chest with his stumps. Then he too fell. He was 33. The Prophet ﷺ later said Allah had given him two wings of light in Paradise — which is why he is known as Ja'far al-Tayyar, Ja'far the Flier.",
        "'Abd Allah ibn Rawaha — poet, Ansari, hesitating only a moment with the thought of returning to family — rebuked himself in verse, took the banner, and was martyred too.",
        "The army was on the verge of collapse. A man named Thabit ibn Aqram took the banner and called out: 'Choose a leader from among yourselves!' The Muslims unanimously called: 'Khalid ibn al-Walid.' Khalid had only recently embraced Islam; this was his first battle on the Muslim side.",
        "What followed is one of the great feats of military history. Khalid took the banner and stabilised the line. Through the night he reorganised the army — moving units between flanks, swapping rear and front, raising dust columns to suggest reinforcements had arrived. By morning the Byzantines, suddenly facing what looked like a fresh army, hesitated. Khalid skilfully disengaged and brought the entire 3,000 home. He had broken nine swords in the battle. He earned the title from the Prophet ﷺ: Sayfullah — the Sword of Allah.",
        "In Madinah, the Prophet ﷺ stood on the minbar in tears and informed the Companions of the deaths of Zayd, Ja'far and Ibn Rawaha by the unseen — banner by banner — before any messenger arrived.",
      ),
      legacy: p(
        "Mu'tah ended a tactical defeat but a strategic warning. The Muslims had stood up to an empire of two hundred thousand and walked back. Within months Khalid would conquer Makkah; within ten years the Muslims would dismantle Byzantine Syria entirely.",
        "Ja'far al-Tayyar became one of the great martyred icons of Islam. Zayd's son Usama would lead the army the Prophet ﷺ dispatched on his deathbed. Khalid would never lose a battle.",
        "Mu'tah is the masterclass in succession planning, in calm under collapse, and in choosing the right leader at the right moment.",
      ),
      keyFacts: [
        "Jumada al-Ula 8 AH (629 CE) at Mu'tah, modern Jordan",
        "Muslims: 3,000; Byzantine and Arab Christian forces: c. 100,000+",
        "Three commanders martyred: Zayd ibn Haritha, Ja'far ibn Abi Talib, 'Abd Allah ibn Rawaha",
        "Khalid ibn al-Walid took command and saved the army",
        "Khalid given the title Sayfullah — the Sword of Allah",
      ],
      lessons: [
        "Plan succession before the battle, not during it",
        "Numbers do not decide outcomes — sincerity and intelligence do",
        "A safe withdrawal can be a greater victory than reckless martyrdom",
        "The banner must always be held — by stumps if hands are gone",
        "Allah grants new wings to those who give their arms",
      ],
    },
  },
  {
    id: "battle-tabuk",
    title: "The Expedition of Tabuk — The Last Campaign",
    description:
      "In the heat of high summer, with crops to harvest and rumours of a Byzantine invasion, the Prophet ﷺ called the ummah to march 700 km north — and Ka'b ibn Malik's repentance for staying behind became one of the most famous passages of the Qur'an.",
    category: "MajorBattles",
    readTime: "8 min",
    sections: {
      intro: p(
        "The Expedition of Tabuk was the last military campaign led by the Prophet ﷺ in person, in Rajab 9 AH (October 630 CE). It was undertaken in response to credible reports that the Byzantine emperor Heraclius was massing an army to invade Arabia from the north.",
        "It was called Ghazwat al-'Usra — the Campaign of Hardship — for good reason. It came in the worst heat of the year, just before the date harvest, requiring a 700 km march to the northern frontier of Arabia. It was the supreme test of sincerity for the Muslim community after the conquest of Makkah.",
      ),
      life: p(
        "The Prophet ﷺ broke his usual practice of concealing the destination and announced openly that he was marching against the Byzantines, so that those coming would prepare adequately. He called for funds and provisions.",
        "'Uthman ibn 'Affan equipped a third of the army on his own — 300 camels with their loads, 50 horses, and 1,000 dinars in gold which he laid before the Prophet ﷺ. The Prophet ﷺ poured the gold onto his lap and turned the coins over with his hand, saying: 'Nothing 'Uthman does after this day will harm him.' Abu Bakr brought everything he owned. 'Umar brought half of his.",
        "The hypocrites stayed behind, gave excuses, and tried to discourage others. Some genuine Companions also stayed behind without excuse — Ka'b ibn Malik chief among them. He had means, he had health, he had every reason to march. He simply procrastinated, day after day, until the army left without him.",
        "The 30,000-strong Muslim army marched north through brutal heat. Ten men shared each camel. Water was scarce. At one point they found a spring at Tabuk that produced barely enough for a finger to wet; the Prophet ﷺ made wudu and rinsed his mouth into it, and the spring gushed out enough water for the entire army.",
        "At Tabuk, no Byzantine army was found. Heraclius, hearing of the Muslim mobilisation, had decided not to commit. The Prophet ﷺ camped at Tabuk for around 20 days, during which he received a number of border tribes and Christian rulers who came to make treaties — securing the entire northern Arabian frontier without a battle.",
        "The march back was its own trial. Then, in Madinah, the famous reckoning came. Three Companions had stayed behind without excuse: Ka'b ibn Malik, Murara ibn al-Rabi', and Hilal ibn Umayya. The hypocrites were quickly exposed and the Prophet ﷺ left their judgment to Allah. But these three were sincere believers. The Prophet ﷺ commanded the Muslims to stop speaking to them.",
        "For 50 days, no Muslim greeted them, sat with them, or returned their salam. Even their wives were sent away. Ka'b describes in his own words the agony — the streets felt strange, his closest friend would look the other way. He climbed a hill in Madinah and wept. A Christian Ghassanid king sent him a letter offering him asylum and high position — Ka'b burned the letter on the spot, saying: 'This too is a test.'",
        "On the 50th day, at dawn, after fajr, a man climbed a mountain near Madinah and shouted with all his strength: 'O Ka'b ibn Malik, rejoice!' Allah had revealed verses 117–119 of Surat al-Tawba accepting their repentance. Ka'b prostrated, gave away his clothes in joy, and went to the Prophet ﷺ whose face was shining like the moon.",
      ),
      legacy: p(
        "Tabuk completed the consolidation of Arabia under Islam without a single major engagement. The mere movement of the Muslim army secured the northern borders and established the precedent for Muslim engagement with the Byzantine world.",
        "The verses revealed about it — al-Tawba 117–119 — are among the most beloved passages of the Qur'an on repentance: '...until the earth, with all its vastness, became constrained for them, and their souls were constrained for them, and they realised that there is no refuge from Allah except to Him. Then He turned to them so they might repent. Indeed Allah is the Accepter of Repentance, the Merciful.'",
        "Ka'b's narrative, preserved in Sahih al-Bukhari, is one of the most psychologically detailed accounts of repentance in religious literature. It is read at the end of every Sira class as a reminder that the door of tawba is never shut.",
      ),
      keyFacts: [
        "Rajab 9 AH (October 630 CE)",
        "Muslim army: c. 30,000 — the largest yet assembled",
        "March of c. 700 km north in extreme summer heat",
        "Last campaign personally led by the Prophet ﷺ",
        "No major battle; northern borders secured by treaty",
        "Repentance of Ka'b ibn Malik recorded in Surat al-Tawba 117–119",
      ],
      lessons: [
        "Sincerity is tested when the mission is hardest, not easiest",
        "Generosity in a time of crisis is recorded forever",
        "Procrastination of one obligation can cost weeks of sorrow",
        "Burn the offers of the enemy when you fall — the test continues",
        "The door of tawba is never closed, no matter how long the silence",
      ],
    },
  },
];
