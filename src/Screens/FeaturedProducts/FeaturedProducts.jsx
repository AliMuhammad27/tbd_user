import React from "react";
import { useQuery } from "react-query";
import { getRandomProducts } from "../../Apis/Product";
import ProductCard from "../../Components/ProductCard";
import { query_stale_time } from "../../Helpers/Helpers";
import ProductCardSkeleton from "../../Components/SkeletonCards/ProductCard";

export default function FeaturedProducts() {
  const { isLoading, data } = useQuery(
    ["featured_products"],
    () => getRandomProducts(),
    {
      staleTime: query_stale_time,
    }
  );

  return (
    <section className="p-55-0">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <h1 className="ff-thunder fc-purple">FEATURED PRODUCTS</h1>
            <p
              className="ff-thunder fc-orange"
              daata-aoos="fade-up"
              daata-aoos-duration="1000"
            >
              We support small producers by selling handcrafted, sustainable
              products.
            </p>
          </div>
          <div className="row  mt-40">
            {/* ============= product =============  */}
            {isLoading ? (
              <>
                <div className="col-lg-3 col-sm-12 col-xs-12 mt-10 mb-10">
                  <ProductCardSkeleton />
                </div>
                <div className="col-lg-3 col-sm-12 col-xs-12 mt-10 mb-10">
                  <ProductCardSkeleton />
                </div>
                <div className="col-lg-3 col-sm-12 col-xs-12 mt-10 mb-10">
                  <ProductCardSkeleton />
                </div>
                <div className="col-lg-3 col-sm-12 col-xs-12 mt-10 mb-10">
                  <ProductCardSkeleton />
                </div>
                <div className="col-lg-3 col-sm-12 col-xs-12 mt-10 mb-10">
                  <ProductCardSkeleton />
                </div>
                <div className="col-lg-3 col-sm-12 col-xs-12 mt-10 mb-10">
                  <ProductCardSkeleton />
                </div>
                <div className="col-lg-3 col-sm-12 col-xs-12 mt-10 mb-10">
                  <ProductCardSkeleton />
                </div>
                <div className="col-lg-3 col-sm-12 col-xs-12 mt-10 mb-10">
                  <ProductCardSkeleton />
                </div>
              </>
            ) : data?.data?.products?.docs?.length === 0 ? (
              <div className="col-12 mt-10 mb-10">
                <h1>No Items Found</h1>
              </div>
            ) : (
              data?.data?.products?.map((product) => (
                <ProductCard key={product?._id} product={product} lg={3} />
              ))
            )}
            {/* ============= product =============  */}
          </div>
        </div>
      </div>
    </section>
  );
}
