"use client";

import React, { useState } from "react";
import ScrollLink from "@/components/ScrollLink";
import DropdownButton from "@/components/header/DropdownButton";
import { MobileNav } from "@/components/header/MobileNav";

export default function MobileHeader() {
  const [openDropdown, setOpenDropdown] = useState(false);

  return (
    <header
      className={`${
        openDropdown && "max-h-[316px]"
      } fixed left-0 top-0 z-20 max-h-20 w-screen items-center overflow-hidden bg-secondary transition-all duration-500 ease-in-out md:hidden`}
    >
      <ul className={"flex h-20 items-center justify-between px-spacing"}>
        <ScrollLink
          href={"#home"}
          to={"home"}
          className={"cursor-pointer text-3xl font-bold text-textPrimary"}
        >
          <span className={"text-accent"}>R</span>utger
        </ScrollLink>

        <DropdownButton
          openDropdown={openDropdown}
          setOpenDropdown={setOpenDropdown}
        />
      </ul>

      <MobileNav openDropdown={openDropdown} />
    </header>
  );
}
