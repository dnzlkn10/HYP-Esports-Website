import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import { articles } from "@/data/news";
import { dateLabel, NewsCard } from "@/components/cards";
import { ButtonLink, SectionHeading } from "@/components/ui";
// Content is sourced from local data; unknown slugs must return 404 before streaming.
export const dynamicParams = false;

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const a = articles.find((a) => a.slug === slug);
  return { title: a?.title ?? "Story not found", description: a?.description };
}
export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const a = articles.find((a) => a.slug === slug);
  if (!a) notFound();
  return (
    <>
      <article className="container article-page">
        <ButtonLink secondary href="/news">
          Back to news
        </ButtonLink>
        <p className="eyebrow">
          {a.category} / <time dateTime={a.date}>{dateLabel(a.date)}</time> /
          STARTER EDITORIAL
        </p>
        <h1>{a.title}</h1>
        <p className="article-lead">{a.description}</p>
        <Image
          className="article-image"
          src={`/${a.art}.svg`}
          alt="Original HYP concept artwork"
          width={1000}
          height={700}
          priority
        />
        <div className="article-body">
          {a.body.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
      </article>
      <section className="container section">
        <SectionHeading label="KEEP EXPLORING" title="MORE FROM HYP" />
        <div className="news-grid">
          {articles
            .filter((n) => n.slug !== slug)
            .slice(0, 3)
            .map((n) => (
              <NewsCard key={n.slug} article={n} />
            ))}
        </div>
      </section>
    </>
  );
}
