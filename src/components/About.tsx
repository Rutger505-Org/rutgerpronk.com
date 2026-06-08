import mePhoto from "../../public/me.webp";
import Image from "next/image";
import { useTranslations } from "next-intl";
import SectionHeading from "@/components/SectionHeading";

export default function About() {
  const t = useTranslations("about");

  return (
    <section id="about" className="py-16 too-big:py-24">
      <SectionHeading index="01">{t("title")}</SectionHeading>
      <div className="mt-24 flex flex-wrap items-center gap-x-12 gap-y-10 mdlg:flex-nowrap lg:gap-x-24">
        <div className="flex flex-wrap items-center justify-center gap-10 md:flex-shrink-0 mdlg:flex-col mdlg:flex-nowrap">
          <div className="group relative">
            <div className="absolute -inset-3 -z-10 rounded-full bg-accent/20 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />
            <span className="pointer-events-none absolute -inset-1 rounded-full border border-accent/40" />
            <Image
              className={
                "w-full max-w-[20rem] rounded-full grayscale transition-all duration-500 group-hover:grayscale-0 sm:h-80 sm:w-80"
              }
              src={mePhoto}
              alt={"A picture of me"}
            />
          </div>
        </div>
        <div className="mt-8 max-w-lg flex-shrink text-textSecondary delay-150 sm:min-w-[350px]">
          <p>{t("text1")}</p>
          <p className="mt-7">{t("text2")}</p>
        </div>
      </div>
    </section>
  );
}
