"use client";

import ScrollLink from "@/components/ScrollLink";
import React, { useEffect, useState } from "react";

interface UnderlineScrollLinkProps {
  href: string;
  to: string;
  className?: string;
  children?: React.ReactNode;
}

export default function UnderlineScrollLink({
  href,
  to,
  className = "",
  children,
}: Readonly<UnderlineScrollLinkProps>) {
  const [activeSection, setActiveSection] = useState("");

  function handleLinkUnderline() {
    const sections = Array.from(document.querySelectorAll("section"));
    const centerOfScreen = window.scrollY + window.innerHeight / 2;

    const currentSectionIndex = sections.findIndex((section) => {
      const sectionTop = section.offsetTop;
      const sectionBottom = sectionTop + section.offsetHeight;

      return centerOfScreen >= sectionTop && centerOfScreen <= sectionBottom;
    });
    const currentSection = sections[currentSectionIndex]?.id;

    setActiveSection(currentSection);
  }

  useEffect(() => {
    window.addEventListener("scroll", handleLinkUnderline);
    handleLinkUnderline();

    return () => {
      window.removeEventListener("scroll", handleLinkUnderline);
    };
  }, []);

  return (
    <ScrollLink href={href} to={to} className={className}>
      {children}
      <span
        className={`${
          activeSection == to ? "w-full" : "w-0 group-hover:w-1/2"
        } block h-1 rounded-full bg-accent duration-300 ease-in-out `}
      ></span>
    </ScrollLink>
  );
}
