import type { Metadata } from "next";
import { TeamDetail } from "@/components/teams/TeamDetail";
export const metadata: Metadata = {
  title: "Counter-Strike 2 Team",
  description: "Explore the HYP Counter-Strike 2 roster and match center.",
};
export default function Page() {
  return <TeamDetail slug="cs2" />;
}
