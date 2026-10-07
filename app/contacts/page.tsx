import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contacts",
  description: "Join the official HYP Esports Discord community and Steam group.",
};

export default function Page() {
  return (
    <main className="contacts-page">
      <section className="container contacts-hero">
        <p className="eyebrow"><span />CONTACTS</p>
        <h1>STAY CONNECTED<span>.</span></h1>
        <p className="contacts-intro">Join the HYP community, follow announcements and stay up to date with tournaments and team news.</p>

        <div className="contact-community-grid">
          <a className="community-card discord-card" href="https://discord.gg/Jnzdk8W2d" target="_blank" rel="noreferrer">
            <div className="community-icon discord-icon">D</div>
            <p className="eyebrow">HYP COMMUNITY</p>
            <h2>JOIN OUR<br/>DISCORD.</h2>
            <p>Announcements, tournaments and community conversations — all in one place.</p>
            <span className="community-cta">JOIN DISCORD ↗</span>
          </a>

          <a className="community-card steam-card" href="https://steamcommunity.com/groups/hypteamtr" target="_blank" rel="noreferrer">
            <div className="community-icon steam-icon">S</div>
            <p className="eyebrow">HYP ESPORTS</p>
            <h2>JOIN OUR<br/>STEAM GROUP.</h2>
            <p>Become part of the HYP Steam community and keep up with group announcements.</p>
            <span className="community-cta">JOIN STEAM GROUP ↗</span>
          </a>
        </div>
      </section>
    </main>
  );
}
