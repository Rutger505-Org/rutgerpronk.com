"use client";

import { ReactNode, MouseEvent } from "react";
import { Link } from "@/i18n/navigation";

interface ScrollLinkProps {
  href: string;
  to: string;
  className?: string;
  ariaLabel?: string;
  children?: ReactNode;
}

export default function ScrollLink({
  href,
  to,
  className,
  ariaLabel,
  children,
}: Readonly<ScrollLinkProps>) {
  function scrollToId(e: MouseEvent<HTMLAnchorElement>) {
    e.preventDefault();

    const targetElement = document.getElementById(to);
    if (!targetElement) {
      throw new Error(`ScrollLink: Element with id ${to} not found`);
    }

    targetElement.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    window.history.pushState(null, "", `#${to}`);
  }

  return (
    <Link
      href={href}
      className={className}
      aria-label={ariaLabel}
      onClick={scrollToId}
    >
      {children}
    </Link>
  );
}
