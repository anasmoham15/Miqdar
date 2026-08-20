import { useEffect, useState } from "react";
import { MapPin, Loader2, Check, Search, X, LocateFixed } from "lucide-react";
import {
  fetchPrayerTimes,
  getCurrentLocation,
  formatTime12,
  DEFAULT_LOCATION,
  getSavedLocation,
  saveLocation,
  searchCities,
  getSettings,
  saveSettings,
  CALC_METHODS,
  type PrayerSettings,
  type PrayerTime,
  type SavedLocation,
  type GeoResult,
} from "@/lib/prayerTimes";
import { getHijriDate, getGregorianDate } from "@/lib/hijri";
import { cn } from "@/lib/utils";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const STORAGE_KEY = `miqdar-prayers-${new Date().toISOString().slice(0, 10)}`;

const Home = () => {
  const [times, setTimes] = useState<PrayerTime[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [location, setLocation] = useState<SavedLocation | null>(null);
  const [settings, setSettings] = useState<PrayerSettings>(() => getSettings());
  const [completed, setCompleted] = useState<Record<string, boolean>>(() => {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}");
    } catch {
      return {};
    }
  });

  // Picker state
  const [pickerOpen, setPickerOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<GeoResult[]>([]);
  const [searching, setSearching] = useState(false);
  const [usingGps, setUsingGps] = useState(false);

  const loadFor = async (loc: SavedLocation, s: PrayerSettings = settings) => {
    setLoading(true);
    try {
      const data = await fetchPrayerTimes(loc.lat, loc.lng, s);
      setTimes(data.times);
    } catch {
      /* ignore */
    } finally {
      setLoading(false);
    }
  };

  const updateSettings = (patch: Partial<PrayerSettings>) => {
    const next = { ...settings, ...patch };
    setSettings(next);
    saveSettings(next);
    if (location) loadFor(location, next);
  };


  // Initial load
  useEffect(() => {
    const saved = getSavedLocation();
    if (saved) {
      setLocation(saved);
      loadFor(saved);
      return;
    }
    let cancelled = false;
    (async () => {
      setLoading(true);
      try {
        const coords = await getCurrentLocation();
        if (cancelled) return;
        const loc: SavedLocation = { ...coords, label: "Your location" };
        setLocation(loc);
        await loadFor(loc);
      } catch {
        const loc: SavedLocation = {
          lat: DEFAULT_LOCATION.lat,
          lng: DEFAULT_LOCATION.lng,
          label: DEFAULT_LOCATION.label,
        };
        if (!cancelled) {
          setLocation(loc);
          await loadFor(loc);
        }
      }
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  // Debounced search
  useEffect(() => {
    if (!pickerOpen) return;
    if (!query.trim()) {
      setResults([]);
      return;
    }
    setSearching(true);
    const t = setTimeout(async () => {
      const r = await searchCities(query);
      setResults(r);
      setSearching(false);
    }, 300);
    return () => clearTimeout(t);
  }, [query, pickerOpen]);

  const pickCity = (r: GeoResult) => {
    const label = [r.name, r.admin1, r.country].filter(Boolean).join(", ");
    const loc: SavedLocation = { lat: r.latitude, lng: r.longitude, label };
    saveLocation(loc);
    setLocation(loc);
    setPickerOpen(false);
    setQuery("");
    setResults([]);
    loadFor(loc);
  };

  const useGps = async () => {
    setUsingGps(true);
    try {
      const coords = await getCurrentLocation();
      const loc: SavedLocation = { ...coords, label: "Your location" };
      saveLocation(loc);
      setLocation(loc);
      setPickerOpen(false);
      await loadFor(loc);
    } catch {
      /* ignore */
    } finally {
      setUsingGps(false);
    }
  };

  const toggle = (name: string) => {
    setCompleted((prev) => {
      const next = { ...prev, [name]: !prev[name] };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
      return next;
    });
  };

  const completedCount = Object.values(completed).filter(Boolean).length;

  return (
    <div className="animate-fade-in">
      {/* Hero date card */}
      <section className="relative overflow-hidden bg-gradient-hero arabic-pattern px-5 pb-8 pt-12">
        <div className="relative z-10">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-primary">
            Miqdar
          </p>
          <h1 className="mt-3 font-display text-4xl font-semibold leading-tight">
            Assalamu Alaikum
          </h1>
          <p className="mt-1 text-sm text-muted-foreground">
            {getGregorianDate()}
          </p>

          <div className="mt-6 flex items-center justify-between rounded-2xl border border-primary/20 bg-card/60 px-4 py-3 backdrop-blur">
            <div>
              <p className="text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
                Hijri
              </p>
              <p className="mt-0.5 font-display text-base font-semibold text-foreground">
                {getHijriDate()}
              </p>
            </div>
            <span className="font-arabic text-3xl text-primary">ﷲ</span>
          </div>
        </div>
      </section>

      {/* Prayer times */}
      <section className="px-5 pt-6">
        <div className="mb-3 flex items-center justify-between">
          <h2 className="font-display text-xl font-semibold">Today's Prayers</h2>
          <Dialog open={pickerOpen} onOpenChange={setPickerOpen}>
            <DialogTrigger asChild>
              <button className="flex items-center gap-1.5 rounded-full border border-border bg-card px-2.5 py-1 text-xs text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary">
                <MapPin className="h-3 w-3" />
                <span className="max-w-[140px] truncate">
                  {location?.label || "Set location"}
                </span>
              </button>
            </DialogTrigger>
            <DialogContent className="max-w-sm">
              <DialogHeader>
                <DialogTitle>Choose your location</DialogTitle>
              </DialogHeader>

              <Button
                variant="outline"
                className="w-full justify-start"
                onClick={useGps}
                disabled={usingGps}
              >
                {usingGps ? (
                  <Loader2 className="h-4 w-4 animate-spin" />
                ) : (
                  <LocateFixed className="h-4 w-4" />
                )}
                Use current location
              </Button>

              <div className="relative">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  autoFocus
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search city..."
                  className="pl-9 pr-9"
                />
                {query && (
                  <button
                    onClick={() => setQuery("")}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                    aria-label="Clear"
                  >
                    <X className="h-4 w-4" />
                  </button>
                )}
              </div>

              <div className="max-h-72 overflow-y-auto">
                {searching ? (
                  <div className="flex justify-center py-6">
                    <Loader2 className="h-5 w-5 animate-spin text-primary" />
                  </div>
                ) : results.length > 0 ? (
                  <ul className="space-y-1">
                    {results.map((r, i) => (
                      <li key={`${r.latitude}-${r.longitude}-${i}`}>
                        <button
                          onClick={() => pickCity(r)}
                          className="flex w-full flex-col items-start rounded-lg border border-border bg-card px-3 py-2 text-left text-sm transition-colors hover:border-primary/40 hover:bg-accent"
                        >
                          <span className="font-medium">{r.name}</span>
                          <span className="text-xs text-muted-foreground">
                            {[r.admin1, r.country].filter(Boolean).join(", ")}
                          </span>
                        </button>
                      </li>
                    ))}
                  </ul>
                ) : query.trim() ? (
                  <p className="py-6 text-center text-sm text-muted-foreground">
                    No matches
                  </p>
                ) : (
                  <p className="py-6 text-center text-xs text-muted-foreground">
                    Try a city name, e.g. "London" or "Cairo"
                  </p>
                )}
              </div>

              {/* Accuracy settings */}
              <div className="space-y-3 border-t border-border pt-4">
                <p className="text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
                  Calculation accuracy
                </p>

                <label className="block space-y-1.5">
                  <span className="text-xs text-muted-foreground">Method</span>
                  <select
                    value={settings.method}
                    onChange={(e) => updateSettings({ method: Number(e.target.value) })}
                    className="w-full rounded-lg border border-border bg-card px-3 py-2 text-sm text-foreground outline-none focus:border-primary/50"
                  >
                    {CALC_METHODS.map((m) => (
                      <option key={m.id} value={m.id}>
                        {m.label}
                      </option>
                    ))}
                  </select>
                </label>

                <div className="space-y-1.5">
                  <span className="text-xs text-muted-foreground">Asr calculation</span>
                  <div className="grid grid-cols-2 gap-2">
                    {[
                      { v: 0 as const, label: "Standard" },
                      { v: 1 as const, label: "Hanafi" },
                    ].map((o) => (
                      <button
                        key={o.v}
                        onClick={() => updateSettings({ school: o.v })}
                        className={cn(
                          "rounded-lg border px-3 py-2 text-sm transition-colors",
                          settings.school === o.v
                            ? "border-primary bg-primary/10 text-primary"
                            : "border-border bg-card text-muted-foreground hover:border-primary/40"
                        )}
                      >
                        {o.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-1.5">
                  <span className="text-xs text-muted-foreground">
                    Minute adjustments (match your masjid)
                  </span>
                  <div className="grid grid-cols-5 gap-1.5">
                    {(["fajr", "dhuhr", "asr", "maghrib", "isha"] as const).map((k) => (
                      <label key={k} className="space-y-1">
                        <span className="block text-center text-[10px] capitalize text-muted-foreground">
                          {k}
                        </span>
                        <input
                          type="number"
                          value={settings.tune[k]}
                          onChange={(e) =>
                            updateSettings({
                              tune: { ...settings.tune, [k]: Number(e.target.value) || 0 },
                            })
                          }
                          className="w-full rounded-lg border border-border bg-card px-1 py-1.5 text-center text-sm tabular-nums outline-none focus:border-primary/50"
                        />
                      </label>
                    ))}
                  </div>
                </div>
              </div>

            </DialogContent>
          </Dialog>
        </div>

        {/* Progress */}
        <div className="mb-4 rounded-xl border border-border bg-card px-4 py-3">
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">Completed today</span>
            <span className="font-semibold text-primary">{completedCount} / 5</span>
          </div>
          <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-muted">
            <div
              className="h-full bg-gradient-primary transition-all"
              style={{ width: `${(completedCount / 5) * 100}%` }}
            />
          </div>
        </div>

        {loading ? (
          <div className="flex items-center justify-center rounded-2xl border border-border bg-card py-12">
            <Loader2 className="h-5 w-5 animate-spin text-primary" />
          </div>
        ) : (
          <ul className="space-y-2">
            {times?.map((p) => {
              const done = !!completed[p.name];
              return (
                <li key={p.name}>
                  <button
                    onClick={() => toggle(p.name)}
                    className={cn(
                      "group flex w-full items-center gap-3 rounded-2xl border bg-gradient-card px-4 py-3.5 text-left transition-smooth",
                      done
                        ? "border-primary/40 shadow-emerald"
                        : "border-border hover:border-primary/30"
                    )}
                  >
                    <div
                      className={cn(
                        "flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 transition-smooth",
                        done
                          ? "border-primary bg-primary text-primary-foreground"
                          : "border-border bg-background text-muted-foreground"
                      )}
                    >
                      {done ? (
                        <Check className="h-5 w-5" strokeWidth={3} />
                      ) : (
                        <span className="text-xs font-semibold">{p.name[0]}</span>
                      )}
                    </div>
                    <div className="flex-1">
                      <p className={cn("font-medium", done && "text-primary")}>
                        {p.name}
                      </p>
                      <p className="font-arabic text-xs text-muted-foreground">
                        {p.arabic}
                      </p>
                    </div>
                    <span className="font-display text-lg font-semibold tabular-nums">
                      {formatTime12(p.time)}
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>
        )}
      </section>
    </div>
  );
};

export default Home;
