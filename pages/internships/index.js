import Head from "next/head";
import React from "react";
import Footer from "../../components/Footer/Footer";
import Nav from "../../components/Nav";
import Hero from "../../components/Internships/Hero";

export default function Policies() {
  return (
    <>
      <Head>
        <title>LegionGames.io - Internships</title>
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
                Do you want to join our team as an intern? Email us and send us your resume, and we&apos;ll get back to you in 2-3 business days.
                <br></br>
                <br></br>
                Email us at legionplatforms@gmail.com
              </div>
            </div>
          </section>
          <Footer />
        </div>
      </main>
    </>
  );
}
