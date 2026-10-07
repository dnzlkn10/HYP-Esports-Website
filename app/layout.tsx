import type { Metadata, Viewport } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Reveal } from "@/components/Reveal";
import { LanguageTranslator } from "@/components/LanguageTranslator";
import "./globals.css";
export const metadata: Metadata = {
  title: {
    default: "HYP Esports — Rise. Compete. Dominate.",
    template: "%s | HYP Esports",
  },
  description:
    "The home of HYP Esports. Discover our Counter-Strike 2 and VALORANT teams, matches, news and the next generation of competitive talent.",
  applicationName: "HYP Esports",
  keywords: ["HYP Esports", "HYP ESPOR", "HYP CS2", "HYP VALORANT", "esports Türkiye"],
  authors: [{ name: "HYP Esports" }],
  robots: { index: true, follow: true },
  openGraph: {
    title: "HYP Esports",
    description: "Rise. Compete. Dominate.",
    type: "website",
    locale: "en_GB",
  },
  twitter: {
    card: "summary",
    title: "HYP Esports",
    description: "Rise. Compete. Dominate.",
  },
};
export const viewport: Viewport = { themeColor: "#101113" };
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="tr">
      <body>
        <a href="#main-content" className="skip-link">
          Skip to content
        </a>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
        <Reveal />
        <LanguageTranslator />
      </body>
    </html>
  );
}
