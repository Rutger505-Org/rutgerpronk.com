import ContactForm from "@/components/contact/ContactForm";
import { useTranslations } from "next-intl";

export default function Contact() {
  const t = useTranslations("contact");

  return (
    <section id="contact" className={"py-24 too-big:py-32"}>
      <h2 className="text-5xl font-bold text-textPrimary">{t("title")}</h2>
      <div
        className={
          "mt-4 flex flex-wrap justify-between gap-x-7 gap-y-14 lg:flex-nowrap"
        }
      >
        <p className="mt-8 max-w-2xl text-xl text-textSecondary">{t("text")}</p>
        <ContactForm />
      </div>
    </section>
  );
}
