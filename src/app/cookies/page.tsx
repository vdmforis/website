import type { Metadata } from "next";
import { CookiesContent, cookiesMeta } from "@/components/legal/CookiesContent";
import { translatedPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = translatedPageMetadata("nl", "/cookies", cookiesMeta.nl);

export default function CookiesPage() {
  return <CookiesContent locale="nl" />;
}
