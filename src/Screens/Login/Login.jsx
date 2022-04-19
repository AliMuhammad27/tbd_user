import React, { useEffect, useState } from "react";
import { useMutation } from "react-query";
import { Link } from "react-router-dom";
import { useRecoilState } from "recoil";
import { login, me } from "../../Apis";
import Button from "../../Components/Button";
import { loggedInState, userState } from "../../Recoil/Auth";

export default function Login({ history }) {
  const [logged_in, setLogged_in] = useRecoilState(loggedInState);
  const [user, setUser] = useRecoilState(userState);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const { mutate, isLoading } = useMutation((data) => login(data), {
    retry: false,
    onSuccess: (res) => {
      localStorage.setItem("TokenUser", res.data.token);
      setLogged_in(true);
      meMutate();
      history.replace("/");
    },
    onError: (err) => Error(err?.response?.data?.message),
  });

  const { mutate: meMutate } = useMutation(() => me(), {
    retry: false,
    onSuccess: (res) => {
      setUser(res?.data?.user);
      setLogged_in(true);
      history.replace("/");
    },
    onError: (err) => {
      history.push("/");
      localStorage.removeItem("TokenUser");
      setLoading(false);
    },
  });

  useEffect(() => {
    const Token = localStorage.getItem("TokenUser");
    if (Token) {
      setLoading(true);
      meMutate();
    } else {
      setLoading(false);
    }
  }, []);

  return (
    <section>
      <div className="container-fluid">
        <div className="row inner-banner">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8 col-sm-12 col-xs-12">
                <div className="formBx">
                  <div className="row">
                    <div className="col-lg-12 col-sm-12 col-xs-12 text-center">
                      <h3 className="ff-thunder fc-purple">Login</h3>
                      <h4 className="fc-lgray">Login To Your Account</h4>
                    </div>
                  </div>
                  <form>
                    <div className="row formBx-body">
                      <div className="col-lg-12">
                        <div className="row">
                          <div className="col mt-20">
                            <label>Email Address*</label>
                            <input
                              type="text"
                              className="form-control"
                              id="email"
                              placeholder="Enter Email"
                              name="email"
                              onChange={(e) =>
                                setData({ ...data, email: e.target.value })
                              }
                              value={data?.email}
                            />
                          </div>
                        </div>
                        <div className="row">
                          <div className="col mt-20">
                            <label>Password*</label>
                            <input
                              type="password"
                              className="form-control"
                              id="password"
                              placeholder="Enter Password"
                              name="password"
                              onChange={(e) =>
                                setData({ ...data, password: e.target.value })
                              }
                              value={data?.password}
                            />
                          </div>
                        </div>
                        <div className="row">
                          <div className="col"></div>
                          <div className="col mt-20 text-right">
                            <div className="form-check">
                              <Link
                                to="/recover"
                                className="fc-gray"
                                type="button"
                              >
                                <u>Forget password</u>
                              </Link>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col mt-40 text-center mt-20">
                            <Button
                              className="btn-orange"
                              loading={isLoading}
                              onClick={() => mutate(data)}
                            >
                              LOGIN
                            </Button>
                          </div>
                        </div>
                        <div className="row mt-20 mb-40">
                          <div className="col text-center">
                            <p className="fc-purple">
                              Want To Create An Account?{" "}
                              <a href className="fc-orange">
                                Sign Up
                              </a>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                  {/* =========================== Login Rejected section =========================== */}
                </div>
              </div>
            </div>
            <div className="row mt-40">
              <div className="col-lg-12 text-center">
                <h4 className="fc-gray">
                  Copyright @ 2020{" "}
                  <span className="fc-orange">OLDEN TIMES</span>. All Rights
                  Reserved.
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
