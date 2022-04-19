import React from "react";

function SectionTen() {
  return (
    <section>
      <div className="container-fluid">
        <div className="row p-55-0">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 text-center mt-100">
                <img
                  src={`${process.env.PUBLIC_URL}/img/icons/insta.png`}
                  className="img-fluid"
                  daata-aoos="fade-down"
                  daata-aoos-duration={800}
                />
                <br />
                <img
                  src={`${process.env.PUBLIC_URL}/img/logo.png`}
                  className="img-fluid"
                  daata-aoos="fade-up"
                  daata-aoos-duration={800}
                />
                <p
                  className="mt-10"
                  daata-aoos="fade-up"
                  daata-aoos-duration={800}
                >
                  With a passion for high-quality products and services
                </p>
                <div
                  className="btns mt-20"
                  daata-aoos="fade-down"
                  daata-aoos-duration={800}
                >
                  <a
                    href="https://www.instagram.com/oldentimesofficial/"
                    target="_blank"
                    className="btn-orange"
                  >
                    SHOP INSTAGRAM
                  </a>
                  <a
                    href="https://twitter.com/OldenTimesOffi1"
                    target="_blank"
                    className="btn-purple"
                  >
                    FOLLOW US
                  </a>
                </div>
              </div>
              <div className="col-lg-6 text-center">
                <img
                  src={`${process.env.PUBLIC_URL}/img/insta-ss.png`}
                  className="img-fluid"
                  daata-aoos="fade-down"
                  daata-aoos-delay={800}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SectionTen;
