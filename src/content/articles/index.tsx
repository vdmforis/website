import type { ArticleSlug, Locale } from "@/lib/i18n";
import CostaNl from "./costa-azahar-vs-costa-blanca/nl";
import CostaEn from "./costa-azahar-vs-costa-blanca/en";
import CostaEs from "./costa-azahar-vs-costa-blanca/es";
import NieNl from "./nie-aanvragen-spanje-stappenplan/nl";
import NieEn from "./nie-aanvragen-spanje-stappenplan/en";
import NieEs from "./nie-aanvragen-spanje-stappenplan/es";
import NieuwbouwNl from "./nieuwbouw-of-bestaande-bouw-spanje/nl";
import NieuwbouwEn from "./nieuwbouw-of-bestaande-bouw-spanje/en";
import NieuwbouwEs from "./nieuwbouw-of-bestaande-bouw-spanje/es";
import ModeloNl from "./modelo-036-nederlandse-bv/nl";
import ModeloEn from "./modelo-036-nederlandse-bv/en";
import ModeloEs from "./modelo-036-nederlandse-bv/es";
import type { Metadata } from "next";
import { ArticleShell } from "@/components/article/ArticleShell";
import { translatedPageMetadata } from "@/lib/metadata";
import { articleMeta } from "./meta";

const bodies: Record<ArticleSlug, Record<Locale, () => React.ReactNode>> = {
  "costa-azahar-vs-costa-blanca": { nl: CostaNl, en: CostaEn, es: CostaEs },
  "nie-aanvragen-spanje-stappenplan": { nl: NieNl, en: NieEn, es: NieEs },
  "nieuwbouw-of-bestaande-bouw-spanje": { nl: NieuwbouwNl, en: NieuwbouwEn, es: NieuwbouwEs },
  "modelo-036-nederlandse-bv": { nl: ModeloNl, en: ModeloEn, es: ModeloEs },
};

export function ArticlePage({ slug, locale }: { slug: ArticleSlug; locale: Locale }) {
  const Body = bodies[slug][locale];
  return (
    <ArticleShell slug={slug} locale={locale}>
      <Body />
    </ArticleShell>
  );
}

export function articleMetadata(slug: ArticleSlug, locale: Locale): Metadata {
  const meta = articleMeta[slug];
  const t = meta.text[locale];
  return translatedPageMetadata(
    locale,
    `/artikelen/${slug}`,
    { title: `${t.title} · Foris`, description: t.description },
    {
      publishedTime: meta.publishDate,
      modifiedTime: meta.updatedDate,
      authors: ["Dennis van der Meulen"],
    },
  );
}
