import Link from "next/link";
import { useTranslations } from "next-intl";

export default function NotFound() {
  const t = useTranslations("notFound");

  return (
    <main className="flex min-h-screen items-center justify-center p-6">
      <div className="flex flex-col items-center gap-8 text-center">
        <p className="font-mono text-[13px] text-accent">404</p>
        <h1 className="font-display text-3xl font-bold tracking-[-0.02em]">
          {t("title")}
        </h1>
        <Link
          href="/"
          className="interactive lift inline-flex min-h-12 items-center rounded-[10px] bg-accent px-[22px] font-semibold text-accent-foreground"
        >
          {t("buttonText")}
        </Link>
      </div>
    </main>
  );
}
