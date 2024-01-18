import React from "react";
import ScrollLink from "@/components/ScrollLink";
import ArrowDownIcon from "@/components/icons/ArrowDownIcon";
import { useTranslations } from "next-intl";

export default function LandingSection() {
  const t = useTranslations("landingSection");

  return (
    <section
      id={"home"}
      className={"flex min-h-screen flex-col items-center justify-between"}
    >
      <div></div>

      <div>
        <h2 className={"text-center text-4xl text-textPrimary"}>
          {t("softwareDev")}
        </h2>
        <h1
          className={
            "mb-10 max-w-2xl text-center text-6xl font-bold text-textPrimary"
          }
        >
          {t.rich("greeting", {
            span: (children) => (
              <span className={"text-accent"}>{children}</span>
            ),
          })}
        </h1>
      </div>

      <ScrollLink href={"#about"} to={"about"} className={"mb-6"}>
        <ArrowDownIcon className={"h-8 animate-bounce text-accent"} />
      </ScrollLink>
    </section>
  );
}
