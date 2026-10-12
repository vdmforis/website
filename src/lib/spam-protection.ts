/**
 * Spam protection utilities for server actions.
 * Silently pretends success for bots without sending email.
 */

const MINIMUM_FILL_TIME_MS = 3000;

export type SpamCheckResult =
  | { isSpam: false }
  | { isSpam: true; reason: "honeypot" | "fill-time" };

/**
 * Check if a form submission is likely spam.
 * Returns { isSpam: true } if the submission fails spam checks.
 */
export function checkSpam(formData: FormData): SpamCheckResult {
  // 1. Honeypot check: hidden field that real users should never fill
  const honeypot = formData.get("website");
  if (honeypot && typeof honeypot === "string" && honeypot.trim() !== "") {
    return { isSpam: true, reason: "honeypot" };
  }

  // 2. Minimum fill-time check: reject submissions under 3 seconds
  const startTimeStr = formData.get("startTime");
  if (startTimeStr && typeof startTimeStr === "string") {
    const startTime = Number(startTimeStr);
    if (Number.isFinite(startTime)) {
      const elapsed = Date.now() - startTime;
      if (elapsed < MINIMUM_FILL_TIME_MS) {
        return { isSpam: true, reason: "fill-time" };
      }
    }
  }

  return { isSpam: false };
}
