import React from "react";
import { Link } from "react-router-dom";
import { image_url } from "../Util/connection_strings";

export default function OrderCard({ order }) {
  return (
    <>
      <tr>
        <td colSpan={6}>
          <h3 className="ff-thunder fc-purple mb-0" />
        </td>
        <td colSpan={6} />
      </tr>
      <tr className="bb-double">
        <td>
          <img
            src={`${image_url}${order?.product?.product_id?.images[0]}`}
            className="img-fluid"
          />
        </td>
        <td>{order?.product?.product_id?.name}</td>
        <td>
          <div className="quantity buttons_added">
            <input
              type="number"
              disabled
              name="quantity"
              title="Qty"
              className="input-text qty text"
              value={order?.product?.quantity}
              readOnly
            />
          </div>
        </td>
        <td>${order?.product?.product_id?.price}</td>
        <td>${order?.price_info?.tax}</td>
        <td>${order?.price_info?.shipping_cost}</td>
        <td align="center">${order?.price_info?.total}</td>
        <td align="center">{order?.order_status}</td>
        <td>
          <Link to={`/order/${order?._id}`}>View Order</Link>
        </td>
      </tr>
    </>
  );
}
