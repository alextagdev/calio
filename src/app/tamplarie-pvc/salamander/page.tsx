import { Metadata } from "next";
import ProductPageTemplate from "@/components/templates/ProductPageTemplate";
import { pages } from "@/data/pages";

export const metadata: Metadata = { title: "Tamplarie Salamander PVC" };

export default function Page() {
  return (
    <ProductPageTemplate
      data={pages["tamplarie-pvc/salamander"]}
      breadcrumbs={[
        { label: "Tamplarie PVC", href: "/tamplarie-pvc" },
        { label: "Salamander" },
      ]}
    />
  );
}
