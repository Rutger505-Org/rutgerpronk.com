import GithubIcon from "@/components/icons/GithubIcon";
import LinkedinIcon from "@/components/icons/LinkedinIcon";
import MailIcon from "@/components/icons/MailIcon";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { SOCIAL_LINKS } from "@/lib/site";

export default function Footer() {
  const t = useTranslations("header");
  const year = new Date().getFullYear();

  return (
    <footer className="flex w-full flex-wrap items-center justify-center gap-x-20 gap-y-8 bg-secondary px-14 py-10 sm:px-20 lg:flex-nowrap ">
      <div className="flex gap-x-8">
        <Link
          href={SOCIAL_LINKS.github}
          target="_blank"
          rel="me noopener"
          aria-label="GitHub"
        >
          <GithubIcon className={"h-7 text-accent"} />
        </Link>
        <Link
          href={SOCIAL_LINKS.linkedin}
          target="_blank"
          rel="me noopener"
          aria-label="LinkedIn"
        >
          <LinkedinIcon className={"h-7 text-accent"} />
        </Link>
        <Link href={"#contact"} aria-label={t("contact")}>
          <MailIcon className={"h-7 text-accent"} />
        </Link>
      </div>
      <p className={"text-textSecondary"}>© {year} Rutger Pronk</p>
    </footer>
  );
}
