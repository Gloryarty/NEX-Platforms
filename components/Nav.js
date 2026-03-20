import Search from "./Search";
import Logo from "../res/logo.png";
import Image from "next/image";
import NavItem from "./Nav/NavItem";
// import NavDetails from "./Nav/NavDetails";
import ProductsDetails from "./Nav/ProductsDetails";
import CompanyDetails from "./Nav/CompanyDetails";
import ResourcesDetails from "./Nav/ResourcesDetails";
import { useRouter } from "next/router";
import Mode from "./Nav/Mode";
import NavExpand from "./Nav/NavExpand";
import { useState } from "react";
import SearchMode from "./Nav/SearchMode";
import MobileNavItem from "./Nav/MobileNavItem";

export default function Nav() {
  const router = useRouter();
  const [expand, setExpand] = useState(false);
  const [mobileSearch, setMobileSearch] = useState(false);

  return (
    <>
      <div className="nav">
        <div className="mainWrapper">
          <div className="logo" onClick={() => router.push("/")}>
            <Image alt="Logo" src={Logo} />
            NEX Platforms
          </div>
          <div className="links">
            <NavItem title="Products" ExpandedElem={<ProductsDetails />} />
            <NavItem title="Company" ExpandedElem={<CompanyDetails />} />
            <NavItem title="Resources" ExpandedElem={<ResourcesDetails />} />
            {/* <NavItem title="Careers" ExpandedElem={<NavDetails />} /> */}
          </div>
          <div className="right-bar">
            <Search />
            <Mode />
            <div
              onClick={() => router.push("/contact")}
              className="nav-btn nav-contact"
            >
              <i className="ri-mail-line"></i>
              Contact
            </div>
          </div>
        </div>
      </div>
      <div className="mobile-nav">
        <div className="mainWrapper">
          <div className="logo" onClick={() => router.push("/")}>
            <Image alt="Logo" src={Logo} />
            NEX Platforms
          </div>
          {/* <div className="links">
            <NavItem title="Products" ExpandedElem={<ProductsDetails />} />
            <NavItem title="Company" ExpandedElem={<CompanyDetails />} />
            <NavItem title="Resources" ExpandedElem={<ResourcesDetails />} />
          </div> */}
          <div className="right-bar">
            {!expand && <Search className="mobile-semi-search" />}
            {!expand && <SearchMode setSearchMode={setMobileSearch} />}
            <Mode />
            {!mobileSearch && (
              <NavExpand expand={expand} setExpand={setExpand} />
            )}
          </div>
          {mobileSearch && (
            <Search
              className="mobile-search"
              onAction={() => setMobileSearch(false)}
              onInitialMode={true}
            />
          )}

          {expand && !mobileSearch && (
            <div className="mobile-expanded-nav">
              <div className="sub-wrapper">
                <MobileNavItem
                  title="Products"
                  ExpandedElem={<ProductsDetails />}
                />
                <MobileNavItem
                  title="Company"
                  ExpandedElem={<CompanyDetails />}
                />
                <MobileNavItem
                  title="Resources"
                  ExpandedElem={<ResourcesDetails />}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
