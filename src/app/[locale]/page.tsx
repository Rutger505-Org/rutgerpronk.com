import Footer from "@/components/Footer";
import About from "@/components/About";
import LandingSection from "@/components/LandingSection";
import Projects from "@/components/projects";
import Contact from "@/components/contact";
import MobileHeader from "@/components/header/MobileHeader";
import DesktopHeader from "@/components/header/DesktopHeader";
import PersonJsonLd from "@/components/PersonJsonLd";
import { setRequestLocale } from "next-intl/server";

export default async function Home({
  params,
}: Readonly<{ params: Promise<{ locale: string }> }>) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <PersonJsonLd locale={locale} />
      <DesktopHeader />
      <MobileHeader />
      <main>
        <div className="mx-spacing-mobile max-w-[2300px] sm:mx-spacing too-big:mx-auto">
          <LandingSection />
        </div>

        <div className="relative z-10 bg-primary">
          <div className="mx-spacing-mobile max-w-[2300px] sm:mx-spacing too-big:mx-auto">
            <About />
          </div>

          <div className="mx-spacing-mobile max-w-[2300px] sm:mx-spacing too-big:mx-auto">
            <Projects />
          </div>

          <div className="mx-spacing-mobile max-w-[2300px] sm:mx-spacing too-big:mx-auto">
            <Contact />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
