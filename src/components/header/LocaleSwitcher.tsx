import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import LanguageIcon from "@/components/icons/LanguageIcon";
import { cn } from "@/lib/utils";

export default function LocaleSwitcher({
  className,
}: Readonly<{ className?: string }>) {
  const t = useTranslations("header");
  const locale = useLocale();
  const otherLocale = locale === "en" ? "nl" : "en";

  return (
    <Link
      href={`/${otherLocale}`}
      hrefLang={otherLocale}
      scroll={false}
      aria-label={t("switchLocale")}
      className={cn("inline-flex items-center gap-2", className)}
    >
      <LanguageIcon className="h-4 w-4" />
      {otherLocale.toUpperCase()}
    </Link>
  );
}
