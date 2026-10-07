import type { Metadata } from "next";
import { teams } from "@/data/teams";
import { TeamCard } from "@/components/cards";
import { PageHeading } from "@/components/ui";
import { JoinBanner } from "@/components/home/JoinBanner";
export const metadata: Metadata = {
  title: "Teams",
  description: "Meet the HYP Counter-Strike 2 and VALORANT divisions.",
};
export default function Page() {
  return (
    <>
      <PageHeading
        label="OUR COMPETITIVE DIVISIONS"
        title="THE TEAMS"
        description="Different games. A shared standard. Meet the players carrying HYP into the next chapter."
      />
      <section className="container section page-section">
        <div className="two-grid">
          {teams.map((t) => (
            <TeamCard key={t.slug} team={t} />
          ))}
        </div>
        <div className="division-note">
          <span>02 / DIVISIONS</span>
          <p>
            We build teams around trust, communication and a relentless drive to
            improve. Our story begins with Counter-Strike 2 and VALORANT.
          </p>
        </div>
      </section>
      <JoinBanner />
    </>
  );
}
