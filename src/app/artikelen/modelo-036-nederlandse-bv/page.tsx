import type { Metadata } from "next";
import { ArticlePage, articleMetadata } from "@/content/articles";

export const metadata: Metadata = articleMetadata("modelo-036-nederlandse-bv", "nl");

export default function Page() {
  return <ArticlePage slug="modelo-036-nederlandse-bv" locale="nl" />;
}
