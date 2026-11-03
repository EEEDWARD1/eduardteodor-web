export const posthogProjectId = process.env.NEXT_PUBLIC_POSTHOG_PROJECT_ID;
export const posthogHost =
  process.env.NEXT_PUBLIC_POSTHOG_HOST || "https://eu.i.posthog.com";
export const analyticsEnabled =
  process.env.NODE_ENV === "production" && Boolean(posthogProjectId);
export const openAnalyticsSettings = "open-analytics-settings";

// A new provider requires a new decision; Clarity consent is not reused.
const preferenceKey = "analytics-consent-posthog-v1";
const preferenceChanged = "analytics-consent-changed";
const preferenceLifetime = 180 * 24 * 60 * 60 * 1000;
export type AnalyticsConsent = "accepted" | "rejected" | null;
let sessionChoice: AnalyticsConsent = null;
let useSessionChoice = false;

export function getAnalyticsConsent(): AnalyticsConsent {
  if (useSessionChoice) return sessionChoice;
  let stored: string | null;
  try {
    stored = localStorage.getItem(preferenceKey);
  } catch {
    return sessionChoice;
  }
  if (!stored) return null;
  try {
    const preference = JSON.parse(stored);
    if (
      (preference.choice === "accepted" || preference.choice === "rejected") &&
      typeof preference.expires === "number" &&
      preference.expires > Date.now()
    ) {
      return preference.choice;
    }
  } catch {
    return null;
  }
  return null;
}

export function saveAnalyticsConsent(choice: Exclude<AnalyticsConsent, null>) {
  sessionChoice = choice;
  try {
    localStorage.setItem(
      preferenceKey,
      JSON.stringify({ choice, expires: Date.now() + preferenceLifetime }),
    );
  } catch {
    // Keep the visitor's choice in memory if browser storage is unavailable.
    useSessionChoice = true;
  }
  window.dispatchEvent(new Event(preferenceChanged));
}

export function subscribeToAnalyticsConsent(onChange: () => void) {
  window.addEventListener("storage", onChange);
  window.addEventListener("focus", onChange);
  window.addEventListener(preferenceChanged, onChange);
  return () => {
    window.removeEventListener("storage", onChange);
    window.removeEventListener("focus", onChange);
    window.removeEventListener(preferenceChanged, onChange);
  };
}
