import type { Metadata } from "next";
import { ArticlePage, articleMetadata } from "@/content/articles";

export const metadata: Metadata = articleMetadata("costa-azahar-vs-costa-blanca", "nl");

export default function Page() {
  return <ArticlePage slug="costa-azahar-vs-costa-blanca" locale="nl" />;
}
