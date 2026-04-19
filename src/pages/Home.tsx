import { useEffect, useState } from "react";
import { MapPin, Loader2, Check } from "lucide-react";
import {
  fetchPrayerTimes,
  getCurrentLocation,
  formatTime12,
  DEFAULT_LOCATION,
  type PrayerTime,
} from "@/lib/prayerTimes";
import { getHijriDate, getGregorianDate } from "@/lib/hijri";
import { cn } from "@/lib/utils";

const STORAGE_KEY = `miqdar-prayers-${new Date().toISOString().slice(0, 10)}`;

const Home = () => {
  const [times, setTimes] = useState<PrayerTime[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [location, setLocation] = useState<string>("Locating…");
  const [completed, setCompleted] = useState<Record<string, boolean>>(() => {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}");
    } catch {
      return {};
    }
  });

  useEffect(() => {
    let cancelled = false;
    (async () => {
      setLoading(true);
      try {
        const coords = await getCurrentLocation();
        if (cancelled) return;
        setLocation("Your location");
        const data = await fetchPrayerTimes(coords.lat, coords.lng);
        if (!cancelled) setTimes(data.times);
      } catch {
        try {
          const data = await fetchPrayerTimes(DEFAULT_LOCATION.lat, DEFAULT_LOCATION.lng);
          if (!cancelled) {
            setTimes(data.times);
            setLocation(DEFAULT_LOCATION.label);
          }
        } catch {
          /* ignore */
        }
      } finally {
        if (!cancelled) setLoading(false);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, []);

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
          <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
            <MapPin className="h-3 w-3" />
            <span>{location}</span>
          </div>
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
