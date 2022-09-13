import React, { useState } from "react";
import { useMutation } from "react-query";
import { Link } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { sendForm } from "../../Apis";
import Error from "../../Components/Modal.Error";
import Success from "../../Components/Modal.Success";
import { userState } from "../../Recoil/Auth";

export default function Contact() {
  const user = useRecoilValue(userState);
  const [data, setData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    userId: user._id,
  });

  const { mutate, isLoading } = useMutation((data) => sendForm(data), {
    onSuccess: (res) => {
      Success(res?.data?.message);
      setData({
        name: "",
        email: "",
        subject: "",
        message: "",
        userId: user._id,
      });
    },
    onError: (err) => Error(err?.response?.data?.message),
  });

  return (
    <>
      <section className="bg-about">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h1 className="fc-white ff-thunder">CONTACT US</h1>
            </div>
          </div>
        </div>
      </section>
      <section className="p-55-0">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h1 className="ff-thunder fc-purple">
                CONTACT US FOR BEAT SERVICE
              </h1>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="contactForm">
                <form>
                  <div className="form-row">
                    <div className="col-lg-6 col-sm-12">
                      <i className="far fa-user" />
                      <input
                        type="text"
                        className="form-control contactInput mt-30"
                        name
                        placeholder="Full Name"
                        value={data?.name}
                        onChange={(e) =>
                          setData({ ...data, name: e.target.value })
                        }
                      />
                    </div>
                    <div className="col-lg-6 col-sm-12">
                      <i className="far fa-envelope" />
                      <input
                        type="text"
                        className="form-control contactInput mt-30"
                        name
                        placeholder="Email Address"
                        value={data?.email}
                        onChange={(e) =>
                          setData({ ...data, email: e.target.value })
                        }
                      />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="col-lg-12 col-sm-12">
                      <i className="fas fa-clipboard-list" />
                      <input
                        type="text"
                        className="form-control contactInput mt-30"
                        name
                        placeholder="Enter Subject"
                        value={data?.subject}
                        onChange={(e) =>
                          setData({
                            ...data,
                            subject: e.target.value,
                          })
                        }
                      />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="col-lg-12 col-sm-12">
                      <i className="far fa-envelope" />
                      <textarea
                        rows={6}
                        className="form-control contactInput mt-30"
                        placeholder="Enter Message!"
                        value={data?.message}
                        onChange={(e) =>
                          setData({
                            ...data,
                            message: e.target.value,
                          })
                        }
                      />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="col-lg-12 col-sm-12 text-center mt-30">
                      <Link
                        to="#"
                        className="btn-orange"
                        onClick={() => mutate(data)}
                      >
                        SEND MESSAGE
                      </Link>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div
              className="container-fluid"
              style={{ paddingLeft: "210px", marginTop: "50px" }}
            >
              <h1 style={{ color: "black" }}>Our Newsletter</h1>
              <p style={{ fontSize: 20 }}>
                Sign-up for free to receive the latest news, promotional deals,
                and discounts directly into your inbox.
              </p>
            </div>

            <div
              className="container-fluid"
              style={{ paddingLeft: "210px", marginTop: "50px" }}
            >
              <h1 style={{ color: "black" }}>Saint Shop </h1>
              <p style={{ fontSize: 20 }}>
                Saint Shop is a dedicated e-commerce store that provides the
                most innovative and quality products at the lowest prices,
                delivered straight to your door.
              </p>
            </div>

            <div
              className="container-fluid"
              style={{ paddingLeft: "210px", marginTop: "50px" }}
            >
              <h1 style={{ color: "black" }}>Contact Us</h1>
              <p style={{ fontSize: 20 }}>
                Contact us via email or phone if you have any concerns or
                queries regarding our products or services. Our Customer Support
                is active 24/7 to help resolve your issues promptly.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
