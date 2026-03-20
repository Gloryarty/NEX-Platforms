import { useRouter } from "next/router";
import React from "react";

const data = [
  {
    title: "Information",
    items: [
      {
        title: "About LEGiON",
        link: "/company",
      },
    ],
  },
  {
    title: "Work With Us",
    items: [
      {
        title: "Careers",
        link: "/careers",
      },
      {
        title: "Internships",
        link: "/internships",
      },
    ],
  },
];

export default function CompanyDetails() {
  const router = useRouter();
  return (
    <div className="nav-item-expanded">
      <div className="wrapper products onlyTextItems">
        {data.map((item, index) => (
          <section key={index} className="products-section">
            <div className="products-title">{item.title}</div>
            <div className="item-list">
              {item.items.map((currItem, index2) => (
                <div key={index2} className="item">
                  <div className="infoCont">
                    <div
                      onClick={() => {
                        if (currItem.link) {
                          router.push(currItem.link);
                        }
                      }}
                      className="infoTitle"
                    >
                      {currItem.title}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
