// Islamic dates & recurring observances.
// Moon-dependent Gregorian dates are CALCULATED estimates (Umm al-Qura based) —
// always confirm locally via moon sighting.
import { toHijri } from "hijri-converter";

export type EventCategory = "major" | "recommended";

export interface IslamicEvent {
  date: string; // ISO YYYY-MM-DD
  name: string;
  description: string;
  significance: string;
  worship?: string;
  category: EventCategory;
  moonDependent?: boolean;
}

// Major fixed/estimated dates for 2026 (calculated; subject to moon sighting where noted)
export const islamicEvents2026: IslamicEvent[] = [
  {
    date: "2026-01-16",
    name: "Isra wal Mi'raj",
    description: "The Night Journey of the Prophet ﷺ — 27th of Rajab (estimated).",
    significance:
      "Commemorates the miraculous night journey from Makkah to Jerusalem and the ascension through the heavens, during which the five daily prayers were prescribed.",
    worship:
      "There is no specific obligatory worship, but many Muslims increase voluntary prayer, dhikr and reflection on the gift of salah.",
    category: "major",
  },
  {
    date: "2026-02-04",
    name: "Laylat al-Bara'ah",
    description: "Night of Forgiveness — 15th of Sha'ban.",
    significance:
      "A blessed night in which Allah's mercy and forgiveness are widely extended. The Prophet ﷺ is reported to have spent it in worship.",
    worship:
      "Recommended to fast on the 15th of Sha'ban and spend part of the night in prayer, repentance and dua.",
    category: "major",
  },
  {
    date: "2026-02-18",
    name: "Ramadan Begins (estimated)",
    description: "Start of the holy month of fasting — pending moon sighting.",
    significance:
      "The month in which the Quran was revealed. Fasting Ramadan is one of the five pillars of Islam.",
    worship:
      "Obligatory fasting from dawn to sunset, increased Quran recitation, taraweeh prayers, and charity.",
    category: "major",
    moonDependent: true,
  },
  {
    date: "2026-03-15",
    name: "Laylat al-Qadr (estimated)",
    description: "Night of Power — most likely the 27th night of Ramadan.",
    significance:
      "Better than a thousand months. The night the Quran began to be revealed. Sins are forgiven for those who stand in prayer with sincere faith.",
    worship:
      "Sought in the odd nights of the last ten of Ramadan. Spend the night in prayer, Quran, and the dua: Allahumma innaka 'Afuwwun tuhibbul-'afwa fa'fu 'anni.",
    category: "major",
    moonDependent: true,
  },
  {
    date: "2026-03-20",
    name: "Eid al-Fitr (estimated)",
    description: "Festival of Breaking the Fast — pending moon sighting.",
    significance:
      "Celebrates the completion of Ramadan. A day of gratitude, community and gifts.",
    worship:
      "Eid prayer in congregation, Zakat al-Fitr paid before the prayer, and visiting family.",
    category: "major",
    moonDependent: true,
  },
  {
    date: "2026-05-27",
    name: "Day of Arafah",
    description: "9th of Dhul Hijjah — the greatest day of Hajj.",
    significance:
      "On this day Allah perfected the religion. Standing at Arafah is the essence of Hajj. For non-pilgrims, fasting expiates the sins of the previous and coming year.",
    worship:
      "Highly recommended fast for non-pilgrims. Abundant dhikr, especially: La ilaha illa Allah wahdahu la sharika lah.",
    category: "major",
    moonDependent: true,
  },
  {
    date: "2026-05-28",
    name: "Eid al-Adha (estimated)",
    description: "Festival of Sacrifice — 10th of Dhul Hijjah.",
    significance:
      "Commemorates Prophet Ibrahim's willingness to sacrifice his son in obedience to Allah. Marks the culmination of Hajj.",
    worship:
      "Eid prayer in congregation, qurbani (sacrifice) for those able, and takbeer through the days of Tashreeq.",
    category: "major",
    moonDependent: true,
  },
  {
    date: "2026-06-17",
    name: "Islamic New Year (estimated)",
    description: "1 Muharram 1448 AH — pending moon sighting.",
    significance:
      "Marks the Hijrah of the Prophet ﷺ from Makkah to Madinah, the event from which the Islamic calendar begins.",
    worship:
      "No specific worship is prescribed. Muslims often reflect on the lessons of the Hijrah.",
    category: "major",
    moonDependent: true,
  },
  {
    date: "2026-08-25",
    name: "Mawlid an-Nabi (estimated)",
    description: "12th of Rabi' al-Awwal — birth of the Prophet Muhammad ﷺ.",
    significance:
      "A day many Muslims use to remember the life, character and mission of the Prophet ﷺ. Practices vary across communities.",
    worship:
      "Increase salawat upon the Prophet ﷺ and study his seerah.",
    category: "major",
    moonDependent: true,
  },
];

// Recurring Hijri-based recommended observances (computed per-day)
export interface RecurringObservance {
  key: string;
  name: string;
  significance: string;
  worship: string;
}

const REC: Record<string, RecurringObservance> = {
  whiteDays: {
    key: "whiteDays",
    name: "Ayyam al-Beedh — White Days",
    significance:
      "The 13th, 14th and 15th of every Hijri month. Named the 'white days' because the moon is full and bright. The Prophet ﷺ encouraged fasting them.",
    worship:
      "Recommended (sunnah mu'akkadah) to fast all three days. Equivalent in reward to fasting the entire month.",
  },
  mondayThursday: {
    key: "mondayThursday",
    name: "Monday & Thursday Fast",
    significance:
      "The Prophet ﷺ said deeds are presented to Allah on Mondays and Thursdays, and he loved that his deeds be presented while fasting. He was also born on a Monday.",
    worship: "Recommended voluntary fast.",
  },
  shawwal6: {
    key: "shawwal6",
    name: "Six Days of Shawwal",
    significance:
      "The Prophet ﷺ said: 'Whoever fasts Ramadan and follows it with six days of Shawwal, it is as if he fasted the entire year.'",
    worship:
      "Six voluntary fasts any time during Shawwal, after Eid al-Fitr. They may be consecutive or spaced out.",
  },
  dhulHijjah9: {
    key: "dhulHijjah9",
    name: "First Nine Days of Dhul Hijjah",
    significance:
      "Among the most beloved days to Allah. Righteous deeds in them are greater than at any other time of the year.",
    worship:
      "Recommended to fast (especially the 9th — Day of Arafah for non-pilgrims), abundant takbeer, tahmeed and tahleel, charity and good deeds.",
  },
  ashura: {
    key: "ashura",
    name: "Ashura — 10th of Muharram",
    significance:
      "The day Allah saved Musa and the Children of Israel from Pharaoh. The Prophet ﷺ fasted it and encouraged it, recommending also the 9th to differ from the People of the Book.",
    worship:
      "Recommended to fast the 9th and 10th of Muharram. Fasting Ashura expiates the sins of the previous year.",
  },
  tasua: {
    key: "tasua",
    name: "Tasu'a — 9th of Muharram",
    significance:
      "The day before Ashura. The Prophet ﷺ intended to fast it together with the 10th to distinguish the practice from others.",
    worship: "Recommended voluntary fast paired with Ashura.",
  },
  shaban15: {
    key: "shaban15",
    name: "15th of Sha'ban — Laylatul Bara'ah",
    significance:
      "A night of widespread mercy and forgiveness. The Prophet ﷺ is reported to have spent it in worship.",
    worship: "Recommended fast on the day and prayer, dua and repentance at night.",
  },
};

export function getRecurringForHijri(hy: number, hm: number, hd: number): RecurringObservance[] {
  const out: RecurringObservance[] = [];
  // Ashura & Tasu'a (Muharram = 1)
  if (hm === 1 && hd === 9) out.push(REC.tasua);
  if (hm === 1 && hd === 10) out.push(REC.ashura);
  // 15th Sha'ban (8)
  if (hm === 8 && hd === 15) out.push(REC.shaban15);
  // First 9 days of Dhul Hijjah (12)
  if (hm === 12 && hd >= 1 && hd <= 9) out.push(REC.dhulHijjah9);
  // 6 days of Shawwal (10) — days 2..7 after Eid (Eid is the 1st)
  if (hm === 10 && hd >= 2 && hd <= 7) out.push(REC.shawwal6);
  // White days every month (skip Dhul Hijjah 13 — days of Tashreeq, fasting forbidden)
  if (hd === 13 || hd === 14 || hd === 15) {
    if (!(hm === 12 && (hd === 13))) out.push(REC.whiteDays);
  }
  return out;
}

export function getRecurringForGregorian(date: Date): {
  hijri: { hy: number; hm: number; hd: number };
  observances: RecurringObservance[];
  isFastingWeekday: boolean;
} {
  const h = toHijri(date.getFullYear(), date.getMonth() + 1, date.getDate());
  const observances = getRecurringForHijri(h.hy, h.hm, h.hd);
  const dow = date.getDay(); // 1=Mon, 4=Thu
  const isFastingWeekday = dow === 1 || dow === 4;
  return { hijri: h, observances, isFastingWeekday };
}

export const MONDAY_THURSDAY_INFO = REC.mondayThursday;

export function getEventsForMonth(year: number, month: number): IslamicEvent[] {
  return islamicEvents2026.filter((e) => {
    const d = new Date(e.date);
    return d.getFullYear() === year && d.getMonth() === month;
  });
}

export function getEventForDate(year: number, month: number, day: number): IslamicEvent | undefined {
  const target = `${year}-${String(month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
  return islamicEvents2026.find((e) => e.date === target);
}
