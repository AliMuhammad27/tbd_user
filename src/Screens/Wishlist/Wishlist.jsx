import React from "react";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import { getWishlist } from "../../Apis";
import WishlistCard from "../../Components/WishlistCard";
import { query_stale_time } from "../../Helpers/Helpers";

export default function Wishlist() {
  const { isLoading, data, refetch, isFetching } = useQuery(
    ["wishlist"],
    () => getWishlist(),
    { staleTime: query_stale_time }
  );

  return (
    <section className="p-55-0">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <h2 className="ff-thunder fc-purple">WISHLIST</h2>
          </div>
          <div className="col-lg-12">
            <div className="table-responsive">
              <table className="table myTable mt-5">
                <thead className="thead-orange">
                  <tr>
                    <th scope="col" className="br-left">
                      IMAGE
                    </th>
                    <th scope="col">PRODUCT</th>
                    <th scope="col">UNIT PRICE</th>
                    <th scope="col">AVAILABILITY</th>
                    <th scope="col">ACTION</th>
                    <th scope="col" />
                    <th scope="col" className="br-right">
                      {isFetching ? (
                        <i className="fas fa-spinner fa-spin"></i>
                      ) : (
                        <Link to="#" onClick={() => refetch()}>
                          <i className="fas fa-sync fc-white" />
                        </Link>
                      )}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {data?.data?.wishlist?.map((wishlist) => (
                    <WishlistCard wishlist={wishlist} refetch={refetch} />
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
