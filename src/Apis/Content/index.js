import axios from "axios";
import { connection_string } from "../../Util/connection_strings";

export const getContent = () =>
  axios({
    url: `${connection_string}/content/`,
    method: "GET",
  });
