import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { tournaments } from "@/data/tournaments";
import { matches } from "@/data/matches";
import { dateLabel, MatchCard } from "@/components/cards";
import {
  PageHeading,
  SampleNotice,
  ButtonLink,
  SectionHeading,
} from "@/components/ui";
// Content is sourced from local data; unknown slugs must return 404 before streaming.
export const dynamicParams = false;

export function generateStaticParams() {
  return tournaments.map((t) => ({ slug: t.slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const t = tournaments.find((t) => t.slug === slug);
  return { title: t?.name ?? "Event not found", description: t?.description };
}
export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const t = tournaments.find((t) => t.slug === slug);
  if (!t) notFound();
  const fixtures = matches.filter((m) =>
    m.tournament.toLowerCase().startsWith(t.name.toLowerCase()),
  );
  return (
    <>
      <PageHeading
        label={`${t.game} / ${t.status.toUpperCase()} EVENT`}
        title={t.name}
        description={t.description}
      />
      <section className="container section page-section">
        <div className="event-facts">
          <div>
            <span>DATES</span>
            <strong>
              {dateLabel(t.start, true)} — {dateLabel(t.end, true)}
            </strong>
          </div>
          <div>
            <span>PARTICIPANTS</span>
            <strong>{t.participants} teams</strong>
          </div>
          <div>
            <span>ORGANIZER</span>
            <strong>{t.organizer}</strong>
          </div>
        </div>
        <SampleNotice>
          Sample event. Dates, opponents and HYP participation are not
          confirmed.
        </SampleNotice>
        <SectionHeading label="EVENT FIXTURES" title="HYP MATCHES" />
        <div className="match-list">
          {fixtures.map((m) => (
            <MatchCard key={m.id} match={m} />
          ))}
        </div>
        <div className="back-action">
          <ButtonLink secondary href="/tournaments">
            All tournaments
          </ButtonLink>
        </div>
      </section>
    </>
  );
}
