import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import Nav from "../components/Nav";
import Footer from "../components/Footer/Footer";
import bg from "../res/BG.png";
import logo from "../res/Logo.png";
import gameLogo from "../res/Game_Logo.png";
import deathmatchModeCover from "../res/Deathmatch_Mode_Cover.png";
import rrArsenal from "../res/RR_Arsenal.png";
import baseConfig from "../res/baseConfig.json";
import news from "../res/news.json";

const gameplayCards = [
  {
    tag: "Deathmatch",
    title: "Warm up fast. Refrag faster.",
    body: "Deathmatch keeps the guns hot between serious rounds: instant respawns, nonstop duels, and pure aim reps under pressure.",
    image: deathmatchModeCover,
  },
];

export default function Home() {
  const router = useRouter();
  const launchNews = news[0];

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Head>
        <title>RushRetake</title>
        <meta
          name="description"
          content="RushRetake is a fast-paced tactical shooter by NEX Platforms."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
      <main className="homePage">
        <Image className="heroBg" src={bg} alt="RushRetake key art" priority />
        <div className="heroShade"></div>

        <div className="mainWrapper">
          <section className="hero" id="game">
            <div className="heroCopy">
              <div className="eyebrow">Counter-Terrorist Retake Experience</div>
              <div className="heroBadge">
                <Image src={logo} alt="NEX Platforms" />
                LIVE NOW ON NEX PLATFORMS
              </div>
              <h1 className="title">RushRetake</h1>
              <p className="subTitle">
                A one-page game launch experience built around one idea: tight
                angles, fast resets, hard reads, and the kind of round flow that
                makes you queue again immediately.
              </p>
              <div className="heroBtnSet">
                <button onClick={() => router.push("/games")} className="heroBtn primary">
                  Play Now
                </button>
                <button onClick={() => scrollToSection("modes")} className="heroBtn secondary">
                  Explore Gameplay
                </button>
              </div>
            </div>

            <div className="heroPanel">
              <div className="panelTop">Active Operation</div>
              <div className="panelMedia">
                <Image src={gameLogo} alt="RushRetake logo" />
              </div>
              <div className="panelTitle">RushRetake</div>
              <div className="panelText">
                Fast-paced tactical shooter by NEX Platforms. Browser-ready,
                round-first, and built for pressure.
              </div>
              <div className="panelList">
                <div>5v5 retake format</div>
                <div>Immediate requeue rhythm</div>
                <div>Readable silhouettes and high contrast</div>
              </div>
            </div>
          </section>

          <section className="statStrip">
            <div className="statCard">
              <span className="value">
                {baseConfig.users}
                {baseConfig.user_count_unit === "million" ? "M" : ""}
              </span>
              <span className="label">Players Reached</span>
            </div>
            <div className="statCard">
              <span className="value">5v5</span>
              <span className="label">Tactical Retake Format</span>
            </div>
            <div className="statCard">
              <span className="value">24/7</span>
              <span className="label">Instant Browser Access</span>
            </div>
            <div className="statCard">
              <span className="value">01</span>
              <span className="label">Live Competitive Release</span>
            </div>
          </section>

          <section className="showcaseSection" id="modes">
            <div className="sectionIntro">
              <span className="sectionLabel">Gameplay</span>
              <h2>Built around the retake, not the waiting room.</h2>
              <p>
                RushRetake strips the loop down to what matters most: gunfights,
                timing, site control, utility, and momentum.
              </p>
            </div>

            <div className="showcaseGrid">
              {gameplayCards.map((card) => (
                <article key={card.title} className="showcaseCard">
                  <div className="cardImage">
                    <Image src={card.image} alt={card.title} />
                  </div>
                  <div className="cardCopy">
                    <span className="cardTag">{card.tag}</span>
                    <h3>{card.title}</h3>
                    <p>{card.body}</p>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section className="operationSection">
            <article className="armoryFeature">
              <div className="armoryImage">
                <Image src={rrArsenal} alt="RushRetake armory" />
              </div>
              <div className="armoryCopy">
                <span className="sectionLabel">Armory</span>
                <h2>ARMORY</h2>
                <p>
                  A dedicated weapon wall for RushRetake. Clean silhouettes,
                  immediate recognition, and a presentation block that sells the
                  loadout fantasy directly.
                </p>
              </div>
            </article>
          </section>

          <section className="intelSection" id="intel">
            <div className="sectionHeader">
              <span className="sectionLabel">Latest Intel</span>
              <h2>Launch, updates, and live signal.</h2>
            </div>

            <article className="intelLead intelLeadWide" onClick={() => router.push("/news")}>
              <Image src={bg} alt="RushRetake live release" />
              <div className="intelOverlay">
                <span>{launchNews?.date || "March 20, 2026"}</span>
                <h3>{launchNews?.shortTitle || "RushRetake is live"}</h3>
                <p>
                  {launchNews?.article ||
                    "RushRetake brings quick rounds, tight gunplay, and team-focused objectives in an experience that loads in seconds."}
                </p>
              </div>
            </article>
          </section>

          <section className="communitySection" id="community">
            <div className="communityCopy">
              <span className="sectionLabel">Community</span>
              <h2>Lock in, queue up, and push the site.</h2>
              <p>
                If the visual direction should stay fully game-first, this page is
                now the baseline: dark, cinematic, aggressive, and centered on
                RushRetake from the first viewport to the last CTA.
              </p>
            </div>
            <div className="communityActions">
              <button onClick={() => router.push("/games")}>Play RushRetake</button>
              <button onClick={() => router.push("/news")}>Read Launch Notes</button>
            </div>
          </section>

          <Footer />
        </div>
      </main>
    </>
  );
}
