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
        image="/images/balustrada-sticla-scari-interior-2.jpeg"
        breadcrumbs={[{ label: "Contact" }]}
      />
      <div className="[&_section]:!pt-12">
        <ContactSection />
      </div>
    </>
  );
}
