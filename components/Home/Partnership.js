import Image from "next/image";
import React from "react";
import earth from "../../res/earth.png";
import { useRouter } from "next/router";

export default function Partnership() {
  const router = useRouter();

  return (
    <section className="aSection partnership">
      <div className="title">
        <span>Partner</span> With Us
      </div>
      <div className="info">Take your company/project to new heights.</div>
      <button onClick={() => router.push("/partnership")}>Apply For Partnership</button>

      <Image src={earth} alt="earth" />
    </section>
  );
}
