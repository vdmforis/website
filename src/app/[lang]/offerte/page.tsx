import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { OfferteContent, offerteText } from "@/components/pages/OfferteContent";
import { isForeignLocale } from "@/lib/i18n";
import { translatedPageMetadata } from "@/lib/metadata";

export async function generateMetadata({
  params,
}: PageProps<"/[lang]/offerte">): Promise<Metadata> {
  const { lang } = await params;
  if (!isForeignLocale(lang)) return {};
  return translatedPageMetadata(lang, "/offerte", offerteText[lang].meta);
}

export default async function LocaleOffertePage({
  params,
  searchParams,
}: PageProps<"/[lang]/offerte">) {
  const { lang } = await params;
  if (!isForeignLocale(lang)) notFound();
  const { dienst } = await searchParams;
  return (
    <OfferteContent locale={lang} dienst={typeof dienst === "string" ? dienst : undefined} />
  );
}
