import React from "react";
import WarpedLines from "@/components/patterns/WarpedLines";

interface PatternDividerProps {
  className?: string;
}

/**
 * Full-bleed band of warped op-art lines used to separate sections,
 * replacing the old static transition-stack with the issue #97 motif.
 */
export default function PatternDivider({
  className = "",
}: Readonly<PatternDividerProps>) {
  return (
    <div
      className={`pointer-events-none relative h-32 w-full overflow-hidden opacity-60 sm:h-40 ${className}`}
      aria-hidden="true"
    >
      <WarpedLines
        className="absolute inset-0 h-full w-full"
        gap={18}
        intensity={40}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-primary via-transparent to-primary" />
    </div>
  );
}
