import { Metadata } from "next";
import CategoryPageTemplate from "@/components/templates/CategoryPageTemplate";
import { categories } from "@/data/pages";

export const metadata: Metadata = { title: "Tâmplărie PVC" };

export default function Page() {
  return (
    <CategoryPageTemplate
      data={categories["tamplarie-pvc"]}
      breadcrumbs={[{ label: "Tâmplărie PVC" }]}
    />
  );
}
