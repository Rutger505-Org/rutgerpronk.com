"use client";

import { createContext, ReactNode, useContext, useMemo, useState } from "react";
import { PROJECTS } from "@/lib/projects";
import { DEFAULT_TOOL } from "@/lib/stack";

interface PortfolioState {
  projectKey: string;
  slide: number;
  toolId: string;
  selectProject: (key: string) => void;
  setSlide: (slide: number) => void;
  selectTool: (id: string) => void;
}

const PortfolioContext = createContext<PortfolioState | null>(null);

export function PortfolioProvider({ children }: { children: ReactNode }) {
  const [projectKey, setProjectKey] = useState(PROJECTS[0].key);
  const [slide, setSlide] = useState(0);
  const [toolId, setToolId] = useState(DEFAULT_TOOL);

  const value = useMemo<PortfolioState>(
    () => ({
      projectKey,
      slide,
      toolId,
      selectProject: (key) => {
        setProjectKey(key);
        setSlide(0);
      },
      setSlide,
      selectTool: setToolId,
    }),
    [projectKey, slide, toolId],
  );

  return (
    <PortfolioContext.Provider value={value}>
      {children}
    </PortfolioContext.Provider>
  );
}

export function usePortfolio() {
  const context = useContext(PortfolioContext);
  if (!context) {
    throw new Error("usePortfolio must be used inside <PortfolioProvider>");
  }
  return context;
}
