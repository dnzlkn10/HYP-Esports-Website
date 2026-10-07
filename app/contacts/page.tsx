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
            <div className="community-icon discord-icon" aria-hidden="true"><svg viewBox="0 0 24 24"><path fill="currentColor" d="M19.5 5.3A16.3 16.3 0 0 0 15.4 4l-.5 1.1a15 15 0 0 0-5.8 0L8.6 4a16.7 16.7 0 0 0-4.1 1.3C1.9 9.2 1.2 13 1.5 16.8a16.5 16.5 0 0 0 5 2.5l1.2-1.7-1.9-.9.5-.4c3.7 1.7 7.7 1.7 11.4 0l.5.4-1.9.9 1.2 1.7a16.5 16.5 0 0 0 5-2.5c.4-4.4-.7-8.2-3-11.5ZM8.6 14.6c-1.1 0-2-1-2-2.2s.9-2.2 2-2.2 2 1 2 2.2-.9 2.2-2 2.2Zm6.8 0c-1.1 0-2-1-2-2.2s.9-2.2 2-2.2 2 1 2 2.2-.9 2.2-2 2.2Z"/></svg></div>
            <p className="eyebrow">HYP COMMUNITY</p>
            <h2>JOIN OUR<br/>DISCORD.</h2>
            <p>Announcements, tournaments and community conversations — all in one place.</p>
            <span className="community-cta">JOIN DISCORD ↗</span>
          </a>

          <a className="community-card steam-card" href="https://steamcommunity.com/groups/hypteamtr" target="_blank" rel="noreferrer">
            <div className="community-icon steam-icon" aria-hidden="true"><svg viewBox="0 0 24 24"><path fill="currentColor" d="M12 2a10 10 0 0 0-9.8 8.1l5.3 2.2a2.8 2.8 0 0 1 1.6-.5h.2l2.4-3.5v-.1a3.8 3.8 0 1 1 3.8 3.8h-.1l-3.4 2.4v.3a2.9 2.9 0 0 1-5.7.7l-3.8-1.6A10 10 0 1 0 12 2Zm-2.9 14.9-1.4-.6a2.1 2.1 0 1 0 1.4-3.9 2 2 0 0 0-.8.2l1.5.6a1.5 1.5 0 1 1-1.1 2.8l-1.4-.6c.2.8.9 1.4 1.8 1.5Zm6.4-6.2a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Zm0-.6a1.9 1.9 0 1 1 0-3.8 1.9 1.9 0 0 1 0 3.8Z"/></svg></div>
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
