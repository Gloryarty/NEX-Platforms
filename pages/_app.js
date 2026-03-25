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
import { LanguageProvider } from "../components/LanguageContext";

export default function App({ Component, pageProps }) {
  return (
    <LanguageProvider>
      <Component {...pageProps} />
    </LanguageProvider>
  );
}
