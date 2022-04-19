import axios from "axios";
import { connection_string } from "../../Util/connection_strings";

export const addItemWishlist = (id) => {
  const Token = localStorage.getItem("TokenUser");
  return axios({
    url: `${connection_string}/profile/user/add-wishlist/${id}`,
    method: "GET",
    headers: {
      Authorization: `Bearer ${Token}`,
    },
  });
};
