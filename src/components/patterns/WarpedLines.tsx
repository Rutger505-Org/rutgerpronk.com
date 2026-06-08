"use client";

import React, { useId } from "react";

interface WarpedLinesProps {
  className?: string;
  /** Stroke color of the lines. Defaults to the accent color. */
  color?: string;
  /** Space between lines in px. */
  gap?: number;
  /** How strongly the lines get warped. */
  intensity?: number;
  /** Animate the warp continuously. */
  animate?: boolean;
}

/**
 * Op-art style warped line field — the signature "cool pattern" of the
 * redesign. A grid of straight stripes is pushed through an animated
 * turbulence displacement filter, producing the liquid, distorted look
 * referenced in issue #97.
 */
export default function WarpedLines({
  className = "",
  color = "#FF365A",
  gap = 22,
  intensity = 34,
  animate = true,
}: Readonly<WarpedLinesProps>) {
  const id = useId().replace(/:/g, "");
  const filterId = `warp-${id}`;
  const patternId = `lines-${id}`;

  return (
    <svg
      aria-hidden="true"
      className={className}
      width="100%"
      height="100%"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <filter id={filterId} x="-20%" y="-20%" width="140%" height="140%">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.008 0.012"
            numOctaves="2"
            seed="7"
            result="noise"
          >
            {animate && (
              <animate
                attributeName="baseFrequency"
                dur="24s"
                values="0.008 0.012;0.014 0.006;0.008 0.012"
                repeatCount="indefinite"
              />
            )}
          </feTurbulence>
          <feDisplacementMap
            in="SourceGraphic"
            in2="noise"
            scale={intensity}
            xChannelSelector="R"
            yChannelSelector="G"
          />
        </filter>
        <pattern
          id={patternId}
          width={gap}
          height={gap}
          patternUnits="userSpaceOnUse"
          patternTransform="rotate(0)"
        >
          <line
            x1="0"
            y1="0"
            x2="0"
            y2={gap}
            stroke={color}
            strokeWidth="2"
          />
        </pattern>
      </defs>
      <rect
        width="120%"
        height="120%"
        x="-10%"
        y="-10%"
        fill={`url(#${patternId})`}
        filter={`url(#${filterId})`}
      />
    </svg>
  );
}
