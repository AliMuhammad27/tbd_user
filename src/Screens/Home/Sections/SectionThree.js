import React from "react";
import { Link } from "react-router-dom";

function SectionThree() {
  return (
    <section>
      <div className="container-fluid">
        <div className="row welcome">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8 col-sm-12 col-xs-12 text-center">
                <img
                  src={`${process.env.PUBLIC_URL}/img/open-tag.png`}
                  className="img-fluid"
                  daata-aoos="flip-left"
                />
                <h1 className="ff-thunder fc-purple" daata-aoos="fade-down">
                  Welcome to the new lifestyle
                </h1>
                <p className="mt-20 fc-gray mb-20" daata-aoos="fade-up">
                  We aspire to a more thoughtful way of life. Inspired by a time
                  when mass production and indiscriminate consumerism were
                  unknown, our aim is to stock a range of enduring everyday
                  items that are not mass produced.
                </p>
                <Link
                  className="btn-orange mt-20 text-left"
                  daata-aoos="zoom-in"
                  to="/about"
                >
                  FIND OUT MORE
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SectionThree;
