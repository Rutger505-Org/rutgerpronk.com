import ContactForm from "@/components/contact/ContactForm";
import { useTranslations } from "next-intl";
import ContactDescription from "@/components/contact/ContactDescription";

export default function Contact() {
  const t = useTranslations("contact");

  return (
    <section id="contact" className={"py-24 too-big:py-32"}>
      <h2 className="text-4xl font-bold text-textPrimary sm:text-5xl">
        {t("title")}
      </h2>
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
