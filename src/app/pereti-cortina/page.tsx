import { Metadata } from "next";
import ProductPageTemplate from "@/components/templates/ProductPageTemplate";
import { pages } from "@/data/pages";

export const metadata: Metadata = { title: "Pereți Cortină" };

export default function Page() {
  return (
    <ProductPageTemplate
      data={pages["pereti-cortina"]}
      breadcrumbs={[
        { label: "Acasă", href: "/" },
        { label: "Pereți Cortină" },
      ]}
    />
  );
}
