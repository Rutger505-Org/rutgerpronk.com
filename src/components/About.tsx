import mePhoto from "../../public/me.webp";
import Image from "next/image";
import { useTranslations } from "next-intl";

export default function About() {
  const t = useTranslations("about");

  return (
    <section id="about" className="py-16 too-big:py-24">
      <h2 className="text-4xl font-bold text-textPrimary sm:text-5xl">
        {t("title")}
      </h2>
      <div className="mt-24 flex flex-wrap items-center gap-x-12 gap-y-10 mdlg:flex-nowrap lg:gap-x-24">
        <div className="flex flex-wrap items-center justify-center gap-10 md:flex-shrink-0 mdlg:flex-col mdlg:flex-nowrap">
          <Image
            className={"w-full max-w-[20rem] rounded-full sm:h-80 sm:w-80"}
            src={mePhoto}
            alt={"A picture of me"}
          />
        </div>
        <div className="mt-8 max-w-lg flex-shrink text-textSecondary delay-150 sm:min-w-[350px]">
          <p>{t("text1")}</p>
          <p className="mt-7">{t("text2")}</p>
        </div>
      </div>
    </section>
  );
}
