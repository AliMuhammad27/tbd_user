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
            <div
              className="container-fluid"
              style={{ paddingRight: "250px", marginTop: "50px" }}
            >
              <h1 style={{ color: "black" }}>About Us</h1>
              <p style={{ fontSize: 20 }}>
                Saint Shop is an online retail store offering a wide range of
                trendy outfits, fashion accessories, beauty products, consumer
                electronics, and the latest fitness tools and accessories
                collection. With passion, dedication, and honesty driving our
                desire to provide our customers with an exceptional shopping
                experience, we have managed to win the trust of our expanding
                customer base. Here, we courage every individual to sell their
                products on our platform! We have all you need, from the latest
                gadgets and fitness tools to fashion, home improvement,
                outdoors, and lifestyle products. We offer top-notch products at
                affordable prices and ensure quick delivery, 100% satisfaction,
                secure payment gateways, and a streamlined checkout process for
                our valued clients. Moreover, we offer a worldwide accessible
                shipping facility to ensure timely shipment. It's time to have
                an online shopping experience like never before.{" "}
              </p>
              <h2 style={{ color: "blue" }}>
                Get the Best Shopping Experience NOW!
              </h2>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
