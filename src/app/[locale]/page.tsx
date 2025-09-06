import Footer from "@/components/Footer";
import About from "@/components/About";
import LandingSection from "@/components/LandingSection";
import Projects from "@/components/projects";
import Contact from "@/components/contact";
import MobileHeader from "@/components/header/MobileHeader";
import DesktopHeader from "@/components/header/DesktopHeader";

export default function Home() {
  return (
    <>
      <DesktopHeader />
      <MobileHeader />
      <main className="mx-spacing-mobile max-w-[2300px] sm:mx-spacing too-big:mx-auto">
        <LandingSection />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
