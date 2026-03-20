import { useRouter } from "next/router";
import React from "react";

const data = [
  {
    title: "Help/Support",
    items: [
      {
        title: "Help Center",
      },
      {
        title: "Support Email",
        link: "/contact",
      },
    ],
  },
  {
    title: "Legal",
    items: [
      {
        title: "Careers",
        link: "/careers",
      },
      {
        title: "Internships",
        link: "/careers",
      },
    ],
  },
  {
    title: "Policies",
    items: [
      {
        title: "Ethics",
        link: "/policies",
      },
      {
        title: "Innovation",
        link: "/innovation",
      },
      {
        title: "Accessibility",
        link: "/accessibility",
      },
    ],
  },

  {
    title: "Community",
    items: [
      {
        title: "Social Media",
      },
      {
        title: "Playtesting",
        link: "/playtesting",
      },
      {
        title: "News/Press",
        link: "/news",
      },
    ],
  },
];

export default function ResourcesDetails() {
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
