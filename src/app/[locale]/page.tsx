import { setRequestLocale } from "next-intl/server";
import Header from "@/components/header/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Work from "@/components/work/Work";
import Stack from "@/components/stack/Stack";
import Experience from "@/components/experience/Experience";
import Contact from "@/components/contact";
import Footer from "@/components/Footer";
import PersonJsonLd from "@/components/PersonJsonLd";
import { PortfolioProvider } from "@/components/PortfolioContext";

export default async function Home({
  params,
}: Readonly<{ params: Promise<{ locale: string }> }>) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <PersonJsonLd locale={locale} />
      <Header />
      <main>
        <Hero />
        <About />
        <PortfolioProvider>
          <Work />
          <Stack />
        </PortfolioProvider>
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
