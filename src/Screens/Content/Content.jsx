import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { getContent } from "../../Apis/Content";
import ReactHtmlParser from "react-html-parser";

export default function Content({ location }) {
  const [content, setContent] = useState("");

  const { isLoading, data } = useQuery(
    ["featured_products"],
    () => getContent(),
    {
      staleTime: Infinity,
    }
  );

  useEffect(() => {
    let keyword;
    if (location.pathname === "/content/about") keyword = "About Us";
    else if (location.pathname === "/content/terms")
      keyword = "Terms & Condition Customer";
    else if (location.pathname === "/content/privacy")
      keyword = "Privacy Policy Customer";
    else if (location.pathname === "/content/cookie-policy")
      keyword = "Cookie Policy";
    else if (location.pathname === "/content/faq-user")
      keyword = "FAQ Customer";
    else if (location.pathname === "/content/returns") keyword = "Returns";
    else if (location.pathname === "/content/seller-terms")
      keyword = "Terms & Condition Seller";
    else if (location.pathname === "/content/why-join")
      keyword = "Why Joining Olden Times";
    else if (location.pathname === "/content/faq-vendor")
      keyword = "FAQ Seller";

    const content = data?.data?.contents?.find(
      (content) => content.heading === keyword
    );
    setContent(content);
  }, [location?.pathname, data?.data?.contents]);

  // console.log(data?.data?.contents);

  return (
    <>
      <section className="bg-about">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h1 className="fc-white ff-thunder">{content?.heading}</h1>
            </div>
          </div>
        </div>
      </section>
      <section className="p-55-0">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">{ReactHtmlParser(content?.text)}</div>
          </div>
        </div>
      </section>
    </>
  );
}
