import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Clock, ChevronRight, Info, Search } from "lucide-react";
import { AppHeader } from "@/components/AppHeader";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import {
  categoryMeta,
  getStoriesByCategory,
  type StoryCategory,
} from "@/data/stories";

const TABS: StoryCategory[] = ["Prophets", "Sahaba"];

const Stories = () => {
  const [tab, setTab] = useState<StoryCategory>("Prophets");
  const [query, setQuery] = useState("");

  const items = useMemo(() => {
    const list = getStoriesByCategory(tab);
    const q = query.trim().toLowerCase();
    if (!q) return list;
    return list.filter(
      (s) =>
        s.title.toLowerCase().includes(q) ||
        s.description.toLowerCase().includes(q),
    );
  }, [tab, query]);

  const meta = categoryMeta[tab];

  return (
    <div className="animate-fade-in">
      <AppHeader title="Islamic Stories" arabic="قصص" subtitle="Lessons from our heritage" />

      <div className="px-5 pt-2">
        <Tabs value={tab} onValueChange={(v) => setTab(v as StoryCategory)}>
          <TabsList className="grid w-full grid-cols-2 rounded-2xl border border-border bg-card p-1">
            {TABS.map((t) => (
              <TabsTrigger
                key={t}
                value={t}
                className="rounded-xl data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-emerald"
              >
                <span className="font-display">{categoryMeta[t].label}</span>
              </TabsTrigger>
            ))}
          </TabsList>

          {TABS.map((t) => (
            <TabsContent key={t} value={t} className="mt-5 space-y-4">
              {/* Section header */}
              <div className="flex items-end justify-between">
                <div>
                  <h2 className="font-display text-xl font-semibold tracking-tight text-foreground">
                    {categoryMeta[t].label}
                  </h2>
                  <p className="text-xs text-muted-foreground">
                    {categoryMeta[t].blurb}
                  </p>
                </div>
                <span className="font-arabic text-2xl text-primary/70">
                  {categoryMeta[t].arabic}
                </span>
              </div>

              {/* Source note */}
              <div className="flex items-start gap-2 rounded-xl border border-primary/15 bg-primary/5 p-3 text-[11px] leading-relaxed text-muted-foreground">
                <Info className="mt-0.5 h-3.5 w-3.5 shrink-0 text-primary" />
                <p>{categoryMeta[t].source}</p>
              </div>

              {/* Search */}
              <div className="relative">
                <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder={`Search ${categoryMeta[t].label.toLowerCase()}…`}
                  className="rounded-xl border-border bg-card pl-9"
                />
              </div>

              {/* Count */}
              <p className="text-[11px] uppercase tracking-wider text-muted-foreground">
                {items.length} {items.length === 1 ? "story" : "stories"}
              </p>

              {/* List */}
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

                {items.length === 0 && (
                  <li className="rounded-2xl border border-dashed border-border p-8 text-center text-sm text-muted-foreground">
                    No stories match your search.
                  </li>
                )}
              </ul>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </div>
  );
};

export default Stories;
