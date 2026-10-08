import type { Locale } from "@/lib/i18n";

/**
 * Central source of truth for contact details used across the site.
 * Update the values here; every component picks them up automatically.
 */

export const contact = {
  email: "info@vdmforis.com",
  /**
   * Phone number in international format (no spaces, no plus).
   * Used for both tel: and WhatsApp wa.me links.
   * NB: Dennis is bezig met WhatsApp Business onboarding op dit nummer —
   * wa.me/<nummer> blijft werken en routet automatisch naar het Business
   * account zodra de overgang klaar is.
   */
  whatsappNumber: "31614967704",
  /**
   * Human-readable phone number for display.
   */
  phoneDisplay: "+31 6 14 96 77 04",
  /**
   * Prefilled WhatsApp message — already URL-encoded.
   */
  whatsappPrefill:
    "Hoi%20Dennis%2C%20ik%20heb%20een%20vraag%20over%20mijn%20woning%20rond%20Castell%C3%B3n.",
  /** On-site booking page — replaces the old cal.eu integration. */
  bookingPath: "/kennismaking",
};

/** Prefilled WhatsApp message per site language (plain text, encoded below). */
const whatsappPrefillByLocale: Record<Locale, string> = {
  nl: "Hoi Dennis, ik heb een vraag over mijn woning rond Castellón.",
  en: "Hi Dennis, I have a question about my home in the Castellón area.",
  es: "Hola Dennis, tengo una pregunta sobre mi vivienda en la zona de Castellón.",
};

export function whatsappLink(locale: Locale = "nl"): string {
  const text =
    locale === "nl"
      ? contact.whatsappPrefill
      : encodeURIComponent(whatsappPrefillByLocale[locale]);
  return `https://wa.me/${contact.whatsappNumber}?text=${text}`;
}

export function mailLink(): string {
  return `mailto:${contact.email}`;
}

export function telLink(): string {
  return `tel:+${contact.whatsappNumber}`;
}
