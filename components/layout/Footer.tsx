import Link from "next/link";
import { navigation, socials } from "@/data/site";
import { Logo } from "./Logo";
export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-top">
        <div>
          <Logo />
          <p className="footer-manifesto">
            COMPETE.
            <br />
            EVOLVE.
            <br />
            <span>DOMINATE.</span>
          </p>
        </div>
        <div>
          <h2 className="eyebrow">EXPLORE HYP</h2>
          <div className="footer-links">
            {navigation
              .filter((n) => n.href !== "/")
              .map((n) => (
                <Link key={n.href} href={n.href}>
                  {n.label}
                </Link>
              ))}
          </div>
        </div>
        <div>
          <h2 className="eyebrow">STAY CONNECTED</h2>
          <div className="footer-socials">
            {socials.map((s) =>
              s.url ? (
                <a
                  key={s.label}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {s.label} ↗
                </a>
              ) : (
                <span key={s.label}>
                  {s.label}
                  <small>COMING SOON</small>
                </span>
              ),
            )}
          </div>
        </div>
      </div>
      <div className="container footer-bottom">
        <p>© 2026 HYP Esports. All rights reserved.</p>
        <p>BUILT FOR THE NEXT GENERATION.</p>
      </div>
    </footer>
  );
}
