import React from "react";
import FaqItem from "./subComponents/FaqItem";
import data from "../../res/faq.json";

export default function FAQ() {
  return (
    <section className="aSection faq">
      <div className="title">FAQ</div>
      <div className="faq-list">
        {data.map((item, index) => (
          <FaqItem key={index} data={item} />
        ))}
      </div>
    </section>
  );
}
