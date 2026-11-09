import { useTranslations } from "next-intl";
import ProjectList from "@/components/work/ProjectList";
import Gallery from "@/components/work/Gallery";
import { PROJECTS, TOTAL_PHOTOS } from "@/lib/projects";

export default function Work() {
  const t = useTranslations("work");

  return (
    <section
      id="work"
      className="border-y border-border bg-background-alt"
    >
      <div className="page-container py-24">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="eyebrow">{t("label")}</p>
            <h2 className="section-title mt-2.5">{t("title")}</h2>
          </div>
          <p className="font-mono text-[13px] text-text-muted">
            {t("photoTotal", {
              photos: TOTAL_PHOTOS,
              projects: PROJECTS.length,
            })}
          </p>
        </div>

        <div className="mt-12 flex flex-wrap items-start gap-8">
          <ProjectList />
          <Gallery />
        </div>
      </div>
    </section>
  );
}
