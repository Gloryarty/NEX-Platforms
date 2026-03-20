import { useRouter } from "next/router";
import React from "react";

const data = [
  {
    title: "Terms Of Service",
    link: "/terms",
  },
  {
    title: "Privacy Policy",
    link: "/privacy",
  },
  {
    title: "Legal",
    link: "/legal",
  },
  {
    title: "Security",
    link: "/security",
  },
  {
    title: "Help",
    link: "/help",
  },
];

export default function Tab({ curr }) {
  const router = useRouter();
  return (
    <div className="tab">
      {data.map((item, index) => (
        <div
          key={index}
          onClick={() => router.push(item.link)}
          className={`${curr === item.title && "active"}`}
        >
          {item.title}
        </div>
      ))}
    </div>
  );
}
