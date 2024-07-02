import AutoclickerImage from "../../../public/useful-autoclicker-3.0-previeuw.webp";
import TravelAgencyImage from "../../../public/travel-agency.webp";
import NoTimeToDieImage from "../../../public/no-time-to-die.webp";
import ProjectCard from "@/components/projects/ProjectCard";
import ExperienceTreeBase from "@/components/projects/ExperienceTreeBase";
import ExperienceTime from "@/components/projects/ExperienceTime";
import Experience from "@/components/projects/Experience";
import { useTranslations } from "next-intl";

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
        <ProjectCard
          title={t("projects.usefulAutoclicker.title")}
          description={t("projects.usefulAutoclicker.text")}
          image={AutoclickerImage}
          link={"https://github.com/Rutger505/Useful-Autoclicker"}
        />
        <ProjectCard
          title={t("projects.travelAgency.title")}
          description={t("projects.travelAgency.text")}
          image={TravelAgencyImage}
          link={"https://github.com/Rutger505/Reisbureau"}
        />
        <ProjectCard
          title={t("projects.noTimeToDie.title")}
          description={t("projects.noTimeToDie.text")}
          image={NoTimeToDieImage}
          link={"https://github.com/Rutger505/Gamejam"}
        />
      </div>
      <h3 className="mt-16 text-3xl text-textPrimary">
        {t("experiences.title")}
      </h3>
      <ExperienceTreeBase className={"mt-10"}>
        <ExperienceTime time={t("experiences.future.title")}>
          <Experience
            title={t("experiences.future.experience1.title")}
            location={t("experiences.future.experience1.place")}
          />
          <Experience
            title={t("experiences.future.experience2.title")}
            location={t("experiences.future.experience2.place")}
          />
        </ExperienceTime>
        <ExperienceTime time={t("experiences.2024.title")} present>
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
