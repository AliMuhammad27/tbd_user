import React, { useState } from "react";
import { useMutation } from "react-query";
import { Link } from "react-router-dom";
import { register } from "../../Apis/Auth";

import Button from "../../Components/Button";
import Error from "../../Components/Modal.Error";
import Success from "../../Components/Modal.Success";

export default function Register({ history }) {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    confirm_password: "",
  });

  const { mutate, isLoading } = useMutation((data) => register(data), {
    onSuccess: (res) => {
      console.log(res.data);
      Success(res?.data?.message);
      history.replace("/login");
    },
    onError: (err) => Error(err?.response?.data?.message),
  });

  return (
    <section>
      <div className="container-fluid">
        <div className="row mb-50">
          <div className="container mb-50">
            <div className="row justify-content-center">
              <div className="col-lg-7 col-sm-12 col-xs-12">
                <div className="formBx">
                  <div className="row">
                    <div className="col-lg-12 col-sm-12 col-xs-12 text-center">
                      <h3 className="ff-thunder fc-purple"> Sign Up</h3>
                      <p className="fc-lgray">
                        Already have An Account
                        <Link to="/login" className="fc-orange">
                          Sign In
                        </Link>
                      </p>
                    </div>
                  </div>
                  <form>
                    <div className="row formBx-body">
                      <div className="col-lg-12">
                        <div className="row">
                          <div className="col mt-20">
                            <label>Name*</label>
                            <input
                              type="text"
                              className="form-control"
                              id="email"
                              placeholder="Enter Name"
                              name="email"
                              value={data?.name}
                              onChange={(e) =>
                                setData({ ...data, name: e.target.value })
                              }
                            />
                          </div>
                        </div>
                        <div className="row">
                          <div className="col mt-20">
                            <label>Email Address*</label>
                            <input
                              type="text"
                              className="form-control"
                              id="email"
                              placeholder="Enter Email"
                              name="email"
                              value={data?.email}
                              onChange={(e) =>
                                setData({ ...data, email: e.target.value })
                              }
                            />
                          </div>
                        </div>
                        <div className="row">
                          <div className="col mt-20">
                            <label>Password*</label>
                            <input
                              type="password"
                              className="form-control"
                              id="email"
                              placeholder="Enter Password"
                              name="email"
                              value={data?.password}
                              onChange={(e) =>
                                setData({ ...data, password: e.target.value })
                              }
                            />
                          </div>
                        </div>
                        <div className="row">
                          <div className="col mt-20">
                            <label>Confirm Password*</label>
                            <input
                              type="password"
                              className="form-control"
                              id="email"
                              placeholder="Enter Confirm Password"
                              name="email"
                              value={data?.confirm_password}
                              onChange={(e) =>
                                setData({
                                  ...data,
                                  confirm_password: e.target.value,
                                })
                              }
                            />
                          </div>
                        </div>
                        <div className="row">
                          <div className="col mt-40 mb-40 text-center mt-20">
                            <Button
                              className="btn-orange"
                              onClick={() => mutate(data)}
                              loading={isLoading}
                            >
                              SIGNUP
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
