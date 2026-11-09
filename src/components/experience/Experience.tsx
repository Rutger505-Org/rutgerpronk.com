import { useTranslations } from "next-intl";
import { CAREER_LOG } from "@/lib/experience";
import { cn } from "@/lib/utils";

export default function Experience() {
  const t = useTranslations("experience");

  return (
    <section id="log" className="border-t border-border">
      <div className="page-container py-24">
        <p className="eyebrow">{t("label")}</p>
        <h2 className="section-title mt-2.5">git log career.txt</h2>

        <ol className="mt-10 font-mono text-sm">
          {CAREER_LOG.map((entry) => (
            <li
              key={entry.key}
              className="flex items-stretch gap-[18px] rounded-[10px] px-3 transition-colors duration-150 hover:bg-surface-raised"
            >
              <div
                className="relative flex w-[18px] flex-none justify-center"
                aria-hidden
              >
                <span className="absolute inset-y-0 w-0.5 bg-border-card" />
                <span
                  className={cn(
                    "relative rounded-full",
                    entry.head
                      ? "mt-6 h-3.5 w-3.5 bg-accent shadow-[0_0_0_4px_theme(colors.background.DEFAULT),0_0_12px_theme(colors.accent.DEFAULT)]"
                      : "mt-[25px] h-3 w-3 border-2 border-border-node bg-background shadow-[0_0_0_4px_theme(colors.background.DEFAULT)]",
                  )}
                />
              </div>
              <div className="flex min-w-0 flex-1 flex-wrap items-baseline gap-x-4 gap-y-1.5 py-[18px]">
                <span className="text-warm">{entry.hash}</span>
                {entry.ref && (
                  <span
                    className={cn(
                      "rounded-full border px-2 py-px text-xs",
                      entry.head
                        ? "border-accent text-accent"
                        : "border-border-strong text-text-secondary",
                    )}
                  >
                    {entry.ref}
                  </span>
                )}
                <span className="font-sans text-[17px] font-medium text-text">
                  {t(`entries.${entry.key}.title`)}
                </span>
                <span className="h-0 basis-full" aria-hidden />
                <span className="text-[13px] text-text-muted">
                  {t(`entries.${entry.key}.place`)}
                </span>
                <span className="text-[13px] text-text-faint">
                  · {t(`entries.${entry.key}.date`)}
                </span>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
