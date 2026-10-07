import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Trophy } from "lucide-react";
import type {
  Article,
  Match,
  Player,
  Product,
  Team,
  Tournament,
} from "@/types";
export function dateLabel(date: string, short = false) {
  return new Intl.DateTimeFormat("en-GB", {
    day: "2-digit",
    month: short ? "short" : "long",
    year: "numeric",
    timeZone: "Europe/Istanbul",
  }).format(new Date(date));
}
export function TeamCard({ team }: { team: Team }) {
  return (
    <Link
      href={`/teams/${team.slug}`}
      className={`team-card card ${team.slug}`}
    >
      <Image
        src={team.slug === "cs2" ? "/arena.svg" : "/team.svg"}
        alt=""
        fill
        sizes="(max-width: 700px) 100vw, 50vw"
      />
      <div className="team-card-top">
        <span className="pill">{team.status}</span>
        <span className="team-index">{team.slug === "cs2" ? "01" : "02"}</span>
      </div>
      <div className="team-card-bottom">
        <p className="eyebrow">HYP COMPETITIVE DIVISION</p>
        <h3>{team.title}</h3>
        <span className="text-link">
          View team <ArrowUpRight size={18} />
        </span>
      </div>
    </Link>
  );
}
export function PlayerCard({
  player,
  index,
}: {
  player: Player;
  index: number;
}) {
  return (
    <article
      className={`player-card card ${!player.announced ? "unannounced" : ""}`}
    >
      <div className="player-art">
        <Image
          src={player.image || "/player.svg"}
          alt={player.image ? `${player.nickname} portrait` : ""}
          fill
          sizes="(max-width: 550px) 50vw, (max-width: 900px) 33vw, 20vw"
        />
        <span className="player-number">0{index + 1}</span>
        {!player.announced && <span className="player-question">?</span>}
        <span className="player-caption">
          {player.announced ? "HYP ESPORTS" : "THE NEXT CHAPTER"}
        </span>
      </div>
      <div className="player-info">
        <h3>{player.nickname}</h3>
        <p>{player.role}</p>
        {player.nationality && <small>{player.nationality}</small>}
        {player.announced && <Link className="text-link" href={`/teams/${player.id.split("-")[0]}/${encodeURIComponent(player.nickname.toLowerCase())}`}>View profile <ArrowUpRight size={14}/></Link>}
        {player.socials?.map((s) => (
          <a
            key={s.label}
            href={s.url}
            rel="noopener noreferrer"
            target="_blank"
          >
            {s.label}
          </a>
        ))}
      </div>
    </article>
  );
}
export function MatchCard({ match }: { match: Match }) {
  const time = new Intl.DateTimeFormat("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
    timeZone: "Europe/Istanbul",
  }).format(new Date(match.date));
  return (
    <article className="match-card">
      <div className="match-meta">
        <span className="game-tag">{match.game}</span>
        <span>{match.tournament}</span>
        <span
          className={match.status === "Upcoming" ? "status upcoming" : "status"}
        >
          {match.status}
        </span>
      </div>
      <div className="match-main">
        <div className="match-team">
          <span className="team-badge hyp-badge">HYP</span>
          <strong>HYP ESPORTS</strong>
        </div>
        <div className="match-score">
          {match.score ? (
            <>
              <span className={match.score[0] > match.score[1] ? "yellow" : ""}>
                {match.score[0]}
              </span>
              <small>:</small>
              <span>{match.score[1]}</span>
            </>
          ) : (
            <span className="versus">VS</span>
          )}
        </div>
        <div className="match-team opponent">
          <strong>{match.opponent}</strong>
          <span className="team-badge">{match.opponentTag}</span>
        </div>
      </div>
      <div className="match-footer">
        <time dateTime={match.date}>
          {dateLabel(match.date, true)} · {time} TRT (UTC+3)
        </time>
        <span>{match.format}</span>
      </div>
    </article>
  );
}
export function NewsCard({ article }: { article: Article }) {
  return (
    <Link href={`/news/${article.slug}`} className="news-card card">
      <div className="news-art">
        <Image
          src={`/${article.art}.svg`}
          alt=""
          fill
          sizes="(max-width: 700px) 100vw, 33vw"
        />
        <span className="pill">{article.category}</span>
        <span className="round-arrow">
          <ArrowUpRight size={20} />
        </span>
      </div>
      <div className="news-info">
        <time dateTime={article.date}>{dateLabel(article.date, true)}</time>
        <h3>{article.title}</h3>
        <p>{article.description}</p>
        <span className="text-link">
          Read more <ArrowUpRight size={15} />
        </span>
      </div>
    </Link>
  );
}
export function TournamentCard({ tournament }: { tournament: Tournament }) {
  return (
    <article className="tournament-card card">
      <div className="tournament-top">
        <Trophy size={29} strokeWidth={1} />
        <span className="pill">{tournament.status}</span>
      </div>
      <p className="eyebrow">
        {tournament.game} · {tournament.participants} TEAMS
      </p>
      <h3>{tournament.name}</h3>
      <p className="muted">
        {dateLabel(tournament.start, true)} — {dateLabel(tournament.end, true)}
      </p>
      <Link href={`/tournaments/${tournament.slug}`} className="text-link">
        Event details <ArrowUpRight size={17} />
      </Link>
    </article>
  );
}
export function ProductCard({ product }: { product: Product }) {
  return (
    <Link href={`/shop/${product.slug}`} className="product-card card">
      <div className="product-art">
        <Image
          src={product.slug === "pro-jersey" ? "/Altın HYP Esports forma logosu.png" : "/tee.svg"}
          alt={product.name}
          fill
          sizes="(max-width: 700px) 100vw, 50vw"
        />
        <span className="pill">COMING SOON</span>
      </div>
      <div className="product-info">
        <div>
          <p className="eyebrow">{product.category}</p>
          <h3>{product.name}</h3>
        </div>
        <ArrowUpRight size={23} />
      </div>
    </Link>
  );
}
