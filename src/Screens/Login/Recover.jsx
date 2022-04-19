import React, { useEffect } from "react";
import { useState } from "react";
import { useMutation } from "react-query";
import { recoverPassword, resetPassword, verifyCode } from "../../Apis";
import Button from "../../Components/Button";
import Error from "../../Components/Modal.Error";
import Success from "../../Components/Modal.Success";

export default function Recover({ history }) {
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const [new_password, setNewPassword] = useState("");
  const [confirm_password, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);

  // FORGOT PASSWORD JOURNEY APIs
  const { mutate: recoverPasswordMuate, isLoading: recoverLoading } =
    useMutation((data) => recoverPassword(data), {
      retry: false,
      onSuccess: (res) => {
        Success(res?.data?.message);
        setStep(2);
      },
      onError: (err) => Error(err?.response?.data?.message),
    });
  const { mutate: verifyCodeMutate, isLoading: codeLoading } = useMutation(
    (data) => verifyCode(data),
    {
      retry: false,
      onSuccess: (res) => {
        Success(res?.data?.message);
        setStep(3);
      },
      onError: (err) => Error(err?.response?.data?.message),
    }
  );
  const { mutate: resetPasswordMuate, isLoading: resetLoading } = useMutation(
    (data) => resetPassword(data),
    {
      retry: false,
      onSuccess: (res) => {
        Success(res?.data?.message);
        history.replace("/login");
      },
      onError: (err) => Error(err?.response?.data?.message),
    }
  );

  useEffect(() => {
    if (recoverLoading || codeLoading || resetLoading) setLoading(true);
    else setLoading(false);
  }, [recoverLoading, codeLoading, resetLoading]);

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
                      <h3 className="ff-thunder fc-purple">
                        {" "}
                        Password Recovery
                      </h3>
                      <h4 className="fc-lgray">
                        {step === 1 && "Please Enter Your Email Address"}
                        {step === 2 &&
                          "Please Enter The Verification Code Sent To Your Email"}
                        {step === 3 && "Please Enter Your New Password"}
                      </h4>
                    </div>
                  </div>
                  <form>
                    <div className="row formBx-body">
                      <div className="col-lg-12">
                        <div className="row">
                          {step === 1 && (
                            <div className="col mt-20">
                              <label>Email Address*</label>
                              <input
                                type="text"
                                className="form-control"
                                id="email"
                                placeholder="Enter email"
                                name="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                              />
                            </div>
                          )}
                          {step === 2 && (
                            <div className="col mt-20">
                              <label>Verification Code*</label>
                              <input
                                type="number"
                                className="form-control"
                                id="email"
                                placeholder="Enter email"
                                name="email"
                                value={code}
                                onChange={(e) => setCode(e.target.value)}
                              />
                            </div>
                          )}
                          {step === 3 && (
                            <div className="col mt-20">
                              <label>New Password*</label>
                              <input
                                type="password"
                                className="form-control"
                                id="email"
                                placeholder="Enter email"
                                name="email"
                                value={new_password}
                                onChange={(e) => setNewPassword(e.target.value)}
                              />
                            </div>
                          )}
                        </div>
                        <div className="row">
                          {step === 3 && (
                            <div className="col mt-20">
                              <label>New Password*</label>
                              <input
                                type="password"
                                className="form-control"
                                id="email"
                                placeholder="Enter email"
                                name="email"
                                value={confirm_password}
                                onChange={(e) =>
                                  setConfirmPassword(e.target.value)
                                }
                              />
                            </div>
                          )}
                        </div>
                        <div className="row">
                          <div className="col mt-40 text-center mt-20">
                            <Button
                              className="btn-orange"
                              onClick={() => {
                                if (step === 1) recoverPasswordMuate({ email });
                                if (step === 2) verifyCodeMutate({ code });
                                if (step === 3)
                                  resetPasswordMuate({
                                    password: new_password,
                                    confirm_password,
                                    code,
                                  });
                              }}
                              loading={loading}
                            >
                              {step === 3 ? "Update" : "Continue"}
                            </Button>
                          </div>
                        </div>
                        <div className="row mt-40 mb-40">
                          <div className="col text-center mb-20">
                            <a href="sign-in.php" className="fc-purple">
                              <i className="fas fa-arrow-left" /> Back To Login
                            </a>
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
