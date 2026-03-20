import Head from "next/head";
import React, { useState } from "react";
import Footer from "../components/Footer/Footer";
import Nav from "../components/Nav";
import Hero from "../components/TermsOfService/Hero";
import Security from "../components/TermsOfService/Security";
import Tab from "../components/TermsOfService/Tab";

export default function TermsOfService() {
  return (
    <>
      <Head>
        <title>NEX Platforms - Security</title>
        <meta name="description" content="NEX Platforms" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
      <main className="termsofservice">
        <div className="mainWrapper termsofservice">
          <Hero title="Security" />
          <Tab curr="Security" />
          <Security />
          <Footer />
        </div>
      </main>
    </>
  );
}
