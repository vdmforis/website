import Link from "next/link";
import { localizedPath, whatsappLink, type Locale } from "@/lib/i18n";
import { verhuurbeheerText } from "@/i18n/verhuurbeheer";

export function VerhuurbeheerContent({ locale }: { locale: Locale }) {
  const t = verhuurbeheerText[locale];
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
          <p className="mt-4 text-sm text-foreground/60">{t.longTermNote}</p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 md:py-24">
        <h2 className="font-heading text-3xl text-navy md:text-4xl">{t.howItWorksTitle}</h2>
        <div className="mt-10 space-y-8">
          {t.howItWorksSteps.map((item) => (
            <article key={item.step} className="grid gap-4 md:grid-cols-[auto_1fr]">
              <div className="md:w-80">
                <p className="font-mono text-xs uppercase tracking-[0.18em] text-terracotta">
                  {item.step}
                </p>
              </div>
              <p className="text-foreground/80">{item.desc}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-border bg-secondary/40">
        <div className="mx-auto max-w-7xl px-6 py-16 md:py-24">
          <h2 className="font-heading text-3xl text-navy md:text-4xl">{t.whatsIncludedTitle}</h2>
          <ul className="mt-10 grid gap-4 md:grid-cols-2">
            {t.whatsIncludedItems.map((item) => (
              <li key={item} className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-terracotta" />
                <span className="text-foreground/85">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 md:py-24">
        <div className="mx-auto max-w-2xl">
          <h2 className="font-heading text-3xl text-navy md:text-4xl">{t.pricingTitle}</h2>
          <p className="mt-6 text-lg text-foreground/80">{t.pricingBody}</p>
          <p className="mt-4 inline-block rounded-lg border border-olive/40 bg-olive/10 px-4 py-2 text-sm font-medium text-foreground">
            {locale === "nl"
              ? "Prijs op aanvraag"
              : locale === "en"
                ? "Price on request"
                : "Precio a consultar"}
          </p>
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
