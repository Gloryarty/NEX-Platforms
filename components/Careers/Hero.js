import { useRouter } from "next/navigation";
import React from "react";

export default function Hero() {
  const router = useRouter()

  return (
    <section className="aSection careersHero ">
      <div className="sub-title">CAREERS & INTERNSHIPS AT LEGiON PLATFORMS</div>
      <div className="title">
        Join us in building the
        <br></br>
        future of web and mobile
      </div>
      <div className="buttons">
        <button onClick={() => {
          const link = document.createElement("a")
          link.setAttribute("href", "#jobsection")
          link.click()
        }}>View Open Positions</button>
        <button onClick={() => router.push("/internships")}>LEGiON Internships</button>
      </div>
    </section>
  );
}
