import { NextResponse, type NextRequest } from "next/server";
import {
  LOCALE_COOKIE,
  defaultLocale,
  isLocale,
  localizedPath,
  negotiateLocale,
} from "@/lib/i18n";

/**
 * Language choice for the Dutch root URLs that also exist in EN/ES.
 * 1. A saved choice (cookie set by the language switcher) wins.
 * 2. Otherwise use the browser's Accept-Language (first visit).
 * Dutch -> serve the page as is. EN/ES -> temporary redirect to /en or /es.
 * Explicit /en and /es URLs are never redirected.
 */
export function proxy(request: NextRequest) {
  // Only plain page loads. Server Actions are POSTs to the same path.
  if (request.method !== "GET" && request.method !== "HEAD") return NextResponse.next();
  if (request.headers.has("next-action")) return NextResponse.next();

  const saved = request.cookies.get(LOCALE_COOKIE)?.value;
  const locale = isLocale(saved)
    ? saved
    : negotiateLocale(request.headers.get("accept-language"));

  if (locale === defaultLocale) return NextResponse.next();

  const url = request.nextUrl.clone();
  // Keeps the query string (e.g. /offerte?dienst=papierwinkel).
  url.pathname = localizedPath(locale, request.nextUrl.pathname);
  const response = NextResponse.redirect(url, 307);
  response.headers.set("Cache-Control", "private, no-store");
  response.headers.set("Vary", "Accept-Language, Cookie");
  return response;
}

export const config = {
  // Keep in sync with `translatedPaths` in src/lib/i18n.ts (must be literals).
  matcher: [
    "/",
    "/diensten",
    "/onze-ervaring",
    "/over-ons",
    "/artikelen",
    "/artikelen/costa-azahar-vs-costa-blanca",
    "/artikelen/nie-aanvragen-spanje-stappenplan",
    "/artikelen/nieuwbouw-of-bestaande-bouw-spanje",
    "/artikelen/modelo-036-nederlandse-bv",
    "/gratis-gids",
    "/offerte",
    "/kennismaking",
    "/onderhoud",
    "/onderhoud/grau-de-castellon",
    "/onderhoud/castellon",
    "/onderhoud/benicassim",
    "/tarieven",
    "/privacy",
    "/cookies",
  ],
};
