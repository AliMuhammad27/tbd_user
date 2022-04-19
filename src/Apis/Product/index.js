import axios from "axios";
import { connection_string } from "../../Util/connection_strings";

export const getProductDetails = (id) =>
  axios({
    url: `${connection_string}/product/user/get/details/${id}`,
    method: "GET",
  });

export const getProductDetailsLoggedIn = (id) =>
  axios({
    url: `${connection_string}/product/user/get-token/details/${id}`,
    method: "GET",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("TokenUser")}`,
    },
  });

export const getRandomProducts = (data) =>
  axios({
    url: `${connection_string}/product/user/get-random`,
    method: "GET",
  });

export const getProductsByCategory = (
  category,
  sub_category,
  page,
  perPage,
  search_string,
  sort,
  min,
  max,
  rating
) =>
  axios({
    url: `${connection_string}/product/user/get`,
    method: "GET",
    params: {
      category,
      sub_category,
      page,
      perPage,
      searchString: search_string,
      sort,
      min,
      max,
      rating,
    },
  });
