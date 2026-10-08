import type { Metadata } from "next";
import { HomePage } from "@/components/home/HomePage";
import { home } from "@/i18n/home";
import { translatedPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = translatedPageMetadata("nl", "/", home.nl.meta);

export default function Home() {
  return <HomePage locale="nl" />;
}
