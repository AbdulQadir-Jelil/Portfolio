"use client";

import { useEffect, useState } from "react";
import { Check, Copy } from "@/components/icons";

export default function CopyEmailButton({ email }) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) return undefined;
    const timer = setTimeout(() => setCopied(false), 2200);
    return () => clearTimeout(timer);
  }, [copied]);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
    } catch (error) {
      /* Clipboard blocked (older browser or insecure context): the visible
         email address next to this button is still selectable. */
    }
  }

  return (
    <button
      type="button"
      onClick={handleCopy}
      aria-live="polite"
      className="inline-flex min-h-[40px] items-center gap-2 rounded-lg border border-line bg-surface px-4 text-[0.86rem] font-semibold text-muted-strong transition-colors duration-200 hover:border-line-strong hover:text-accent"
    >
      {copied ? <Check size={16} /> : <Copy size={16} />}
      {copied ? "Copied" : "Copy email"}
    </button>
  );
}
