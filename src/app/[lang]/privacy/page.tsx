import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PrivacyContent, privacyMeta } from "@/components/legal/PrivacyContent";
import { isForeignLocale } from "@/lib/i18n";
import { translatedPageMetadata } from "@/lib/metadata";

export async function generateMetadata({
  params,
}: PageProps<"/[lang]/privacy">): Promise<Metadata> {
  const { lang } = await params;
  if (!isForeignLocale(lang)) return {};
  return translatedPageMetadata(lang, "/privacy", privacyMeta[lang]);
}

export default async function LocalePrivacy({ params }: PageProps<"/[lang]/privacy">) {
  const { lang } = await params;
  if (!isForeignLocale(lang)) notFound();
  return <PrivacyContent locale={lang} />;
}
