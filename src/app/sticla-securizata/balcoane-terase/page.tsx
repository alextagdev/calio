import { Metadata } from "next";
import ProductPageTemplate from "@/components/templates/ProductPageTemplate";
import { pages } from "@/data/pages";

export const metadata: Metadata = { title: "Balcoane și Terase Sticlă" };

export default function Page() {
  return (
    <ProductPageTemplate
      data={pages["sticla-securizata/balcoane-terase"]}
      breadcrumbs={[
        { label: "Sticlă Securizată", href: "/sticla-securizata" },
        { label: "Balcoane și Terase" },
      ]}
    />
  );
}
