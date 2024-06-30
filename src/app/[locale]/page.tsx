import Footer from "@/components/Footer";
import About from "@/components/About";
import LandingSection from "@/components/LandingSection";
import Projects from "@/components/projects";
import Contact from "@/components/contact";
import MobileHeader from "@/components/header/MobileHeader";
import { NextIntlClientProvider, useLocale, useMessages } from "next-intl";
import DesktopHeader from "@/components/header/DesktopHeader";

export default function Home() {
  const locale = useLocale();
  const messages = useMessages();

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <DesktopHeader />
      <MobileHeader />

      <Footer />
    </NextIntlClientProvider>
  );
}
