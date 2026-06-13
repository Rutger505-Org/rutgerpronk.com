"use client";

import React, { useRef } from "react";
import ScrollDownHint from "@/components/ScrollDownHint";
import Marquee from "@/components/Marquee";
import WarpedLines from "@/components/patterns/WarpedLines";
import { useTranslations } from "next-intl";
import { motion, useScroll, useTransform } from "framer-motion";

const SKILLS = [
  "TypeScript",
  "Next.js",
  "React",
  "Tailwind CSS",
  "Kubernetes",
  "Terraform",
  "CI/CD",
  "Node.js",
];

export default function LandingSection() {
  const t = useTranslations("landingSection");

  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "300%"]);
  const patternY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const patternOpacity = useTransform(scrollYProgress, [0, 1], [0.5, 0]);

  return (
    <section
      ref={ref}
      id={"home"}
      className={
        "relative flex min-h-screen flex-col items-center justify-between overflow-hidden"
      }
    >
      {/* Warped op-art backdrop (issue #97 motif) */}
      <motion.div
        style={{ y: patternY, opacity: patternOpacity }}
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <WarpedLines className="h-full w-full" gap={26} intensity={30} />
        <div className="absolute inset-0 bg-gradient-to-b from-landing/40 via-landing/70 to-landing" />
        <div className="absolute left-1/2 top-1/2 h-[60vh] w-[60vh] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/20 blur-[120px]" />
      </motion.div>

      <div></div>

      <motion.div style={{ y: textY }} className={"max-w-full px-4"}>
        <h2
          className={
            "text-center font-mono text-base tracking-[0.3em] text-accent sm:text-lg"
          }
        >
          {t.rich("softwareDev", {
            symbol: "</>",
          })}
        </h2>
        <h1
          className={
            "accent-glow mx-auto mt-6 max-w-4xl text-center text-6xl font-bold leading-[0.95] tracking-tight text-textPrimary sm:text-8xl"
          }
        >
          {t.rich("greeting", {
            span: (children) => (
              <span className={"text-accent"}>{children}</span>
            ),
          })}
        </h1>
      </motion.div>

      <div className="w-full">
        <Marquee items={SKILLS} className="mb-10" />
        <div className="flex w-full justify-center">
          <ScrollDownHint />
        </div>
      </div>
    </section>
  );
}
