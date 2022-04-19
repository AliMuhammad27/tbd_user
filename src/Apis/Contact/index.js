import axios from "axios";
import { connection_string } from "../../Util/connection_strings";

export const sendForm = (data) =>
  axios({
    url: `${connection_string}/feedback/create`,
    method: "POST",
    data,
  });
