import Head from "next/head";
import React from "react";
import Footer from "../../components/Footer/Footer";
import Nav from "../../components/Nav";
import Hero from "../../components/Games/Hero";
import GamesList from "../../components/Games/GamesList";

export default function Policies() {
  return (
    <>
      <Head>
        <title>LegionGames.io - Games</title>
        <meta name="description" content="LegionGames.io" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
      <main className="termsofservice">
        <div className="mainWrapper termsofservice">
          <Hero />
          <GamesList />
          <Footer />
        </div>
      </main>
    </>
  );
}
