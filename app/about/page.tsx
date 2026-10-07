import type { Metadata } from "next";
import Image from "next/image";
import { PageHeading } from "@/components/ui";
import { JoinBanner } from "@/components/home/JoinBanner";
export const metadata: Metadata = {
  title: "About",
  description:
    "Discover the mission, vision and competitive mindset behind HYP Esports.",
};
export default function Page() {
  return (
    <>
      <PageHeading
        label="MORE THAN A TAG"
        title="THIS IS HYP"
        description="An ambition shared. A standard upheld. A new generation ready to compete."
      />
      <section className="container section page-section">
        <div className="about-feature">
          <div className="about-art">
            <Image
              src="/arena.svg"
              alt="Original geometric HYP competition illustration"
              fill
              sizes="(max-width: 800px) 100vw, 50vw"
            />
          </div>
          <div>
            <p className="eyebrow">01 / WHO WE ARE</p>
            <h2>
              BUILT ON
              <br />
              <span className="yellow">AMBITION.</span>
            </h2>
            <p>
              HYP Esports is a developing competitive organization with
              Counter-Strike 2 and VALORANT at its core. We bring together
              players who believe that discipline, trust and consistent work can
              turn potential into performance.
            </p>
            <p>
              Our next chapter is about building a foundation: strong teams, an
              engaged community and an identity that means something every time
              we enter the server.
            </p>
          </div>
        </div>
        <div className="two-grid about-values">
          <article>
            <p className="eyebrow">02 / OUR MISSION</p>
            <h3>
              CREATE THE CONDITIONS
              <br />
              TO COMPETE.
            </h3>
            <p>
              Give emerging players a place to develop their skills, learn to
              compete as a team and approach every challenge with purpose.
              Progress is a shared responsibility.
            </p>
          </article>
          <article>
            <p className="eyebrow">03 / OUR VISION</p>
            <h3>
              BUILD SOMETHING
              <br />
              THAT LASTS.
            </h3>
            <p>
              Grow into an organization recognized for its competitive
              standards, its commitment to young talent and a community that
              stays connected through every win and every lesson.
            </p>
          </article>
        </div>
        <p className="sample-note">
          Organization copy is a proposed starting point and should be reviewed
          by HYP before public launch.
        </p>
      </section>
      <JoinBanner />
    </>
  );
}
