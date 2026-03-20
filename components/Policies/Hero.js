import React from "react";

export default function Hero({ title }) {
  return (
    <section className="aSection termsHero policiesHero">
      <div className="sub-title">Policies at LEGiON</div>
      <div className="title">{title}</div>
    </section>
  );
}
