import type { Metadata } from "next";
import { tournaments } from "@/data/tournaments";
import { TournamentCard } from "@/components/cards";
import { PageHeading, SectionHeading, SampleNotice } from "@/components/ui";
export const metadata: Metadata = {
  title: "Tournaments",
  description:
    "Explore upcoming and past HYP competition and future hosted events.",
};
export default function Page() {
  return (
    <>
      <PageHeading
        label="THE ROAD TO COMPETITION"
        title="TOURNAMENTS"
        description="Every event is a new test. Follow the competitive journey, one tournament at a time."
      />
      <div className="container">
        <SampleNotice>
          All current tournaments are examples. HYP-hosted events and verified
          participation will be added here.
        </SampleNotice>
      </div>
      {["Upcoming", "Past"].map((s) => (
        <section className="container section" key={s}>
          <SectionHeading
            label={s === "Upcoming" ? "NEXT ON THE CALENDAR" : "THE ARCHIVE"}
            title={`${s.toUpperCase()} EVENTS`}
          />
          <div className="two-grid">
            {tournaments
              .filter((t) => t.status === s)
              .map((t) => (
                <TournamentCard key={t.slug} tournament={t} />
              ))}
          </div>
        </section>
      ))}
    </>
  );
}
