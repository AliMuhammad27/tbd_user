import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import { getRandomCategoriesHome } from "../../../Apis/Home";
import { query_stale_time } from "../../../Helpers/Helpers";
import { image_url } from "../../../Util/connection_strings";

function SectionFive(props) {
  const { isLoading, data } = useQuery(
    ["dashboard"],
    () => getRandomCategoriesHome(),
    {
      staleTime: query_stale_time,
    }
  );

  return (
    <section>
      <div className="container-fluid">
        <div className="row selection">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-sm-12 col-xs-12 text-center">
                <h5
                  className="ff-thunder fc-white"
                  daata-aoos="fade-down"
                  daata-aoos-duration={800}
                >
                  Products We Have
                </h5>
                <h1
                  className="ff-thunder fc-white"
                  daata-aoos="fade-up"
                  daata-aoos-duration={800}
                >
                  Shop By Category
                </h1>
                <p style={{ textAlign: "center", fontSize: 20, color: "white" }}>We strive to provide our consumers with genuine, high-quality products.</p>
                <h2 style={{ color: "orange", textAlign: "center" }}>Shop Now!</h2>
              </div>
            </div>
            <div className="row">
              {data?.data?.categories?.map((category) => (
                <div className="col m-2">
                  <Link>
                    <div
                      className="shopBx"
                      style={{
                        height: 244,
                        width: 287,
                      }}
                    >
                      <img
                        src={`${image_url}${category?.category_image}`}
                        className="img-fluid"
                        style={{
                          height: 244,
                          width: 287,
                        }}
                      />
                      <div className="selection-imgTxt2">
                        <h5 className="ff-thunder fc-white b-orange1">
                          {category?.name}
                        </h5>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SectionFive;
