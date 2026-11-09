import { useTranslations } from "next-intl";

const FACTS = ["based_in", "studying", "running"] as const;

export default function About() {
  const t = useTranslations("about");

  return (
    <section id="about" className="page-container pb-24 pt-6">
      <div className="flex flex-wrap items-stretch gap-10 border-t border-border pt-14">
        <div className="min-w-0 flex-[1_1_480px]">
          <p className="eyebrow">{t("label")}</p>
          <p className="mt-3.5 max-w-[760px] font-display text-[clamp(22px,2.4vw,30px)] leading-[1.35] tracking-[-0.01em]">
            {t("statement")}
          </p>
          <p className="mt-[18px] max-w-[640px] text-text-secondary">
            {t("text")}
          </p>
        </div>
        <dl className="grid flex-[0_1_260px] content-start gap-2.5 font-mono text-[13px]">
          {FACTS.map((fact) => (
            <div
              key={fact}
              className="rounded-[10px] border border-border-card px-4 py-3.5"
            >
              <dt className="text-text-muted">{fact}</dt>
              <dd>{t(`facts.${fact}`)}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
