export const navigation = [
  { href: "/", label: "Home" },
  { href: "/news", label: "News" },
  { href: "/matches", label: "Matches" },
  { href: "/tournaments", label: "Tournaments" },
  { href: "/teams", label: "Teams" },
  { href: "/media", label: "Media" },
  { href: "/shop", label: "Shop" },
  { href: "/about", label: "About" },
  { href: "/join", label: "Join HYP" },
];
// Add verified organization URLs here. Unconfigured accounts are displayed as text, never dead links.
export const socials: { label: string; url: string | null }[] = [
  "Discord",
  "Steam",
  "YouTube",
  "Instagram",
  "X",
].map((label) => ({ label, url: null }));
export const newsCategories = [
  "ALL",
  "ORGANIZATION",
  "CS2",
  "VALORANT",
  "TOURNAMENT",
  "ANNOUNCEMENT",
] as const;
