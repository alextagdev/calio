import { Metadata } from "next";
import PageHero from "@/components/PageHero";
import AboutSection from "@/components/AboutSection";
import StatsSection from "@/components/StatsSection";
import TestimonialsSection from "@/components/TestimonialsSection";

export const metadata: Metadata = { title: "Despre Calio" };

export default function Page() {
  return (
    <>
      <PageHero
        title="Despre Calio"
        subtitle="15 ani de excelență în sisteme de tâmplărie premium"
        image="/images/fatada-rezidentiala-balustrade-2.jpeg"
        breadcrumbs={[{ label: "Despre noi" }]}
      />
      <div className="[&_section#despre]:pt-16">
        <AboutSection />
      </div>
      <StatsSection />
      <TestimonialsSection />
    </>
  );
}
