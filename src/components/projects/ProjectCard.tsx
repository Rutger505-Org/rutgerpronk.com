import Link from "next/link";
import AnimatedButton from "@/components/AnimatedButton";
import Image, { StaticImageData } from "next/image";
import { useTranslations } from "next-intl";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  image?: StaticImageData;
  link: string;
}

export default function ProjectCard({
  title,
  description,
  tags,
  image,
  link,
}: Readonly<ProjectCardProps>) {
  const t = useTranslations("projects.projects");

  return (
    <div
      className={
        "inline-flex flex-wrap gap-6 rounded-lg bg-secondary p-6 sm:p-12"
      }
    >
      <div className={"flex max-w-md flex-col items-start"}>
        <h4 className={"text-2xl text-textPrimary"}>{title}</h4>
        <p className={"mt-5 text-textSecondary"}>{description}</p>
        <ul className={"mt-5 flex flex-wrap gap-2"}>
          {tags.map((tag) => (
            <li
              key={tag}
              className={
                "rounded-full border border-white/10 px-3 py-1 text-sm text-textSecondary"
              }
            >
              {tag}
            </li>
          ))}
        </ul>

        <div className={"flex-1"} />

        <Link
          href={link}
          className={"mt-5"}
          target={"_blank"}
          rel={"noopener"}
          aria-label={`${t("githubLinkText")}: ${title}`}
        >
          <AnimatedButton text={t("githubLinkText")} />
        </Link>
      </div>
      {image && (
        <Image
          className={"max-h-80 w-auto rounded"}
          src={image}
          alt={title}
          sizes="(max-width: 672px) 100vw, 42rem"
        />
      )}
    </div>
  );
}
