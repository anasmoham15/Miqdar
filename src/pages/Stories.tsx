import { Link } from "react-router-dom";
import { Clock, ChevronRight } from "lucide-react";
import { AppHeader } from "@/components/AppHeader";
import { categoryMeta, getStoriesByCategory, type StoryCategory } from "@/data/stories";

const ORDER: StoryCategory[] = ["Prophets", "Sahaba", "Prophet Muhammad"];

const Stories = () => {
  return (
    <div className="animate-fade-in">
      <AppHeader title="Islamic Stories" arabic="قصص" subtitle="Lessons from our heritage" />

      <div className="space-y-8 px-5 pt-2">
        {ORDER.map((cat) => {
          const meta = categoryMeta[cat];
          const items = getStoriesByCategory(cat);
          return (
            <section key={cat}>
              <div className="mb-3 flex items-end justify-between">
                <div>
                  <h2 className="font-display text-xl font-semibold tracking-tight text-foreground">
                    {meta.label}
                  </h2>
                  <p className="text-xs text-muted-foreground">{meta.blurb}</p>
                </div>
                <span className="font-arabic text-lg text-primary/70">{meta.arabic}</span>
              </div>

              <ul className="space-y-3">
                {items.map((s) => (
                  <li key={s.id}>
                    <Link
                      to={`/stories/${s.id}`}
                      className="group flex items-start gap-3 rounded-2xl border border-border bg-gradient-card p-4 transition-smooth hover:border-primary/40 hover:shadow-emerald"
                    >
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 font-arabic text-base text-primary">
                        {meta.arabic.charAt(0)}
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center gap-2">
                          <span className="flex items-center gap-1 text-[10px] text-muted-foreground">
                            <Clock className="h-3 w-3" /> {s.readTime}
                          </span>
                        </div>
                        <h3 className="mt-1 font-display text-base font-semibold leading-snug text-foreground">
                          {s.title}
                        </h3>
                        <p className="mt-1 line-clamp-2 text-sm leading-relaxed text-muted-foreground">
                          {s.description}
                        </p>
                      </div>
                      <ChevronRight className="mt-3 h-4 w-4 shrink-0 text-muted-foreground transition-smooth group-hover:text-primary" />
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          );
        })}
      </div>
    </div>
  );
};

export default Stories;
