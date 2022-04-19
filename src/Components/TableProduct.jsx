import React from "react";
import { Link } from "react-router-dom";
import { image_url } from "../Util/connection_strings";

export default function TableProduct({
  disable_controls,
  item,
  setCart,
  index,
  cart,
}) {
  return (
    <>
      <tr>
        <td colSpan={6}>
          <h3 className="ff-thunder fc-purple mb-0">
            {item?.product?.vendor?.storeName}
          </h3>
        </td>
        <td colSpan={6}>
          <Link to={`/store/${item?.product?.vendor?._id}`}>View Store</Link>
        </td>
      </tr>
      <tr className="bb-double">
        <td>
          <img
            src="img/products/p1.png"
            className="img-fluid"
            src={`${image_url}${item?.product?.images[0]}`}
            style={{ height: 80, width: 80 }}
          />
        </td>
        <td>
          <Link to={`/product/${item?.product?._id}`}>
            {item?.product?.name}
          </Link>
        </td>
        <td>
          <div className="quantity buttons_added">
            {!disable_controls && (
              <input
                type="button"
                defaultValue="-"
                className="minus btn-minus-cstm"
                onClick={() => {
                  if (item?.quantity > 1) {
                    const temp_arr = [...cart];
                    temp_arr[index].quantity = item?.quantity - 1;
                    setCart(temp_arr);
                    localStorage.setItem("cart", JSON.stringify(temp_arr));
                  }
                }}
              />
            )}
            <input
              type="number"
              step={1}
              min={1}
              max
              name="quantity"
              title="Qty"
              className="input-text qty text"
              size={4}
              pattern
              inputMode
              value={item?.quantity}
              onChange={(e) => {
                if (
                  e.target.value >= 1 &&
                  e.target.value <= item?.product.stock
                ) {
                  const temp_arr = [...cart];
                  temp_arr[index].quantity = parseInt(e.target.value);
                  setCart(temp_arr);
                  localStorage.setItem("cart", JSON.stringify(temp_arr));
                }
              }}
              disabled={disable_controls}
            />
            {!disable_controls && (
              <input
                type="button"
                defaultValue="+"
                className="plus btn-plus-cstm"
                onClick={() => {
                  if (parseInt(item?.quantity) < item?.product.stock) {
                    const temp_arr = [...cart];
                    temp_arr[index].quantity = parseInt(item?.quantity) + 1;
                    setCart(temp_arr);
                    localStorage.setItem("cart", JSON.stringify(temp_arr));
                  }
                }}
              />
            )}
          </div>
        </td>
        <td>${item?.product?.price}</td>
        <td>${item?.total_price}</td>
        <td>${item?.tax}</td>
        {!disable_controls && (
          <td>
            <Link
              to="#"
              onClick={() => {
                const temp_arr = [...cart];
                temp_arr.splice(index, 1);
                setCart(temp_arr);
                localStorage.setItem("cart", JSON.stringify(temp_arr));
              }}
            >
              <i className="far fa-trash-alt fc-lgray" />
            </Link>
            <Link to="#">
              <i className="far fa-heart fc-lgray" />
            </Link>
          </td>
        )}
      </tr>
    </>
  );
}
