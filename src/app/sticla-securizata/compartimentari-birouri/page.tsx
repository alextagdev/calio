import { Metadata } from "next";
import ProductPageTemplate from "@/components/templates/ProductPageTemplate";
import { pages } from "@/data/pages";

export const metadata: Metadata = { title: "Compartimentări Birouri" };

export default function Page() {
  return (
    <ProductPageTemplate
      data={pages["sticla-securizata/compartimentari-birouri"]}
      breadcrumbs={[
        { label: "Sticlă Securizată", href: "/sticla-securizata" },
        { label: "Compartimentări Birouri" },
      ]}
    />
  );
}
