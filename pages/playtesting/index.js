import Head from "next/head";
import React from "react";
import Footer from "../../components/Footer/Footer";
import Nav from "../../components/Nav";
import Hero from "../../components/PlayTesting/Hero";

export default function Policies() {
  return (
    <>
      <Head>
        <title>NEX Platforms - Playtesting</title>
        <meta name="description" content="NEX Platforms" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
      <main className="termsofservice">
        <div className="mainWrapper termsofservice">
          <Hero />
          <section className="aSection ourCompany">
            <div className="mainCont">
              <div className="message">
                Interested in potentially playtesting future NEX Platforms Platform
                Products?
                <br></br>
                <br></br>
                Email us at info@legiongames.io
              </div>
            </div>
          </section>
          <Footer />
        </div>
      </main>
    </>
  );
}
