import axios from "axios";
import { connection_string } from "../../Util/connection_strings";

export const getNotifications = (page, perPage) => {
  const Token = localStorage.getItem("TokenUser");
  return axios({
    url: `${connection_string}/notification/user/get`,
    params: {
      page,
      perPage,
    },
    method: "GET",
    headers: {
      Authorization: `Bearer ${Token}`,
    },
  });
};

export const getCount = () => {
  const Token = localStorage.getItem("TokenUser");
  return axios({
    url: `${connection_string}/notification/user/count`,
    method: "GET",
    headers: {
      Authorization: `Bearer ${Token}`,
    },
  });
};
