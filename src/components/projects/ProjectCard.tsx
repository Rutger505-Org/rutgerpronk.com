import Link from "next/link";
import AnimatedButton from "@/components/AnimatedButton";
import Image, { StaticImageData } from "next/image";
import { useTranslations } from "next-intl";

interface ProjectCardProps {
  title: string;
  description: string;
  image: StaticImageData;
  link: string;
}

export default function ProjectCard({
  title,
  description,
  image,
  link,
}: Readonly<ProjectCardProps>) {
  const t = useTranslations("projects.projects");

  return (
    <div
      className={
        "group relative inline-flex flex-wrap gap-6 overflow-hidden rounded-lg border border-transparent bg-secondary p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/50 sm:p-12"
      }
    >
      {/* Accent corner marker */}
      <span className="pointer-events-none absolute right-0 top-0 h-16 w-16 -translate-y-1/2 translate-x-1/2 rotate-45 bg-accent/0 transition-colors duration-300 group-hover:bg-accent/15" />

      <div className={"relative z-10 flex max-w-md flex-col items-start"}>
        <h4 className={"text-2xl text-textPrimary"}>{title}</h4>
        <p className={"mt-5 text-textSecondary"}>{description}</p>

        <div className={"flex-1"} />

        <Link href={link} className={"mt-5"} target={"_blank"}>
          <AnimatedButton text={t("githubLinkText")} />
        </Link>
      </div>
      <div className="relative overflow-hidden rounded-md">
        <Image
          className={
            "max-h-80 w-auto transition-transform duration-500 group-hover:scale-[1.03]"
          }
          src={image}
          alt={`Image of ${title}`}
        />
        <span className="pointer-events-none absolute inset-0 bg-accent/20 opacity-0 mix-blend-multiply transition-opacity duration-300 group-hover:opacity-100" />
      </div>
    </div>
  );
}
