"use client";

import Clarity from "@microsoft/clarity";
import Link from "next/link";
import { useEffect, useRef, useState, useSyncExternalStore } from "react";

const projectId = process.env.NEXT_PUBLIC_CLARITY_PROJECT_ID;
const enabled = process.env.NODE_ENV === "production" && Boolean(projectId);
const preferenceKey = "analytics-consent-v1";
const preferenceChanged = "analytics-consent-changed";
const openSettings = "open-analytics-settings";
const preferenceLifetime = 180 * 24 * 60 * 60 * 1000;
type Consent = "accepted" | "rejected" | null;
let sessionChoice: Consent = null;
let useSessionChoice = false;

function getConsent(): Consent {
  if (useSessionChoice) return sessionChoice;
  try {
    const stored = localStorage.getItem(preferenceKey);
    if (!stored) return null;
    const preference = JSON.parse(stored);
    if (
      (preference.choice === "accepted" || preference.choice === "rejected") &&
      typeof preference.expires === "number" &&
      preference.expires > Date.now()
    ) {
      return preference.choice;
    }
  } catch {
    return sessionChoice;
  }
  return null;
}

function subscribe(onChange: () => void) {
  window.addEventListener("storage", onChange);
  window.addEventListener("focus", onChange);
  window.addEventListener(preferenceChanged, onChange);
  return () => {
    window.removeEventListener("storage", onChange);
    window.removeEventListener("focus", onChange);
    window.removeEventListener(preferenceChanged, onChange);
  };
}

function clearAnalyticsCookies() {
  const parts = window.location.hostname.split(".");
  for (const name of ["_clck", "_clsk"]) {
    document.cookie = `${name}=; Max-Age=0; Path=/`;
    for (let index = 0; index < parts.length - 1; index++) {
      document.cookie = `${name}=; Max-Age=0; Path=/; Domain=${parts.slice(index).join(".")}`;
    }
  }
}

export function CookieSettingsButton() {
  if (!enabled) return null;
  return (
    <button
      type="button"
      onClick={() => window.dispatchEvent(new Event(openSettings))}
      className="font-medium text-neutral-700 transition-colors hover:text-accent"
    >
      Cookie settings
    </button>
  );
}

export default function ClarityAnalytics() {
  const consent = useSyncExternalStore(subscribe, getConsent, () => null);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const initialized = useRef(false);

  useEffect(() => {
    const open = () => setSettingsOpen(true);
    window.addEventListener(openSettings, open);
    return () => window.removeEventListener(openSettings, open);
  }, []);

  useEffect(() => {
    if (!enabled || !projectId) return;
    if (consent === "accepted") {
      if (!initialized.current) {
        Clarity.init(projectId);
        Clarity.consentV2({
          ad_Storage: "denied",
          analytics_Storage: "granted",
        });
        initialized.current = true;
      }
    } else if (initialized.current) {
      Clarity.consentV2({ ad_Storage: "denied", analytics_Storage: "denied" });
      clearAnalyticsCookies();
      // Reload to unload the recorder completely, including its cookieless mode.
      window.location.reload();
    }
  }, [consent]);

  function choose(choice: Exclude<Consent, null>) {
    sessionChoice = choice;
    try {
      localStorage.setItem(
        preferenceKey,
        JSON.stringify({ choice, expires: Date.now() + preferenceLifetime }),
      );
    } catch {
      // If storage is blocked, respect the choice for this page visit.
      useSessionChoice = true;
    }
    if (choice === "rejected") clearAnalyticsCookies();
    window.dispatchEvent(new Event(preferenceChanged));
    setSettingsOpen(false);
  }

  if (!enabled || (consent !== null && !settingsOpen)) return null;

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
          With your permission, Microsoft Clarity records how you use this site,
          including clicks and scrolling, to help me improve it. You can decline
          and still use everything. Your choice is saved on this device for 180
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
