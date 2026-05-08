import { Metadata } from "next";
import ProductPageTemplate from "@/components/templates/ProductPageTemplate";
import { pages } from "@/data/pages";

export const metadata: Metadata = { title: "Pergole Retractabile" };

export default function Page() {
  return (
    <ProductPageTemplate
      data={pages["pergole/retractabile"]}
      breadcrumbs={[
        { label: "Pergole & Terase", href: "/pergole" },
        { label: "Retractabile" },
      ]}
    />
  );
}
