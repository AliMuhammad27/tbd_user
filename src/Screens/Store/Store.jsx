import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { queryClient } from "../..";
import { getStoreDetails } from "../../Apis/Store";
import Pagination from "../../Components/Pagination";
import ProductCard from "../../Components/ProductCard";
import { query_stale_time } from "../../Helpers/Helpers";
import Searchbar from "../../Components/Searchbar";
import LoadingView from "../../Components/LoadingView";

export default function Store({ match }) {
  const [search_string, setSearchString] = useState("");
  const [page, setPage] = useState(1);
  const [perPage] = useState(10);

  const { isLoading, data } = useQuery(
    ["store", match?.params?.id, page, perPage, search_string],
    () => getStoreDetails(match?.params?.id, page, perPage, search_string),
    { keepPreviousData: true, staleTime: query_stale_time }
  );

  // Prefetch the next page!
  useEffect(() => {
    if (data?.data?.products?.hasNextPage) {
      queryClient.prefetchQuery(
        ["products", match?.params?.id, page + 1, perPage, search_string],
        () =>
          getStoreDetails(match?.params?.id, page + 1, perPage, search_string)
      );
    }
  }, [data, page, queryClient]);

  if (isLoading) return <LoadingView />;

  return (
    <section className="p-55-0">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <h3 className="ff-thunder">{data?.data?.vendor?.storeName}</h3>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-12 text-center">
            <div className="owner-store mt-40">
              <div className=" text-center">
                <img
                  src="img/testimonial.jpg"
                  className="img-fluid image-cicle"
                />
              </div>
              <h4 className="ff-thunder">{data?.data?.vendor?.name}</h4>
              <p className="fc-orange">
                {data?.data?.vendor?.city_name},{" "}
                {data?.data?.vendor?.country_name}
              </p>
              <p style={{ whiteSpace: "pre-line" }}>
                {data?.data?.vendor?.description}
              </p>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <Searchbar setSearchString={setSearchString} />
          <div className="col-lg-12">
            <div className="row  mt-40">
              {/* ============= product =============  */}
              {data?.data?.products?.docs?.map((product) => (
                <ProductCard key={product?._id} product={product} lg={3} />
              ))}

              {/* ============= product =============  */}
            </div>
            <Pagination
              totalPages={data?.data?.products?.totalPages}
              currentPage={page}
              setPage={setPage}
              hasNextPage={data?.data?.products?.hasNextPage}
              hasPrevPage={data?.data?.products?.hasPrevPage}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
