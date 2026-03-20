import React from "react";

const defaultSet = [
  {
    logo: "ri-lightbulb-flash-line",
    head: "We innovate",
    info: "Be a part of a company that puts innovation first",
  },
  {
    logo: "ri-leaf-fill",
    head: "Personal Development",
    info: "We provide many learning and growth opportunities",
  },
  {
    logo: "ri-funds-line",
    head: "Rapid Growth",
    info: "Be a part of a fast-growning company environment",
  },
  {
    logo: "ri-tools-fill",
    head: "We build new worlds",
    info: "Here at NEX Platforms - we plan, we build, and we finish",
  },
];

export default function OurCulture({
  id = "dummy",
  title = "Our Culture",
  data = defaultSet,
}) {
  return (
    <section id={id} className="aSection ourCulture">
      <div className="mainCont">
        <div className="title">{title}</div>
        <div className="cultures">
          {data.map((item, index) => (
            <div key={index} className="item">
              <div className="lCont">
                <i className={item.logo}></i>
              </div>
              <div className="rCont">
                <div className="header">{item.head}</div>
                <div className="info">{item.info}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
