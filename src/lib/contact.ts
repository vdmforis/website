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
    "Hoi%20Dennis%2C%20ik%20heb%20een%20vraag%20over%20een%20huis%20kopen%20in%20Spanje.",
  /** On-site booking page — replaces the old cal.eu integration. */
  bookingPath: "/kennismaking",
};

export function whatsappLink(): string {
  return `https://wa.me/${contact.whatsappNumber}?text=${contact.whatsappPrefill}`;
}

export function mailLink(): string {
  return `mailto:${contact.email}`;
}

export function telLink(): string {
  return `tel:+${contact.whatsappNumber}`;
}
