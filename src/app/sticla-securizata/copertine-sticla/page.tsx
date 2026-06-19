import { Metadata } from "next";
import ProductPageTemplate from "@/components/templates/ProductPageTemplate";
import { pages } from "@/data/pages";

export const metadata: Metadata = { title: "Copertine din sticla" };

export default function Page() {
  return (
    <ProductPageTemplate
      data={pages["sticla-securizata/copertine-sticla"]}
      breadcrumbs={[
        { label: "Sticla securizata", href: "/sticla-securizata" },
        { label: "Copertine sticla" },
      ]}
    />
  );
}
