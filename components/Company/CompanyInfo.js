import React from "react";

export default function CompanyInfo() {
  return (
    <div id="companyinfo" className="companyInfoSection">
      <div className="infoSet">
        <div
          style={{
            backgroundImage: `url('/res/company_page_sub_section_hero.png')`,
          }}
          className="rCont"
        ></div>
        <div className="lCont">
          <div className="title">Experiences that matter</div>
          <div className="info">
            At NEX Platforms Platforms we are proud to use cutting-edge technology to
            create immersive and engaging gaming experiences for our users. We
            strive to push the boundaries of what is possible in gaming and
            constantly work to improve the user experience.
          </div>
        </div>
      </div>

      <div className="infoSet">
        <div
          style={{
            backgroundImage: `url('/res/company_page_sub_section_hero_2.png')`,
          }}
          className="rCont"
        ></div>
        <div className="lCont">
          <div className="title">We work to innovate</div>
          <div className="info">
            NEX Platforms Platforms is dedicated to innovation in technology,
            constantly pushing the boundaries of what is possible in the gaming
            industry. Our focus on the latest advancements in technology allows
            us to create truly immersive experiences for our users.
          </div>
        </div>
      </div>
    </div>
  );
}
