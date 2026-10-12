import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LocalContent } from "@/components/pages/LocalContent";
import { localContent, type LocalArea } from "@/i18n/local";
import { languageAlternates } from "@/lib/i18n";

const areas: LocalArea[] = ["grau-de-castellon", "castellon", "benicassim"];

export async function generateStaticParams() {
  return areas.map((area) => ({ area }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ area: string }>;
}): Promise<Metadata> {
  const { area } = await params;
  if (!areas.includes(area as LocalArea)) return {};

  const t = localContent.nl[area as LocalArea].meta;
  const path = `/onderhoud/${area}`;

  return {
    title: { absolute: t.title },
    description: t.description,
    alternates: languageAlternates("nl", path),
    openGraph: {
      type: "website",
      siteName: "Foris",
      locale: "nl_NL",
      alternateLocale: ["en_GB", "es_ES"],
      url: path,
      title: t.title,
      description: t.description,
      images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: t.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: t.title,
      description: t.description,
      images: ["/opengraph-image"],
    },
    robots: { index: true, follow: true },
  };
}

export default async function Page({ params }: { params: Promise<{ area: string }> }) {
  const { area } = await params;
  if (!areas.includes(area as LocalArea)) notFound();

  return <LocalContent locale="nl" area={area as LocalArea} />;
}
