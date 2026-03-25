import Image from "next/image";
import { useRouter } from "next/router";
import logo from "../../res/Logo.png";
import baseConfig from "../../res/baseConfig.json";
import { useLanguage } from "../LanguageContext";

export default function Footer() {
  const router = useRouter();
  const isHome = router.pathname === "/";
  const { language } = useLanguage();
  const openTelegram = () => {
    window.location.href = "https://t.me/RushRetake";
  };
  const copy = {
    en: {
      brandHome: "NEX Platforms",
      brandSite: "NEX Platforms",
      heroTitleHome: "Fast-paced tactical shooter by NEX Platforms.",
      heroTitleSite: "Games, updates, and platform news from NEX Platforms.",
      locationHome: "Live Operation",
      locationSite: "United States",
      playNow: "Play Now",
      help: "Help",
      latestIntel: "Latest Intel",
      privacy: "Privacy",
      socialHeaderHome: "RushRetake",
      socialHeaderSite: "NEX Platforms",
      overview: "Overview",
      gameplay: "Gameplay",
      intel: "Intel",
      community: "Community",
      home: "Home",
      careers: "Careers",
      policies: "Policies",
      playHeader: "Play",
      platformHeader: "Platform",
      joinTelegram: "Join Telegram",
      viewIntel: "View Intel",
      helpCenter: "Help Center",
      accessibility: "Accessibility",
      innovation: "Innovation",
      studio: "Studio",
      playtesting: "Playtesting",
      support: "Support",
      status: "Status",
      directory: "Directory",
      liveRelease: "Live Release",
      communityCount: "community",
      roundFirst: "Round-first gameplay",
      rights: "All Rights Reserved.",
    },
    ru: {
      brandHome: "NEX Platforms",
      brandSite: "NEX Platforms",
      heroTitleHome: "Быстрый тактический шутер от NEX Platforms.",
      heroTitleSite: "Игры, обновления и новости платформы NEX Platforms.",
      locationHome: "Операция активна",
      locationSite: "США",
      playNow: "Играть",
      help: "Помощь",
      latestIntel: "Новости",
      privacy: "Приватность",
      socialHeaderHome: "RushRetake",
      socialHeaderSite: "NEX Platforms",
      overview: "Обзор",
      gameplay: "Геймплей",
      intel: "Новости",
      community: "Комьюнити",
      home: "Главная",
      careers: "Карьера",
      policies: "Политики",
      playHeader: "Игра",
      platformHeader: "Платформа",
      joinTelegram: "Telegram",
      viewIntel: "Новости",
      helpCenter: "Центр помощи",
      accessibility: "Доступность",
      innovation: "Инновации",
      studio: "Студия",
      playtesting: "Плейтест",
      support: "Поддержка",
      status: "Статус",
      directory: "Разделы",
      liveRelease: "Релиз в эфире",
      communityCount: "комьюнити",
      roundFirst: "Раундовый геймплей",
      rights: "Все права защищены.",
    },
  };
  const t = copy[language];

  const goToSection = (id) => {
    if (router.pathname !== "/") {
      router.push(`/#${id}`);
      return;
    }

    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer>
      <div className="footerHero">
        <div className="lCont">
          <div className="logoCont">
            <Image src={logo} alt="logo" />
            {isHome ? t.brandHome : t.brandSite}
          </div>
          <div className="footerHeroTitle">
            {isHome
              ? t.heroTitleHome
              : t.heroTitleSite}
          </div>
          <div className="location">
            <i className={isHome ? "ri-shield-cross-line" : "ri-map-pin-2-fill"}></i>
            {isHome ? t.locationHome : t.locationSite}
          </div>
        </div>
        <div className="rCont">
          <button
            className="contact-btn"
            onClick={() => (isHome ? openTelegram() : router.push("/help"))}
          >
            {isHome ? t.playNow : t.help}
          </button>
          <button
            className="partnership-btn"
            onClick={() => (isHome ? goToSection("intel") : router.push("/privacy"))}
          >
            {isHome ? t.latestIntel : t.privacy}
          </button>
        </div>
      </div>
      <div className="footerMain">
        <section className="footerSection social">
          <div className="header">{isHome ? t.socialHeaderHome : t.socialHeaderSite}</div>
          <div className="referenceHolder">
            {isHome ? (
              <>
                <div onClick={() => goToSection("game")}>{t.overview}</div>
                <div onClick={() => goToSection("modes")}>{t.gameplay}</div>
                <div onClick={() => goToSection("intel")}>{t.intel}</div>
                <div onClick={() => goToSection("community")}>{t.community}</div>
              </>
            ) : (
              <>
                <div onClick={() => router.push("/")}>{t.home}</div>
                <div onClick={() => router.push("/careers")}>{t.careers}</div>
                <div onClick={() => router.push("/policies")}>{t.policies}</div>
                <div onClick={() => router.push("/privacy")}>{t.privacy}</div>
              </>
            )}
          </div>
          <div className="mainLogoCont">
            <Image src={logo} alt="logo" />
            <div>{isHome ? t.brandHome : t.brandSite}</div>
          </div>
        </section>
        <section className="footerSection">
          <div className="header">{isHome ? t.playHeader : t.platformHeader}</div>
          <div className="referenceHolder">
            <div onClick={() => (isHome ? openTelegram() : router.push("/help"))}>
              {isHome ? t.joinTelegram : t.helpCenter}
            </div>
            <div onClick={() => (isHome ? goToSection("intel") : router.push("/accessibility"))}>
              {isHome ? t.viewIntel : t.accessibility}
            </div>
            <div onClick={() => (isHome ? goToSection("community") : router.push("/innovation"))}>
              {isHome ? t.community : t.innovation}
            </div>
          </div>
        </section>
        <section className="footerSection">
          <div className="header">{t.studio}</div>
          <div className="referenceHolder">
            <div onClick={() => router.push("/innovation")}>{t.innovation}</div>
            <div onClick={() => router.push("/playtesting")}>{t.playtesting}</div>
            <div onClick={() => router.push("/help")}>{t.support}</div>
          </div>
        </section>
        <section className="footerSection">
          <div className="header">{isHome ? t.status : t.directory}</div>
          <div className="referenceHolder">
            {isHome ? (
              <>
                <div>{t.liveRelease}</div>
                <div>{baseConfig.users}+ {t.communityCount}</div>
                <div>{t.roundFirst}</div>
              </>
            ) : (
              <>
                <div onClick={() => router.push("/careers")}>{t.careers}</div>
                <div onClick={() => router.push("/help")}>{t.helpCenter}</div>
                <div onClick={() => router.push("/playtesting")}>{t.playtesting}</div>
              </>
            )}
          </div>
        </section>
      </div>
      <div className="footerEnd">
        {baseConfig.service_till} {isHome ? t.brandHome : t.brandSite} - {t.rights}
      </div>
    </footer>
  );
}
