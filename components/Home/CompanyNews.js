/* eslint-disable @next/next/no-img-element */
import news from "../../res/news.json";
import { useMemo } from "react";
import { useRouter } from "next/router";

export default function CompanyNews() {
  const router = useRouter();
  const mainNews = useMemo(() => {
    return news.filter((item) => item.type === "News").slice(0, 4);
  }, []);

  return (
    <section className="aSection companyNews">
      <div className="title">Company News</div>
      <div className="newsCont">
        <div className="bigNews">
          <div>
            <div
              onClick={() => router.push(`/news/${mainNews[0].shortTitle}`)}
              className="news-title"
            >
              {mainNews[0].shortTitle}
            </div>
            <div className="news-type">{mainNews[0].category}</div>
          </div>
          <img src={mainNews[0].thumbnail} className="bg" alt="big news"></img>
        </div>
        {mainNews.map(
          (item, index) =>
            index !== 0 && (
              <div key={index} className="news">
                <div>
                  <div
                    onClick={() => router.push(`/news/${item.shortTitle}`)}
                    className="news-title"
                  >
                    {item.shortTitle}
                  </div>
                  <div className="news-type">{item.category}</div>
                </div>
                <img src={item.thumbnail} className="bg" alt="big news"></img>
              </div>
            )
        )}

        <button onClick={() => router.push("/news")}>View All News</button>
      </div>
    </section>
  );
}
