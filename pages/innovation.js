import Head from "next/head";
import React from "react";
import Footer from "../components/Footer/Footer";
import Nav from "../components/Nav";
import Innovation from "../components/Policies/Innovation";
import Hero from "../components/Policies/Hero";
import Tab from "../components/Policies/Tab";

export default function Policies() {
  return (
    <>
      <Head>
        <title>LegionGames.io - Innovation</title>
        <meta name="description" content="LegionGames.io" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
      <main className="termsofservice">
        <div className="mainWrapper termsofservice">
          <Hero title="Innovation" />
          <Tab curr="Innovation" />
          <Innovation />
          <Footer />
        </div>
      </main>
    </>
  );
}
