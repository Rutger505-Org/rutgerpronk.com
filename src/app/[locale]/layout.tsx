import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import React from "react";
import { getLocale, getMessages, getTranslations } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";
import ReactQueryProvider from "@/components/providers/ReactQueryProvider";
import { Toaster } from "@/components/ui/toaster";
import { routing } from "@/i18n/routing";

const inter = Inter({ subsets: ["latin"] });

export async function generateMetadata(): Promise<Metadata> {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const t = await getTranslations("metadata");
  const locale = await getLocale();
  const alternateLocales = routing.locales.filter((l) => l !== locale);
  const baseUrl =
    process.env.NODE_ENV === "production"
      ? new URL("https://rutgerpronk.com")
      : new URL("http://localhost");

  return {
    metadataBase: baseUrl,
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
      siteName: t("title"),
      type: "website",
      locale: locale,
      alternateLocale: alternateLocales,
      url: baseUrl,
    },
  };
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  return (
    <html lang={locale}>
      <body className={`${inter.className} bg-landing`}>
        <ReactQueryProvider>
          <NextIntlClientProvider>{children}</NextIntlClientProvider>
        </ReactQueryProvider>
        <Toaster />
      </body>
    </html>
  );
}
