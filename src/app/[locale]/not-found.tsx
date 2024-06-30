import AnimatedButton from "@/components/AnimatedButton";
import Link from "next/link";
import { useTranslations } from "next-intl";

export default function Custom404() {
  const t = useTranslations("notFound");
  return (
    <div className={"flex h-screen w-screen items-center justify-center p-6"}>
      <div className={"flex flex-col items-center"}>
          <h1 className={"text-2xl font-medium text-textPrimary"}>{t("title")}</h1>
        <Link href={"/"} className={"mt-10"}>
          <AnimatedButton text={t("buttonText")} />
        </Link>
      </div>
    </div>
  );
}
