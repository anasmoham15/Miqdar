import { Scroll, Clock } from "lucide-react";
import { AppHeader } from "@/components/AppHeader";
import { stories } from "@/data/stories";

const Stories = () => {
  return (
    <div className="animate-fade-in">
      <AppHeader title="Islamic Stories" arabic="قصص" subtitle="Lessons from our heritage" />

      <ul className="space-y-3 px-5 pt-2">
        {stories.map((s) => (
          <li
            key={s.id}
            className="group rounded-2xl border border-border bg-gradient-card p-4 transition-smooth hover:border-primary/40 hover:shadow-emerald"
          >
            <div className="flex items-start gap-3">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Scroll className="h-5 w-5" />
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-primary">
                    {s.category}
                  </span>
                  <span className="text-muted-foreground">·</span>
                  <span className="flex items-center gap-1 text-[10px] text-muted-foreground">
                    <Clock className="h-3 w-3" /> {s.readTime}
                  </span>
                </div>
                <h3 className="mt-1 font-display text-lg font-semibold leading-snug">
                  {s.title}
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                  {s.description}
                </p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Stories;
