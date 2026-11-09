"use client";

import { useTranslations } from "next-intl";
import { usePortfolio } from "@/components/PortfolioContext";
import { PROJECTS } from "@/lib/projects";
import { relatedTools, TOOLS } from "@/lib/stack";

export default function ToolPanel() {
  const t = useTranslations();
  const { toolId, selectTool, selectProject } = usePortfolio();
  const tool = TOOLS.find((item) => item.id === toolId) ?? TOOLS[0];
  const pairs = relatedTools(tool);
  const usedIn = PROJECTS.filter((project) =>
    tool.projects.includes(project.key),
  );

  return (
    <div
      className="flex min-w-0 flex-[1_1_300px] flex-col gap-[18px] rounded-[20px] border border-border-card bg-surface p-6"
      aria-live="polite"
    >
      <p className="font-mono text-xs text-text-muted">$ man {tool.id}</p>

      <div>
        <p className="font-mono text-xs text-accent">layer/{tool.layer}</p>
        <p
          key={tool.id}
          className="mt-1.5 animate-fade font-display text-[34px] font-semibold leading-[1.1] tracking-[-0.02em]"
        >
          {tool.name}
        </p>
        <p className="mt-2.5 text-[15px] text-text-secondary">
          {t(`stack.tools.${tool.id}`)}
        </p>
      </div>

      <div>
        <p className="font-mono text-xs text-text-muted">{t("stack.usedIn")}</p>
        <div className="mt-2 flex flex-col gap-1.5">
          {usedIn.map((project) => (
            <a
              key={project.key}
              href="#work"
              onClick={() => selectProject(project.key)}
              className="interactive flex min-h-11 items-center justify-between gap-2 rounded-[10px] border border-border-control px-3.5 text-sm"
            >
              {t(`work.projects.${project.key}.title`)}
              <span className="font-mono text-xs text-accent">
                {t("stack.photoCount", { count: project.slides.length })} →
              </span>
            </a>
          ))}
          {usedIn.length === 0 && (
            <p className="text-sm text-text-secondary">
              {t("stack.noProjects")}
            </p>
          )}
        </div>
      </div>

      {pairs.length > 0 && (
        <div>
          <p className="font-mono text-xs text-text-muted">
            {t("stack.pairsWith")}
          </p>
          <div className="mt-2 flex flex-wrap gap-1.5">
            {pairs.map((pair) => (
              <button
                key={pair.id}
                type="button"
                onClick={() => selectTool(pair.id)}
                className="interactive min-h-11 rounded-md border border-dashed border-border-strong px-2.5 font-mono text-xs text-text sm:min-h-8"
              >
                {pair.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
