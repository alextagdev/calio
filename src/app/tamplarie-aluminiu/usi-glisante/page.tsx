import { Metadata } from "next";
import ProductPageTemplate from "@/components/templates/ProductPageTemplate";
import { pages } from "@/data/pages";

export const metadata: Metadata = { title: "Uși Glisante Aluminiu" };

export default function Page() {
  return (
    <ProductPageTemplate
      data={pages["tamplarie-aluminiu/usi-glisante"]}
      breadcrumbs={[
        { label: "Tâmplărie Aluminiu", href: "/tamplarie-aluminiu" },
        { label: "Uși Glisante" },
      ]}
    />
  );
}
