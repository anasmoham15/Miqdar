import { useMemo, useState } from "react";
import { ChevronLeft, ChevronRight, Star, Moon, Info } from "lucide-react";
import { AppHeader } from "@/components/AppHeader";
import {
  getEventsForMonth,
  getEventForDate,
  getRecurringForGregorian,
  MONDAY_THURSDAY_INFO,
  type IslamicEvent,
  type RecurringObservance,
} from "@/data/islamicDates";
import { getHijriDate } from "@/lib/hijri";
import { cn } from "@/lib/utils";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const WEEKDAYS = ["S", "M", "T", "W", "T", "F", "S"];
const MONTHS = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

const MOON_DISCLAIMER =
  "This date is based on astronomical calculation. The actual date depends on moon sighting in your region. Please confirm with your local mosque or Islamic authority.";

interface DayDetail {
  date: Date;
  event?: IslamicEvent;
  recurring: RecurringObservance[];
  isFastingWeekday: boolean;
}

const CalendarPage = () => {
  const today = new Date();
  const [view, setView] = useState({ year: today.getFullYear(), month: today.getMonth() });
  const [selected, setSelected] = useState<DayDetail | null>(null);
  const [moonInfoOpen, setMoonInfoOpen] = useState(false);

  const { weeks, monthEvents } = useMemo(() => {
    const first = new Date(view.year, view.month, 1);
    const startWeekday = first.getDay();
    const daysInMonth = new Date(view.year, view.month + 1, 0).getDate();
    const cells: (number | null)[] = [];
    for (let i = 0; i < startWeekday; i++) cells.push(null);
    for (let d = 1; d <= daysInMonth; d++) cells.push(d);
    while (cells.length % 7 !== 0) cells.push(null);
    const wks: (number | null)[][] = [];
    for (let i = 0; i < cells.length; i += 7) wks.push(cells.slice(i, i + 7));
    return { weeks: wks, monthEvents: getEventsForMonth(view.year, view.month) };
  }, [view]);

  const shift = (delta: number) => {
    const m = view.month + delta;
    const y = view.year + Math.floor(m / 12);
    setView({ year: y, month: ((m % 12) + 12) % 12 });
  };

  const isToday = (d: number | null) =>
    d !== null &&
    d === today.getDate() &&
    view.month === today.getMonth() &&
    view.year === today.getFullYear();

  const buildDetail = (d: number): DayDetail => {
    const date = new Date(view.year, view.month, d);
    const event = getEventForDate(view.year, view.month, d);
    const { observances, isFastingWeekday } = getRecurringForGregorian(date);
    return { date, event, recurring: observances, isFastingWeekday };
  };

  const openDay = (d: number | null) => {
    if (!d) return;
    const detail = buildDetail(d);
    if (!detail.event && detail.recurring.length === 0 && !detail.isFastingWeekday) return;
    setSelected(detail);
  };

  return (
    <div className="animate-fade-in">
      <AppHeader title="Calendar" arabic="التقويم" subtitle={getHijriDate()} />

      <section className="px-5">
        <div className="rounded-2xl border border-border bg-gradient-card p-4">
          <div className="mb-4 flex items-center justify-between">
            <button
              onClick={() => shift(-1)}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-smooth hover:border-primary/40 hover:text-primary"
              aria-label="Previous month"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <h2 className="font-display text-lg font-semibold">
              {MONTHS[view.month]} {view.year}
            </h2>
            <button
              onClick={() => shift(1)}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-smooth hover:border-primary/40 hover:text-primary"
              aria-label="Next month"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>

          <div className="mb-2 grid grid-cols-7 gap-1">
            {WEEKDAYS.map((d, i) => (
              <div
                key={i}
                className="text-center text-[10px] font-semibold uppercase tracking-wider text-muted-foreground"
              >
                {d}
              </div>
            ))}
          </div>

          <div className="grid grid-cols-7 gap-1">
            {weeks.flat().map((d, i) => {
              if (!d) return <div key={i} className="aspect-square opacity-0" />;
              const detail = buildDetail(d);
              const event = detail.event;
              const hasRecurring = detail.recurring.length > 0;
              const fastingWeekday = detail.isFastingWeekday;
              const interactive = !!event || hasRecurring || fastingWeekday;
              const todayCell = isToday(d);

              return (
                <button
                  key={i}
                  type="button"
                  onClick={() => openDay(d)}
                  disabled={!interactive}
                  className={cn(
                    "relative flex aspect-square items-center justify-center rounded-lg text-sm transition-smooth",
                    todayCell && "bg-gradient-primary font-bold text-primary-foreground shadow-emerald",
                    !todayCell && event && "border border-primary/50 bg-primary/15 text-primary font-semibold",
                    !todayCell && !event && hasRecurring && "border border-primary/25 bg-primary/[0.06] text-primary/90",
                    !todayCell && !event && !hasRecurring && fastingWeekday && "text-foreground ring-1 ring-inset ring-primary/15",
                    !todayCell && !event && !hasRecurring && !fastingWeekday && "text-foreground hover:bg-muted",
                    interactive && !todayCell && "hover:brightness-110 active:scale-95 cursor-pointer",
                  )}
                >
                  <span className="flex items-center gap-0.5">
                    {d}
                    {event?.moonDependent && (
                      <Moon className="h-2.5 w-2.5 opacity-80" aria-label="Moon-dependent date" />
                    )}
                  </span>
                  {event && !todayCell && (
                    <span className="absolute bottom-1 h-1 w-1 rounded-full bg-primary" />
                  )}
                  {!event && hasRecurring && !todayCell && (
                    <span className="absolute bottom-1 h-1 w-1 rounded-full bg-primary/50" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Legend */}
          <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-[10px] text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <span className="h-2.5 w-2.5 rounded-sm border border-primary/50 bg-primary/15" />
              Major event
            </span>
            <span className="flex items-center gap-1.5">
              <span className="h-2.5 w-2.5 rounded-sm border border-primary/25 bg-primary/[0.06]" />
              Recommended
            </span>
            <span className="flex items-center gap-1.5">
              <span className="h-2.5 w-2.5 rounded-sm ring-1 ring-inset ring-primary/15" />
              Mon / Thu fast
            </span>
            <button
              type="button"
              onClick={() => setMoonInfoOpen(true)}
              className="flex items-center gap-1 text-primary hover:underline"
            >
              <Moon className="h-3 w-3" /> moon-dependent
            </button>
          </div>
        </div>
      </section>

      <section className="px-5 pt-6 pb-4">
        <h3 className="mb-3 font-display text-lg font-semibold">
          Events in {MONTHS[view.month]}
        </h3>
        {monthEvents.length === 0 ? (
          <p className="rounded-xl border border-dashed border-border bg-card/50 py-6 text-center text-sm text-muted-foreground">
            No major Islamic events this month.
          </p>
        ) : (
          <ul className="space-y-2">
            {monthEvents.map((e) => {
              const day = new Date(e.date).getDate();
              return (
                <li key={e.date}>
                  <button
                    type="button"
                    onClick={() => openDay(day)}
                    className="flex w-full items-start gap-3 rounded-xl border border-border bg-card p-3 text-left transition-smooth hover:border-primary/40"
                  >
                    <div className="flex h-12 w-12 shrink-0 flex-col items-center justify-center rounded-lg bg-primary/15 text-primary">
                      <Star className="h-3 w-3 fill-primary" />
                      <span className="text-base font-bold leading-none">{day}</span>
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="flex items-center gap-1.5 font-display font-semibold">
                        {e.name}
                        {e.moonDependent && (
                          <Moon className="h-3.5 w-3.5 text-primary/80" />
                        )}
                      </p>
                      <p className="text-xs text-muted-foreground">{e.description}</p>
                    </div>
                  </button>
                </li>
              );
            })}
          </ul>
        )}
      </section>

      {/* Day detail dialog */}
      <Dialog open={!!selected} onOpenChange={(o) => !o && setSelected(null)}>
        <DialogContent className="max-w-md border-border bg-card">
          {selected && (
            <>
              <DialogHeader>
                <DialogTitle className="flex items-center gap-2 font-display text-xl">
                  {selected.event?.name ?? selected.recurring[0]?.name ?? MONDAY_THURSDAY_INFO.name}
                  {selected.event?.moonDependent && (
                    <button
                      type="button"
                      onClick={() => setMoonInfoOpen(true)}
                      className="text-primary"
                      aria-label="About moon-dependent dates"
                    >
                      <Moon className="h-4 w-4" />
                    </button>
                  )}
                </DialogTitle>
                <DialogDescription className="text-xs text-muted-foreground">
                  {selected.date.toLocaleDateString("en-US", {
                    weekday: "long", month: "long", day: "numeric", year: "numeric",
                  })}
                </DialogDescription>
              </DialogHeader>

              <div className="space-y-4 text-sm">
                {selected.event && (
                  <Section title="Significance" body={selected.event.significance} />
                )}
                {selected.event?.worship && (
                  <Section title="Worship" body={selected.event.worship} />
                )}

                {selected.recurring.map((r) => (
                  <div key={r.key} className="rounded-lg border border-primary/20 bg-primary/[0.04] p-3">
                    <p className="mb-1 font-display font-semibold text-primary">{r.name}</p>
                    <p className="text-muted-foreground">{r.significance}</p>
                    <p className="mt-2 text-foreground/90">
                      <span className="font-semibold text-primary/90">Worship: </span>
                      {r.worship}
                    </p>
                  </div>
                ))}

                {selected.isFastingWeekday && !selected.recurring.some(r => r.key === "mondayThursday") && (
                  <div className="rounded-lg border border-primary/20 bg-primary/[0.04] p-3">
                    <p className="mb-1 font-display font-semibold text-primary">{MONDAY_THURSDAY_INFO.name}</p>
                    <p className="text-muted-foreground">{MONDAY_THURSDAY_INFO.significance}</p>
                    <p className="mt-2">
                      <span className="font-semibold text-primary/90">Worship: </span>
                      {MONDAY_THURSDAY_INFO.worship}
                    </p>
                  </div>
                )}

                {selected.event?.moonDependent && (
                  <div className="flex gap-2 rounded-lg border border-border bg-muted/40 p-3 text-xs text-muted-foreground">
                    <Info className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <p>{MOON_DISCLAIMER}</p>
                  </div>
                )}
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>

      {/* Moon info dialog */}
      <Dialog open={moonInfoOpen} onOpenChange={setMoonInfoOpen}>
        <DialogContent className="max-w-sm border-border bg-card">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2 font-display">
              <Moon className="h-4 w-4 text-primary" /> Moon-dependent date
            </DialogTitle>
          </DialogHeader>
          <p className="text-sm text-muted-foreground">{MOON_DISCLAIMER}</p>
        </DialogContent>
      </Dialog>
    </div>
  );
};

const Section = ({ title, body }: { title: string; body: string }) => (
  <div>
    <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-primary/80">{title}</p>
    <p className="text-foreground/90 leading-relaxed">{body}</p>
  </div>
);

export default CalendarPage;
