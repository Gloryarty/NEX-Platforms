import { useRouter } from "next/router";
import React from "react";

export default function JoinOurTeam() {
  const router = useRouter();
  return (
    <section className="aSection workWithUs">
      <div className="sub-title">NEX Platforms Careers & Internships</div>
      <div className="title">Join Our Team</div>
      <button onClick={() => router.push("/careers")}>
        View Careers & Internships
      </button>
      <div
        className="bg"
        style={{
          backgroundImage: `url("/res/cover_3_ppl.png")`,
        }}
      ></div>
    </section>
  );
}
