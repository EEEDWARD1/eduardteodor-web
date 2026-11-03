"use client";

import { useState } from "react";
import posthog from "posthog-js";
import {
  analyticsEnabled,
  getAnalyticsConsent,
} from "@/app/lib/analytics-consent";
import { posthogLogger } from "@/app/lib/posthog-logger";

export default function CopyEmailButton({ email }: { email: string }) {
  const [copied, setCopied] = useState(false);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(email);
      if (analyticsEnabled && getAnalyticsConsent() === "accepted") {
        posthog.capture("email_copied");
        posthogLogger.info("contact email copied", {
          contact_channel: "email",
        });
      }
      setCopied(true);
    } catch {
      setCopied(false);
    }
  }

  return (
    <button
      type="button"
      onClick={copyEmail}
      aria-label="Copy email address"
      className="flex w-16 shrink-0 items-center justify-center border-l border-border text-sm font-medium transition-colors hover:bg-orange-50 hover:text-accent"
    >
      {copied ? "Copied!" : "Copy"}
    </button>
  );
}
