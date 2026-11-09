"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Menu, X } from "lucide-react";
import LocaleSwitcher from "@/components/header/LocaleSwitcher";
import { NAV_ITEMS } from "@/components/header/navItems";

export default function MobileNav() {
  const t = useTranslations("header");
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        aria-label={t("menu")}
        aria-expanded={open}
        aria-controls="mobile-nav"
        className="interactive flex h-11 w-11 items-center justify-center rounded-[10px] border border-border-control text-text"
      >
        {open ? (
          <X className="h-5 w-5" aria-hidden />
        ) : (
          <Menu className="h-5 w-5" aria-hidden />
        )}
      </button>

      {open && (
        <div
          id="mobile-nav"
          className="absolute inset-x-0 top-full border-b border-border bg-background/95 backdrop-blur-[10px]"
        >
          <div className="page-container flex flex-col py-2 font-mono text-sm">
            {NAV_ITEMS.map((item) => (
              <a
                key={item}
                href={`#${item}`}
                onClick={() => setOpen(false)}
                className="interactive flex min-h-11 items-center text-text-secondary hover:text-text"
              >
                {t(item)}
              </a>
            ))}
            <LocaleSwitcher className="interactive min-h-11 text-text-secondary hover:text-text" />
          </div>
        </div>
      )}
    </div>
  );
}
