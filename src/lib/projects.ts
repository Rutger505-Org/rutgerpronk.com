import type { StaticImageData } from "next/image";
import dijkerHome from "../../public/projects/dijker-website/01.webp";

export interface ProjectImage {
  src: StaticImageData;
  captionKey: string;
}

export interface Project {
  key: string;
  link: string;
  tags: string[];
  images: ProjectImage[];
}

export const PROJECTS: Project[] = [
  {
    key: "dijker-website",
    link: "https://github.com/Rutger505-Org/dijker-website",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Docker", "Caddy"],
    images: [{ src: dijkerHome, captionKey: "homeDesktop" }],
  },
  {
    key: "kubernetes-platform",
    link: "https://github.com/Rutger505-Org/kubernetes-infrastructure",
    tags: ["K3s", "OpenTofu", "Helm", "Traefik", "GitHub Actions"],
    images: [],
  },
  {
    key: "motorized-blinds",
    link: "https://github.com/Rutger505/motorized-blinds",
    tags: ["Rust", "Embassy", "ESP32", "nRF52840", "3D printing"],
    images: [],
  },
  {
    key: "real-life-soundboard",
    link: "https://github.com/Rutger505/real-life-soundboard",
    tags: ["Rust", "ESP32", "Bluetooth LE", "Kotlin", "Android"],
    images: [],
  },
];

export const TOTAL_PHOTOS = PROJECTS.reduce(
  (sum, project) => sum + project.images.length,
  0,
);
