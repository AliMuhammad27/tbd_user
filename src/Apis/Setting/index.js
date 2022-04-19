import axios from "axios";
import { connection_string } from "../../Util/connection_strings";

export const getSettings = () => {
  const Token = localStorage.getItem("TokenAdmin");
  return axios({
    url: `${connection_string}/setting/admin/get`,
    method: "GET",
    headers: {
      Authorization: `Bearer ${Token}`,
    },
  });
};
