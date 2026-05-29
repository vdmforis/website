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
        const cal = await getCalApi({ namespace: contact.bookingNamespace });
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
