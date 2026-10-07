import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { teams } from "@/data/teams";
import { matches } from "@/data/matches";
import { articles } from "@/data/news";
import { tournaments } from "@/data/tournaments";
import { products } from "@/data/products";
import {
  TeamCard,
  MatchCard,
  NewsCard,
  PlayerCard,
  TournamentCard,
  ProductCard,
} from "@/components/cards";
import { ButtonLink, SectionHeading, SampleNotice } from "@/components/ui";
export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-grid" aria-hidden="true" />
        <div className="hero-banner"><Image src="/banner new.png" alt="HYP Esports" fill priority sizes="100vw" /></div>
        <div className="container hero-content hero-content-hidden">
          <p className="eyebrow">
            <span />
            THE NEXT GENERATION OF COMPETITION
          </p>
          <h1>
            HYP
            <br />
            <span>ESPORTS</span>
            <span className="hero-period">.</span>
          </h1>
          <p className="hero-slogan">
            RISE. COMPETE. <strong>DOMINATE.</strong>
          </p>
          <p className="hero-description">
            Built on ambition. United by competition.
            <br />
            This is our game. This is our next chapter.
          </p>
          <div className="hero-actions">
            <ButtonLink href="/teams">Explore teams</ButtonLink>
            <ButtonLink href="/matches" secondary>
              Latest matches
            </ButtonLink>
          </div>
        </div>
        </section>
      <div className="identity-strip" aria-hidden="true">
        <span>PRECISION</span>
        <i>✳</i>
        <span>DISCIPLINE</span>
        <i>✳</i>
        <span>AMBITION</span>
        <i>✳</i>
        <span>HYP ESPORTS</span>
      </div>
      <section id="divisions" className="container section">
        <SectionHeading
          label="OUR COMPETITIVE DIVISIONS"
          title="TWO GAMES. ONE MINDSET."
          href="/teams"
          linkText="Explore our teams"
        />
        <div className="two-grid">
          {teams.map((t) => (
            <TeamCard key={t.slug} team={t} />
          ))}
        </div>
      </section>
      <section className="match-section section">
        <div className="container">
          <SectionHeading
            label="EVERY ROUND MATTERS"
            title="MATCH CENTER"
            href="/matches"
            linkText="All matches"
          />
          <SampleNotice />
          <div className="match-list">
            {matches.slice(0, 3).map((m) => (
              <MatchCard key={m.id} match={m} />
            ))}
          </div>
        </div>
      </section>
      <section className="container section">
        <SectionHeading
          label="THE ROAD AHEAD"
          title="UPCOMING TOURNAMENTS"
          href="/tournaments"
        />
        <div className="two-grid">
          {tournaments
            .filter((t) => t.status === "Upcoming")
            .map((t) => (
              <TournamentCard key={t.slug} tournament={t} />
            ))}
        </div>
        <SampleNotice>
          Sample events · participation and dates are not confirmed.
        </SampleNotice>
      </section>
      <section className="container section">
        <SectionHeading
          label="INSIDE HYP"
          title="THE LATEST"
          href="/news"
          linkText="All stories"
        />
        <div className="news-grid">
          {articles.slice(0, 3).map((a) => (
            <NewsCard article={a} key={a.slug} />
          ))}
        </div>
      </section>
      {teams.map((team) => (
        <section className="container section" key={team.slug}>
          <SectionHeading
            label={`MEET THE ${team.game} DIVISION`}
            title={team.title}
            href={`/teams/${team.slug}`}
            linkText="Full team profile"
          />
          <div className="roster-grid">
            {team.players.map((p, i) => (
              <PlayerCard key={p.id} player={p} index={i} />
            ))}
          </div>
        </section>
      ))}
      <section className="shop-section section">
        <div className="container shop-preview">
          <div>
            <p className="eyebrow">
              <span />
              THE HYP COLLECTION
            </p>
            <h2>
              WEAR THE
              <br />
              <span className="outline-text">AMBITION.</span>
            </h2>
            <p>
              From the server to the streets.
              <br />
              The first HYP merchandise concept.
            </p>
            <ButtonLink href="/shop" secondary>
              Explore the collection
            </ButtonLink>
            <span className="shop-disclaimer">
              CONCEPT PREVIEW · COMING SOON
            </span>
          </div>
          <ProductCard product={products[0]} />
        </div>
      </section>
      <section className="container final-statement">
        <p className="eyebrow">MORE THAN A TAG.</p>
        <Link href="/about">
          A MINDSET.
          <ArrowUpRight />
        </Link>
      </section>
    </>
  );
}
