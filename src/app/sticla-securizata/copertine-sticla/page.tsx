import { Metadata } from "next";
import ProductPageTemplate from "@/components/templates/ProductPageTemplate";
import { pages } from "@/data/pages";

export const metadata: Metadata = { title: "Copertine din Sticlă" };

export default function Page() {
  return (
    <ProductPageTemplate
      data={pages["sticla-securizata/copertine-sticla"]}
      breadcrumbs={[
        { label: "Sticlă Securizată", href: "/sticla-securizata" },
        { label: "Copertine Sticlă" },
      ]}
    />
  );
}
