import { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ContactSection from "@/components/ContactSection";

export const metadata: Metadata = { title: "Contact" };

export default function Page() {
  return (
    <>
      <PageHero
        title="Contact"
        subtitle="Suntem aici să te ajutăm — contactează-ne pentru o ofertă gratuită"
        image="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=1920&q=60"
        breadcrumbs={[{ label: "Contact" }]}
      />
      <div className="[&_section]:!pt-12">
        <ContactSection />
      </div>
    </>
  );
}
