import Image from "next/image";
import { useRouter } from "next/router";
import Logo from "../res/Logo.png";

const homeNavItems = [
  { title: "Game", id: "game" },
  { title: "Modes", id: "modes" },
  { title: "Intel", id: "intel" },
  { title: "Community", id: "community" },
];

const siteNavItems = [
  { title: "Home", href: "/" },
  { title: "Games", href: "/games" },
  { title: "News", href: "/news" },
  { title: "Company", href: "/company" },
];

export default function Nav() {
  const router = useRouter();
  const isHome = router.pathname === "/";

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
          {isHome ? "RushRetake" : "NEX Platforms"}
        </div>

        <div className="links">
          {isHome
            ? homeNavItems.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  className="nav-link"
                  onClick={() => goToSection(item.id)}
                >
                  {item.title}
                </button>
              ))
            : siteNavItems.map((item) => (
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
          <div
            onClick={() => router.push(isHome ? "/games" : "/contact")}
            className="nav-btn nav-contact"
          >
            <i className={isHome ? "ri-sword-line" : "ri-mail-line"}></i>
            {isHome ? "Play Now" : "Contact"}
          </div>
        </div>
      </div>
    </div>
  );
}
