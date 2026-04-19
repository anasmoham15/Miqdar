import { Link, useParams } from "react-router-dom";
import { ArrowLeft, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { categoryMeta, getStoryById } from "@/data/stories";

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

  return (
    <div className="animate-fade-in pb-8">
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

      {/* Body */}
      <article className="space-y-4 px-5 pt-6">
        {story.content.map((para, i) => (
          <p
            key={i}
            className="text-[15px] leading-relaxed text-foreground/90 first-letter:font-display first-letter:text-primary"
          >
            {para}
          </p>
        ))}

        <div className="mt-8 flex items-center justify-center">
          <span className="font-arabic text-2xl text-primary/40">۞</span>
        </div>

        {/* Source attribution */}
        <div className="mt-6 rounded-xl border border-primary/15 bg-primary/5 p-4 text-[12px] leading-relaxed text-muted-foreground">
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
