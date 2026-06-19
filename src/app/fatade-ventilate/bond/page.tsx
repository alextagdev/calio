import { Metadata } from "next";
import ProductPageTemplate from "@/components/templates/ProductPageTemplate";
import { pages } from "@/data/pages";

export const metadata: Metadata = { title: "Fatade Bond" };

export default function Page() {
  return (
    <ProductPageTemplate
      data={pages["fatade-ventilate/bond"]}
      breadcrumbs={[
        { label: "Fatade ventilate", href: "/fatade-ventilate" },
        { label: "Bond" },
      ]}
    />
  );
}
