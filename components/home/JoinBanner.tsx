import { ButtonLink } from "@/components/ui";
export function JoinBanner() {
  return (
    <section className="join-banner container">
      <div>
        <p className="eyebrow">YOUR NEXT CHAPTER STARTS HERE</p>
        <h2>
          READY TO
          <br />
          <span>COMPETE?</span>
        </h2>
        <p>Think you have what it takes to represent HYP?</p>
      </div>
      <ButtonLink href="/join">Join HYP</ButtonLink>
      <span className="join-watermark" aria-hidden="true">
        HYP
      </span>
    </section>
  );
}
