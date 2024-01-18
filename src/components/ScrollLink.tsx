"use client";

import Link from "next/link";
import { scroller } from "react-scroll";

interface ScrollLinkProps {
  href: string;
  to: string;
  className?: string;
  children?: any;
}

export default function ScrollLink({
  href,
  to,
  className,
  children,
}: Readonly<ScrollLinkProps>) {
  function scrollToId() {
    const targetElement = document.getElementById(to);
    if (!targetElement) {
      throw new Error(`ScrollLink: Element with id ${to} not found`);
    }

    scroller.scrollTo(to, {
      duration: 700,
      smooth: "easeInOutCubic",
    });
  }

  return (
    <Link href={href} className={className} onClick={scrollToId}>
      {children}
    </Link>
  );
}
