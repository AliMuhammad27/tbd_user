import React from "react";
import CountryDropDown from "../../../Components/CountryDropDown";

export default function Form1({
  handleChangeForm,
  handleInput,
  form_data,
  setDiffBilling,
  diffBilling,
  handleBillingAddress,
  handleShippingAddresss,
  setFormData,
}) {
  const onChangeCountryBilling = (country) => {
    setFormData({
      ...form_data,
      billing_address: {
        ...form_data.billing_address,
        country,
      },
    });
  };

  const onChangeCountryShipping = (country) => {
    setFormData({
      ...form_data,
      shipping_address: {
        ...form_data.shipping_address,
        country,
      },
    });
  };

  return (
    <div className="tab mt-30" style={{ display: "block" }}>
      <h2 className="ff-thunder fc-purple mt-30">ADDRESS</h2>
      <h4 className="ff-thunder fc-orange mt-10">PERSONAL INFORMATION</h4>
      <div className="form-row">
        <div className="col-lg-6 col-sm-12 mt-30">
          <label>Email Address*</label>
          <input
            type="text"
            className="form-control checkout"
            id="email"
            name="email_address"
            onChange={handleInput}
            value={form_data?.email_address}
          />
        </div>
        <div className="col-lg-6 col-sm-12 mt-30">
          <label>Phone Number*</label>
          <input
            type="number"
            className="form-control checkout"
            id="phone"
            name="phone_number"
            onChange={handleInput}
            value={form_data?.phone_number}
          />
        </div>
      </div>
      <h4 className="ff-thunder fc-orange mt-30">BILLING ADDRESS</h4>
      <div className="form-row">
        <div className="col-lg-12 col-sm-12 mt-30">
          <label>Name*</label>
          <input
            type="text"
            className="form-control checkout"
            id="name"
            name="name"
            onChange={handleInput}
            value={form_data?.name}
          />
        </div>
      </div>
      <div className="form-row">
        <div className="col-lg-12 col-sm-12 mt-30">
          <label>Address*</label>
          <textarea
            rows={5}
            className="form-control checkout"
            id="address"
            name="address"
            onChange={handleBillingAddress}
            value={form_data?.billing_address?.address}
          />
        </div>
      </div>
      <div className="form-row">
        <div className="col-lg-6 col-sm-12 mt-30">
          <label>City*</label>
          <input
            type="text"
            className="form-control checkout"
            id="city"
            name="city"
            onChange={handleBillingAddress}
            value={form_data?.billing_address?.city}
          />
        </div>
        <div className="col-lg-6 col-sm-12 mt-30">
          <label>Zip Code*</label>
          <input
            type="text"
            className="form-control checkout"
            id="zip_code"
            name="zip_code"
            onChange={handleBillingAddress}
            value={form_data?.billing_address?.zip_code}
          />
        </div>
      </div>
      <div className="form-row">
        <div className="col-lg-6 col-sm-12 mt-30">
          <label>Country*</label>
          <CountryDropDown
            className="form-control checkout"
            onChange={onChangeCountryBilling}
            value={form_data?.billing_address?.country}
          />
        </div>
        <div className="col-lg-6 col-sm-12 mt-30">
          <label>State*</label>
          <input
            type="text"
            className="form-control checkout"
            id="state"
            name="email"
            name="state"
            onChange={handleBillingAddress}
            value={form_data?.billing_address?.state}
          />
        </div>
      </div>
      <div className="form-check mt-10">
        <input
          type="checkbox"
          className="form-check-input"
          id="exampleCheck1"
          defaultValue="red"
          checked={diffBilling}
          onChange={(e) => setDiffBilling(e.target.checked)}
        />
        <label className="form-check-label" htmlFor="exampleCheck1">
          Ship To A Different Address
        </label>
      </div>
      {diffBilling && (
        <div className="red box">
          <h4 className="ff-thunder fc-orange mt-30">SHIPPING ADDRESS</h4>
          <div className="form-row">
            <div className="col-lg-12 col-sm-12 mt-30">
              <label>Address*</label>
              <textarea
                rows={5}
                className="form-control checkout"
                id="address"
                name="address"
                onChange={handleShippingAddresss}
                value={form_data?.shipping_address?.address}
              />
            </div>
          </div>
          <div className="form-row">
            <div className="col-lg-6 col-sm-12 mt-30">
              <label>City*</label>
              <input
                type="text"
                className="form-control checkout"
                id="city"
                name="city"
                onChange={handleShippingAddresss}
                value={form_data?.shipping_address?.city}
              />
            </div>
            <div className="col-lg-6 col-sm-12 mt-30">
              <label>Zip Code*</label>
              <input
                type="text"
                className="form-control checkout"
                id="zip_code"
                name="zip_code"
                onChange={handleShippingAddresss}
                value={form_data?.shipping_address?.zip_code}
              />
            </div>
          </div>
          <div className="form-row">
            <div className="col-lg-6 col-sm-12 mt-30">
              <label>Country*</label>
              <CountryDropDown
                className="form-control checkout"
                onChange={onChangeCountryShipping}
                value={form_data?.shipping_address?.country}
              />
            </div>
            <div className="col-lg-6 col-sm-12 mt-30">
              <label>State*</label>
              <input
                type="text"
                className="form-control checkout"
                id="state"
                name="state"
                onChange={handleShippingAddresss}
                value={form_data?.shipping_address?.state}
              />
            </div>
          </div>
        </div>
      )}
      <div className="form-row">
        <button
          type="button"
          className="btn-orange mt-30"
          onClick={() => {
            if (!diffBilling) {
              setFormData({
                ...form_data,
                shipping_address: form_data.billing_address,
              });
            }
            handleChangeForm(2);
          }}
        >
          CONTINUE
        </button>
      </div>
    </div>
  );
}
