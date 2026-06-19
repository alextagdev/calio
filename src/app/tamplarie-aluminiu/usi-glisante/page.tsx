import { Metadata } from "next";
import ProductPageTemplate from "@/components/templates/ProductPageTemplate";
import { getPage } from "@/data/pages";

export const metadata: Metadata = { title: "Usi Glisante Aluminiu" };

export default async function Page() {
  const data = getPage("tamplarie-aluminiu/usi-glisante");
  if (!data) return <div>Page not found</div>;

  return (
    <ProductPageTemplate
      data={data}
      breadcrumbs={[
        { label: "Tamplarie Aluminiu", href: "/tamplarie-aluminiu" },
        { label: "Usi Glisante" },
      ]}
    />
  );
}
