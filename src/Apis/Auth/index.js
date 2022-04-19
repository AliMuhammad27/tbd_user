import axios from "axios";
import { connection_string } from "../../Util/connection_strings";

export const register = (data) =>
  axios({
    url: `${connection_string}/auth/user/register`,
    method: "POST",
    data,
  });

export const login = (data) =>
  axios({
    url: `${connection_string}/auth/user/login`,
    method: "POST",
    data,
  });

export const recoverPassword = (data) =>
  axios({
    url: `${connection_string}/auth/user/recover`,
    method: "POST",
    data,
  });

export const verifyCode = (data) =>
  axios({
    url: `${connection_string}/auth/user/verify`,
    method: "POST",
    data,
  });

export const resetPassword = (data) =>
  axios({
    url: `${connection_string}/auth/user/reset`,
    method: "POST",
    data,
  });

export const updatePassword = (data) =>
  axios({
    url: `${connection_string}/auth/user/update`,
    method: "POST",
    data,
    headers: {
      Authorization: `Bearer ${localStorage.getItem("TokenUser")}`,
    },
  });

export const me = () =>
  axios({
    url: `${connection_string}/profile/user/`,
    method: "GET",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("TokenUser")}`,
    },
  });
