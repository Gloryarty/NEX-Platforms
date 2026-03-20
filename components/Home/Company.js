import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import g1 from "../../res/g1.png";
import g2 from "../../res/g2.png";
import g5 from "../../res/g5.png";
import g6 from "../../res/g6.png";

export default function Company({ careerMode = false }) {
  const router = useRouter();
  return (
    <section className="aSection ourCompany">
      <div className="mainCont">
        <div className="lCont">
          {!careerMode && (
            <div className="sub-title">About NEX Platforms</div>
          )}
          <div className="title">
            We are building<br></br>new worlds.
          </div>
          {!careerMode && (
            <button onClick={() => router.push("/company")}>Our Company</button>
          )}
        </div>
        <div className="rCont">
          <div>
            <Image src={g1} alt="photo 1" />
          </div>
          <div>
            <Image src={g2} alt="photo 2" />
          </div>
          <div>
            <Image src={g5} alt="photo 5" />
          </div>
          <div>
            <Image src={g6} alt="photo 6" />
          </div>
        </div>
      </div>
    </section>
  );
}
