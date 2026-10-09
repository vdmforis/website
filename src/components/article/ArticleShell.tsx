import Image from "next/image";
import Link from "next/link";
import { localizedPath, type ArticleSlug, type Locale } from "@/lib/i18n";
import { articleMeta } from "@/content/articles/meta";

const SITE_URL = "https://www.vdmforis.com";

const shellText = {
  nl: { back: "← Artikelen", by: "Geschreven door Dennis van der Meulen", read: "lezen" },
  en: { back: "← Articles", by: "Written by Dennis van der Meulen", read: "read" },
  es: { back: "← Artículos", by: "Escrito por Dennis van der Meulen", read: "de lectura" },
} satisfies Record<Locale, unknown>;

/** Header, JSON-LD and article wrapper shared by every article in every language. */
export function ArticleShell({
  slug,
  locale,
  children,
}: {
  slug: ArticleSlug;
  locale: Locale;
  children: React.ReactNode;
}) {
  const meta = articleMeta[slug];
  const t = meta.text[locale];
  const s = shellText[locale];
  const path = localizedPath(locale, `/artikelen/${slug}`);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: t.title,
    description: t.description,
    inLanguage: locale,
    datePublished: meta.publishDate,
    dateModified: meta.updatedDate,
    author: {
      "@type": "Person",
      name: "Dennis van der Meulen",
      url: `${SITE_URL}${localizedPath(locale, "/over-ons")}`,
    },
    publisher: {
      "@type": "Organization",
      name: "Van der Meulen Foris B.V.",
      url: SITE_URL,
    },
    mainEntityOfPage: `${SITE_URL}${path}`,
  };

  const headerInner = (
    <div className="mx-auto max-w-3xl px-6 py-16 md:py-24">
      <Link
        href={localizedPath(locale, "/artikelen")}
        className="font-mono text-xs uppercase tracking-[0.18em] text-terracotta hover:underline"
      >
        {s.back}
      </Link>
      <h1 className="mt-6 font-heading text-4xl leading-[1.15] text-navy md:text-5xl">
        {t.title}
      </h1>
      <p className="mt-6 max-w-2xl text-lg text-foreground/80">{t.description}</p>
      <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
        <span>{s.by}</span>
        <span>·</span>
        <time dateTime={meta.publishDate}>{t.dateLabel}</time>
        <span>·</span>
        <span>
          {meta.readingTime} {s.read}
        </span>
      </div>
    </div>
  );

  return (
    <main className="flex-1">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {meta.image ? (
        <header className="relative border-b border-border overflow-hidden">
          <Image
            src={meta.image}
            alt={t.imageAlt ?? ""}
            fill
            priority
            sizes="100vw"
            className="-z-10 object-cover object-center"
          />
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-cream/95 via-cream/85 to-cream/40" />
          {headerInner}
        </header>
      ) : (
        <header className="border-b border-border bg-gradient-to-br from-cream via-cream to-secondary/40">
          {headerInner}
        </header>
      )}

      <article className="mx-auto max-w-3xl px-6 py-16 md:py-20">{children}</article>
    </main>
  );
}
