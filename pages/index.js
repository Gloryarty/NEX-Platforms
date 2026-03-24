import Head from "next/head";
import Image from "next/image";
import bg from "../res/BG.png";
import logo from "../res/Logo.png";
import gameLogo from "../res/Game_Logo.png";
import Carousel from "../components/Home/Carousel";
import CompanyNews from "../components/Home/CompanyNews";
import Partnership from "../components/Home/Partnership";
import Contact from "../components/Home/Contact";
import FAQ from "../components/Home/FAQ";
import Users from "../components/Home/Users";
import Footer from "../components/Footer/Footer";
import ScopedItems from "../components/Home/ScopedItems";
import Nav from "../components/Nav";
import WorkWithUs from "../components/Home/JoinOurTeam";
import Company from "../components/Home/Company";
import { useRouter } from "next/router";
import Carousel2 from "../components/Home/Carousel2";
import baseConfig from '../res/baseConfig.json'

export default function Home() {
  const router = useRouter();
  const gotoExplore = () => {
    const elem = document.createElement("a");
    elem.href = "#";
    elem.click();
  };
  return (
    <>
      <Head>
        <title>NEX Platforms</title>
        <meta name="description" content="NEX Platforms" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
      <main>
        <Image className="heroBg" src={bg} alt="logo" />
        <div className="mainWrapper">
          <section className="hero">
            <div className="lCont">
              <div className="title">Experiences that matter.</div>
              <div className="subTitle">
                {baseConfig.users} {baseConfig.user_count_unit} people know our games worldwide.
              </div>
              <div className="heroBtnSet">
                <button onClick={() => gotoExplore()} className="heroBtn">
                  Explore
                </button>
                <button
                  onClick={() => router.push("/contact")}
                  className="heroBtn"
                >
                  Contact
                </button>
              </div>
            </div>
            <div className="rCont">
              <Image className="gridItems" src={gameLogo} alt="RushRetake" />
            </div>
          </section>
          <ScopedItems />
          <section className="aSection">
            <Carousel />
          </section>
          <section className="aSection">
            <Carousel2 />
          </section>
          <CompanyNews />
          <Partnership />
          <Contact />
          <FAQ />
          <WorkWithUs />
          <Company />
          <Users />
          <Footer />
        </div>
      </main>
    </>
  );
}
