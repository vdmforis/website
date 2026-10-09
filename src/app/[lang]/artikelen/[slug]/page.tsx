import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArticlePage, articleMetadata } from "@/content/articles";
import { articleSlugs, foreignLocales, isForeignLocale, type ArticleSlug } from "@/lib/i18n";

export const dynamicParams = false;

export function generateStaticParams() {
  return foreignLocales.flatMap((lang) => articleSlugs.map((slug) => ({ lang, slug })));
}

function isSlug(value: string): value is ArticleSlug {
  return (articleSlugs as readonly string[]).includes(value);
}

export async function generateMetadata({
  params,
}: PageProps<"/[lang]/artikelen/[slug]">): Promise<Metadata> {
  const { lang, slug } = await params;
  if (!isForeignLocale(lang) || !isSlug(slug)) return {};
  return articleMetadata(slug, lang);
}

export default async function LocaleArticle({
  params,
}: PageProps<"/[lang]/artikelen/[slug]">) {
  const { lang, slug } = await params;
  if (!isForeignLocale(lang) || !isSlug(slug)) notFound();
  return <ArticlePage slug={slug} locale={lang} />;
}
