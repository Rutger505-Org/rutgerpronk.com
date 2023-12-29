import Header from "@/components/Header";
import Footer from "@/components/Footer";
import About from "@/components/About";
import LandingPage from "@/components/LandingPage";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Header />
      <main className=" mx-spacing max-w-[2300px] too-big:mx-auto ">
        <LandingPage />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
