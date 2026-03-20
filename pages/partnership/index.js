import Head from "next/head";
import React from "react";
import Footer from "../../components/Footer/Footer";
import Nav from "../../components/Nav";
import Hero from "../../components/Partnership/Hero";

export default function Policies() {
  return (
    <>
      <Head>
        <title>NEX Platforms - Partnership</title>
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
                Are you interested in taking your company to the next level by
                partnering with NEX Platforms?
                <br></br>
                <br></br>
                Email us at nexplatforms@gmail.com
              </div>
            </div>
          </section>
          <Footer />
        </div>
      </main>
    </>
  );
}
