import { Metadata } from "next";
import CategoryPageTemplate from "@/components/templates/CategoryPageTemplate";
import { categories } from "@/data/pages";

export const metadata: Metadata = { title: "Fațade Ventilate" };

export default function Page() {
  return (
    <CategoryPageTemplate
      data={categories["fatade-ventilate"]}
      breadcrumbs={[{ label: "Fațade Ventilate" }]}
    />
  );
}
