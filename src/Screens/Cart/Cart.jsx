import React from "react";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { getFormattedUserCart } from "../../Apis/Cart";
import CartSummary from "../../Components/CartSummary";
import TableProductCard from "../../Components/SkeletonCards/TableProductCard";
import TableProduct from "../../Components/TableProduct";
import { query_stale_time } from "../../Helpers/Helpers";
import { userState } from "../../Recoil";

export default function Cart({ history }) {
  const user = useRecoilValue(userState);
  const [cart, setCart] = useState([]);

  const { isFetching, isLoading, data, refetch } = useQuery(
    ["cart_products", cart],
    () => cart?.length > 0 && getFormattedUserCart(cart),
    {
      staleTime: query_stale_time,
    }
  );

  useEffect(() => {
    const _cart = localStorage.getItem("cart")
      ? JSON.parse(localStorage.getItem("cart"))
      : [];
    setCart(_cart);
  }, []);

  return (
    <section className="p-55-0">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <h2 className="ff-thunder fc-purple">MY CART</h2>
          </div>
          <div className="col-lg-12">
            <div className="table-responsive">
              <table className="table myTable mt-5">
                <thead className="thead-orange">
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
                    data?.data?.cart?.map((item, index) => (
                      <TableProduct
                        item={item}
                        setCart={setCart}
                        index={index}
                        cart={cart}
                      />
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
          <div className="col-lg-8 col-sm-12 mt-20">
            <h5>
              <Link to="/products" className="fc-purple">
                Continue Shopping
              </Link>
            </h5>
          </div>
          <div className="col-lg-4 col-sm-12 mt-40">
            {cart?.length > 0 && (
              <CartSummary
                sub_total={data?.data?.sub_total}
                tax={data?.data?.tax}
                total={data?.data?.total}
                tax_percentage={data?.data?.tax_percentage}
                history={history}
                user={user}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
