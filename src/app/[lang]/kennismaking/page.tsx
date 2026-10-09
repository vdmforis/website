import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { KennismakingContent, kennismakingText } from "@/components/pages/KennismakingContent";
import { isForeignLocale } from "@/lib/i18n";
import { translatedPageMetadata } from "@/lib/metadata";

export async function generateMetadata({
  params,
}: PageProps<"/[lang]/kennismaking">): Promise<Metadata> {
  const { lang } = await params;
  if (!isForeignLocale(lang)) return {};
  return translatedPageMetadata(lang, "/kennismaking", kennismakingText[lang].meta);
}

export default async function Page({ params }: PageProps<"/[lang]/kennismaking">) {
  const { lang } = await params;
  if (!isForeignLocale(lang)) notFound();
  return <KennismakingContent locale={lang} />;
}
