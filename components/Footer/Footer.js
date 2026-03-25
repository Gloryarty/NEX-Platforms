import Image from "next/image";
import { useRouter } from "next/router";
import logo from "../../res/Logo.png";
import baseConfig from "../../res/baseConfig.json";

export default function Footer() {
  const router = useRouter();
  const isHome = router.pathname === "/";
  const openTelegram = () => {
    window.location.href = "https://t.me/RushRetake";
  };

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
            {isHome ? "RushRetake" : "NEX Platforms"}
          </div>
          <div className="footerHeroTitle">
            {isHome
              ? "Fast-paced tactical shooter by NEX Platforms."
              : "Games, updates, and platform news from NEX Platforms."}
          </div>
          <div className="location">
            <i className={isHome ? "ri-shield-cross-line" : "ri-map-pin-2-fill"}></i>
            {isHome ? "Live Operation" : "United States"}
          </div>
        </div>
        <div className="rCont">
          <button
            className="contact-btn"
            onClick={() => (isHome ? openTelegram() : router.push("/help"))}
          >
            {isHome ? "Play Now" : "Help"}
          </button>
          <button
            className="partnership-btn"
            onClick={() => (isHome ? goToSection("intel") : router.push("/privacy"))}
          >
            {isHome ? "Latest Intel" : "Privacy"}
          </button>
        </div>
      </div>
      <div className="footerMain">
        <section className="footerSection social">
          <div className="header">{isHome ? "RushRetake" : "NEX Platforms"}</div>
          <div className="referenceHolder">
            {isHome ? (
              <>
                <div onClick={() => goToSection("game")}>Overview</div>
                <div onClick={() => goToSection("modes")}>Gameplay</div>
                <div onClick={() => goToSection("intel")}>Intel</div>
                <div onClick={() => goToSection("community")}>Community</div>
              </>
            ) : (
              <>
                <div onClick={() => router.push("/")}>Home</div>
                <div onClick={() => router.push("/careers")}>Careers</div>
                <div onClick={() => router.push("/policies")}>Policies</div>
                <div onClick={() => router.push("/privacy")}>Privacy</div>
              </>
            )}
          </div>
          <div className="mainLogoCont">
            <Image src={logo} alt="logo" />
            <div>{isHome ? "RushRetake" : "NEX Platforms"}</div>
          </div>
        </section>
        <section className="footerSection">
          <div className="header">{isHome ? "Play" : "Platform"}</div>
          <div className="referenceHolder">
            <div onClick={() => (isHome ? openTelegram() : router.push("/help"))}>
              {isHome ? "Join Telegram" : "Help Center"}
            </div>
            <div onClick={() => (isHome ? goToSection("intel") : router.push("/accessibility"))}>
              {isHome ? "View Intel" : "Accessibility"}
            </div>
            <div onClick={() => (isHome ? goToSection("community") : router.push("/innovation"))}>
              {isHome ? "Community" : "Innovation"}
            </div>
          </div>
        </section>
        <section className="footerSection">
          <div className="header">Legal</div>
          <div className="referenceHolder">
            <div onClick={() => router.push("/legal")}>Legal</div>
            <div onClick={() => router.push("/privacy")}>Privacy</div>
            <div onClick={() => router.push("/security")}>Security</div>
          </div>
        </section>
        <section className="footerSection">
          <div className="header">Studio</div>
          <div className="referenceHolder">
            <div onClick={() => router.push("/innovation")}>Innovation</div>
            <div onClick={() => router.push("/playtesting")}>Playtesting</div>
            <div onClick={() => router.push("/help")}>Support</div>
          </div>
        </section>
        <section className="footerSection">
          <div className="header">{isHome ? "Status" : "Directory"}</div>
          <div className="referenceHolder">
            {isHome ? (
              <>
                <div>Live Release</div>
                <div>{baseConfig.users}+ community</div>
                <div>Round-first gameplay</div>
              </>
            ) : (
              <>
                <div onClick={() => router.push("/careers")}>Careers</div>
                <div onClick={() => router.push("/help")}>Help Center</div>
                <div onClick={() => router.push("/playtesting")}>Playtesting</div>
              </>
            )}
          </div>
        </section>
      </div>
      <div className="footerEnd">
        {baseConfig.service_till} {isHome ? "RushRetake" : "NEX Platforms"} - All Rights Reserved.
      </div>
    </footer>
  );
}
