export type LayerId = "web" | "infra" | "embedded" | "mobile";

export interface Tool {
  id: string;
  name: string;
  layer: LayerId;
  projects: string[];
}

export const LAYERS: LayerId[] = ["web", "infra", "embedded", "mobile"];

export const TOOLS: Tool[] = [
  {
    id: "typescript",
    name: "TypeScript",
    layer: "web",
    projects: ["dijker-website"],
  },
  { id: "nextjs", name: "Next.js", layer: "web", projects: ["dijker-website"] },
  {
    id: "tailwind-css",
    name: "Tailwind CSS",
    layer: "web",
    projects: ["dijker-website"],
  },
  {
    id: "docker",
    name: "Docker",
    layer: "infra",
    projects: ["dijker-website"],
  },
  { id: "caddy", name: "Caddy", layer: "infra", projects: ["dijker-website"] },
  { id: "k3s", name: "K3s", layer: "infra", projects: ["kubernetes-platform"] },
  {
    id: "helm",
    name: "Helm",
    layer: "infra",
    projects: ["kubernetes-platform"],
  },
  {
    id: "traefik",
    name: "Traefik",
    layer: "infra",
    projects: ["kubernetes-platform"],
  },
  {
    id: "opentofu",
    name: "OpenTofu",
    layer: "infra",
    projects: ["kubernetes-platform"],
  },
  { id: "terraform", name: "Terraform", layer: "infra", projects: [] },
  {
    id: "github-actions",
    name: "GitHub Actions",
    layer: "infra",
    projects: ["kubernetes-platform"],
  },
  {
    id: "rust",
    name: "Rust",
    layer: "embedded",
    projects: ["motorized-blinds", "real-life-soundboard"],
  },
  {
    id: "embassy",
    name: "Embassy",
    layer: "embedded",
    projects: ["motorized-blinds"],
  },
  {
    id: "esp32",
    name: "ESP32",
    layer: "embedded",
    projects: ["motorized-blinds", "real-life-soundboard"],
  },
  {
    id: "nrf52840",
    name: "nRF52840",
    layer: "embedded",
    projects: ["motorized-blinds"],
  },
  {
    id: "bluetooth-le",
    name: "Bluetooth LE",
    layer: "embedded",
    projects: ["real-life-soundboard"],
  },
  {
    id: "3d-printing",
    name: "3D printing",
    layer: "embedded",
    projects: ["motorized-blinds"],
  },
  {
    id: "kotlin",
    name: "Kotlin",
    layer: "mobile",
    projects: ["real-life-soundboard"],
  },
  {
    id: "android",
    name: "Android",
    layer: "mobile",
    projects: ["real-life-soundboard"],
  },
];

export const DEFAULT_TOOL = "typescript";

export function relatedTools(tool: Tool): Tool[] {
  return TOOLS.filter(
    (other) =>
      other.id !== tool.id &&
      other.projects.some((project) => tool.projects.includes(project)),
  );
}
