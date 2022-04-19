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
                        Stark Areyab
                      </p>
                      <p className="fc-white">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the when an
                        unknown printer took a galley of type and scrambled it
                        to make a type specimen book. It has survived not only
                        five centuries, but also the leap into electronic
                        typesetting, remaining essentially unchanged.
                      </p>
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
                        STARK WILLIAM
                      </p>
                      <p className="fc-white">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the when an
                        unknown printer took a galley of type and scrambled it
                        to make a type specimen book. It has survived not only
                        five centuries, but also the leap into electronic
                        typesetting, remaining essentially unchanged.
                      </p>
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
                        Stark AREYAB
                      </p>
                      <p className="fc-white">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the when an
                        unknown printer took a galley of type and scrambled it
                        to make a type specimen book. It has survived not only
                        five centuries, but also the leap into electronic
                        typesetting, remaining essentially unchanged.
                      </p>
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
