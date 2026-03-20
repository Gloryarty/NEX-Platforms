import Head from "next/head";
import React from "react";
import Footer from "../components/Footer/Footer";
import Nav from "../components/Nav";
import Accessibility from "../components/Policies/Accessibility";
import Hero from "../components/Policies/Hero";
import Tab from "../components/Policies/Tab";

export default function Policies() {
  return (
    <>
      <Head>
        <title>LegionGames.io - Accessibility</title>
        <meta name="description" content="LegionGames.io" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
      <main className="termsofservice">
        <div className="mainWrapper termsofservice">
          <Hero title="Accessibility" />
          <Tab curr="Accessibility" />
          <Accessibility />
          <Footer />
        </div>
      </main>
    </>
  );
}
