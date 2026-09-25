"use client";

import React from "react";
import ScrollDownHint from "@/components/ScrollDownHint";
import ScrollLink from "@/components/ScrollLink";
import { useTranslations } from "next-intl";
import ArrowOutRightIcon from "@/components/icons/ArrowOutRightIcon";

export default function LandingSection() {
  const t = useTranslations("landingSection");

  const facts = [
    { label: t("factRoleLabel"), value: t("factRoleValue") },
    { label: t("factLocationLabel"), value: t("factLocationValue") },
    { label: t("factFocusLabel"), value: t("factFocusValue") },
  ];

  return (
    <section
      id={"home"}
      className={
        "relative flex min-h-screen flex-col justify-between pb-10 pt-32 sm:pt-40"
      }
    >
      <div className={"flex flex-1 flex-col justify-center"}>
        <div className={"flex items-center gap-4"}>
          <span className={"h-px w-10 bg-accent"} aria-hidden />
          <span
            className={
              "text-sm uppercase tracking-[0.2em] text-textSecondary sm:text-base"
            }
          >
            {t("eyebrow")}
          </span>
        </div>

        <h1
          className={
            "mt-8 max-w-[18ch] text-5xl font-semibold leading-[1.05] tracking-tight text-textPrimary sm:text-6xl lg:text-7xl"
          }
        >
          {t.rich("greeting", {
            span: (children) => (
              <span className={"text-accent"}>{children}</span>
            ),
          })}
        </h1>

        <p
          className={
            "mt-8 max-w-[52ch] text-lg leading-relaxed text-textSecondary"
          }
        >
          {t("subtitle")}
        </p>

        <div className={"mt-10 flex flex-wrap items-center gap-x-8 gap-y-4"}>
          <ScrollLink
            href={"#projects"}
            to={"projects"}
            className={
              "group inline-flex items-center border-b border-accent pb-1 text-base text-textPrimary transition-colors hover:text-accent"
            }
          >
            {t("ctaProjects")}
            <ArrowOutRightIcon
              className={
                "ml-2 h-4 -rotate-45 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              }
            />
          </ScrollLink>

          <ScrollLink
            href={"#contact"}
            to={"contact"}
            className={
              "inline-flex items-center border-b border-transparent pb-1 text-base text-textSecondary transition-colors hover:border-textSecondary hover:text-textPrimary"
            }
          >
            {t("ctaContact")}
          </ScrollLink>
        </div>

        <dl
          className={
            "mt-20 grid max-w-3xl grid-cols-1 gap-y-6 border-t border-white/10 pt-8 sm:grid-cols-3 sm:gap-x-10"
          }
        >
          {facts.map((fact) => (
            <div key={fact.label}>
              <dt
                className={
                  "text-xs uppercase tracking-[0.18em] text-textSecondary/70"
                }
              >
                {fact.label}
              </dt>
              <dd className={"mt-2 text-base text-textPrimary"}>
                {fact.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>

      <div className={"flex w-full flex-col items-center justify-center"}>
        <ScrollDownHint />
      </div>
    </section>
  );
}
