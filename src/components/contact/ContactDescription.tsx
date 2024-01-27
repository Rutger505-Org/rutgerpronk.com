"use client";

import { useTranslations } from "next-intl";
import React from "react";

export default function ContactDescription() {
  const t = useTranslations("contact");

  const [mailText, setMailText] = React.useState(t("clickToCopy"));

  function handleCopyEmail(e: React.MouseEvent<HTMLSpanElement>) {
    const email = e.currentTarget.innerText.slice(
      0,
      e.currentTarget.innerText.indexOf(" "),
    );
    navigator.clipboard.writeText(email);
    setMailText(t("copied"));
  }

  return (
    <p className="mt-8 max-w-2xl text-xl text-textSecondary">
      {t.rich("text", {
        span: (children) => (
          <span
            className={
              "translate group relative inline-flex flex-col items-center"
            }
            onClick={handleCopyEmail}
            onMouseLeave={() => setMailText(t("clickToCopy"))}
          >
            {children}
            <span
              className={
                "pointer-events-none absolute -translate-y-11 rounded-md px-2 py-1 opacity-0 backdrop-blur-md transition-all duration-150 group-hover:-translate-y-8 group-hover:opacity-100"
              }
            >
              {mailText}
            </span>
          </span>
        ),
      })}
    </p>
  );
}
