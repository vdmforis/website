import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { DienstenContent, dienstenText } from "@/components/pages/DienstenContent";
import { isForeignLocale } from "@/lib/i18n";
import { translatedPageMetadata } from "@/lib/metadata";

export async function generateMetadata({
  params,
}: PageProps<"/[lang]/diensten">): Promise<Metadata> {
  const { lang } = await params;
  if (!isForeignLocale(lang)) return {};
  return translatedPageMetadata(lang, "/diensten", dienstenText[lang].meta);
}

export default async function Page({ params }: PageProps<"/[lang]/diensten">) {
  const { lang } = await params;
  if (!isForeignLocale(lang)) notFound();
  return <DienstenContent locale={lang} />;
}
