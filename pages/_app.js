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

import { Barlow_Condensed, IBM_Plex_Sans } from "next/font/google";

const bodyFont = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-body",
});

const displayFont = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-display",
});

export default function App({ Component, pageProps }) {
  return (
    <div className={`${bodyFont.variable} ${displayFont.variable}`}>
      <style jsx global>{`
        html {
          font-family: var(--font-body), sans-serif;
        }
      `}</style>
      <Component {...pageProps} />
    </div>
  );
}
