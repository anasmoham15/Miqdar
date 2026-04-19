import { Link, useParams } from "react-router-dom";
import { ArrowLeft, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { categoryMeta, getStoryById, type StorySections } from "@/data/stories";

const SECTION_TITLES: Array<{ key: keyof StorySections; label: string; arabic?: string }> = [
  { key: "intro", label: "Who They Were", arabic: "من هم" },
  { key: "life", label: "Their Life & Mission", arabic: "حياتهم ورسالتهم" },
  { key: "legacy", label: "Their Legacy", arabic: "إرثهم" },
  { key: "keyFacts", label: "Key Facts", arabic: "حقائق" },
  { key: "lessons", label: "Lessons We Can Take", arabic: "دروس" },
];

const StoryReader = () => {
  const { id } = useParams<{ id: string }>();
  const story = id ? getStoryById(id) : undefined;

  if (!story) {
    return (
      <div className="px-5 py-12 text-center">
        <p className="text-muted-foreground">Story not found.</p>
        <Button asChild variant="link" className="mt-4">
          <Link to="/stories">Back to Stories</Link>
        </Button>
      </div>
    );
  }

  const meta = categoryMeta[story.category];
  const sections = story.sections;

  return (
    <div className="animate-fade-in pb-12">
      {/* Sticky header */}
      <div className="sticky top-0 z-20 border-b border-border/60 bg-background/85 backdrop-blur-xl">
        <div className="flex items-center gap-3 px-4 py-3">
          <Button asChild variant="ghost" size="icon" className="rounded-full">
            <Link to="/stories" aria-label="Back to stories">
              <ArrowLeft className="h-5 w-5" />
            </Link>
          </Button>
          <div className="min-w-0 flex-1">
            <p className="truncate text-[10px] font-semibold uppercase tracking-wider text-primary">
              {meta.label}
            </p>
            <p className="truncate font-display text-sm font-semibold leading-tight">
              {story.title}
            </p>
          </div>
          <span className="font-arabic text-2xl text-primary">{meta.arabic}</span>
        </div>
      </div>

      {/* Title block */}
      <div className="px-5 pt-6">
        <div className="rounded-2xl border border-primary/20 bg-card p-5 shadow-emerald">
          <div className="flex items-center gap-2 text-[10px] uppercase tracking-wider text-muted-foreground">
            <span className="font-semibold text-primary">{meta.label}</span>
            <span>·</span>
            <span className="flex items-center gap-1">
              <Clock className="h-3 w-3" /> {story.readTime} read
            </span>
          </div>
          <h1 className="mt-2 font-display text-2xl font-semibold leading-tight text-foreground">
            {story.title}
          </h1>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            {story.description}
          </p>
        </div>
      </div>

      {/* Body — continuous article with section headings */}
      <article className="px-5 pt-8">
        {sections ? (
          SECTION_TITLES.map(({ key, label, arabic }) => {
            const content = sections[key];
            if (!content || content.length === 0) return null;

            return (
              <section key={key} className="mb-8">
                {/* Heading */}
                <div className="mb-4 flex items-end justify-between border-b border-primary/20 pb-2">
                  <h2 className="font-display text-lg font-semibold tracking-tight text-primary">
                    {label}
                  </h2>
                  {arabic && (
                    <span className="font-arabic text-base text-primary/60">
                      {arabic}
                    </span>
                  )}
                </div>

                {/* Key Facts as bullets, others as paragraphs */}
                {key === "keyFacts" ? (
                  <ul className="space-y-2">
                    {content.map((fact, i) => (
                      <li
                        key={i}
                        className="flex gap-3 text-[14px] leading-relaxed text-foreground/90"
                      >
                        <span
                          aria-hidden
                          className="mt-2 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-primary"
                        />
                        <span>{fact}</span>
                      </li>
                    ))}
                  </ul>
                ) : key === "lessons" ? (
                  <ol className="space-y-3">
                    {content.map((lesson, i) => (
                      <li
                        key={i}
                        className="flex gap-3 text-[15px] leading-relaxed text-foreground/90"
                      >
                        <span className="font-display text-sm font-semibold text-primary">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <span>{lesson}</span>
                      </li>
                    ))}
                  </ol>
                ) : (
                  <div className="space-y-4">
                    {content.map((para, i) => (
                      <p
                        key={i}
                        className="text-[15px] leading-relaxed text-foreground/90"
                      >
                        {para}
                      </p>
                    ))}
                  </div>
                )}
              </section>
            );
          })
        ) : story.content ? (
          // Fallback for any legacy story still using flat content
          <div className="space-y-4">
            {story.content.map((para, i) => (
              <p
                key={i}
                className="text-[15px] leading-relaxed text-foreground/90"
              >
                {para}
              </p>
            ))}
          </div>
        ) : null}

        {/* Decorative separator */}
        <div className="mt-2 mb-6 flex items-center justify-center">
          <span className="font-arabic text-2xl text-primary/40">۞</span>
        </div>

        {/* Source attribution */}
        <div className="rounded-xl border border-primary/15 bg-primary/5 p-4 text-[12px] leading-relaxed text-muted-foreground">
          <p className="font-semibold text-primary">Source</p>
          <p className="mt-1">{meta.source}</p>
        </div>

        {/* Disclaimer */}
        <div className="mt-3 rounded-xl border border-border bg-card p-4 text-[12px] leading-relaxed text-muted-foreground">
          <p className="font-semibold uppercase tracking-wider text-foreground/80">
            Disclaimer
          </p>
          <p className="mt-1">
            Content based on classical Islamic scholarship. Always refer to a
            qualified scholar for religious guidance.
          </p>
        </div>
      </article>
    </div>
  );
};

export default StoryReader;
