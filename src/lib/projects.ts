import type { StaticImageData } from "next/image";
import dijkerHome from "../../public/projects/dijker-website/01.png";
import dijkerHomeMobile from "../../public/projects/dijker-website/02.png";
import dijkerLanguageSwitch from "../../public/projects/dijker-website/03.png";
import dijkerPreview from "../../public/projects/dijker-website/04.png";
import k8sDeployRun from "../../public/projects/kubernetes-platform/02.png";
import k8sPreviewUrl from "../../public/projects/kubernetes-platform/03.png";
import soundboardButtons from "../../public/projects/real-life-soundboard/01.jpg";
import soundboardApp from "../../public/projects/real-life-soundboard/02.png";
import soundboardWiring from "../../public/projects/real-life-soundboard/03.jpg";

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
      { captionKey: "homeMobile", src: dijkerHomeMobile },
      { captionKey: "languageSwitch", src: dijkerLanguageSwitch },
      { captionKey: "previewEnvironment", src: dijkerPreview },
    ],
  },
  {
    key: "kubernetes-platform",
    link: "https://github.com/Rutger505-Org/kubernetes-infrastructure",
    linkKind: "github",
    tags: ["K3s", "OpenTofu", "Helm", "Traefik", "GitHub Actions"],
    slides: [
      { captionKey: "hardware" },
      { captionKey: "deployRun", src: k8sDeployRun },
      { captionKey: "previewUrl", src: k8sPreviewUrl },
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
      { captionKey: "buttons", src: soundboardButtons },
      { captionKey: "app", src: soundboardApp },
      { captionKey: "wiring", src: soundboardWiring },
    ],
  },
];

export const TOTAL_SLIDES = PROJECTS.reduce(
  (sum, project) => sum + project.slides.length,
  0,
);
