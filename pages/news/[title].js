import Head from "next/head";
import React from "react";
import Footer from "../../components/Footer/Footer";
import Nav from "../../components/Nav";
import Hero from "../../components/News/Hero";
import newsList from "../../res/news.json";

export async function getStaticPaths() {
  const myPaths = newsList.map((item, index) => ({
    params: { title: item.shortTitle },
  }));
  return {
    paths: [...myPaths],
    fallback: false, // can also be true or 'blocking'
  };
}

// `getStaticPaths` requires using `getStaticProps`
export async function getStaticProps(context) {
  const news = newsList.find(
    (item) => item.shortTitle === context.params.title
  );
  return {
    // Passed to the page component as props
    props: { news: news },
  };
}

export default function News({ news }) {
  return (
    <>
      <Head>
        <title>{news.shortTitle}</title>
        <meta name="description" content="LegionGames.io" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href={news.thumbnail} />
      </Head>
      <Nav />
      <main className="termsofservice">
        <div className="mainWrapper termsofservice">
          <Hero data={news} />
          <div className="newsTextSet">
            <div className="info">{news.article}</div>
          </div>
          <Footer />
        </div>
      </main>
    </>
  );
}
