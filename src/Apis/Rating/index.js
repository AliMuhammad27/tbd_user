import axios from "axios";
import { connection_string } from "../../Util/connection_strings";

export const addRating = (data) => {
  const Token = localStorage.getItem("TokenUser");
  return axios({
    url: `${connection_string}/rating/user/create`,
    method: "POST",
    data,
    headers: {
      Authorization: `Bearer ${Token}`,
    },
  });
};

export const editRating = (data) => {
  const Token = localStorage.getItem("TokenUser");
  return axios({
    url: `${connection_string}/rating/user/edit`,
    method: "POST",
    data,
    headers: {
      Authorization: `Bearer ${Token}`,
    },
  });
};

export const getRatings = (id) =>
  axios({
    url: `${connection_string}/rating/user/get/${id}`,
    method: "GET",
  });
