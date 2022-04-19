import axios from "axios";
import { connection_string } from "../../Util/connection_strings";

export const getFormattedUserCart = (data) =>
  axios({
    url: `${connection_string}/user/format-cart`,
    method: "GET",
    params: {
      cart: JSON.stringify(data),
    },
  });
