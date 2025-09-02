"use client";
import { useEffect } from "react";

export function useParallax(ref: React.RefObject<HTMLElement>, speed = 0.5) {
  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        const offset = window.scrollY * speed;
        ref.current.style.setProperty("--scroll-offset", `${offset}px`);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [ref, speed]);
}
