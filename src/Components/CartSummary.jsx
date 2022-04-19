import React from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

export default function CartSummary({
  disable_btn,
  sub_total,
  tax,
  total,
  tax_percentage,
  history,
  user,
}) {
  return (
    <div className="cart-summary">
      <div className="summary-head text-center">
        <p className="ff-thunder fc-white">Summary</p>
      </div>
      <div className="summary-body">
        <div className="d-flex flex-row justify-content-between">
          <div className="p-2">
            <p className="ff-thunder fc-purple">Sub Total</p>
          </div>
          <div className="p-2">
            <p className="fc-lgray">${sub_total}</p>
          </div>
        </div>
        <div className="d-flex flex-row justify-content-between">
          <div className="p-2">
            <p className="ff-thunder fc-purple">Tax {tax_percentage}%</p>
          </div>
          <div className="p-2">
            <p className="fc-lgray">${tax}</p>
          </div>
        </div>
        <div className="d-flex flex-row justify-content-between">
          <div className="p-2">
            <p className="ff-thunder fc-orange">Grand Total</p>
          </div>
          <div className="p-2">
            <p className="fc-orange">${total}</p>
          </div>
        </div>
      </div>
      {!disable_btn && (
        <div className="summary-footer text-center">
          <button
            className="btn-orange"
            type="button"
            onClick={() => {
              if (user?._id) history.push("/checkout");
              else
                Swal.fire({
                  title: "Checkout",
                  text: "Do you want to continue as a guest or login?",
                  confirmButtonText: "LOGIN",
                  confirmButtonColor: "#F5722B",
                  cancelButtonText: "#fff",
                  cancelButtonText: "GUEST",
                  showCancelButton: true,
                }).then((result) => {
                  if (!result.isConfirmed) history.push("/checkout");
                  else history.push("/login");
                });
            }}
          >
            PROCEED TO CHECKOUT
          </button>
        </div>
      )}
    </div>
  );
}
