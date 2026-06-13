import React from "react";

interface SectionHeadingProps {
  /** Two-digit section index, e.g. "01". */
  index: string;
  children: React.ReactNode;
  className?: string;
}

/**
 * Bold section heading with a monospace accent index and a warped
 * underline accent — part of the issue #97 redesign language.
 */
export default function SectionHeading({
  index,
  children,
  className = "",
}: Readonly<SectionHeadingProps>) {
  return (
    <div className={`flex flex-col gap-3 ${className}`}>
      <span className="font-mono text-sm tracking-[0.35em] text-accent">
        {index} /
      </span>
      <h2 className="relative inline-block w-fit text-4xl font-bold tracking-tight text-textPrimary sm:text-5xl">
        {children}
        <span className="mt-3 block h-[3px] w-16 bg-accent" />
      </h2>
    </div>
  );
}
