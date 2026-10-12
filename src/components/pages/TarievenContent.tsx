import Link from "next/link";
import { localizedPath, whatsappLink, type Locale } from "@/lib/i18n";
import { tarievenText } from "@/i18n/tarieven";

export function TarievenContent({ locale }: { locale: Locale }) {
  const t = tarievenText[locale];
  const lp = (path: string) => localizedPath(locale, path);

  return (
    <main className="flex-1">
      <section className="border-b border-border bg-gradient-to-br from-cream via-cream to-secondary/60">
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-terracotta">
            {t.eyebrow}
          </p>
          <h1 className="mt-4 font-heading text-4xl leading-[1.1] text-navy md:text-5xl">
            {t.h1}
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-foreground/80">{t.intro}</p>
          <p className="mt-4 inline-block rounded-lg border border-olive/40 bg-olive/10 px-4 py-2 text-sm font-medium text-foreground">
            {t.vatNote}
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 md:py-24">
        <h2 className="font-heading text-3xl text-navy md:text-4xl">{t.hourlyTitle}</h2>
        <div className="mt-10 space-y-4">
          {t.hourlyItems.map((item) => (
            <article
              key={item.label}
              className="flex flex-col gap-2 rounded-lg border border-border bg-card p-6 shadow-sm md:flex-row md:items-baseline md:justify-between"
            >
              <div className="flex-1">
                <h3 className="font-heading text-lg text-navy">{item.label}</h3>
                {item.note && <p className="mt-1 text-sm text-foreground/60">{item.note}</p>}
              </div>
              <p className="font-heading text-xl text-terracotta md:text-2xl">{item.price}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-border bg-secondary/40">
        <div className="mx-auto max-w-7xl px-6 py-16 md:py-24">
          <h2 className="font-heading text-3xl text-navy md:text-4xl">{t.packagesTitle}</h2>
          <p className="mt-4 max-w-2xl text-foreground/80">{t.packagesIntro}</p>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <article className="rounded-2xl border border-border bg-card p-8 shadow-sm">
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-olive">
                {t.light.name}
              </p>
              <p className="mt-2 font-heading text-3xl text-navy">{t.light.price}</p>
              <p className="text-sm text-foreground/60">{t.light.visits}</p>
              <p className="mt-4 text-foreground/80">{t.light.for}</p>
            </article>

            <article className="rounded-2xl border-2 border-terracotta bg-card p-8 shadow-sm">
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-olive">
                {t.standard.name}
              </p>
              <p className="mt-2 font-heading text-3xl text-navy">{t.standard.price}</p>
              <p className="text-sm text-foreground/60">{t.standard.visits}</p>
              <p className="mt-4 text-foreground/80">{t.standard.for}</p>
            </article>

            <article className="rounded-2xl border border-border bg-card p-8 shadow-sm">
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-olive">
                {t.villa.name}
              </p>
              <p className="mt-2 font-heading text-3xl text-navy">{t.villa.price}</p>
              <p className="text-sm text-foreground/60">{t.villa.visits}</p>
              <p className="mt-4 text-foreground/80">{t.villa.for}</p>
            </article>
          </div>

          <p className="mt-6 text-sm text-foreground/60">{t.allInclude}</p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 md:py-24">
        <h2 className="font-heading text-3xl text-navy md:text-4xl">{t.fixedTitle}</h2>
        <div className="mt-10 space-y-4">
          {t.fixedItems.map((item) => (
            <article
              key={item.label}
              className="flex flex-col gap-2 rounded-lg border border-border bg-card p-6 shadow-sm md:flex-row md:items-baseline md:justify-between"
            >
              <div className="flex-1">
                <h3 className="font-heading text-lg text-navy">{item.label}</h3>
                {item.note && <p className="mt-1 text-sm text-foreground/60">{item.note}</p>}
              </div>
              <p className="font-heading text-xl text-terracotta md:text-2xl">{item.price}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-t border-border bg-secondary/50">
        <div className="mx-auto max-w-3xl px-6 py-16 text-center md:py-20">
          <h2 className="font-heading text-3xl text-navy md:text-4xl">{t.ctaTitle}</h2>
          <p className="mt-4 text-foreground/80">{t.ctaBody}</p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href={whatsappLink(locale)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-full bg-terracotta px-8 py-3 text-base font-medium text-cream transition-colors hover:bg-terracotta/90"
            >
              {t.ctaWhatsApp}
            </a>
            <Link
              href={lp("/offerte")}
              className="inline-block rounded-full border border-terracotta/40 px-8 py-3 text-base font-medium text-terracotta transition-colors hover:bg-terracotta/10"
            >
              {t.ctaQuote}
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
