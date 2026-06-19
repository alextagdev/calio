import { Metadata } from "next";
import ProductPageTemplate from "@/components/templates/ProductPageTemplate";
import { pages } from "@/data/pages";

export const metadata: Metadata = { title: "Usi glisante sticla" };

export default function Page() {
  return (
    <ProductPageTemplate
      data={pages["sticla-securizata/usi-glisante"]}
      breadcrumbs={[
        { label: "Sticla securizata", href: "/sticla-securizata" },
        { label: "Usi glisante" },
      ]}
    />
  );
}
