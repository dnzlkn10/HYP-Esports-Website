"use client";
import { useState } from "react";
import { matches } from "@/data/matches";
import { articles } from "@/data/news";
import { newsCategories } from "@/data/site";
import { MatchCard, NewsCard } from "@/components/cards";
import { EmptyState } from "@/components/ui";
export function MatchesExplorer() {
  const [game, setGame] = useState("ALL");
  const [tab, setTab] = useState("Upcoming");
  const filtered = matches.filter(
    (m) => (game === "ALL" || m.game === game) && m.status === tab,
  );
  return (
    <>
      <div className="filter-toolbar">
        <div className="filter-group" aria-label="Filter matches by game">
          {["ALL", "CS2", "VALORANT"].map((g) => (
            <button
              key={g}
              className={game === g ? "active" : ""}
              aria-pressed={game === g}
              onClick={() => setGame(g)}
            >
              {g}
            </button>
          ))}
        </div>
        <div className="filter-group" aria-label="Match status">
          {["Upcoming", "Finished"].map((t) => (
            <button
              key={t}
              className={tab === t ? "active" : ""}
              aria-pressed={tab === t}
              onClick={() => setTab(t)}
            >
              {t === "Finished" ? "RESULTS" : "UPCOMING"}
            </button>
          ))}
        </div>
      </div>
      <div aria-live="polite" className="results-count">
        {filtered.length} {filtered.length === 1 ? "MATCH" : "MATCHES"} · TIMES
        IN TRT (UTC+3)
      </div>
      <div className="match-list">
        {filtered.map((m) => (
          <MatchCard key={m.id} match={m} />
        ))}
      </div>
      {!filtered.length && <EmptyState />}
    </>
  );
}
export function NewsExplorer() {
  const [category, setCategory] = useState("ALL");
  const filtered = articles.filter(
    (a) => category === "ALL" || a.category === category,
  );
  return (
    <>
      <div
        className="filter-group news-filters"
        aria-label="Filter news by category"
      >
        {newsCategories.map((c) => (
          <button
            key={c}
            onClick={() => setCategory(c)}
            aria-pressed={category === c}
            className={category === c ? "active" : ""}
          >
            {c}
          </button>
        ))}
      </div>
      <p aria-live="polite" className="results-count">
        {filtered.length} STORIES
      </p>
      <div className="news-grid">
        {filtered.map((a) => (
          <NewsCard article={a} key={a.slug} />
        ))}
      </div>
      {!filtered.length && <EmptyState />}
    </>
  );
}
