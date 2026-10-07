import { teams } from "@/data/teams";
import { matches } from "@/data/matches";
import { MatchCard, PlayerCard } from "@/components/cards";
import {
  PageHeading,
  SectionHeading,
  SampleNotice,
  ButtonLink,
} from "@/components/ui";
import { JoinBanner } from "@/components/home/JoinBanner";
export function TeamDetail({ slug }: { slug: "cs2" | "valorant" }) {
  const team = teams.find((t) => t.slug === slug)!;
  return (
    <>
      <PageHeading
        label={`HYP ${team.game} DIVISION`}
        title={team.title}
        description={team.description}
      />
      <section className="container section team-detail">
        <nav className="game-tabs"><a className={slug==="cs2"?"active":""} href="/teams/cs2">COUNTER-STRIKE 2</a><a className={slug==="valorant"?"active":""} href="/teams/valorant">VALORANT</a></nav><div className="team-summary">
          <span className="pill">{team.status}</span>
          <span>ROSTER · 05 POSITIONS</span>
          <ButtonLink
            secondary
            href={slug === "cs2" ? "/teams/valorant" : "/teams/cs2"}
          >
            Explore {slug === "cs2" ? "VALORANT" : "CS2"}
          </ButtonLink>
        </div>
        <div className="roster-grid">
          {team.players.map((p, i) => (
            <PlayerCard player={p} index={i} key={p.id} />
          ))}
        </div>

      </section>
      <section className="container section">
        <SectionHeading
          label="FROM THE SERVER"
          title="MATCH CENTER"
          href="/matches"
        />
        <SampleNotice />
        <div className="match-list">
          {matches
            .filter((m) => m.game === team.game)
            .map((m) => (
              <MatchCard key={m.id} match={m} />
            ))}
        </div>
      </section>
      <section className="container section">
        <SectionHeading label="OUR JOURNEY" title="ACHIEVEMENTS" />
        <div className="achievement-placeholder">
          <span>01 / THE BEGINNING</span>
          <h3>THE STORY IS STILL BEING WRITTEN.</h3>
          <p>
            Verified milestones and competition results will appear here. Every
            great journey starts with the first round.
          </p>
        </div>
      </section>
      <JoinBanner />
    </>
  );
}
