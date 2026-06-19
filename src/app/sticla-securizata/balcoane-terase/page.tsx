import { Metadata } from "next";
import ProductPageTemplate from "@/components/templates/ProductPageTemplate";
import { pages } from "@/data/pages";

export const metadata: Metadata = { title: "Balcoane si terase sticla" };

export default function Page() {
  return (
    <ProductPageTemplate
      data={pages["sticla-securizata/balcoane-terase"]}
      breadcrumbs={[
        { label: "Sticla securizata", href: "/sticla-securizata" },
        { label: "Balcoane si terase" },
      ]}
    />
  );
}
