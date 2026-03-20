import "../styles/index.scss";
import "../styles/nav.scss";
import "../styles/mobileNav.scss";
import "../styles/search.scss";
import "../styles/footer.scss";
import "../styles/home.scss";
import "../styles/carousel.scss";
import "../styles/carousel2.scss";
import "../styles/ecoSystem.scss";
import "../styles/companyNews.scss";
import "../styles/partnership.scss";
import "../styles/contact.scss";
import "../styles/partners.scss";
import "../styles/faq.scss";
import "../styles/users.scss";
import "../styles/legionExperiences.scss";
import "../styles/scopedItems.scss";
import "../styles/workWithUs.scss";
import "../styles/company.scss";
import "../styles/Company/index.scss";
import "../styles/TermsOfService/index.scss";
import "../styles/TermsOfService/hero.scss";
import "../styles/News/index.scss";
import "../styles/TermsOfService/tab.scss";
import "../styles/GenericPageHero.scss";
import "../styles/Policies/index.scss";
import "../styles/Games/index.scss";
import "../styles/Careers/index.scss";
import "../components/Company/CompanyNews.scss";
import "remixicon/fonts/remixicon.css";

import { Poppins } from "next/font/google";
const poppins = Poppins({
  subsets: ['latin'],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function App({ Component, pageProps }) {
  return (
    <>
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");
        html {
          font-family: "Poppins", sans-serif;
        }
      `}</style>
      <Component {...pageProps} />
    </>
  );
}
