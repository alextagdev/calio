import { Metadata } from "next";
import CategoryPageTemplate from "@/components/templates/CategoryPageTemplate";
import { getCategory } from "@/data/pages";

export const metadata: Metadata = { title: "Tamplarie Aluminiu" };

export default async function Page() {
  const data = getCategory("tamplarie-aluminiu");
  if (!data) return <div>Page not found</div>;

  return (
    <CategoryPageTemplate
      data={data}
      breadcrumbs={[{ label: "Tamplarie Aluminiu" }]}
    />
  );
}
