import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CookiesContent, cookiesMeta } from "@/components/legal/CookiesContent";
import { isForeignLocale } from "@/lib/i18n";
import { translatedPageMetadata } from "@/lib/metadata";

export async function generateMetadata({
  params,
}: PageProps<"/[lang]/cookies">): Promise<Metadata> {
  const { lang } = await params;
  if (!isForeignLocale(lang)) return {};
  return translatedPageMetadata(lang, "/cookies", cookiesMeta[lang]);
}

export default async function LocaleCookies({ params }: PageProps<"/[lang]/cookies">) {
  const { lang } = await params;
  if (!isForeignLocale(lang)) notFound();
  return <CookiesContent locale={lang} />;
}
