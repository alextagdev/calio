import { Metadata } from "next";
import ProductPageTemplate from "@/components/templates/ProductPageTemplate";
import { pages } from "@/data/pages";

export const metadata: Metadata = { title: "Fațade Magazin" };

export default function Page() {
  return (
    <ProductPageTemplate
      data={pages["sticla-securizata/fatade-magazin"]}
      breadcrumbs={[
        { label: "Sticlă Securizată", href: "/sticla-securizata" },
        { label: "Fațade Magazin" },
      ]}
    />
  );
}
