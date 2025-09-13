import Header from "../pages/Header";
import HeroSection from "../pages/HeroSection";
import AboutSection from "../pages/AboutSection";
import ServicesSection from "../pages/ServicesSection";
import ContactSection from "../pages/ContactSection";
import Footer from "../pages/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ContactSection />
      <Footer />
    </div>
  );
}