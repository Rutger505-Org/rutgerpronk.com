import { getTranslations } from "next-intl/server";
import { SITE_URL, SKILLS, SOCIAL_LINKS } from "@/lib/site";

export default async function PersonJsonLd({
  locale,
}: Readonly<{ locale: string }>) {
  const t = await getTranslations({ locale, namespace: "metadata" });

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    url: `${SITE_URL}/${locale}`,
    inLanguage: locale,
    mainEntity: {
      "@type": "Person",
      "@id": `${SITE_URL}/#person`,
      name: "Rutger Pronk",
      url: SITE_URL,
      image: `${SITE_URL}/me.webp`,
      jobTitle: "Software Developer",
      description: t("description"),
      knowsAbout: SKILLS,
      sameAs: Object.values(SOCIAL_LINKS),
    },
  };

  return (
    <script
      type="application/ld+json"
      // Escaping "<" prevents a value from closing the script tag early.
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
      }}
    />
  );
}
