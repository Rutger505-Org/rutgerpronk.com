"use client";

import { useEffect, useRef, useState } from "react";
import { useTranslations } from "next-intl";
import { EMAIL } from "@/lib/site";
import { cn } from "@/lib/utils";

export default function CopyEmailButton() {
  const t = useTranslations("contact");
  const [copied, setCopied] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout>>(undefined);

  useEffect(() => () => clearTimeout(timer.current), []);

  async function copy() {
    try {
      await navigator.clipboard.writeText(EMAIL);
    } catch {
      return;
    }
    setCopied(true);
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setCopied(false), 1800);
  }

  return (
    <button
      type="button"
      onClick={copy}
      aria-label={t("copyEmail", { email: EMAIL })}
      className="interactive mt-6 inline-flex min-h-[52px] max-w-full flex-wrap items-center gap-3 rounded-xl border border-border-control bg-surface px-[18px] font-mono text-sm text-text"
    >
      <span className="break-all">{EMAIL}</span>
      <span
        aria-live="polite"
        className={cn(
          "rounded-md px-2 py-0.5 text-[11px]",
          copied
            ? "bg-accent text-accent-foreground"
            : "bg-border-card text-text-secondary",
        )}
      >
        {copied ? t("copied") : t("copy")}
      </span>
    </button>
  );
}
