"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { usePortfolio } from "@/components/PortfolioContext";
import { LAYERS, LayerId, relatedTools, TOOLS } from "@/lib/stack";
import { cn } from "@/lib/utils";

const KEY_BASE =
  "key flex min-h-16 flex-col rounded-[10px] px-2.5 py-2 text-left font-mono";
const KEY_UP =
  "shadow-[0_4px_0_theme(colors.key.shadow),inset_0_1px_0_rgba(255,255,255,0.06)]";
const KEY_DOWN = "translate-y-[3px] shadow-[0_1px_0_theme(colors.key.shadow)]";

export default function Keyboard() {
  const t = useTranslations("stack");
  const { toolId, selectTool } = usePortfolio();
  const [layer, setLayer] = useState<LayerId | null>(null);

  const selected = TOOLS.find((tool) => tool.id === toolId) ?? TOOLS[0];
  const related = new Set(relatedTools(selected).map((tool) => tool.id));
  const activeLayer = LAYERS.find((l) => l.id === layer);

  return (
    <div className="flex min-w-0 flex-[999_1_640px] flex-col gap-3 rounded-[20px] border border-border-card bg-surface-raised p-[clamp(14px,2vw,24px)] shadow-[0_30px_60px_-30px_rgba(0,0,0,0.6)]">
      {LAYERS.map((l) => {
        const layerOn = layer === l.id;
        const dim = layer !== null && !layerOn;
        return (
          <div key={l.id} className="flex flex-wrap gap-2.5">
            <button
              type="button"
              onClick={() => setLayer(layerOn ? null : l.id)}
              aria-pressed={layerOn}
              aria-label={t("filterLayer", { layer: l.id })}
              className={cn(
                KEY_BASE,
                "w-[104px] flex-none items-start justify-between border border-key-modifier-edge bg-key-modifier text-xs",
                layerOn ? cn(KEY_DOWN, "text-accent") : cn(KEY_UP, "text-text-secondary"),
                dim && "opacity-40",
              )}
            >
              <span className="text-[10px] text-text-muted">{l.modifier}</span>
              <span>{l.id.toUpperCase()}</span>
            </button>

            {TOOLS.filter((tool) => tool.layer === l.id).map((tool) => {
              const pressed = tool.id === selected.id;
              return (
                <button
                  key={tool.id}
                  type="button"
                  onClick={() => selectTool(tool.id)}
                  aria-pressed={pressed}
                  style={{ width: Math.max(84, 28 + tool.name.length * 8.4) }}
                  className={cn(
                    KEY_BASE,
                    "flex-none justify-between",
                    pressed
                      ? cn(KEY_DOWN, "border border-accent bg-key-pressed text-white")
                      : cn(
                          KEY_UP,
                          "bg-key text-text",
                          related.has(tool.id)
                            ? "border border-dashed border-accent"
                            : "border border-key-edge",
                        ),
                    dim && "opacity-25",
                  )}
                >
                  <span className="flex items-center justify-between text-[10px] text-text-muted">
                    {tool.abbr}
                    <span
                      className={cn(
                        "h-1.5 w-1.5 rounded-full",
                        tool.daily
                          ? "bg-accent shadow-[0_0_6px_theme(colors.accent.DEFAULT)]"
                          : "bg-border-control",
                      )}
                      aria-hidden
                    />
                  </span>
                  <span className="whitespace-nowrap text-[13px]">{tool.name}</span>
                </button>
              );
            })}
          </div>
        );
      })}

      <div
        className="mt-0.5 flex min-h-11 items-center justify-center rounded-[10px] bg-key-modifier px-3 text-center font-mono text-[11px] text-text-muted shadow-[0_4px_0_theme(colors.key.shadow),inset_0_1px_0_rgba(255,255,255,0.05)]"
        aria-live="polite"
      >
        {activeLayer
          ? t("spaceFiltered", {
              count: TOOLS.filter((tool) => tool.layer === activeLayer.id).length,
              layer: activeLayer.id,
              modifier: activeLayer.modifier,
            })
          : t("spaceAll", { keys: TOOLS.length, layers: LAYERS.length })}
      </div>
    </div>
  );
}
