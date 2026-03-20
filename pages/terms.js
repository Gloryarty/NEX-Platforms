import Head from "next/head";
import React, { useState } from "react";
import Footer from "../components/Footer/Footer";
import Nav from "../components/Nav";
import Hero from "../components/TermsOfService/Hero";
import Tab from "../components/TermsOfService/Tab";
import TermsOfServiceSection from "../components/TermsOfService/TermsOfServiceSection";

export default function TermsOfService() {
  return (
    <>
      <Head>
        <title>LegionGames.io - Terms Of Service</title>
        <meta name="description" content="LegionGames.io" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
      <main className="termsofservice">
        <div className="mainWrapper termsofservice">
          <Hero title="Terms Of Service" />
          <Tab curr="Terms Of Service" />
          <TermsOfServiceSection />
          <Footer />
        </div>
      </main>
    </>
  );
}
