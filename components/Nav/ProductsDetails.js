import React from "react";
import data from "../../res/searchData.json";

const getGameByName = (gameName) => {
  return data.find((item) => item.name === gameName);
};

const popularGames = [
  getGameByName("Kour.io"),
  getGameByName("FoodStars.io"),
  getGameByName("Plundur.io"),
  // getGameByName("FPS Game"),
];

const legionEcoSystem = [
  getGameByName("LEGiON Portal"),
  getGameByName("LEGiON Distribution"),
  getGameByName("LEGiON Publishing"),
];

const featuredGames = [
  getGameByName("Poxel.io"),
  getGameByName("Overtide.io"),
  getGameByName("KourStrike.io"),
];

const comingSoon = [getGameByName("War FPS"), getGameByName("The Seas")];

const mainData = [
  {
    title: "Popular Games",
    items: popularGames,
  },
  {
    title: "LEGiON Ecosystem",
    items: legionEcoSystem,
  },
  {
    title: "Featured Games",
    items: featuredGames,
  },
  {
    title: "Coming Soon",
    items: comingSoon,
  },
];

export default function ProductsDetails() {
  const handleClick = (url) => {
    const elem = document.createElement("a");
    elem.href = url;
    elem.target = "blank";
    elem.click();
  };

  return (
    <div className="nav-item-expanded">
      <div className="wrapper products">
        {mainData.map((item, index) => (
          <section key={index} className="products-section">
            <div className="products-title">{item.title}</div>
            <div className="item-list">
              {item.items.map((currItem, index2) => (
                <div key={index2} className="item">
                  <div
                    style={{
                      backgroundImage: `url('${currItem.squareImage}')`,
                    }}
                    className="icoCont"
                  ></div>
                  <div className="infoCont">
                    <div
                      onClick={
                        item.title !== "Coming Soon"
                          ? () => handleClick(currItem.link)
                          : () => {}
                      }
                      className="infoTitle"
                    >
                      {currItem.name}
                    </div>
                    <div className="infoDetail">{currItem.navDesc}</div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
