import { Metadata } from "next";
import ProductPageTemplate from "@/components/templates/ProductPageTemplate";
import { pages } from "@/data/pages";

export const metadata: Metadata = { title: "Rulouri Exterioare" };

export default function Page() {
  return (
    <ProductPageTemplate
      data={pages["tamplarie-pvc/rulouri-exterioare"]}
      breadcrumbs={[
        { label: "Tâmplărie PVC", href: "/tamplarie-pvc" },
        { label: "Rulouri Exterioare" },
      ]}
    />
  );
}
