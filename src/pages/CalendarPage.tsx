import { useMemo, useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { AppHeader } from "@/components/AppHeader";
import { getEventsForMonth, getEventForDate } from "@/data/islamicDates";
import { getHijriDate } from "@/lib/hijri";
import { cn } from "@/lib/utils";

const WEEKDAYS = ["S", "M", "T", "W", "T", "F", "S"];
const MONTHS = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

const CalendarPage = () => {
  const today = new Date();
  const [view, setView] = useState({ year: today.getFullYear(), month: today.getMonth() });

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

  return (
    <div className="animate-fade-in">
      <AppHeader title="Calendar" arabic="التقويم" subtitle={getHijriDate()} />

      <section className="px-5">
        <div className="rounded-2xl border border-border bg-gradient-card p-4">
          <div className="mb-4 flex items-center justify-between">
            <button
              onClick={() => shift(-1)}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-smooth hover:border-primary/40 hover:text-primary"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <h2 className="font-display text-lg font-semibold">
              {MONTHS[view.month]} {view.year}
            </h2>
            <button
              onClick={() => shift(1)}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-smooth hover:border-primary/40 hover:text-primary"
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
              const event = d ? getEventForDate(view.year, view.month, d) : undefined;
              return (
                <div
                  key={i}
                  className={cn(
                    "relative flex aspect-square items-center justify-center rounded-lg text-sm",
                    !d && "opacity-0",
                    isToday(d) && "bg-gradient-primary font-bold text-primary-foreground shadow-emerald",
                    event && !isToday(d) && "border border-primary/40 bg-primary/10 text-primary",
                    !event && !isToday(d) && d && "text-foreground hover:bg-muted"
                  )}
                >
                  {d}
                  {event && !isToday(d) && (
                    <span className="absolute bottom-1 h-1 w-1 rounded-full bg-primary" />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="px-5 pt-6">
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
                <li
                  key={e.date}
                  className="flex items-start gap-3 rounded-xl border border-border bg-card p-3"
                >
                  <div className="flex h-12 w-12 shrink-0 flex-col items-center justify-center rounded-lg bg-primary/15 text-primary">
                    <Star className="h-3 w-3 fill-primary" />
                    <span className="text-base font-bold leading-none">{day}</span>
                  </div>
                  <div className="min-w-0">
                    <p className="font-display font-semibold">{e.name}</p>
                    <p className="text-xs text-muted-foreground">{e.description}</p>
                  </div>
                </li>
              );
            })}
          </ul>
        )}
      </section>
    </div>
  );
};

export default CalendarPage;
