import Head from "next/head";
import React, { useState } from "react";
import Footer from "../components/Footer/Footer";
import Nav from "../components/Nav";
import Hero from "../components/TermsOfService/Hero";
import PrivacyPolicy from "../components/TermsOfService/PrivacyPolicy";
import Tab from "../components/TermsOfService/Tab";

export default function TermsOfService() {
  return (
    <>
      <Head>
        <title>NEX Platforms - Privacy Policy</title>
        <meta name="description" content="NEX Platforms" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
      <main className="termsofservice">
        <div className="mainWrapper termsofservice">
          <Hero title="Privacy Policy" />
          <Tab curr="Privacy Policy" />
          <PrivacyPolicy />
          <Footer />
        </div>
      </main>
    </>
  );
}
