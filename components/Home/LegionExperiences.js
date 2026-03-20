/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import React from "react";
import { useRouter } from "next/router";
import experienceData from "../../res/experiencesData.json";

const listOfGames = experienceData.filter((item) => item.row === "1");
const listOfGames2 = experienceData.filter((item) => item.row === "2");

const handleClick = (url) => {
  if (url === "blank") return;
  const elem = document.createElement("a");
  elem.href = url;
  elem.target = "blank";
  elem.click();
};

export default function LegionExperiences() {
  const router = useRouter();
  return (
    <section id="legionExperiences" className="aSection legionexperiences">
      <div className="title">
        NEX Platforms <span>Experiences</span>
      </div>
      <div className="info">Quality experiences, available for everyone</div>
      <div className="slider">
        <div className="slide-track">
          {listOfGames.map((item, index) => (
            <div
              key={index}
              onClick={() => handleClick(item.link)}
              className="slide"
            >
              <div className="gameName">{item.title}</div>
              <img src={item.wideImage} alt="photo"></img>
            </div>
          ))}
          {listOfGames.map((item, index) => (
            <div
              key={index + "2"}
              onClick={() => handleClick(item.link)}
              className="slide"
            >
              <div className="gameName">{item.title}</div>
              <img src={item.wideImage} alt="photo"></img>
            </div>
          ))}
        </div>
      </div>
      <div className="slider slider2">
        <div className="slide-track">
          {listOfGames2.map((item, index) => (
            <div
              key={index}
              onClick={() => handleClick(item.link)}
              className="slide"
            >
              <div className="gameName">{item.title}</div>
              <img src={item.wideImage} alt="photo"></img>
            </div>
          ))}
          {listOfGames2.map((item, index) => (
            <div
              key={index}
              onClick={() => handleClick(item.link)}
              className="slide"
            >
              <div className="gameName">{item.title}</div>
              <img src={item.wideImage} alt="photo"></img>
            </div>
          ))}
        </div>
      </div>

      <button onClick={() => router.push("/games")}>See Full Lineup</button>
    </section>
  );
}
