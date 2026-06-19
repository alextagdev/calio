import { Metadata } from "next";
import ProductPageTemplate from "@/components/templates/ProductPageTemplate";
import { pages } from "@/data/pages";

export const metadata: Metadata = { title: "Fatade magazin" };

export default function Page() {
  return (
    <ProductPageTemplate
      data={pages["sticla-securizata/fatade-magazin"]}
      breadcrumbs={[
        { label: "Sticla securizata", href: "/sticla-securizata" },
        { label: "Fatade magazin" },
      ]}
    />
  );
}
