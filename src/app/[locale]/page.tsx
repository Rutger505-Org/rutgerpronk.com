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
      <main>
        <div className="mx-spacing-mobile max-w-[2300px] sm:mx-spacing too-big:mx-auto">
          <LandingSection />
        </div>

        <div className="relative z-10 bg-primary">
          <div className={"transition-stack"}></div>

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
