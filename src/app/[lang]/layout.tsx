import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { foreignLocales, isForeignLocale, ogLocale } from "@/lib/i18n";
import { home } from "@/i18n/home";

/**
 * English (/en) and Spanish (/es) versions of the translated pages.
 * Dutch stays at the root. Only "en" and "es" are valid; anything else 404s.
 */
export const dynamicParams = false;

export function generateStaticParams() {
  return foreignLocales.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: LayoutProps<"/[lang]">): Promise<Metadata> {
  const { lang } = await params;
  if (!isForeignLocale(lang)) return {};
  return {
    title: { default: home[lang].meta.title, template: "%s · Foris" },
    description: home[lang].meta.description,
    openGraph: {
      type: "website",
      siteName: "Foris",
      locale: ogLocale[lang],
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: LayoutProps<"/[lang]">) {
  const { lang } = await params;
  if (!isForeignLocale(lang)) notFound();
  return children;
}
