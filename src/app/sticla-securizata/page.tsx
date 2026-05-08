import { Metadata } from "next";
import CategoryPageTemplate from "@/components/templates/CategoryPageTemplate";
import { categories } from "@/data/pages";

export const metadata: Metadata = { title: "Sticlă Securizată" };

export default function Page() {
  return (
    <CategoryPageTemplate
      data={categories["sticla-securizata"]}
      breadcrumbs={[{ label: "Sticlă Securizată" }]}
    />
  );
}
