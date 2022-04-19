import axios from "axios";
import { connection_string } from "../../Util/connection_strings";

export const getUserCategories = (data) =>
  axios({
    url: `${connection_string}/category/user/get`,
    method: "GET",
  });

export const getCategory = (id) =>
  axios({
    url: `${connection_string}/category/admin/get/${id}`,
    method: "GET",
  });
