import HeroSlider from "@/components/HeroSlider";
import ProductsSection from "@/components/ProductsSection";
import SystemsSection from "@/components/SystemsSection";
import ParallaxBanner from "@/components/ParallaxBanner";
import ProjectsGallery from "@/components/ProjectsGallery";
import StatsSection from "@/components/StatsSection";
import AboutSection from "@/components/AboutSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <div className="-mt-[92px]">
      <HeroSlider />
      <ProductsSection />
      <ParallaxBanner
        image="/images/balustrada-sticla-scari-interior-3.jpeg"
        subtitle="Performanță certificată"
        title="Tehnologie europeană,\nconstruită în România"
        ctaText="Sisteme disponibile"
        ctaHref="/tamplarie-aluminiu"
      />
      <SystemsSection />
      <StatsSection />
      <ParallaxBanner
        image="/images/balustrada-sticla-scari-plutitoare-1.jpeg"
        subtitle="Portofoliu"
        title="Proiecte care definesc\narhitectura modernă"
        ctaText="Explorează proiectele"
        ctaHref="/proiecte"
      />
      <ProjectsGallery />
      <AboutSection />
      <TestimonialsSection />
      <ContactSection />
    </div>
  );
}
