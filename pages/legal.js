import Head from "next/head";
import React from "react";
import Footer from "../components/Footer/Footer";
import Nav from "../components/Nav";
import Hero from "../components/TermsOfService/Hero";
import Legal from "../components/TermsOfService/Legal";
import Tab from "../components/TermsOfService/Tab";

export default function TermsOfService() {
  return (
    <>
      <Head>
        <title>LegionGames.io - Legal</title>
        <meta name="description" content="LegionGames.io" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
      <main className="termsofservice">
        <div className="mainWrapper termsofservice">
          <Hero title="Legal" />
          <Tab curr="Legal" />
          <Legal />
          <Footer />
        </div>
      </main>
    </>
  );
}
