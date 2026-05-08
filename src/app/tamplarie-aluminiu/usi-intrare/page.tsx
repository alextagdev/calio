import { Metadata } from "next";
import ProductPageTemplate from "@/components/templates/ProductPageTemplate";
import { pages } from "@/data/pages";

export const metadata: Metadata = { title: "Uși de Intrare Aluminiu" };

export default function Page() {
  return (
    <ProductPageTemplate
      data={pages["tamplarie-aluminiu/usi-intrare"]}
      breadcrumbs={[
        { label: "Tâmplărie Aluminiu", href: "/tamplarie-aluminiu" },
        { label: "Uși de Intrare" },
      ]}
    />
  );
}
