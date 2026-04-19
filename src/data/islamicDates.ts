// Important Islamic dates for the current Gregorian year (approximate, based on Umm al-Qura)
export interface IslamicEvent {
  date: string; // ISO YYYY-MM-DD
  name: string;
  description: string;
}

export const islamicEvents2026: IslamicEvent[] = [
  { date: "2026-01-16", name: "Isra wal Mi'raj", description: "The Night Journey of the Prophet ﷺ" },
  { date: "2026-02-04", name: "Laylat al-Bara'ah", description: "Night of Forgiveness — 15th of Sha'ban" },
  { date: "2026-02-18", name: "Ramadan Begins", description: "Start of the holy month of fasting" },
  { date: "2026-03-15", name: "Laylat al-Qadr", description: "Night of Power (estimated 27th Ramadan)" },
  { date: "2026-03-20", name: "Eid al-Fitr", description: "Festival of Breaking the Fast" },
  { date: "2026-05-27", name: "Day of Arafah", description: "Most blessed day of Hajj" },
  { date: "2026-05-28", name: "Eid al-Adha", description: "Festival of Sacrifice" },
  { date: "2026-06-17", name: "Islamic New Year", description: "1 Muharram 1448 AH" },
  { date: "2026-06-26", name: "Day of Ashura", description: "10th of Muharram — recommended fast" },
  { date: "2026-08-25", name: "Mawlid an-Nabi", description: "Birth of the Prophet Muhammad ﷺ" },
];

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
