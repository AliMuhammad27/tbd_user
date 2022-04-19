import moment from "moment";
import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import { queryClient } from "../..";
import { getNotifications } from "../../Apis/Notification";
import Pagination from "../../Components/Pagination";
import { query_stale_time } from "../../Helpers/Helpers";

export default function Notification() {
  const [page, setPage] = useState(1);
  const [perPage] = useState(10);

  const { isLoading, data } = useQuery(
    ["notifications", page, perPage],
    () => getNotifications(page, perPage),
    { keepPreviousData: true, staleTime: query_stale_time }
  );

  // Prefetch the next page!
  useEffect(() => {
    if (data?.data?.notifications?.hasNextPage) {
      queryClient.prefetchQuery(["notifications", page + 1, perPage], () =>
        getNotifications(page + 1, perPage)
      );
    }
  }, [data, page, queryClient]);

  return (
    <section className="p-55-0">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <h1 className="ff-thunder fc-purple">Notification</h1>
            <div className="notificationBx mt-30">
              {data?.data?.notifications?.docs?.map((notification) => (
                <div className="notification-list">
                  <div className="media align-items-center d-sm-flex d-block text-sm-left text-center">
                    <i className="fas fa-bell notification-bell" />
                    <div className="media-body mt-20">
                      <h6 className="fc-black">{notification?.message}</h6>
                      <p className="fc-orange">
                        {moment(notification?.createdAt).format("LL | hh:mm a")}
                      </p>
                    </div>
                    <div className="ml-sm-2">
                      <Link
                        to={`/order/${notification?.payload?.id}`}
                        className="btn-orange"
                      >
                        View
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
              <Pagination
                totalPages={data?.data?.notifications?.totalPages}
                currentPage={page}
                setPage={setPage}
                hasNextPage={data?.data?.notifications?.hasNextPage}
                hasPrevPage={data?.data?.notifications?.hasPrevPage}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
