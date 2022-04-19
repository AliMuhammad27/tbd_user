import axios from "axios";
import { connection_string } from "../../Util/connection_strings";

export const getRandomCategoriesHome = () =>
  axios({
    url: `${connection_string}/category/user/random-4`,
    method: "GET",
  });
