import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { OnderhoudContent } from "@/components/pages/OnderhoudContent";
import { onderhoudText } from "@/i18n/onderhoud";
import { isForeignLocale } from "@/lib/i18n";
import { translatedPageMetadata } from "@/lib/metadata";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  if (!isForeignLocale(lang)) return {};
  return translatedPageMetadata(lang, "/onderhoud", onderhoudText[lang].meta);
}

export default async function Page({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!isForeignLocale(lang)) notFound();
  return <OnderhoudContent locale={lang} />;
}
