import React from "react";

export default function HeroMain({ title }) {
  return (
    <section className="aSection termsHero policiesHero genericHero2">
      <div className="sub-title">Press Releases</div>
      <div className="title">{title}</div>
    </section>
  );
}
