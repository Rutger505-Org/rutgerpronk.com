"use client";

import { ComponentPropsWithoutRef, useEffect, useRef } from "react";

export default function ParallaxSection(
  props: Readonly<ComponentPropsWithoutRef<"section">>,
) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = ref.current;
    if (!section) return;

    let frame = 0;

    const update = () => {
      frame = 0;
      const { top, height } = section.getBoundingClientRect();
      const progress = Math.min(Math.max(-top / height, 0), 1);
      section.style.setProperty("--scroll-progress", String(progress));
    };

    const scheduleUpdate = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleUpdate);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);
    };
  }, []);

  return <section ref={ref} {...props} />;
}
