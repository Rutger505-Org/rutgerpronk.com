import { useTranslations } from "next-intl";
import Keyboard from "@/components/stack/Keyboard";
import ToolPanel from "@/components/stack/ToolPanel";

export default function Stack() {
  const t = useTranslations("stack");

  return (
    <section id="stack" className="page-container py-24">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="eyebrow">{t("label")}</p>
          <h2 className="section-title mt-2.5">{t("title")}</h2>
        </div>
        <p className="max-w-[420px] text-[15px] text-text-secondary">
          {t("text")}
        </p>
      </div>

      <div className="mt-12 flex flex-wrap items-stretch gap-6">
        <Keyboard />
        <ToolPanel />
      </div>
    </section>
  );
}
