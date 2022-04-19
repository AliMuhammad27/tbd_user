import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { queryClient } from "../..";
import { getCategory } from "../../Apis/Category";
import { getProductsByCategory } from "../../Apis/Product";
import Pagination from "../../Components/Pagination";
import ProductCard from "../../Components/ProductCard";
import ProductListFilter from "../../Components/ProductListFilter";
import Searchbar from "../../Components/Searchbar";
import ProductCardSkeleton from "../../Components/SkeletonCards/ProductCard";
import { query_stale_time } from "../../Helpers/Helpers";

export default function ListProducts({ match }) {
  const [search_string, setSearchString] = useState("");
  const [page, setPage] = useState(1);
  const [perPage] = useState(10);
  const [sort, setSort] = useState("");
  const [min, setMin] = useState();
  const [max, setMax] = useState();
  const [rating, setRating] = useState();

  const { isLoading, data } = useQuery(
    [
      "products",
      match?.params?.category,
      match?.params?.sub_category,
      page,
      perPage,
      search_string,
      sort,
      min,
      max,
      rating,
    ],
    () =>
      getProductsByCategory(
        match?.params?.category,
        match?.params?.sub_category ? match?.params?.sub_category : "",
        page,
        perPage,
        search_string,
        sort,
        min,
        max,
        rating
      ),
    { keepPreviousData: true, staleTime: query_stale_time }
  );

  // Prefetch the next page!
  useEffect(() => {
    if (data?.data?.products?.hasNextPage) {
      queryClient.prefetchQuery(
        [
          "products",
          match?.params?.category,
          match?.params?.sub_category,
          page + 1,
          perPage,
          search_string,
          sort,
          min,
          max,
          rating,
        ],
        () =>
          getProductsByCategory(
            match?.params?.category,
            match?.params?.sub_category ? match?.params?.sub_category : "",
            page + 1,
            perPage,
            search_string,
            sort,
            min,
            max,
            rating
          )
      );
    }
  }, [data, page, queryClient]);

  const { data: category } = useQuery(
    ["category", match?.params?.category],
    () => match?.params?.category && getCategory(match?.params?.category),
    { staleTime: query_stale_time }
  );

  return (
    <section>
      <div className="container">
        <div className="row p-55-0">
          <div className="col-lg-3 col-sm-12 col-xs-12">
            <ProductListFilter
              setSort={setSort}
              min={min}
              max={max}
              setMin={setMin}
              setMax={setMax}
              setRating={setRating}
            />
          </div>
          <div className="col-lg-9 col-sm-12 col-xs-12">
            <div className="row">
              <div className="col-lg-12 text-center">
                <h3 className="ff-thunder">{category?.data?.category?.name}</h3>
              </div>
              <Searchbar setSearchString={setSearchString} />
            </div>
            <div className="row  mt-40">
              {/* ============= product =============  */}
              {isLoading ? (
                <>
                  <div className="col-lg-4 col-sm-12 col-xs-12 mt-10 mb-10">
                    <ProductCardSkeleton />
                  </div>
                  <div className="col-lg-4 col-sm-12 col-xs-12 mt-10 mb-10">
                    <ProductCardSkeleton />
                  </div>
                  <div className="col-lg-4 col-sm-12 col-xs-12 mt-10 mb-10">
                    <ProductCardSkeleton />
                  </div>
                  <div className="col-lg-4 col-sm-12 col-xs-12 mt-10 mb-10">
                    <ProductCardSkeleton />
                  </div>
                  <div className="col-lg-4 col-sm-12 col-xs-12 mt-10 mb-10">
                    <ProductCardSkeleton />
                  </div>
                  <div className="col-lg-4 col-sm-12 col-xs-12 mt-10 mb-10">
                    <ProductCardSkeleton />
                  </div>
                </>
              ) : data?.data?.products?.docs?.length === 0 ? (
                <div className="col-12 mt-10 mb-10">
                  <h1>No Items Found</h1>
                </div>
              ) : (
                data?.data?.products?.docs?.map((product) => (
                  <ProductCard key={product._id} product={product} />
                ))
              )}

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
