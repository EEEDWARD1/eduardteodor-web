"use client";

import { useState } from "react";

export default function CopyEmailButton({ email }: { email: string }) {
  const [copied, setCopied] = useState(false);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(email);
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
