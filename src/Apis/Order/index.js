import axios from "axios";
import { connection_string } from "../../Util/connection_strings";

export const getMyOrders = (
  page,
  perPage,
  search_string,
  from,
  to,
  status,
  order_status
) => {
  const Token = localStorage.getItem("TokenUser");
  return axios({
    url: `${connection_string}/order/user/logs`,
    method: "GET",
    params: {
      page,
      perPage,
      searchString: search_string,
      from,
      to,
      status,
      order_status,
    },
    headers: {
      Authorization: `Bearer ${Token}`,
    },
  });
};

export const getOrder = (id) => {
  const Token = localStorage.getItem("TokenUser");
  return axios({
    url: `${connection_string}/order/user/view/${id}`,
    method: "GET",
    headers: {
      Authorization: `Bearer ${Token}`,
    },
  });
};

export const postOrderGuest = (data) =>
  axios({
    url: `${connection_string}/order/guest/create`,
    method: "POST",
    data,
  });

export const postOrderUser = (data) => {
  const Token = localStorage.getItem("TokenUser");
  return axios({
    url: `${connection_string}/order/user/create`,
    method: "POST",
    data,
    headers: {
      Authorization: `Bearer ${Token}`,
    },
  });
};
