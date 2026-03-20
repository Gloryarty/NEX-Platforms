import React, { useState } from "react";

export default function FaqItem({ data }) {
  const [expand, setExpand] = useState(false);
  return (
    <div className="faq-item">
      <div
        className={`faq-item-cont ${expand && "noBorder"}`}
        onClick={() => setExpand(!expand)}
      >
        <div className="faq-title">{data.question}</div>
        {expand ? (
          <i className="ri-arrow-up-s-line"></i>
        ) : (
          <i className="ri-arrow-down-s-line"></i>
        )}
      </div>
      {expand && (
        <>
          <div className="faq-info">{data.answer}</div>
        </>
      )}
    </div>
  );
}
