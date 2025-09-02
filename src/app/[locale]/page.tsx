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

        <div className={"transition-stack"}></div>

        <div className=" bg-[#1c1b26] ">
          <div className="mx-spacing-mobile max-w-[2300px]  sm:mx-spacing too-big:mx-auto">
            <About />
          </div>
        </div>

        <div className={"transition-stack transition-stack-reverse"}></div>

        <div className="mx-spacing-mobile max-w-[2300px] sm:mx-spacing too-big:mx-auto">
          <Projects />
        </div>

        <div className="mx-spacing-mobile max-w-[2300px] sm:mx-spacing too-big:mx-auto">
          <Contact />
        </div>
      </main>

      <Footer />
    </>
  );
}
