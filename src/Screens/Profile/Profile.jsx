import React, { useState } from "react";
import { useMutation } from "react-query";
import { useRecoilState } from "recoil";
import { me, update, updatePassword } from "../../Apis";
import Button from "../../Components/Button";
import Error from "../../Components/Modal.Error";
import Success from "../../Components/Modal.Success";
import { userState } from "../../Recoil";

export default function Profile() {
  const [user, setUser] = useRecoilState(userState);
  const [edit, setIsEdit] = useState(false);
  const [current_password, setCurrent] = useState("");
  const [password, setPassowrd] = useState("");
  const [confirm_password, setConfirmPassword] = useState("");

  const { mutate, isLoading } = useMutation((data) => update(data), {
    onSuccess: (res) => {
      Success(res?.data?.message);
      meMutate();
      setIsEdit(false);
    },
    onError: (err) => Error(err?.response?.data?.message),
  });

  const { mutate: meMutate } = useMutation(() => me(), {
    retry: false,
    onSuccess: (res) => {
      setUser(res?.data?.user);
    },
  });

  const { mutate: updatePasswordMutate, isLoading: passwordUpdateLoading } =
    useMutation((data) => updatePassword(data), {
      onSuccess: (res) => {
        Success(res?.data?.message).then((res) => {
          window.location.reload();
        });
      },
      onError: (err) => Error(err?.response?.data?.message),
    });

  return (
    <>
      <section
        className="p-55-0"
        style={{
          height: "60vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div className="container">
          <div className="row profile">
            <div className="col-lg-12 text-center">
              <h1 className="ff-thunder fc-purple">PROFILE</h1>
            </div>
            <div className="col-lg-12 text-center">
              <p className="ff-thunder fc-orange mt-10">User ID: {user?._id}</p>
            </div>
          </div>
          <div className="row profile justify-content-center">
            <div className="col-lg-6 col-sm-12">
              <div className="d-flex flex-row justify-content-center">
                <div className="p-2">
                  <p className="ff-thunder fc-lgray">Name</p>
                  {edit ? (
                    <input
                      type
                      className="input-cstm p-10-20"
                      name
                      onChange={(e) => {
                        setUser({ ...user, name: e.target.value });
                      }}
                      value={user?.name}
                    />
                  ) : (
                    <p>{user?.name}</p>
                  )}
                </div>
                <div className="p-2">
                  <p className="ff-thunder fc-lgray">Email Address</p>
                  <p>{user?.auth?.email}</p>
                </div>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="d-flex flex-row justify-content-center">
                {!edit && (
                  <a
                    href="#"
                    className="btn-pur2 m-1"
                    type="button"
                    data-toggle="modal"
                    data-target="#changePassword"
                  >
                    CHANGE PASSWORD
                  </a>
                )}
                <Button
                  className="btn-orange m-1"
                  onClick={() => {
                    if (edit) {
                      mutate({ name: user?.name });
                    } else {
                      setIsEdit(!edit);
                    }
                  }}
                  loading={isLoading}
                >
                  {edit ? "UPDATE PROFILE" : "EDIT PROFILE"}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div
        className="modal fade login-modal"
        id="changePassword"
        tabIndex={-1}
        aria-labelledby="exampleModalCenterTitle"
        style={{ display: "none" }}
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content modal-cstm">
            <div className="modal-header modal-headerClose">
              {/*         <h5 class="modal-title" id="exampleModalLongTitle">Modal title</h5> */}
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body p-20-40">
              <div className="text-center mt-20">
                <h3 className="ff-thunder fc-purple"> Change Password</h3>
              </div>
              <div className="text-left">
                <div className="row">
                  <div className="col mt-30">
                    <label>Current Password*</label>
                    <input
                      type="password"
                      className="form-control input-cstm"
                      id="email"
                      placeholder="Current Password"
                      name="email"
                      value={current_password}
                      onChange={(e) => setCurrent(e.target.value)}
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col mt-30">
                    <label>New Password*</label>
                    <input
                      type="password"
                      className="form-control input-cstm"
                      id="email"
                      placeholder="New Password"
                      name="email"
                      value={password}
                      onChange={(e) => setPassowrd(e.target.value)}
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col mt-30">
                    <label>Confirm Password*</label>
                    <input
                      type="password"
                      className="form-control input-cstm"
                      id="email"
                      placeholder="Confirm Password"
                      name="email"
                      value={confirm_password}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                  </div>
                </div>
              </div>
              <div className="text-center">
                <div className="row">
                  <div className="col mt-40 text-center mb-20">
                    <Button
                      className="btn-orange"
                      onClick={() =>
                        updatePasswordMutate({
                          current_password,
                          password,
                          confirm_password,
                        })
                      }
                      loading={passwordUpdateLoading}
                    >
                      UPDATE
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
