import { useTranslations } from "next-intl";

export default function Footer() {
  const t = useTranslations("footer");

  return (
    <footer className="border-t border-border">
      <div className="page-container flex flex-wrap justify-between gap-3 py-7 font-mono text-xs text-text-muted">
        <span>© {new Date().getFullYear()} Rutger Pronk</span>
        <span>{t("builtWith")}</span>
      </div>
    </footer>
  );
}
