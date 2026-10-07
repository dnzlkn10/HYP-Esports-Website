import type { Metadata } from "next";
import { PageHeading, SampleNotice } from "@/components/ui";
import { NewsExplorer } from "@/components/Filters";
export const metadata: Metadata = {
  title: "News",
  description:
    "The people, the progress and the moments that shape our next chapter.",
};
export default function Page() {
  return (
    <>
      <PageHeading
        label="INSIDE THE ORGANIZATION"
        title="HYP STORIES"
        description="The people, the progress and the moments that shape our next chapter."
      />
      <section className="container section page-section">
        <SampleNotice>
          Starter editorial content. Official announcements will replace sample
          stories before launch.
        </SampleNotice>
        <NewsExplorer />
      </section>
    </>
  );
}
