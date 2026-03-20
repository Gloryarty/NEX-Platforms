/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useMemo, useState } from "react";
import {
  EmailShareButton,
  FacebookShareButton,
  RedditShareButton,
  TelegramShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  EmailIcon,
  FacebookIcon,
  RedditIcon,
  TelegramIcon,
  WhatsappIcon,
  XIcon,
  OKIcon
} from "react-share";
import {usePathname} from "next/navigation"

export default function Hero({ data }) {
  const pathName = usePathname()
  const url = useMemo(() => `https://gloryarty.github.io/NEX-Platforms${pathName}`, [pathName])
  const subject = useMemo(() => `${data?.pageType}: ${data?.shortTitle !== "blank" ? data?.shortTitle : data?.title}`, [data])

  const [isCopied, setIsCopied] = useState(false);

  useEffect(() => {
    if (isCopied) {
      setTimeout(() => {
        setIsCopied(false);
      }, 2000);
    }
  }, [isCopied]);

  return (
    <section className="aSection newsHero policiesHero genericHero2">
      <div className="mainCont">
        <div className="sub-title">{data.pageType}</div>
        <div className="title">
          {data.shortTitle !== "blank" ? data.shortTitle : data.title}
        </div>
        <div className="sub-title">{data.date}</div>
        <div className="sharePanel">
        <div className="mode-list">
            <EmailShareButton
              url={url}
              subject={subject}
              body={data.article}
            >
              <EmailIcon round={true} />
            </EmailShareButton>
            <FacebookShareButton url={url}>
              <FacebookIcon round={true} />
            </FacebookShareButton>
            <RedditShareButton url={url} title={subject}>
              <RedditIcon round={true} />
            </RedditShareButton>
            <TelegramShareButton url={url} title={subject}>
              <TelegramIcon round={true} />
            </TelegramShareButton>
            <TwitterShareButton url={url} title={subject}>
              <XIcon round={true} />
            </TwitterShareButton>
            <WhatsappShareButton url={url} title={subject}>
              <WhatsappIcon round={true} />
            </WhatsappShareButton>
            <button
              className="copyToClipboard"
              onClick={() => {
                navigator.clipboard.writeText(url);
                setIsCopied(true);
              }}
            >
              {isCopied ? <i class="ri-check-double-line" style={{opacity: .7}}></i> : <i class="ri-link"></i>}
              
            </button>
          </div>
        </div>
        <div className="coverCont">
          <img className="cover" src={data.coverImage} alt="Cover"></img>
        </div>
      </div>
    </section>
  );
}
