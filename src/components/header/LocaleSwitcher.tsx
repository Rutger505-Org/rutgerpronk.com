import LanguageIcon from "@/components/icons/LanguageIcon";
import React from "react";
import { useLocale } from "next-intl";
import Link from "next/link";

interface LocaleSwitcherProps {
  className?: string;
  underline: boolean;
}

export default function LocaleSwitcher({
  className,
  underline,
}: Readonly<LocaleSwitcherProps>) {
  const locale = useLocale();
  const otherLocale = locale == "en" ? "nl" : "en";

  return (
    <Link href={`/${otherLocale}`} className={`${className}`} scroll={false}>
      <div className={"flex items-center"}>
        <LanguageIcon className={"h-5"} />
        <p className={`ml-2`}>{otherLocale.toUpperCase()}</p>
      </div>
      {underline && (
        <span
          className={
            "block h-1 w-0 rounded-full bg-accent duration-300 ease-in-out group-hover:w-1/2"
          }
        ></span>
      )}
    </Link>
  );
}
