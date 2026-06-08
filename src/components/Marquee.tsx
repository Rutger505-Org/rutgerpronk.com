import React from "react";

interface MarqueeProps {
  items: string[];
  className?: string;
}

/**
 * Infinite horizontal marquee strip of skills/keywords. Pure CSS
 * animation (see `animate-marquee` in globals.css) so it works without
 * JS hydration.
 */
export default function Marquee({ items, className = "" }: Readonly<MarqueeProps>) {
  const content = [...items, ...items];

  return (
    <div
      className={`group relative flex w-full overflow-hidden border-y border-accent/30 py-4 ${className}`}
      aria-hidden="true"
    >
      <div className="flex shrink-0 animate-marquee items-center gap-10 pr-10">
        {content.map((item, i) => (
          <span
            key={i}
            className="flex items-center gap-10 font-mono text-sm uppercase tracking-[0.3em] text-textSecondary"
          >
            {item}
            <span className="text-accent">✶</span>
          </span>
        ))}
      </div>
    </div>
  );
}
