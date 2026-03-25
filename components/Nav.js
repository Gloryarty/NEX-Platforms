import Image from "next/image";
import { useRouter } from "next/router";
import Logo from "../res/Logo.png";

const navItems = [
  { title: "Game", id: "game" },
  { title: "Modes", id: "modes" },
  { title: "Intel", id: "intel" },
  { title: "Community", id: "community" },
];

export default function Nav() {
  const router = useRouter();

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
          RushRetake
        </div>

        <div className="links">
          {navItems.map((item) => (
            <button
              key={item.id}
              type="button"
              className="nav-link"
              onClick={() => goToSection(item.id)}
            >
              {item.title}
            </button>
          ))}
        </div>

        <div className="right-bar">
          <div onClick={() => router.push("/games")} className="nav-btn nav-contact">
            <i className="ri-sword-line"></i>
            Play Now
          </div>
        </div>
      </div>
    </div>
  );
}
