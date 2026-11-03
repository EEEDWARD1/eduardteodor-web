"use client";

import posthog from "posthog-js";
import {
  analyticsEnabled,
  getAnalyticsConsent,
} from "@/app/lib/analytics-consent";

type LogAttributes = Record<string, boolean | number | string>;

export const posthogLogger = {
  info(message: string, attributes: LogAttributes = {}) {
    if (analyticsEnabled && getAnalyticsConsent() === "accepted") {
      posthog.logger.info(message, attributes);
    }
  },
};
