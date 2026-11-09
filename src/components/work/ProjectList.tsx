"use client";

import { useTranslations } from "next-intl";
import { usePortfolio } from "@/components/PortfolioContext";
import { PROJECTS } from "@/lib/projects";
import { cn } from "@/lib/utils";

export default function ProjectList() {
  const t = useTranslations("work");
  const { projectKey, selectProject } = usePortfolio();

  return (
    <div className="flex min-w-0 flex-[1_1_300px] flex-col border-t border-border">
      {PROJECTS.map((project, index) => {
        const selected = project.key === projectKey;
        return (
          <button
            key={project.key}
            type="button"
            onClick={() => selectProject(project.key)}
            aria-pressed={selected}
            className={cn(
              "flex w-full items-start gap-4 border-b border-border px-4 py-5 text-left text-text transition-colors duration-150 hover:bg-surface-raised",
              selected &&
                "bg-surface-raised shadow-[inset_2px_0_0_theme(colors.accent.DEFAULT)]",
            )}
          >
            <span
              className={cn(
                "pt-1 font-mono text-xs",
                selected ? "text-accent" : "text-text-muted",
              )}
            >
              {String(index + 1).padStart(2, "0")}
            </span>
            <span className="min-w-0 flex-1">
              <span className="block font-display text-xl font-semibold tracking-[-0.01em]">
                {t(`projects.${project.key}.title`)}
              </span>
              <span className="mt-1 block font-mono text-xs text-text-muted">
                {project.tags.slice(0, 3).join(" · ")}
              </span>
            </span>
            <span className="pt-1 font-mono text-xs text-text-muted">
              {t("imageCount", { count: project.slides.length })}
            </span>
          </button>
        );
      })}
    </div>
  );
}
