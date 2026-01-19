import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { KidsPartySection } from "@/components/KidsPartySection";
import { EventsSection } from "@/components/EventsSection";
import { CorporateSection } from "@/components/CorporateSection";
import { CalendarSection } from "@/components/CalendarSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <KidsPartySection />
      <EventsSection />
      <CorporateSection />
      <CalendarSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
