import React from "react";

export default function FormHeading({ selected_form }) {
  return (
    <div
      className="row justify-content-between"
      style={{ textAlign: "center", marginTop: "40px" }}
    >
      <div className="col-lg-2">
        <span className={`step2 ${selected_form === 1 && "finish"}`}>
          <i className="fas fa-address-card fa-3x" />
        </span>
        <h5 className="fc-orange mt-20">Address</h5>
      </div>
      <div className="col-lg-2">
        <div className="step-border-finish"></div>
      </div>
      <div className="col-lg-2">
        <span className={`step2 ${selected_form === 2 && "finish"}`}>
          <i className="far fa-credit-card fa-3x" />
        </span>
        <h5 className="fc-lgray mt-20">Payment</h5>
      </div>
      <div className="col-lg-2">
        <div className="step-border"></div>
      </div>
      <div className="col-lg-2">
        <span className={`step2 ${selected_form === 3 && "finish"}`}>
          <i className="fas fa-check-square fa-3x" />
        </span>
        <h5 className="fc-lgray mt-20">Confirm</h5>
      </div>
    </div>
  );
}
