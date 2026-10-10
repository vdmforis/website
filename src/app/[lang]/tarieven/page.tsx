import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { TarievenContent } from "@/components/pages/TarievenContent";
import { tarievenText } from "@/i18n/tarieven";
import { isForeignLocale } from "@/lib/i18n";
import { translatedPageMetadata } from "@/lib/metadata";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  if (!isForeignLocale(lang)) return {};
  return translatedPageMetadata(lang, "/tarieven", tarievenText[lang].meta);
}

export default async function Page({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!isForeignLocale(lang)) notFound();
  return <TarievenContent locale={lang} />;
}
