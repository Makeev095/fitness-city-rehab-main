import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { AboutSection } from "@/components/sections/AboutSection";
import { ContactsSection } from "@/components/sections/ContactsSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { LocationSection } from "@/components/sections/LocationSection";
import { PricingSection } from "@/components/sections/PricingSection";
import { ScheduleSection } from "@/components/sections/ScheduleSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { TrainersSection } from "@/components/sections/TrainersSection";
import { siteConfig } from "@/config/siteConfig";

const Index = () => {
  const location = useLocation();

  useEffect(() => {
    document.title = `${siteConfig.name} — ${siteConfig.tagline}`;
  }, []);

  // Обработка якорей при переходе с других страниц
  useEffect(() => {
    if (location.hash) {
      // Небольшая задержка для рендеринга контента
      setTimeout(() => {
        const target = document.querySelector(location.hash);
        if (target) {
          target.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else {
      // Если нет якоря, скроллим наверх
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [location]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <TrainersSection />
        <PricingSection />
        <LocationSection />
        <ScheduleSection />
        <ContactsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
