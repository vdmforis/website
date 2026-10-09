import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { OverOnsContent, overOnsText } from "@/components/pages/OverOnsContent";
import { isForeignLocale } from "@/lib/i18n";
import { translatedPageMetadata } from "@/lib/metadata";

export async function generateMetadata({
  params,
}: PageProps<"/[lang]/over-ons">): Promise<Metadata> {
  const { lang } = await params;
  if (!isForeignLocale(lang)) return {};
  return translatedPageMetadata(lang, "/over-ons", overOnsText[lang].meta);
}

export default async function Page({ params }: PageProps<"/[lang]/over-ons">) {
  const { lang } = await params;
  if (!isForeignLocale(lang)) notFound();
  return <OverOnsContent locale={lang} />;
}
