import Head from "next/head";
import React from "react";
import CompanyNews from "../../components/Company/CompanyNews";
import Footer from "../../components/Footer/Footer";
import Nav from "../../components/Nav";
import HeroMain from "../../components/News/HeroMain";
import news from "../../res/news.json";

export default function Policies() {
  return (
    <>
      <Head>
        <title>LegionGames.io - News</title>
        <meta name="description" content="LegionGames.io" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
      <main className="termsofservice">
        <div className="mainWrapper termsofservice">
          <HeroMain title="Company News" />
          <CompanyNews mainpage={true} data={news} />
          <Footer />
        </div>
      </main>
    </>
  );
}
