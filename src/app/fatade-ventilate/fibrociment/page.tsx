import { Metadata } from "next";
import ProductPageTemplate from "@/components/templates/ProductPageTemplate";
import { pages } from "@/data/pages";

export const metadata: Metadata = { title: "Fatade fibrociment" };

export default function Page() {
  return (
    <ProductPageTemplate
      data={pages["fatade-ventilate/fibrociment"]}
      breadcrumbs={[
        { label: "Fatade ventilate", href: "/fatade-ventilate" },
        { label: "Fibrociment" },
      ]}
    />
  );
}
