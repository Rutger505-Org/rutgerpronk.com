"use client";

import React, { useEffect, useRef } from "react";

/**
 * Liquid Waves — a full-bleed animated background of warped horizontal lines,
 * inspired by distorted album-cover artwork. Accent-red lines ripple over a
 * deep near-black field. Falls back to a static frame when the user prefers
 * reduced motion.
 */
export default function LiquidWaves() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    let width = 0;
    let height = 0;
    let dpr = 1;

    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = canvas.clientWidth;
      height = canvas.clientHeight;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    window.addEventListener("resize", resize);

    const LINES = 46;

    const draw = (time: number) => {
      ctx.clearRect(0, 0, width, height);

      const t = time * 0.0006;
      const spacing = height / (LINES - 1);

      for (let i = 0; i < LINES; i++) {
        const baseY = i * spacing;
        // lines warp more towards the centre, calmer at the edges
        const centreBias = 1 - Math.abs(i / (LINES - 1) - 0.5) * 1.4;
        const amp = 26 * Math.max(0.15, centreBias);

        ctx.beginPath();
        for (let x = -20; x <= width + 20; x += 8) {
          const phase = x * 0.012 + i * 0.35;
          const y =
            baseY +
            Math.sin(phase + t * 2) * amp +
            Math.sin(phase * 0.5 - t * 1.3) * amp * 0.6;
          if (x === -20) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }

        // brighter, thicker in the middle band — like the cover's focal warp
        const heat = Math.max(0.18, centreBias);
        ctx.strokeStyle = `rgba(255, 54, 90, ${0.15 + heat * 0.55})`;
        ctx.lineWidth = 0.8 + heat * 1.6;
        ctx.stroke();
      }
    };

    let raf = 0;
    if (reduceMotion) {
      draw(0);
    } else {
      const loop = (time: number) => {
        draw(time);
        raf = requestAnimationFrame(loop);
      };
      raf = requestAnimationFrame(loop);
    }

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      {/* deep red-black wash behind the lines */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,#2a0410_0%,#0a0411_55%,#000e28_100%)]" />
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />
      {/* vignette + fade so hero text stays readable */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,rgba(5,2,12,0.65)_100%)]" />
    </div>
  );
}
