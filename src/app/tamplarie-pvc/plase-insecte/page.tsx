import { Metadata } from "next";
import ProductPageTemplate from "@/components/templates/ProductPageTemplate";
import { pages } from "@/data/pages";

export const metadata: Metadata = { title: "Plase Insecte" };

export default function Page() {
  return (
    <ProductPageTemplate
      data={pages["tamplarie-pvc/plase-insecte"]}
      breadcrumbs={[
        { label: "Tâmplărie PVC", href: "/tamplarie-pvc" },
        { label: "Plase Insecte" },
      ]}
    />
  );
}
