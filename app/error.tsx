"use client";
export default function ErrorPage({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <section className="container error-page">
      <p className="eyebrow">A PAUSE IN PLAY</p>
      <h1>
        LET’S TRY
        <br />
        <span className="yellow">THAT AGAIN.</span>
      </h1>
      <p>Something went wrong while loading this page.</p>
      <button className="button" onClick={reset}>
        Try again
      </button>
    </section>
  );
}
