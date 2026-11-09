export type LayerId = "web" | "infra" | "embedded" | "mobile";

export interface Layer {
  id: LayerId;
  modifier: string;
}

export interface Tool {
  id: string;
  name: string;
  abbr: string;
  layer: LayerId;
  daily?: boolean;
  projects: string[];
}

export const LAYERS: Layer[] = [
  { id: "web", modifier: "fn" },
  { id: "infra", modifier: "ctrl" },
  { id: "embedded", modifier: "alt" },
  { id: "mobile", modifier: "shift" },
];

export const TOOLS: Tool[] = [
  { id: "typescript", name: "TypeScript", abbr: "TS", layer: "web", daily: true, projects: ["dijker-website"] },
  { id: "nextjs", name: "Next.js", abbr: "NX", layer: "web", daily: true, projects: ["dijker-website"] },
  { id: "tailwind-css", name: "Tailwind CSS", abbr: "TW", layer: "web", daily: true, projects: ["dijker-website"] },
  { id: "docker", name: "Docker", abbr: "DK", layer: "infra", projects: ["dijker-website"] },
  { id: "caddy", name: "Caddy", abbr: "CD", layer: "infra", projects: ["dijker-website"] },
  { id: "k3s", name: "K3s", abbr: "K3", layer: "infra", projects: ["kubernetes-platform"] },
  { id: "helm", name: "Helm", abbr: "HM", layer: "infra", projects: ["kubernetes-platform"] },
  { id: "traefik", name: "Traefik", abbr: "TR", layer: "infra", projects: ["kubernetes-platform"] },
  { id: "opentofu", name: "OpenTofu", abbr: "OT", layer: "infra", projects: ["kubernetes-platform"] },
  { id: "terraform", name: "Terraform", abbr: "TF", layer: "infra", projects: [] },
  { id: "github-actions", name: "GitHub Actions", abbr: "GA", layer: "infra", daily: true, projects: ["kubernetes-platform"] },
  { id: "rust", name: "Rust", abbr: "RS", layer: "embedded", projects: ["motorized-blinds", "real-life-soundboard"] },
  { id: "embassy", name: "Embassy", abbr: "EM", layer: "embedded", projects: ["motorized-blinds"] },
  { id: "esp32", name: "ESP32", abbr: "E32", layer: "embedded", projects: ["motorized-blinds", "real-life-soundboard"] },
  { id: "nrf52840", name: "nRF52840", abbr: "NRF", layer: "embedded", projects: ["motorized-blinds"] },
  { id: "bluetooth-le", name: "Bluetooth LE", abbr: "BLE", layer: "embedded", projects: ["real-life-soundboard"] },
  { id: "3d-printing", name: "3D printing", abbr: "3D", layer: "embedded", projects: ["motorized-blinds"] },
  { id: "kotlin", name: "Kotlin", abbr: "KT", layer: "mobile", projects: ["real-life-soundboard"] },
  { id: "android", name: "Android", abbr: "AD", layer: "mobile", projects: ["real-life-soundboard"] },
];

export const DEFAULT_TOOL = "typescript";

export function relatedTools(tool: Tool): Tool[] {
  return TOOLS.filter(
    (other) =>
      other.id !== tool.id &&
      other.projects.some((project) => tool.projects.includes(project)),
  );
}
