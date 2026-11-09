import { useTranslations } from "next-intl";
import LocaleSwitcher from "@/components/header/LocaleSwitcher";
import MobileNav from "@/components/header/MobileNav";
import { NAV_ITEMS } from "@/components/header/navItems";

export default function Header() {
  const t = useTranslations("header");

  return (
    <header className="sticky top-0 z-30 border-b border-border bg-background/85 backdrop-blur-[10px]">
      <nav
        aria-label={t("navigation")}
        className="page-container flex items-center justify-between gap-3 py-2.5"
      >
        <a
          href="#top"
          className="inline-flex min-h-11 items-center font-mono text-sm text-text"
        >
          rutger<span className="text-accent">@</span>pronk
          <span className="text-text-muted">:~$</span>
        </a>

        <div className="hidden items-center gap-1 font-mono text-[13px] md:flex">
          {NAV_ITEMS.map((item) => (
            <a
              key={item}
              href={`#${item}`}
              className="interactive inline-flex min-h-11 items-center px-3 text-text-secondary hover:text-text"
            >
              {t(item)}
            </a>
          ))}
          <LocaleSwitcher className="interactive ml-2 min-h-11 px-3 text-text-secondary hover:text-text" />
        </div>

        <MobileNav />
      </nav>
    </header>
  );
}
