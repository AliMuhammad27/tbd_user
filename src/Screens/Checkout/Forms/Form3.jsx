import React from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import Button from "../../../Components/Button";
import TableProductCard from "../../../Components/SkeletonCards/TableProductCard";
import TableProduct from "../../../Components/TableProduct";

export default function Form3({
  handleChangeForm,
  data,
  isLoading,
  refetch,
  isFetching,
  handlePlaceOrder,
  orderLoading,
}) {
  return (
    <div className="tab" style={{ display: "block" }}>
      <div className="table-responsive">
        <table className="table mt-5 tableCheckout">
          <thead className="thead-purple">
            <tr>
              <th scope="col" className="br-left">
                IMAGE
              </th>
              <th scope="col">PRODUCT</th>
              <th scope="col">QUANTITY</th>
              <th scope="col">UNIT PRICE</th>
              <th scope="col">TOTAL PRICE</th>
              <th scope="col">TAX</th>
              <th scope="col" className="br-right">
                {isFetching ? (
                  <i className="fas fa-spinner fa-spin"></i>
                ) : (
                  <Link to="#" onClick={() => refetch()}>
                    <i className="fas fa-sync fc-white" />
                  </Link>
                )}
              </th>
            </tr>
          </thead>
          <tbody>
            {isLoading ? (
              <tr class="odd">
                <td valign="top" colspan="5" className="dataTables_empty">
                  <TableProductCard />
                </td>
              </tr>
            ) : (
              data?.map((item) => (
                <TableProduct disable_controls={true} item={item} />
              ))
            )}
          </tbody>
        </table>
      </div>
      <div className="form-row">
        {!orderLoading && (
          <button
            type="button"
            className="btn-lgray mt-30 m-1"
            onClick={() => handleChangeForm(2)}
          >
            BACK
          </button>
        )}
        <Button
          className="btn-orange mt-30 m-1"
          onClick={() => {
            Swal.fire({
              icon: "question",
              title: "SYSTEM MESSAGE",
              text: "Are you sure you want to Confirm this order?",
              confirmButtonText: "YES",
              confirmButtonColor: "#F5722B",
              showCancelButton: true,
              cancelButtonText: "NO",
              cancelButtonColor: "#0f1f2e",
            }).then((result) => {
              if (result.isConfirmed) {
                handlePlaceOrder();
              }
            });
          }}
          loading={orderLoading}
        >
          CONTINUE
        </Button>
      </div>
    </div>
  );
}
