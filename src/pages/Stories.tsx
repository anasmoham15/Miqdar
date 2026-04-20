import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Clock, ChevronRight, Info, Search } from "lucide-react";
import { AppHeader } from "@/components/AppHeader";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  categoryMeta,
  getStoriesByCategory,
  storyGroups,
  type StoryCategory,
  type StoryGroup,
} from "@/data/stories";

const Stories = () => {
  const [group, setGroup] = useState<StoryGroup>("People");
  const [query, setQuery] = useState("");

  const q = query.trim().toLowerCase();

  const activeGroup = useMemo(
    () => storyGroups.find((g) => g.id === group)!,
    [group],
  );

  return (
    <div className="animate-fade-in">
      <AppHeader title="Islamic Stories" arabic="قصص" subtitle="Lessons from our heritage" />

      <div className="px-5 pt-2 pb-8">
        {/* Top-level group tabs */}
        <Tabs value={group} onValueChange={(v) => setGroup(v as StoryGroup)}>
          <TabsList className="grid w-full grid-cols-4 rounded-2xl border border-border bg-card p-1 h-auto">
            {storyGroups.map((g) => (
              <TabsTrigger
                key={g.id}
                value={g.id}
                className="rounded-xl py-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-emerald"
              >
                <span className="font-display text-xs sm:text-sm">{g.label}</span>
              </TabsTrigger>
            ))}
          </TabsList>

          {storyGroups.map((g) => (
            <TabsContent key={g.id} value={g.id} className="mt-5 space-y-5">
              {/* Group header */}
              <div className="flex items-end justify-between">
                <div>
                  <h2 className="font-display text-xl font-semibold tracking-tight text-foreground">
                    {g.label}
                  </h2>
                  <p className="text-xs text-muted-foreground">
                    {g.categories.length}{" "}
                    {g.categories.length === 1 ? "category" : "categories"}
                  </p>
                </div>
                <span className="font-arabic text-2xl text-primary/70">
                  {g.arabic}
                </span>
              </div>

              {/* Search */}
              <div className="relative">
                <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search stories…"
                  className="rounded-xl border-border bg-card pl-9"
                />
              </div>

              {/* Category accordions */}
              <Accordion
                type="multiple"
                defaultValue={[g.categories[0]]}
                className="space-y-3"
              >
                {g.categories.map((cat) => (
                  <CategoryAccordion key={cat} category={cat} query={q} />
                ))}
              </Accordion>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </div>
  );
};

interface CategoryAccordionProps {
  category: StoryCategory;
  query: string;
}

const CategoryAccordion = ({ category, query }: CategoryAccordionProps) => {
  const meta = categoryMeta[category];
  const all = getStoriesByCategory(category);
  const items = query
    ? all.filter(
        (s) =>
          s.title.toLowerCase().includes(query) ||
          s.description.toLowerCase().includes(query),
      )
    : all;

  return (
    <AccordionItem
      value={category}
      className="rounded-2xl border border-border bg-gradient-card data-[state=open]:border-primary/40 data-[state=open]:shadow-emerald"
    >
      <AccordionTrigger className="px-4 py-3 hover:no-underline [&[data-state=open]>svg]:text-primary">
        <div className="flex flex-1 items-center gap-3 text-left">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 font-arabic text-base text-primary">
            {meta.arabic.charAt(0)}
          </div>
          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-2">
              <h3 className="truncate font-display text-base font-semibold text-foreground">
                {meta.label}
              </h3>
              <span className="shrink-0 rounded-full bg-primary/10 px-2 py-0.5 text-[10px] font-medium text-primary">
                {all.length}
              </span>
            </div>
            <p className="truncate text-[11px] text-muted-foreground">
              {meta.blurb}
            </p>
          </div>
        </div>
      </AccordionTrigger>

      <AccordionContent className="px-4">
        {/* Intro */}
        <p className="mb-3 text-[13px] leading-relaxed text-foreground/85">
          {meta.intro}
        </p>

        {/* Source note */}
        <div className="mb-4 flex items-start gap-2 rounded-xl border border-primary/15 bg-primary/5 p-3 text-[11px] leading-relaxed text-muted-foreground">
          <Info className="mt-0.5 h-3.5 w-3.5 shrink-0 text-primary" />
          <p>{meta.source}</p>
        </div>

        {items.length === 0 ? (
          <div className="rounded-xl border border-dashed border-border p-6 text-center text-xs text-muted-foreground">
            {query
              ? "No stories match your search in this category."
              : "Stories for this section are being prepared. Check back soon, in shaa Allah."}
          </div>
        ) : (
          <ul className="space-y-2.5">
            {items.map((s) => (
              <li key={s.id}>
                <Link
                  to={`/stories/${s.id}`}
                  className="group flex items-start gap-3 rounded-xl border border-border bg-card p-3 transition-smooth hover:border-primary/40 hover:shadow-emerald"
                >
                  <div className="min-w-0 flex-1">
                    <span className="flex items-center gap-1 text-[10px] text-muted-foreground">
                      <Clock className="h-3 w-3" /> {s.readTime}
                    </span>
                    <h4 className="mt-1 font-display text-sm font-semibold leading-snug text-foreground">
                      {s.title}
                    </h4>
                    <p className="mt-1 line-clamp-2 text-xs leading-relaxed text-muted-foreground">
                      {s.description}
                    </p>
                  </div>
                  <ChevronRight className="mt-2 h-4 w-4 shrink-0 text-muted-foreground transition-smooth group-hover:text-primary" />
                </Link>
              </li>
            ))}
          </ul>
        )}
      </AccordionContent>
    </AccordionItem>
  );
};

export default Stories;
