import React, { useState, useEffect } from "react";

import CartSummary from "../../Components/CartSummary";
import Form1 from "./Forms/Form1";
import Form2 from "./Forms/Form2";
import Form3 from "./Forms/Form3";
import FormHeading from "./Forms/FormHeading";
import { query_stale_time } from "../../Helpers/Helpers";
import { useMutation, useQuery } from "react-query";
import {
  postOrderGuest,
  postOrderUser,
  getFormattedUserCart,
} from "../../Apis";
import Error from "../../Components/Modal.Error";
import Success from "../../Components/Modal.Success";
import Swal from "sweetalert2";
import { useRecoilValue } from "recoil";
import { userState } from "../../Recoil";

export default function Checkout({ history }) {
  const user = useRecoilValue(userState);
  const [cart, setCart] = useState([]);
  const [selected_form, setSelectedForm] = useState(1);
  const [form_data, setFormData] = useState({
    email_address: "",
    phone_number: "",
    name: "",
    billing_address: {
      address: "",
      city: "",
      zip_code: "",
      state: "",
      country: "",
    },
    shipping_address: {
      address: "",
      city: "",
      zip_code: "",
      state: "",
      country: "",
    },
    card_holder_name: "",
    card_number: "",
    card_expiry_month: "",
    card_expiry_year: "",
    cvv: "",
  });
  const [orderLoading, setOrderLoading] = useState(false);
  const [diffBilling, setDiffBilling] = useState(false);
  const { isFetching, isLoading, data, refetch } = useQuery(
    ["cart_products", cart],
    () => cart?.length > 0 && getFormattedUserCart(cart),
    {
      staleTime: query_stale_time,
    }
  );

  const { mutate, isLoading: orderLoadingGuest } = useMutation(
    (data) => postOrderGuest(data),
    {
      onSuccess: (res) => {
        console.log(res.data);
        Success(res?.data?.message);
        history.replace("/");
        localStorage.setItem("cart", JSON.stringify([]));
      },
      onError: (err) => Error(err?.response?.data?.message),
    }
  );

  const { mutate: postOrderUserMutate, isLoading: orderLoadingUser } =
    useMutation((data) => postOrderUser(data), {
      onSuccess: (res) => {
        console.log(res.data);
        Success(res?.data?.message);
        history.replace("/order/logs");
        localStorage.setItem("cart", JSON.stringify([]));
      },
      onError: (err) => Error(err?.response?.data?.message),
    });

  useEffect(() => {
    const _cart = localStorage.getItem("cart")
      ? JSON.parse(localStorage.getItem("cart"))
      : [];
    setCart(_cart);
  }, []);

  useEffect(() => {
    if (orderLoadingGuest || orderLoadingUser) setOrderLoading(true);
    else setOrderLoading(false);
  }, [orderLoadingGuest, orderLoadingUser]);

  const handlePlaceOrder = () => {
    const cart_data = cart.map((item) => {
      return {
        product_id: item.product_id,
        quantity: item.quantity,
        variations: [item.variations?.size?._id, item.variations?.color?._id],
      };
    });
    const order_data = {
      ...form_data,
      products: cart_data,
      payment_method: "Card",
    };
    if (user?._id) postOrderUserMutate(order_data);
    else mutate(order_data);
  };

  const handleInput = (e) => {
    setFormData({
      ...form_data,
      [e.target.name]: e.target.value,
    });
  };

  const handleBillingAddress = (e) => {
    setFormData({
      ...form_data,
      billing_address: {
        ...form_data.billing_address,
        [e.target.name]: e.target.value,
      },
    });
  };

  const handleShippingAddresss = (e) => {
    setFormData({
      ...form_data,
      shipping_address: {
        ...form_data.shipping_address,
        [e.target.name]: e.target.value,
      },
    });
  };

  const handleChangeForm = (value) => {
    setSelectedForm(value);
  };

  return (
    <section>
      <div className="container">
        <div className="row p-55-0">
          <div className="col-lg-12 text-center">
            <h1 className="ff-thunder fc-purple">CHECKOUT</h1>
          </div>
          <div className="col-lg-8">
            <form id="regForm" action="/action_page.php">
              <FormHeading selected_form={selected_form} />
              {selected_form === 1 && (
                <Form1
                  handleChangeForm={handleChangeForm}
                  handleInput={handleInput}
                  form_data={form_data}
                  setDiffBilling={setDiffBilling}
                  diffBilling={diffBilling}
                  handleBillingAddress={handleBillingAddress}
                  handleShippingAddresss={handleShippingAddresss}
                  setFormData={setFormData}
                />
              )}
              {selected_form === 2 && (
                <Form2
                  handleChangeForm={handleChangeForm}
                  handleInput={handleInput}
                  form_data={form_data}
                  setFormData={setFormData}
                />
              )}
              {selected_form === 3 && (
                <Form3
                  handleChangeForm={handleChangeForm}
                  handleInput={handleInput}
                  form_data={form_data}
                  data={data?.data?.cart}
                  isLoading={isLoading}
                  isFetching={isFetching}
                  refetch={refetch}
                  handlePlaceOrder={handlePlaceOrder}
                  orderLoading={orderLoading}
                />
              )}
            </form>
          </div>
          {/* ================= checkout summary ====================== */}
          <div className="col-lg-4 col-sm-12 mt-40">
            <CartSummary
              disable_btn={true}
              sub_total={data?.data?.sub_total}
              tax={data?.data?.tax}
              total={data?.data?.total}
              tax_percentage={data?.data?.tax_percentage}
            />
          </div>
          {/* ================= checkout summary ====================== */}
        </div>
      </div>
    </section>
  );
}
