import Head from "next/head";
import React from "react";
import Footer from "../../components/Footer/Footer";
import Nav from "../../components/Nav";
import Hero from "../../components/PlayTesting/Hero";

export default function Policies() {
  return (
    <>
      <Head>
        <title>LegionGames.io - Playtesting</title>
        <meta name="description" content="LegionGames.io" />
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
                Interested in potentially playtesting future LEGiON Platform
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
