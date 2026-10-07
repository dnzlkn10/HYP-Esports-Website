import type { Metadata } from "next";
import { TeamDetail } from "@/components/teams/TeamDetail";
export const metadata: Metadata = {
  title: "VALORANT Team",
  description: "Explore the HYP VALORANT roster and match center.",
};
export default function Page() {
  return <TeamDetail slug="valorant" />;
}
