"use client";
import { useState } from "react";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
export function JoinForm() {
  const [game, setGame] = useState("CS2");
  const [complete, setComplete] = useState(false);
  return (
    <div className="application-layout">
      <aside>
        <p className="eyebrow">THE NEXT GENERATION</p>
        <h2>
          TALENT IS
          <br />
          JUST THE
          <br />
          <span className="yellow">START.</span>
        </h2>
        <p>
          We value communication, discipline and the drive to improve. Tell us
          who you are — and what you bring to the team.
        </p>
        <div className="application-note">
          <strong>Preferred player age range: 14–19</strong>
          <p>
            All fields are part of a frontend demo. Nothing is sent, saved, or
            reviewed by HYP. Do not enter sensitive personal information.
          </p>
        </div>
      </aside>
      <div className="application-panel">
        <div className="filter-group" aria-label="Choose application game">
          {["CS2", "VALORANT"].map((g) => (
            <button
              key={g}
              className={game === g ? "active" : ""}
              aria-pressed={game === g}
              onClick={() => {
                setGame(g);
                setComplete(false);
              }}
            >
              APPLY FOR {g}
            </button>
          ))}
        </div>
        {complete ? (
          <div className="application-success" role="status">
            <CheckCircle2 size={42} />
            <h3>DEMO COMPLETE.</h3>
            <p>
              Your form passed local validation. No application was sent or
              stored. Official recruitment will be announced on this site.
            </p>
            <button className="button" onClick={() => setComplete(false)}>
              Try again <ArrowUpRight size={17} />
            </button>
          </div>
        ) : (
          <form
            key={game}
            onSubmit={(e) => {
              e.preventDefault();
              setComplete(true);
            }}
          >
            <div className="form-grid">
              <label>
                Nickname
                <input
                  name="nickname"
                  required
                  maxLength={40}
                  autoComplete="nickname"
                  placeholder="Your in-game name"
                />
              </label>
              <label>
                Age
                <input
                  name="age"
                  required
                  type="number"
                  min={1}
                  max={99}
                  placeholder="Your age"
                />
              </label>
              <label>
                Country
                <input
                  name="country"
                  required
                  maxLength={80}
                  autoComplete="country-name"
                  placeholder="Your country"
                />
              </label>
              <label>
                Discord
                <input
                  name="discord"
                  required
                  maxLength={80}
                  placeholder="Your username"
                />
              </label>
              <label className="full">
                {game === "CS2" ? "Steam profile" : "Riot ID"}
                <input
                  name="profile"
                  required
                  type={game === "CS2" ? "url" : "text"}
                  maxLength={200}
                  placeholder={
                    game === "CS2"
                      ? "https://steamcommunity.com/id/…"
                      : "Nickname#TAG"
                  }
                />
              </label>
              <label>
                Current rank
                <input
                  name="rank"
                  required
                  maxLength={50}
                  placeholder={
                    game === "CS2"
                      ? "Premier / FACEIT level"
                      : "Current competitive rank"
                  }
                />
              </label>
              <label>
                <span id="role-label">Main role</span>
                <select
                  aria-labelledby="role-label"
                  name="role"
                  required
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select your role
                  </option>
                  {(game === "CS2"
                    ? ["IGL", "AWPer", "Entry", "Lurker", "Support", "Flexible"]
                    : [
                        "Duelist",
                        "Initiator",
                        "Controller",
                        "Sentinel",
                        "IGL",
                        "Flexible",
                      ]
                  ).map((r) => (
                    <option key={r}>{r}</option>
                  ))}
                </select>
              </label>
              <label className="full">
                Competitive experience
                <textarea
                  name="experience"
                  required
                  rows={3}
                  maxLength={2000}
                  placeholder="Previous teams, tournaments and experience"
                />
              </label>
              <label className="full">
                About yourself
                <textarea
                  name="about"
                  required
                  rows={4}
                  maxLength={2000}
                  placeholder="What motivates you to compete?"
                />
              </label>
            </div>
            <label className="consent">
              <input required type="checkbox" />I understand this is a demo and
              no application will be sent.
            </label>
            <button className="button" type="submit">
              Preview application <ArrowUpRight size={17} />
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
