import React from "react";
import { useMutation } from "react-query";
import { Link } from "react-router-dom";
import { addItemWishlist } from "../Apis";
import { image_url } from "../Util/connection_strings";
import Error from "./Modal.Error";
import Success from "./Modal.Success";

export default function WishlistCard({ wishlist, refetch }) {
  const { mutate } = useMutation((id) => addItemWishlist(id), {
    onSuccess: (res) => {
      Success(res?.data?.message);
      refetch();
    },
    onError: (err) => Error(err?.response?.data?.message),
  });

  return (
    <tr className="bb-double">
      <td>
        <img src={`${image_url}${wishlist?.images[0]}`} className="img-fluid" />
      </td>
      <td>
        <Link to={`/product/${wishlist?._id}`}>{wishlist?.name}</Link>
      </td>
      <td>${wishlist?.price}</td>
      <td>
        <div className="table-instock-tag">
          {wishlist?.stock > 0 ? "In Stock" : "Out of Stock"}
        </div>
      </td>
      <td>
        <Link to="#" onClick={() => mutate(wishlist?._id)}>
          <i className="far fa-trash-alt fc-lgray" />
        </Link>
      </td>
    </tr>
  );
}
