import { Metadata } from "next";
import ProductPageTemplate from "@/components/templates/ProductPageTemplate";
import { pages } from "@/data/pages";

export const metadata: Metadata = { title: "Fațade Bond" };

export default function Page() {
  return (
    <ProductPageTemplate
      data={pages["fatade-ventilate/bond"]}
      breadcrumbs={[
        { label: "Fațade Ventilate", href: "/fatade-ventilate" },
        { label: "Bond" },
      ]}
    />
  );
}
