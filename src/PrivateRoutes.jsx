import React, { Fragment } from "react";
import { Route, withRouter } from "react-router-dom";

import { useRecoilState } from "recoil";
import { me } from "./Apis";

import { useEffect, useState } from "react";
import { useMutation } from "react-query";

import { userState } from "./Recoil";

const PrivateRoute = ({
  component: Component,
  history,
  match,
  location,
  ...rest
}) => {
  const [user, setUser] = useRecoilState(userState);
  const [loading, setLoading] = useState(false);

  const { mutate, isLoading } = useMutation(() => me(), {
    retry: false,
    onSuccess: (res) => {
      setUser(res?.data?.vendor);
    },
    onError: (err) => {
      history.push("/");
      localStorage.clear();
      setLoading(false);
    },
  });

  useEffect(() => {
    setLoading(true);
    if (!user?._id) {
      mutate();
    } else {
      setLoading(false);
      if (location.pathname === "/") history.replace("/dashboard");
    }
  }, [user?._id]);

  if (isLoading || loading)
    return (
      <div
        style={{
          height: "80vh",
          width: "100vw",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img src="img/logo.png" />
      </div>
    );
  else
    return (
      <Route
        {...rest}
        render={(props) => (
          <Fragment>
            <Component {...props} />
          </Fragment>
        )}
      />
    );
};

export default withRouter(PrivateRoute);
