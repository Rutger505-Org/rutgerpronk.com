import GithubIcon from "@/components/icons/GithubIcon";
import LinkedinIcon from "@/components/icons/LinkedinIcon";
import MailIcon from "@/components/icons/MailIcon";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="flex w-full flex-wrap items-center justify-center gap-x-20 gap-y-8 bg-secondary px-14 py-10 sm:px-20 lg:flex-nowrap ">
      <div className="flex gap-x-8">
        <Link href="https://github.com/Rutger505" target="_blank">
          <GithubIcon className={"h-7 text-accent"} />
        </Link>
        <Link
          href="https://www.linkedin.com/in/rutger-pronk-585149273/"
          target="_blank"
        >
          <LinkedinIcon className={"h-7 text-accent"} />
        </Link>
        <Link href={"#contact"}>
          <MailIcon className={"h-7 text-accent"} />
        </Link>
      </div>
      <p className={"text-textSecondary"}>© 2023 Rutger Pronk</p>
    </footer>
  );
}
