import Image from "next/image";
import React from "react";
import logo from "../../res/logo.png";
import { useRouter } from "next/router";
import data from "../../res/searchData.json";
import baseConfig from "../../res/baseConfig.json"

const getGameByName = (gameName) => {
  return data.find((item) => item.name === gameName);
};

const popularGames = [
  getGameByName("Kour.io"),
  getGameByName("Plundur.io"),
  getGameByName("FoodStars.io"),
  // getGameByName("FPS Game"),
];

const legionEcoSystem = [
  getGameByName("LEGiON Portal"),
  getGameByName("LEGiON Distribution"),
  getGameByName("LEGiON Publishing"),
];

const handleClick = (url) => {
  const elem = document.createElement("a");
  elem.href = url;
  elem.target = "blank";
  elem.click();
};

export default function Footer() {
  const router = useRouter();
  return (
    <footer>
      <div className="footerHero">
        <div className="lCont">
          <div className="logoCont">
            <Image src={logo} alt="logo" />
            LegionGames.io
          </div>
          <div className="footerHeroTitle">Experiences that matter.</div>
          <div className="location">
            <i className="ri-map-pin-2-fill"></i>United States
          </div>
        </div>
        <div className="rCont">
          <button
            className="contact-btn"
            onClick={() => router.push("/contact")}
          >
            Contact
          </button>
          <button
            className="partnership-btn"
            onClick={() => router.push("/partnership")}
          >
            Partnership
          </button>
        </div>
      </div>
      <div className="footerMain">
        <section className="footerSection social">
          <div className="header">Social Media</div>
          <div className="socialMedia">
            <i className="ri-twitter-fill twitter icon"></i>
            <i
              className="ri-youtube-fill youtube icon"
              onClick={() =>
                handleClick(
                  "https://youtube.com/@legion-platforms?si=d06ilR8CiDkNJsQd"
                )
              }
            ></i>
            <i className="ri-discord-fill discord icon"></i>
          </div>
          <div className="mainLogoCont">
            <Image src={logo} alt="logo" />
            <div>Legion Games.io</div>
          </div>
        </section>
        <section className="footerSection">
          <div className="header">Games</div>
          <div className="referenceHolder">
            {popularGames.map((item, index) => (
              <div onClick={() => handleClick(item.link)} key={index}>
                {item.name}
              </div>
            ))}
          </div>
        </section>
        <section className="footerSection">
          <div className="header">Platforms</div>
          <div className="referenceHolder">
            {legionEcoSystem.map((item, index) => (
              <div
                onClick={() =>
                  // handleClick(item.link)
                  {}
                }
                key={index}
              >
                {item.name}
              </div>
            ))}
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
          <div className="header">Company</div>
          <div className="referenceHolder">
            <div onClick={() => router.push("/accessibility")}>
              Accessibility
            </div>
            <div onClick={() => router.push("/policies")}>Ethics Policy</div>
            <div onClick={() => router.push("/innovation")}>Innovation</div>
          </div>
        </section>
        <section className="footerSection">
          <div className="header">Directory</div>
          <div className="referenceHolder">
            <div onClick={() => router.push("/company")}>About LEGiON</div>
            <div onClick={() => router.push("/careers")}>Careers</div>
            <div>Help Center</div>
          </div>
        </section>
      </div>
      <div className="footerEnd">
        {baseConfig.service_till} LegionGames.io - All Rights Reserved.
      </div>
    </footer>
  );
}
