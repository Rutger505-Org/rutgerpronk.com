"use client";

import { useTranslations } from "next-intl";
import React from "react";

export default function ContactDescription() {
  const t = useTranslations("contact");

  const [mailText, setMailText] = React.useState(t("clickToCopy"));

  function handleCopyEmail(e: React.MouseEvent<HTMLSpanElement>) {
    const email = e.currentTarget.innerHTML.slice(
      0,
      e.currentTarget.innerHTML.indexOf("<"),
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
            onMouseEnter={() => setMailText(t("clickToCopy"))}
          >
            {children}
            <span
              className={
                "pointer-events-none absolute block h-fit w-fit -translate-y-8 overflow-hidden"
              }
            >
              <span
                className={
                  " block translate-y-7 rounded-md px-2 py-1 backdrop-blur duration-150 group-hover:translate-y-0 "
                }
              >
                {mailText}
              </span>
            </span>
          </span>
        ),
      })}
    </p>
  );
}
