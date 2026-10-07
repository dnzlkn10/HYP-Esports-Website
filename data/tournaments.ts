import type { Tournament } from "@/types";
export const tournaments: Tournament[] = [
  {
    slug: "hyp-cs2-tournament-october-2026",
    name: "HYP CS2 TOURNAMENT",
    game: "CS2",
    start: "2026-10-17",
    end: "2026-10-18",
    status: "Upcoming",
    participants: 6,
    organizer: "HYP Esports",
    description:
      "HYP Esports' upcoming 5v5 Counter-Strike 2 tournament. The event begins Saturday, 17 October 2026. Participating teams, bracket and match schedule will be announced before the tournament.",
  },


  {
    slug: "open-qualifier",
    name: "OPEN QUALIFIER",
    game: "CS2",
    start: "2026-09-20",
    end: "2026-09-28",
    status: "Past",
    participants: 32,
    organizer: "Sample organizer",
    description:
      "An example archived event. Results and participation shown on this site are demonstration content.",
  },
];
