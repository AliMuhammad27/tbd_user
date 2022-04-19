import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { getUserCategories } from "../Apis/Category";
import { query_stale_time } from "../Helpers/Helpers";
import { userState } from "../Recoil";
import { vendor_login, vendor_register } from "../Util/connection_strings";
import { withRouter } from "react-router-dom";
import { getCount } from "../Apis/Notification";
import Swal from "sweetalert2";

function Header({ history, location }) {
  const user = useRecoilValue(userState);
  const [categories, setCategories] = useState([]);
  const [cart_quantity, setCartQuantity] = useState(0);

  const { isLoading, data } = useQuery(
    ["categories"],
    () => getUserCategories(),
    {
      staleTime: query_stale_time,
      onSuccess: (res) => {
        setCategories(res?.data?.categories);
      },
    }
  );

  const { data: notification_count_data } = useQuery(
    ["notificaiton_count", location.pathname],
    () => getCount(),
    {
      staleTime: query_stale_time,
      cacheTime: 1000,
    }
  );

  useEffect(() => {
    let cart = localStorage.getItem("cart");
    if (cart) {
      cart = JSON.parse(cart);
      setCartQuantity(cart.length);
    }
  }, [localStorage.getItem("cart")]);

  return (
    <section
      className="header"
      style={{
        backgroundColor: "rgb(46, 46, 84)",
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-sm-12 col-xs-12 text-center ">
            <Link to="/">
              <img
                src="img/logo.png"
                className="img-fluid header-logo"
                daata-aoos="fade-right"
              />
            </Link>
          </div>
          <div className="col-lg-6 col-sm-12 col-xs-12">
            <nav className="navbar navbar-expand-lg navbar-light">
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon" />
              </button>
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav mr-auto">
                  <li
                    className="nav-item active"
                    daata-aoos="fade-down"
                    daata-aoos-duration={200}
                  >
                    <Link className="nav-link" to="/">
                      Home <span className="sr-only">(current)</span>
                    </Link>
                  </li>
                  <li className="nav-item dropdown">
                    <Link
                      className="nav-link dropdown-toggle"
                      to="#"
                      data-toggle="dropdown"
                    >
                      Shop
                    </Link>
                    <ul className="dropdown-menu">
                      <li style={{ width: "96%" }}>
                        <Link className="dropdown-item" to={`/products`}>
                          All Products
                        </Link>
                      </li>
                      {categories?.map((category) => (
                        <>
                          <li style={{ width: "96%" }}>
                            <Link
                              className="dropdown-item"
                              to={`/products/${category?._id}`}
                            >
                              {category?.name}{" "}
                              {category?.sub_categories?.length > 0 && "»"}
                            </Link>
                            <ul className="submenu dropdown-menu">
                              {category?.sub_categories?.length > 0 &&
                                category?.sub_categories?.map(
                                  (sub_category) => (
                                    <li>
                                      <Link
                                        className="dropdown-item"
                                        to={`/products/${category?._id}/${sub_category?._id}`}
                                      >
                                        {sub_category?.name}
                                      </Link>
                                    </li>
                                  )
                                )}
                            </ul>
                          </li>
                        </>
                      ))}
                    </ul>
                  </li>
                  <li
                    className="nav-item"
                    daata-aoos="fade-down"
                    daata-aoos-duration={400}
                  >
                    <Link className="nav-link" to="/content/about">
                      About
                    </Link>
                  </li>
                  <li
                    className="nav-item"
                    daata-aoos="fade-down"
                    daata-aoos-duration={700}
                  >
                    <Link className="nav-link" to="/contact-us">
                      Contact
                    </Link>
                  </li>
                  <li
                    className="nav-item"
                    daata-aoos="fade-down"
                    daata-aoos-duration={700}
                  >
                    <Link className="nav-link" to="/new-arrival">
                      New
                    </Link>
                  </li>
                  <li
                    className="nav-item"
                    daata-aoos="fade-down"
                    daata-aoos-duration={700}
                  >
                    <Link className="nav-link" to="/featured">
                      Featured
                    </Link>
                  </li>
                  <li
                    className="nav-item"
                    daata-aoos="fade-down"
                    daata-aoos-duration={700}
                  >
                    <Link className="nav-link" to="/gallery">
                      Gallery
                    </Link>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
          {user?._id ? (
            <div className="col-lg-3 col-sm-12 col-xs-12 text-right cont-sm-center mt-10">
              <ul
                className="text-sm-center aos-init aos-animate"
                data-aos="fade-left"
              >
                <li>
                  <div className="dropdown">
                    <Link to="/notification">
                      <i className="fas fa-bell fs-20" />
                      <span className="badge-orange">
                        {notification_count_data?.data?.notifications}
                      </span>
                    </Link>
                  </div>
                </li>
                <li>
                  <div className="dropdown">
                    <Link to="#" data-toggle="dropdown">
                      {/* <img src="img/icons/user-sm.png" class="img-fluid"> */}
                      <i className="fas fa-user-circle fs-26" />
                    </Link>
                    <div className="dropdown-menu  userDropdown">
                      <Link className="dropdown-item" to="/profile">
                        <i className="fas fa-user-circle" /> My Profile
                      </Link>
                      <Link className="dropdown-item" to="/order/logs">
                        <i className="fas fa-clipboard-list" /> Order Log
                      </Link>
                      <Link
                        className="dropdown-item"
                        to="#"
                        data-toggle="modal"
                        data-target="#exampleModalCenter"
                        onClick={() => {
                          localStorage.clear();
                          window.location.reload();
                        }}
                      >
                        <i className="fas fa-sign-out-alt" /> Logout
                      </Link>
                    </div>
                  </div>
                </li>
                <li>
                  <Link to="/wishlist">
                    <i className="far fa-heart fc-lgray fs-20" />
                  </Link>
                </li>
                <li>
                  <div className="dropdown cart">
                    <Link className to="/cart">
                      <i className="fas fa-shopping-bag" />
                      <span className="badge-orange">{cart_quantity}</span>
                    </Link>
                  </div>
                </li>
              </ul>
            </div>
          ) : (
            <div className="col-lg-3 col-sm-12 col-xs-12 text-right cont-sm-center mt-10">
              <ul className="text-sm-center" daata-aoos="fade-left">
                <li>
                  <div className="dropdown">
                    <Link data-toggle="dropdown" to="#">
                      Register <i className="fa fa-angle-down" />
                    </Link>
                    <div className="dropdown-menu">
                      <a className="dropdown-item" href={vendor_register}>
                        Vendor
                      </a>
                      <Link className="dropdown-item" to="/register">
                        Client
                      </Link>
                    </div>
                  </div>
                </li>
                <li style={{ marginTop: "5px" }}>
                  <div className="dropdown">
                    <Link data-toggle="dropdown" to="#">
                      Login <i className="fa fa-angle-down" />
                    </Link>
                    <div className="dropdown-menu">
                      <a
                        className="dropdown-item"
                        href={vendor_login}
                        target="_blank"
                      >
                        Vendor
                      </a>
                      <Link className="dropdown-item" to="/login">
                        Client
                      </Link>
                    </div>
                  </div>
                </li>
                <li>
                  <Link
                    to="#"
                    onClick={() => {
                      Swal.fire("Please Login First", "", "info");
                    }}
                  >
                    <i className="far fa-heart" />
                  </Link>
                </li>
                <li>
                  <div className="dropdown cart">
                    <Link to="/cart">
                      <i className="fas fa-shopping-bag" />
                      <span className="badge-orange">0</span>
                    </Link>
                  </div>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default withRouter(Header);
