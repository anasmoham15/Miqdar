export interface PrayerTime {
  name: string;
  arabic: string;
  time: string; // "HH:MM"
}

export interface PrayerTimesResponse {
  city?: string;
  country?: string;
  times: PrayerTime[];
}

interface AladhanResponse {
  data: {
    timings: Record<string, string>;
    meta: { timezone: string };
  };
}

const PRAYER_KEYS: { key: string; name: string; arabic: string }[] = [
  { key: "Fajr", name: "Fajr", arabic: "الفجر" },
  { key: "Dhuhr", name: "Dhuhr", arabic: "الظهر" },
  { key: "Asr", name: "Asr", arabic: "العصر" },
  { key: "Maghrib", name: "Maghrib", arabic: "المغرب" },
  { key: "Isha", name: "Isha", arabic: "العشاء" },
];

export async function fetchPrayerTimes(lat: number, lng: number): Promise<PrayerTimesResponse> {
  const today = new Date();
  const dd = String(today.getDate()).padStart(2, "0");
  const mm = String(today.getMonth() + 1).padStart(2, "0");
  const yyyy = today.getFullYear();
  const url = `https://api.aladhan.com/v1/timings/${dd}-${mm}-${yyyy}?latitude=${lat}&longitude=${lng}&method=2`;
  const res = await fetch(url);
  if (!res.ok) throw new Error("Failed to fetch prayer times");
  const json: AladhanResponse = await res.json();
  return {
    times: PRAYER_KEYS.map((p) => ({
      name: p.name,
      arabic: p.arabic,
      time: (json.data.timings[p.key] || "").slice(0, 5),
    })),
  };
}

export function getCurrentLocation(): Promise<{ lat: number; lng: number }> {
  return new Promise((resolve, reject) => {
    if (!("geolocation" in navigator)) {
      reject(new Error("Geolocation unavailable"));
      return;
    }
    navigator.geolocation.getCurrentPosition(
      (pos) => resolve({ lat: pos.coords.latitude, lng: pos.coords.longitude }),
      (err) => reject(err),
      { timeout: 8000, maximumAge: 60 * 60 * 1000 }
    );
  });
}

// Default fallback: Makkah
export const DEFAULT_LOCATION = { lat: 21.4225, lng: 39.8262, label: "Makkah" };

export interface SavedLocation {
  lat: number;
  lng: number;
  label: string;
}

const LOCATION_KEY = "miqdar-location";

export function getSavedLocation(): SavedLocation | null {
  try {
    const raw = localStorage.getItem(LOCATION_KEY);
    return raw ? (JSON.parse(raw) as SavedLocation) : null;
  } catch {
    return null;
  }
}

export function saveLocation(loc: SavedLocation): void {
  localStorage.setItem(LOCATION_KEY, JSON.stringify(loc));
}

export function clearSavedLocation(): void {
  localStorage.removeItem(LOCATION_KEY);
}

export interface GeoResult {
  name: string;
  country?: string;
  admin1?: string;
  latitude: number;
  longitude: number;
}

export async function searchCities(query: string): Promise<GeoResult[]> {
  if (!query.trim()) return [];
  const url = `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(
    query
  )}&count=8&language=en&format=json`;
  const res = await fetch(url);
  if (!res.ok) return [];
  const json = await res.json();
  return (json.results || []) as GeoResult[];
}

export function formatTime12(hhmm: string): string {
  if (!hhmm || !hhmm.includes(":")) return hhmm;
  const [h, m] = hhmm.split(":").map(Number);
  const period = h >= 12 ? "PM" : "AM";
  const hour12 = ((h + 11) % 12) + 1;
  return `${hour12}:${String(m).padStart(2, "0")} ${period}`;
}
