import type { Metadata } from "next";
import { OfferteContent, offerteText } from "@/components/pages/OfferteContent";
import { translatedPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = translatedPageMetadata("nl", "/offerte", offerteText.nl.meta);

export default async function OffertePage({
  searchParams,
}: {
  searchParams: Promise<{ dienst?: string }>;
}) {
  const { dienst } = await searchParams;
  return <OfferteContent locale="nl" dienst={dienst} />;
}
