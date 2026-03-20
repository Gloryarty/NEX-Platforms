import React from "react";
import poki from "../../res/partners/poki.png";
import poki_dark from "../../res/partners/poki_dark.png";
import frvr from "../../res/partners/frvr.png";
import frvr_dark from "../../res/partners/frvr_dark.png";
import krunker from "../../res/partners/krunker2.png";
import yendis from "../../res/partners/yendis.png";
import Image from "next/image";

export default function Partner() {
  return (
    <section className="aSection partners">
      <div className="title">Our Partners</div>
      <div className="partnerList">
        <div className="partner-item">
          <Image src={poki} alt="Poki" className="light" />
          <Image src={poki_dark} alt="Poki_dark" className="dark" />
        </div>

        <div className="partner-item">
          <Image src={frvr} alt="Frvr" className="light" />
          <Image src={frvr_dark} alt="Frvr_dark" className="dark" />
        </div>
        <div className="partner-item">
          <Image src={krunker} alt="Krunker" />
        </div>
        <div className="partner-item">
          <Image src={yendis} alt="Yendis" />
        </div>
      </div>
    </section>
  );
}
