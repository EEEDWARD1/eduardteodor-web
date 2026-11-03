"use client";

import type { ComponentPropsWithoutRef } from "react";
import posthog from "posthog-js";
import {
  analyticsEnabled,
  getAnalyticsConsent,
} from "@/app/lib/analytics-consent";
import { posthogLogger } from "@/app/lib/posthog-logger";

type TrackedExternalLinkProps = ComponentPropsWithoutRef<"a"> & {
  linkContext: string;
};

export default function TrackedExternalLink({
  linkContext,
  onClick,
  ...props
}: TrackedExternalLinkProps) {
  return (
    <a
      {...props}
      onClick={(event) => {
        onClick?.(event);
        if (analyticsEnabled && getAnalyticsConsent() === "accepted") {
          posthog.capture("external_link_opened", {
            link_context: linkContext,
          });
          posthogLogger.info("external link opened", {
            link_context: linkContext,
          });
        }
      }}
    />
  );
}
