import { Metadata } from "next";
import ProjectsGallery from "@/components/ProjectsGallery";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = { title: "Proiectele Noastre" };

export default function Page() {
  return (
    <>
      <PageHero
        title="Proiectele Noastre"
        subtitle="Lucrări realizate în toată România, pentru clienți exigenți"
        image="https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1920&q=85"
        breadcrumbs={[{ label: "Proiecte" }]}
      />
      <div className="[&_section]:!pt-12">
        <ProjectsGallery />
      </div>
    </>
  );
}
