import Head from "next/head";
import Image from "next/image";
import g1 from "../res/g1.png";
import g2 from "../res/g2.png";
import g5 from "../res/g5.png";
import g6 from "../res/g6.png";
import OurCulture from "../components/Careers/OurCulture";
import Carousel from "../components/Home/Carousel";
import CompanyNews from "../components/Company/CompanyNews";
import Users from "../components/Home/Users";
import Footer from "../components/Footer/Footer";
import Nav from "../components/Nav";
import WorkWithUs from "../components/Home/JoinOurTeam";
import { useRouter } from "next/router";
import CompanyInfo from "../components/Company/CompanyInfo";
import news from "../res/news.json";
import { useMemo } from "react";

const gotoProducts = () => {
  const a = document.createElement("a");
  a.href = "#users";
  a.click();
};

export default function Home() {
  const router = useRouter();
  const mainNews = useMemo(() => {
    return news.filter((item) => item.type === "News").slice(0, 3);
  }, []);
  return (
    <>
      <Head>
        <title>LegionGames.io</title>
        <meta name="description" content="Legion Platforms" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
      <main>
        <div className="companyHeroBg">
          <img
            src="/res/company_page_hero.png"
            alt="logo"
          />
        </div>

        <div className="mainWrapper">
          <section className="companyHero">
            <div className="lCont">
              <div className="sub-title">About LegionGames.io</div>
              <div className="title">
                We are building<br></br>new worlds.
              </div>
              <button onClick={() => gotoProducts()}>
                Explore Our Company
              </button>
            </div>
            <div className="rCont">
              <div>
                <Image src={g1} alt="photo 1" />
              </div>
              <div>
                <Image src={g2} alt="photo 2" />
              </div>
              <div>
                <Image src={g5} alt="photo 5" />
              </div>
              <div>
                <Image src={g6} alt="photo 6" />
              </div>
            </div>
          </section>

          <OurCulture
            id="users"
            title="Our Products Are Used By"
            data={[
              {
                logo: "ri-group-2-line",
                head: "Consumers",
                info: "We create, publish and distribute products to millions",
              },
              {
                logo: "ri-leaf-fill",
                head: "Publishers",
                info: "We provide publishers with world class products",
              },
              {
                logo: "ri-code-s-slash-line",
                head: "Developers",
                info: "We enable developers to reach millions with our services",
              },
              {
                logo: "ri-line-chart-line",
                head: "Advertisers",
                info: "Reach the next generation of consumers using our solutions",
              },
            ]}
          />

          <section className="aSection">
            <Carousel title="Popular Products" />
            <CompanyInfo />
          </section>
          <WorkWithUs />
          <CompanyNews data={mainNews} />
          <Users />
          <Footer />
        </div>
      </main>
    </>
  );
}
