import type { ReactNode } from "react";
import { useTranslations } from "next-intl";
import { ArrowDown, Github } from "lucide-react";
import AmsterdamClock from "@/components/AmsterdamClock";
import { PROJECTS } from "@/lib/projects";
import { SOCIAL_LINKS } from "@/lib/site";

const MONOGRAM = String.raw` ____  ____
|  _ \|  _ \
| |_) | |_) |
|  _ <|  __/
|_| \_\_|`;

const PALETTE = [
  "bg-accent",
  "bg-warm",
  "bg-syntax-key",
  "bg-syntax-string",
  "bg-text-secondary",
  "bg-border-strong",
];

function Prompt() {
  return <span className="text-accent">$</span>;
}

function TerminalCard() {
  const t = useTranslations("hero");

  const rows: [string, ReactNode][] = [
    ["stack", "TypeScript · Next.js · Rust"],
    ["infra", "K3s · OpenTofu · Helm"],
    ["metal", "ESP32 · nRF52840"],
    ["shipped", t("card.shipped", { count: PROJECTS.length })],
    [
      "host",
      <>
        <span className="text-accent" aria-hidden>
          ●
        </span>{" "}
        {t("card.host")}
      </>,
    ],
  ];

  return (
    <div
      role="group"
      aria-label={t("card.label")}
      className="overflow-hidden rounded-[14px] border border-border-card bg-surface font-mono"
    >
      <div className="flex items-center gap-2 border-b border-border px-3.5 py-3 text-xs text-text-muted">
        {[0, 1, 2].map((dot) => (
          <span
            key={dot}
            className="h-2.5 w-2.5 rounded-full bg-border-control"
            aria-hidden
          />
        ))}
        <span className="ml-2">rutger@homelab: ~</span>
      </div>

      <div className="px-[22px] pb-[22px] pt-5 text-[13px] leading-[1.7]">
        <div>
          <Prompt /> whoami --long
        </div>

        <div className="mt-3.5 flex flex-wrap items-start gap-5">
          <pre
            aria-hidden
            className="m-0 font-mono text-xs leading-[1.25] text-accent"
          >
            {MONOGRAM}
          </pre>
          <dl className="m-0 grid min-w-0 grid-cols-[auto_1fr] gap-x-3.5 gap-y-0.5">
            <dt className="text-text-muted">role</dt>
            <dd>{t("card.role")}</dd>
            <dt className="text-text-muted">study</dt>
            <dd>{t("card.study")}</dd>
            <dt className="text-text-muted">local</dt>
            <dd>
              NL · <AmsterdamClock />
            </dd>
          </dl>
        </div>

        <dl className="mt-4 grid grid-cols-[auto_1fr] gap-x-3.5 gap-y-1 border-t border-dashed border-border-control pt-3.5">
          {rows.map(([label, value]) => (
            <div key={label} className="contents">
              <dt className="text-text-muted">{label}</dt>
              <dd>{value}</dd>
            </div>
          ))}
        </dl>

        <div className="mt-[18px] flex gap-1.5" aria-hidden>
          {PALETTE.map((color) => (
            <span key={color} className={`h-3 w-[22px] rounded-sm ${color}`} />
          ))}
        </div>

        <div className="mt-[18px]">
          <Prompt />{" "}
          <span
            className="inline-block h-[15px] w-2 animate-blink bg-text align-[-3px]"
            aria-hidden
          />
        </div>
      </div>
    </div>
  );
}

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
            muted: (chunks) => (
              <span className="text-text-muted">{chunks}</span>
            ),
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
            <Github
              className="h-[18px] w-[18px]"
              strokeWidth={1.8}
              aria-hidden
            />
            GitHub
          </a>
        </div>
      </div>

      <figure className="m-0 min-w-0 flex-[0_1_400px]">
        <TerminalCard />
        <figcaption className="mt-3 flex justify-between gap-3 font-mono text-xs text-text-muted">
          <span>{t("currentlyLabel")}</span>
          <span className="text-right text-text">{t("currently")}</span>
        </figcaption>
      </figure>
    </section>
  );
}
