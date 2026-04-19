import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft, Loader2 } from "lucide-react";
import { surahs } from "@/data/surahs";
import { Button } from "@/components/ui/button";

interface Ayah {
  number: number;
  numberInSurah: number;
  text: string;
}

interface SurahData {
  arabic: Ayah[];
  english: Ayah[];
  bismillah?: string;
}

const SurahReader = () => {
  const { number } = useParams<{ number: string }>();
  const surahNum = Number(number);
  const meta = surahs.find((s) => s.number === surahNum);

  const [data, setData] = useState<SurahData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!surahNum) return;
    let cancelled = false;
    setLoading(true);
    setError(null);

    Promise.all([
      fetch(`https://api.alquran.cloud/v1/surah/${surahNum}/quran-uthmani`).then((r) => r.json()),
      fetch(`https://api.alquran.cloud/v1/surah/${surahNum}/en.sahih`).then((r) => r.json()),
    ])
      .then(([ar, en]) => {
        if (cancelled) return;
        if (ar?.code !== 200 || en?.code !== 200) {
          throw new Error("Failed to load surah");
        }
        setData({
          arabic: ar.data.ayahs,
          english: en.data.ayahs,
        });
      })
      .catch((e) => {
        if (!cancelled) setError(e.message ?? "Something went wrong");
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, [surahNum]);

  if (!meta) {
    return (
      <div className="px-5 py-12 text-center">
        <p className="text-muted-foreground">Surah not found.</p>
        <Button asChild variant="link" className="mt-4">
          <Link to="/quran">Back to Quran</Link>
        </Button>
      </div>
    );
  }

  // Strip Bismillah from first ayah of every surah except 1 and 9 (it's prepended by API)
  const showBismillahHeader = surahNum !== 1 && surahNum !== 9;
  const bismillahArabic = "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ";

  const arabicAyahs = data?.arabic ?? [];
  const englishAyahs = data?.english ?? [];

  return (
    <div className="animate-fade-in pb-8">
      {/* Sticky header */}
      <div className="sticky top-0 z-20 border-b border-border/60 bg-background/85 backdrop-blur-xl">
        <div className="flex items-center gap-3 px-4 py-3">
          <Button asChild variant="ghost" size="icon" className="rounded-full">
            <Link to="/quran" aria-label="Back to surah list">
              <ArrowLeft className="h-5 w-5" />
            </Link>
          </Button>
          <div className="min-w-0 flex-1">
            <p className="truncate font-display text-base font-semibold leading-tight">
              {meta.number}. {meta.name}
            </p>
            <p className="truncate text-xs text-muted-foreground">
              {meta.meaning} · {meta.verses} verses · {meta.type}
            </p>
          </div>
          <span className="font-arabic text-2xl text-primary">{meta.arabic}</span>
        </div>
      </div>

      {/* Bismillah */}
      {showBismillahHeader && !loading && !error && (
        <div className="mx-5 mt-6 rounded-2xl border border-primary/20 bg-card px-5 py-6 text-center shadow-emerald">
          <p className="font-arabic text-2xl leading-loose text-primary" dir="rtl">
            {bismillahArabic}
          </p>
        </div>
      )}

      {loading && (
        <div className="flex items-center justify-center py-20 text-muted-foreground">
          <Loader2 className="mr-2 h-5 w-5 animate-spin" />
          <span className="text-sm">Loading surah…</span>
        </div>
      )}

      {error && (
        <div className="mx-5 mt-8 rounded-xl border border-destructive/40 bg-destructive/10 p-4 text-sm text-destructive">
          {error}
        </div>
      )}

      {!loading && !error && (
        <ul className="space-y-3 px-5 pt-5">
          {arabicAyahs.map((ayah, idx) => {
            const en = englishAyahs[idx];
            // For surahs other than Al-Fatiha, the API embeds bismillah at the start of ayah 1
            let arabicText = ayah.text;
            if (showBismillahHeader && idx === 0 && arabicText.startsWith(bismillahArabic)) {
              arabicText = arabicText.slice(bismillahArabic.length).trim();
            }

            return (
              <li
                key={ayah.number}
                className="rounded-2xl border border-border bg-card px-4 py-4 transition-smooth hover:border-primary/30"
              >
                <div className="mb-3 flex items-center justify-between">
                  <div className="relative flex h-9 w-9 items-center justify-center">
                    <svg viewBox="0 0 40 40" className="absolute inset-0 h-full w-full text-primary/40">
                      <polygon
                        points="20,2 35,12 35,28 20,38 5,28 5,12"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                      />
                    </svg>
                    <span className="relative text-[11px] font-semibold text-primary">
                      {ayah.numberInSurah}
                    </span>
                  </div>
                  <span className="text-[10px] uppercase tracking-wider text-muted-foreground">
                    Ayah {ayah.numberInSurah}
                  </span>
                </div>

                <p
                  dir="rtl"
                  lang="ar"
                  className="font-arabic text-2xl leading-loose text-foreground"
                >
                  {arabicText}
                </p>

                {en && (
                  <p className="mt-3 border-t border-border/60 pt-3 text-sm leading-relaxed text-muted-foreground">
                    {en.text}
                  </p>
                )}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default SurahReader;
