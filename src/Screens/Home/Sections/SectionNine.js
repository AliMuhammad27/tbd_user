import React, { useEffect, useState } from "react";
import moment from "moment";

function truncate(str, n) {
  return str.length > n ? str.substr(0, n - 1) + "&hellip;" : str;
}

function SectionNine(props) {
  const [contents, setContents] = useState([]);

  return (
    <section>
      <div className="container-fluid">
        <div className="row blog">
          <div className="container">
            <div className="row mb-50">
              <div className="col-lg-12 text-center">
                <h1
                  className="ff-thunder fc-white"
                  daata-aoos="fade-down"
                  daata-aoos-duration={800}
                >
                  BLOG
                </h1>
                <p style={{ textAlign: "center", fontSize: 20, color: "white" }}>Want inspo and tips? Stay tuned for the best guides related to e-commerce.</p>
              </div>
              {contents?.map((el) => (
                <div className="col-lg-4 col-sm-12 col-xs-12 mt-30">
                  <div
                    className="blog-card"
                    daata-aoos="fade-down"
                    daata-aoos-duration={800}
                  >
                    <div className="card-head">
                      <img src="" className="img-fluid" />
                    </div>
                    <div className="card-body">
                      <h4 className="ff-thunder fc-purple">{el.pageName}</h4>
                      <p>{moment(el.createdAt).format("ll")}</p>
                      <p className="mt-10">
                        {truncate(el.sections[0]?.description, 30)}....
                      </p>
                      <div className="float-left mt-10">
                        <a href="#" className="fc-orange">
                          Read More{" "}
                          <i className="fas fa-arrow-circle-right fc-purple" />
                        </a>
                      </div>
                      <div className="float-right mt-10">
                        <ul className="fc-orange">
                          <li>
                            <a href>
                              <i className="fas fa-heart" />
                            </a>
                          </li>
                          <li>|</li>
                          <li>
                            <a href>
                              <i className="fas fa-comment" />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* <div>
          <div className="container-fluid">
            <h2 style={{ textAlign: "center", color: "black" }}>Blogs</h2>
            <p style={{ textAlign: "center", fontSize: 20 }}>Want inspo and tips? Stay tuned for the best guides related to e-commerce.</p>
          </div>
        </div> */}
      </div>
    </section>
  );
}

export default SectionNine;


