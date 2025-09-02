"use client";

import { motion } from "framer-motion";
import { ReactNode, MouseEvent } from "react";

interface ScrollLinkProps {
  href: string;
  to: string;
  className?: string;
  children?: ReactNode;
}

export default function ScrollLink({
  href,
  to,
  className,
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
    <motion.a
      href={href}
      className={className}
      onClick={scrollToId}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {children}
    </motion.a>
  );
}
