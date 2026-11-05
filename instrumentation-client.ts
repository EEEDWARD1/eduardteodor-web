import posthog from "posthog-js";
import {
  analyticsEnabled,
  getAnalyticsConsent,
  posthogHost,
  posthogProjectId,
  subscribeToAnalyticsConsent,
} from "@/app/lib/analytics-consent";

let initialized = false;

function synchronizeAnalytics() {
  if (!analyticsEnabled || !posthogProjectId) return;

  if (getAnalyticsConsent() === "accepted") {
    if (initialized) return;
    posthog.init(posthogProjectId, {
      api_host: posthogHost,
      defaults: "2026-08-30",
      capture_pageview: "history_change",
      capture_pageleave: true,
      autocapture: true,
      disable_session_recording: true,
      disable_surveys: true,
      capture_exceptions: true,
      opt_out_capturing_by_default: true,
      opt_out_persistence_by_default: true,
      loaded() {
        if (getAnalyticsConsent() === "accepted") {
          posthog.opt_in_capturing({ captureEventName: false });
        } else {
          posthog.opt_out_capturing();
        }
      },
    });
    initialized = true;
  } else if (initialized) {
    try {
      posthog.opt_out_capturing();
    } finally {
      // Unload analytics listeners and pending requests after withdrawal.
      window.location.reload();
    }
  }
}

function handleConsentChange() {
  try {
    synchronizeAnalytics();
  } catch {
    // Analytics must never prevent visitors from using the portfolio.
    console.warn("PostHog could not update its analytics consent state.");
  }
}

if (analyticsEnabled) {
  subscribeToAnalyticsConsent(handleConsentChange);
  handleConsentChange();
}
