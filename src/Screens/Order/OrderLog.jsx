import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import { queryClient } from "../..";
import { getMyOrders } from "../../Apis";
import OrderCard from "../../Components/OrderCard";
import Pagination from "../../Components/Pagination";
import TableProductCard from "../../Components/SkeletonCards/TableProductCard";
import { query_stale_time } from "../../Helpers/Helpers";

export default function OrderLog() {
  const [page, setPage] = useState(1);
  const [perPage] = useState(10);

  const { isLoading, data, isFetching, refetch } = useQuery(
    ["orders", page, perPage],
    () => getMyOrders(page, perPage),
    { keepPreviousData: true, staleTime: query_stale_time }
  );

  // Prefetch the next page!
  useEffect(() => {
    if (data?.data?.orders?.hasNextPage) {
      queryClient.prefetchQuery(["orders", page + 1, perPage], () =>
        getMyOrders(page + 1, perPage)
      );
    }
  }, [data, page, queryClient]);

  return (
    <section className="p-55-0">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <h1 className="ff-thunder fc-purple">Order Logs</h1>
          </div>
          <div className="table-responsive">
            <table className="table tableCheckout mt-5">
              <thead className="thead-orange">
                <tr>
                  <th scope="col" className="br-left">
                    IMAGE
                  </th>
                  <th scope="col">PRODUCT</th>
                  <th scope="col">QUANTITY</th>
                  <th scope="col">UNIT PRICE</th>
                  <th scope="col">TAX</th>
                  <th scope="col">SHIPMENT COST</th>
                  <th scope="col">TOTAL PRICE</th>
                  <th scope="col">ITEM STATUS</th>
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
                {isLoading ? (
                  <tr class="odd">
                    <td valign="top" colspan="9" className="dataTables_empty">
                      <TableProductCard />
                    </td>
                  </tr>
                ) : (
                  data?.data?.orders?.docs?.map((order) => (
                    <>
                      <OrderCard order={order} />
                      <tr class="odd">
                        <td
                          valign="top"
                          colspan="9"
                          className="dataTables_empty"
                        >
                          <hr />
                        </td>
                      </tr>
                    </>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
        <Pagination
          totalPages={data?.data?.orders?.totalPages}
          currentPage={page}
          setPage={setPage}
          hasNextPage={data?.data?.orders?.hasNextPage}
          hasPrevPage={data?.data?.orders?.hasPrevPage}
        />
      </div>
    </section>
  );
}
