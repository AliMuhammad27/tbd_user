import moment from "moment";
import React, { useState } from "react";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import { getOrder } from "../../Apis";
import CartSummary from "../../Components/CartSummary";
import LoadingView from "../../Components/LoadingView";
import OrderCard from "../../Components/OrderCard";
import { query_stale_time } from "../../Helpers/Helpers";

export default function OrderDetails({ match }) {
  const { isLoading, data, isFetching, refetch } = useQuery(
    ["product", match?.params?.id],
    () => match?.params?.id && getOrder(match?.params?.id),
    { staleTime: query_stale_time }
  );

  if (isLoading) return <LoadingView />;

  return (
    <section className="p-55-0">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <h2 className="ff-thunder fc-purple">ORDER DETAILS</h2>
          </div>
          <div className="col-lg-12">
            <div className="formBx2 p-40 mt-20">
              <div className="row">
                <div className="col-lg-6">
                  <h3 className="ff-thunder fc-orange">ORDER DETAILS</h3>
                </div>
                <div className="col-lg-6 text-right">
                  <p>
                    Status:{" "}
                    <span className="btn-yellow ml-2">
                      {data?.data?.order?.order_status}
                    </span>
                  </p>
                </div>
                <div className="col-lg-6 mt-30">
                  <div className="row">
                    <div className="col-lg-4">
                      <p className="ff-thunder fc-purple">Name</p>
                    </div>
                    <div className="col-lg-8">
                      <p>{data?.data?.order?.name}</p>
                    </div>
                    <div className="col-lg-4">
                      <p className="ff-thunder fc-purple">Email Address</p>
                    </div>
                    <div className="col-lg-8">
                      <p>{data?.data?.order?.email_address}</p>
                    </div>
                    <div className="col-lg-4">
                      <p className="ff-thunder fc-purple">Date</p>
                    </div>
                    <div className="col-lg-8">
                      <p>
                        {moment(data?.data?.order?.createdAt).format(
                          "LL | hh:mm a"
                        )}
                      </p>
                    </div>
                    <div className="col-lg-4">
                      <p className="ff-thunder fc-purple">Phone Number</p>
                    </div>
                    <div className="col-lg-8">
                      <p>{data?.data?.order?.phone_number}</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 mt-30">
                  <div className="row">
                    <div className="col-lg-4">
                      <p className="ff-thunder fc-purple">Order ID</p>
                    </div>
                    <div className="col-lg-8">
                      <p>{data?.data?.order?._id}</p>
                    </div>
                    <div className="col-lg-4">
                      <p className="ff-thunder fc-purple">Payment Method</p>
                    </div>
                    <div className="col-lg-8">
                      <p>{data?.data?.order?.payment_method}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-6">
                  <h3 className="ff-thunder fc-orange">BILLING ADDRESS</h3>
                </div>
                <div className="col-lg-6 ">
                  <h3 className="ff-thunder fc-orange">SHIPPING ADDRESS</h3>
                </div>
                <div className="col-lg-6 mt-30">
                  {Object.keys(data?.data?.order?.billing_address).map(
                    (key, index) => (
                      <p>{data?.data?.order?.billing_address[key]}</p>
                    )
                  )}
                </div>
                <div className="col-lg-6 mt-30">
                  {Object.keys(data?.data?.order?.shipping_address).map(
                    (key, index) => (
                      <p>{data?.data?.order?.shipping_address[key]}</p>
                    )
                  )}
                </div>
              </div>
              <div className="row">
                <div className="col-lg-12">
                  <div className="table-responsive">
                    <table className="table tableCheckout mt-5">
                      <thead className="thead-orange">
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
                      </thead>
                      <tbody>
                        <OrderCard order={data?.data?.order} />
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* formBx End */}
          <div className="col-lg-8 col-sm-12 mt-20"></div>
          <div className="col-lg-4 col-sm-12 mt-40">
            <CartSummary
              disable_btn={true}
              sub_total={data?.data?.order?.price_info?.sub_total}
              tax={data?.data?.order?.price_info?.tax}
              total={data?.data?.order?.price_info?.total}
              tax_percentage={data?.data?.order?.price_info?.tax_percentage}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
