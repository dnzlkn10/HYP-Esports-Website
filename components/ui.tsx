import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { ReactNode } from "react";
export function ButtonLink({
  href,
  children,
  secondary = false,
}: {
  href: string;
  children: ReactNode;
  secondary?: boolean;
}) {
  return (
    <Link
      className={`button ${secondary ? "button-secondary" : ""}`}
      href={href}
    >
      {children}
      <ArrowUpRight size={17} />
    </Link>
  );
}
export function SectionHeading({
  label,
  title,
  href,
  linkText = "View all",
}: {
  label: string;
  title: string;
  href?: string;
  linkText?: string;
}) {
  return (
    <div className="section-heading">
      <div>
        <p className="eyebrow">
          <span />
          {label}
        </p>
        <h2>{title}</h2>
      </div>
      {href && (
        <Link className="text-link" href={href}>
          {linkText}
          <ArrowUpRight size={17} />
        </Link>
      )}
    </div>
  );
}
export function PageHeading({
  label,
  title,
  description,
}: {
  label: string;
  title: string;
  description: string;
}) {
  return (
    <div className="page-heading container">
      <p className="eyebrow">
        <span />
        {label}
      </p>
      <h1>
        {title}
        <span className="yellow">.</span>
      </h1>
      <p>{description}</p>
    </div>
  );
}
export function SampleNotice({
  children = "Fixtures, tournaments and editorial content are illustrative. Official schedules and results will be announced here.",
}: {
  children?: ReactNode;
}) {
  return <p className="sample-note">{children}</p>;
}
export function EmptyState({
  title = "NOTHING HERE. YET.",
  description = "No content matches this selection. Try another filter.",
}: {
  title?: string;
  description?: string;
}) {
  return (
    <div className="empty-state">
      <span className="yellow">—</span>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}
