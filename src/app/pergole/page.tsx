import { Metadata } from "next";
import CategoryPageTemplate from "@/components/templates/CategoryPageTemplate";
import { categories } from "@/data/pages";

export const metadata: Metadata = { title: "Pergole & Terase" };

export default function Page() {
  return (
    <CategoryPageTemplate
      data={categories["pergole"]}
      breadcrumbs={[{ label: "Pergole & Terase" }]}
    />
  );
}
