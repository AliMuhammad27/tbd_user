import axios from "axios";
import { connection_string } from "../../Util/connection_strings";

export const getStoreDetails = (id, page, perPage, search_string) =>
  axios({
    url: `${connection_string}/vendor/user/get/${id}`,
    method: "GET",
    params: {
      page,
      perPage,
      searchString: search_string,
    },
  });
