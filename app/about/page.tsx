import type { Metadata } from "next";
import Image from "next/image";
import { PageHeading } from "@/components/ui";
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
              src="/hyp logo.png"
              alt="HYP Esports logo"
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
              HYP Esports is built for players who want more than just to play. We compete to improve, to prove ourselves, and to build something that carries our name forward.
            </p>
            <p>
              Founded around a shared passion for competitive gaming, HYP brings together ambitious players under one identity. From Counter-Strike 2 to VALORANT, our focus is simple: discipline, teamwork, consistency and the hunger to win.
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
              Give developing players a serious competitive environment where individual skill becomes teamwork. Build rosters that communicate, improve and enter every server with a purpose.
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
              Grow HYP from a team into a recognizable esports organization — known not only for winning, but for its identity, its players and the standard it represents.
            </p>
          </article>
        </div>
      </section>
    </>
  );
}
