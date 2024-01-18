import ScrollLink from "@/components/ScrollLink";
import LocaleSwitcher from "@/components/header/LocaleSwitcher";
import React from "react";
import { useTranslations } from "next-intl";

interface MobileNavProps {
  openDropdown: boolean;
}

export function MobileNav({ openDropdown }: Readonly<MobileNavProps>) {
  const t = useTranslations("header");

  return (
    <nav className="bg-secondary">
      <ul className="flex flex-col items-center">
        <ScrollLink href={"#about"} to={"about"} className={"group p-4"}>
          <p
            className={
              "text-xl text-textPrimary duration-300 group-hover:text-accent"
            }
          >
            {t("about")}
          </p>
        </ScrollLink>
        <ScrollLink href={"#projects"} to={"projects"} className={"group p-4"}>
          <p
            className={
              "text-xl text-textPrimary duration-300 group-hover:text-accent"
            }
          >
            {t("projects")}
          </p>
        </ScrollLink>

        <ScrollLink href={"#contact"} to={"contact"} className={"group p-4"}>
          <p
            className={
              "text-xl text-textPrimary duration-300 group-hover:text-accent"
            }
          >
            {t("contact")}
          </p>
        </ScrollLink>

        <LocaleSwitcher
          className={"p-4 text-textPrimary duration-300 hover:text-accent"}
          underline={false}
        />
      </ul>
    </nav>
  );
}
