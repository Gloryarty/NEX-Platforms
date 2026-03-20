import React from "react";

const rushRetake = {
  name: "RushRetake",
  link: "#",
  squareImage: "/res/g1.png",
  navDesc: "Fast-paced tactical shooter",
};

const mainData = [
  {
    title: "Our Game",
    items: [rushRetake],
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
                      onClick={() => handleClick(currItem.link)}
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
