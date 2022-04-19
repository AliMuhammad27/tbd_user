import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { getRandomProducts } from "../../../Apis/Product";
import { query_stale_time } from "../../../Helpers/Helpers";
import { image_url } from "../../../Util/connection_strings";
import Slider from "react-slick";

function SectionSix(props) {
  const { isLoading, data } = useQuery(
    ["random_products"],
    () => getRandomProducts(),
    {
      staleTime: query_stale_time,
    }
  );
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <section>
      <div className="container-fluid">
        <div className="row p-55-0">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 text-center">
                <h1
                  className="ff-thunder fc-purple"
                  daata-aoos="fade-down"
                  daata-aoos-duration={800}
                >
                  NEW PRODUCTS TO OLDEN TIMES
                </h1>
                <p
                  className="ff-thunder fc-orange"
                  daata-aoos="fade-up"
                  daata-aoos-duration={1000}
                >
                  We support small producers by selling handcrafted, sustainable
                  products.
                </p>
              </div>
            </div>
            <div
              className="row"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Slider {...settings}>
                {data?.data?.products?.map((item) => (
                  <section
                    className=""
                    style={{
                      width: "500px",
                    }}
                  >
                    <div
                      className=""
                      daata-aoos="fade-up"
                      style={{
                        width: "100%",
                      }}
                    >
                      <img
                        style={{
                          width: 286,
                          height: 289,
                        }}
                        src={`${image_url}${item?.images[0]}`}
                        className="img-fluid"
                        draggable={false}
                      />
                      <p className="ff-thunder mt-10 mb-0 fc-black">
                        {item?.name}
                      </p>
                      <p className="ff-thunder fc-black">${item?.price}</p>
                    </div>
                  </section>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SectionSix;
