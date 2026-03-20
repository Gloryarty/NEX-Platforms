import Head from "next/head";
import React from "react";
import Footer from "../components/Footer/Footer";
import Nav from "../components/Nav";
import Help from "../components/TermsOfService/Help";
import Hero from "../components/TermsOfService/Hero";
import Tab from "../components/TermsOfService/Tab";

export default function TermsOfService() {
  return (
    <>
      <Head>
        <title>NEX Platforms - Help</title>
        <meta name="description" content="NEX Platforms" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
      <main className="termsofservice">
        <div className="mainWrapper termsofservice">
          <Hero title="Help" />
          <Tab curr="Help" />
          <Help />
          <Footer />
        </div>
      </main>
    </>
  );
}
