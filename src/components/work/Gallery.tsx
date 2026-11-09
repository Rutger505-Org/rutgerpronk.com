"use client";

import type { ReactNode } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { ArrowUpRight, Camera, ChevronLeft, ChevronRight } from "lucide-react";
import { usePortfolio } from "@/components/PortfolioContext";
import { PROJECTS } from "@/lib/projects";
import { cn } from "@/lib/utils";

const pad = (n: number) => String(n).padStart(2, "0");

export default function Gallery() {
  const t = useTranslations("work");
  const { projectKey, slide, setSlide } = usePortfolio();
  const project = PROJECTS.find((p) => p.key === projectKey) ?? PROJECTS[0];
  const slides = project.slides;
  const count = slides.length;
  const current = slides[Math.min(slide, count - 1)];
  const caption = (key: string) => t(`projects.${project.key}.captions.${key}`);

  return (
    <div className="min-w-0 flex-[999_1_560px]">
      <div className="relative aspect-[16/10] overflow-hidden rounded-[14px] border border-border-card bg-surface">
        {current.src ? (
          <Image
            key={`${project.key}-${slide}`}
            src={current.src}
            alt={caption(current.captionKey)}
            fill
            sizes="(max-width: 1000px) 100vw, 760px"
            className="animate-fade object-cover"
          />
        ) : (
          <div
            key={`${project.key}-${slide}`}
            className="dots absolute inset-0 flex animate-fade flex-col items-center justify-center gap-3 p-6 text-center"
          >
            <Camera
              className="h-10 w-10 text-text-faint"
              strokeWidth={1.4}
              aria-hidden
            />
            <p className="font-mono text-xs text-text-muted">
              {t("placeholder", { number: pad(slide + 1) })}
            </p>
            <p className="font-display text-[22px] text-text-secondary">
              {caption(current.captionKey)}
            </p>
          </div>
        )}

        <div className="absolute inset-x-4 top-3.5 flex gap-1.5" aria-hidden>
          {slides.map((item, index) => (
            <span
              key={item.captionKey}
              className={cn(
                "h-[3px] flex-1 rounded-sm",
                index <= slide ? "bg-accent" : "bg-text/25",
              )}
            />
          ))}
        </div>

        <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 bg-gradient-to-t from-[rgba(10,12,15,0.9)] to-transparent px-4 pb-3.5 pt-10">
          <div className="min-w-0" aria-live="polite">
            <p className="font-mono text-xs text-accent">
              {pad(slide + 1)} / {pad(count)}
            </p>
            <p className="text-[15px] font-medium">
              {caption(current.captionKey)}
            </p>
          </div>
          <div className="flex flex-none gap-2">
            <GalleryButton
              label={t("previous")}
              onClick={() => setSlide((slide - 1 + count) % count)}
            >
              <ChevronLeft className="h-[18px] w-[18px]" aria-hidden />
            </GalleryButton>
            <GalleryButton
              label={t("next")}
              onClick={() => setSlide((slide + 1) % count)}
            >
              <ChevronRight className="h-[18px] w-[18px]" aria-hidden />
            </GalleryButton>
          </div>
        </div>
      </div>

      <div className="mt-3 flex gap-2.5 overflow-x-auto pb-1">
        {slides.map((item, index) => (
          <button
            key={item.captionKey}
            type="button"
            onClick={() => setSlide(index)}
            aria-label={t("showPhoto", {
              number: index + 1,
              caption: caption(item.captionKey),
            })}
            aria-pressed={index === slide}
            className={cn(
              "interactive relative h-[70px] w-28 flex-none overflow-hidden rounded-lg border-2 bg-surface",
              index === slide
                ? "border-accent"
                : "border-border-card opacity-65",
            )}
          >
            {item.src ? (
              <Image
                src={item.src}
                alt=""
                fill
                sizes="112px"
                className="object-cover"
              />
            ) : (
              <span className="dots flex h-full w-full items-center justify-center font-mono text-xs text-text-muted">
                {pad(index + 1)}
              </span>
            )}
          </button>
        ))}
      </div>

      <div className="mt-7 flex flex-wrap items-start justify-between gap-6">
        <div className="min-w-0 flex-[1_1_380px]">
          <h3 className="font-display text-[28px] font-bold tracking-[-0.02em]">
            {t(`projects.${project.key}.title`)}
          </h3>
          <p className="mt-2.5 max-w-[620px] text-text-secondary">
            {t(`projects.${project.key}.text`)}
          </p>
          <ul className="mt-4 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <li
                key={tag}
                className="rounded-md border border-border-control px-2.5 py-1 font-mono text-xs text-text-secondary"
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>
        <a
          href={project.link}
          target="_blank"
          rel="noopener"
          className="interactive lift inline-flex min-h-11 items-center gap-2 rounded-[10px] border border-border-control px-4 text-sm font-medium"
        >
          {t("viewOnGithub")}
          <ArrowUpRight className="h-[15px] w-[15px]" aria-hidden />
        </a>
      </div>
    </div>
  );
}

function GalleryButton({
  label,
  onClick,
  children,
}: Readonly<{ label: string; onClick: () => void; children: ReactNode }>) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      className="interactive flex h-11 w-11 items-center justify-center rounded-full border border-border-strong bg-background/70 text-text"
    >
      {children}
    </button>
  );
}
