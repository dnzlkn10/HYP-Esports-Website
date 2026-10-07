import Link from "next/link";
export function Logo() {
  return (
    <Link href="/" className="wordmark" aria-label="HYP Esports home">
      <span>
        HYP<span className="logo-dot">.</span>
      </span>
      <small>ESPORTS</small>
    </Link>
  );
}
// Replace the typographic mark with a verified /public logo when supplied.
