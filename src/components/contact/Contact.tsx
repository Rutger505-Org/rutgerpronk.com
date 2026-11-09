import { useTranslations } from "next-intl";
import ContactForm from "@/components/contact/ContactForm";
import CopyEmailButton from "@/components/contact/CopyEmailButton";
import { SOCIAL_LINKS } from "@/lib/site";

export default function Contact() {
  const t = useTranslations("contact");

  return (
    <section id="contact" className="border-t border-border bg-background-alt">
      <div className="page-container flex flex-wrap gap-14 py-24">
        <div className="min-w-0 flex-[1_1_380px]">
          <p className="eyebrow">{t("label")}</p>
          <h2 className="section-title mt-2.5">
            {t.rich("title", { br: () => <br /> })}
          </h2>
          <p className="mt-5 max-w-[440px] text-text-secondary">{t("text")}</p>
          <CopyEmailButton />
          <div className="mt-5 flex gap-2.5">
            <a
              href={SOCIAL_LINKS.github}
              target="_blank"
              rel="me noopener"
              className="interactive inline-flex min-h-11 items-center rounded-[10px] border border-border-control px-3.5 text-sm"
            >
              GitHub
            </a>
            <a
              href={SOCIAL_LINKS.linkedin}
              target="_blank"
              rel="me noopener"
              className="interactive inline-flex min-h-11 items-center rounded-[10px] border border-border-control px-3.5 text-sm"
            >
              LinkedIn
            </a>
          </div>
        </div>
        <ContactForm />
      </div>
    </section>
  );
}
