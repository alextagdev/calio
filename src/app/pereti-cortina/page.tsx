import { Metadata } from "next";
import ProductPageTemplate from "@/components/templates/ProductPageTemplate";
import { getPage } from "@/data/pages";

export const metadata: Metadata = { title: "Pereti Cortina" };

export default async function Page() {
  const data = getPage("pereti-cortina");
  if (!data) return <div>Page not found</div>;

  return (
    <ProductPageTemplate
      data={data}
      breadcrumbs={[
        { label: "Acasa", href: "/" },
        { label: "Pereti Cortina" },
      ]}
    />
  );
}
