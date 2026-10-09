import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { GidsContent, gidsText } from "@/components/pages/GidsContent";
import { isForeignLocale } from "@/lib/i18n";
import { translatedPageMetadata } from "@/lib/metadata";

export async function generateMetadata({
  params,
}: PageProps<"/[lang]/gratis-gids">): Promise<Metadata> {
  const { lang } = await params;
  if (!isForeignLocale(lang)) return {};
  return translatedPageMetadata(lang, "/gratis-gids", gidsText[lang].meta);
}

export default async function Page({ params }: PageProps<"/[lang]/gratis-gids">) {
  const { lang } = await params;
  if (!isForeignLocale(lang)) notFound();
  return <GidsContent locale={lang} />;
}
