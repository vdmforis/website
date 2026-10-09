import type { Metadata } from "next";
import { DienstenContent, dienstenText } from "@/components/pages/DienstenContent";
import { translatedPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = translatedPageMetadata("nl", "/diensten", dienstenText.nl.meta);

export default function Page() {
  return <DienstenContent locale="nl" />;
}
