import { ButtonLink } from "@/components/ui";
export default function NotFound() {
  return (
    <section className="container error-page">
      <p className="eyebrow">404 / OUT OF BOUNDS</p>
      <h1>
        WRONG TURN.
        <br />
        <span className="yellow">NEXT ROUND.</span>
      </h1>
      <p>This page is not on the roster. Let’s get you back in the game.</p>
      <ButtonLink href="/">Back to home</ButtonLink>
    </section>
  );
}
