"use client";

import React, { useRef } from "react";
import ScrollDownHint from "@/components/ScrollDownHint";
import { useTranslations } from "next-intl";
import { motion, useScroll, useTransform } from "framer-motion";

const SKILLS = [
  "TypeScript",
  "Next.js",
  "React",
  "Tailwind CSS",
  "Kubernetes",
  "Terraform",
];

export default function LandingSection() {
  const t = useTranslations("landingSection");

  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "60%"]);
  const glowOpacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <section
      ref={ref}
      id={"home"}
      className={
        "relative flex min-h-screen flex-col items-start justify-between overflow-hidden"
      }
    >
      {/* Dot grid + accent glow, anchored to the top-left behind the hero. */}
      <div className={"pointer-events-none absolute inset-0 -z-10"}>
        <div className={"landing-dotgrid absolute inset-0"} />
        <motion.div
          style={{ opacity: glowOpacity }}
          className={"landing-glow absolute inset-0"}
        />
      </div>

      <div></div>

      <motion.div style={{ y: textY }} className={"max-w-full"}>
        <h2
          className={
            "font-mono text-base tracking-[0.32em] text-accent sm:text-lg"
          }
        >
          {t.rich("softwareDev", {
            symbol: "</>",
          })}
        </h2>
        <h1
          className={
            "mt-6 max-w-[15ch] text-left text-6xl font-bold leading-[0.98] tracking-tight text-textPrimary sm:text-7xl lg:text-8xl"
          }
        >
          {t.rich("greeting", {
            span: (children) => (
              <span className={"accent-glow text-accent"}>{children}</span>
            ),
          })}
        </h1>
        <p className={"mt-6 max-w-[46ch] text-base text-textSecondary sm:text-lg"}>
          {t("subtitle")}
        </p>
        <div className={"mt-9 flex flex-wrap gap-3"}>
          {SKILLS.map((skill, index) => (
            <span
              key={skill}
              className={
                "rounded-full border px-4 py-2 text-sm " +
                (index === 0
                  ? "border-accent text-accent"
                  : "border-white/10 text-textSecondary")
              }
            >
              {skill}
            </span>
          ))}
        </div>
      </motion.div>

      <ScrollDownHint />
    </section>
  );
}
