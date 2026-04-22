import type { Story } from "./stories";

const p = (...paragraphs: string[]) => paragraphs;

// Muslim Scientists and Explorers of the Golden Age and beyond.
// Sources: classical biographical works (Ibn al-Nadim's Fihrist, al-Qifti's Tarikh al-Hukama),
// modern histories of science (Sezgin, Saliba, Lyons, Morgan).
export const scientistsExplorersStories: Story[] = [
  {
    id: "sci-al-khwarizmi",
    title: "Al-Khwarizmi — The Father of Algebra",
    description:
      "The Persian Muslim mathematician of Baghdad's House of Wisdom whose book gave us the word 'algebra' and whose name became the word 'algorithm'.",
    category: "ScientistsExplorers",
    readTime: "7 min",
    sections: {
      intro: p(
        "Muhammad ibn Musa al-Khwarizmi was born around 780 CE, probably in Khwarazm (modern Uzbekistan), and lived most of his working life in Baghdad. He served at the Bayt al-Hikma (House of Wisdom) under the Abbasid caliph al-Ma'mun, the great patron of the translation movement.",
        "He was a believer who saw mathematics as a service to the ummah — solving problems of inheritance (a deeply complex Shari'ah field), trade, surveying, and astronomy for prayer and calendar.",
      ),
      life: p(
        "His book al-Kitab al-Mukhtasar fi Hisab al-Jabr wa'l-Muqabala (The Compendium on Calculation by Restoration and Balancing) gave us the discipline now called algebra — from the Arabic word al-jabr in the title. It was the first book to treat algebra as a self-standing science with its own systematic methods, separate from arithmetic and geometry.",
        "He explicitly motivated the work by Islamic needs: 'I have composed this short book on calculation by completion and balance, confining it to what is easiest and most useful in arithmetic, such as men constantly require in cases of inheritance, legacies, partition, lawsuits and trade, and in all their dealings with one another.'",
        "His other major work, on Indian numerals, introduced the decimal positional number system and the use of zero to the Muslim world and through Latin translation to Europe. His name in Latin — Algoritmi — became the word 'algorithm'.",
        "He produced one of the earliest world maps in the Muslim tradition, refined Ptolemy's geography by correcting hundreds of coordinates, and contributed to astronomy with revised tables (zij) used across the empire to determine prayer times and the qibla.",
      ),
      legacy: p(
        "Al-Khwarizmi is the single individual most responsible for the existence of modern algebra and algorithmic thinking. Every line of code, every spreadsheet formula, every solved equation in a school exercise traces a thread back to his Baghdad workshop.",
        "His decimal system, transmitted via Latin translations of his work in twelfth-century Spain, eventually displaced Roman numerals across Europe and unlocked the scientific revolution.",
        "He showed that high science can be motivated by service to faith — that calculating zakat shares and inheritance fairly was reason enough to invent a new branch of mathematics.",
      ),
      keyFacts: [
        "Born c. 780 CE in Khwarazm; died c. 850 CE in Baghdad",
        "Worked at the Bayt al-Hikma under Caliph al-Ma'mun",
        "Author of al-Jabr — the founding text of algebra",
        "Introduced Hindu-Arabic decimal system to the Muslim world",
        "His Latinised name 'Algoritmi' gave us the word 'algorithm'",
      ],
      lessons: [
        "Service to the deen can give birth to whole new sciences",
        "A clear book on a hard subject can change the world",
        "Borrow from any culture — but make the synthesis your own",
        "Mathematics is a form of fairness, especially in inheritance",
        "Some legacies are so deep they become the words we speak",
      ],
    },
  },
  {
    id: "sci-ibn-al-haytham",
    title: "Ibn al-Haytham — The Father of Optics and the Scientific Method",
    description:
      "The Basran scholar who, to escape the Fatimid caliph's wrath, feigned madness and used his decade of house arrest in Cairo to write the Book of Optics and lay the foundations of experimental science.",
    category: "ScientistsExplorers",
    readTime: "9 min",
    sections: {
      intro: p(
        "Abu 'Ali al-Hasan ibn al-Hasan ibn al-Haytham was born in Basra in 354 AH (965 CE). Trained in Islamic sciences and mathematics, he became a respected scholar in his city.",
        "Word of his brilliance reached the Fatimid caliph al-Hakim in Egypt, who summoned him to Cairo with a grand promise: that Ibn al-Haytham could regulate the floods of the Nile. Ibn al-Haytham, after surveying southward toward Aswan, realised the engineering was impossible with the means available.",
      ),
      life: p(
        "Knowing al-Hakim's reputation for executing those who failed him, Ibn al-Haytham feigned insanity. The caliph confined him to a single house under guard. For about a decade, until al-Hakim's death in 411 AH (1021 CE), he lived under house arrest in Cairo.",
        "Those years became the most productive of his life. He wrote his masterwork Kitab al-Manazir (The Book of Optics) in seven volumes, demolishing the prevailing Greek emission theory of vision (that the eye sends out rays) and establishing the correct intromission theory (that light reflects off objects and enters the eye).",
        "He performed careful experiments with the camera obscura — the dark room with a pinhole — proving that light travels in straight lines, studying refraction, reflection, lenses and the rainbow. His commitment to controlled, repeatable experiment as the standard of scientific truth is, by the consensus of historians of science, the earliest articulation of the modern scientific method.",
        "He famously wrote: 'The seeker after truth is not one who studies the writings of the ancients and, following his natural disposition, puts his trust in them, but rather the one who suspects his faith in them and questions what he gathers from them, the one who submits to argument and demonstration.'",
        "Beyond optics, he wrote on geometry, number theory, astronomy, and mechanics — over 200 titles, of which dozens survive. He attempted a proof of the parallel postulate that anticipated 19th century non-Euclidean geometry.",
        "After al-Hakim's death he was free. He continued teaching and writing in Cairo until his death around 430 AH (1040 CE).",
      ),
      legacy: p(
        "The Book of Optics, translated into Latin in the 12th century as De Aspectibus, was the standard text on optics in Europe for 600 years. Roger Bacon, Witelo, Kepler and Descartes built directly on it.",
        "More fundamentally, Ibn al-Haytham's insistence on experiment, doubt and demonstration as the test of truth makes him a reasonable claimant to the title 'father of the scientific method' — centuries before Bacon and Galileo.",
        "His life is also a lesson in turning prison into a workshop. A decade locked in a single room, in fear of execution, produced the book that changed how humanity understood seeing itself.",
      ),
      keyFacts: [
        "Born 354 AH (965 CE) in Basra; died c. 430 AH (1040 CE) in Cairo",
        "Author of Kitab al-Manazir — the founding text of optics",
        "Pioneer of the experimental method in science",
        "Worked under house arrest for c. 10 years under Caliph al-Hakim",
        "Influenced Bacon, Witelo, Kepler and Descartes",
      ],
      lessons: [
        "Doubt the ancients with respect, but verify with experiment",
        "Confinement of the body can be liberation of the mind",
        "Truth is not what we are told — it is what is shown",
        "Wisdom sometimes means refusing impossible projects, even from caliphs",
        "Service to knowledge is service to all humanity, Muslim and otherwise",
      ],
    },
  },
  {
    id: "sci-al-zahrawi",
    title: "Al-Zahrawi — The Father of Surgery",
    description:
      "The Andalusian Muslim physician of Cordoba whose 30-volume medical encyclopaedia included the world's first illustrated catalogue of surgical instruments.",
    category: "ScientistsExplorers",
    readTime: "7 min",
    sections: {
      intro: p(
        "Abu al-Qasim Khalaf ibn al-'Abbas al-Zahrawi was born around 936 CE in al-Zahra, a princely city outside Cordoba in Muslim Andalusia. He served the Umayyad caliph of Cordoba al-Hakam II as court physician.",
        "His Latinised name 'Albucasis' would later be uttered with awe in the medical schools of Salerno, Bologna and Paris for the next five hundred years.",
      ),
      life: p(
        "After fifty years of medical practice he composed his masterwork: Kitab al-Tasrif li-Man 'Ajiza 'an al-Ta'lif (The Method of Medicine for Him Who Cannot Compile a Book on His Own) — a thirty-volume medical encyclopaedia covering every branch of medicine known in his day.",
        "Volume 30, on surgery, was unprecedented. It described and illustrated around 200 surgical instruments — many of his own invention — including the syringe, the surgical hook, retractors, the bone saw, and obstetric forceps. It described surgical procedures with such clarity that a competent practitioner could perform them from the book alone.",
        "He pioneered or refined: the use of catgut for internal sutures (still standard today), the lithotomy for bladder stones, tracheotomy, hernia repair, treatment of hydrocephalus in infants, cataract surgery, dental procedures including reattachment of dislocated teeth with gold wire.",
        "He wrote extensively on the dignity and moral responsibility of the physician. He insisted that the doctor build a personal relationship with the patient, never rush a diagnosis, never inflate fees, and never abandon a patient even if the case appeared hopeless. He warned strongly against quackery.",
        "He died around 1013 CE, having lived through the brutal civil war that ended the Cordoban caliphate.",
      ),
      legacy: p(
        "Al-Tasrif was translated into Latin as Liber Servitoris in the 12th century and became the standard surgical reference in European medical schools for 500 years. Surgeons in Europe quoted Albucasis as the supreme authority well into the Renaissance.",
        "His instruments became the basis of European surgical instrumentation. His ethical teachings on the doctor-patient relationship anticipated much of modern medical ethics.",
        "He is the proof that Muslim Andalusia at its height produced not only philosophers and poets, but practical scientists whose discoveries directly saved lives across the Mediterranean and beyond.",
      ),
      keyFacts: [
        "Born c. 936 CE in al-Zahra (Cordoba); died c. 1013 CE",
        "Court physician to Caliph al-Hakam II of Cordoba",
        "Author of al-Tasrif — 30-volume medical encyclopaedia",
        "Designed and illustrated c. 200 surgical instruments",
        "Pioneered catgut sutures, obstetric forceps, lithotomy",
      ],
      lessons: [
        "Document your craft so the next generation can stand on your shoulders",
        "Innovation in tools is innovation in lives saved",
        "Medicine is an act of trust before it is an act of skill",
        "Never abandon the desperate patient",
        "Practical service to humanity is a form of 'ibadah",
      ],
    },
  },
  {
    id: "sci-ibn-sina",
    title: "Ibn Sina — The Prince of Physicians",
    description:
      "The Persian polymath who memorised the Qur'an at ten, mastered Aristotle by sixteen, and wrote the medical canon that taught Europe medicine for six centuries.",
    category: "ScientistsExplorers",
    readTime: "8 min",
    sections: {
      intro: p(
        "Abu 'Ali al-Husayn ibn 'Abd Allah ibn Sina was born in Afshana, near Bukhara, in 370 AH (980 CE). His father was a Samanid official who arranged the finest tutors for his son in Bukhara.",
        "By ten he had memorised the Qur'an and most of classical Arabic literature. By thirteen he was studying medicine and, he tells us, found it 'easy compared to mathematics or metaphysics'. By sixteen he was treating patients. By eighteen, after wrestling for years with Aristotle's Metaphysics until he came across al-Farabi's commentary, he had absorbed the philosophy of his age.",
      ),
      life: p(
        "His big break came when he cured the Samanid Sultan Nuh ibn Mansur of an illness no other physician could treat. As reward he asked for permission to use the royal library in Bukhara — a library so vast he said he had never seen its like before or after. He spent months there, reading himself empty.",
        "He served as physician and adviser to a succession of Persian princes amid the political chaos of the late Samanid and Buyid era. He spent stretches in prison, in flight, in disguise — yet through all of it he wrote.",
        "His al-Qanun fi'l-Tibb (The Canon of Medicine) is a five-volume systematic encyclopaedia of medicine that organised Greek, Indian, Persian and Arab medical knowledge into one coherent whole. It described contagious disease, distinguished mediastinitis from pleurisy, accurately described meningitis, recognised the contagious nature of tuberculosis, and laid out a careful methodology for clinical drug testing that anticipated principles of modern clinical trials.",
        "His al-Shifa' (The Healing) is a vast philosophical encyclopaedia covering logic, natural science, mathematics and metaphysics. His arguments for the necessity of a Necessary Existent (Wajib al-Wujud) shaped Islamic theology profoundly.",
        "He died in Hamadan in 428 AH (1037 CE), aged 57. He had reportedly distributed his wealth to the poor, freed his slaves, and was reciting the Qur'an as he died.",
      ),
      legacy: p(
        "The Canon of Medicine, translated into Latin as Canon Medicinae in the 12th century, was the standard medical textbook in European universities until the late 1600s — six centuries.",
        "His philosophical project provoked the great response of al-Ghazali (Tahafut al-Falasifa) and through that interaction shaped Sunni theology for the rest of the medieval period.",
        "He embodies the Islamic civilisational ideal that the same mind that masters the Qur'an should also master the body, the cosmos and the laws of reason — and use all of it in the service of others.",
      ),
      keyFacts: [
        "Born 370 AH (980 CE) near Bukhara; died 428 AH (1037 CE) in Hamadan",
        "Memorised the Qur'an by 10; treating patients by 16",
        "Author of al-Qanun fi'l-Tibb (Canon of Medicine)",
        "Author of al-Shifa' — encyclopaedic philosophical work",
        "His Canon was the standard European medical text for c. 600 years",
      ],
      lessons: [
        "Begin with the Qur'an, then add every science you can master",
        "Read difficult books many times — clarity comes with persistence",
        "Knowledge proven on the patient outweighs knowledge proven only on paper",
        "Use political access for libraries, not for pomp",
        "Die with the Qur'an on your tongue and your wealth in others' hands",
      ],
    },
  },
  {
    id: "sci-ibn-battuta",
    title: "Ibn Battuta — The Greatest Traveller of the Pre-Modern World",
    description:
      "The young qadi from Tangier who set out for hajj at 21 and did not return for 29 years, covering 75,000 miles across the Muslim world from Morocco to China.",
    category: "ScientistsExplorers",
    readTime: "8 min",
    sections: {
      intro: p(
        "Muhammad ibn 'Abd Allah ibn Battuta was born in Tangier in 703 AH (1304 CE) into a family of Maliki qadis. He received the standard Islamic education of his class — Qur'an, Maliki fiqh, Arabic.",
        "In 725 AH (1325 CE), aged 21, he set out from Tangier alone, with no companion and no caravan, intending to perform hajj. He would not see Morocco again for almost three decades.",
      ),
      life: p(
        "He travelled along the North African coast to Egypt, ascended the Nile, crossed the Red Sea to Mecca, performed hajj — and discovered he could not bear to go home. He travelled to Iraq, Iran, the Arabian Peninsula, East Africa as far south as Kilwa, the Black Sea coast, Constantinople (he met the Byzantine emperor), the steppes of Central Asia, Afghanistan, India.",
        "In India he served Sultan Muhammad ibn Tughlaq of Delhi for almost a decade as a Maliki qadi. He was sent as ambassador to the Mongol Yuan emperor in China and crossed the Indian Ocean — he visited the Maldives (where he was again appointed qadi and married into the royal family), Sri Lanka (where he climbed Adam's Peak), Sumatra, and reached Quanzhou and Beijing.",
        "He returned home via the Levant, where he saw the Black Death sweeping the Muslim world (he himself escaped it). After reaching Tangier in 1349, he made one more journey to Muslim Spain, then a final great journey across the Sahara to the Mali Empire, where he visited Timbuktu and the court of Mansa Sulayman.",
        "On his final return to Morocco in 754 AH (1354 CE), the Marinid Sultan Abu 'Inan Faris ordered his memoirs to be dictated and recorded. The young scholar Ibn Juzayy edited them. The result, Tuhfat al-Nuzzar fi Ghara'ib al-Amsar wa 'Aja'ib al-Asfar — known simply as the Rihla — preserved an irreplaceable eyewitness picture of the 14th-century Muslim world.",
        "He spent his final years as a qadi in a small town in Morocco and died around 770 AH (1369 CE).",
      ),
      legacy: p(
        "Ibn Battuta covered approximately 75,000 miles overland and oversea — three times more than Marco Polo. He travelled almost entirely within the Dar al-Islam, a vast civilisational continuum stretching from the Atlantic to the Pacific.",
        "His Rihla is one of the most important sources for the social, religious and economic history of the 14th-century Muslim world. We know about Muslim communities in China, the structure of justice in Mali, Sufi networks in Anatolia, scholars in Damascus, sultans in the Maldives — partly because one Moroccan qadi could not stop walking.",
        "He proved the practical reality of the ummah as a single civilisation: that a young man from the western edge of the Muslim world could, with no introduction, find food, lodging, learning, marriage, employment and respect at the eastern edge — all by virtue of being a Muslim and a faqih.",
      ),
      keyFacts: [
        "Born 703 AH (1304 CE) in Tangier; died c. 770 AH (1369 CE)",
        "Set out alone at 21; travelled for almost 30 years",
        "Covered c. 75,000 miles across the Muslim world",
        "Served as qadi in India and the Maldives",
        "Author of the Rihla — an eyewitness chronicle of the 14th-century ummah",
      ],
      lessons: [
        "Curiosity about Allah's creation is a noble form of worship",
        "The ummah is one civilisation — see it with your own eyes",
        "Knowledge of fiqh is a passport in any Muslim land",
        "Begin a great journey alone if you must — Allah supplies companions",
        "Write down what you have seen — the next generation depends on it",
      ],
    },
  },
];
