import type { Metadata } from "next";
import { PageHeading } from "@/components/ui";
import { JoinForm } from "@/components/JoinForm";
export const metadata: Metadata = {
  title: "Join HYP",
  description:
    "Think you have what it takes to represent HYP? Start with the ambition. Build with the team.",
};
export default function Page() {
  return (
    <>
      <PageHeading
        label="YOUR NEXT CHAPTER"
        title="JOIN HYP"
        description="Think you have what it takes to represent HYP? Start with the ambition. Build with the team."
      />
      <section className="container section page-section">
        <JoinForm />
      </section>
    </>
  );
}
