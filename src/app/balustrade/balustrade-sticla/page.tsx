import { Metadata } from "next";
import ProductPageTemplate from "@/components/templates/ProductPageTemplate";
import { pages } from "@/data/pages";

export const metadata: Metadata = { title: "Balustrade din Sticlă" };

export default function Page() {
  return (
    <ProductPageTemplate
      data={pages["balustrade/balustrade-sticla"]}
      breadcrumbs={[
        { label: "Balustrade", href: "/balustrade" },
        { label: "Balustrade Sticlă" },
      ]}
    />
  );
}
