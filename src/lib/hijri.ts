import { toHijri } from "hijri-converter";

const HIJRI_MONTHS = [
  "Muharram", "Safar", "Rabi' al-Awwal", "Rabi' ath-Thani",
  "Jumada al-Ula", "Jumada ath-Thaniyah", "Rajab", "Sha'ban",
  "Ramadan", "Shawwal", "Dhu al-Qi'dah", "Dhu al-Hijjah",
];

export function getHijriDate(date: Date = new Date()): string {
  const h = toHijri(date.getFullYear(), date.getMonth() + 1, date.getDate());
  return `${h.hd} ${HIJRI_MONTHS[h.hm - 1]} ${h.hy} AH`;
}

export function getGregorianDate(date: Date = new Date()): string {
  return date.toLocaleDateString("en-US", {
    weekday: "long", year: "numeric", month: "long", day: "numeric",
  });
}
