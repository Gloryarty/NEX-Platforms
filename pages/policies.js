import Head from "next/head";
import React from "react";
import Footer from "../components/Footer/Footer";
import Nav from "../components/Nav";
import EthicsPolicy from "../components/Policies/EthicsPolicy";
import Hero from "../components/Policies/Hero";
import Tab from "../components/Policies/Tab";

export default function Policies() {
  return (
    <>
      <Head>
        <title>NEX Platforms - Policies</title>
        <meta name="description" content="NEX Platforms" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
      <main className="termsofservice">
        <div className="mainWrapper termsofservice">
          <Hero title="Ethics Policy" />
          <Tab curr="Ethics Policy" />
          <EthicsPolicy />
          <Footer />
        </div>
      </main>
    </>
  );
}
