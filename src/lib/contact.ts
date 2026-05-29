/**
 * Central source of truth for contact details used across the site.
 * Update the values here; every component picks them up automatically.
 */

export const contact = {
  email: "info@vdmforis.com",
  /**
   * Phone number in international format (no spaces, no plus).
   * Used for both tel: and WhatsApp wa.me links.
   * TODO: Dennis — vervang door het echte WhatsApp-nummer voor zaken.
   */
  whatsappNumber: "34600000000",
  /**
   * Human-readable phone number for display.
   */
  phoneDisplay: "+34 600 00 00 00",
  /**
   * Prefilled WhatsApp message — already URL-encoded.
   */
  whatsappPrefill:
    "Hoi%20Dennis%2C%20ik%20heb%20een%20vraag%20over%20een%20huis%20kopen%20in%20Spanje.",
  /**
   * Calendly / Cal.com link voor het direct boeken van een gesprek.
   * TODO: Dennis — vervang door echte boekings-URL zodra Calendly opgezet is.
   */
  bookingUrl: "/#contact",
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
