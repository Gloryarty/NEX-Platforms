import Head from "next/head";
import React from "react";
import Hero from "../../components/Careers/Hero";
import Jobs from "../../components/Careers/Jobs";
import OurCulture from "../../components/Careers/OurCulture";
import Footer from "../../components/Footer/Footer";
import Company from "../../components/Home/Company";
import Nav from "../../components/Nav";

export default function index() {
  return (
    <>
      <Head>
        <title>NEX Platforms - Careers</title>
        <meta name="description" content="NEX Platforms" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
      <main className="termsofservice">
        <div className="mainWrapper termsofservice">
          <Hero />
          <OurCulture />
          <Jobs />
          <Company careerMode={true} />
          <Footer />
        </div>
      </main>
    </>
  );
}
