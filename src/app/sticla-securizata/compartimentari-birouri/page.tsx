import { Metadata } from "next";
import ProductPageTemplate from "@/components/templates/ProductPageTemplate";
import { pages } from "@/data/pages";

export const metadata: Metadata = { title: "Compartimentari birouri" };

export default function Page() {
  return (
    <ProductPageTemplate
      data={pages["sticla-securizata/compartimentari-birouri"]}
      breadcrumbs={[
        { label: "Sticla securizata", href: "/sticla-securizata" },
        { label: "Compartimentari birouri" },
      ]}
    />
  );
}
