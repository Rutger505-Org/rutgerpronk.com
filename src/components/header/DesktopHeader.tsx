import UnderlineScrollLink from "@/components/header/UnderlineScrollLink";
import LocaleSwitcher from "@/components/header/LocaleSwitcher";
import React from "react";
import { useTranslations } from "next-intl";
import ScrollLink from "@/components/ScrollLink";

export default function DesktopHeader() {
  const t = useTranslations("header");

  return (
    <header className="fixed left-0 top-0 z-20 hidden h-20 w-screen items-center justify-between bg-secondary px-spacing transition-all duration-500 md:flex md:bg-transparent md:backdrop-blur">
      <ScrollLink
        href={"#home"}
        to={"home"}
        className={"cursor-pointer text-3xl font-bold text-textPrimary"}
      >
        <span className={"text-accent"}>R</span>utger
      </ScrollLink>

      <nav className="flex gap-x-7">
        <UnderlineScrollLink
          href={"#about"}
          to={"about"}
          className={
            "text-header group cursor-pointer overflow-hidden text-xl text-textPrimary duration-300 group-hover:opacity-80"
          }
        >
          <p>{t("about")}</p>
        </UnderlineScrollLink>
        <UnderlineScrollLink
          href={"#projects"}
          to={"projects"}
          className={
            "text-header group cursor-pointer overflow-hidden text-xl text-textPrimary duration-300 group-hover:opacity-80"
          }
        >
          <p>{t("projects")}</p>
        </UnderlineScrollLink>
        <UnderlineScrollLink
          href={"#contact"}
          to={"contact"}
          className={
            "text-header group cursor-pointer overflow-hidden text-xl text-textPrimary duration-300 group-hover:opacity-80"
          }
        >
          <p>{t("contact")}</p>
        </UnderlineScrollLink>
        <LocaleSwitcher
          className={
            "text-header group cursor-pointer overflow-hidden text-xl text-textPrimary duration-300 group-hover:opacity-80"
          }
          underline={true}
        />
      </nav>
    </header>
  );
}
