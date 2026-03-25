import Image from "next/image";
import { useRouter } from "next/router";
import Logo from "../res/Logo.png";
import { useLanguage } from "./LanguageContext";

export default function Nav() {
  const router = useRouter();
  const isHome = router.pathname === "/";
  const { language, setLanguage } = useLanguage();
  const openTelegram = () => {
    window.location.href = "https://t.me/RushRetake";
  };
  const copy = {
    en: {
      homeNav: [
        { title: "Game", id: "game" },
        { title: "Modes", id: "modes" },
        { title: "Intel", id: "intel" },
        { title: "Community", id: "community" },
      ],
      siteNav: [
        { title: "Home", href: "/" },
        { title: "Careers", href: "/careers" },
        { title: "Policies", href: "/policies" },
        { title: "Privacy", href: "/privacy" },
      ],
      brandHome: "RushRetake",
      brandSite: "NEX Platforms",
      playNow: "Play Now",
      help: "Help",
    },
    ru: {
      homeNav: [
        { title: "Игра", id: "game" },
        { title: "Режимы", id: "modes" },
        { title: "Новости", id: "intel" },
        { title: "Комьюнити", id: "community" },
      ],
      siteNav: [
        { title: "Главная", href: "/" },
        { title: "Карьера", href: "/careers" },
        { title: "Политики", href: "/policies" },
        { title: "Приватность", href: "/privacy" },
      ],
      brandHome: "RushRetake",
      brandSite: "NEX Platforms",
      playNow: "Играть",
      help: "Помощь",
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
    <div className="nav">
      <div className="mainWrapper">
        <div className="logo" onClick={() => router.push("/")}>
          <Image alt="Logo" src={Logo} />
          {isHome ? t.brandHome : t.brandSite}
        </div>

        <div className="links">
          {isHome
            ? t.homeNav.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  className="nav-link"
                  onClick={() => goToSection(item.id)}
                >
                  {item.title}
                </button>
              ))
            : t.siteNav.map((item) => (
                <button
                  key={item.href}
                  type="button"
                  className="nav-link"
                  onClick={() => router.push(item.href)}
                >
                  {item.title}
                </button>
              ))}
        </div>

        <div className="right-bar">
          <div className="lang-switch" role="group" aria-label="Language switch">
            <button
              type="button"
              className={`lang-btn ${language === "ru" ? "active" : ""}`}
              onClick={() => setLanguage("ru")}
            >
              RU
            </button>
            <button
              type="button"
              className={`lang-btn ${language === "en" ? "active" : ""}`}
              onClick={() => setLanguage("en")}
            >
              EN
            </button>
          </div>
          <div
            onClick={() => (isHome ? openTelegram() : router.push("/help"))}
            className="nav-btn nav-contact"
          >
            <i className={isHome ? "ri-sword-line" : "ri-question-line"}></i>
            {isHome ? t.playNow : t.help}
          </div>
        </div>
      </div>
    </div>
  );
}
