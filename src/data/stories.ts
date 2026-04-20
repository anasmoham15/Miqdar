import { sahabaPart1 } from "./sahabaPart1";
import { sahabaPart2 } from "./sahabaPart2";

export type StoryCategory = "Prophets" | "Sahaba";

export interface StorySections {
  /** Who They Were — intro, lineage, origins, character */
  intro: string[];
  /** Their Life & Mission — detailed account, key events, struggles, triumphs */
  life: string[];
  /** Their Legacy — what they're known for, what they left, why they matter */
  legacy: string[];
  /** Key Facts — bullet list */
  keyFacts: string[];
  /** Lessons We Can Take — practical takeaways */
  lessons: string[];
}

export interface Story {
  id: string;
  title: string;
  description: string;
  category: StoryCategory;
  readTime: string;
  sections: StorySections;
  /** Optional legacy flat content (kept undefined for new entries) */
  content?: string[];
}

export const categoryMeta: Record<
  StoryCategory,
  { label: string; arabic: string; blurb: string; source: string }
> = {
  Prophets: {
    label: "Prophets (AS)",
    arabic: "الأنبياء",
    blurb: "The 25 prophets named in the Qur'an",
    source:
      "Based on Imam Ibn Kathir's Qisas al-Anbiya (Stories of the Prophets), with reference to the Qur'an and his Tafsir.",
  },
  Sahaba: {
    label: "Sahaba (RA)",
    arabic: "الصحابة",
    blurb: "Companions of the Prophet ﷺ",
    source:
      "Based on classical sources including Siyar A'lam al-Nubala by al-Dhahabi, Sahih al-Bukhari, Sahih Muslim, and al-Isaba by Ibn Hajar.",
  },
};

const p = (...paragraphs: string[]) => paragraphs;

export const stories: Story[] = [
  // ============================================================
  // PROPHETS (25) — based on Ibn Kathir's Qisas al-Anbiya
  // ============================================================
  {
    id: "adam",
    title: "Adam (AS) — The First Human",
    description:
      "Created by Allah's own hand, taught the names of all things, tested in Paradise, and sent down as the father of humanity.",
    category: "Prophets",
    readTime: "9 min",
    sections: {
      intro: p(
        "Adam (AS) is the father of all human beings — the first man Allah created and the first prophet Allah sent. Ibn Kathir, drawing from the Qur'an and the authentic narrations, describes him as a being formed directly by the hand of Allah, raised tall and beautiful, taught knowledge no other creature was given, and honoured above the angels themselves.",
        "His lineage has no human ancestor. He was fashioned from clay gathered from every region of the earth — black, white, red, brown, soft and hard, sweet and bitter — which is why his descendants vary in colour, character and temperament. Allah breathed into him from His spirit, and Adam came alive sneezing, and his first words were words of praise: 'Alhamdulillah.'",
        "His character was that of a soft-hearted, deeply repentant servant. He combined dignity with humility, knowledge with awe of Allah, and when he erred he turned back to his Lord without delay. He was known among the angels for the names Allah had taught him, and among his descendants as the prophet whose tears washed away his slip in Paradise.",
      ),
      life: p(
        "Before his creation, Allah announced to the angels: 'Indeed, I am going to place upon the earth a successor.' The angels, who had seen the corruption of an earlier creation on the earth, asked: 'Will You place upon it one who causes corruption and sheds blood, while we declare Your praise and sanctify You?' Allah answered: 'Indeed, I know that which you do not know.'",
        "Allah shaped Adam from clay and left his form for a time before breathing life into him. When he came alive, Allah taught him the names of all things — every creature, every object, every concept. Then He presented these to the angels and asked them to name them, and they confessed: 'Glory be to You; we have no knowledge except what You have taught us.' Adam named them all. By this Allah showed the angels the rank of knowledge.",
        "Allah then commanded the angels to prostrate to Adam in honour. All did — except Iblis, who was of the jinn, and refused out of arrogance. He said: 'I am better than him. You created me from fire and created him from clay.' For this refusal Iblis was cursed and cast out, and he asked respite until the Day of Judgement, vowing to mislead Adam's children from every angle. Allah granted the respite as a test.",
        "Adam was placed in Paradise with his wife Hawwa (Eve), whom Allah created as a companion for him. They were told: 'Eat from it freely wherever you wish, but do not approach this tree.' Iblis whispered to them with persistence, swearing falsely that the tree would grant them eternal life. They ate from it. Immediately their nakedness was exposed to them, and they began stitching together leaves of Paradise to cover themselves.",
        "They were sent down to the earth — Adam, Hawwa, and Iblis as their enemy. But before they were sent down, Adam received words from his Lord and turned to Him in deep repentance: 'Our Lord, we have wronged ourselves; if You do not forgive us and have mercy upon us, we will surely be among the losers.' Allah accepted his repentance and chose him.",
        "On earth Adam built a life with his children. He was given guidance, and his sons Habil (Abel) and Qabil (Cain) became the site of the first crime among humanity, when one brother killed the other out of envy. Adam grieved deeply, but continued to teach his children to worship Allah alone, and his lineage spread over the earth.",
      ),
      legacy: p(
        "Adam (AS) is remembered as the father of mankind and the first link in the unbroken chain of prophethood. Every prophet after him traced his lineage back to him, and every human being on earth is his descendant. His story establishes the very framework of human existence: a being created with honour, given free will, tested with command and prohibition, and offered the door of repentance whenever he falls.",
        "Ibn Kathir highlights that Adam's repentance is the founding model of tawbah. He did not despair when he slipped; he turned, he wept, he pleaded — and he was accepted. From his story comes the believer's certainty that no sin is greater than Allah's mercy if the servant returns to Him in truth.",
        "He also bequeathed to humanity the dignity of being honoured by Allah's own hand, the burden of being a Khalifah (successor) on the earth, and the lifelong reality that Iblis is a sworn enemy who must be resisted by knowledge, prayer and the company of the righteous.",
      ),
      keyFacts: [
        "The first human and first prophet of Allah",
        "Created directly by Allah from clay gathered across the earth",
        "Taught by Allah the names of all things",
        "Honoured by the prostration of the angels (except Iblis)",
        "Married to Hawwa (Eve), the mother of mankind",
        "Mentioned by name in the Qur'an in 25 places",
        "Father of Habil and Qabil — the first murder occurred between his sons",
        "Lived approximately 1,000 years according to many classical scholars",
      ],
      lessons: p(
        "Knowledge has the highest rank with Allah. Adam was honoured above the angels not by strength or by worship but by what Allah taught him. Seek beneficial knowledge, because it is the basis of every honour Allah gives.",
        "Arrogance is the foundation of disbelief. Iblis worshipped Allah for ages, but a single moment of arrogance — preferring his own logic over Allah's command — destroyed everything. Guard your heart from feeling superior to anyone.",
        "Sin is human, but despair is not. When Adam fell, he did not run from Allah; he ran to Him. The shaytan wants you to feel too dirty to repent — refuse him by turning back immediately, no matter how often you slip.",
        "Iblis is a real, sworn enemy. Take seek-refuge (ta'awwudh), prayer, Qur'an and the company of believers seriously. The whisper that ruined our father in Paradise still works on us today through different costumes.",
        "Honour your humanity. You carry the breath of the spirit Allah Himself blew into Adam. Live in a way that honours that origin — with knowledge, modesty, repentance, and worship of the One who created you.",
      ),
    },
  },

  {
    id: "idris",
    title: "Idris (AS) — The Truthful, Raised to a High Station",
    description:
      "A prophet of immense worship and knowledge, the first to write with the pen, raised by Allah to a high place.",
    category: "Prophets",
    readTime: "6 min",
    sections: {
      intro: p(
        "Idris (AS) is among the earliest prophets after Adam, and the first prophet to be sent after his father Shith ibn Adam. Ibn Kathir lists his lineage as Idris, son of Yard, son of Mahla'il, descending back to Shith and Adam (AS). Many scholars identify him with the figure known in earlier traditions as Enoch.",
        "He lived in the period when the descendants of Adam were beginning to drift from the pure tawhid taught to them. The Qur'an gives him a remarkable description: 'And mention in the Book Idris. Indeed, he was a man of truth and a prophet. And We raised him to a high station.' (Maryam 19:56-57)",
        "His character was defined by truthfulness (siddiqiyyah), constancy in worship, and the pursuit of knowledge. Classical reports describe him as gentle in manner, dignified in bearing, and so engaged in dhikr that his daily worship was said to outweigh that of all the people of his age combined.",
      ),
      life: p(
        "Idris (AS) was sent as a prophet to the descendants of Qabil and to others among the children of Adam who had begun to introduce errors into their religion. He called them back to worship Allah alone, to uphold justice, and to live by the laws Adam had taught.",
        "Ibn Kathir narrates that he was the first human being to write with the pen, the first to study the science of the stars and to compute time, and the first to stitch and wear sewn garments — before him people wore skins. These crafts and sciences were given to him as instruments to help mankind worship Allah with order and clarity.",
        "He combined knowledge with intense worship. It is reported that no act of his was lifted to the heavens by the angels except that it was greater than the combined deeds of his contemporaries. This was not because of long hours alone, but because of the sincerity, presence and gratitude with which he performed every act.",
        "When his time on earth approached, Allah honoured him with the title 'raised to a high station.' Many of the early scholars, including those Ibn Kathir cites, understood this to mean a special elevation — that he is alive in an honoured place in the heavens. The famous narration of the Mi'raj of the Prophet ﷺ mentions meeting Idris in the fourth heaven, who greeted him as 'the righteous prophet and the righteous brother.'",
      ),
      legacy: p(
        "Idris (AS) is remembered as the first prophet after Adam to bring writing, structured knowledge and the calendar to humanity — gifts that allowed prophetic guidance to be preserved and transmitted across generations. He stands as proof that worldly skill and deep worship are not opposites; they are companions when both are pursued for Allah.",
        "His title 'a man of truth' (siddiq) became one of the highest ranks in religion — the rank later given to Maryam, to Yusuf, and to Abu Bakr. From him the Ummah inherits the lesson that truthfulness, in word and inner state, is the road that lifts a servant to high places with Allah.",
        "His being 'raised to a high station' became a sign for every believer that nearness to Allah is not measured by the length of one's life on earth, but by the quality of one's connection to Him — a connection that can lift even a single soul above the noise of an entire age.",
      ),
      keyFacts: [
        "One of the earliest prophets after Adam (AS)",
        "Identified by many scholars with Enoch in earlier traditions",
        "First human being to write with the pen",
        "Pioneer of the science of the stars and the calculation of time",
        "First to stitch and wear sewn garments",
        "Described in the Qur'an as 'a man of truth, a prophet'",
        "Met by the Prophet ﷺ in the fourth heaven during the Mi'raj",
        "Mentioned by name in Surah Maryam and Surah Al-Anbiya",
      ],
      lessons: p(
        "Beneficial knowledge is a form of worship. Reading, writing, learning a craft and recording truth for the next generation are all acts that can carry your name to a 'high station' if intended for Allah.",
        "Truthfulness raises a person more than any title. Be the kind of person whose word is trusted in small things and large, in private and public — that is the path of the siddiqun.",
        "Quality of worship matters more than quantity. Idris's deeds were heavier than entire generations because of his sincerity. Polish the heart behind the act, not just the act itself.",
        "Live for what is lasting. Worldly skills come and go, but skills used in service of Allah's deen become legacy. Choose pursuits whose benefit reaches beyond your own lifetime.",
      ),
    },
  },

  {
    id: "nuh",
    title: "Nuh (AS) — Nine and a Half Centuries of Patient Calling",
    description:
      "The first messenger after the rise of idolatry, who called his people for 950 years, built the Ark, and was saved with the believers from the great flood.",
    category: "Prophets",
    readTime: "12 min",
    sections: {
      intro: p(
        "Nuh (AS) is described in Ibn Kathir's Qisas al-Anbiya as the first messenger Allah sent to the people of the earth after they had fallen into open shirk. His full lineage, as Ibn Kathir gives it, traces back through Lamak ibn Mattushalakh ibn Idris ibn Yard… all the way back to Shith ibn Adam (AS). He is therefore among the closest of the early prophets to Adam in lineage.",
        "He lived at a time when ten generations had passed since Adam upon Islam — pure tawhid. Then shaytan exploited the love people had for five righteous men named Wadd, Suwa', Yaghuth, Ya'uq and Nasr. After they died, statues were made of them as 'reminders.' A generation later, those statues were being worshipped. This was the first idolatry on earth.",
        "Nuh's character was a perfect blend of unwavering tawhid and immense gentleness. He carried his message for nearly a thousand years through ridicule, threat and persecution, and yet his speech to his people was never bitter or vengeful. He pleaded with them like a father pleading with stubborn children, alternating between hope, warning, and tender invitation.",
      ),
      life: p(
        "Allah sent Nuh (AS) to a people drowning in idolatry and arrogance. From the very beginning he gave them the simplest, clearest call: 'O my people, worship Allah; you have no deity other than Him.' He warned them of a great Day, and he promised them forgiveness, rain, wealth and children if they would only return to their Lord.",
        "He persisted for nine hundred and fifty years. The Qur'an records his complaint to Allah: 'My Lord, indeed I invited my people night and day, but my invitation increased them not except in flight. And indeed, every time I invited them that You may forgive them, they put their fingers in their ears, covered themselves with their garments, persisted, and were arrogant with great arrogance.' (Nuh 71:5-7)",
        "He varied his methods endlessly. He called them publicly and privately, by night and by day, with promises and with warnings, with reasoning and with reminders of Allah's blessings. The leaders of his people answered with mockery, calling him misguided, accusing him of seeking superiority, demanding he expel the poor and weak who had believed before they would consider his message.",
        "Among his trials was that his own wife disbelieved, and one of his sons refused to believe. Yet he never abandoned his post. After centuries of patient calling, Allah finally revealed: 'No one will believe from among your people except those who have already believed. So do not be distressed by what they have been doing.'",
        "Then came the command: build the Ark. He was instructed to construct it on dry land, far from any sea, using specific dimensions revealed to him. As he built, the disbelievers passed by and laughed: 'O Nuh, has the prophet become a carpenter? Where is the sea you will sail this in?' He answered with dignity: 'If you ridicule us, then we will ridicule you just as you ridicule. And you are going to know who will get a punishment that will disgrace him.'",
        "When the Ark was complete, Allah commanded him to load a pair of every kind of animal, his family — except those against whom the word had preceded — and the believers, who were few. The earth gushed with water from beneath, and the sky poured from above; the two waters met as Allah had decreed.",
        "His son stood on a hill, and Nuh called to him with a father's anguish: 'O my son, come aboard with us and be not with the disbelievers!' The son replied: 'I will take refuge on a mountain to protect me from the water.' Nuh said: 'There is no protector today from the decree of Allah, except for whom He gives mercy.' A wave came between them, and the son was among the drowned.",
        "Nuh, in his grief, called out to Allah: 'My Lord, indeed my son is of my family, and indeed Your promise is true.' Allah replied with a verse that defines the criterion forever: 'O Nuh, indeed he is not of your family; indeed, he is one of unrighteous conduct.' Nuh immediately turned to Allah in repentance for asking what he had no knowledge of — a moment Ibn Kathir highlights as proof of his perfect submission.",
        "After the flood subsided, the Ark settled on Mount Judi. Allah said: 'O Nuh, descend in peace from Us and blessings upon you and upon nations from those with you.' From Nuh and his three believing sons — Sam, Ham, and Yafith — humanity was renewed. For this reason Nuh is often called 'the second father of mankind.'",
      ),
      legacy: p(
        "Nuh (AS) is remembered as the prophet of unimaginable patience, the first to be sent to a people drowning in shirk, and the second father of humanity through whom Allah preserved the human line. He is one of the five Ulul-'Azm — the messengers of firm resolve — alongside Ibrahim, Musa, 'Isa and Muhammad ﷺ.",
        "Ibn Kathir notes that the story of Nuh establishes the most important principle in da'wah: the duty of the caller is the call, not the result. Nine hundred and fifty years of effort produced very few believers, yet his standing with Allah is among the highest of all creation. Numbers do not measure success in front of Allah; sincerity does.",
        "The story of his son also became a permanent reminder for the Ummah: lineage to a prophet does not save a person. Every individual is judged by faith and action. The wife of Nuh and the wife of Lut are paired in the Qur'an as warnings; the wife of Pharaoh and Maryam are paired as inspirations — proving that faith, not family, is the criterion.",
      ),
      keyFacts: [
        "First messenger sent after the rise of idolatry on earth",
        "One of the five Ulul-'Azm (messengers of firm resolve)",
        "Called his people for 950 years to worship Allah alone",
        "Built the Ark by direct command and dimensions revealed by Allah",
        "Saved with believers and a pair of every kind of animal",
        "His own wife and one of his sons disbelieved and perished",
        "The Ark settled on Mount Judi after the flood",
        "An entire surah of the Qur'an is named after him (Surah Nuh)",
      ],
      lessons: p(
        "Patience in calling to Allah is itself the worship. Nuh did not see mass conversion; he saw nearly a thousand years of rejection. Yet he remained gentle, varied his approach, and never gave up. Sincere effort over years is more valuable than dramatic results in a moment.",
        "Lineage saves no one. If the son of a prophet of Allah was not saved by his father's status, no relative of yours — and no good ancestry — will save you. Build your own faith and your own deeds.",
        "Methods must change, but the message must not. Nuh called day and night, openly and privately, with warning and with promise. Be flexible in how you invite people to good, but never compromise the core of tawhid.",
        "Mockery is a sign of weakness, not of strength. The disbelievers laughed at the Ark on dry land — until the rain began. Stay focused on Allah's command; the laughter of people ends, but Allah's promise does not.",
        "When you slip even slightly with Allah, return immediately. Nuh, a prophet, asked Allah a question without knowledge and at once turned in repentance. The fastest way back to Allah is the moment you realise you have stepped outside His pleasure.",
      ),
    },
  },

  {
    id: "hud",
    title: "Hud (AS) — Sent to the Mighty People of 'Ad",
    description:
      "A prophet of pure Arab lineage, sent to the towering people of 'Ad in southern Arabia, who were destroyed by a furious wind for their arrogance.",
    category: "Prophets",
    readTime: "8 min",
    sections: {
      intro: p(
        "Hud (AS) was an Arab prophet, sent to the people known in the Qur'an as 'Ad. Ibn Kathir traces his lineage to Hud ibn 'Abdullah ibn Rabah, descending eventually to Sam ibn Nuh — making him a descendant of Nuh through one of his believing sons.",
        "His people, 'Ad, lived in Al-Ahqaf — a region of curving sand dunes in the south of the Arabian peninsula, between Yemen and Oman. They were the first great nation after Nuh's people. Allah blessed them with extraordinary physical strength, towering height, fertile lands, abundant water and engineering skill — they 'erected on every elevated place a sign, just to amuse themselves' and built strong fortresses.",
        "Hud's character was that of a calm, articulate caller, completely fearless before powerful men. He was their brother — from among them, of their own tribe — so they knew his honesty intimately. He spoke with reason, with respect for their intelligence, and yet with utter clarity that there is no god but Allah.",
      ),
      life: p(
        "When 'Ad turned to idolatry and arrogance, Hud (AS) called them with the gentle and powerful words recorded in the Qur'an: 'O my people, worship Allah; you have no deity other than Him. Will you not fear Him?' He pointed them to the favours Allah had given them — strength, wealth, fertility — and asked them to recognise the One who had given them all this.",
        "The leaders of 'Ad answered with insult: 'Indeed, we see you in foolishness, and indeed we think you are of the liars.' He answered without anger: 'O my people, there is no foolishness in me; rather, I am a messenger from the Lord of the worlds. I convey to you the messages of my Lord, and I am to you a trustworthy adviser.'",
        "He reasoned with their pride. They boasted of their strength; he reminded them that the One who created them is stronger. They boasted of their fortresses; he reminded them that no wall holds back Allah's command. He invited them to ask forgiveness, promising in Allah's name that He would send the sky upon them in showers and increase them in strength.",
        "They responded by clinging more tightly to their idols, defying him to bring upon them what he warned of, and continuing in oppression. Allah first withheld the rain. The land that had flowed with water dried up. Their crops died. Their livestock weakened. Yet they did not return.",
        "Then they saw a great cloud advancing across the sky from the horizon. They rejoiced, saying: 'This is a cloud bringing us rain.' Hud, by Allah's revelation, told them: 'Rather, it is that for which you were impatient: a wind, within it a painful punishment.'",
        "The wind, called in the Qur'an the rih sarsar — a furious, freezing, screaming wind — raged for seven nights and eight days in succession. It uprooted the people of 'Ad like 'hollow trunks of palm trees fallen down.' Their fortresses, their bodies, their possessions — all became dust. Hud and the believers with him were saved by Allah's mercy.",
      ),
      legacy: p(
        "Hud (AS) is remembered as the first Arab prophet, sent to one of the greatest civilisations of his age. His story stands as a permanent witness that no amount of physical strength, technological achievement or worldly power can shield a people from Allah when arrogance and shirk take hold.",
        "Ibn Kathir notes that the ruins of 'Ad were once visible and well-known to the Arabs. Their disappearance is itself a sign — they have become a proverb: 'gone like 'Ad.' The Qur'an addresses later generations directly: 'Have you not seen how your Lord dealt with 'Ad — Iram, who possessed lofty pillars, the like of whom had never been created in the lands?' (Al-Fajr 89:6-8)",
        "His legacy in da'wah is the example of dignified speech under insult. He was called foolish; he answered with truth. He was threatened; he warned of Allah's mercy before His punishment. The Ummah inherits from him a model of how the caller to Allah should respond when the powerful mock him.",
      ),
      keyFacts: [
        "First Arab prophet, sent to the people of 'Ad",
        "His people lived in Al-Ahqaf in southern Arabia",
        "'Ad were known for towering height and immense physical strength",
        "Mentioned in multiple surahs including Al-A'raf, Hud, and Al-Ahqaf",
        "His people were destroyed by a violent wind lasting 7 nights and 8 days",
        "Hud and the believers with him were saved by Allah's mercy",
        "His tribe is referred to in the Qur'an as 'Iram dhat al-'imad' — Iram of the lofty pillars",
        "Surah Hud in the Qur'an is named after him",
      ],
      lessons: p(
        "Strength without humility ends in ruin. 'Ad had everything a society could want, but pride hollowed them out. Whatever Allah has given you — body, intellect, wealth, status — receive it as a trust, not as proof of your superiority.",
        "Da'wah requires composure under insult. Hud was called a fool by leaders of his own people; he answered with calm reason and clear truth. Train yourself to respond, not react, when calling people to good.",
        "Recognise blessings before the warning comes. Hud reminded his people of the rain, the strength, the fertility — all signs of Allah's grace. Cultivate the habit of seeing Allah's hand in every favour, before its absence forces you to notice.",
        "Mass culture is not a measure of truth. An entire mighty civilisation rejected Hud, and a small group believed. The crowd is not always right. Stand with the truth even when only a few are with you.",
      ),
    },
  },

  {
    id: "salih",
    title: "Salih (AS) — The She-Camel of Thamud",
    description:
      "Sent to Thamud, who carved homes into mountains, with a miraculous she-camel as a sign — and the destruction that followed when they hamstrung her.",
    category: "Prophets",
    readTime: "8 min",
    sections: {
      intro: p(
        "Salih (AS) was sent to the people of Thamud, who succeeded 'Ad as the great power of Arabia. Ibn Kathir traces his lineage to Salih ibn 'Ubayd ibn Asif, descending back to Sam ibn Nuh. Like Hud, he was a brother of his people — from their own lineage and tribe.",
        "Thamud lived in Al-Hijr, a region in the north-west of the Arabian peninsula (today known as Mada'in Salih). They were master architects who carved entire homes, palaces and storehouses into the faces of solid mountains — many of which still stand as a silent witness to this day. They were skilled in agriculture, blessed with springs and gardens, and proud of their wealth.",
        "Salih's character combined gentleness with absolute clarity. He was loved among his people before his prophethood — they had hoped he would be one of their leaders. He was patient with their objections, generous in his appeals, and never cursed them even at the moment of their destruction.",
      ),
      life: p(
        "Salih (AS) called Thamud to the same message every prophet brought: 'O my people, worship Allah; you have no deity other than Him. He has produced you from the earth and settled you in it; so ask forgiveness of Him and then repent to Him.'",
        "His people asked him to prove his prophethood. They demanded a specific sign: that a she-camel emerge alive from a particular rock. Salih warned them that if Allah granted this miracle, they must protect the camel and not harm her — for if they did, severe punishment would come.",
        "By Allah's command, a magnificent, pregnant she-camel emerged from the rock as they had asked. She was unlike any camel they had ever seen. Salih instructed them: she would have her appointed day at the water — drinking the entire share — and they would have theirs. She would graze freely in the land, and none could harm her.",
        "For a time they obeyed. The camel drank her share, and on her day she gave milk so abundant that the entire community drank from it. Yet hatred grew in the hearts of certain leaders who could not bear the sign of Salih's truth in front of them every day.",
        "Nine men of corruption in the city plotted against the camel. The Qur'an names the most wretched of them, who 'arose' to commit the deed. They hamstrung the camel, then slaughtered her — defying Salih and Allah openly.",
        "Salih warned them: 'Enjoy yourselves in your homes for three days. That is a promise not to be denied.' On the first day their faces turned yellow; on the second, red; on the third, black. On the fourth morning, a mighty blast — al-sayhah — seized them from above. The Qur'an describes them as left lifeless in their homes, 'as if they had never prospered there.' Salih and the believers with him had already departed by Allah's command.",
      ),
      legacy: p(
        "Salih (AS) is remembered as the prophet whose miracle was a sign visible to every eye, walking and grazing in front of his people every day. His story stands as a permanent reminder that a clear sign does not produce belief in a heart already closed by arrogance.",
        "The ruins of Thamud's mountain homes still stand at Mada'in Salih in modern-day Saudi Arabia. The Prophet Muhammad ﷺ passed by them on his way to Tabuk and instructed his companions to hurry through, weeping, and not to drink from the wells of those who had wronged themselves — except the well from which Salih's camel had drunk. The site remains a living warning to humanity.",
        "Ibn Kathir highlights another principle from this story: a small number of corrupt people can bring catastrophe upon an entire community when the rest stay silent. The Qur'an mentions only nine men who plotted against the camel — but the punishment fell upon all of Thamud, because the rest accepted the act and shared in its guilt.",
      ),
      keyFacts: [
        "Prophet sent to the people of Thamud in Al-Hijr (modern Mada'in Salih)",
        "His people carved homes and palaces into mountains",
        "His miracle was a she-camel that emerged alive from a rock",
        "The camel had her own day at the water and gave milk for the whole town",
        "Nine men of corruption plotted to hamstring her",
        "Thamud was destroyed by a mighty blast (al-sayhah)",
        "Mentioned in many surahs including Al-A'raf, Hud, Ash-Shu'ara, and Ash-Shams",
        "The Prophet ﷺ visited the ruins on his way to Tabuk and forbade lingering there",
      ],
      lessons: p(
        "Signs do not soften a heart already proud. Thamud had a miracle living among them — and they killed it. Faith comes from humility before truth, not from spectacle.",
        "Silence in the face of public wrong is participation. Only nine men struck the camel, but Allah destroyed an entire people because the rest let them do it. Speak against evil even if your only weapon is your tongue.",
        "Allah always gives time before the punishment. Three full days were given to Thamud to repent, with their faces themselves announcing what was coming. Allah is also giving us time. Use it before it ends.",
        "Sites of destroyed nations are signs, not entertainment. The Prophet ﷺ taught his companions to pass through such places weeping. When you hear of past nations destroyed, take it personally — they are mirrors, not stories.",
      ),
    },
  },

  {
    id: "ibrahim",
    title: "Ibrahim (AS) — Khalilullah, the Friend of Allah",
    description:
      "From breaking idols and the fire that became cool, to the sacrifice of his son and the building of the Ka'bah — the father of prophets.",
    category: "Prophets",
    readTime: "15 min",
    sections: {
      intro: p(
        "Ibrahim (AS) is one of the greatest figures in human history — Khalilullah, the chosen Friend of Allah, the father of the prophets, the imam of the monotheists. Ibn Kathir traces his lineage to Ibrahim ibn Azar (Tarakh), descending back to Sam ibn Nuh. He was born in Mesopotamia in the time of King Nimrud, in a society sunk in idolatry, star-worship and fire-worship.",
        "Even his own father, Azar, was a maker of idols. The whole society was built around shrines and statues. Yet from his earliest youth Ibrahim's mind refused to accept that worked stone could be a god. He used reason, observation and an honest heart to reach the truth — a truth Allah Himself had placed in him as a prophet.",
        "His character is the model of a prophet's character: deeply gentle, deeply patient, deeply truthful, and deeply ready to give up everything for Allah. The Qur'an describes him as awwah — one who weeps and sighs constantly out of love and humility before Allah — and halim, exceedingly forbearing. He also had perfect courage in defence of tawhid, ready to face fire, exile, and the sacrifice of his own son when Allah commanded.",
      ),
      life: p(
        "From his youth, Ibrahim (AS) reasoned with his father and his people: 'O my father, why do you worship that which does not hear and does not see and will not benefit you at all?' He pleaded with his father in the most beautiful, gentle tone, calling him 'O my father' four times in a single passage of Surah Maryam — even as Azar threatened to stone him.",
        "He confronted his people through their own logic. One night he watched a star and said, 'This is my Lord' — then when it set, he said, 'I do not love those that set.' He repeated this with the moon and the sun. By this exercise he taught them that anything that disappears, anything contingent, anything created cannot be a god. 'I have turned my face toward He who created the heavens and the earth, inclining toward truth, and I am not of those who associate others with Allah.'",
        "Then came the great confrontation. The people went out for a festival; Ibrahim stayed behind. He entered the temple of idols and smashed them all to pieces — all except the largest, on whose shoulder he placed the axe. When the people returned and accused him, he said: 'Rather, this — the largest of them — did it. So ask them, if they should be able to speak.' They were silenced by their own reasoning. They turned upon themselves: 'You know they do not speak.' But pride won, and they decided: 'Burn him and support your gods.'",
        "They built a fire so vast that birds could not fly over it. They catapulted Ibrahim into its heart. Allah commanded: 'O fire, be coolness and safety upon Ibrahim.' Ibn Kathir narrates that he sat in the flames as if in a garden, untouched. Many witnesses came to faith from this miracle, though the leaders only grew harder.",
        "He confronted King Nimrud himself, who claimed to give life and death by sparing one prisoner and executing another. Ibrahim silenced him with a single sentence: 'Indeed, Allah brings up the sun from the east, so bring it up from the west.' The tyrant was stunned to silence.",
        "After years of calling, Ibrahim left his homeland with his nephew Lut, his wife Sarah, and a small group of believers. He travelled through Sham, then to Egypt, where a tyrant tried to seize Sarah; Allah protected her, and the tyrant gave her a slave-girl, Hajar, as compensation.",
        "Sarah was unable to bear children. With her permission, Ibrahim married Hajar, who gave birth to Isma'il. Then, by Allah's command — a command that broke every human instinct — Ibrahim took Hajar and the infant Isma'il deep into the barren valley of Makkah and left them there with a small bag of dates and a skin of water. As he turned to leave, Hajar called out, 'Has Allah commanded you with this?' He answered, 'Yes.' She said, 'Then He will not let us be lost.'",
        "When the water ran out and her child cried with thirst, Hajar climbed the hill of Safa to look for help, then ran to Marwah, then back to Safa, seven times. From these runs comes the rite of Sa'i. As she returned to her child, Zamzam burst forth from beneath his feet — a spring that has flowed without interruption for thousands of years. The tribe of Jurhum settled there because of the water, and Isma'il grew up among them.",
        "Years later Ibrahim was shown in a dream — a true dream, the dream of prophets — that he was sacrificing his son. He told Isma'il: 'O my son, indeed I have seen in a dream that I am sacrificing you, so see what you think.' His son answered with a calm that has echoed through the ages: 'O my father, do as you are commanded; you will find me, if Allah wills, of the steadfast.'",
        "Both submitted. As Ibrahim placed his forehead to the ground (or, as some narrations say, his son's forehead), Allah called out: 'O Ibrahim, you have fulfilled the vision.' A great ram was sent down as a ransom, and the test was complete. From this came the Eid sacrifice — performed by Muslims all over the world every year.",
        "Later, by Allah's command, father and son together raised the foundations of the Ka'bah in Makkah. The Qur'an records their prayer at every stone: 'Our Lord, accept this from us. Indeed You are the All-Hearing, the All-Knowing.' They asked Allah to make Makkah a sanctuary, to send to its people a messenger from among them, to make their hearts incline toward this house. Every word of that prayer was answered — most fully in the sending of Muhammad ﷺ.",
      ),
      legacy: p(
        "Ibrahim (AS) is the father of the prophets. From his son Isma'il came the line that produced Muhammad ﷺ. From his son Ishaq came Ya'qub and from him the line of the Israelite prophets — Yusuf, Musa, Dawud, Sulaiman, 'Isa. Every prophet from his time onward is from his progeny.",
        "He is also the imam of monotheism. The Qur'an names him hanifan musliman — pure in faith and submitting — and instructs Muslims directly to follow 'the religion of Ibrahim.' The shahadah, the Hajj, the sacrifice, the Sa'i between Safa and Marwah, the Ka'bah itself, the salah ('Allahumma salli 'ala Muhammad… kama sallayta 'ala Ibrahim…') — all carry his fingerprint.",
        "Ibn Kathir highlights that his entire life was a series of greater and greater submissions: the fire, the migration, leaving Hajar in the desert, the sacrifice. Each was harder than the last, and each was met with the same answer: 'Yes.' This is why Allah named him khalil — friend — a rank no other prophet was given.",
      ),
      keyFacts: [
        "Khalilullah — the chosen Friend of Allah",
        "Father of Isma'il (ancestor of Prophet Muhammad ﷺ) and Ishaq (ancestor of the Israelite prophets)",
        "One of the five Ulul-'Azm messengers",
        "Born in Mesopotamia in the time of King Nimrud",
        "Cast into a great fire that Allah made cool and safe upon him",
        "Migrated through Sham and Egypt; settled his family in Makkah",
        "Built the Ka'bah with his son Isma'il (AS)",
        "Mentioned by name in 25 surahs of the Qur'an; an entire surah is named after him",
        "His life is the source of the Hajj rituals, the Eid sacrifice, and the Sa'i",
      ],
      lessons: p(
        "Submission is the heart of Islam. Every great moment in Ibrahim's life was preceded by 'yes' to a command that crushed his human preferences. True faith is not just feeling — it is obedience when obedience is hardest.",
        "Reason and revelation are not enemies. Ibrahim used clear reasoning with the stars, the moon, the sun, the broken idols and Nimrud — and that reasoning led him to revelation. Use your mind to seek truth, and follow it where it leads.",
        "Be gentle with parents, even when they are wrong. Ibrahim's address to his idol-worshipping father remains the gold standard: 'O my father…' four times, with patience, love and clarity. Never let religious correctness become an excuse for harshness with parents.",
        "Hajar's words — 'Then He will not let us be lost' — are a complete tawakkul. When Allah places you in a hard place by His command, do not panic. Run between your Safas and Marwahs sincerely, and your Zamzam will burst from where you do not expect.",
        "Build for Allah even if you will never see the fruits. Ibrahim and Isma'il laid the stones of the Ka'bah praying, 'accept from us.' Today billions face that house. Plant trees whose shade you will never sit under, for Allah's sake.",
      ),
    },
  },

  {
    id: "lut",
    title: "Lut (AS) — Sent to the People of Sodom",
    description:
      "The nephew of Ibrahim, sent to a people who openly committed indecency, and the destruction that overturned their cities.",
    category: "Prophets",
    readTime: "8 min",
    sections: {
      intro: p(
        "Lut (AS) was the nephew of Ibrahim (AS). His father Haran was Ibrahim's brother. He believed in his uncle's call from the very beginning and was among the first to make hijrah with him from Iraq toward Sham. Ibn Kathir lists him among the early monotheists who left their homeland for Allah.",
        "After travelling with Ibrahim, Allah sent Lut as a prophet to the people of Sadum (Sodom) and the surrounding cities, located in the region of the Dead Sea in present-day Palestine and Jordan. The land was fertile, prosperous, and well-known to passing caravans.",
        "Lut's character was that of a clean-hearted, deeply ashamed man who carried the weight of his people's open indecency on his soul. He was hospitable, gentle in his household, and firm in tongue when truth required. He never once approved of what his people did, and he never tired of warning them.",
      ),
      life: p(
        "The people of Sodom were the first nation in human history to openly invent and normalise the act of approaching men with desire instead of women. They did not merely fall into private sin; they made it public, celebrated, and forced upon strangers and travellers passing through their cities. They also robbed travellers and committed evil openly in their gatherings.",
        "Lut (AS) called them with clarity: 'Do you commit such immorality as no one has preceded you with from among the worlds? Indeed, you approach men with desire, instead of women. Rather, you are a transgressing people.' He reminded them that Allah had created spouses for them to find tranquillity in, and that this open inversion of the natural order would destroy them.",
        "Their answer is preserved in the Qur'an in chilling words: 'Expel the family of Lut from your city! Indeed, they are people who keep themselves pure.' What should have been a compliment — purity — they used as an accusation. Even his own wife was on their side; she would inform them whenever a guest came to Lut's home.",
        "Lut continued for years, calling, warning, pleading. Finally, Allah sent angels to him in the form of beautiful young men, after they had first visited Ibrahim and given him glad tidings of Ishaq. When the angels arrived at Lut's house, he was deeply distressed — he did not yet know they were angels, and he feared what his people would do to such guests.",
        "Word spread through the city. The crowd came rushing, eager and shameless. Lut stood at his door, pleading with them: 'O my people, these are my daughters; they are purer for you. So fear Allah and do not disgrace me concerning my guests.' They mocked him: 'You know we have no right to your daughters; and indeed, you know what we want.'",
        "In that moment of agony Lut said the famous words: 'If only I had against you some power or could take refuge in a strong support.' The angels then revealed themselves: 'O Lut, indeed we are messengers of your Lord; they will never reach you. So set out with your family in a portion of the night and let none of you look back — except your wife. Indeed, she will be struck by what strikes them.'",
        "He led his small family out by night. At dawn the command came. The cities were lifted up and overturned upon themselves, and Allah rained upon them stones of baked clay in succession, marked from your Lord. His wife, who had betrayed him in faith, was struck by the same punishment as her people. Lut and his believing daughters were saved.",
        "Ibn Kathir mentions that the area where the cities once stood became the Dead Sea — a body of water in which nothing lives, salty and lifeless, lying below sea level — a permanent geographical sign for every traveller who passes by it.",
      ),
      legacy: p(
        "Lut (AS) is remembered as the prophet sent against an evil that humanity had never previously openly committed. His story stands as a permanent declaration in the Qur'an: that this particular indecency is so serious that an entire civilisation was wiped out for it, and the place itself was turned into a lifeless sea.",
        "The Qur'an pairs his wife with the wife of Nuh as the two examples of women who lived under the roof of prophets and yet betrayed them in faith. The lesson is that even the closest social tie cannot save a soul that has chosen disbelief and disloyalty to Allah.",
        "Ibn Kathir highlights that Lut's daughters were saved with him — his pure household. From them came righteous descendants. Allah preserves the believers when He destroys a wrongdoing nation. The believer's job is to stay pure even when surrounded by a rotting society, and to trust that Allah's rescue will come.",
      ),
      keyFacts: [
        "Nephew of Ibrahim (AS) and one of his earliest believers",
        "Sent to the people of Sadum (Sodom) and surrounding cities",
        "His people were the first to openly normalise approaching men with desire",
        "His own wife disbelieved and informed his people about his guests",
        "Angels in human form visited him before the destruction",
        "His cities were overturned and pelted with stones of baked clay",
        "The site of the cities became the Dead Sea — a sign for travellers",
        "Mentioned in many surahs including Al-A'raf, Hud, Ash-Shu'ara, Al-Ankabut, and Adh-Dhariyat",
      ],
      lessons: p(
        "What Allah names an indecency, no era can re-label as acceptable. Lut's people called purity a fault and indecency a freedom — and Allah destroyed them. Truth is not redefined by majority or by time.",
        "The believer must remain clean even in a corrupted environment. Lut lived in Sodom, raised pure daughters in Sodom, and was saved out of Sodom. Your environment is not your destiny; your choices are.",
        "Marriage to a believer is one of Allah's blessings, not a guarantee. Lut's own wife was destroyed alongside her people. Choose your partner for their faith and protect that bond with constant du'a.",
        "Honour your guests. Even in the moment of his greatest test, Lut's first concern was the dignity of those who had come to his home. Hospitality is from the deen of every prophet.",
        "Never look back at a sinful life Allah has saved you from. The angels' command 'let none of you look back' is symbolic too. When Allah pulls you out of a sin, walk forward and do not turn your heart back to it.",
      ),
    },
  },

  {
    id: "ismail",
    title: "Isma'il (AS) — The Patient Sacrifice, Father of the Arabs",
    description:
      "The firstborn of Ibrahim, the patient son who submitted to the sacrifice, ancestor of the Arabs and forefather of the Prophet ﷺ.",
    category: "Prophets",
    readTime: "9 min",
    sections: {
      intro: p(
        "Isma'il (AS) was the firstborn son of Ibrahim (AS), born to him through Hajar in his old age. Ibn Kathir narrates that Sarah, who was unable to bear children, gave Hajar to Ibrahim out of love for her husband — and that Hajar gave birth to Isma'il when Ibrahim was eighty-six years old.",
        "He grew up in the barren valley of Makkah, raised by Hajar after Ibrahim left them there by Allah's command. His childhood companions were the tribe of Jurhum, who came to settle in the valley after the spring of Zamzam burst forth at his feet. From them he learned eloquent Arabic, and through him the great Arab line that culminated in Muhammad ﷺ began.",
        "His character was the perfection of forbearance, truthfulness and submission. The Qur'an calls him sadiq al-wa'd — 'true to his promise.' Ibn Kathir narrates that he once promised to wait for someone at a place, and waited there for an entire day until the man returned, ashamed at having forgotten. Isma'il did not rebuke him — only said gently that he had said he would wait.",
      ),
      life: p(
        "When Isma'il was an infant, Ibrahim was commanded to take him and Hajar to a barren valley with no water and no inhabitants — the valley of Makkah. He left them there with a bag of dates and a skin of water and turned to leave. Hajar called after him: 'To whom are you leaving us?' He did not answer; she asked, 'Has Allah commanded you with this?' He said, 'Yes.' She said her famous words: 'Then He will not let us be lost.'",
        "When the water finished, Hajar climbed Safa, then Marwah, then Safa, seven times searching for any sign of help. As she returned to her crying child, an angel struck the ground beside the infant — and Zamzam burst forth. Hajar tried to contain the water with sand, saying 'Zam, zam' (gather, gather). The Prophet ﷺ later said: 'May Allah have mercy on the mother of Isma'il. Had she left it, it would have been a flowing stream.'",
        "The water attracted the tribe of Jurhum, who asked Hajar's permission to settle near them. Isma'il grew up among them, learned pure Arabic, and became known for his strength, honour and worship. He married a woman from Jurhum.",
        "Ibrahim used to visit them. On one visit, he was shown in a dream that he was sacrificing his son. He told Isma'il, who was now old enough to walk and work alongside him: 'O my son, indeed I have seen in a dream that I am sacrificing you, so see what you think.' Isma'il answered with words that have honoured fathers and sons forever: 'O my father, do as you are commanded; you will find me, if Allah wills, of the steadfast.'",
        "Both submitted. As Ibrahim laid him down, Allah called out: 'O Ibrahim, you have fulfilled the vision.' A great ram was ransomed for Isma'il, and the rite of sacrifice on Eid al-Adha was established for all believers until the end of time.",
        "Later, Allah commanded father and son to raise the foundations of the Ka'bah. Ibn Kathir narrates that Isma'il would carry the stones, and Ibrahim would build the wall. As they laboured, they prayed: 'Our Lord, accept this from us. Indeed You are the All-Hearing, the All-Knowing… and raise up among them a messenger from themselves who will recite to them Your verses and teach them the Book and wisdom and purify them.' That messenger was Muhammad ﷺ — Isma'il's descendant — sent thousands of years later.",
        "Isma'il (AS) was given prophethood and called the people around him to the worship of Allah alone. He was a prophet to the early Arab tribes that grew up around Makkah. He served the Ka'bah, taught his children and grandchildren tawhid, and is reported to have lived around 137 years.",
      ),
      legacy: p(
        "Isma'il (AS) is the ancestor of the Arab nation through his twelve sons, and most importantly, the direct forefather of the final Prophet Muhammad ﷺ. The Qur'an honours him by name: 'And mention in the Book Isma'il. Indeed, he was true to his promise, and he was a messenger and a prophet.' (Maryam 19:54)",
        "The very rituals of Hajj — running between Safa and Marwah, drinking Zamzam, the sacrifice on Eid al-Adha, the pilgrimage to the Ka'bah — are the living legacy of his life with his mother and father. Every year, millions of pilgrims relive his story step by step.",
        "Ibn Kathir highlights that Isma'il's defining quality was patient submission. He did not just survive being left in the desert as an infant; he matured into a young man ready to lay down his own life at his father's word, and into a prophet who served the House of Allah. The Ummah inherits from him a model of trust in Allah that begins in the heart of a child and continues to the end of life.",
      ),
      keyFacts: [
        "Firstborn son of Ibrahim (AS) and Hajar",
        "Direct ancestor of the Prophet Muhammad ﷺ",
        "Zamzam sprang from beneath his feet as an infant",
        "Submitted to be sacrificed by his father in obedience to Allah",
        "Helped his father raise the foundations of the Ka'bah in Makkah",
        "Father of the Arab nation through his twelve sons",
        "Praised in the Qur'an as 'sadiq al-wa'd' — true to his promise",
        "Mentioned in 12 surahs of the Qur'an",
      ],
      lessons: p(
        "True submission is rare and beautiful. A young Isma'il, shown the knife, answered, 'You will find me, if Allah wills, of the steadfast.' Ask Allah to make your 'yes' to Him as instant and clean as his.",
        "Mothers shape prophets. Hajar's calm tawakkul in the desert raised Isma'il into the man who could face the sacrifice. The faith of a mother is one of Allah's greatest gifts to a child.",
        "Keep your word. Isma'il was named 'true to his promise' for waiting a full day for a man who never came. In an age of broken commitments, be the one whose word is heavier than oaths.",
        "Hard work for Allah always pays off, even after centuries. Father and son built the Ka'bah praying for a messenger from their descendants — and Allah answered thousands of years later. Plant good for Allah without expecting to see the harvest yourself.",
        "When Allah places you in a hard place, dig where you are. Hajar ran between Safa and Marwah; she did not abandon her child. Run between your Safas and Marwahs in your own life, and trust Allah to send your Zamzam where you do not expect it.",
      ),
    },
  },

  {
    id: "ishaq",
    title: "Ishaq (AS) — The Promised Son",
    description:
      "The son promised to Ibrahim and Sarah in their old age, father of Ya'qub, and a link in the chain of the Israelite prophets.",
    category: "Prophets",
    readTime: "6 min",
    sections: {
      intro: p(
        "Ishaq (AS) was the second son of Ibrahim (AS), born of his wife Sarah in their old age. Ibn Kathir relates that Ibrahim was around a hundred years old, and Sarah was elderly and had been barren her whole life, when the angels gave her the glad tidings of Ishaq — and the further glad tidings of a grandson, Ya'qub, after him.",
        "He was raised in the land of Sham (the historic region of Greater Syria, including parts of present-day Palestine and Jordan), where his father had settled after his wanderings. Unlike his older half-brother Isma'il, who grew up in the Arabian desert, Ishaq grew up in fertile, settled lands.",
        "His character was that of a calm, blessed, generous prophet. The Qur'an honours him repeatedly with words like 'one of the chosen and the most excellent' (Sad 38:47) and 'a prophet from among the righteous' (As-Saffat 37:112). His household was a place of guidance, hospitality, and deep love of Allah.",
      ),
      life: p(
        "The story of his birth is itself a sign. Angels visited Ibrahim in the form of guests. Ibrahim hurried to bring them roasted veal, but they did not eat — at which he became fearful. They said: 'Do not fear,' and gave him the glad tidings of a learned son. Sarah, listening from behind a curtain, struck her face in astonishment and said, 'Shall I give birth while I am an old woman, and this, my husband, is an old man? Indeed, this is an amazing thing!' The angels replied: 'Are you amazed at the decree of Allah? May the mercy of Allah and His blessings be upon you, people of the house. Indeed, He is praiseworthy and honourable.'",
        "Ishaq was born as the angels had promised. He was raised by Ibrahim in the worship of Allah. When he came of age, he married Rifqa (Rebekah), and Allah blessed them with twin sons: 'Ays (Esau) and Ya'qub (Jacob, also known as Israel).",
        "Ya'qub became the chosen prophet after him, and from his twelve sons came the twelve tribes of Bani Isra'il. Through this line came Yusuf, Musa, Harun, Dawud, Sulaiman, Zakariya, Yahya, and 'Isa — a long chain of prophets that stretched until Allah sent Muhammad ﷺ to complete the message.",
        "Ibn Kathir narrates that Ishaq lived a long life, possibly around 180 years, and continued to teach tawhid and lead his people in the worship of Allah. He was buried beside his father Ibrahim in the cave of Al-Khalil (Hebron), where their graves remain a known site to this day.",
      ),
      legacy: p(
        "Ishaq (AS) is the link in the chain through which the line of Israelite prophets came into being. Almost every prophet sent to Bani Isra'il is among his descendants. The Qur'an mentions him by name 17 times, often paired with his father Ibrahim and his son Ya'qub, signifying the unbroken line of guidance.",
        "Ibn Kathir highlights that Ishaq's birth itself is a permanent reminder that no impossibility limits Allah. A man over a hundred years old and a barren elderly woman were given a son — and that son became the father of nations and the grandfather of prophets. Allah's promise does not weaken with time.",
        "His household became the model of a believing home — hospitable to angels in disguise, joyful in the face of unbelievable news, grateful to Allah, and producing righteous children who carried the message after him.",
      ),
      keyFacts: [
        "Second son of Ibrahim (AS) and son of Sarah",
        "Born when both his parents were old, by direct promise from Allah",
        "Father of the prophet Ya'qub (Israel)",
        "Grandfather of the twelve tribes of Bani Isra'il",
        "Ancestor of Yusuf, Musa, Dawud, Sulaiman, Zakariya, Yahya, and 'Isa (AS)",
        "Mentioned by name 17 times in the Qur'an",
        "Lived in the land of Sham (Greater Syria/Palestine)",
        "Reported to have lived around 180 years",
      ],
      lessons: p(
        "Allah's timing is perfect. Ishaq was given when his parents were 'too old' by every human calculation. Whatever your du'a, do not let age, circumstance or 'reasonable expectation' limit your hope in Allah.",
        "Receive Allah's gifts with gratitude, not just astonishment. Sarah's first reaction was amazement; the angels gently turned her toward gratitude. When Allah grants you something unexpected, move quickly from surprise to thanks.",
        "A righteous home produces a righteous lineage. Ishaq's home was built on hospitality, worship and knowledge — and his descendants became prophets. The atmosphere of your home shapes generations after you.",
        "Honour those who came before you. The Qur'an mentions Ishaq beside Ibrahim and Ya'qub — three generations linked. Speak well of your parents and grandparents, learn from their faith, and pass it on intact.",
      ),
    },
  },

  {
    id: "yaqub",
    title: "Ya'qub (AS) — Israel, Father of the Twelve Tribes",
    description:
      "The patient father of Yusuf, who never lost hope in Allah's mercy, and the ancestor of the twelve tribes of Bani Isra'il.",
    category: "Prophets",
    readTime: "8 min",
    sections: {
      intro: p(
        "Ya'qub (AS), known also as Isra'il (Israel), was the son of Ishaq and the grandson of Ibrahim (AS). He was born as a twin to his older brother 'Ays. Ibn Kathir narrates that he was given prophethood after his father, and that from his twelve sons came the twelve tribes of Bani Isra'il, who would carry the prophetic line for thousands of years.",
        "He lived in Sham and later moved to Egypt at the end of his life. He was a contemporary of his son Yusuf during one of the most famous family stories ever recorded — a story that fills almost an entire surah of the Qur'an.",
        "His character was defined by patience that never broke, and by a knowledge of Allah that allowed him to read events others could not understand. The Qur'an describes him as one of 'the chosen and the most excellent' (Sad 38:47) and as a man whose 'beautiful patience' (sabrun jamil) became a phrase Muslims still use today.",
      ),
      life: p(
        "Ya'qub married and was blessed with twelve sons. Among them, Yusuf and his younger brother Binyamin were the closest to his heart — not out of unjust favouritism, but because they were the youngest, the children of his beloved wife who had passed away, and because Ya'qub already saw in Yusuf the signs of prophethood.",
        "When Yusuf was a young boy, he told his father a dream: 'O my father, indeed I have seen eleven stars and the sun and the moon — I saw them prostrating to me.' Ya'qub immediately understood. He warned Yusuf: 'O my son, do not relate your vision to your brothers, lest they contrive against you a plan.' Then he gave him glad tidings: Allah will choose you, teach you, and complete His favour upon you and the family of Ya'qub.",
        "His older sons grew jealous of the love Ya'qub showed Yusuf. They plotted, took him out under the pretext of play, and threw him into a deep well. They returned at night with his shirt stained with false blood, claiming a wolf had eaten him. Ya'qub looked at the shirt — untorn — and said with the calm of a prophet: 'Rather, your souls have enticed you to something. So beautiful patience. And Allah is the One sought for help against that which you describe.'",
        "He grieved for years. He never accused, never raged, never gave up — only wept until his eyes turned white from sorrow, and never stopped praying. His grief was so deep that his sons accused him: 'By Allah, you will not cease remembering Yusuf until you become weak or be among the dead.' He answered them: 'I only complain of my suffering and my grief to Allah, and I know from Allah that which you do not know.'",
        "Years later, famine struck the land. His sons travelled to Egypt to seek food from a powerful minister — not knowing that this minister was Yusuf himself. Yusuf recognised them and used wisdom to bring his younger brother Binyamin to Egypt. When Binyamin too was kept back in Egypt by Yusuf's strategy, Ya'qub said only: 'Beautiful patience. Perhaps Allah will bring them all to me. Indeed, He is the All-Knowing, the All-Wise.'",
        "Then he sent his sons back with the words that have echoed in the heart of every grieving believer since: 'O my sons, go and find out about Yusuf and his brother, and despair not of the mercy of Allah. Indeed, no one despairs of relief from Allah except the disbelieving people.'",
        "When Yusuf finally revealed himself and sent the shirt to be cast over his father's face, Ya'qub's sight returned. He travelled with his entire household to Egypt, where Yusuf welcomed him as a king welcomes his father. The eleven brothers and the parents prostrated to Yusuf — fulfilling the dream of decades earlier.",
        "In his final illness, Ya'qub gathered his sons. The Qur'an records the scene: 'Or were you witnesses when death approached Ya'qub, when he said to his sons: What will you worship after me? They said: We will worship your God and the God of your fathers — Ibrahim, Isma'il, and Ishaq — one God; and we are Muslims to Him.' (Al-Baqarah 2:133) He died in Egypt, and his body was carried back to be buried beside his father and grandfather in the cave of Al-Khalil.",
      ),
      legacy: p(
        "Ya'qub (AS) is the father of the twelve tribes of Bani Isra'il. From them came almost every prophet who appeared between his lifetime and the coming of the Prophet Muhammad ﷺ. The very name 'Children of Israel' (Bani Isra'il) is a reference to him.",
        "He is the model of sabrun jamil — beautiful patience, the kind that complains only to Allah. Ibn Kathir highlights that throughout decades of pain, he never wavered in his certainty that Allah's promise would come, and never accused Allah's decree. His grief was real, but it was clean grief, hopeful grief, prophet's grief.",
        "His final scene with his sons is one of the great moments of the Qur'an. A dying father's only concern was: what will you worship after me? It is the question every Muslim parent should ask themselves about their own children. From Ya'qub the Ummah inherits the priority of preserving tawhid in one's family above every other inheritance.",
      ),
      keyFacts: [
        "Son of Ishaq (AS) and grandson of Ibrahim (AS)",
        "Also known as Israel — the entire 'Children of Israel' nation is named after him",
        "Father of twelve sons who became the twelve tribes",
        "Father of the prophet Yusuf (AS)",
        "His patience over Yusuf's loss is the source of the phrase 'sabrun jamil'",
        "Mentioned by name 16 times in the Qur'an",
        "Lived in Sham and ended his life in Egypt",
        "Buried beside Ibrahim and Ishaq in the cave of Al-Khalil (Hebron)",
      ],
      lessons: p(
        "There is such a thing as beautiful grief. Ya'qub wept for decades, but never blamed Allah, never accused His decree, and never gave up hope. Allow yourself to feel pain, but pour it out to Allah, not against Him.",
        "Despair is the path of the disbelievers. The believer never gives up on Allah's mercy, even after years of darkness. Hold on to the verse: 'Despair not of the mercy of Allah.'",
        "Read events with the eye of faith. When the brothers brought a stained but untorn shirt, Ya'qub saw through the lie — because he saw with the light of Allah. Ask Allah for that inner sight.",
        "Your final concern as a parent is the deen of your children. Ya'qub on his deathbed asked his sons what they would worship after him. Make this the theme of your relationship with your children long before you face your own end.",
        "Allah reunites what His decree separates. Ya'qub lost Yusuf for decades, then was given back his son, his honour, his sight, and a kingdom. Whatever Allah has taken from you, He can return tenfold — at the time He has chosen.",
      ),
    },
  },

  {
    id: "yusuf",
    title: "Yusuf (AS) — From the Well to the Throne",
    description:
      "Cast into a well by his brothers, sold into slavery, falsely imprisoned, and raised to power in Egypt — the most beautiful story.",
    category: "Prophets",
    readTime: "16 min",
    sections: {
      intro: p(
        "Yusuf (AS) was the son of the prophet Ya'qub (AS), and the great-grandson of Ibrahim (AS) through Ishaq. The Qur'an honours him with an entire surah named after him — Surah Yusuf — calling it 'the best of stories' (ahsan al-qasas).",
        "He was born in Sham, the eleventh of his father's twelve sons. He was given immense beauty — the Prophet ﷺ said in the famous narration of the Mi'raj that Yusuf had been given half of all beauty. He was also given knowledge, dreams of true vision, and prophethood.",
        "His character was the perfect combination of patience, purity, intelligence, forgiveness and humility. He passed through the deepest tests a soul can pass through — betrayal, slavery, temptation, false accusation, prison, and absolute power — and emerged from each one closer to Allah.",
      ),
      life: p(
        "As a boy, Yusuf saw a dream: 'I saw eleven stars and the sun and the moon — I saw them prostrating to me.' His father Ya'qub immediately understood, and warned him: 'Do not relate your vision to your brothers, lest they contrive against you a plan.'",
        "His older brothers, jealous of their father's love for him, plotted to remove him. They convinced Ya'qub to let Yusuf come with them to play, and threw him into the bottom of a deep well. They returned at night with his shirt stained with false blood, claiming a wolf had killed him.",
        "A passing caravan stopped at the well to draw water. The bucket came up with a beautiful child clinging to it. They sold him in Egypt for a low price to a man named Al-'Aziz, an official of the king. Al-'Aziz told his wife: 'Make his stay comfortable. Perhaps he will benefit us, or we will adopt him as a son.'",
        "Yusuf grew up in his household as a young man of extraordinary beauty and dignity. The wife of Al-'Aziz fell in love with him and one day locked the doors and called him to herself. He answered with words that defined the limit of every believer: 'I seek refuge in Allah. Indeed, he is my master, who has made good my residence. Verily, the wrongdoers will not succeed.'",
        "She tore his shirt as he ran for the door; her husband appeared. Yusuf was vindicated by a witness from her own family — the tear was on the back of the shirt, proving he had been fleeing. Yet the gossip of the noblewomen of the city continued, until she invited them, gave them knives and citrus, and called Yusuf to walk in. They were so stunned by him that they cut their own hands.",
        "She declared openly: 'If he will not do what I order, he will be imprisoned and be of the disgraced.' Yusuf prayed: 'My Lord, prison is more dear to me than that to which they invite me. And if You do not avert from me their plan, I might incline toward them and become of the ignorant.' Allah answered him.",
        "He was thrown into prison for years, though innocent. Even there he called the prisoners to tawhid and interpreted dreams for them. Two prisoners had dreams; he interpreted them — one would be released and serve the king again, the other would be crucified. He asked the one to be saved to mention him to the king. But shaytan caused that man to forget, and Yusuf remained in prison for several more years.",
        "Then the king of Egypt had a powerful dream: seven fat cows were eaten by seven lean ones, and seven green ears of grain were dried out by seven withered ones. None of his advisers could interpret it. The released prisoner finally remembered Yusuf and went to him. Yusuf interpreted: seven years of plenty, then seven years of severe drought; he advised them to store the harvest carefully.",
        "The king summoned him. But Yusuf refused to leave prison until his innocence was publicly established. He sent word: 'Go back to your master and ask him about the case of the women who cut their hands. Indeed, my Lord is Knowing of their plan.' The king investigated, the women confessed, and the wife of Al-'Aziz herself admitted the truth: 'It was I who tried to seduce him, and indeed, he is of the truthful.'",
        "Yusuf was brought out and given charge of the storehouses of Egypt — effectively the highest economic authority in the land. He managed the seven years of plenty with wisdom, and when the famine struck the entire region, Egypt had food when no one else did.",
        "His brothers — without knowing him — came to Egypt to buy food. He recognised them; they did not recognise him. Through a series of careful tests, he eventually brought his younger brother Binyamin to Egypt, and finally revealed himself: 'I am Yusuf, and this is my brother. Allah has been gracious to us. Indeed, whoever fears Allah and is patient — Allah does not waste the reward of those who do good.'",
        "His brothers stood ashamed. He spoke the words that sealed his greatness: 'No blame will there be upon you today. Allah will forgive you; and He is the most merciful of the merciful.'",
        "He sent his shirt to be cast over the face of his blind father. Ya'qub's sight returned. Yusuf brought his entire family to Egypt, raised his parents to the throne beside him, and the eleven brothers and his parents fell in prostration before him — fulfilling the dream of decades before.",
        "Yusuf turned to Allah with one of the most beautiful prayers in the Qur'an: 'My Lord, You have given me of sovereignty and taught me of the interpretation of events. Creator of the heavens and earth, You are my Protector in this world and the Hereafter. Cause me to die a Muslim and join me with the righteous.' (Yusuf 12:101)",
      ),
      legacy: p(
        "Yusuf (AS) is the model of patience under the deepest betrayals and the loftiest temptations. The Qur'an itself calls his story 'the best of stories' — a divine endorsement no other narrative receives. It is the only story that fills almost an entire surah, told in flowing detail from the dream of his childhood to the prostration of his brothers decades later.",
        "Ibn Kathir highlights that the entire arc of Yusuf's life is a lesson in trust: every betrayal, every imprisonment, every silence of Allah was a step in raising him to the very position needed to save his family. What looked like ruin was the road to honour. The believer learns from him that Allah's plan is always larger than the visible chapter.",
        "His forgiveness of his brothers — at the very moment he had absolute power over them — is one of the highest moments of mercy in human history. It is also a foreshadowing of the Prophet Muhammad ﷺ on the day of the conquest of Makkah, when he too forgave those who had persecuted him and quoted Yusuf's exact words.",
      ),
      keyFacts: [
        "Son of the prophet Ya'qub (AS); eleventh of twelve brothers",
        "Given half of all human beauty, according to the Prophet ﷺ",
        "Thrown into a well by his brothers, sold into slavery in Egypt",
        "Falsely imprisoned for years despite his innocence",
        "Interpreted dreams for prisoners and for the king of Egypt",
        "Rose to become the chief minister in charge of Egypt's storehouses",
        "Reunited with his family after decades; forgave his brothers fully",
        "An entire surah of the Qur'an is named after him; called 'the best of stories'",
      ],
      lessons: p(
        "Hidden plans of envy can never overturn Allah's plan of honour. The brothers' deepest betrayal became the very means by which Yusuf rose to the throne. Whatever harm has been done to you, Allah's plan for your honour is bigger.",
        "Choose Allah over every temptation, even when alone behind locked doors. Yusuf's 'I seek refuge in Allah' is the door every believer must shut between themselves and sin. The greater the privacy of the temptation, the greater the reward of resisting.",
        "Prison with Allah is better than freedom in disobedience. Yusuf preferred the cell over the sin. Whatever your 'prison' looks like, if it is the price of staying obedient, it is your honour, not your loss.",
        "Forgiveness is the trait of the powerful, not the weak. Yusuf forgave his brothers at the very moment he could have crushed them. True strength is to release a grudge once Allah has placed you above the wrongdoer.",
        "Years of darkness do not cancel Allah's promise. Yusuf was in the well, in the slave market, in the prison — for years. Yet the boy's dream came true exactly. Hold on to the dream Allah has planted in you, even when the road is unrecognisable.",
        "Speak well of those who hurt you. Yusuf never named his brothers in front of strangers, and when he revealed himself he prayed for their forgiveness immediately. Cover the sins of others if you ever want Allah to cover yours.",
      ),
    },
  },

  {
    id: "ayyub",
    title: "Ayyub (AS) — The Patient One",
    description:
      "Stripped of wealth, family and health, he never complained — and Allah restored everything to him manifold.",
    category: "Prophets",
    readTime: "8 min",
    sections: {
      intro: p(
        "Ayyub (AS) was a prophet from the descendants of Ishaq (AS), through 'Ays, the twin brother of Ya'qub. Ibn Kathir mentions his lineage in some narrations and notes that he lived in the land of Hawran (in present-day southern Syria).",
        "Before his test, Ayyub was a man of immense wealth. He had abundant land, livestock, and many children. He was known for his generosity to the poor, his hospitality to travellers, and his constant gratitude to Allah for every blessing. Ibn Kathir narrates that he used to feed the orphans, the widows, and the wayfarers, and that no one in need came to his door without being helped.",
        "His character is summed up in a single phrase from the Qur'an: 'Indeed, We found him patient, an excellent servant. Indeed, he was one repeatedly turning back to Allah.' (Sad 38:44) He was the embodiment of sabr — patience that does not break, does not complain, and does not lose its trust in Allah.",
      ),
      life: p(
        "Allah tested Ayyub (AS) with a test that became proverbial in every later age. First his wealth was taken — his livestock, his lands, his properties — until he had nothing. He praised Allah and continued to worship.",
        "Then his children were taken — all of them, in a single tragedy. He praised Allah and continued to worship.",
        "Then his health was taken. A severe and prolonged illness afflicted his body, and the affliction continued for years. Ibn Kathir narrates that, according to many of the early scholars, the illness lasted around eighteen years, during which Ayyub became confined and his condition deteriorated greatly. Most of the people who had once praised him for his generosity now turned away.",
        "Yet through all of it, his tongue did not stop praising Allah. He did not complain to people, and he did not even turn his complaint into accusation against his Lord. The only person who stayed faithfully by his side, serving him, washing him, feeding him from her own labour, was his wife. She is praised in the classical narrations as one of the great patient women.",
        "When the trial reached its peak — when his strength was nearly gone, and even she was being mocked for serving him — he finally turned to Allah, not in complaint, but in the gentlest, most humble du'a in the Qur'an: 'Indeed, adversity has touched me, and You are the most merciful of the merciful.' (Al-Anbiya 21:83). He did not even ask for relief by name. He only acknowledged his weakness and Allah's mercy.",
        "Allah answered him immediately. He commanded: 'Strike with your foot; this is a cool bath and a drink.' (Sad 38:42) A spring burst forth beside him. He bathed in it and drank from it, and his disease was lifted from him completely — outwardly and inwardly.",
        "Allah then returned to him his family, and the like of them with them, as a mercy from Him and a reminder for the worshippers. His health, his wealth, his honour — all returned, multiplied. Ibn Kathir narrates that Allah even rained down golden locusts upon him, until he scooped them up in his garment, smiling at the abundance of his Lord.",
      ),
      legacy: p(
        "Ayyub (AS) is the prophet whose name became, across many cultures, the very symbol of patience. The Qur'an honours him with the words: 'How excellent a servant! Indeed, he was one repeatedly turning back to Allah.'",
        "Ibn Kathir highlights that Ayyub did not just endure the trial — he never lost his connection to Allah for a moment. His patience was not silent suffering. It was active worship: praise, du'a, gratitude, and constant turning to his Lord. This is the highest form of sabr — sabr accompanied by shukr.",
        "His story stands as a permanent answer to the question every believer asks during a long trial: 'Why is this happening?' Ayyub teaches us that Allah may take everything for a season — not because He has abandoned His servant, but to raise his rank, to write generations of reward, and to make him a sign for those who come after.",
      ),
      keyFacts: [
        "Prophet from the descendants of Ishaq (AS), through 'Ays",
        "Lived in the land of Hawran (in present-day southern Syria)",
        "Tested with the loss of his wealth, his children, and his health",
        "Suffered a long illness reported to have lasted around 18 years",
        "His wife stayed faithfully by his side throughout the trial",
        "His du'a in Surah Al-Anbiya is one of the most beloved supplications in Islam",
        "Allah restored his family and the like of them with them",
        "Mentioned in several surahs including Al-An'am, Al-Anbiya, and Sad",
      ],
      lessons: p(
        "Real patience is patience accompanied by gratitude. Ayyub did not just survive his test — he praised Allah throughout it. Pair every sabr in your life with shukr, and the trial becomes worship.",
        "Complain to Allah, not against Him. Even at his weakest, Ayyub only said, 'You are the most merciful of the merciful.' He did not name his pain in detail; he named Allah's mercy. Reframe your du'a from a list of complaints to a recognition of Allah's qualities.",
        "Trials raise rank; they do not signal abandonment. The longer a trial, the higher the reward when patience is sincere. Do not measure Allah's love by your present comfort.",
        "Allah remembers the silent helpers in every trial. Ayyub's wife is honoured forever. Be that quiet helper to a sick parent, a struggling friend, a tested neighbour. Allah sees what no one else does.",
        "Recovery from any illness, hardship or loss begins with a single sincere du'a. Ayyub's relief came in a verse — not a year of effort. Whatever your situation, never underestimate one moment of pure, humble du'a.",
      ),
    },
  },

  {
    id: "shuaib",
    title: "Shu'aib (AS) — The Orator of the Prophets",
    description:
      "Sent to Madyan, calling them to honest weights and measures, and to abandon the worship of idols.",
    category: "Prophets",
    readTime: "8 min",
    sections: {
      intro: p(
        "Shu'aib (AS) was a prophet sent to the people of Madyan, located in the north-west of the Arabian peninsula along the trade routes between the Hijaz and Sham. Ibn Kathir narrates several lineages for him, with most early scholars connecting him eventually back to Ibrahim (AS) through his son Madyan.",
        "Madyan was a wealthy commercial society. They sat on important trade routes and grew rich through commerce, particularly through the buying and selling of grain and goods. But their wealth had corrupted them: they cheated in their weights and measures, they ambushed travellers, and they had abandoned the tawhid of Ibrahim for the worship of a tree and idols.",
        "Shu'aib's character earned him a unique title in the classical tradition: khatib al-anbiya — 'the orator of the prophets.' He was unmatched in the eloquence and beauty of his speech. He combined gentle reasoning with sharp clarity, and he never tired of pleading with his people, even when their leaders threatened him with stoning and exile.",
      ),
      life: p(
        "Shu'aib (AS) called his people with the same opening every prophet brought: 'O my people, worship Allah; you have no deity other than Him.' But he then added a second call, unique to the disease of his people: 'And do not decrease from the measure and the scale. Indeed, I see you in prosperity, but I fear for you the punishment of an all-encompassing Day.'",
        "He pleaded with them economically and morally. He told them that cheating their customers was a betrayal of Allah's blessings: He had given them prosperity, and they were repaying Him by robbing the very people who came to trade with them. He warned them not to sit on every road threatening travellers and turning people away from the path of Allah.",
        "His speech was beautiful even in confrontation. When they mocked him — 'O Shu'aib, does your prayer command you that we should leave what our fathers worship, or not do with our wealth what we please?' — he answered them with a calm honesty that exposed the weakness in their argument: 'O my people, have you considered: if I am upon clear evidence from my Lord and He has provided me with a good provision from Himself…?'",
        "He never claimed greatness for himself. 'I do not intend to differ from you in that which I have forbidden you; I only intend reform as much as I am able. And my success is not but through Allah. Upon Him I have relied, and to Him I return.' Ibn Kathir notes that this verse — 'I only intend reform' — became a lifelong slogan of every sincere caller to Allah after him.",
        "His people split into believers and disbelievers. The leaders threatened him: 'We will surely drive you out, O Shu'aib, and those who have believed with you, from our city, or you must return to our religion.' He answered: 'Even if we were unwilling? We would have invented against Allah a lie if we returned to your religion after Allah had saved us from it. We rely upon Allah.'",
        "Then he made a final, powerful prayer: 'Our Lord, decide between us and our people in truth, and You are the best of those who give decision.'",
        "Allah's decision came. A great earthquake seized them, combined with a mighty shout (al-sayhah), and they were left lifeless in their homes 'as if they had never prospered there.' Shu'aib turned away from them, saying: 'O my people, I had certainly conveyed to you the messages of my Lord and advised you, so how could I grieve for a disbelieving people?' Shu'aib and the believers with him were saved.",
        "Years later, the same lineage of Madyan would intersect with another great prophet — Musa (AS) — who fled to Madyan from Egypt and was hosted by an old man (whom many of the early scholars identify with Shu'aib or with one of his successors). Musa would marry his daughter and shepherd his flocks for ten years.",
      ),
      legacy: p(
        "Shu'aib (AS) is remembered as the prophet of economic justice and clean speech. His call combined the worship of Allah with honesty in the marketplace — a combination so powerful that the Qur'an returns to his story in multiple surahs to engrave it on the conscience of every believing trader.",
        "Ibn Kathir highlights his sentence — 'I only intend reform as much as I am able' — as the perfect summary of every sincere caller's mission. The reformer does not seek power, profit or fame. He seeks repair, within the limits Allah has given him.",
        "His title 'orator of the prophets' is a permanent reminder that beautiful speech, used in defence of truth, is itself a form of worship. The Qur'an records his speeches in unusually long, flowing detail — a tribute to a prophet who used eloquence as his weapon and never as his vanity.",
      ),
      keyFacts: [
        "Prophet sent to the people of Madyan in north-western Arabia",
        "His people were wealthy traders who cheated in weights and measures",
        "Known as 'khatib al-anbiya' — the orator of the prophets",
        "His people were destroyed by an earthquake and a mighty shout",
        "Mentioned in surahs Al-A'raf, Hud, Ash-Shu'ara, and Al-Ankabut",
        "Many scholars identify him with the old man who hosted Musa (AS) in Madyan",
        "Believer in the worship of Allah alone in a society sunk in idolatry and dishonesty",
        "His du'a 'I only intend reform as much as I am able' became a slogan for callers to Allah",
      ],
      lessons: p(
        "Tawhid and ethics are inseparable. You cannot pray to Allah and then cheat your customers, your employer or your students. Real worship colours every transaction.",
        "Eloquence is a trust. If Allah has given you the gift of clear speech, use it for truth and reform — never to humiliate, mock or pursue ego. Become a 'khatib' for good in your circle.",
        "The reformer's goal is repair, not victory. Shu'aib wanted his people fixed, not crushed. Approach every problem in your community with the intention 'I only want reform as much as I am able.'",
        "Wealth without worship rots a people from within. Madyan was destroyed not in poverty but in prosperity. Watch your barakah, not just your bank balance.",
        "Stand firm against pressure to compromise. Shu'aib was offered exile or apostasy; he chose exile and trust in Allah. Whenever the world offers you a 'compromise' that costs your faith, the only correct answer is the one he gave: 'We rely upon Allah.'",
      ),
    },
  },

  {
    id: "musa",
    title: "Musa (AS) — Kalimullah, the One Who Spoke with Allah",
    description:
      "From the basket on the Nile, to confronting Pharaoh, the splitting of the sea, and receiving the Torah on Mount Tur.",
    category: "Prophets",
    readTime: "20 min",
    sections: {
      intro: p(
        "Musa (AS) is the prophet most often mentioned in the Qur'an. His lineage, as Ibn Kathir gives it, is Musa ibn 'Imran, descending back through Lawi ibn Ya'qub ibn Ishaq ibn Ibrahim (AS). He is therefore from the noble line of the Israelite prophets, and the great-great-grandson of Ya'qub.",
        "He lived in Egypt at a time when Bani Isra'il had been reduced to slavery under Pharaoh, the most arrogant tyrant of his age. Pharaoh claimed divinity for himself, declared 'I am your most exalted lord,' and ordered the killing of every male child born to Bani Isra'il, fearing a prophecy that one of them would end his rule.",
        "Musa's character combined extraordinary physical strength with deep humility, fierce zeal for justice with patient endurance, and direct speech with a heart that wept easily before Allah. He is one of the five Ulul-'Azm messengers, and is given a unique title in the classical tradition: Kalimullah — the one whom Allah spoke to directly.",
      ),
      life: p(
        "Musa was born in the very year Pharaoh's killing was at its worst. His mother was inspired by Allah: 'Suckle him; but when you fear for him, cast him into the river and do not fear and do not grieve. Indeed, We will return him to you and will make him one of the messengers.' She placed him in a sealed basket and put him in the Nile.",
        "By Allah's plan, the basket floated to the very palace of Pharaoh, and Asiyah, Pharaoh's righteous wife, drew him out and convinced her husband to spare him. Musa's sister had followed the basket from a distance, and when no nurse could feed him, she suggested his own mother — and so his mother was returned to him as a paid wet-nurse. The Qur'an records: 'So We restored him to his mother that her eye might be comforted and that she would not grieve and that she would know that the promise of Allah is true.'",
        "Musa grew up in Pharaoh's palace as a member of the royal household, while remaining the son of an oppressed slave family. Allah gave him 'wisdom and knowledge.' One day, as a young man, he entered the city and saw an Egyptian striking an Israelite. The Israelite called out for help; Musa struck the Egyptian once, and the man died. He turned to Allah at once: 'My Lord, I have wronged myself, so forgive me,' and Allah forgave him.",
        "When word spread that he might be sought, he fled. Walking exhausted into the land of Madyan, he found a crowd of shepherds watering their flocks, and two young women standing back unable to draw water with the men. He drew water for them and then sat in the shade and made a quiet du'a: 'My Lord, indeed I am, for whatever good You would send down to me, in need.'",
        "The two women returned home, told their elderly father (whom many scholars identify with Shu'aib), and one of them came back walking with shyness and asked Musa to come. The old man offered him hospitality, then offered him the marriage of one of his daughters in exchange for eight years (or ten, completed) of shepherding his flocks. Musa agreed, and lived in Madyan as a shepherd, husband, and son-in-law for that period.",
        "When the time came to return, Musa set out with his family. On a cold night near Mount Tur (Mount Sinai) he saw a fire in the distance and went to fetch a brand. There Allah spoke to him for the first time: 'O Musa! Indeed, I am your Lord, so remove your sandals; indeed, you are in the sacred valley of Tuwa.' Allah taught him the shahadah, gave him the staff that turned into a serpent, and the white hand that shone, and commissioned him: 'Go to Pharaoh; indeed, he has transgressed.'",
        "Musa asked for his brother Harun to be sent with him as a helper, and Allah granted it. Together they went to Pharaoh and spoke with him in gentle words, as Allah had commanded — 'perhaps he may be reminded or fear.' Pharaoh rejected them, claimed divinity, and gathered his magicians for a great public showdown.",
        "The day of the contest came. The magicians cast their ropes and staffs, which appeared as serpents through their illusion, and the people were terrified. Musa cast his staff, and it became a real serpent that swallowed every illusion. The magicians, who knew their craft better than anyone, immediately recognised this was no magic but truth, and they fell in prostration: 'We believe in the Lord of the worlds, the Lord of Musa and Harun.' Pharaoh raged and threatened to crucify them; they answered, 'No harm, indeed to our Lord we will return,' and died as martyrs.",
        "Plagues followed — flood, locusts, lice, frogs, blood — each time Pharaoh begging Musa to lift the punishment, then breaking his promise. Finally Allah commanded Musa to take Bani Isra'il and leave Egypt by night. Pharaoh pursued with his army.",
        "When the sea was before them and the army behind, Bani Isra'il cried out, 'Indeed, we are caught!' Musa said, with absolute certainty: 'No! Indeed, with me is my Lord; He will guide me.' Allah commanded: 'Strike with your staff the sea.' The water split into twelve dry corridors. Bani Isra'il crossed; Pharaoh entered after them; the waters returned and drowned him and his army. As he was drowning Pharaoh said, 'I believe that there is no deity except that in whom the Children of Israel believe.' But it was too late — his belief at the moment of certain death was not accepted.",
        "Musa led Bani Isra'il into the wilderness of Sinai. He went to Mount Tur for forty nights to receive the Tawrah. In his absence, a man named Samiri made for them a calf of gold, and many of them worshipped it. Harun pleaded with them and they nearly killed him. When Musa returned and saw them dancing around the calf, he threw down the tablets in anger and seized his brother by the head — until Harun explained, and they made repentance together.",
        "For forty years Musa led Bani Isra'il through the wilderness, dealing with their constant complaints — about water, food, monotony, hardship. Allah provided manna and quails for them, water from a struck rock that gave twelve springs (one for each tribe), and shade from the clouds. Yet Bani Isra'il continued to test Musa's patience, refusing to enter the Holy Land when commanded, and saying, 'Go you and your Lord and fight; we are sitting here.' For this they were forbidden the land for forty years until that generation passed.",
        "Musa also had the famous journey with Khidr (AS), recorded in Surah Al-Kahf, where he learned the lesson that Allah's hidden wisdom often appears, on the surface, to be loss or harm — and that even a great prophet must approach hidden knowledge with humility.",
      ),
      legacy: p(
        "Musa (AS) is the most-mentioned prophet in the Qur'an, with around 136 references. His life is told and re-told because in it lies a complete map for every Ummah: the trial of tyrants, the necessity of trust in Allah at impossible moments, the responsibility of leadership, and the patience required to lead a community that complains.",
        "He is one of the five Ulul-'Azm messengers, alongside Nuh, Ibrahim, 'Isa and Muhammad ﷺ. He is given the unique honour of having spoken to Allah directly without intermediary — Kalimullah. Allah selected him for Himself: 'And I produced you for Myself' (Ta-Ha 20:41).",
        "On the night of the Mi'raj, the Prophet Muhammad ﷺ met Musa in the heavens. It was Musa who repeatedly sent him back to ask for a reduction in the prayers, until they were lowered from fifty to five — a final favour from Musa to the Ummah of Muhammad ﷺ that we feel five times every day. Ibn Kathir highlights this as a sign that the bond between the prophets is closer and more loving than any human can imagine.",
      ),
      keyFacts: [
        "Most-mentioned prophet in the Qur'an (around 136 references)",
        "One of the five Ulul-'Azm messengers",
        "Kalimullah — the one to whom Allah spoke directly",
        "Born to Bani Isra'il under Pharaoh's killing of male children",
        "Raised in Pharaoh's own palace by Asiyah",
        "Confronted Pharaoh, defeated his magicians, and led the Exodus",
        "Allah split the sea for him with twelve dry paths",
        "Received the Tawrah on Mount Tur (Mount Sinai)",
      ],
      lessons: p(
        "When everything looks lost, Allah is closest. At the edge of the sea Musa said, 'No! With me is my Lord; He will guide me' — and the sea split. Speak that conviction in your impossible moments.",
        "Honest mistakes can be repented from immediately. Musa killed a man unintentionally and turned to Allah at once — and was forgiven. Never let shame keep you from the door of repentance.",
        "Leadership of a complaining community is a heavy worship. Musa led Bani Isra'il for forty years through their constant murmuring, with patience that did not break. Lead your home, your team, your community with that same long-breath sabr.",
        "Pharaoh inside is more dangerous than Pharaoh outside. The arrogance that makes a man say 'I am the highest' begins as a small whisper. Crush every seed of arrogance in yourself before it grows.",
        "Hidden wisdom requires humility. The story of Musa with Khidr teaches that sometimes Allah's plan looks, from the surface, exactly like loss. Trust the unseen wisdom of your Lord even when the visible chapter is hard to read.",
        "Your du'a in your weakest moment is a turning point. Musa's quiet sentence under the tree in Madyan — 'My Lord, indeed I am, for whatever good You would send down to me, in need' — was answered with marriage, family, security and prophethood. Speak to Allah honestly when you have nothing left.",
      ),
    },
  },

  {
    id: "harun",
    title: "Harun (AS) — Brother and Helper of Musa",
    description:
      "Granted prophethood at his brother's request, the eloquent supporter who stood with Musa before Pharaoh.",
    category: "Prophets",
    readTime: "6 min",
    sections: {
      intro: p(
        "Harun (AS) was the elder brother of Musa (AS), older by about three years. He was from the tribe of Lawi, of the line of Ya'qub through Ishaq and Ibrahim. Ibn Kathir narrates that he was tall, handsome, gentle in manner, and more eloquent in speech than Musa.",
        "Unlike his younger brother, Harun did not have to be hidden as an infant — he was born before Pharaoh's killing decree, or in a year of relief from it. He grew up among Bani Isra'il, sharing in their oppression, and remained a respected figure among them as Musa was raised in the palace.",
        "His character was one of beautiful softness and patience. He was the kind of older brother any younger sibling would dream of: protective, gentle, supportive, never competitive. The Qur'an captures the relationship in Musa's own du'a to Allah, asking for his brother by name to be sent with him.",
      ),
      life: p(
        "When Allah commissioned Musa at Mount Tur, Musa pleaded: 'And appoint for me a minister from my family — Harun, my brother. Through him strengthen my back and let him share my task, that we may exalt You much and remember You much. Indeed, You are of us ever Seeing.' (Ta-Ha 20:29-35) Allah granted his request and gave Harun prophethood by Musa's side: 'You have been granted your request, O Musa.'",
        "Harun spoke before Pharaoh together with Musa. His eloquence helped articulate the message clearly, and he stood firm beside his brother through every threat and every miracle.",
        "His greatest test came when Musa went to Mount Tur for forty nights and left him in charge of Bani Isra'il. In Musa's absence, a man named Samiri took the people's gold ornaments and crafted a calf which made a sound like the lowing of cattle. Many of Bani Isra'il fell into worshipping it.",
        "Harun warned them with all his strength: 'O my people, you are only being tested by it, and indeed, your Lord is the Most Merciful, so follow me and obey my order.' But they answered: 'We will never cease being devoted to it until Musa returns to us.' They almost killed him for trying to stop them.",
        "When Musa returned and saw them dancing around the calf, he was furious. He threw down the tablets, rushed to Harun, and seized him by the head and beard: 'O Harun! What prevented you when you saw them going astray from following me? Have you disobeyed my order?' Harun answered with the gentlest, most heart-touching words: 'O son of my mother, do not seize me by my beard or by my head. Indeed, I feared that you would say, You caused division among the Children of Israel and did not observe my word.'",
        "Musa understood. He embraced his brother and prayed: 'My Lord, forgive me and my brother and admit us into Your mercy, for You are the most merciful of the merciful.'",
        "Harun continued to support Musa through the years in the wilderness. According to the classical narrations, he passed away before Musa, in the wilderness, and was buried there. Bani Isra'il wept deeply over his death — a sign of how deeply he had been loved by his people.",
      ),
      legacy: p(
        "Harun (AS) is honoured in the Qur'an as a prophet, a minister, an eloquent helper, and a beloved brother. The Prophet Muhammad ﷺ once said to 'Ali: 'Are you not pleased that you should be to me as Harun was to Musa, except that there is no prophet after me?' — a tribute to the closeness, trust and supportive role Harun played in his brother's mission.",
        "Ibn Kathir highlights that Harun's role models the dignity of being a supporting prophet. Not every great work requires you to lead from the front. Some of the greatest contributions to truth are made by those who stand at the side of the leader, lend their voice, share the burden, and protect the community when the leader is absent.",
        "His patient response when Musa seized him by the head — addressing him not by name but as 'son of my mother' — became a model of how to handle a misunderstanding with a loved one. Soft words, recognition of the bond, and explanation rather than defence.",
      ),
      keyFacts: [
        "Elder brother of Musa (AS) by about three years",
        "More eloquent in speech than his younger brother",
        "Granted prophethood by Allah at Musa's request",
        "Stood with Musa before Pharaoh in the great confrontations",
        "Left in charge of Bani Isra'il during the calf incident",
        "Pleaded with his people not to worship the calf, and was nearly killed",
        "Beloved by Bani Isra'il, who wept for him at his death",
        "Mentioned by name 20 times in the Qur'an",
      ],
      lessons: p(
        "Ask Allah for righteous helpers. Musa's request for Harun is a model: when you take on a hard task, ask Allah by name for the kind of person who can stand beside you.",
        "Support is its own form of leadership. You do not have to be in front to be valuable. A loyal, eloquent, patient deputy is one of Allah's greatest gifts to a community.",
        "Speak softly when accused, even by those you love. Harun's 'O son of my mother' immediately defused his brother's anger. Remembering shared bonds is the best opening when there is a misunderstanding.",
        "Do not abandon your post even when overwhelmed. Harun stayed with his people through their worst sin, warning them, even at risk to his life. Faithfulness in hard moments is what Allah measures.",
        "Pray for forgiveness for yourself and the one you have spoken harshly to. Musa's du'a — 'forgive me and my brother' — is the example. After every conflict, include the other person in your prayer.",
      ),
    },
  },

  {
    id: "dhulkifl",
    title: "Dhul-Kifl (AS) — The Patient Steward",
    description:
      "A righteous prophet praised among the patient, who undertook a heavy duty and fulfilled it faithfully.",
    category: "Prophets",
    readTime: "5 min",
    sections: {
      intro: p(
        "Dhul-Kifl (AS) is mentioned in the Qur'an among the patient and the righteous: 'And Isma'il, Idris, and Dhul-Kifl — all were of the patient. And We admitted them into Our mercy. Indeed, they were of the righteous.' (Al-Anbiya 21:85-86) He is also mentioned in Surah Sad alongside Isma'il and al-Yasa'.",
        "The early scholars differed on his exact lineage and on whether he was a prophet or a deeply righteous man. Ibn Kathir reports the strongest opinions among the early scholars — that he was indeed a prophet, given the company in which Allah mentions him and the title 'patient' alongside Isma'il and Idris.",
        "His name 'Dhul-Kifl' means 'the one with the burden' or 'the one who took on a guarantee.' It refers to the heavy responsibility he willingly took on for the sake of Allah — a responsibility that defines his entire memory in the Qur'an and Sunnah.",
      ),
      life: p(
        "The most well-known narration of how Dhul-Kifl came to bear his name, related by Ibn Kathir from the early scholars, runs as follows. A righteous prophet of his time grew old and asked his people: 'Who will take on after me three things — fasting by day, standing in prayer by night, and judging between people without anger?' Most of the people remained silent.",
        "A young man stood up and said, 'I will.' He was tested with each of the three. He fasted by day. He stood in prayer by night. And he judged between people without losing his temper. By his fulfillment of these duties he was given the name Dhul-Kifl — the one who took on the guarantee.",
        "He continued in this for the rest of his life. Shaytan tried repeatedly to make him fail in even one of the three. He came to him at the moment of his afternoon rest, when he had finally laid down to sleep, demanding judgement on a matter that could have waited. Dhul-Kifl rose without anger. Shaytan came again, and again. The prophet kept his promise without breaking once.",
        "He continued judging his people justly, fasting, and praying through the night until Allah took his soul. Allah praised him in the Qur'an as one of the patient, and admitted him into His mercy.",
      ),
      legacy: p(
        "Dhul-Kifl (AS) is remembered as the prophet of the kept promise. He took on a burden willingly and carried it without complaint or compromise for the rest of his life. The Qur'an's mention of him among the patient is itself the highest honour — and Allah's pairing of his name with Isma'il is a divine endorsement of the company he keeps.",
        "Ibn Kathir highlights that the very meaning of his name is the lesson: a person becomes great in front of Allah by what burdens they are willing to carry, not what comforts they accumulate. He took on three heavy daily duties at an age when most would seek rest, and Allah immortalised his name forever.",
        "His story is also a quiet rebuke to those who promise lightly. Many of his people had heard the same offer; only one stood up. And once he had stood up, he never let anger, fatigue or shaytan break his word. The Ummah inherits from him a model of taking on responsibility with absolute commitment, no matter how small the audience.",
      ),
      keyFacts: [
        "Mentioned by name twice in the Qur'an, in Surah Al-Anbiya and Surah Sad",
        "Listed by Allah among the patient, alongside Isma'il and Idris",
        "His name means 'the one with the burden' or 'the one who took on the guarantee'",
        "Took on three daily duties: fasting by day, praying by night, judging without anger",
        "Considered a prophet by the strongest opinion among the early scholars",
        "Praised by Allah as 'one of the righteous'",
        "Resisted shaytan's repeated attempts to make him break his word",
        "His exact people and era are not detailed in the Qur'an or authentic Sunnah",
      ],
      lessons: p(
        "Be the one who stands up. Many heard the offer; only Dhul-Kifl raised his hand. Volunteer for the hard duty in your community, even if no one else will.",
        "Anger is a test of faith. Dhul-Kifl was given a duty that included 'judging without anger.' Train yourself to stay calm under provocation — that alone can earn you a name with Allah.",
        "Promises kept are weighed heavier than promises made. Most people make commitments easily. Dhul-Kifl's greatness was in keeping his over a lifetime. Choose your words carefully and then guard them like wealth.",
        "Shaytan attacks the moment of rest. Be ready for the whisper that says 'just this once you can break your routine.' The strongest worship is the worship that survives temptation when no one is watching.",
        "Quiet, lifelong steadiness is more beloved to Allah than dramatic short bursts. The Prophet ﷺ said the most beloved deeds to Allah are those done consistently, even if small. Be a Dhul-Kifl in your daily worship.",
      ),
    },
  },

  {
    id: "dawud",
    title: "Dawud (AS) — King and Reciter of the Zabur",
    description:
      "The young shepherd who slew Jalut, was given kingship and the Zabur, and whose recitation moved the mountains.",
    category: "Prophets",
    readTime: "10 min",
    sections: {
      intro: p(
        "Dawud (AS), known in earlier traditions as David, was a prophet and king of Bani Isra'il. He was a descendant of Yahudha, the son of Ya'qub (AS). Ibn Kathir traces his lineage back through several generations to Ya'qub, and notes that he was born in the time of the prophet Shamwil (Samuel), in the period when Bani Isra'il had asked for a king to lead them in battle against their enemies.",
        "He was the youngest of his brothers, raised as a shepherd in the hills around Bayt al-Maqdis. He was given a beautiful voice, deep humility, and a body that, despite being smaller than his brothers, carried extraordinary strength when Allah willed.",
        "His character was a unique combination: warrior and worshipper, king and shepherd, judge and constant reciter of praises. He fasted half the year — fasting one day and breaking the next — a fast the Prophet Muhammad ﷺ said was the most beloved fast to Allah. He stood in prayer for half the night. His voice in worship was so beautiful that mountains and birds joined him in glorifying Allah morning and evening.",
      ),
      life: p(
        "Bani Isra'il had been weakened by their enemies. They asked their prophet Shamwil to appoint a king who would lead them in jihad. Allah appointed Talut (Saul). Many were displeased because he was not from a noble family, but he was strong in body and knowledge, and Allah had chosen him.",
        "Talut led the army out, testing them with a river: 'Whoever drinks from it is not of me, except one who takes a single sip with his hand.' Most drank deeply. Only a small group held back, and only those crossed with him to face the army of Jalut (Goliath).",
        "Jalut was a giant warrior who terrified Bani Isra'il. He stepped forward and challenged them to single combat. None dared except a young shepherd named Dawud, who came forward with a sling and a few stones. The army laughed at him; Talut tried to dress him in armour, but it weighed him down. Dawud went out as he was, with his trust in Allah.",
        "He placed a stone in his sling, swung it, and let it fly. By Allah's leave it struck Jalut between the eyes and killed him. The army of Jalut broke and fled. The Qur'an records: 'And Allah gave him sovereignty and wisdom and taught him from that which He willed.' (Al-Baqarah 2:251)",
        "Dawud (AS) became king of Bani Isra'il after Talut. Allah granted him prophethood, kingship, and a divinely revealed book — the Zabur (Psalms), filled with praises of Allah. His recitation was so beautiful that the mountains and the birds joined him in tasbih morning and evening, as the Qur'an testifies: 'And We subjected the mountains to glorify with him, and the birds.' (Al-Anbiya 21:79)",
        "He was given great wisdom in judgement. The Qur'an records the famous case of two men who came over the wall of his prayer chamber — one with ninety-nine sheep, the other with only one — and the case taught Dawud himself a lesson about judgement, which he received with deep repentance.",
        "Allah taught him the craft of making chain mail. The Qur'an says: 'And We softened iron for him: Make full coats of mail and calculate precisely the links, and work righteousness.' (Saba 34:10-11) He used the income from this craft to support himself, never eating from the public treasury — a remarkable example of a king who lived from the work of his own hands.",
        "He combined kingship with constant worship. He divided his time strictly: a portion for rest, a portion for his family, a portion for judging his people, and a portion for worship. He fasted alternate days — a fast that has become the most beloved voluntary fast in Islam. He passed on prophethood and the throne to his son Sulaiman (AS).",
      ),
      legacy: p(
        "Dawud (AS) is remembered as the king who never let kingship distance him from Allah. He combined supreme political authority with humility, daily manual work, and constant worship — a combination that no later ruler has ever fully matched.",
        "Ibn Kathir highlights that Allah's favour upon Dawud was a complete favour: prophethood, kingship, the Zabur, the most beautiful voice, the ability of mountains and birds to praise with him, the softening of iron in his hands, wisdom in judgement, and a righteous successor in his son. Yet through all of it Dawud remained 'awwab — one who constantly turns back to Allah in repentance and praise.",
        "His fast — alternate days — and his night prayer — a third of the night, after sleeping the first half and rising before the last sixth — became permanent recommendations of the Prophet Muhammad ﷺ for those who wish to reach the highest of voluntary worship.",
      ),
      keyFacts: [
        "Prophet and king of Bani Isra'il",
        "Killed the giant Jalut (Goliath) with a sling and stone as a young man",
        "Received the divine book of the Zabur (Psalms)",
        "Mountains and birds joined him in glorifying Allah",
        "Allah softened iron in his hands; he was the first to make chain mail",
        "Ate only from the work of his own hands, despite being king",
        "His fast (every other day) is the most beloved voluntary fast in Islam",
        "Father of the prophet Sulaiman (AS); mentioned by name 16 times in the Qur'an",
      ],
      lessons: p(
        "Allah does not look at your size. The army laughed at a small shepherd with a sling. Allah used him to bring down a giant. Whatever you have, place it in Allah's hands and watch what He does.",
        "Combine power with worship. Dawud was a king who fasted half the year and stood half the night. Whatever authority Allah gives you — over a household, a team, a country — let it deepen your worship, not replace it.",
        "Eat from your own labour. Even as king, Dawud ate from the chain mail he made with his own hands. Honest, hard work for your livelihood is itself a Sunnah of the prophets.",
        "Judge fairly, even against your own inclination. Dawud welcomed correction and turned to Allah in repentance the moment he saw he had ruled too quickly. Justice is not just a verdict; it is a constant inner check.",
        "Voluntary worship has structure. Dawud's pattern — alternate-day fast and a third-of-the-night prayer — was praised by the Prophet ﷺ as the most beloved. Take a small, sustainable rhythm of voluntary worship and stick to it for life.",
      ),
    },
  },

  {
    id: "sulaiman",
    title: "Sulaiman (AS) — The King of Wind, Jinn and Beasts",
    description:
      "Granted a kingdom unlike any other, he understood the speech of birds and ants, and ruled with justice from Bayt al-Maqdis.",
    category: "Prophets",
    readTime: "11 min",
    sections: {
      intro: p(
        "Sulaiman (AS) was the son of the prophet Dawud (AS). He inherited from his father both prophethood and kingship over Bani Isra'il, and added to them a kingdom that the Qur'an itself describes as 'such as will not belong to anyone after me.' Ibn Kathir narrates that he was born and raised in Bayt al-Maqdis, the city his father had unified.",
        "He was given wisdom from his youth. The Qur'an records that he gave a more accurate judgement than his father in a case of two disputants while still a child — and Allah praised both prophets, but credited Sulaiman with that particular insight. From that moment, his wisdom in ruling became famous.",
        "His character combined immense power with profound gratitude and humility. He never let his unique kingdom distract him from worship. He was the prophet who, on hearing the speech of an ant, immediately turned to Allah with gratitude — and the king who, when offered Bilqis's throne, said: 'This is from the favour of my Lord, to test me whether I will be grateful or ungrateful.'",
      ),
      life: p(
        "After the death of his father Dawud, Sulaiman (AS) inherited the prophethood and kingship of Bani Isra'il. He prayed: 'My Lord, forgive me and grant me a kingdom such as will not belong to anyone after me; indeed, You are the Bestower.' (Sad 38:35) Allah answered him with a unique kingdom.",
        "Allah subjected to him the wind, which travelled at his command — its morning's course was a month and its evening's course was a month. He could move with his armies and his court across vast distances by the wind. He was given a fountain of molten brass that flowed for him.",
        "He was given mastery over the jinn, who built for him whatever he wished — high chambers, statues, basins as large as wells, and stationary cooking pots. He was also given the understanding of the languages of birds, ants and other creatures.",
        "One day, while marching with his army of men, jinn and birds at the head of the great Wadi al-Naml ('Valley of the Ants'), an ant called out to her colony: 'O ants, enter your dwellings that Sulaiman and his soldiers not crush you while they perceive not.' Sulaiman heard her, smiled at her speech, and made a beautiful du'a: 'My Lord, enable me to be grateful for Your favour which You have bestowed upon me and upon my parents, and to do righteousness of which You approve. And admit me by Your mercy into the company of Your righteous servants.' (An-Naml 27:19)",
        "He inspected the birds one day and found the Hudhud (hoopoe) absent. He warned that he would punish it severely unless it brought a clear excuse. The Hudhud returned with news: 'I have encompassed in knowledge that which you have not encompassed, and I have come to you from Saba with certain news. Indeed, I found a woman ruling them, and she has been given of all things, and she has a great throne. I found her and her people prostrating to the sun instead of Allah.'",
        "Sulaiman wrote a short, powerful letter to Bilqis, the Queen of Saba (Sheba), in Yemen: 'Be not haughty with me, but come to me in submission to Allah.' Bilqis consulted her advisers, then sent gifts to test him. Sulaiman returned the gifts: 'What Allah has given me is better than what He has given you. Rather, you in your gift rejoice.'",
        "He then asked his court: 'Which of you will bring me her throne before they come to me in submission?' A mighty jinn said, 'I will bring it to you before you rise from your place.' But one who had knowledge of the Book — a righteous man of his court — said: 'I will bring it to you before your glance returns to you.' And there it was, before him, in less than the blink of an eye. Sulaiman said: 'This is from the favour of my Lord, to test me whether I will be grateful or ungrateful.'",
        "When Bilqis arrived and saw the throne, slightly disguised, she recognised it. She entered his palace, and seeing the smooth glass floor she lifted her garment thinking it was water — and Sulaiman explained that it was a glass surface. She submitted: 'My Lord, indeed I have wronged myself, and I submit with Sulaiman to Allah, the Lord of the worlds.'",
        "Sulaiman ruled with justice for many years. When his time came, he was leaning upon his staff. He died in that position, and the jinn — who had no knowledge of the unseen — continued labouring under his command, thinking he was still watching them. Only when a small worm slowly ate through the staff and his body fell did the jinn realise he had been dead for some time. The Qur'an mentions this as proof that the jinn do not know the unseen.",
      ),
      legacy: p(
        "Sulaiman (AS) is remembered as the prophet-king whose kingdom united every realm — humans, jinn, animals, wind, and even the elements like brass — under the banner of tawhid. His reign was based in Bayt al-Maqdis, where he completed the construction of the Masjid al-Aqsa that his father had begun.",
        "Ibn Kathir highlights that his greatest achievement was not the wind or the jinn or the throne brought in a moment — it was his gratitude. Every favour was met immediately with thanks. Every test of pride was met with humility. Every gift was traced back to its source. The Qur'an captures him as the model of the grateful king.",
        "His death is also a permanent sign. The most powerful king in human history fell from his standing posture, and the world only realised it when a tiny worm ate through his staff. The Qur'an uses this image to teach humanity that no kingdom — however vast — can resist the decree of Allah, and that all power eventually returns to the Owner of the heavens and the earth.",
      ),
      keyFacts: [
        "Son of the prophet Dawud (AS), and his successor as king of Bani Isra'il",
        "Granted by Allah a unique kingdom unmatched before or after",
        "Wind subjected to his command; jinn and beasts under his authority",
        "Understood the speech of birds, ants, and other creatures",
        "Brought Bilqis, Queen of Saba (Sheba), to faith in Allah",
        "Completed the construction of Masjid al-Aqsa in Bayt al-Maqdis",
        "Died standing, leaning on his staff; only a worm revealed his death",
        "Mentioned by name 17 times in the Qur'an",
      ],
      lessons: p(
        "Power is a test, not a reward. Sulaiman saw every favour as a test of gratitude. Whatever Allah gives you — a job, a position, a platform — receive it with that question: am I being grateful or ungrateful?",
        "Listen to the small voices. Sulaiman heard an ant and acted on her warning. The greatest leaders pay attention to the weakest voices in their care. Never be too important to listen.",
        "Use your influence to call others to Allah. Sulaiman used his kingdom to bring an entire nation to tawhid. Whatever influence you have — at home, at work, online — use it to point others to their Lord.",
        "Gratitude is the response of the wise. The moment a great gift came (the throne in a blink of an eye), Sulaiman did not boast — he traced it to Allah. Train your heart to do the same with every blessing.",
        "Do not envy worldly kingdoms. The greatest kingdom in history ended with a man falling forward on a staff. Pour your effort into the Hereafter, where the kingdom does not end.",
      ),
    },
  },

  {
    id: "ilyas",
    title: "Ilyas (AS) — The Caller in the Land of Ba'l",
    description:
      "Sent to Bani Isra'il in the region of Ba'lbek, calling them away from the worship of the idol Ba'l.",
    category: "Prophets",
    readTime: "5 min",
    sections: {
      intro: p(
        "Ilyas (AS), known in earlier traditions as Elijah, was a prophet from Bani Isra'il, sent to a community that had drifted into the worship of an idol named Ba'l. Ibn Kathir mentions that the early scholars trace his lineage back to Harun (AS), the brother of Musa, and that he was sent to a tribe of Bani Isra'il living in the region of Ba'lbek (in present-day Lebanon).",
        "His era was one in which the message of Musa had been distorted, the priesthood corrupted, and a particular idol of Ba'l had been adopted as a deity beside Allah. The kings of his time were among the worst, openly supporting the idol and persecuting those who rejected it.",
        "His character was that of a fearless caller, uncompromising before kings and priests, but tender with the small remnant of believers who clung to tawhid in a hostile environment. He preserved the call of Musa (AS) at a time when most of his people had abandoned it.",
      ),
      life: p(
        "Ilyas (AS) called his people with the same opening every prophet brought: 'Will you not fear Allah? Do you call upon Ba'l and leave the best of creators — Allah, your Lord and the Lord of your forefathers?'",
        "His message was a direct attack on the most popular sin of his society. The leaders, the priests of Ba'l, and the kings backing them all turned against him. Most of his people rejected him, mocked his warnings, and clung to their idol.",
        "He continued to call them, supported only by a small band of believers. He pleaded with them through every means: reminding them of Allah's blessings, of the prophets before them, of the punishment of the nations who rejected guidance.",
        "When his people persisted in their disbelief and persecution, Allah's punishment came upon them. The Qur'an records simply: 'But they denied him, so indeed, they will be brought for punishment, except the chosen servants of Allah.' (As-Saffat 37:127-128)",
        "Allah honoured Ilyas in the Qur'an with words rarely given to any other prophet by name: 'Indeed, he was of Our believing servants. And We left for him favourable mention among later generations: Peace upon Ilyasin. Indeed, We thus reward the doers of good.' (As-Saffat 37:130-131)",
      ),
      legacy: p(
        "Ilyas (AS) is remembered as the prophet who stood against the worship of Ba'l in an age when the worship of Ba'l was supported by kings and priests. He held the line of tawhid when almost no one else would, and Allah immortalised his name with the unique greeting 'Salamun 'ala Ilyasin' — 'Peace upon Ilyas.'",
        "Ibn Kathir highlights that the existence of even one prophet calling to Allah in a corrupted society is a mercy from Allah to that society. Most rejected Ilyas, but the small group who believed were saved, and the call was preserved. Allah does not abandon His tawhid even in the darkest ages — He always raises someone who carries the lamp.",
        "His story stands as a permanent encouragement to every Muslim who feels alone in a society that mocks faith. If a prophet can be opposed by kings, priests and most of his own people and yet be honoured forever in the Qur'an, then a believer holding to tawhid in a hostile environment today is in the best of company.",
      ),
      keyFacts: [
        "Prophet from Bani Isra'il, descended (according to many scholars) from Harun (AS)",
        "Sent to a community in the region of Ba'lbek (in modern Lebanon)",
        "His people worshipped an idol named Ba'l",
        "Most of his people rejected him; only a small remnant believed",
        "Allah honoured him with the unique greeting 'Peace upon Ilyas'",
        "Mentioned by name in Surah Al-An'am and Surah As-Saffat",
        "Identified by many scholars with the figure known as Elijah in earlier traditions",
        "His call was followed and continued by his successor Al-Yasa' (AS)",
      ],
      lessons: p(
        "Truth is not measured by popularity. Ilyas was rejected by most of his people but praised forever by Allah. Do not let public opinion be your standard.",
        "The popular sin of an age is the test of an age. Every era has its 'Ba'l' — an idol that society defends loudly. Identify it, refuse it, and warn against it gently.",
        "Allah always preserves a remnant. No matter how dark the era, there will always be a small group of believers holding to tawhid. Find them; love them; strengthen them.",
        "Even one sincere caller is a mercy. You may feel that your voice does not matter, but Allah's record of you for standing for truth is what counts. Speak the haqq even if only a few listen.",
        "Be remembered for what you stood against. Ilyas's name is forever linked with refusing Ba'l. What sin of our society will your name be linked with refusing?",
      ),
    },
  },

  {
    id: "alyasa",
    title: "Al-Yasa' (AS) — The Successor of Ilyas",
    description:
      "A prophet who continued the call of Ilyas to Bani Isra'il, mentioned among the chosen and excellent.",
    category: "Prophets",
    readTime: "5 min",
    sections: {
      intro: p(
        "Al-Yasa' (AS), known in earlier traditions as Elisha, was a prophet who succeeded Ilyas (AS) in calling Bani Isra'il back to the worship of Allah alone. Ibn Kathir narrates that he was a close companion of Ilyas, learned from him directly, and was appointed by Allah to continue the work after Ilyas's time among his people ended.",
        "He lived in the same general region as Ilyas — the lands of Bani Isra'il in the Levant — at a time when the call to Ba'l-worship had spread widely and the believers were a small minority. He inherited not only his predecessor's message, but also the difficult environment in which it had to be delivered.",
        "His character was that of a faithful student turned faithful teacher, a gentle but firm caller, and a patient inheritor of a difficult mission. He stood as a quiet pillar of tawhid in his time, holding the line that Ilyas had drawn against the worship of any deity beside Allah.",
      ),
      life: p(
        "When Ilyas (AS) was no longer among the people of Ba'lbek, Al-Yasa' continued the same call. He used the same arguments — reminding the people that Allah is the One who gave them life, sustained them, and would judge them — and faced the same resistance from the priests of Ba'l and the rulers who supported them.",
        "Like the prophets before him, he combined warning with mercy, reminder with patience, and personal worship with public da'wah. He did not abandon the small community of believers who had stood with Ilyas, and he did not stop inviting those who had rejected the call before.",
        "The Qur'an does not give long narrative passages about Al-Yasa' as it does for Musa or Yusuf. Instead, Allah honours him in two specific verses by mentioning his name alongside other great prophets:",
        "'And Isma'il and Al-Yasa' and Yunus and Lut — and all We preferred over the worlds.' (Al-An'am 6:86)",
        "'And remember Isma'il, Al-Yasa' and Dhul-Kifl, and all are among the outstanding.' (Sad 38:48)",
        "Ibn Kathir comments that Allah's pairing of Al-Yasa' with prophets like Isma'il, Yunus and Lut is itself a powerful statement of his rank. The Qur'an's silence on the details of his individual story is not a sign of his lesser status — it is a reminder that not every honoured servant of Allah is given a famous narrative on earth, but they are still 'among the outstanding' with their Lord.",
      ),
      legacy: p(
        "Al-Yasa' (AS) is remembered as the prophet who carried forward the work of his teacher without seeking his own fame. He stands as a model of the faithful successor — the one who does not need to begin a new movement but is content to preserve, defend and extend the work of the righteous person before him.",
        "Ibn Kathir highlights that the Qur'an's brief mention of certain prophets is itself an honour: their full stories are with Allah, and a single verse from Allah is more weight than the longest worldly memoir. Al-Yasa' is twice mentioned among 'the outstanding' — a rank shared with Isma'il and Dhul-Kifl.",
        "His example is a quiet rebuke to a culture obsessed with originality and personal branding. Some of the greatest service to Allah's deen is done by those who carry forward the work of their teachers, parents, or righteous predecessors without claiming a separate stage for themselves.",
      ),
      keyFacts: [
        "Prophet of Bani Isra'il, successor of Ilyas (AS)",
        "Identified by many scholars with the figure known as Elisha in earlier traditions",
        "Mentioned by name twice in the Qur'an, in Surah Al-An'am and Surah Sad",
        "Listed among the prophets 'preferred over the worlds'",
        "Called Bani Isra'il away from the worship of Ba'l and other idols",
        "Faced the same hostile environment as Ilyas before him",
        "Honoured as one of 'the outstanding' (al-akhyar) by Allah",
        "Continued the line of prophethood among Bani Isra'il in the Levant",
      ],
      lessons: p(
        "Carrying forward someone else's good work is its own greatness. Not every servant of Allah needs to start a new project. Some are honoured for faithfully continuing what others began.",
        "A short mention from Allah is bigger than a long mention from people. The Qur'an gives Al-Yasa' a few verses; that is more honour than a thousand pages of worldly fame.",
        "Be a good student and you may become a good teacher. Al-Yasa' learned from Ilyas, then carried his message after him. Sit at the feet of the righteous if you ever hope to teach others.",
        "Faithfulness in obscurity is a form of high ibadah. Al-Yasa' did not have a 'famous' story; he simply held the line. Many of Allah's most beloved servants are unknown to history but precious to Him.",
        "Stand against the popular sin of your age, even if your name is not remembered. Al-Yasa' faced the same Ba'l-worshipping society as Ilyas. Do your part for tawhid in your time, and trust Allah with your record.",
      ),
    },
  },

  {
    id: "yunus",
    title: "Yunus (AS) — The Companion of the Whale",
    description:
      "He left his people in anger, was swallowed by a great fish, and called out from three darknesses.",
    category: "Prophets",
    readTime: "8 min",
    sections: {
      intro: p(
        "Yunus (AS), also known as Dhu al-Nun ('the companion of the great fish'), was a prophet sent to the people of Nineveh, an ancient city located in the region of present-day Mosul in Iraq. Ibn Kathir narrates that his lineage traces back through Mata, his father, and that he was sent to a people of around 100,000 — perhaps more.",
        "Nineveh was a great, populous city of its time, deeply sunk in idolatry and far from the way of any earlier prophet. Yunus was sent as a messenger to this enormous community to call them back to the worship of Allah alone.",
        "His character was that of a sincere and zealous caller — but his story is unique among the prophets in that the Qur'an records a moment in which he acted on his anger before he had received Allah's permission to act. The very honesty with which the Qur'an tells his story is one of the great proofs of its truth: it does not hide the slip of one of Allah's chosen servants — and it does not hide his beautiful return.",
      ),
      life: p(
        "Yunus (AS) called the people of Nineveh repeatedly. They rejected him repeatedly. He warned them of a punishment from Allah if they did not repent, and then — overwhelmed by their stubbornness — left the city in anger before Allah had given him permission to depart.",
        "He boarded a ship, planning to travel away from his people. Mid-voyage, the ship began to sink — overloaded, by some narrations, or struck by a storm by others. The crew decided to lighten the load by casting one passenger overboard, choosing him by lot. They drew lots, and the lot fell on Yunus. They drew again. It fell on him again. They drew a third time. It fell on him again. He understood — this was Allah's hand — and he cast himself into the sea.",
        "Allah commanded a great fish to swallow him whole — but not to harm him. Yunus was alive in the belly of the fish, in the dark of the night, in the dark of the sea, and in the dark of the fish — three darknesses, as Ibn Kathir notes. In that moment, he cried out the words that have become one of the most powerful du'as ever made:",
        "'La ilaha illa Anta, subhanaka, inni kuntu min al-zalimin' — 'There is no deity except You; glory be to You. Indeed, I have been of the wrongdoers.' (Al-Anbiya 21:87)",
        "He did not even ask, 'Get me out.' He affirmed Allah's oneness, glorified Him, and admitted his own slip. The Prophet Muhammad ﷺ later said: 'No Muslim ever calls upon Allah with this du'a in any matter, but Allah responds to him.'",
        "Allah responded immediately. He commanded the fish, and it cast Yunus onto a barren shore. He was weak, his skin fragile, his body unable to bear the sun. Allah caused a yaqtin (a gourd plant) to grow over him — broad-leaved, soft, providing shade and nourishment. He was nursed back to strength.",
        "Meanwhile, the people of Nineveh, when they saw the early signs of the punishment they had been warned about, did something no other rejected nation in the Qur'an had done: they repented sincerely as a community. Men, women, children — even their animals — they came out together, weeping and crying out to Allah for forgiveness. The Qur'an itself singles them out: 'Then has there not been a city that believed so its faith benefited it, except the people of Yunus? When they believed, We removed from them the punishment of disgrace in worldly life and gave them enjoyment for a time.' (Yunus 10:98)",
        "Yunus returned to them and continued his prophethood. The community he had left in anger had become the community he had hoped for.",
      ),
      legacy: p(
        "Yunus (AS) is remembered as the prophet whose du'a from the belly of the fish became one of the most beloved supplications of every believer who ever found themselves in 'three darknesses' — overwhelmed, trapped, surrounded on every side. The Prophet Muhammad ﷺ said this du'a is answered for any Muslim who makes it sincerely in any difficulty.",
        "Ibn Kathir highlights another remarkable feature of his story: his people are the only nation in the Qur'an whose collective repentance, after warning, was accepted to the extent that the punishment was lifted. They are a permanent sign that no community is too far gone — sincere, collective tawbah can save a people even at the edge of destruction.",
        "The Qur'an's honesty about Yunus's slip is itself part of his honour. He is also given the kunya 'Dhu al-Nun' and the alternative name 'Sahib al-Hut.' The Prophet Muhammad ﷺ said: 'No one should say I am better than Yunus ibn Mata.' (Sahih al-Bukhari) — a hadith that protects Yunus's rank from any believer who might think less of him because of his momentary departure.",
      ),
      keyFacts: [
        "Prophet sent to the people of Nineveh in present-day Iraq",
        "Also known as Dhu al-Nun and Sahib al-Hut",
        "Left his people in anger before Allah's permission",
        "Swallowed by a great fish and survived in 'three darknesses'",
        "His du'a from the belly of the fish is reported to be answered for any believer in difficulty",
        "His people are the only nation in the Qur'an whose collective tawbah lifted their punishment",
        "Mentioned by name in several surahs; an entire surah (Surah Yunus) is named after him",
        "The Prophet ﷺ said: 'No one should say I am better than Yunus ibn Mata.'",
      ],
      lessons: p(
        "Never act in anger before clarity. Yunus was a prophet, and even his moment of acting on frustration brought him into the belly of a fish. Slow your decisions when you are emotional.",
        "The du'a of Yunus is for every darkness. Memorise it. Use it whenever life surrounds you on every side: 'La ilaha illa Anta, subhanaka, inni kuntu min al-zalimin.'",
        "True du'a begins by glorifying Allah and admitting your own fault, not by listing your demands. Yunus did not ask to be released; he affirmed Allah and accused himself — and Allah released him.",
        "No people are beyond saving. Nineveh was a city of 100,000 sunk in idolatry — and they all repented. Never give up on your family, your friends, your community. Sincere tawbah can change everything.",
        "When Allah delivers you from a hard place, He nurses you back gently. The yaqtin plant over Yunus reminds us that Allah's mercy after a trial is not just rescue — it is care, kindness, and recovery.",
      ),
    },
  },

  {
    id: "zakariya",
    title: "Zakariya (AS) — The Whispered Prayer",
    description:
      "An elderly prophet who quietly asked Allah for a son, and was given Yahya — pure from his birth.",
    category: "Prophets",
    readTime: "7 min",
    sections: {
      intro: p(
        "Zakariya (AS), known in earlier traditions as Zechariah, was a prophet of Bani Isra'il. He lived in Bayt al-Maqdis and was the guardian of the temple — a man of deep worship, simple living, and wide knowledge. Ibn Kathir traces his lineage back to Sulaiman (AS), making him a descendant of the line of Dawud.",
        "He served Bani Isra'il at a time when prophethood and righteous leadership were rare. He was their priest, their judge, and their teacher — and he was also the guardian of his young niece Maryam (AS), the daughter of his sister, who had been entrusted to the temple by her mother.",
        "His character was a model of quiet, humble worship. The Qur'an captures his prayer in three short, beautiful verses in Surah Maryam — a prayer he made 'in secret' (nida'an khafiyya), without any wish to be heard by anyone except Allah. He combined deep tenderness with deep respect for Allah's will.",
      ),
      life: p(
        "As Zakariya (AS) entered Maryam's chamber in the temple to bring her provisions, he found that she always had food with her — out of season, fresh, and abundant. He asked her: 'O Maryam, from where is this for you?' She answered: 'It is from Allah. Indeed, Allah provides for whom He wills without account.'",
        "Her answer struck him deeply. He realised that if Allah could provide miraculous food for a young woman, He could provide a miraculous son to an old man. There, in the temple, he turned to Allah with a quiet, secret prayer.",
        "'My Lord, indeed my bones have weakened, and my head has filled with white hair, and never have I been in my supplication to You, my Lord, unhappy. And indeed, I fear the successors after me, and my wife has been barren, so give me from Yourself an heir who will inherit me and inherit from the family of Ya'qub. And make him, my Lord, pleasing to You.' (Maryam 19:4-6)",
        "He did not even raise his voice. The Qur'an describes his call as nida'an khafiyya — a hidden, whispered call. Yet Allah heard him immediately and sent him glad tidings of a son named Yahya — a name no one had been given before.",
        "Zakariya was astonished: 'My Lord, how will I have a boy when my wife has been barren and I have reached extreme old age?' Allah answered: 'Your Lord says, It is easy for Me, for I created you before, while you were nothing.' He asked for a sign. Allah gave him: he would not be able to speak to people for three days except through gestures, although he could still glorify Allah. He came out to his people, and they understood by his gestures to glorify Allah morning and evening.",
        "Yahya was born — pure, dutiful, devoted to Allah from his earliest age. Zakariya raised him as a prophet's son, teaching him the Tawrah and the worship of Allah. Yahya grew into a man whose name became proverbial for purity and asceticism.",
        "Years later, when an unjust ruler of Bani Isra'il sought to take an unlawful relative as a wife, Yahya stood in his way and forbade it on the basis of the Tawrah. The ruler, encouraged by the woman, ordered Yahya killed. He was killed unjustly, and the classical sources mention that Zakariya, deeply grieved by the killing of his son, was himself pursued by oppressive elements and was also killed.",
      ),
      legacy: p(
        "Zakariya (AS) is remembered as the prophet whose quiet, private du'a teaches every believer how to ask. He did not perform his prayer for show. He did not wait for a public moment. He simply stood in the temple, weakened by age, and whispered to his Lord — and Allah answered him with a son who would become a prophet.",
        "Ibn Kathir highlights that Zakariya's whisper is the model of khushu' (devotion) in du'a. Allah is not impressed by volume; He is impressed by sincerity. The Prophet Muhammad ﷺ also taught the Ummah to whisper supplications, except in moments where loud du'a is part of the act of worship.",
        "His combination of guardian (of Maryam) and supplicant (for Yahya) is also a beautiful theme: serve the righteous around you, and Allah will pour into your own life the kind of barakah you saw in theirs.",
      ),
      keyFacts: [
        "Prophet of Bani Isra'il and a descendant of the prophet Sulaiman (AS)",
        "Guardian of Maryam (AS) in the temple",
        "Made a quiet, secret du'a for a son in his old age",
        "Father of the prophet Yahya (AS) — born after his wife was barren and he was very old",
        "Given a sign of three days of inability to speak to people",
        "Mentioned by name in several surahs, including Aal 'Imran and Maryam",
        "Killed unjustly by the rulers of his time, according to classical sources",
        "His du'a is one of the most beautiful prayers for offspring in the Qur'an",
      ],
      lessons: p(
        "Du'a does not need volume. Zakariya whispered, and Allah answered with a prophet. Train yourself to talk to Allah in private, in low voice, with a fully present heart.",
        "Old age is not a barrier to Allah's gifts. Whatever 'too late' feels like in your life, remember: a barren old woman bore Yahya. Make du'a until your last breath.",
        "Serve the righteous; their barakah will reach you. Zakariya served Maryam, and her example sparked the du'a that gave him a son. Surround yourself with righteous people and serve them sincerely.",
        "Frame your du'a around Allah's qualities first. Zakariya began by acknowledging his weakness and Allah's past kindness — 'never have I been in my supplication to You, my Lord, unhappy' — before asking for the gift.",
        "The greatest inheritance is a righteous child. Zakariya did not ask for wealth or honour. He asked for an heir who would 'inherit from the family of Ya'qub' — meaning, in religion. Make this the highest item on your du'a list for your family.",
      ),
    },
  },

  {
    id: "yahya",
    title: "Yahya (AS) — Pure from Birth",
    description:
      "Granted wisdom as a boy, devoted to worship, dutiful to his parents, and a martyr at the hands of a tyrant.",
    category: "Prophets",
    readTime: "6 min",
    sections: {
      intro: p(
        "Yahya (AS), known in earlier traditions as John the Baptist, was the son of the prophet Zakariya (AS), born in answer to his father's whispered du'a. The Qur'an highlights that he was given a name no one before him had been given: 'O Zakariya, indeed We give you good tidings of a boy whose name will be Yahya. We have not assigned to any before this name.' (Maryam 19:7)",
        "He was raised in the household of a prophet, in Bayt al-Maqdis, devoted to the temple from his earliest childhood. Ibn Kathir narrates that he was given understanding of the Tawrah and the practice of worship while he was still a small boy. The Qur'an confirms this: 'And We gave him judgement while a child.' (Maryam 19:12)",
        "His character is summed up in the Qur'an in some of the most concentrated, beautiful verses ever revealed about a single person: 'And [made him] affectionate from Us and pure, and he was fearing of Allah, and dutiful to his parents, and he was not a disobedient tyrant.' (Maryam 19:13-14) Five qualities — affection, purity, taqwa, kindness to parents, and a complete absence of arrogance.",
      ),
      life: p(
        "Yahya (AS) was given a unique combination from birth. He was born to old parents, after a long du'a, and Allah commanded him: 'O Yahya, take the Scripture with determination.' (Maryam 19:12) From childhood he carried the Tawrah with seriousness, learned its judgements, and lived by its laws.",
        "He was an ascetic. The classical narrations describe him as living simply, eating from the leaves of trees and the wild plants of the earth, and wearing rough garments. He stayed close to the temple, fasted often, and stood in prayer at night.",
        "He wept much from the fear of Allah. The classical sources record that the path of his tears could be traced on his cheeks, and that he sometimes wept until his eyes seemed almost permanently moist. Yet his fear of Allah did not produce harshness toward people — the Qur'an pairs his taqwa with affection (hananan).",
        "He was deeply dutiful to his parents — barran bi-walidayhi — at a time when his father was an old prophet leading a difficult community. He honoured Zakariya, supported him, and never showed the slightest disobedience.",
        "He grew into a prophet of his own. He called his people to repentance, to purification, and to faithfulness to the Tawrah. His message was direct, his life was clean, and his standing among his people was so high that even the rulers feared his moral authority.",
        "His final test came when an unjust ruler of his people sought to marry an unlawful relative. Yahya, holding the Tawrah firmly, openly forbade it. The ruler, urged by the woman who wanted the marriage, ordered Yahya killed. He was killed unjustly, becoming a martyr — and one of the great martyrs honoured in the Qur'an.",
        "Allah greets him with a beautiful, threefold blessing: 'And peace be upon him the day he was born, and the day he dies, and the day he is raised alive.' (Maryam 19:15)",
      ),
      legacy: p(
        "Yahya (AS) is remembered as a prophet whose entire life was characterised by purity. He was pure from birth, pure in worship, pure in his obedience to his parents, pure in his refusal of arrogance, and pure in his martyrdom defending the law of Allah.",
        "Ibn Kathir highlights the Qur'an's choice of words in describing him. Five qualities are listed in two short verses — and not one of them is a worldly accomplishment. He was not described as a leader, a king, a wealthy man, or a famous orator. He was described as affectionate, pure, God-fearing, dutiful to his parents, and free of arrogance. This is the divine measure of greatness.",
        "On the night of the Mi'raj, the Prophet Muhammad ﷺ met Yahya alongside 'Isa in the second heaven. Yahya is therefore one of the few prophets the Prophet of Islam met directly during his ascent — a sign of his elevated rank with Allah.",
      ),
      keyFacts: [
        "Son of the prophet Zakariya (AS), born in answer to his father's secret du'a",
        "Given a unique name — Yahya — no one before him had carried",
        "Given wisdom and the Tawrah while still a child",
        "Identified by many scholars with the figure known as John the Baptist",
        "Mentioned by name 5 times in the Qur'an",
        "Described in the Qur'an as affectionate, pure, God-fearing, dutiful to parents, never arrogant",
        "Killed as a martyr defending the law of Allah against an unjust ruler",
        "Met by the Prophet ﷺ in the second heaven during the Mi'raj",
      ],
      lessons: p(
        "Greatness is measured by character, not achievements. Yahya was praised by Allah for affection, purity, taqwa, and kindness to parents. Build these qualities — they outlast every job title.",
        "Take Allah's word with determination. The command to Yahya — 'take the Scripture with determination' — is for every believer. Read the Qur'an seriously, study it, live by it.",
        "Pair fear of Allah with kindness to people. Yahya wept from Allah's fear, but he was the most affectionate man toward his parents and his community. True taqwa softens the heart toward people.",
        "Honour your parents in their old age. Yahya was barran bi-walidayhi at the very stage of his life when most young men become independent and distant. Watch your tone and your service when your parents grow old.",
        "Stand against injustice even at the cost of your life. Yahya did not bend his Tawrah for a king. May Allah give the Ummah such moral courage in our age.",
      ),
    },
  },

  {
    id: "isa",
    title: "'Isa (AS) — The Messiah, Son of Maryam",
    description:
      "Born without a father by the word of Allah, he spoke from the cradle, healed the sick, and was raised to the heavens.",
    category: "Prophets",
    readTime: "14 min",
    sections: {
      intro: p(
        "'Isa (AS), known in earlier traditions as Jesus, is one of the five Ulul-'Azm messengers and the last great prophet of Bani Isra'il before Muhammad ﷺ. He was born to Maryam (AS), the daughter of 'Imran, who is the only woman mentioned by name in the Qur'an and who has an entire surah named after her.",
        "He is given a unique combination of titles in the Qur'an: al-Masih ('the Messiah'), 'Isa ibn Maryam ('Son of Maryam'), Ruhullah ('a spirit from Allah'), and Kalimatullah ('a word from Allah'). Each of these titles points to the miraculous nature of his birth and the role Allah gave him.",
        "His character was a model of mercy, simplicity, and absolute submission to Allah. He was never married, owned almost no property, slept under the open sky, and travelled from village to village calling Bani Isra'il back to the worship of Allah and to the proper observance of the Tawrah. The Qur'an describes him as 'a sign for the people and a mercy from Us.' (Maryam 19:21)",
      ),
      life: p(
        "Maryam (AS) was raised in the temple under the guardianship of her uncle Zakariya (AS). She devoted herself to worship from her earliest age, and Allah accepted her with a noble acceptance. She was so devoted that fresh, out-of-season provisions would appear with her, sent by Allah directly.",
        "When she had reached womanhood, Allah sent the angel Jibril to her in the form of a man. She withdrew in fear and said: 'Indeed, I seek refuge in the Most Merciful from you, if you should be fearing of Allah.' He answered: 'I am only the messenger of your Lord to give you a pure boy.' She said: 'How can I have a boy while no man has touched me, and I have not been unchaste?' He said: 'Thus it will be; your Lord says, It is easy for Me, and so We will make him a sign to the people and a mercy from Us. And it is a matter already decreed.' (Maryam 19:18-21)",
        "She conceived, by Allah's word, without any human father — exactly as Allah had created Adam without any father or mother. The Qur'an makes this comparison explicit: 'Indeed, the example of 'Isa to Allah is like that of Adam. He created him from dust; then He said to him, Be, and he was.' (Aal 'Imran 3:59)",
        "She withdrew with him to a distant place. The pains of childbirth drove her to the trunk of a date palm. She wished she had died before this moment, fearing what her people would say. A voice called to her from below: 'Do not grieve; your Lord has provided beneath you a stream. And shake toward you the trunk of the palm tree; it will drop upon you ripe, fresh dates. So eat and drink and be contented.' Allah told her, if anyone asked, to gesture that she had taken a vow of silence and would speak to no one that day.",
        "She returned to her people carrying the infant. They accused her: 'O Maryam, you have certainly done a thing unprecedented. O sister of Aaron, your father was not a man of evil, nor was your mother unchaste.' She did not answer; she pointed to the child. They said in mockery: 'How can we speak to one who is in the cradle?'",
        "Then 'Isa spoke from the cradle the famous words: 'Indeed, I am the servant of Allah. He has given me the Book and made me a prophet. And He has made me blessed wherever I am, and has enjoined upon me prayer and zakah as long as I remain alive, and dutiful to my mother. He has not made me a wretched tyrant. And peace is on me the day I was born and the day I will die and the day I am raised alive.' (Maryam 19:30-33)",
        "He grew into a young man, learning the Tawrah, devoted to worship, kind to his mother, and constantly praising Allah. When his mission as a prophet began, Allah gave him the Injil (Gospel) and a series of miracles by Allah's leave. He fashioned a bird from clay and breathed into it, and it became a real bird flying by Allah's leave. He healed the blind from birth and the leper. He gave life to the dead by Allah's permission. He told people what they had eaten in their homes and what they had hidden — by knowledge Allah gave him.",
        "He selected a small group of disciples — al-Hawariyyun — who said: 'We are the helpers of Allah.' He called Bani Isra'il to refine their religion: to worship Allah alone, to abandon the additions and distortions some scholars had introduced, and to soften some of the strictnesses imposed earlier. He taught love of Allah, mercy to the poor, and a deep purification of the heart.",
        "But the leaders of Bani Isra'il, jealous of his impact and threatened by his correction of their distortions, plotted to kill him. They handed him over to the Roman authorities and pushed for his crucifixion.",
        "The Qur'an states clearly what happened: 'And they did not kill him, nor did they crucify him; but it was made to appear so to them. And indeed, those who differ over it are in doubt about it. They have no knowledge of it except the following of assumption. And they did not kill him, for certain. Rather, Allah raised him to Himself.' (An-Nisa 4:157-158)",
        "By Allah's plan, another man was made to resemble 'Isa, and he was crucified — while 'Isa himself was raised body and soul to the heavens. He is alive there, and he will return at the end of time.",
      ),
      legacy: p(
        "'Isa (AS) is the prophet whose name has been more disputed and distorted than any other. Some peoples raised him from a prophet to a god — a grave error that the Qur'an firmly corrects: 'They have certainly disbelieved who say that Allah is the Messiah, the son of Maryam.' Other peoples slandered his pure mother — another grave error the Qur'an firmly corrects.",
        "Ibn Kathir highlights that the Qur'an restores 'Isa to his rightful and noble place: a great prophet, a Word from Allah, a Spirit from Him, the Messiah, born of a virgin mother, with miracles given by Allah's leave, raised body and soul to the heavens, and waiting to return.",
        "His return at the end of time is one of the major signs of the Day of Judgement. Authentic ahadith describe how he will descend at the white minaret east of Damascus, break the cross (refuting the claim of his crucifixion and divinity), kill the Dajjal, kill the swine, abolish the jizya, and rule by the law of Muhammad ﷺ. He will live, marry, have children, die, and be buried in Madinah beside the Prophet ﷺ.",
      ),
      keyFacts: [
        "One of the five Ulul-'Azm messengers",
        "Born to Maryam (AS) without a father, by Allah's word",
        "Spoke from the cradle to defend his mother's honour",
        "Given the Injil (Gospel) and miracles by Allah's leave",
        "Healed the blind and leper, and gave life to the dead by Allah's permission",
        "Was not killed or crucified — Allah raised him to the heavens body and soul",
        "Will return at the end of time to break the cross and kill the Dajjal",
        "Mentioned by name 25 times in the Qur'an; an entire surah is named after his mother Maryam",
      ],
      lessons: p(
        "Allah creates whatever He wills, however He wills. 'Isa was born without a father; Adam without father or mother. Never let limited human experience define what Allah is able to do.",
        "Defend the honour of pure women. The Qur'an goes out of its way to defend Maryam from slander. Stand against false accusations against the chaste in your own community.",
        "True love of 'Isa is to obey what he taught. He worshipped Allah alone, prayed, gave zakah, was dutiful to his mother. The greatest tribute to him is to live by his actual teachings — not to deify him.",
        "Mercy is the language of every prophet. 'Isa was sent as 'a mercy from Us.' Make mercy your default — to family, to neighbours, to strangers, even to those who oppose you.",
        "The end of falsehood is certain. The cross will be broken when 'Isa returns. Whatever distortion of religion stands tall today, Allah's truth will triumph in the end. Stand on the side of His revealed truth now.",
      ),
    },
  },

  {
    id: "muhammad",
    title: "Muhammad ﷺ — The Final Messenger, Mercy to the Worlds",
    description:
      "From the Year of the Elephant to the Farewell Pilgrimage — the seal of the prophets and a mercy to all creation.",
    category: "Prophets",
    readTime: "20 min",
    sections: {
      intro: p(
        "Muhammad ﷺ, the final and greatest of all messengers, was born in Makkah in the Year of the Elephant (around 570 CE). His full lineage is Muhammad ibn 'Abdullah ibn 'Abd al-Muttalib ibn Hashim ibn 'Abd Manaf — descending through the noble tribe of Quraysh, back to 'Adnan, and ultimately to Isma'il son of Ibrahim (AS). He is therefore the answer to the du'a that Ibrahim and Isma'il made while raising the Ka'bah: 'Our Lord, raise up among them a messenger from themselves.'",
        "He was orphaned early. His father 'Abdullah died before his birth. His mother Aminah died when he was six. His grandfather 'Abd al-Muttalib raised him for two years, then died, and his uncle Abu Talib took him in. He grew up under the open sky as a shepherd, then as a merchant — a profession that taught him patience with people, careful dealings, and the value of long quiet hours of reflection.",
        "His character before prophethood was already extraordinary. The people of Makkah, even those who later opposed him, called him al-Sadiq al-Amin — 'the Truthful, the Trustworthy.' They entrusted him with their valuables. They sought him to settle disputes — most famously when he resolved the quarrel of the tribes over who would place the Black Stone, by laying it in a cloak and asking each tribe's chief to lift a corner together. Even his enemies, in private, never accused him of a single lie before his prophethood.",
      ),
      life: p(
        "At twenty-five he married Khadijah bint Khuwaylid (RA), a noble and intelligent widow who had hired him as her trade agent and been impressed by his honesty. She bore him almost all of his children and became the first human being to believe in him when revelation came.",
        "At forty, while in retreat in the cave of Hira above Makkah, the angel Jibril appeared and brought him the first revelation: 'Read in the name of your Lord who created. Created man from a clinging substance. Read, and your Lord is the Most Generous.' (Al-'Alaq 96:1-3) He returned to Khadijah trembling. She wrapped him, calmed him, and took him to her cousin Waraqah ibn Nawfal, a learned man of the People of the Book, who recognised the signs of prophethood.",
        "For three years he called secretly. Khadijah, Abu Bakr, 'Ali, Zayd ibn Harithah, and a small group of others embraced Islam. Then Allah commanded him to call openly. He climbed Mount Safa and gathered Quraysh: 'If I told you that an army was coming from behind this mountain, would you believe me?' They said: 'Yes, we have never known you to lie.' He said: 'Then I am a warner to you of a severe punishment.'",
        "Persecution began immediately. The early believers — Bilal, Sumayyah (the first martyr), Yasir, 'Ammar, and many others — were tortured. Some were sent to Abyssinia for safety. Quraysh boycotted the Prophet ﷺ and his clan in the valley of Abu Talib for three years; they ate leaves and starved, but did not surrender. In one year — the Year of Sorrow — both Khadijah and Abu Talib died.",
        "He went to Ta'if seeking support; its leaders set children and slaves on him to stone him until his sandals filled with blood. He sat under a tree and made the famous du'a: 'O Allah, I complain to You of my weakness, my scarcity of resources, and my humiliation before people. O Most Merciful of the merciful, You are the Lord of the weak, and You are my Lord.' Jibril came with the angel of the mountains, offering to crush Ta'if between two mountains. The Prophet ﷺ refused: 'Rather, I hope that Allah will bring out from their loins those who will worship Allah alone.'",
        "Then came the Isra and Mi'raj — the Night Journey from Makkah to Bayt al-Maqdis on al-Buraq, and the Ascension through the seven heavens, where he met the prophets and was brought to a station no creation had ever reached. The five daily prayers were prescribed there.",
        "The Hijrah followed. Allah commanded him to migrate to Madinah, where the Ansar had already pledged to support him. He left Makkah by night with Abu Bakr, hid in the cave of Thawr for three days while Quraysh searched, and arrived in Madinah to a welcome of praise and palm leaves.",
        "In Madinah he built the first mosque, paired the Muhajirun with the Ansar in bonds of brotherhood, drafted the Constitution of Madinah that organised the city, and faced the great battles that followed. At Badr, with 313 lightly armed believers, Allah granted victory over a thousand of Quraysh. At Uhud, a partial defeat became a lesson in obedience to the Prophet ﷺ. At the Trench, ten thousand attackers were turned back by a wind and the believers' patience.",
        "Through every battle and every treaty, through famine and wealth, through fear and security, his character only grew gentler. He was never seen losing his temper for himself — only for Allah's sake when His limits were violated. He patched his own clothes, mended his own sandals, milked his own goat, ate with his servants, and never refused an invitation, even from the poorest believer.",
        "After the Treaty of Hudaybiyyah, the message spread rapidly. Letters were sent to the great kings of the world. In the eighth year of Hijrah, with ten thousand companions, he entered Makkah without a battle. The very people who had tortured him, killed his companions, and starved his clan stood waiting for his judgement. He asked them: 'What do you think I will do with you?' They said: 'A noble brother and the son of a noble brother.' He said the words that have echoed through history: 'Go, for you are free.'",
        "He performed the Farewell Pilgrimage in the tenth year of Hijrah and gave one of the greatest sermons ever delivered, in front of over a hundred thousand companions. He declared the inviolability of life, wealth and honour. He abolished the customs of jahiliyyah. He warned about the rights of women and the rights of slaves. He declared the equality of all human beings before Allah, with no preference except by taqwa. He concluded: 'Have I conveyed?' They said: 'Yes.' He said: 'O Allah, bear witness.'",
        "He passed away in Madinah at the age of sixty-three, in the room of 'A'ishah (RA), his head resting on her chest. His final words included: 'Rather, the highest companion (in Paradise).' He left behind, in his own words, two things by which his Ummah would never go astray: the Book of Allah and his Sunnah.",
      ),
      legacy: p(
        "Muhammad ﷺ is the seal of the prophets — there is no prophet after him, and no message after his message. He is the only prophet sent to all of humanity until the end of time. His Sunnah covers every aspect of life — worship, family, marketplace, politics, war, peace, hygiene, sleep, eating, and even how to enter a room — preserved in unmatched detail by his companions and the generations after them.",
        "He is described in the Qur'an in titles no other prophet was given: 'a mercy to the worlds,' 'a kindness on the believers,' 'on an exalted standard of character.' On the Day of Judgement, he will be the only one given the Maqam Mahmud — the praiseworthy station — and the right to intercede on behalf of all creation. His pond (al-Hawd) and his banner (Liwa al-Hamd) are uniquely his.",
        "Ibn Kathir, in his sirah and his tafsir, highlights again and again that the perfection of his character is itself the greatest miracle of his prophethood. A man cannot fake mercy, justice, patience, generosity, courage, modesty, leadership, family love, and constant worship of Allah for twenty-three years under the constant pressure of opposition, war, and statecraft — unless he is sent by Allah.",
      ),
      keyFacts: [
        "Born in the Year of the Elephant (~570 CE) in Makkah",
        "Direct descendant of Isma'il (AS), son of Ibrahim (AS)",
        "Orphaned young; raised by his grandfather then his uncle",
        "Married Khadijah (RA), the first believer in his prophethood",
        "Received first revelation at age 40 in the cave of Hira",
        "Made the Hijrah to Madinah in the year 1 AH",
        "Conquered Makkah without bloodshed in 8 AH and forgave his enemies",
        "Final messenger of Allah; passed away in 11 AH at age 63 in Madinah",
      ],
      lessons: p(
        "Character is the heart of the message. Before he received a single verse, he was 'al-Sadiq al-Amin.' If you want your message — religious, professional, personal — to land, build the integrity of your character first.",
        "Mercy under power is the highest mercy. He had absolute power over Quraysh on the day of conquest and chose forgiveness. The next time you have authority over someone who wronged you, remember his 'Go, for you are free.'",
        "Patience under personal harm, firmness when Allah's limits are crossed. He never raised his hand for himself. He was firm only when the rights of Allah and His creation were violated. Imitate this priority of anger.",
        "Bring Allah into every detail of life. The Sunnah covers eating, sleeping, dressing, greeting, travelling. Whatever you do, ask: did the Messenger ﷺ guide us on this? — and follow that guidance with love.",
        "Hold to the two trusts: Qur'an and Sunnah. He told us we will not go astray as long as we hold to them. Stay close to both — through study, recitation, and consistent practice.",
        "The greatest honour for any human being is to be from his Ummah. We did not earn his love; he loved us before we were born. Do not waste this honour. Live a life worthy of being raised under his banner on the Day of Judgement.",
      ),
    },
  },

  // ============================================================
  // SAHABA (50) — based on Siyar A'lam al-Nubala by Imam al-Dhahabi
  // and other classical sources. Split into two modules for maintainability.
  // ============================================================
  ...sahabaPart1,
  ...sahabaPart2,
];

// Lookup helpers
export const getStoriesByCategory = (cat: StoryCategory) =>
  stories.filter((s) => s.category === cat);

export const getStoryById = (id: string) => stories.find((s) => s.id === id);
