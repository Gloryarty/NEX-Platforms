/* eslint-disable @next/next/no-img-element */
import { useRouter } from "next/router";
import React from "react";

export default function CompanyNews({ mainpage = false, data = [] }) {
  const router = useRouter();

  return (
    <section className="aSection companyPageNews">
      {!mainpage && <div className="title">Latest Company News</div>}
      <div className="newsCont">
        {data.map(
          (item, index) =>
            item.pageType === "LEGiON Press Release" && (
              <div key={index} className="news">
                <div className="imageCont">
                  <img src={item.thumbnail} className="bg" alt="news" />
                </div>
                <div>
                  <div className="info">
                    {item.date} | {item.category}
                  </div>
                  <div
                    onClick={() => router.push(`/news/${item.shortTitle}`)}
                    className="news-title"
                  >
                    {item.shortTitle !== "blank" ? item.shortTitle : item.title}
                  </div>
                </div>
              </div>
            )
        )}
      </div>
      {!mainpage && (
        <button onClick={() => router.push("/news")}>View All News</button>
      )}
    </section>
  );
}
