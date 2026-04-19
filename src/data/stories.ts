export interface Story {
  id: string;
  title: string;
  description: string;
  category: string;
  readTime: string;
}

export const stories: Story[] = [
  { id: "1", title: "Prophet Yusuf and His Brothers", description: "A timeless tale of betrayal, patience, and divine forgiveness — the journey of a beloved son from the well to the throne of Egypt.", category: "Prophets", readTime: "8 min" },
  { id: "2", title: "The Companions of the Cave", description: "Young believers who fled persecution and slept for three centuries — Allah preserved their faith through the ages.", category: "Quranic", readTime: "5 min" },
  { id: "3", title: "Prophet Musa and the Pharaoh", description: "From the Nile to the parting of the Red Sea — the story of liberation, miracles, and unwavering trust in Allah.", category: "Prophets", readTime: "10 min" },
  { id: "4", title: "Bilal: The First Muezzin", description: "From slavery to standing atop the Ka'bah — the man whose voice called the world to prayer.", category: "Companions", readTime: "6 min" },
  { id: "5", title: "Khadijah: The Mother of Believers", description: "The first to believe, the strongest support — the noble lady who stood beside the Prophet ﷺ when no one else would.", category: "Companions", readTime: "7 min" },
  { id: "6", title: "The Year of the Elephant", description: "How Allah destroyed Abraha's army with tiny birds and protected the sacred Ka'bah.", category: "History", readTime: "4 min" },
  { id: "7", title: "Prophet Ibrahim and the Fire", description: "A father, a faith, and a fire that became cool — the story of submission and the building of the Ka'bah.", category: "Prophets", readTime: "7 min" },
  { id: "8", title: "The Night Journey: Al-Isra wal-Mi'raj", description: "The Prophet ﷺ travels from Makkah to Jerusalem and ascends through the heavens in a single night.", category: "Sirah", readTime: "9 min" },
  { id: "9", title: "Maryam: The Chosen Woman", description: "The miraculous birth of 'Isa and the unwavering devotion of the woman honored above all others.", category: "Quranic", readTime: "6 min" },
  { id: "10", title: "Umar ibn al-Khattab's Conversion", description: "The fierce enemy who became the second Caliph — a single Surah changed the course of history.", category: "Companions", readTime: "5 min" },
];
