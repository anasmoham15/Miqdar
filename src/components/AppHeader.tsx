interface AppHeaderProps {
  title: string;
  arabic?: string;
  subtitle?: string;
}

export const AppHeader = ({ title, arabic, subtitle }: AppHeaderProps) => {
  return (
    <header className="px-5 pb-4 pt-8">
      <div className="flex items-end justify-between">
        <div>
          <h1 className="font-display text-3xl font-semibold tracking-tight text-foreground">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-1 text-sm text-muted-foreground">{subtitle}</p>
          )}
        </div>
        {arabic && (
          <span className="font-arabic text-2xl text-primary/80">{arabic}</span>
        )}
      </div>
    </header>
  );
};
