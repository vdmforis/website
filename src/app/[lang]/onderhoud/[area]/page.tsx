import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LocalContent } from "@/components/pages/LocalContent";
import { localContent, type LocalArea } from "@/i18n/local";
import { isForeignLocale } from "@/lib/i18n";
import { translatedPageMetadata } from "@/lib/metadata";

const areas: LocalArea[] = ["grau-de-castellon", "castellon", "benicassim"];

export async function generateStaticParams() {
  return areas.map((area) => ({ area }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string; area: string }>;
}): Promise<Metadata> {
  const { lang, area } = await params;
  if (!isForeignLocale(lang)) return {};
  if (!areas.includes(area as LocalArea)) return {};

  const t = localContent[lang][area as LocalArea].meta;
  return translatedPageMetadata(lang, `/onderhoud/${area}`, t);
}

export default async function Page({
  params,
}: {
  params: Promise<{ lang: string; area: string }>;
}) {
  const { lang, area } = await params;
  if (!isForeignLocale(lang)) notFound();
  if (!areas.includes(area as LocalArea)) notFound();

  return <LocalContent locale={lang} area={area as LocalArea} />;
}
