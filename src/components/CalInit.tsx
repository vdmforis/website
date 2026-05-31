"use client";

import { useEffect } from "react";
import { getCalApi } from "@calcom/embed-react";
import { contact } from "@/lib/contact";

/**
 * Initialises the Cal.com embed once per session.
 * Renders nothing; mounted at the root layout.
 *
 * Any element with the data attributes:
 *   data-cal-namespace="intake"
 *   data-cal-link="team/vdmforis/intake"
 *   data-cal-config='{"layout":"month_view"}'
 * will trigger the Cal modal when clicked.
 */
export function CalInit() {
  useEffect(() => {
    (async () => {
      try {
        // Use Cal.eu's embed bundle so the modal hits the right instance
        // (default getCalApi targets app.cal.com which 404s for cal.eu teams).
        const cal = await getCalApi({
          namespace: contact.bookingNamespace,
          embedJsUrl: "https://app.cal.eu/embed/embed.js",
        });
        cal("ui", {
          hideEventTypeDetails: false,
          layout: "month_view",
        });
      } catch (err) {
        // Silently ignore — booking falls back to anchor href.
        console.warn("[Cal] init failed", err);
      }
    })();
  }, []);

  return null;
}
