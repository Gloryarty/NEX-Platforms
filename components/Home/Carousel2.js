/* eslint-disable @next/next/no-img-element */
import { useMemo } from "react";
import data from "../../res/searchData.json";

export default function Carousel2({ title = "Software Products" }) {
  const handleClick = (url) => {
    const elem = document.createElement("a");
    elem.href = url;
    elem.target = "blank";
    elem.click();
  };

  return (
    <div className={`carousel2`}>
      <div className="actions">
        <div className="title">{title}</div>
        <i
          className="ri-arrow-left-s-line"
          onClick={() => {
            document.getElementById("carousel2").scrollLeft -= 200;
          }}
        ></i>
        <i
          className="ri-arrow-right-s-line"
          onClick={() => {
            document.getElementById("carousel2").scrollLeft += 200;
          }}
        ></i>
      </div>
      <div className="card-list" id="carousel2">
        {data.map((item, index) =>
          item.software === "Y" ? (
            <div key={index} className="card">
              <div className="topCont">
                <div className="imageCont">
                  <img
                    className="card-bg"
                    src={item.wideImage}
                    alt="gamePhoto"
                  ></img>
                </div>
                <div className="title-cont">
                  <img src={item.squareImage} alt="game square image"></img>
                  <div className="card-title">{item.name}</div>
                </div>
                <div className="info">{item.softwareDesc}</div>
              </div>
              <div className="bottomCont">
                <button
                  onClick={() => handleClick(item.link)}
                  className={`card-btn ${
                    item.comingSoon !== "N" && "disabled"
                  }`}
                >
                  {item.comingSoon === "N" ? "Open" : "Coming Soon"}
                </button>
              </div>
            </div>
          ) : null
        )}
      </div>
    </div>
  );
}
