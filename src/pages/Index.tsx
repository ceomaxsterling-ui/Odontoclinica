import Header from "@/components/Header";
import HeroSection from "@/components/sections/HeroSection";
import DifferentialsSection from "@/components/sections/DifferentialsSection";
import TreatmentsSection from "@/components/sections/TreatmentsSection";
import GallerySection from "@/components/sections/GallerySection";
import SmileSimulatorSection from "@/components/sections/SmileSimulatorSection";
import BlogSection from "@/components/sections/BlogSection";
import ContactSection from "@/components/sections/ContactSection";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <DifferentialsSection />
        <TreatmentsSection />
        <GallerySection />
        <SmileSimulatorSection />
        <BlogSection />
        <ContactSection />
      </main>
      <Footer />
      <ScrollToTop />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
