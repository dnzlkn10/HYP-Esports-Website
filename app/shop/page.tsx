import type { Metadata } from "next";
import { products } from "@/data/products";
import { ProductCard } from "@/components/cards";
import { PageHeading, SampleNotice } from "@/components/ui";
export const metadata: Metadata = {
  title: "Shop",
  description:
    "A preview of future HYP merchandise. The first collection is coming soon.",
};
export default function Page() {
  return (
    <>
      <PageHeading
        label="THE HYP COLLECTION"
        title="WEAR THE AMBITION"
        description="Our identity, beyond the server. Explore the first concepts for future HYP merchandise."
      />
      <section className="container section page-section">
        <div className="collection-banner">
          <span className="pill">COMING SOON</span>
          <p>THE FIRST DROP IS JUST THE BEGINNING.</p>
          <span>CONCEPT COLLECTION / 01</span>
        </div>
        <div className="two-grid">
          {products.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
        <SampleNotice>
          Concept previews only. Products are not for sale. No checkout,
          payment, reservations or orders are available.
        </SampleNotice>
      </section>
    </>
  );
}
