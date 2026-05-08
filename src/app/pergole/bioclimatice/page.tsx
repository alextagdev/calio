import { Metadata } from "next";
import ProductPageTemplate from "@/components/templates/ProductPageTemplate";
import { pages } from "@/data/pages";

export const metadata: Metadata = { title: "Pergole Bioclimatice" };

export default function Page() {
  return (
    <ProductPageTemplate
      data={pages["pergole/bioclimatice"]}
      breadcrumbs={[
        { label: "Pergole & Terase", href: "/pergole" },
        { label: "Bioclimatice" },
      ]}
    />
  );
}
