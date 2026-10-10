import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { VerhuurbeheerContent } from "@/components/pages/VerhuurbeheerContent";
import { verhuurbeheerText } from "@/i18n/verhuurbeheer";
import { isForeignLocale } from "@/lib/i18n";
import { translatedPageMetadata } from "@/lib/metadata";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  if (!isForeignLocale(lang)) return {};
  return translatedPageMetadata(lang, "/verhuurbeheer", verhuurbeheerText[lang].meta);
}

export default async function Page({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!isForeignLocale(lang)) notFound();
  return <VerhuurbeheerContent locale={lang} />;
}
