"use client";

import React, { useEffect, useRef } from "react";

/**
 * Halftone Field — a full-bleed grid of accent-red dots whose radius is
 * modulated by a slow-moving warp, evoking a grungy print / halftone poster.
 * Inspired by the distorted album-cover artwork. Renders a single static frame
 * when the user prefers reduced motion.
 */
export default function HalftoneField() {
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

    const GAP = 22; // distance between dot centres

    const draw = (time: number) => {
      ctx.clearRect(0, 0, width, height);
      const t = time * 0.0005;
      const cx = width / 2;
      const cy = height / 2;
      const maxDist = Math.hypot(cx, cy);

      for (let y = GAP / 2; y < height; y += GAP) {
        for (let x = GAP / 2; x < width; x += GAP) {
          // travelling diagonal wave + radial pulse from the centre
          const wave =
            Math.sin(x * 0.02 + y * 0.02 + t * 3) * 0.5 +
            Math.sin((x - y) * 0.015 - t * 2) * 0.5;
          const dist = Math.hypot(x - cx, y - cy) / maxDist;
          const pulse = Math.sin(dist * 9 - t * 4) * 0.5 + 0.5;

          const m = (wave * 0.5 + 0.5) * 0.6 + pulse * 0.4;
          const r = m * (GAP * 0.5);
          if (r < 0.4) continue;

          // dots brighter near the centre, fading out towards the edges
          const alpha = 0.2 + (1 - dist) * 0.7 * (0.4 + m * 0.6);
          ctx.beginPath();
          ctx.arc(x, y, r, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(255, 54, 90, ${Math.min(alpha, 0.95)})`;
          ctx.fill();
        }
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
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,#2a0410_0%,#0a0411_55%,#000e28_100%)]" />
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_25%,rgba(5,2,12,0.72)_100%)]" />
    </div>
  );
}
