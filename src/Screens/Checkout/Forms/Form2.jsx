import React, { useEffect } from "react";

export default function Form2({
  handleChangeForm,
  handleInput,
  form_data,
  setFormData,
}) {
  return (
    <div className="tab mt-30" style={{ display: "block" }}>
      <h2 className="ff-thunder fc-purple mt-30">ENTER CARD INFO</h2>
      <h4 className="ff-thunder fc-orange mt-30">PAYMENT</h4>
      <div className="form-row">
        <div className="col-lg-6 col-sm-12 mt-30">
          <label>Card Holder Name*</label>
          <input
            type="text"
            className="form-control checkout"
            placeholder="Email Card Holder Name"
            name="card_holder_name"
            value={form_data.card_holder_name}
            onChange={handleInput}
          />
        </div>
        <div className="col-lg-6 col-sm-12 mt-30">
          <label>Card Number*</label>
          <input
            type="number"
            className="form-control checkout"
            placeholder="Email Card Numebr"
            name="card_number"
            value={form_data.card_number}
            onChange={handleInput}
          />
        </div>
        <div className="col-lg-6 col-sm-12 mt-30">
          <label>Card CVV*</label>
          <input
            type="number"
            className="form-control checkout"
            placeholder="Email Card CVV"
            name="cvv"
            value={form_data.cvv}
            onChange={handleInput}
          />
        </div>
        <div className="col-lg-6 col-sm-12 mt-30">
          <label>Expiry Date*</label>
          <input
            name="card_expiration_month"
            type="month"
            className="form-control checkout"
            placeholder="Expiry Month"
            value={form_data?.card_expiration_month}
            onChange={handleInput}
          />
        </div>
      </div>
      <div className="form-row">
        <button
          type="button"
          className="btn-lgray mt-30 m-1"
          onClick={() => handleChangeForm(1)}
        >
          BACK
        </button>
        <button
          type="button"
          className="btn-orange mt-30 m-1"
          onClick={() => {
            const expiry_year = form_data?.card_expiration_month?.split("-")[0];
            const expiry_month =
              form_data?.card_expiration_month?.split("-")[1];
            setFormData({
              ...form_data,
              card_expiry_year: expiry_year,
              card_expiry_month: expiry_month,
            });
            handleChangeForm(3);
          }}
        >
          CONTINUE
        </button>
      </div>
    </div>
  );
}
