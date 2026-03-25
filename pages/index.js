import Head from "next/head";
import Image from "next/image";
import Nav from "../components/Nav";
import Footer from "../components/Footer/Footer";
import bg from "../res/BG.png";
import logo from "../res/Logo.png";
import gameLogo from "../res/Game_Logo.png";
import deathmatchModeCover from "../res/Deathmatch_Mode_Cover.png";
import rrArsenal from "../res/RR_Arsenal.png";
import baseConfig from "../res/baseConfig.json";
import news from "../res/news.json";
import { useLanguage } from "../components/LanguageContext";

export default function Home() {
  const launchNews = news[0];
  const { language } = useLanguage();
  const openTelegram = () => {
    window.location.href = "https://t.me/RushRetake";
  };
  const copy = {
    en: {
      metaDescription: "RushRetake is a fast-paced tactical shooter by NEX Platforms.",
      eyebrow: "Counter-Terrorist Retake Experience",
      heroBadge: "LIVE NOW ON NEX PLATFORMS",
      heroTitle: "RushRetake",
      heroSubtitle:
        "A one-page game launch experience built around one idea: tight angles, fast resets, hard reads, and the kind of round flow that makes you queue again immediately.",
      playNow: "Play Now",
      exploreGameplay: "Explore Gameplay",
      panelTop: "Active Operation",
      panelTitle: "RushRetake",
      panelText:
        "Fast-paced tactical shooter by NEX Platforms. Browser-ready, round-first, and built for pressure.",
      panelList: [
        "5v5 retake format",
        "Immediate requeue rhythm",
        "Readable silhouettes and high contrast",
      ],
      playersReached: "Players Reached",
      tacticalRetake: "Tactical Retake Format",
      browserAccess: "Instant Browser Access",
      liveRelease: "Live Competitive Release",
      gameplay: "Gameplay",
      gameplayTitle: "Built around the retake, not the waiting room.",
      gameplayText:
        "RushRetake strips the loop down to what matters most: gunfights, timing, site control, utility, and momentum.",
      gameplayCards: [
        {
          tag: "Deathmatch",
          title: "Warm up fast. Refrag faster.",
          body: "Deathmatch keeps the guns hot between serious rounds: instant respawns, nonstop duels, and pure aim reps under pressure.",
          image: deathmatchModeCover,
        },
      ],
      armory: "Armory",
      armoryTitle: "ARMORY",
      armoryText:
        "A dedicated weapon wall for RushRetake. Clean silhouettes, immediate recognition, and a presentation block that sells the loadout fantasy directly.",
      latestIntel: "Latest Intel",
      intelTitle: "Launch, updates, and live signal.",
      intelFallbackDate: "March 20, 2026",
      intelFallbackTitle: "RushRetake is live",
      intelFallbackText:
        "RushRetake brings quick rounds, tight gunplay, and team-focused objectives in an experience that loads in seconds.",
      community: "Community",
      communityTitle: "Lock in, queue up, and push the site.",
      communityText:
        "If the visual direction should stay fully game-first, this page is now the baseline: dark, cinematic, aggressive, and centered on RushRetake from the first viewport to the last CTA.",
      playRushRetake: "Play RushRetake",
    },
    ru: {
      metaDescription: "RushRetake это быстрый тактический шутер от NEX Platforms.",
      eyebrow: "Тактический ретейк-шутер",
      heroBadge: "УЖЕ ДОСТУПНО НА NEX PLATFORMS",
      heroTitle: "RushRetake",
      heroSubtitle:
        "Одностраничный запуск игры, собранный вокруг одной идеи: плотные углы, быстрые рестарты, жёсткие чтения и такой темп раунда, который заставляет нажимать поиск снова.",
      playNow: "Играть",
      exploreGameplay: "Смотреть геймплей",
      panelTop: "Активная операция",
      panelTitle: "RushRetake",
      panelText:
        "Быстрый тактический шутер от NEX Platforms. Работает в браузере, строится вокруг раундов и держит постоянное давление.",
      panelList: [
        "Формат 5v5 retake",
        "Моментальный повторный поиск",
        "Читаемые силуэты и высокий контраст",
      ],
      playersReached: "Игроков охвачено",
      tacticalRetake: "Тактический формат retake",
      browserAccess: "Мгновенный доступ в браузере",
      liveRelease: "Живой релиз",
      gameplay: "Геймплей",
      gameplayTitle: "Всё строится вокруг ретейка, а не ожидания.",
      gameplayText:
        "RushRetake убирает лишнее и оставляет главное: перестрелки, тайминги, контроль точки, гранаты и темп.",
      gameplayCards: [
        {
          tag: "Deathmatch",
          title: "Разогрейся быстро. Входи в перестрелку ещё быстрее.",
          body: "Deathmatch держит оружие горячим между серьёзными матчами: мгновенные респавны, непрерывные дуэли и чистая тренировка аима под давлением.",
          image: deathmatchModeCover,
        },
      ],
      armory: "Арсенал",
      armoryTitle: "ARMORY",
      armoryText:
        "Отдельная оружейная стена для RushRetake. Чистые силуэты, мгновенное распознавание и подача, которая напрямую продаёт фантазию лоадаута.",
      latestIntel: "Новости",
      intelTitle: "Запуск, обновления и живой сигнал.",
      intelFallbackDate: "20 марта 2026",
      intelFallbackTitle: "RushRetake уже в игре",
      intelFallbackText:
        "RushRetake даёт быстрые раунды, плотную стрельбу и командные цели в опыте, который загружается за секунды.",
      community: "Комьюнити",
      communityTitle: "Заходи, жми поиск и продавливай плент.",
      communityText:
        "Если визуальный стиль должен оставаться полностью игровым, эта страница теперь и есть база: тёмная, кинематографичная, агрессивная и сфокусированная на RushRetake от первого экрана до последнего CTA.",
      playRushRetake: "Играть в RushRetake",
    },
  };
  const t = copy[language];

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Head>
        <title>RushRetake</title>
        <meta
          name="description"
          content={t.metaDescription}
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
              <div className="eyebrow">{t.eyebrow}</div>
              <div className="heroBadge">
                <Image src={logo} alt="NEX Platforms" />
                {t.heroBadge}
              </div>
              <h1 className="title">{t.heroTitle}</h1>
              <p className="subTitle">
                {t.heroSubtitle}
              </p>
              <div className="heroBtnSet">
                <button onClick={openTelegram} className="heroBtn primary">
                  {t.playNow}
                </button>
                <button onClick={() => scrollToSection("modes")} className="heroBtn secondary">
                  {t.exploreGameplay}
                </button>
              </div>
            </div>

            <div className="heroPanel">
              <div className="panelTop">{t.panelTop}</div>
              <div className="panelMedia">
                <Image src={gameLogo} alt="RushRetake logo" />
              </div>
              <div className="panelTitle">{t.panelTitle}</div>
              <div className="panelText">{t.panelText}</div>
              <div className="panelList">
                {t.panelList.map((item) => (
                  <div key={item}>{item}</div>
                ))}
              </div>
            </div>
          </section>

          <section className="statStrip">
            <div className="statCard">
              <span className="value">
                {baseConfig.users}
                {baseConfig.user_count_unit === "million" ? "M" : ""}
              </span>
              <span className="label">{t.playersReached}</span>
            </div>
            <div className="statCard">
              <span className="value">5v5</span>
              <span className="label">{t.tacticalRetake}</span>
            </div>
            <div className="statCard">
              <span className="value">24/7</span>
              <span className="label">{t.browserAccess}</span>
            </div>
            <div className="statCard">
              <span className="value">01</span>
              <span className="label">{t.liveRelease}</span>
            </div>
          </section>

          <section className="showcaseSection" id="modes">
            <div className="sectionIntro">
              <span className="sectionLabel">{t.gameplay}</span>
              <h2>{t.gameplayTitle}</h2>
              <p>{t.gameplayText}</p>
            </div>

            <div className="showcaseGrid">
              {t.gameplayCards.map((card) => (
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
                <span className="sectionLabel">{t.armory}</span>
                <h2>{t.armoryTitle}</h2>
                <p>{t.armoryText}</p>
              </div>
            </article>
          </section>

          <section className="intelSection" id="intel">
            <div className="sectionHeader">
              <span className="sectionLabel">{t.latestIntel}</span>
              <h2>{t.intelTitle}</h2>
            </div>

            <article className="intelLead intelLeadWide">
              <Image src={bg} alt="RushRetake live release" />
              <div className="intelOverlay">
                <span>{language === "ru" ? t.intelFallbackDate : launchNews?.date || t.intelFallbackDate}</span>
                <h3>{language === "ru" ? t.intelFallbackTitle : launchNews?.shortTitle || t.intelFallbackTitle}</h3>
                <p>
                  {language === "ru"
                    ? t.intelFallbackText
                    : launchNews?.article || t.intelFallbackText}
                </p>
              </div>
            </article>
          </section>

          <section className="communitySection" id="community">
            <div className="communityCopy">
              <span className="sectionLabel">{t.community}</span>
              <h2>{t.communityTitle}</h2>
              <p>{t.communityText}</p>
            </div>
            <div className="communityActions">
              <button onClick={openTelegram}>{t.playRushRetake}</button>
              <button onClick={() => scrollToSection("intel")}>{t.latestIntel}</button>
            </div>
          </section>

          <Footer />
        </div>
      </main>
    </>
  );
}
