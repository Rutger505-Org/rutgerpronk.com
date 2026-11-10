import type { StaticImageData } from "next/image";
import dijkerHome from "../../public/projects/dijker-website/01.webp";

export interface ProjectSlide {
  captionKey: string;
  src?: StaticImageData;
}

export interface Project {
  key: string;
  link: string;
  linkKind: "github" | "website";
  tags: string[];
  slides: ProjectSlide[];
}

export const PROJECTS: Project[] = [
  {
    key: "dijker-website",
    link: "https://dijker.eu",
    linkKind: "website",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Docker", "Caddy"],
    slides: [
      { captionKey: "homeDesktop", src: dijkerHome },
      { captionKey: "homeMobile" },
      { captionKey: "languageSwitch" },
      { captionKey: "previewEnvironment" },
    ],
  },
  {
    key: "kubernetes-platform",
    link: "https://github.com/Rutger505-Org/kubernetes-infrastructure",
    linkKind: "github",
    tags: ["K3s", "OpenTofu", "Helm", "Traefik", "GitHub Actions"],
    slides: [
      { captionKey: "hardware" },
      { captionKey: "deployRun" },
      { captionKey: "previewUrl" },
    ],
  },
  {
    key: "motorized-blinds",
    link: "https://github.com/Rutger505/motorized-blinds",
    linkKind: "github",
    tags: ["Rust", "Embassy", "ESP32", "nRF52840", "3D printing"],
    slides: [
      { captionKey: "motorModule" },
      { captionKey: "remote" },
      { captionKey: "mounted" },
      { captionKey: "board" },
    ],
  },
  {
    key: "real-life-soundboard",
    link: "https://github.com/Rutger505/real-life-soundboard",
    linkKind: "github",
    tags: ["Rust", "ESP32", "Bluetooth LE", "Kotlin", "Android"],
    slides: [
      { captionKey: "buttons" },
      { captionKey: "app" },
      { captionKey: "wiring" },
    ],
  },
];

export const TOTAL_SLIDES = PROJECTS.reduce(
  (sum, project) => sum + project.slides.length,
  0,
);
