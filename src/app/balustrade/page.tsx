import { Metadata } from "next";
import CategoryPageTemplate from "@/components/templates/CategoryPageTemplate";
import { categories } from "@/data/pages";

export const metadata: Metadata = { title: "Balustrade" };

export default function Page() {
  return (
    <CategoryPageTemplate
      data={categories["balustrade"]}
      breadcrumbs={[{ label: "Balustrade" }]}
    />
  );
}
