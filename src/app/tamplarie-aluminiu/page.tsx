import { Metadata } from "next";
import CategoryPageTemplate from "@/components/templates/CategoryPageTemplate";
import { categories } from "@/data/pages";

export const metadata: Metadata = { title: "Tâmplărie Aluminiu" };

export default function Page() {
  return (
    <CategoryPageTemplate
      data={categories["tamplarie-aluminiu"]}
      breadcrumbs={[{ label: "Tâmplărie Aluminiu" }]}
    />
  );
}
