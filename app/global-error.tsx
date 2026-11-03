"use client";

import NextError from "next/error";
import { useEffect } from "react";
import posthog from "posthog-js";
import {
  analyticsEnabled,
  getAnalyticsConsent,
} from "@/app/lib/analytics-consent";
import { posthogLogger } from "@/app/lib/posthog-logger";

export default function GlobalError({
  error,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    if (analyticsEnabled && getAnalyticsConsent() === "accepted") {
      posthog.captureException(error);
      posthogLogger.info("global error boundary rendered", {
        has_digest: Boolean(error.digest),
      });
    }
  }, [error]);

  return (
    <html lang="en">
      <body>
        <NextError statusCode={0} />
      </body>
    </html>
  );
}
