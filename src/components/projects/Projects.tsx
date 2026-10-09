import DijkerWebsiteImage from "../../../public/dijker-website.webp";
import ProjectCard from "@/components/projects/ProjectCard";
import ExperienceTreeBase from "@/components/projects/ExperienceTreeBase";
import ExperienceTime from "@/components/projects/ExperienceTime";
import Experience from "@/components/projects/Experience";
import { useTranslations } from "next-intl";
import { StaticImageData } from "next/image";

const PROJECTS: {
  key: string;
  link: string;
  tags: string[];
  image?: StaticImageData;
}[] = [
  {
    key: "dijkerWebsite",
    link: "https://github.com/Rutger505-Org/dijker-website",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Docker", "Caddy"],
    image: DijkerWebsiteImage,
  },
  {
    key: "kubernetesPlatform",
    link: "https://github.com/Rutger505-Org/kubernetes-infrastructure",
    tags: ["K3s", "OpenTofu", "Helm", "Traefik", "GitHub Actions"],
  },
  {
    key: "motorizedBlinds",
    link: "https://github.com/Rutger505/motorized-blinds",
    tags: ["Rust", "Embassy", "ESP32", "nRF52840", "3D printing"],
  },
  {
    key: "realLifeSoundboard",
    link: "https://github.com/Rutger505/real-life-soundboard",
    tags: ["Rust", "ESP32", "Bluetooth LE", "Kotlin", "Android"],
  },
];

export default function Projects() {
  const t = useTranslations("projects");

  return (
    <section id={"projects"} className={"py-24 too-big:py-32"}>
      <h2 className="text-4xl font-bold text-textPrimary sm:text-5xl">
        {t("title")}
      </h2>
      <p className="mt-7 max-w-lg text-textSecondary">{t("text")}</p>
      <h3 className="mt-10 text-3xl  text-textPrimary">
        {t("projects.title")}
      </h3>
      <div className="mt-7  flex flex-col items-start gap-y-8">
        {PROJECTS.map(({ key, link, tags, image }) => (
          <ProjectCard
            key={key}
            title={t(`projects.${key}.title`)}
            description={t(`projects.${key}.text`)}
            tags={tags}
            image={image}
            link={link}
          />
        ))}
      </div>
      <h3 className="mt-16 text-3xl text-textPrimary">
        {t("experiences.title")}
      </h3>
      <ExperienceTreeBase className={"mt-10"}>
        <ExperienceTime time={t("experiences.2026.title")} present>
          <Experience
            title={t("experiences.2026.experience1.title")}
            location={t("experiences.2026.experience1.place")}
          />
          <Experience
            title={t("experiences.2026.experience2.title")}
            location={t("experiences.2026.experience2.place")}
          />
        </ExperienceTime>
        <ExperienceTime time={t("experiences.2024.title")}>
          <Experience
            title={t("experiences.2024.experience1.title")}
            location={t("experiences.2024.experience1.place")}
          />
        </ExperienceTime>
        <ExperienceTime time={t("experiences.2023.title")}>
          <Experience
            title={t("experiences.2023.experience1.title")}
            location={t("experiences.2023.experience1.place")}
          />
        </ExperienceTime>
        <ExperienceTime time={t("experiences.2022.title")}>
          <Experience
            title={t("experiences.2022.experience1.title")}
            location={t("experiences.2022.experience1.place")}
          />
        </ExperienceTime>
      </ExperienceTreeBase>
    </section>
  );
}
