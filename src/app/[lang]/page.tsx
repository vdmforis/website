import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { HomePage } from "@/components/home/HomePage";
import { home } from "@/i18n/home";
import { isForeignLocale } from "@/lib/i18n";
import { translatedPageMetadata } from "@/lib/metadata";

export async function generateMetadata({
  params,
}: PageProps<"/[lang]">): Promise<Metadata> {
  const { lang } = await params;
  if (!isForeignLocale(lang)) return {};
  return translatedPageMetadata(lang, "/", home[lang].meta);
}

export default async function LocaleHome({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;
  if (!isForeignLocale(lang)) notFound();
  return <HomePage locale={lang} />;
}
