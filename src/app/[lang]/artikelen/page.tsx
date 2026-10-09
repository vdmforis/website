import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArtikelenContent, artikelenText } from "@/components/pages/ArtikelenContent";
import { isForeignLocale } from "@/lib/i18n";
import { translatedPageMetadata } from "@/lib/metadata";

export async function generateMetadata({
  params,
}: PageProps<"/[lang]/artikelen">): Promise<Metadata> {
  const { lang } = await params;
  if (!isForeignLocale(lang)) return {};
  return translatedPageMetadata(lang, "/artikelen", artikelenText[lang].meta);
}

export default async function Page({ params }: PageProps<"/[lang]/artikelen">) {
  const { lang } = await params;
  if (!isForeignLocale(lang)) notFound();
  return <ArtikelenContent locale={lang} />;
}
