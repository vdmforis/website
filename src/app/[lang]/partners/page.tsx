import PartnersContent from "@/components/pages/PartnersContent";
import { partnersText } from "@/i18n/partners";
import { locales, localizedPath, languageAlternates } from "@/lib/i18n";
import type { Metadata } from "next";

type Params = Promise<{ lang: string }>;

export async function generateStaticParams() {
  return locales
    .filter((l) => l !== "nl")
    .map((lang) => ({
      lang,
    }));
}

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const { lang } = await params;
  const locale = lang === "en" || lang === "es" ? lang : "nl";
  const meta = partnersText[locale].meta;

  return {
    ...meta,
    alternates: {
      canonical: localizedPath(locale, "/partners"),
      languages: languageAlternates(locale, "/partners"),
    },
  };
}

export default async function LocalizedPartnersPage({
  params,
}: {
  params: Params;
}) {
  const { lang } = await params;
  const locale = lang === "en" || lang === "es" ? lang : "nl";
  return <PartnersContent locale={locale} />;
}
