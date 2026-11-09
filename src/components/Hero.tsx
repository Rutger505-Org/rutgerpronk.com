import Image from "next/image";
import { useTranslations } from "next-intl";
import { ArrowDown, Github } from "lucide-react";
import mePhoto from "../../public/me.webp";
import AmsterdamClock from "@/components/AmsterdamClock";
import { SOCIAL_LINKS } from "@/lib/site";

export default function Hero() {
  const t = useTranslations("hero");

  return (
    <section
      id="top"
      className="page-container flex flex-wrap items-center gap-14 pb-[72px] pt-24"
    >
      <div className="min-w-0 flex-[1_1_520px]">
        <div className="inline-flex items-center gap-2.5 rounded-full border border-border-card px-3 py-1.5 font-mono text-xs text-text-secondary">
          <span className="h-2 w-2 rounded-full bg-accent" aria-hidden />
          {t("status")}
        </div>

        <h1 className="mt-6 font-display text-[clamp(44px,6.4vw,84px)] font-bold leading-none tracking-[-0.035em]">
          {t.rich("heading", {
            br: () => <br />,
            muted: (chunks) => <span className="text-text-muted">{chunks}</span>,
          })}
          <span
            className="ml-1.5 inline-block h-[1.05em] w-2.5 animate-blink bg-accent align-[-0.15em]"
            aria-hidden
          />
        </h1>

        <p className="mt-7 max-w-[520px] text-lg text-text-secondary">
          {t("subtitle")}
        </p>

        <div className="mt-9 flex flex-wrap gap-3">
          <a
            href="#work"
            className="interactive lift inline-flex min-h-12 items-center gap-2.5 rounded-[10px] bg-accent px-[22px] font-semibold text-accent-foreground"
          >
            {t("seeWork")}
            <ArrowDown className="h-4 w-4" strokeWidth={2.2} aria-hidden />
          </a>
          <a
            href={SOCIAL_LINKS.github}
            target="_blank"
            rel="me noopener"
            className="interactive lift inline-flex min-h-12 items-center gap-2.5 rounded-[10px] border border-border-control px-5 font-medium text-text"
          >
            <Github className="h-[18px] w-[18px]" strokeWidth={1.8} aria-hidden />
            GitHub
          </a>
        </div>
      </div>

      <figure className="group m-0 min-w-0 flex-[0_1_360px]">
        <div className="relative aspect-[4/5] overflow-hidden rounded-[14px] border border-border-card bg-surface">
          <Image
            src={mePhoto}
            alt={t("portraitAlt")}
            priority
            sizes="(max-width: 440px) 100vw, 360px"
            className="h-full w-full object-cover grayscale-[0.6] transition-[filter,transform] duration-[400ms,600ms] ease-in-out group-hover:scale-[1.03] group-hover:grayscale-0"
          />
          <div className="absolute left-3 top-3 inline-flex items-center gap-2 rounded-lg bg-background/80 px-2.5 py-1.5 font-mono text-xs text-text">
            <span className="h-[7px] w-[7px] rounded-full bg-accent" aria-hidden />
            NL · <AmsterdamClock />
          </div>
        </div>
        <figcaption className="mt-3 flex justify-between gap-3 font-mono text-xs text-text-muted">
          <span>{t("currentlyLabel")}</span>
          <span className="text-right text-text">{t("currently")}</span>
        </figcaption>
      </figure>
    </section>
  );
}
