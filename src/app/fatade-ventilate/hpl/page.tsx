import { Metadata } from "next";
import ProductPageTemplate from "@/components/templates/ProductPageTemplate";
import { pages } from "@/data/pages";

export const metadata: Metadata = { title: "Fațade HPL" };

export default function Page() {
  return (
    <ProductPageTemplate
      data={pages["fatade-ventilate/hpl"]}
      breadcrumbs={[
        { label: "Fațade Ventilate", href: "/fatade-ventilate" },
        { label: "HPL" },
      ]}
    />
  );
}
