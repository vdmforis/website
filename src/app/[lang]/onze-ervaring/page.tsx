import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ErvaringContent, ervaringText } from "@/components/pages/ErvaringContent";
import { isForeignLocale } from "@/lib/i18n";
import { translatedPageMetadata } from "@/lib/metadata";

export async function generateMetadata({
  params,
}: PageProps<"/[lang]/onze-ervaring">): Promise<Metadata> {
  const { lang } = await params;
  if (!isForeignLocale(lang)) return {};
  return translatedPageMetadata(lang, "/onze-ervaring", ervaringText[lang].meta);
}

export default async function Page({ params }: PageProps<"/[lang]/onze-ervaring">) {
  const { lang } = await params;
  if (!isForeignLocale(lang)) notFound();
  return <ErvaringContent locale={lang} />;
}
