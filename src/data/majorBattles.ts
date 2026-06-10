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
  {
    id: "battle-ain-jalut",
    title: "The Lion of 'Ayn Jalut: The Defeat of the Mongol Horde",
    description:
      "The decisive clash at the Spring of Goliath where Sultan Saif-ad-Din Qutuz and his Mamluk cavalry shattered the Mongol myth of invincibility, forever shielding the Islamic heartlands from total annihilation.",
    category: "MajorBattles",
    readTime: "7 min",
    sections: {
      intro: p(
        "The Battle of 'Ayn Jalut, occurring in 658 AH (1260 CE), stands as a pivotal moment in Islamic and world history. After the catastrophic fall of Baghdad in 1258 CE and the brutal execution of the Abbasid Khalifah, the Mongol horde under Hulagu Khan appeared unstoppable. Having leveled the Levant and sacked Damascus, the Mongols sent ambassadors to Cairo with a chilling demand for unconditional surrender, threatening the Mamluk Sultanate—the last bastion of organized Muslim resistance—with total destruction.",
        "In this hour of existential peril, Sultan Saif-ad-Din Qutuz rose to the occasion. A former slave who ascended to the throne of Egypt, Qutuz recognized that the survival of the Ummah depended on unity, sacrifice, and a decisive military confrontation. Alongside his brilliant general, Rukn-ad-Din Baybars, Qutuz prepared a force that would venture out of Egypt to meet the Mongol general Kitbuqa at the Spring of Goliath ('Ayn Jalut) in Palestine, marking the first time the Mongol advance was decisively halted and reversed.",
      ),
      life: p(
        "Following the fall of Baghdad in 656 AH, the Mongol commander Kitbuqa seized Damascus and Aleppo. Sultan Qutuz in Cairo received a letter from Hulagu Khan that mocked his origins and demanded total submission. Qutuz responded by executing the Mongol envoys and mounting their heads on the gates of Cairo, signaling that Egypt would fight to the last man. He then began the arduous task of mobilizing an army, even imposing a special tax on the wealthy to fund the defense, despite initial resistance from some emirs.",
        "On the 25th of Ramadan, 658 AH, the two forces met at 'Ayn Jalut. Qutuz utilized the geography of the Jezreel Valley to his advantage. He hid his main cavalry force in the surrounding highlands and sent a smaller vanguard, led by Rukn-ad-Din Baybars, into the valley. This was a classic feigned retreat tactic. Kitbuqa, believing he was pursuing the entire Mamluk force, charged headlong into the trap, falling into the palm of the Mamluk ambush.",
        "The battle was fierce and initially swung toward the Mongols. Their heavy cavalry nearly broke the Mamluk left flank. Seeing the distress of his men, Sultan Qutuz famously threw his helmet to the ground and shouted, 'Wa Islamah! Wa Islamah!' (O my Islam!). This cry for the sake of the faith galvanized his troops. He led a direct charge into the thick of the fray, personally engaging in combat to restore the morale of his soldiers. This turning point saw the Mamluks regain their footing and begin to push the Mongols back.",
        "General Kitbuqa refused to retreat and was eventually captured and executed. As the Mongol ranks broke, they fled toward Beth Shean, where a second stage of fighting occurred. The Mamluk pursuit was relentless; the Mongols were defeated so thoroughly that the myth of their divine mandate to rule was shattered. This marked the absolute western limit of the Mongol Empire's expansion into the Islamic world, saving the holy cities of Makkah, Madinah, and Jerusalem from potential desecration.",
      ),
      legacy: p(
        "The victory at 'Ayn Jalut fundamentally altered the course of history by securing the survival of Islamic civilization. Had the Mamluks fallen, Cairo—the last great center of Islamic learning, commerce, and power—would likely have suffered the same fate as Baghdad. The victory allowed the Mamluk Sultanate to consolidate power over Egypt and Syria, leading to a period of cultural and architectural flourishing and the eventual total expulsion of the Crusaders from the Levant.",
        "Furthermore, the battle broke the psychological spell of Mongol invincibility. It proved to the world that the Mongol military machine, which had conquered from Korea to Poland, could be defeated through superior tactics and unwavering faith. This shock encouraged further resistance across the Mongol frontiers and contributed to the eventual fragmentation of the Mongol Empire. The legacy of Qutuz and Baybars remains a symbol of defiance against overwhelming odds in Muslim historical consciousness.",
      ),
      keyFacts: [
        "Date: 25th of Ramadan, 658 AH (September 3, 1260 CE).",
        "Location: 'Ayn Jalut (Spring of Goliath), Jezreel Valley, Palestine.",
        "Belligerents: The Mamluk Sultanate of Egypt vs. the Ilkhanate Mongol Empire.",
        "Commanders: Sultan Saif-ad-Din Qutuz and General Rukn-ad-Din Baybars vs. Kitbuqa Noyan.",
        "Outcome: Decisive Mamluk victory; the first time a Mongol advance was permanently halted.",
      ],
      lessons: [
        "Unity under a sincere leader can overcome seemingly insurmountable external threats.",
        "Preparation and tactical intelligence are essential companions to spiritual reliance (Tawakkul).",
        "Internal political disputes must be set aside when the survival of the Ummah is at stake.",
        "True bravery is not the absence of fear, but the commitment to truth in the face of destruction.",
        "Victory is granted by Allah, but only to those who take the necessary means (Asbab).",
      ],
    },
  },
  {
    id: "battle-conquest-of-makkah",
    title: "The Conquest of Makkah: The Mercy of the Final Messenger ﷺ",
    description:
      "After years of persecution and exile, the Prophet Muhammad ﷺ returned to his birthplace with ten thousand believers to liberate the Ka'bah and establish justice through a historic, bloodless victory.",
    category: "MajorBattles",
    readTime: "8 min",
    sections: {
      intro: p(
        "The Conquest of Makkah, known in Islamic history as Fath Makkah, stands as the crowning achievement of the Prophetic mission and a turning point in world history. Occurring in the month of Ramadan, 8 AH, it represented the fulfillment of a divine promise made to the Messenger of Allah ﷺ when he was forced to migrate during the Hijrah. It was not merely a military victory, but a spiritual liberation of the sanctuary built by Ibrahim (AS), returning the city to the worship of the One True God.",
        "For the people of the Quraysh, who had spent two decades opposing, torturing, and waging war against the Muslims, the approach of the Islamic army was a moment of reckoning. Yet, what they encountered was not a vengeful conqueror, but a Prophet ﷺ characterized by immense humility and mercy. The entry into Makkah dismantled the structures of idolatry and tribalism, replacing them with a legacy of brotherhood and the universal call of the Adhan ringing from the roof of the Ka'bah.",
      ),
      life: p(
        "The catalyst for the conquest was the violation of the Treaty of Hudaybiyyah by the Quraysh. Their allies, the Banu Bakr, attacked the Banu Khuza’ah—who were under the protection of the Prophet ﷺ—at the spring of al-Watir. When the elders of Khuza'ah, led by 'Amr ibn Salim, reached Madinah and recited poetry detailing the betrayal, the Prophet ﷺ mobilized an army of ten thousand. He kept the destination a secret to ensure an element of surprise, praying to Allah to 'take away the eyes and ears' of the Quraysh so the city could be taken without bloodshed.",
        "Stopping at Marr al-Zahran, a few miles from Makkah, the Prophet ﷺ ordered each soldier to light an individual fire, creating the illusion of a massive, unstoppable force across the valley. Abu Sufyan, the leader of the Makkans, came out to investigate and was intercepted by al-Abbas (RA). Realizing the futility of resistance, Abu Sufyan embraced Islam. The Prophet ﷺ, in a brilliant move of psychological diplomacy, declared that anyone who entered Abu Sufyan's house, their own house, or the Masjid al-Haram would be safe, granting dignity to the head of the Quraysh.",
        "On the morning of the 20th of Ramadan, 8 AH, the Prophet ﷺ entered the city from its upper side (Kadaa) while riding his camel al-Qaswa. He bowed his head so low in humility to Allah that his beard almost touched the saddle. The army was divided into four columns: Khalid ibn al-Walid (RA) commanded the right wing, Az-Zubayr ibn al-Awwam (RA) the left, Abu Ubaydah (RA) the infantry, and Qays ibn Sa'd (RA) the Ansar. Aside from a small skirmish involving Khalid's column at al-Khandamah, the entry was entirely peaceful.",
        "Upon reaching the Ka'bah, the Prophet ﷺ performed Tawaf and began striking the 360 idols with his staff, reciting the verse from Surah al-Isra: 'Truth has come and falsehood has vanished; indeed falsehood is bound to vanish.' Among the dismantled idols was the great Hubal. He then called for Uthman ibn Talhah (RA) to bring the key to the Ka'bah. Inside, he ordered the removal of all pagan imagery. Bilal ibn Rabah (RA), the former slave who had been tortured on the burning sands of Makkah, was ordered to climb the roof of the Ka'bah to call the Adhan, signaling the end of the era of Jahiliyyah (ignorance).",
        "Standing at the door of the Ka'bah, with the people of Makkah waiting in trepidation, the Prophet ﷺ asked, 'O people of Quraysh! What do you think I am about to do with you?' They replied, 'Good. You are a noble brother and the son of a noble brother.' The Prophet ﷺ then spoke the immortal words of Prophet Yusuf (AS): 'No blame shall be upon you this day. Go, for you are the free ones.' This general amnesty led to a mass conversion that solidified the Islamic state and united the hearts of former enemies under the banner of Tawhid.",
      ),
      legacy: p(
        "The legacy of Fath Makkah is encapsulated in the concept of 'Mercy in Victory.' Unlike historical conquests characterized by pillaging and massacres, the Prophet ﷺ forbade his generals from initiating combat unless attacked. This event set the standard for Islamic international law regarding occupied territories and the treatment of non-combatants. It transformed Makkah from a stronghold of polytheism into the spiritual epicenter of the global Muslim Ummah, a status it has maintained for over fourteen centuries.",
        "Furthermore, the conquest led to the unification of the Arabian Peninsula. Following the fall of Makkah, delegations from across Arabia (the 'Year of Deputations') flocked to Madinah to pledge allegiance to Islam. The removal of the 360 idols symbolized the finality of the Prophetic struggle against shirk, ensuring that the Tawhid of Ibrahim (AS) would be preserved until the end of time. The legacy remains a testament to the fact that truth eventually triumphs over falsehood through patience and divine decree.",
      ),
      keyFacts: [
        "Date of Departure: 10th of Ramadan, 8 AH (January 630 CE) with 10,000 companions.",
        "Breach of Treaty: The Banu Bakr (allies of Quraysh) attacked Banu Khuza'ah (allies of Muslims) at the well of al-Watir.",
        "Entry into Makkah: 20th of Ramadan, 8 AH, through four separate mountain passes.",
        "Destruction of Idols: 360 idols surrounding the Ka'bah were destroyed including Hubal.",
        "General Amnesty: The Prophet ﷺ declared 'Go, for you are the free ones' to his former persecutors.",
        "Conversion of Leaders: Major figures like Abu Sufyan (RA) and Ikrimah ibn Abi Jahl (RA) embraced Islam.",
      ],
      lessons: [
        "Patience and perseverance in the face of injustice lead to eventual divine victory.",
        "True strength is demonstrated through the ability to forgive when one has the power to take revenge.",
        "Success should be met with humility and gratitude to Allah rather than arrogance or boasting.",
        "Protecting the sanctity of life and property is a core tenet of Islamic military ethics.",
        "The ultimate goal of any struggle is the establishment of truth and the removal of falsehood.",
      ],
    },
  },
  {
    id: "battle-constantinople-1453",
    title: "The Conquest of Constantinople: Fulfillment of the Prophecy",
    description:
      "Sultan Mehmed II led an unparalleled siege in 857 AH/1453 CE to conquer the Byzantine stronghold, finally fulfilling the centuries-old prophecy spoken by the Messenger of Allah ﷺ regarding its capture.",
    category: "MajorBattles",
    readTime: "8 min",
    sections: {
      intro: p(
        "Sultan Mehmed II, known as 'Al-Fatih' or The Conqueror, was the seventh ruler of the Ottoman State and a man of immense intellectual and spiritual depth. Born in 835 AH (1432 CE), he was raised under the strict guidance of scholars like Akshamsaddin, who instilled in him the burning ambition to be the leader praised by the Prophet ﷺ in the famous hadith: 'Verily you shall conquer Constantinople. What a wonderful leader will her leader be, and what a wonderful army will that army be!' (Musnad Ahmad).",
        "His character was a blend of relentless military strategy and profound piety. Fluent in several languages and a student of mathematics and philosophy, Mehmed II viewed the conquest not merely as territorial expansion, but as a religious obligation to secure the gateway between the East and West for Islam. At the age of only 21, he prepared to undertake a feat that had eluded many great Muslim commanders for nearly eight hundred years, from the time of the Umayyads to his own ancestors.",
      ),
      life: p(
        "The preparations for the conquest began in 856 AH (1452 CE) with the construction of the Rumeli Hisari fortress. Situated on the European side of the Bosphorus, this strategic masterpiece allowed Mehmed II to control the strait and cut off Byzantine supplies from the Black Sea. He commissioned the Hungarian engineer Orban to cast massive cannons, including the legendary 'Basilica' cannon, which was capable of firing stones weighing 600 kilograms over a distance of a mile. This was a radical departure from traditional siege warfare, focusing on devastating the city's ancient Theodosian Walls.",
        "On 26 Rabi' al-Awwal 857 AH, the Ottoman army—composed of approximately 80,000 men—assembled before the gates of Constantinople. The siege was grueling; the Byzantines had stretched a massive iron chain across the Golden Horn to block the Ottoman navy. Initial naval assaults failed, and the morale of the army wavered. However, Mehmed II, encouraged by his spiritual mentor Akshamsaddin, devised a masterstroke: he ordered his men to grease wooden planks and haul 70 ships overland across the hills of Galata, bypassing the chain to enter the Golden Horn by surprise.",
        "By late May, the walls had been weakened by constant bombardment. Despite numerous offers for peace and calls from European powers for a crusade to aid the Byzantines, Mehmed II remained firm. On the night of 19 Jumada al-Ula, he ordered his troops to light torches and engage in dhikr and prayer, creating an atmosphere of spiritual fervor that echoed across the Bosphorus. He addressed his commanders, reminding them of the words of the Prophet ﷺ and the honor of being the promised army.",
        "The final assault began at dawn on 20 Jumada al-Ula 857 AH (May 29, 1453 CE). Ottoman forces launched a three-pronged attack. The Janissaries, the elite guard, finally breached the walls at the Gate of St. Romanus. Amidst the chaos, the Byzantine Emperor Constantine XI was killed, and the resistance crumbled. By afternoon, Sultan Mehmed II entered the city on his horse. He immediately headed to the Hagia Sophia, where he demonstrated his mercy by forbidding the looting of the structure and granting safety to the civilians hiding within. He then led the first Jumu'ah prayer in the city, transitioning it into the new heart of Ismail.",
      ),
      legacy: p(
        "The conquest of Constantinople marked the official transition of the Ottoman state into a world-spanning Empire and shifted the center of Islamic gravity towards the Balkans and Anatolia. By securing the city, Mehmed II provided the Muslim world with a strategic capital that controlled the trade routes between the Black Sea and the Mediterranean, ushering in a golden age of Ottoman architecture, science, and jurisprudence. His governance model—which allowed for religious autonomy through the 'Millet' system—preserved the cultural fabric of the city while establishing its Islamic identity.",
        "Beyond the geopolitical shifts, the legacy of Al-Fatih is cemented in his fulfillment of the Prophet's ﷺ prophecy. This event boosted the morale of the Ummah and reaffirmed the truth of the Sunnah. The city, renamed Islambol (or Istanbul), became the seat of the Ottoman Caliphate until the early 20th century. For centuries, the mosques of Istanbul, particularly the Fatih Mosque, have stood as monuments to a leader who balanced the sword of justice with the pen of knowledge.",
      ),
      keyFacts: [
        "Siege commenced on 26 Rabi' al-Awwal 857 AH (April 6, 1453 CE).",
        "The successful conquest took place on 20 Jumada al-Ula 857 AH (May 29, 1453 CE).",
        "Construction of the Rumeli Hisari fortress on the Bosphorus in 856 AH (1452 CE).",
        "Deployment of the 'Şahi' (Basilica) super-cannon designed by the engineer Orban.",
        "Transport of 70 Ottoman ships overland across the heights of Galata into the Golden Horn.",
        "Conversion of the Hagia Sophia into a mosque following the city's surrender.",
      ],
      lessons: [
        "Sincerity of intention and tawakkul (reliance on Allah) are the foundations of victory.",
        "Success requires the marriage of spiritual guidance (the Ulama) and military expertise.",
        "Innovation and 'thinking outside the box' are essential when facing formidable obstacles.",
        "Islamic victory is characterized by justice and protection for the conquered people.",
        "Patience and persistence are necessary to fulfill long-standing divine promises.",
      ],
    },
  },
  {
    id: "battle-hattin",
    title: "The Lion of the Desert: The Battle of Hattin and the Liberation of Al-Quds",
    description:
      "Amidst the scorching sands of Galilee, Sultan Salah ad-Din Ayyubi orchestrated a masterful military victory at Hattin, dismantling the Crusader kingdom and paving the golden path toward the historic liberation of Jerusalem.",
    category: "MajorBattles",
    readTime: "9 min",
    sections: {
      intro: p(
        "Sultan Salah ad-Din Yusuf ibn Ayyub, known to the world as Saladin, was the visionary leader who unified the fragmented Muslim lands of Egypt, Syria, and Mesopotamia. His life’s mission was centered on the restoration of Al-Aqsa Mosque and the liberation of Al-Quds (Jerusalem) from the century-long occupation of the Frankish Crusaders. By the year 583 AH (1187 CE), his strategic patience and diplomatic prowess had successfully forged a unified front under the banner of Tawhid, setting the stage for one of the most decisive battles in Islamic history.",
        "The Battle of Hattin was more than a mere military engagement; it was a clash of civilizations and a turning point in the struggle for the Levant. Facing a massive coalition of the Crusader states led by King Guy of Lusignan and the treacherous Raynald of Châtillon, Salah ad-Din utilized his profound understanding of the terrain and the harsh summer climate to outmaneuver his opponents. This encounter remains a testament to his tactical genius and his unwavering commitment to the codes of Islamic chivalry and justice.",
      ),
      life: p(
        "In the spring of 583 AH (1187 CE), the truce between Salah ad-Din and the Crusader states was shattered when the rogue knight Raynald of Châtillon attacked a Muslim caravan and insulted the Prophet Muhammad ﷺ. Compelled by his duty to protect the honor of the Ummah, Salah ad-Din mobilized his forces. He crossed the Jordan River and drew the Crusader army away from their fortified positions at Sepphoris into the parched, treeless heights of the Horns of Hattin. By July 3rd, the Crusaders were trapped, exhausted by the heat, and completely cut off from the waters of Lake Tiberias.",
        "Throughout the night, the Muslim archers maintained a constant rain of arrows while setting fire to the dry scrub and grass downwind of the Crusaders. The smoke and heat were unbearable for the heavily armored knights. On the morning of July 4th (25 Rabi’ al-Thani), the Sultan ordered the final assault. Despite the desperate bravery of the knights, the Crusader infantry fled or was decimated. The King's red tent fell, and the 'True Cross'—the Crusader's most sacred relic—was captured. Salah ad-Din’s victory was total; nearly the entire military elite of the Latin Kingdom of Jerusalem was either killed or taken prisoner.",
        "Following the victory at Hattin, the coastal fortresses of Acre, Jaffa, and Beirut fell in rapid succession. The path to the Holy City was now clear. On September 20, 1187, Salah ad-Din laid siege to Jerusalem. The city’s defenders, led by Balian of Ibelin, realized the futility of resistance and entered into negotiations. Salah ad-Din, wanting to avoid a massacre of civilians and the destruction of the city’s holy sites, agreed to a peaceful surrender. He famously stated that he would not follow the precedent of the Crusaders' 1099 massacre but would instead show the nobility of Islam.",
        "On Friday, the 27th of Rajab 583 AH—the very day Muslims commemorate the Night Journey and Ascension (Al-Isra’ wal-Mi’raj) of the Prophet ﷺ—Salah ad-Din entered Jerusalem victoriously. The Cross was removed from the Dome of the Rock, and for the first time in 88 years, the Adhan (call to prayer) echoed through the city's streets. The Sultan and his soldiers performed the Jumu'ah prayer in Al-Aqsa, led by the Chief Qadi Muhyi ad-Din bin az-Zaki, whose sermon praised the Mujahideen for restoring the second mosque on earth and the first Qibla of Islam.",
      ),
      legacy: p(
        "The legacy of Salah ad-Din after the Battle of Hattin is defined by his extraordinary mercy during the conquest of Jerusalem. Unlike the bloodbath caused by the Crusaders in 1099 CE, Salah ad-Din prohibited any acts of revenge, allowing the defeated Christians to leave the city safely upon payment of a small ransom, and even waiving the fee for thousands of the poor. This conduct earned him the eternal respect of both Muslim and Christian chroniclers, such as Ibn Shaddad and Baha ad-Din, establishing him as the archetype of the 'just ruler' in Islamic tradition.",
        "Geopolitically, the victory at Hattin permanently broke the back of the Crusader states in the Levant. Although the Third Crusade would later attempt to reverse these gains, they could never recapture the Holy City. Salah ad-Din’s efforts restored the Islamic character of Jerusalem, purifying Al-Aqsa Mosque and the Dome of the Rock, while also ensuring that the region remained a center of Islamic scholarship and spiritual life for centuries to come.",
      ),
      keyFacts: [
        "Date of the Battle: 25 Rabi’ al-Thani 583 AH / July 4, 1187 CE.",
        "Location: The Horns of Hattin, near the Sea of Galilee (Lake Tiberias) in modern-day Palestine.",
        "The Siege of Jerusalem (Al-Quds) began on September 20, 1187, and ended with its surrender on October 2, 1187.",
        "Salah ad-Din's army consisted of approximately 30,000 soldiers, including cavalry and skilled archers.",
        "The Crusader King Guy of Lusignan and Raynald of Châtillon were captured; Raynald was executed for his repeated betrayals and insults to the Prophet ﷺ.",
        "The liberation of Jerusalem occurred on 27 Rajab 583 AH, coinciding with the anniversary of Al-Isra’ wal-Mi’raj.",
      ],
      lessons: [
        "Unity is the prerequisite for victory; Salah ad-Din spent years unifying Muslim factions before engaging the enemy.",
        "Strategic patience and utilizing the environment (such as denying water to the enemy) are essential components of military wisdom.",
        "Victory must be tempered with mercy; the preservation of civilian life is a core Islamic principle during war.",
        "Moral integrity and keeping one's word are the hallmarks of a true leader, as seen in Salah ad-Din's dealings with both friend and foe.",
        "Success is ultimately from Allah (SWT) and is granted to those who truly serve His cause and protect the sanctity of the Ummah.",
      ],
    },
  },
  {
    id: "battle-hunayn",
    title: "The Battle of Hunayn: Lessons in Valor and Sincerity",
    description:
      "Witness the pivotal moment of 8 AH where the Prophet ﷺ transformed a chaotic retreat into a miraculous victory, teaching the Ummah that triumph comes only from Allah and not numbers.",
    category: "MajorBattles",
    readTime: "8 min",
    sections: {
      intro: p(
        "Following the triumphant Conquest of Makkah in Ramadan 8 AH, a formidable alliance of the Hawazin and Thaqif tribes gathered to crush the rising Islamic state before it could solidify its power. Led by the young and arrogant Malik ibn Awf al-Nasri, these tribes mobilized an immense force of nearly twenty thousand warriors, bringing their families and livestock to the battlefield to ensure no man would contemplate retreat. In response, the Prophet ﷺ marched from Makkah with twelve thousand soldiers—the largest Muslim army ever assembled to that date—comprising the original Companions and two thousand newly converted Makkans known as the Tulaqa.",
        "The atmosphere among the Muslim ranks was one of unprecedented confidence, with some soldiers remarkably declaring that they could not be defeated that day due to their superior numbers. This overreliance on material strength set the stage for a divine trial in the winding valley of Hunayn. The ensuing engagement would serve as a profound spiritual lesson, etched into the Quran (Surah At-Tawbah), regarding the dangers of pride and the necessity of absolute reliance upon Allah (SWT) regardless of worldly means.",
      ),
      life: p(
        "In Shawwal 8 AH, the Muslim army entered the narrow, steep-walled valley of Hunayn during the twilight hours of early dawn. Unbeknownst to them, Malik ibn Awf had arrived earlier and positioned his archers and infantry in the concealed ravines and narrow passes of the valley. As the Muslim vanguard, led by Khalid ibn al-Walid (RA), pushed forward, they were suddenly met with a relentless hail of arrows and a ferocious downhill charge. The shock of the ambush, combined with the dim light, caused a massive panic, leading the newly converted Makkans and some experienced Sahaba to retreat in chaos.",
        "As the Muslim lines shattered and soldiers fled past him, the Prophet ﷺ remained remarkably firm on his white mule, Duldul. According to Sahih Muslim, he did not retreat but instead spurred his mount toward the enemy, loudly declaring: 'I am the Prophet, this is no lie; I am the son of Abdul Muttalib!' Beside him stood a loyal few, including his uncle al-Abbas (RA), his cousin Abu Sufyan ibn al-Harith (RA), and a handful of the Muhajirun and Ansar. Seeing the retreat, the Prophet ﷺ commanded al-Abbas (RA), who possessed a booming voice, to call out to the Companions of the Acacia Tree and the Ansar.",
        "The call of al-Abbas (RA) pierced through the valley, crying: 'O Companions of the Sura al-Baqarah! O you who took the Pledge of Ridwan!' The effect was instantaneous. Sahaba who had been swept away by the tide of retreat turned their horses back with such fervor that if a man could not turn his camel, he would discard his armor, leap off, and run toward the Prophet's ﷺ voice with his sword. Approximately a hundred men gathered first, forming a human shield around the Messenger of Allah ﷺ, soon followed by waves of returning warriors who regained their composure and discipline.",
        "At this critical juncture, the Prophet ﷺ took a handful of pebbles and threw them toward the enemy forces, saying, 'May their faces be disgraced!' This act was followed by a divine intervention; as mentioned in the Quran, Allah sent down 'invisible hosts' (angels) to strike terror into the hearts of the Hawazin. The tide of the battle turned violently. The very soldiers who had ambushed the Muslims now found themselves encircled and broken. Malik ibn Awf and the remnants of his army fled toward the fortified city of Ta’if, leaving behind their families and a massive amount of wealth.",
        "The aftermath of the battle saw the collection of massive spoils at al-Ji'ranah, including 24,000 camels and 40,000 sheep. When distributing these, the Prophet ﷺ gave large portions to the tribal leaders of Makkah to 'soften their hearts' (Mu'allafat al-Qulub). This caused a brief moment of distress among the Ansar, who felt overlooked. In a deeply emotional speech, recorded by Ibn Ishaq, the Prophet ﷺ asked them if they were not satisfied that while others went home with sheep and camels, they would return to Madinah with the Messenger of Allah ﷺ. The Ansar wept until their beards were soaked, reaffirming their total devotion to the cause.",
      ),
      legacy: p(
        "The Battle of Hunayn solidified the Prophet's ﷺ authority over the Arabian Peninsula, effectively ending large-scale organized tribal resistance against Islam in the Hijaz. By overcoming the Hawazin and Thaqif, the last major barriers to the spread of the faith in central Arabia were removed. The subsequent distribution of the spoils at al-Ji'ranah also demonstrated the Prophet's ﷺ profound political and spiritual wisdom, as he used the gifts to soften the hearts of the new converts while reaffirming his eternal bond with the Ansar of Madinah.",
        "The event remains a timeless theological reference point for Muslims, immortalized in the Quranic verses of Surah At-Tawbah (9:25-26). It serves as a perpetual reminder that 'Nasr' (victory) is a gift from Allah alone. The bravery of the Prophet ﷺ, standing firm while others fled, remains a cornerstone of Seerah literature, illustrating the physical and spiritual courage required of a leader. It taught the Sahaba (RA) that numerical superiority is meaningless without the 'Sakinah' (tranquility) sent down by Allah.",
      ),
      keyFacts: [
        "Date: Early Shawwal, 8 AH (January 630 CE).",
        "Location: The valley of Hunayn, situated between Makkah and Ta’if.",
        "Forces: 12,000 Muslims against nearly 20,000 Hawazin and Thaqif tribesmen.",
        "Enemy Commander: Malik ibn Awf al-Nasri, who later embraced Islam.",
        "Casualties: Significant initial losses for Muslims; 70-100 enemy dead and 6,000 captured during the rout.",
        "Outcome: Decisive Muslim victory followed by the Siege of Ta’if and the Battle of Autas.",
      ],
      lessons: [
        "Victory is granted by Allah’s grace, never by numerical or material superiority alone.",
        "Pride and self-reliance (ujb) are spiritual pitfalls that can lead to worldly defeat.",
        "A leader must remain steadfast and courageous even when those around them falter.",
        "Material wealth and spoils should be used as a means to unite hearts and propagate the faith.",
        "True loyalty, as shown by the Ansar, is rooted in the afterlife and the Prophet's ﷺ presence, not worldly gain.",
      ],
    },
  },
  {
    id: "battle-manzikert",
    title: "Shadows of the Crescent: The Victory at Manzikert",
    description:
      "In the 463rd year of the Hijrah, Sultan Alp Arslan led a vastly outnumbered Seljuk army to a miraculous victory against the Byzantine Empire, forever changing the course of Islamic history.",
    category: "MajorBattles",
    readTime: "7 min",
    sections: {
      intro: p(
        "The Battle of Manzikert represents one of the most decisive turning points in the history of the Muslim Ummah. It was the moment when the Great Seljuk Empire, led by the pious and formidable Sultan Alp Arslan, shattered the defensive bulwark of the Byzantine Empire. This victory did not merely signify a military triumph; it represented the spiritual and political rejuvenation of the Sunni Caliphate under the shadow of the Abbasids, opening the gates of Anatolia to the light of Islam.",
        "Sultan Alp Arslan, whose name means 'Heroic Lion,' was a man of deep faith and strategic brilliance. Facing a colossal Roman force that sought to extinguish the growing Seljuk influence, he chose the path of trust in Allah (Tawakkul). The struggle at Manzikert was seen by contemporary chroniclers like Ibn al-Athir and al-Dhahabi as a modern-day reenactment of Badr, where a smaller, more disciplined force overcame a gargantuan entity through superior tactics and unwavering conviction.",
      ),
      life: p(
        "In the summer of 1071 CE (463 AH), Sultan Alp Arslan was campaigning in Syria when he received news that Emperor Romanos IV Diogenes had assembled a massive army of nearly 60,000 men. This force, comprised of Byzantines, Normans, Franks, and Pecheneg mercenaries, was marching toward Armenia with the intent of reclaiming eastern territories and potentially striking the Seljuk capital. The Sultan, with only 15,000 of his elite cavalry, rushed northward to intercept them near the town of Manzikert. Recognizing the gravity of the situation, the Sultan sent a peace envoy, which the Emperor arrogantly rejected, demanding the Seljuks surrender their capital, Rayy.",
        "On the morning of Friday, August 26, Alp Arslan donned a white shroud (Kafan), perfumed himself, and declared that if he were to fall, this would be his burial garment. He sought the advice of his spiritual mentor, the scholar Abu Nasr Muhammad of Bukhara, who suggested that the battle take place during the Friday prayers when the Khatibs across the Muslim world were making Du'a for the Mujahideen. The Sultan dismounted, prostrated his face in the dust, and cried out to Allah for victory or martyrdom, deeply moving his soldiers who swore to fight to the death.",
        "The Seljuks employed the classic 'Turco-Mongol' feigned retreat tactic. As the heavy Byzantine infantry advanced, the light Seljuk archers harassed them from the flanks and then appeared to flee. Romanos, eager for a decisive blow, ordered his center to pursue, which thinned his lines and exhausted his troops in the summer heat. As evening approached and the Byzantine ranks grew disorganized, Alp Arslan ordered a fierce counter-attack. The Seljuk cavalry circled the Byzantine army in a crescent formation (the 'Crescent Tactic' or Wolf Trap), cutting off the wings and isolating the Emperor's center.",
        "The chaos was compounded by the desertion of some mercenaries and the betrayal of Andronikos Doukas, a political rival of the Emperor who led the reserve forces away from the field. By sunset, the Byzantine army was annihilated. In a moment unprecedented in Roman history, Emperor Romanos IV was captured by a common soldier and brought before the Sultan. When Alp Arslan asked the Emperor what he would do if he were the captor, Romanos replied he would likely kill the Sultan. Alp Arslan famously replied, 'My punishment is far heavier; I forgive you and set you free,' signifying the moral victory that accompanied the military one.",
      ),
      legacy: p(
        "The victory at Manzikert paved the way for the establishment of the Sultanate of Rum and eventually the Ottoman Empire. By breaking the Byzantine military backbone, Alp Arslan ensured that Anatolia would transition from a frontier of Christendom to the heartland of the Islamic world. The migration of Oghuz tribes into these lands changed the demographic and cultural landscape of the Middle East forever, providing a new strategic depth for the Ummah against later Mongol and Crusader incursions.",
        "Furthermore, Alp Arslan's conduct toward the defeated Emperor Romanos IV set a high standard for Islamic chivalry. Rather than executing his captive, he treated him with honor, reflecting the Sunnah of the Prophet ﷺ in dealing with fallen foes. This legacy of justice and mercy influenced future Muslim leaders, such as Salahuddin al-Ayyubi, in their dealings with Western powers. The battle remains a symbol of Turkish and Muslim identity, celebrated as the 'beginning of the end' for the medieval Roman grip on the East.",
      ),
      keyFacts: [
        "Date: 26 August 1071 CE (10 Dhul-Qi'dah 463 AH).",
        "Location: Near Manzikert (modern Malazgirt, Turkey), north of Lake Van.",
        "Belligerents: The Great Seljuk Empire vs. The Byzantine Empire.",
        "Commanders: Sultan Alp Arslan and Emperor Romanos IV Diogenes.",
        "Outcome: Decisive Seljuk victory and the capture of the Byzantine Emperor.",
        "Significance: The permanent Turkification and Islamization of Anatolia began.",
      ],
      lessons: [
        "Victory is granted by Allah through sincerity and Taqwa, not merely by superior numbers.",
        "The importance of seeking counsel (Shura) from the Ulama before major state decisions.",
        "Chivalry and mercy toward a defeated enemy are hallmarks of the Islamic character.",
        "Unity under a single, God-fearing leader can overcome seemingly insurmountable odds.",
        "Strategic patience and choosing the right time for battle are essential components of Sunnah warfare.",
      ],
    },
  },
  {
    id: "battle-nahavand",
    title: "The Battle of Nahavand: The Victory of Victories",
    description:
      "Following the decisive defeat at al-Qadisiyyah, the Sassanid Empire gathered an unprecedented force of 150,000 men at Nahavand to crush the Muslims, resulting in the final, monumental 'Victory of Victories.'",
    category: "MajorBattles",
    readTime: "7 min",
    sections: {
      intro: p(
        "The Battle of Nahavand, fought in 21 AH (642 CE), stands as the 'Fath al-Futuh' or the 'Victory of Victories' in the annals of Islamic history. It marked the final, climactic showdown between the Rashidun Caliphate and the Sassanid Persian Empire. After the fall of Ctesiphon and the defeat at al-Qadisiyyah, the Persian Emperor Yazdegerd III issued a final, desperate cry to his provinces, amassing a massive army of approximately 150,000 soldiers at the strategic mountain fortress of Nahavand, aiming to retake Iraq and extinguish the light of Islam forever.",
        "Recognizing the existential threat, the Caliph Umar ibn al-Khattab (RA) initially intended to lead the army himself from Madinah, but was advised by Ali ibn Abi Talib (RA) to remain as the symbolic center of the state. Umar (RA) appointed the noble Nu'man ibn Muqarrin (RA) as the supreme commander, entrusting him with a force of 30,000 seasoned warriors. This battle would not merely be a contest of arms, but a spiritual and geopolitical turning point that would dismantle a thousand-year-old empire and open the lands of the East to the message of the Prophet Muhammad ﷺ.",
      ),
      life: p(
        "As the year 21 AH began, reports reached Madinah that Yazdegerd III had assembled a massive coalition from Media, Fars, and Sistan. Al-Dhahabi notes in Siyar A'lam al-Nubala that the Persians were so confident in their numbers that they bound themselves together with chains to ensure no one would flee the battlefield. Umar (RA) responded by mobilizing the garrisons of Basra and Kufa. He chose Nu'man ibn Muqarrin (RA), a man of deep piety and military expertise, to lead the expedition, instructing him: 'If Nu'man is killed, then Hudhayfah ibn al-Yaman (RA) shall take command.'",
        "The initial phase of the conflict saw the two armies entrenched. The Persians, led by the veteran general Firuzan, utilized the mountainous terrain and set up formidable defenses including iron spikes (caltrops) to impede the Muslim cavalry. For several days, the Persians refused to emerge from their fortified positions, attempting to exhaust the Muslims in the harsh environment. Nu'man (RA) held a council of war with senior companions like Tulayha al-Asadi and Amr ibn Ma'adi Yakrib, deciding that they must draw the Persians out into the open plain.",
        "The Muslims executed a brilliant maneuver—a feigned retreat. Qa'qa ibn Amr (RA) led a small contingent to attack and then 'flee' in apparent panic. Seeing this, Firuzan believed the Muslims were broken and ordered his massive force to emerge from their trenches to pursue them. As the Persians poured onto the plain, the Muslims retreated until sunset. Nu'man ibn Muqarrin (RA) waited for the 'time the Prophet ﷺ used to prefer for battle'—after the sun had passed the meridian and the winds of victory began to blow. Standing before his men, he made a famous supplication: 'O Allah, grant me martyrdom and grant the Muslims victory.'",
        "The battle was fierce and bloody. The Muslims turned and struck with a ferocity that caught the Persians off guard. Nu'man (RA) rode at the front and was among the first to fall, his horse slipping on the blood-soaked ground. However, his brother draped a cloak over his body to keep his death a secret until the battle was won. Hudhayfah ibn al-Yaman (RA) took the standard and continued the assault. By nightfall, the Sassanid army was in total disarray. Thousands perished in the surrounding ravines as they tried to flee, and Firuzan himself was killed in the pursuit. The 'Victory of Victories' was complete, and the gates of Persia were flung wide open to Islam.",
      ),
      legacy: p(
        "The legacy of Nahavand is defined by its title, the 'Victory of Victories.' Unlike previous encounters where the Persians could regroup, this battle shattered the Sassanid military infrastructure. The central government of Yazdegerd III ceased to function effectively, forcing the Emperor into a lifetime of flight toward the eastern frontiers. This victory allowed the Muslims to penetrate the Persian heartland, eventually reaching Merv and the borders of India and China, transforming Islam from a regional Arabian power into a global civilization.",
        "Furthermore, Nahavand is remembered for the extraordinary piety and strategic brilliance of the Sahaba (RA). Al-Tabari records that when the news of the victory and the martyrdom of Nu'man reach Umar (RA) in Madinah, he wept bitterly, not for the territory gained, but for the loss of his righteous general. This reflected the ethos of the early community: they sought the pleasure of Allah and the spread of Tawhid (monotheism) rather than worldly conquest or imperial expansion.",
      ),
      keyFacts: [
        "Date: Safar, 21 AH (roughly 642 CE) during the Caliphate of Umar (RA).",
        "Location: Nahavand, a rugged mountainous region in modern-day Hamadan, Iran.",
        "Commanders: Nu'man ibn Muqarrin (RA) for the Muslims; Firuzan for the Sassanids.",
        "Army Sizes: Approximately 30,000 Muslim soldiers against 150,000 Sassanid troops.",
        "Outcome: Decisive Muslim victory leading to the collapse of the Sassanid central authority.",
        "Casualties: Significant on both sides, including the martyrdom of the Muslim commander Nu'man ibn Muqarrin (RA).",
      ],
      lessons: [
        "Strategic patience and the use of psychological warfare (the feigned retreat) are vital in overcoming superior numbers.",
        "The leader's place is where he can best serve the Ummah, even if it means staying behind the front lines, as advised by Ali (RA).",
        "Martyrdom is viewed as the ultimate personal success, as exemplified by Nu'man ibn Muqarrin's (RA) prayer for victory and Shahada.",
        "Unity of command and sound consultation (Shura) are the foundations of military and political success.",
        "Success comes from Allah alone, but it requires the utmost preparation and sincere reliance (Tawakkul).",
      ],
    },
  },
  {
    id: "battle-qadisiyyah",
    title: "The Battle of al-Qadisiyyah: The Collapse of the Sassanid Empire",
    description:
      "Amidst the shifting sands of Iraq, Sa'd ibn Abi Waqqas (RA) led a vastly outnumbered Muslim army to a miraculous victory against the Sassanid Empire, permanently altering the course of world history.",
    category: "MajorBattles",
    readTime: "8 min",
    sections: {
      intro: p(
        "The Battle of al-Qadisiyyah stands as one of the most pivotal military engagements in human history, marking the definitive shift of power from the ancient Sassanid Persian Empire to the rising Rashidun Caliphate. Commanded by Sa'ad ibn Abi Waqqas (RA), one of the 'Ten Promised Paradise' and a maternal uncle of the Prophet ﷺ, the Muslim forces faced a professional army that was vastly superior in numbers, armor, and technology, including the terrifying use of war elephants.",
        "This confrontation was not merely a conquest of land, but a clash of civilizations and ideologies. Under the spiritual and administrative guidance of Caliph Umar ibn al-Khattab (RA) from Madinah, the campaign sought to bring the message of Tawhid to the East. The four-day battle, which took place in the 15th year of the Hijra, tested the patience, discipline, and faith of the Sahaba (RA) and the Tabi'un, eventually leading to the collapse of the Persian defense and the opening of Iraq for Islam.",
      ),
      life: p(
        "In 15 AH (636 CE), Caliph Umar (RA) appointed Sa'd ibn Abi Waqqas (RA) as the supreme commander of the Iraqi front. Sa'd (RA) was a veteran of Badr and Uhud, known as the first to draw blood in the way of Allah. He marched from Madinah with a core of 4,000 men, augmenting his forces along the way until he reached roughly 30,000 at al-Qadisiyyah. For months, Sa'd (RA) followed Umar's (RA) strict instructions to remain camped on the edge of the desert, keeping his back to the wilderness for a safe retreat if necessary, while sending envoys to the Persian court.",
        "The diplomatic phase was marked by the famous exchange between the Sahabi Rib'i ibn 'Amir (RA) and the Persian General Rostam Farrokhzad. When asked what brought the Muslims, Rib'i (RA) famously declared that Allah had sent them to liberate whomsoever He willed from the narrowness of this world to its vastness. Rostam, despite his misgivings and celestial omens suggesting his defeat (as noted by al-Tabari), was pressured by the Persian nobility to cross the Atiq river and engage the Muslim forces on the first day, known as Yawm al-Armath.",
        "During the battle, Sa'd (RA) suffered from a severe case of sciatica and boils that prevented him from sitting on a horse. Showing immense resilience, he directed the entire four-day operation from the balcony of an old castle called Qudays, lying on his chest on a pillow and sending written instructions to his lieutenants, including Khalid ibn Arfatah and the legendary warrior Al-Qa'qa' ibn 'Amr al-Tamimi. The Persians initially gained an advantage using 33 war elephants that terrified the Arab horses, but the Muslims eventually countered by targeting the elephants' trunks and eyes.",
        "The fighting intensified through 'the Day of Agwath' and 'the Day of Imash' until it reached a climax on the fourth day, 'the Day of al-Qadisiyyah,' followed by 'the Night of al-Harir.' This final night was a brutal, continuous melee where the sounds of clashing iron were likened to the growling of dogs. By dawn, Al-Qa'qa' and his men broke through the Persian center. A soldier named Hilal ibn 'Ullafah managed to kill Rostam as he tried to flee across the canal. When Rostam’s death was announced, the Persian army collapsed in a chaotic retreat.",
        "Following the victory, Sa'd (RA) followed the retreating forces toward the Sassanid capital, Ctesiphon (al-Mada'in). In a miraculous event recorded by Ibn Kathir in al-Bidayah wan-Nihayah, the Muslim army crossed the swolllen Tigris river on horseback without losing a single soldier, an event that led the Persians to exclaim that 'demons' (Diwan) were coming. Sa'd (RA) eventually entered the White Palace of the Khosrau, where he prayed eight rak'ahs of the Prayer of Victory (Salat al-Fath), fulfilling the prophecy of the Prophet ﷺ who had promised the treasures of Persia to his Ummah.",
      ),
      legacy: p(
        "The victory at al-Qadisiyyah effectively broke the back of the Sassanid military machine. While the empire would linger for a few more years until the Battle of Nihawand, the loss of Iraq—the 'breadbasket' of the empire—and the subsequent fall of the capital, Ctesiphon (al-Mada'in), meant that the Persian Heartland was now open. It paved the way for the spread of Islam into Persia, Khorasan, and eventually Transoxiana and the Indian subcontinent.",
        "Culturally and religiously, the legacy of al-Qadisiyyah is found in the liberation of the local Arab and Persian populations from the rigid caste systems and heavy taxation of the late Sassanid era. The justice established by Sa'd (RA) and the subsequent governors saw a mass voluntary conversion to Islam over the following centuries, leading to the Islamic Golden Age where Persian scholars like Imam Bukhari and Sibawayh would become the giants of Islamic sciences.",
      ),
      keyFacts: [
        "Date: Muharram 15 AH / November 636 CE (some sources cite 16 AH).",
        "Location: Al-Qadisiyyah, south of modern-day Najaf, Iraq.",
        "Commanders: Sa'd ibn Abi Waqqas (RA) for the Muslims; Rostam Farrokhzad for the Persians.",
        "Forces: Approximately 30,000 Muslims against roughly 60,000 to 100,000 Persians.",
        "Key Outcome: The death of Rostam and the capture of the Derafsh Kaviani (the Persian Royal Standard).",
      ],
      lessons: [
        "Victory is granted by Allah through steadfastness (Sabr), regardless of numerical inferiority.",
        "The importance of Shura (consultation) and following the strategic guidance of the leadership.",
        "The power of a clear and noble mission: 'We have been sent to bring people from the worship of creation to the worship of the Creator.'",
        "Physical illness or disability (as Sa'd RA was ill during the battle) does not exempt one from leadership and contribution.",
        "The necessity of psychological warfare and diplomatic outreach before resorting to military conflict.",
      ],
    },
  },
  {
    id: "battle-yarmouk",
    title: "The Sword of Allah at Yarmouk: The Great Encounter",
    description:
      "In the windswept valley of the Yarmouk River, the strategic genius of Khalid ibn al-Walid (RA) shattered the Byzantine defenses, forever altering the geopolitical landscape of the Levant and the Near East.",
    category: "MajorBattles",
    readTime: "7 min",
    sections: {
      intro: p(
        "The Battle of Yarmouk remains one of the most decisive engagements in military history, marking the end of Byzantine rule in Syria and Palestine. Facing an imperial army that vastly outnumbered them, the Muslim forces relied on their unwavering faith, superior mobility, and the unrivaled tactical brilliance of Khalid ibn al-Walid (RA), known as the 'Sword of Allah.' This confrontation was not merely a clash of steel but a struggle for the future of the message of Islam in the Roman world.",
        "To ensure total coordination against the massive host led by Vahan and Theodore, the various Muslim commanders—including Abu Ubaydah (RA), Amr ibn al-Aas (RA), and Yazid ibn Abi Sufyan (RA)—voluntarily ceded overall command to Khalid (RA). His reorganization of the army into small, cohesive units called 'Karadis' allowed for a flexible defense-in-depth that would eventually turn a grueling six-day war of attrition into a total collapse of the Byzantine front.",
      ),
      life: p(
        "As the Byzantine Emperor Heraclius concentrated his massive imperial legions at the plains of Yarmouk in 15 AH, Khalid ibn al-Walid (RA) realized that the scattered Muslim detachments would be crushed individually. He persuaded Abu Ubaydah (RA) to consolidate all forces at the edge of the Yarmouk plateau. Here, the terrain was bounded by deep ravines, limiting the Byzantine ability to utilize their massive numbers to flank the Muslim lines. Khalid (RA) spent the weeks leading up to the battle reorganizing the tribal contingents into 36 to 40 infantry regiments to ensure better command and control.",
        "The battle commenced in August 636 CE and lasted for six grueling days. On the second and third days, the Byzantine heavy infantry and archers launched massive assaults, particularly targeting the Muslim right and left flanks. On several occasions, the Muslim lines buckled under the pressure of the 'Rain of Arrows.' It was during these crises that the Muslim women, led by figures like Hind bint Utbah, stood at the rear of the camp, driving the retreating soldiers back to the front with stern words and pebbles, reinforcing the resolve of the defenders.",
        "Khalid’s (RA) masterpiece was the use of his 'Mobile Guard.' Stationed behind the center, this elite cavalry unit acted as a fire brigade, galloping to any point in the line that was close to breaking. On the fourth day, known as the 'Day of Lost Eyes' due to the intensity of Byzantine archery, the Muslim center held firm despite heavy casualties. Khalid (RA) waited for the Byzantine cavalry to become separated from their infantry, a tactical error he exploited with surgical precision on the fifth and sixth days.",
        "On the final day, the 20th of August, Khalid (RA) shifted from a defensive posture to a massive counter-offensive. He unified his entire cavalry into a single striking force, driving a wedge between the Byzantine horsemen and their footsoldiers. Once the Byzantine cavalry was driven off the field, the infantry was trapped against the steep ravines of the Wadi-ur-Raqqad. As the sun set, the exhausted imperial army collapsed; thousands fell into the chasm, and the commander Vahan was killed. Khalid (RA) offered a prayer of gratitude, having executed one of the most successful envelopments in the history of warfare.",
      ),
      legacy: p(
        "The victory at Yarmouk effectively ended the Byzantine Empire's ability to field large-scale armies in the Levant. Within years of the battle, major cities including Jerusalem and Antioch surrendered to Muslim authority. The battle is studied to this day in military academies across the world as a masterpiece of mobile warfare and the 'indirect approach,' demonstrating how a smaller force can defeat a numerical giant through terrain mastery and psychological dominance.",
        "Beyond military strategy, the legacy of Yarmouk is found in the administrative justice that followed. Al-Tabari records that the local Christian populations often preferred Muslim rule over Byzantine heavy taxation and theological persecution. This victory facilitated the spread of Islam into North Africa and Anatolia, establishing a new civilization that would preserve and advance human knowledge for centuries to come.",
      ),
      keyFacts: [
        "Date: Rajab 15 AH / August 636 CE.",
        "Location: Yarmouk River valley, south of the Sea of Galilee, near the modern borders of Syria, Jordan, and Israel.",
        "Forces: Approximately 30,000–40,000 Muslims against an estimated 100,000–150,000 Byzantines.",
        "Commanders: Khalid ibn al-Walid (RA) for the Muslims; Vahan and the Prince Theodore for the Byzantines.",
        "Key Units: The Mobile Guard (Tulay'a Muharrika), Khalid's elite 4,000-man cavalry reserve.",
        "Outcome: Decisive Rashidun victory leading to the fall of Damascus and Jerusalem.",
      ],
      lessons: [
        "Unity of command is essential for success in times of crisis.",
        "Faith and conviction act as force multipliers against superior numbers.",
        "Calculated risk-taking and mobility can overcome static defensive power.",
        "Justice toward the conquered is the best way to secure a victory's longevity.",
        "The humility of the Sahaba (RA) allowed them to serve under different leaders without ego.",
      ],
    },
  },
  {
    id: "battle-zallaqa",
    title: "The Battle of Zallaqa: The Shield of al-Andalus",
    description:
      "A pivotal moment in Islamic history where the Almoravid leader Yusuf ibn Tashfin crossed the straits to unite the fractured Taifa kingdoms and halt the Christian Reconquista against overwhelming odds.",
    category: "MajorBattles",
    readTime: "6 min",
    sections: {
      intro: p(
        "The Battle of Zallaqa, known in Western historiography as Sagrajas, represents one of the most decisive military encounters in the history of Islamic Spain. By the late 11th century (5th century AH), the once-mighty Umayyad Caliphate of Cordoba had fractured into numerous small, competing city-states known as the Taifa kingdoms. These petty rulers, often paying tribute (parias) to Christian kings, found themselves defenseless against the northern expansion led by Alfonso VI of Castile and León, who captured the strategic city of Toledo in 478 AH/1085 CE. ",
        "Desperate and facing extinction, the Taifa kings, led by al-Mu'tamid ibn Abbad of Seville, turned their eyes toward the Maghreb. Across the sea, the Almoravid (al-Murabitun) movement, under the austere and brilliant leadership of Yusuf ibn Tashfin, had unified North Africa under a banner of strict Maliki Sunni orthodoxy. Despite the risk that the Almoravids might annex their lands, al-Mu'tamid famously declared that he would rather tend camels in the African desert than herd swine in Castile, setting the stage for a historic intervention that would preserve Islam in al-Andalus for another four centuries.",
      ),
      life: p(
        "Following the fall of Toledo in 1085 CE, Alfonso VI demanded exorbitant tributes and threatened to seize every Muslim stronghold. Yusuf ibn Tashfin, having received the pleas of the Andalusian scholars and the envoy of al-Mu'tamid, took Istikhara and crossed the Straits of Gibraltar with a massive force in the summer of 479 AH. Upon landing at Algeciras, he fortified the base and marched toward Seville, where he was joined by the local Andalusian forces. Yusuf, a man of profound piety who lived a simple life of wool garments and barley, insisted that the campaign be fought solely for the sake of Allah.",
        "The combined Muslim army marched north toward Badajoz. According to the chronicles of Ibn al-Athir, Yusuf ibn Tashfin followed the Prophetic Sunnah by offering Alfonso VI three choices: to embrace Islam, to pay the jizya, or to decide the matter on the battlefield. Alfonso, emboldened by his previous successes and a superior number of knights, chose the sword. He attempted to deceive the Muslims by suggesting a truce for the Sabbath (Saturday) and Sunday, intending to strike early Friday morning, but his scouts were spotted, and the Muslim camp remained on high alert.",
        "The battle commenced on Friday, the 12th of Rajab, 479 AH. Alfonso launched a ferocious charge against the Andalusian front lines, which began to buckle under the weight of the Christian heavy cavalry. Al-Mu'tamid ibn Abbad fought with immense bravery, sustaining several wounds but refusing to retreat. Seeing the pressure, Yusuf ibn Tashfin deployed his reserve—the elite Almoravid guard and the famous Black Guard. They utilized a tactical maneuver, circling the Christian flank and attacking the Castilian camp, creating chaos in the enemy's rear.",
        "The psychological turning point occurred when the Almoravid drums began to thunder—a sound the Christian knights had never encountered. The noise, combined with the sight of Yusuf's camel corps, frightened the Christian horses, causing them to bolt. In the ensuing melee, the disciplined Almoravid infantry, armed with long spears and hippopotamus-hide shields (Lamti), decimated the Castilian ranks. Alfonso VI himself narrowly escaped the slaughter with a small bodyguard, suffering a severe wound to the leg that left him with a lifelong limp.",
        "As the sun set on the plains of al-Zallaqa—so named because the ground became 'slippery' with the blood of the fallen—the Muslim forces offered prayers of gratitude. Yusuf ibn Tashfin, adhering to his ascetic nature, refused to take any of the spoils for himself, leaving the wealth to the Andalusian kings. He returned to North Africa shortly after the victory to deal with the death of his son, but his impact remained. The threat to Islamic Spain had been neutralized, and the cry of 'Allahu Akbar' continued to echo from the minarets of Cordoba and Granada.",
      ),
      legacy: p(
        "The victory at Zallaqa fundamentally altered the trajectory of the Iberian Peninsula. It provided an immediate reprieve for the beleaguered Muslims and checked the momentum of the Christian Reconquista, which had seemed unstoppable after the fall of Toledo. Yusuf ibn Tashfin’s subsequent decision to depose the ineffective Taifa kings and annex al-Andalus into the Almoravid Empire brought a period of administrative and military stability, ensuring that Islamic culture, science, and jurisprudence could continue to flourish in the West.",
        "Beyond the geopolitical shifts, Zallaqa remained a symbol of Islamic unity and North African solidarity with the Muslims of Europe. It demonstrated the effectiveness of the disciplined, infantry-focused Almoravid tactics against the traditional heavy cavalry of Europe. The battle is remembered by historians such as Ibn Khallikan and al-Dhahabi as a 'Day of Salvation' (Yawm al-Furqan) for the Andalusian people, preserving the mosques and scholars of the region for centuries to come.",
      ),
      keyFacts: [
        "Battle Date: Friday, 12th of Rajab, 479 AH (October 23, 1086 CE).",
        "Location: Sagrajas (al-Zallaqa), near the city of Badajoz, modern-day Spain.",
        "Commanders: Yusuf ibn Tashfin for the Almoravids and Alfonso VI for the Kingdom of Castile.",
        "Outcome: A crushing victory for the Muslim forces, halting the Christian advance for generations.",
        "Forces: An alliance of Almoravid Berbers and Taifa levies against the heavy cavalry of the North.",
      ],
      lessons: [
        "Unity is the primary condition for victory over external threats.",
        "True leadership requires humility and priority for the Ummah over personal throne.",
        "Moral and religious reform often precedes military success and political stability.",
        "Preparation and tactical discipline can overcome superior numbers and heavy weaponry.",
        "The fate of the Ummah is global; the suffering of one land requires the response of another.",
      ],
    },
  },
];
