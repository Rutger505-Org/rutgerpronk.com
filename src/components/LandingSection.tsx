"use client";

import React, { useRef } from "react";
import ScrollLink from "@/components/ScrollLink";
import ArrowDownIcon from "@/components/icons/ArrowDownIcon";
import { useTranslations } from "next-intl";
import { motion, useScroll, useTransform } from "framer-motion";

export default function LandingSection() {
  const t = useTranslations("landingSection");

  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "300%"]);

  return (
    <section
      ref={ref}
      id={"home"}
      className={"flex min-h-screen flex-col items-center justify-between"}
    >
      <div></div>
      <motion.div style={{ y: textY }} className={"max-w-full"}>
        <h2 className={"text-center text-3xl text-textPrimary sm:text-4xl"}>
          {t.rich("softwareDev", {
            symbol: "</>",
          })}
        </h2>
        <h1
          className={
            "mb-10 max-w-2xl text-center text-5xl font-bold text-textPrimary sm:text-6xl"
          }
        >
          {t.rich("greeting", {
            span: (children) => (
              <span className={"text-accent"}>{children}</span>
            ),
          })}
        </h1>
      </motion.div>

      <ScrollLink href={"#about"} to={"about"} className={"mb-6"}>
        <ArrowDownIcon className={"h-8 animate-bounce text-accent"} />
      </ScrollLink>
    </section>
  );
}
