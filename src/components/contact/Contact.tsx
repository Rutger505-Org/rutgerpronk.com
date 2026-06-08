import ContactForm from "@/components/contact/ContactForm";
import { useTranslations } from "next-intl";
import ContactDescription from "@/components/contact/ContactDescription";
import SectionHeading from "@/components/SectionHeading";

export default function Contact() {
  const t = useTranslations("contact");

  return (
    <section id="contact" className={"py-24 too-big:py-32"}>
      <SectionHeading index="03">{t("title")}</SectionHeading>
      <div
        className={
          "mt-4 flex flex-wrap justify-between gap-x-7 gap-y-14 lg:flex-nowrap"
        }
      >
        <ContactDescription />
        <ContactForm />
      </div>
    </section>
  );
}
