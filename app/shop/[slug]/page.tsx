import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Image from "next/image";
import { products } from "@/data/products";
import { ButtonLink } from "@/components/ui";
// Content is sourced from local data; unknown slugs must return 404 before streaming.
export const dynamicParams = false;

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const p = products.find((p) => p.slug === slug);
  return { title: p?.name ?? "Product not found", description: p?.description };
}
export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const p = products.find((p) => p.slug === slug);
  if (!p) notFound();
  return (
    <section className="container section product-detail">
      <div className="product-detail-art">
        <Image
          src={p.slug === "pro-jersey" ? "/jersey.svg" : "/tee.svg"}
          alt={`${p.name} illustrative concept, not a final product`}
          width={800}
          height={700}
          priority
        />
      </div>
      <div>
        <p className="eyebrow">{p.category}</p>
        <h1>{p.name}</h1>
        <span className="pill yellow">COMING SOON</span>
        <p>{p.description}</p>
        <div className="product-spec">
          <span>PROPOSED SIZING</span>
          <p>{p.sizes.join(" / ")}</p>
        </div>
        <div className="product-spec">
          <span>THE DETAILS</span>
          <p>
            Black / HYP yellow. Final design, materials, sizing and release date
            to be announced.
          </p>
        </div>
        <p className="sample-note">
          Concept artwork only. This product is not available to purchase. No
          payments or orders are accepted.
        </p>
        <ButtonLink secondary href="/shop">
          Back to collection
        </ButtonLink>
      </div>
    </section>
  );
}
