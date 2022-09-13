import React from "react";
import Slider from "react-slick";

function SectionSeven() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const center = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  };
  return (
    <section>
      <div className="container-fluid">
        <div className="row clients">
          <div className="container">
            <div className="row">
              <div
                className="col-lg-6 text-center"
                daata-aoos="fade-up-right"
                daata-aoos-duration={1000}
              >
                <img
                  src={`${process.env.PUBLIC_URL}/img/client.png`}
                  className="img-fluid mt-20"
                />
              </div>
              <div className="col-lg-6 text-center mt-20">
                <h2 className="ff-thunder fc-orange">Satisfied Clients</h2>
                <p className="mt-10 fc-white">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit,{" "}
                </p>
                <Slider {...settings}>
                  <div className="item">
                    <div className="slider-bg" style={center}>
                      <img
                        src={`${process.env.PUBLIC_URL}/images/testimonial-1.png`}
                        className="img-fluid"
                        alt=""
                      />
                    </div>
                    <div className="content">
                      <p className="p-lg mb-0 text-uppercase fc-white">
                        Agatha
                      </p>
                      <p style={{ textAlign: "center", fontSize: 20, color: "white" }}>"Thanks to saint shop, I bought home accessories at wholesale rates for my living room, and, trust me, I saved a lot."  <strong>– Agatha</strong></p>
                    </div>
                  </div>

                  <div className="item">
                    <div className="slider-bg" style={center}>
                      <img
                        src={`${process.env.PUBLIC_URL}/images/testimonial-2.png`}
                        className="img-fluid"
                        alt=""
                      />
                    </div>
                    <div className="content">
                      <p className="p-lg mb-0 text-uppercase fc-white">
                        Myra
                      </p>
                      <p style={{ textAlign: "center", fontSize: 20, color: "white" }}>"My friend recommended me, saint shop. I read about their products and realized that they have accessories at affordable rates. They make shopping easy and stress-free!"  <strong>– Myra</strong></p>
                    </div>
                  </div>

                  <div className="item">
                    <div className="slider-bg" style={center}>
                      <img
                        src={`${process.env.PUBLIC_URL}/images/testimonial-3.png`}
                        className="img-fluid"
                        alt=""
                      />
                    </div>
                    <div className="content">
                      <p className="p-lg mb-0 text-uppercase fc-white">
                        Alfred
                      </p>
                      <p style={{ textAlign: "center", fontSize: 20, color: "white" }}>"I'm a small business owner. I also research the market to purchase items for my shop in bulks. With the help of saint shop, I can now purchase my desired items in bulk at a wholesale rate without going out of my door. Thank you!"  <strong>– Lauren</strong></p>
                    </div>
                  </div>
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SectionSeven;
