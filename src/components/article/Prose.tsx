/* Presentational helpers shared by all articles (moved from the article pages). */

export function Section({ children }: { children: React.ReactNode }) {
  return <section className="mt-12 first:mt-0">{children}</section>;
}

export function H2({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="font-heading text-2xl text-navy md:text-3xl scroll-mt-24">
      {children}
    </h2>
  );
}

export function H3({ children }: { children: React.ReactNode }) {
  return <h3 className="mt-6 font-heading text-lg text-navy">{children}</h3>;
}

export function Lead({ children }: { children: React.ReactNode }) {
  return (
    <p className="border-l-4 border-terracotta pl-6 text-lg leading-relaxed text-foreground/85">
      {children}
    </p>
  );
}

export function P({ children }: { children: React.ReactNode }) {
  return (
    <p className="mt-4 text-base leading-relaxed text-foreground/85">
      {children}
    </p>
  );
}

export function UL({ children }: { children: React.ReactNode }) {
  return <ul className="mt-4 space-y-2 text-foreground/85">{children}</ul>;
}

export function OL({ children }: { children: React.ReactNode }) {
  return (
    <ol className="mt-4 list-decimal space-y-2 pl-6 text-foreground/85 marker:text-terracotta marker:font-mono">
      {children}
    </ol>
  );
}

export function Callout({ children }: { children: React.ReactNode }) {
  return (
    <div className="mt-6 rounded-2xl border border-olive/40 bg-olive/5 p-6 text-foreground/85">
      {children}
    </div>
  );
}

export function Step({
  number,
  title,
  children,
  className = "mt-6",
}: {
  number: number;
  title: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`${className} grid gap-4 rounded-2xl border border-border bg-card p-6 md:grid-cols-[80px_1fr]`}
    >
      <p className="font-heading text-4xl text-terracotta">{`0${number}`}</p>
      <div>
        <p className="font-heading text-xl text-navy">{title}</p>
        <div className="mt-2 [&_p:first-child]:mt-0">{children}</div>
      </div>
    </div>
  );
}
