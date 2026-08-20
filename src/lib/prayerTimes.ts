export interface PrayerTime {
  name: string;
  arabic: string;
  time: string; // "HH:MM"
}

export interface PrayerTimesResponse {
  city?: string;
  country?: string;
  times: PrayerTime[];
  sunrise?: string;
  timezone?: string;
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

/** Aladhan calculation methods — the main driver of accuracy per region. */
export const CALC_METHODS: { id: number; label: string }[] = [
  { id: 3, label: "Muslim World League" },
  { id: 2, label: "ISNA (North America)" },
  { id: 5, label: "Egyptian General Authority" },
  { id: 4, label: "Umm al-Qura (Makkah)" },
  { id: 1, label: "University of Karachi" },
  { id: 8, label: "Gulf Region" },
  { id: 9, label: "Kuwait" },
  { id: 10, label: "Qatar" },
  { id: 11, label: "Singapore" },
  { id: 12, label: "UOIF (France)" },
  { id: 13, label: "Diyanet (Turkey)" },
  { id: 14, label: "Spiritual Admin. of Russia" },
  { id: 15, label: "Moonsighting Committee" },
  { id: 16, label: "Dubai" },
  { id: 7, label: "Institute of Geophysics, Tehran" },
];

export interface PrayerSettings {
  /** Aladhan method id */
  method: number;
  /** 0 = Shafi'i/Maliki/Hanbali (standard), 1 = Hanafi (later Asr) */
  school: 0 | 1;
  /** High-latitude rule: 1 = middle of night, 2 = one seventh, 3 = angle-based */
  latitudeAdjustmentMethod: 1 | 2 | 3;
  /** Manual minute offsets per prayer, to match the local masjid exactly */
  tune: { fajr: number; dhuhr: number; asr: number; maghrib: number; isha: number };
}

export const DEFAULT_SETTINGS: PrayerSettings = {
  method: 3,
  school: 0,
  latitudeAdjustmentMethod: 3,
  tune: { fajr: 0, dhuhr: 0, asr: 0, maghrib: 0, isha: 0 },
};

const SETTINGS_KEY = "miqdar-prayer-settings";

export function getSettings(): PrayerSettings {
  try {
    const raw = localStorage.getItem(SETTINGS_KEY);
    if (!raw) return DEFAULT_SETTINGS;
    const parsed = JSON.parse(raw) as Partial<PrayerSettings>;
    return {
      ...DEFAULT_SETTINGS,
      ...parsed,
      tune: { ...DEFAULT_SETTINGS.tune, ...(parsed.tune || {}) },
    };
  } catch {
    return DEFAULT_SETTINGS;
  }
}

export function saveSettings(s: PrayerSettings): void {
  localStorage.setItem(SETTINGS_KEY, JSON.stringify(s));
}

function deviceTimezone(): string {
  try {
    return Intl.DateTimeFormat().resolvedOptions().timeZone || "UTC";
  } catch {
    return "UTC";
  }
}

export async function fetchPrayerTimes(
  lat: number,
  lng: number,
  settings: PrayerSettings = getSettings()
): Promise<PrayerTimesResponse> {
  const today = new Date();
  const dd = String(today.getDate()).padStart(2, "0");
  const mm = String(today.getMonth() + 1).padStart(2, "0");
  const yyyy = today.getFullYear();
  const t = settings.tune;
  // tune order: Imsak,Fajr,Sunrise,Dhuhr,Asr,Maghrib,Sunset,Isha,Midnight
  const tune = `0,${t.fajr},0,${t.dhuhr},${t.asr},${t.maghrib},0,${t.isha},0`;
  const params = new URLSearchParams({
    // full precision coordinates matter — no rounding
    latitude: String(lat),
    longitude: String(lng),
    method: String(settings.method),
    school: String(settings.school),
    latitudeAdjustmentMethod: String(settings.latitudeAdjustmentMethod),
    midnightMode: "0",
    timezonestring: deviceTimezone(),
    tune,
  });
  const url = `https://api.aladhan.com/v1/timings/${dd}-${mm}-${yyyy}?${params.toString()}`;
  const res = await fetch(url);
  if (!res.ok) throw new Error("Failed to fetch prayer times");
  const json: AladhanResponse = await res.json();
  const clean = (v?: string) => (v || "").trim().slice(0, 5);
  return {
    timezone: json.data.meta?.timezone,
    sunrise: clean(json.data.timings.Sunrise),
    times: PRAYER_KEYS.map((p) => ({
      name: p.name,
      arabic: p.arabic,
      time: clean(json.data.timings[p.key]),
    })),
  };
}

export function getCurrentLocation(): Promise<{ lat: number; lng: number; accuracy?: number }> {
  return new Promise((resolve, reject) => {
    if (!("geolocation" in navigator)) {
      reject(new Error("Geolocation unavailable"));
      return;
    }
    navigator.geolocation.getCurrentPosition(
      (pos) =>
        resolve({
          lat: pos.coords.latitude,
          lng: pos.coords.longitude,
          accuracy: pos.coords.accuracy,
        }),
      (err) => reject(err),
      // request the precise GPS fix rather than a cached, coarse IP/wifi guess
      { enableHighAccuracy: true, timeout: 15000, maximumAge: 0 }
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
