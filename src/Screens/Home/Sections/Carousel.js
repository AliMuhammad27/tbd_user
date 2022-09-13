import React, { Component } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";

export default class SlickGoTo extends React.Component {
  state = {
    slideIndex: 0,
  };

  render() {
    const settings = {
      dots: false,
      infinite: true,
      arrows: false,
      speed: 1500,
      autoplay: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      beforeChange: (current, next) =>
        this.setState({ slideIndex: next }, () =>
          this.props.setSlideIndex(this.state.slideIndex)
        ),
    };
    const { category } = this.props;

    return (
      <div>
        <Slider ref={(slider) => (this.slider = slider)} {...settings}>
          <div className="row">
            <div className="col-lg-6 col-sm-12 col-xs-12">
              <div
                className="main-text"
                daata-aoos="flip-left"
                daata-aoos-duration={500}
              >
                <div className=" text-right">
                  <h2
                    style={{
                      color: "#2e2e54",
                    }}
                    className="ff-thunder fc-white"
                  >
                    Think Beyond Imagination
                  </h2>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 col-sm-12 col-xs-12">
              <div
                className="main-text"
                daata-aoos="flip-left"
                daata-aoos-duration={500}
              >
                <div className=" text-right">
                  <h2
                    className="ff-thunder fc-white"
                    style={{
                      color: "#2e2e54",
                    }}
                  >
                    One-Stop-Shop for All Your Needs
                  </h2>
                  <h2
                    style={{
                      color: "#F5722B",
                    }}
                    className="ff-thunder fc-white"
                  >
                    The Best Ecommerce Store for Your Daily Needs
                  </h2>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 col-sm-12 col-xs-12">
              <div
                className="main-text"
                daata-aoos="flip-left"
                daata-aoos-duration={500}
              >
                <div className=" text-right">
                  <h2
                    className="ff-thunder fc-white"
                    style={{
                      color: "#2e2e54",
                    }}
                  >
                    Premium Quality Products at Affordable Prices
                  </h2>
                  <h2
                    style={{
                      color: "#F5722B",
                    }}
                    className="ff-thunder fc-white"
                  >
                    24/7 Support & 100% Customer Satisfaction
                  </h2>
                  <h2
                    style={{
                      color: "#2e2e54",
                    }}
                    className="ff-thunder fc-white"
                  >
                    Let us Take Your Shopping Experience to the Next Level
                  </h2>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="row">
            <div className="col-lg-6 col-sm-12 col-xs-12">
              <div
                className="main-text"
                daata-aoos="flip-left"
                daata-aoos-duration={500}
              >
                <div className=" text-right">
                  <h2
                    style={{
                      color: "#2e2e54",
                    }}
                    className="ff-thunder fc-white"
                  >
                    We Are Authentic
                  </h2>
                </div>
              </div>
            </div>
          </div> */}
          {/* <div className="row">
            <div className="col-lg-6 col-sm-12 col-xs-12">
              <div
                className="main-text"
                daata-aoos="flip-left"
                daata-aoos-duration={500}
              >
                <div className=" text-right">
                  <h2
                    className="ff-thunder fc-white"
                    style={{
                      color: "#2e2e54",
                    }}
                  >
                    We Are Authentic
                  </h2>
                  <h2
                    className="ff-thunder fc-orange"
                    style={{
                      color: "#F5722B",
                    }}
                  >
                    We Are Sustainable
                  </h2>
                </div>
              </div>
            </div>
          </div> */}
          {/* <div className="row">
            <div className="col-lg-6 col-sm-12 col-xs-12">
              <div
                className="main-text"
                daata-aoos="flip-left"
                daata-aoos-duration={500}
              >
                <div className=" text-right">
                  <h2
                    className="ff-thunder fc-white"
                    style={{
                      color: "#2e2e54",
                    }}
                  >
                    We Are Authentic
                  </h2>
                  <h2
                    className="ff-thunder fc-orange"
                    style={{
                      color: "#F5722B",
                    }}
                  >
                    We Are Sustainable
                  </h2>
                  <h3
                    className="ff-thunder fc-white"
                    style={{
                      color: "#2e2e54",
                    }}
                  >
                    We Are Olden Times
                  </h3>
                </div>
              </div>
            </div>
          </div> */}
        </Slider>
      </div>
    );
  }
}
