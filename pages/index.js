import Head from "next/head";
import Image from "next/image";
import bg from "../res/BG.png";
import logo from "../res/Logo.png";
import image1 from "../res/g1.png";
import image2 from "../res/g2_new.png";
import image3 from "../res/g3.png";
import image4 from "../res/g4.png";
import image5 from "../res/g5.png";
import image6 from "../res/g6.png";
import Carousel from "../components/Home/Carousel";
import CompanyNews from "../components/Home/CompanyNews";
import Partnership from "../components/Home/Partnership";
import Contact from "../components/Home/Contact";
import Partner from "../components/Home/Partner";
import FAQ from "../components/Home/FAQ";
import Users from "../components/Home/Users";
import Footer from "../components/Footer/Footer";
import LegionExperiences from "../components/Home/LegionExperiences";
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
    elem.href = "#legionExperiences";
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
            <Image className="heroBgLogo" src={logo} alt="logo" />
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
              <Image className="gridItems" src={image1} alt="logo" />
              <Image className="gridItems" src={image2} alt="logo" />
              <Image className="gridItems" src={image3} alt="logo" />
              <Image className="gridItems" src={image4} alt="logo" />
              <Image className="gridItems" src={image5} alt="logo" />
              <Image className="gridItems" src={image6} alt="logo" />
            </div>
          </section>
          <ScopedItems />
          <section className="aSection">
            <Carousel />
          </section>
          <section className="aSection">
            <Carousel2 />
          </section>
          <LegionExperiences />
          <CompanyNews />
          <Partnership />
          <Partner />
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
