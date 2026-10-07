import type { Metadata } from "next";
import { PageHeading, SampleNotice } from "@/components/ui";
import { MatchesExplorer } from "@/components/Filters";
export const metadata: Metadata = {
  title: "Matches",
  description:
    "Follow our Counter-Strike 2 and VALORANT divisions, from the first round to the final result.",
};
export default function Page() {
  return (
    <>
      <PageHeading
        label="EVERY ROUND MATTERS"
        title="MATCH CENTER"
        description="Follow our Counter-Strike 2 and VALORANT divisions, from the first round to the final result."
      />
      <section className="container section page-section">
        <SampleNotice />
        <MatchesExplorer />
      </section>
    </>
  );
}
