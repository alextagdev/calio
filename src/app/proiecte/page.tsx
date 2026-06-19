import { Metadata } from "next";
import ProjectsGallery from "@/components/ProjectsGallery";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = { title: "Proiectele noastre" };

export default function Page() {
  return (
    <>
      <PageHero
        title="Proiectele noastre"
        subtitle="Lucrari realizate in toata Romania, pentru clienti exigenti"
        image="/images/balustrada-sticla-scari-plutitoare-1.jpeg"
        imagePosition="center 28%"
        breadcrumbs={[{ label: "Proiecte" }]}
      />
      <div className="[&_section]:!pt-12">
        <ProjectsGallery />
      </div>
    </>
  );
}
