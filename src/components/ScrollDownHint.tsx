"use client";

import React, { useEffect, useState } from "react";
import ArrowDownIcon from "@/components/icons/ArrowDownIcon";
import ScrollLink from "@/components/ScrollLink";
import { useTranslations } from "next-intl";

export default function ScrollDownHint() {
  const t = useTranslations("header");
  const [isAtTop, setIsAtTop] = useState(true);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setReady(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const onScroll = () => {
      setIsAtTop(window.scrollY <= 100);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const show = isAtTop && ready;

  return (
    <div className={"w-14"}>
      <div
        className={`absolute bottom-0 mb-6 transition-[opacity,transform,visibility] ease-out [transition-duration:350ms] ${
          show
            ? "visible translate-y-0 opacity-100"
            : "invisible translate-y-2 opacity-0"
        }`}
      >
        <ScrollLink href={"#about"} to={"about"} ariaLabel={t("about")}>
          <ArrowDownIcon className={"h-14 w-14 animate-bounce text-accent"} />
        </ScrollLink>
      </div>
    </div>
  );
}
