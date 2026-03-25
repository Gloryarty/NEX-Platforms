import Image from "next/image";
import { useRouter } from "next/router";
import logo from "../../res/Logo.png";
import baseConfig from "../../res/baseConfig.json";

export default function Footer() {
  const router = useRouter();

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
            RushRetake
          </div>
          <div className="footerHeroTitle">Fast-paced tactical shooter by NEX Platforms.</div>
          <div className="location">
            <i className="ri-shield-cross-line"></i>Live Operation
          </div>
        </div>
        <div className="rCont">
          <button className="contact-btn" onClick={() => router.push("/games")}>
            Play Now
          </button>
          <button className="partnership-btn" onClick={() => router.push("/news")}>
            Launch Notes
          </button>
        </div>
      </div>
      <div className="footerMain">
        <section className="footerSection social">
          <div className="header">RushRetake</div>
          <div className="referenceHolder">
            <div onClick={() => goToSection("game")}>Overview</div>
            <div onClick={() => goToSection("modes")}>Gameplay</div>
            <div onClick={() => goToSection("intel")}>Intel</div>
            <div onClick={() => goToSection("community")}>Community</div>
          </div>
          <div className="mainLogoCont">
            <Image src={logo} alt="logo" />
            <div>RushRetake</div>
          </div>
        </section>
        <section className="footerSection">
          <div className="header">Play</div>
          <div className="referenceHolder">
            <div onClick={() => router.push("/games")}>Open Game</div>
            <div onClick={() => router.push("/news")}>Read Update</div>
            <div onClick={() => router.push("/contact")}>Contact Team</div>
          </div>
        </section>
        <section className="footerSection">
          <div className="header">Legal</div>
          <div className="referenceHolder">
            <div onClick={() => router.push("/terms")}>Terms of service</div>
            <div onClick={() => router.push("/privacy")}>Privacy</div>
            <div onClick={() => router.push("/security")}>Security</div>
          </div>
        </section>
        <section className="footerSection">
          <div className="header">Studio</div>
          <div className="referenceHolder">
            <div onClick={() => router.push("/company")}>About NEX</div>
            <div onClick={() => router.push("/innovation")}>Innovation</div>
            <div onClick={() => router.push("/contact")}>Support</div>
          </div>
        </section>
        <section className="footerSection">
          <div className="header">Status</div>
          <div className="referenceHolder">
            <div>Live Release</div>
            <div>{baseConfig.users}+ community</div>
            <div>Round-first gameplay</div>
          </div>
        </section>
      </div>
      <div className="footerEnd">
        {baseConfig.service_till} RushRetake - All Rights Reserved.
      </div>
    </footer>
  );
}
