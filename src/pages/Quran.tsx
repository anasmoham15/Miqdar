import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Search } from "lucide-react";
import { AppHeader } from "@/components/AppHeader";
import { surahs } from "@/data/surahs";
import { Input } from "@/components/ui/input";

const Quran = () => {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return surahs;
    return surahs.filter(
      (s) =>
        s.name.toLowerCase().includes(q) ||
        s.meaning.toLowerCase().includes(q) ||
        String(s.number) === q
    );
  }, [query]);

  return (
    <div className="animate-fade-in">
      <AppHeader title="The Noble Quran" arabic="القرآن" subtitle="114 Surahs" />

      <div className="px-5 pb-3">
        <div className="relative">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search surah…"
            className="rounded-xl border-border bg-card pl-9"
          />
        </div>
      </div>

      <ul className="space-y-1.5 px-5 pt-2">
        {filtered.map((s) => (
          <li key={s.number}>
            <Link
              to={`/quran/${s.number}`}
              className="flex items-center gap-3 rounded-xl border border-transparent bg-card px-3 py-3 transition-smooth hover:border-primary/30"
            >
            <div className="relative flex h-10 w-10 shrink-0 items-center justify-center">
              <svg viewBox="0 0 40 40" className="absolute inset-0 h-full w-full text-primary/30">
                <polygon
                  points="20,2 35,12 35,28 20,38 5,28 5,12"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
              </svg>
              <span className="relative text-xs font-semibold text-primary">
                {s.number}
              </span>
            </div>
            <div className="min-w-0 flex-1">
              <div className="flex items-baseline justify-between gap-2">
                <p className="truncate font-display text-base font-semibold">
                  {s.name}
                </p>
                <span className="font-arabic text-lg text-foreground">{s.arabic}</span>
              </div>
              <p className="text-xs text-muted-foreground">
                {s.meaning} · {s.verses} verses · {s.type}
              </p>
            </div>
            </Link>
          </li>
        ))}
        {filtered.length === 0 && (
          <p className="py-12 text-center text-sm text-muted-foreground">No surahs found.</p>
        )}
      </ul>
    </div>
  );
};

export default Quran;
