import { Metadata } from "next";
import ProductPageTemplate from "@/components/templates/ProductPageTemplate";
import { pages } from "@/data/pages";

export const metadata: Metadata = { title: "Uși Batante Sticlă" };

export default function Page() {
  return (
    <ProductPageTemplate
      data={pages["sticla-securizata/usi-batante"]}
      breadcrumbs={[
        { label: "Sticlă Securizată", href: "/sticla-securizata" },
        { label: "Uși Batante" },
      ]}
    />
  );
}
