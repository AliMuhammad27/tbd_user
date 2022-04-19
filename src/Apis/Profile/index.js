import axios from "axios";
import { connection_string } from "../../Util/connection_strings";

export const update = (data) =>
  axios({
    url: `${connection_string}/profile/user/update`,
    method: "POST",
    data,
    headers: {
      Authorization: `Bearer ${localStorage.getItem("TokenUser")}`,
    },
  });

export const getWishlist = () =>
  axios({
    url: `${connection_string}/profile/user/get-wishlist`,
    method: "GET",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("TokenUser")}`,
    },
  });
