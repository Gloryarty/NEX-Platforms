import React from "react";
import data from "../../res/searchData.json";

export default function GamesList() {
  const handleClick = (url) => {
    const elem = document.createElement("a");
    elem.href = url;
    elem.target = "blank";
    elem.click();
  };
  return (
    <section className="aSection gamesList">
      <div className="scopedItems">
        {data.map((item, index) =>
          item.game === "Y" ? (
            <div key={index} className="scopedItem">
              <img src={item.squareImage} alt="cover" />
              <div className="detailsCont">
                <div className="card-title">{item.name}</div>
                <div className="card-info">{item.shortDesc}</div>
                <div className="actionCont">
                  {item.comingSoon === "N" ? (
                    <button onClick={() => handleClick(item.link)}>
                      <i className="ri-arrow-right-s-line"></i>
                      Play Now
                    </button>
                  ) : (
                    <button className="disabled">{item.comingSoon}</button>
                  )}
                </div>
              </div>
            </div>
          ) : null
        )}
      </div>
    </section>
  );
}
