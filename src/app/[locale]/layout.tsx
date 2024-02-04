import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import React from "react";
import { getLocale, getTranslations } from "next-intl/server";
import { locales } from "../../../i18n.config";

const inter = Inter({ subsets: ["latin"] });

export async function generateMetadata(): Promise<Metadata> {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const t = await getTranslations("metadata");
  const locale = await getLocale();
  const alternateLocales = locales.filter((l) => l !== locale);

  return {
    title: t("title"),
    description: t("description"),
    keywords: [
      "Rutger Pronk",
      "Rutger",
      "Pronk",
      "Software Developer",
      "Portfolio",
      "Next.js",
      "TypeScript",
    ],
    openGraph: {
      title: t("title"),
      description: t("description"),
      type: "website",
      locale: locale,
      alternateLocale: alternateLocales,
      url: "https://rutgerpronk.com",
    },
  };
}

export default function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  return (
    <html lang={locale}>
      <body className={`${inter.className} bg-primary`}>{children}</body>
    </html>
  );
}
