import Swal from "sweetalert2";
import isEqual from "lodash.isequal";

// Time in ms after react query will refetch the data
export const query_stale_time = 30000;

export const getFirstWordOfEveryLetter = (sentece) => {
  const matches = sentece.match(/\b(\w)/g); // ['J','S','O','N']
  const result = matches.join("");
  return result === "EL" ? "XL" : result;
};

export const addItemToCart = (data) => {
  let local_cart = localStorage.getItem("cart");
  if (local_cart) local_cart = JSON.parse(local_cart);
  let cart = [];
  if (Array.isArray(local_cart)) {
    cart = local_cart;
  }
  const exists = checkIfAlreadyExistsInCart(cart, data);

  if (exists.exists) {
    cart[exists.index].quantity = parseInt(cart[exists.index].quantity) + 1;
  } else {
    cart.push({
      product_id: data?._id,
      variations: data?.variations,
      quantity: data?.quantity,
    });
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  if (exists.exists) Swal.fire("Item Quantity Increased", "", "success");
  else Swal.fire("Item Added To Cart", "", "success");
};

const checkIfAlreadyExistsInCart = (cart, data) => {
  let index;
  const item = cart.find((item, item_index) => {
    if (item?.product_id === data?._id) {
      if (isEqual(item.variations, data.variations)) {
        index = item_index;
        return item.product_id === data?._id;
      }
    }
  });
  if (!item) {
    return {
      exists: false,
      index,
    };
  } else {
    return {
      exists: true,
      index,
    };
  }
};
