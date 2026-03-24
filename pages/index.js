import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import Nav from "../components/Nav";
import Footer from "../components/Footer/Footer";
import bg from "../res/BG.png";
import logo from "../res/Logo.png";
import gameLogo from "../res/Game_Logo.png";
import baseConfig from "../res/baseConfig.json";
import news from "../res/news.json";
import searchData from "../res/searchData.json";

export default function Home() {
  const router = useRouter();
  const featuredGame = searchData.find((item) => item.name === "RushRetake");
  const primaryNews = news[0];
  const newsCards = news.slice(1, 4);

  const gotoSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Head>
        <title>NEX Platforms</title>
        <meta name="description" content="NEX Platforms" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
      <main className="homePage">
        <Image className="heroBg" src={bg} alt="NEX Platforms battleground" priority />
        <div className="heroShade"></div>
        <div className="mainWrapper">
          <section className="hero">
            <div className="heroCopy">
              <div className="eyebrow">TACTICAL FPS PLATFORM</div>
              <div className="heroBadge">
                <Image src={logo} alt="NEX Platforms" />
                LIVE OPERATION // RUSHRETAKE
              </div>
              <div className="title">The next round starts with RushRetake.</div>
              <div className="subTitle">
                Built around tight angles, instant respawns, and high-pressure retakes,
                NEX Platforms now delivers a darker, more direct landing experience
                inspired by Counter-Strike&apos;s official presentation.
              </div>
              <div className="heroBtnSet">
                <button onClick={() => gotoSection("featured")} className="heroBtn primary">
                  View Operation
                </button>
                <button onClick={() => router.push("/news")} className="heroBtn secondary">
                  Latest Intel
                </button>
              </div>
              <div className="heroStats">
                <div className="statCard">
                  <span className="value">
                    {baseConfig.users}
                    {baseConfig.user_count_unit === "million" ? "M" : ""}
                  </span>
                  <span className="label">Players Reached</span>
                </div>
                <div className="statCard">
                  <span className="value">24/7</span>
                  <span className="label">Instant Browser Access</span>
                </div>
                <div className="statCard">
                  <span className="value">01</span>
                  <span className="label">Active Competitive Release</span>
                </div>
              </div>
            </div>

            <div className="heroPanel">
              <div className="panelTop">Featured Deployment</div>
              <div className="panelMedia">
                <Image src={gameLogo} alt="RushRetake" />
              </div>
              <div className="panelTitle">{featuredGame?.name || "RushRetake"}</div>
              <div className="panelText">
                {featuredGame?.shortDesc ||
                  "Fast-paced tactical shooter by NEX Platforms."}
              </div>
              <div className="panelList">
                <div>5v5 retake flow with instant rematches</div>
                <div>High-contrast arenas and weapon-first pacing</div>
                <div>Designed for spectators, clips, and repeat sessions</div>
              </div>
            </div>
          </section>

          <section id="featured" className="combatStrip">
            <div className="stripIntro">
              <span className="sectionLabel">Operation Brief</span>
              <h2>One game. One front line. No filler sections.</h2>
              <p>
                The homepage now follows a more editorial shooter layout: hard
                contrast, compact navigation, disciplined spacing, and large
                promotional blocks instead of startup-style cards.
              </p>
            </div>

            <div className="stripCards">
              <article className="featureCard large">
                <span className="cardTag">Current Release</span>
                <h3>RushRetake is live</h3>
                <p>
                  A launch-focused hero card with direct CTA priority, modeled after
                  the way Counter-Strike surfaces a single active operation.
                </p>
                <button onClick={() => router.push("/games")}>Open Game Library</button>
              </article>

              <article className="featureCard">
                <span className="cardTag">Presentation</span>
                <h3>Condensed headings and utility chrome</h3>
                <p>
                  Typography, palette, and panel hierarchy were tightened to feel more
                  like a shooter broadcast than a SaaS landing page.
                </p>
              </article>

              <article className="featureCard">
                <span className="cardTag">Navigation</span>
                <h3>Heavy header with utilitarian controls</h3>
                <p>
                  Buttons, borders, and surfaces now lean into steel, sand, smoke, and
                  amber accents rather than glossy gradients.
                </p>
              </article>
            </div>
          </section>

          <section className="intelSection">
            <div className="sectionHeader">
              <span className="sectionLabel">Latest Intel</span>
              <h2>News front and center.</h2>
            </div>

            <div className="intelGrid">
              {primaryNews && (
                <article
                  className="intelLead"
                  onClick={() => router.push(`/news/${primaryNews.shortTitle}`)}
                >
                  <img src={primaryNews.thumbnail} alt={primaryNews.shortTitle} />
                  <div className="intelOverlay">
                    <span>{primaryNews.category}</span>
                    <h3>{primaryNews.shortTitle}</h3>
                    <p>{primaryNews.article}</p>
                  </div>
                </article>
              )}

              <div className="intelStack">
                {newsCards.map((item) => (
                  <article
                    key={item.id}
                    className="intelCard"
                    onClick={() => router.push(`/news/${item.shortTitle}`)}
                  >
                    <img src={item.thumbnail} alt={item.shortTitle} />
                    <div>
                      <span>{item.date}</span>
                      <h3>{item.shortTitle}</h3>
                    </div>
                  </article>
                ))}
                <button className="allNewsBtn" onClick={() => router.push("/news")}>
                  View All News
                </button>
              </div>
            </div>
          </section>

          <section className="signalSection">
            <div className="signalPanel">
              <span className="sectionLabel">Community Signal</span>
              <h2>Built for players who want the round to start immediately.</h2>
              <p>
                NEX Platforms keeps the message tight: launch, watch, queue,
                repeat. If you want the same direction across inner pages, this
                new homepage gives the visual base for it.
              </p>
            </div>

            <div className="signalActions">
              <button onClick={() => router.push("/contact")}>Contact Studio</button>
              <button onClick={() => router.push("/company")}>Read About NEX</button>
            </div>
          </section>

          <Footer />
        </div>
      </main>
    </>
  );
}
