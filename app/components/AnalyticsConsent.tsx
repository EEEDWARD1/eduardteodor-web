"use client";

import Link from "next/link";
import { useEffect, useState, useSyncExternalStore } from "react";
import {
  analyticsEnabled,
  getAnalyticsConsent,
  openAnalyticsSettings,
  saveAnalyticsConsent,
  subscribeToAnalyticsConsent,
  type AnalyticsConsent,
} from "@/app/lib/analytics-consent";

export function CookieSettingsButton() {
  if (!analyticsEnabled) return null;
  return (
    <button
      type="button"
      onClick={() => window.dispatchEvent(new Event(openAnalyticsSettings))}
      className="font-medium text-neutral-700 transition-colors hover:text-accent"
    >
      Cookie settings
    </button>
  );
}

export default function AnalyticsConsentBanner() {
  const consent = useSyncExternalStore(
    subscribeToAnalyticsConsent,
    getAnalyticsConsent,
    () => null,
  );
  const [settingsOpen, setSettingsOpen] = useState(false);
  useEffect(() => {
    const open = () => setSettingsOpen(true);
    window.addEventListener(openAnalyticsSettings, open);
    return () => window.removeEventListener(openAnalyticsSettings, open);
  }, []);

  function choose(choice: Exclude<AnalyticsConsent, null>) {
    saveAnalyticsConsent(choice);
    setSettingsOpen(false);
  }

  if (!analyticsEnabled || (consent !== null && !settingsOpen)) return null;

  return (
    <>
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-40 bg-foreground/60"
      />
      <section
        aria-labelledby="analytics-consent-heading"
        className="fixed inset-x-4 bottom-4 z-50 mx-auto max-w-3xl border border-border bg-background p-4 text-foreground"
      >
        <h2 id="analytics-consent-heading" className="text-base font-semibold">
          Optional analytics
        </h2>
        <p className="mt-2 text-sm leading-relaxed text-neutral-600">
          With your permission, PostHog measures page visits, campaign link
          (UTM) sources, selected link clicks, and technical errors to help me
          improve this site. Session recording is disabled. You can decline and
          still use everything. Your choice is saved on this device for 180
          days. Read the{" "}
          <Link
            href="/privacy"
            className="underline underline-offset-4 hover:text-accent"
          >
            privacy policy
          </Link>
          . Change your choice anytime using Cookie settings in the footer.
        </p>
        <div className="mt-4 flex flex-wrap gap-3">
          <button
            type="button"
            onClick={() => choose("rejected")}
            className="border border-border px-4 py-2.5 text-sm font-medium transition-colors hover:bg-orange-50 hover:text-accent"
          >
            Reject analytics
          </button>
          <button
            type="button"
            onClick={() => choose("accepted")}
            className="border border-border px-4 py-2.5 text-sm font-medium transition-colors hover:bg-orange-50 hover:text-accent"
          >
            Accept analytics
          </button>
        </div>
      </section>
    </>
  );
}
