"use client";

import { ReactNode, useState } from "react";
import { useTranslations } from "next-intl";
import { usePortfolio } from "@/components/PortfolioContext";
import { LAYERS, LayerId, relatedTools, TOOLS } from "@/lib/stack";
import { cn } from "@/lib/utils";

interface Line {
  key: string;
  indent: 0 | 2 | 4;
  dim: boolean;
  content: ReactNode;
}

const INDENT = {
  0: "pl-3",
  2: "pl-[calc(12px+2ch)]",
  4: "pl-[calc(12px+4ch)]",
};

const TOKEN =
  "token m-0 inline whitespace-nowrap rounded-[3px] border-0 px-0.5 py-0 [font:inherit] leading-[inherit]";
const ON = "bg-accent text-accent-foreground";

export default function StackJson() {
  const t = useTranslations("stack");
  const { toolId, selectTool } = usePortfolio();
  const [layer, setLayer] = useState<LayerId | null>(null);

  const selected = TOOLS.find((tool) => tool.id === toolId) ?? TOOLS[0];
  const related = new Set(relatedTools(selected).map((tool) => tool.id));

  const lines: Line[] = [{ key: "open", indent: 0, dim: false, content: "{" }];
  LAYERS.forEach((id, layerIndex) => {
    const layerOn = layer === id;
    const dim = layer !== null && !layerOn;
    const tools = TOOLS.filter((tool) => tool.layer === id);

    lines.push({
      key: id,
      indent: 2,
      dim,
      content: (
        <>
          <button
            type="button"
            onClick={() => setLayer(layerOn ? null : id)}
            aria-pressed={layerOn}
            aria-label={t("filterLayer", { layer: id })}
            className={cn(
              TOKEN,
              layerOn ? ON : "bg-transparent text-syntax-key",
            )}
          >
            &quot;{id}&quot;
          </button>
          : [
        </>
      ),
    });

    tools.forEach((tool, toolIndex) => {
      const pressed = tool.id === selected.id;
      lines.push({
        key: tool.id,
        indent: 4,
        dim,
        content: (
          <>
            <button
              type="button"
              onClick={() => selectTool(tool.id)}
              aria-pressed={pressed}
              className={cn(
                TOKEN,
                pressed
                  ? ON
                  : related.has(tool.id)
                    ? "bg-syntax-string/[0.14] text-syntax-string"
                    : "bg-transparent text-syntax-string",
              )}
            >
              &quot;{tool.name}&quot;
            </button>
            {toolIndex < tools.length - 1 && ","}
          </>
        ),
      });
    });

    lines.push({
      key: `${id}-close`,
      indent: 2,
      dim,
      content: layerIndex < LAYERS.length - 1 ? "]," : "]",
    });
  });
  lines.push({ key: "close", indent: 0, dim: false, content: "}" });

  return (
    <div className="flex min-w-0 flex-[999_1_640px] flex-col overflow-hidden rounded-[20px] border border-border-card bg-surface shadow-[0_30px_60px_-30px_rgba(0,0,0,0.6)]">
      <div className="py-5 font-mono text-[13.5px] leading-normal text-text">
        <div className="flex border-y border-border-strong">
          <span className="w-14 flex-none" aria-hidden />
          <span className="flex min-w-0 flex-1 flex-wrap justify-between gap-x-4 border-l border-border-strong pl-3 pr-4">
            <span>
              File: <b>stack.json</b>
            </span>
            <span className="text-text-muted" aria-live="polite">
              {layer
                ? t("filtered", {
                    layer,
                    count: TOOLS.filter((tool) => tool.layer === layer).length,
                  })
                : t("summary", { tools: TOOLS.length, layers: LAYERS.length })}
            </span>
          </span>
        </div>
        {lines.map((line, index) => (
          <div
            key={line.key}
            className={cn(
              "flex transition-opacity duration-200",
              line.dim && "opacity-30",
              index === lines.length - 1 && "border-b border-border-strong",
            )}
          >
            <span
              className="w-14 flex-none pr-2.5 text-right text-syntax-gutter"
              aria-hidden
            >
              {index + 1}
            </span>
            <div
              className={cn(
                "min-w-0 flex-1 border-l border-border-strong",
                INDENT[line.indent],
              )}
            >
              {line.content}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
