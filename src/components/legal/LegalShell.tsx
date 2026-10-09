import Link from "next/link";

export function LegalShell({
  eyebrow,
  title,
  intro,
  children,
}: {
  eyebrow: string;
  title: string;
  intro: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <main className="flex-1">
      <section className="border-b border-border bg-cream">
        <div className="mx-auto max-w-3xl px-6 py-16 md:py-20">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-terracotta">
            {eyebrow}
          </p>
          <h1 className="mt-4 font-heading text-4xl text-navy md:text-5xl">
            {title}
          </h1>
          <p className="mt-6 text-foreground/80">{intro}</p>
        </div>
      </section>
      <article className="mx-auto max-w-3xl space-y-10 px-6 py-12 md:py-16">
        {children}
      </article>
    </main>
  );
}

export function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section>
      <h2 className="font-heading text-2xl text-navy md:text-3xl">{title}</h2>
      <div className="mt-4 space-y-3 text-foreground/85">{children}</div>
    </section>
  );
}

export function BackHome({ href, label }: { href: string; label: string }) {
  return (
    <p className="mt-6">
      <Link href={href} className="text-terracotta hover:underline">
        ← {label}
      </Link>
    </p>
  );
}

export function Mail() {
  return (
    <a href="mailto:info@vdmforis.com" className="text-terracotta hover:underline">
      info@vdmforis.com
    </a>
  );
}
