import type { Metadata } from "next";
import { PageHeading, SampleNotice } from "@/components/ui";
import { MediaExplorer } from "@/components/MediaExplorer";
export const metadata: Metadata = {
  title: "Media",
  description:
    "The plays. The people. The atmosphere. A home for everything beyond the scoreboard.",
};
export default function Page() {
  return (
    <>
      <PageHeading
        label="BEHIND THE COMPETITION"
        title="HYP IN FRAME"
        description="The plays. The people. The atmosphere. A home for everything beyond the scoreboard."
      />
      <section className="container section page-section">
        <SampleNotice>
          Media collections are placeholders. All current graphics are original
          illustrations, not player photos or event footage.
        </SampleNotice>
        <MediaExplorer />
      </section>
    </>
  );
}
