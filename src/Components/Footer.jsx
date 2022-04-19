import React from "react";
import { Link } from "react-router-dom";
import { vendor_register } from "../Util/connection_strings";

export default function Footer() {
  return (
    <>
      <section className="footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-sm-12 col-xs-12 links">
              <h3 className="ff-thunder fc-purple">Useful Links</h3>
              <ul className="mt-20">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/products">Shop</Link>
                </li>
                <li>
                  <Link to="/featured">Promotions &amp; Offers</Link>
                </li>
                <li>
                  <Link to="/contact-us">Contact Us</Link>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 col-sm-12 col-xs-12 text-center social">
              <h3 className="ff-thunder fc-purple">Newsletter Signup</h3>
              <p className="mt-10 fc-gray" daata-aoos="fade-up">
                <small>
                  First Time Subscribe Will be sent a code for 15% off a future
                  purchase
                </small>
              </p>
              <form>
                <div className="input-icons">
                  <input
                    className="input-field"
                    type="text"
                    placeholder="Email Address"
                  />
                  <i
                    className="fas fa-paper-plane icon"
                    style={{ cursor: "pointer" }}
                  />
                </div>
              </form>
              <ul className="mt-20" style={{ width: "280px" }}>
                <li
                  className="purple"
                  daata-aoos="fade-down"
                  daata-aoos-delay={900}
                >
                  <Link>
                    <i className="fab fa-pinterest-square" />
                  </Link>
                </li>
                <li
                  className="purple"
                  daata-aoos="fade-down"
                  daata-aoos-delay={700}
                >
                  <Link target="_blank">
                    <i className="fab fa-facebook-f" />
                  </Link>
                </li>
                <li
                  className="orange"
                  daata-aoos="fade-down"
                  daata-aoos-delay={800}
                >
                  <Link>
                    <i className="fab fa-twitter" />
                  </Link>
                </li>
                <li
                  className="purple"
                  daata-aoos="fade-down"
                  daata-aoos-delay={900}
                >
                  <Link>
                    <i className="fab fa-instagram" />
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 col-sm-12 links">
              <h3 className="ff-thunder fc-purple">Customer Care</h3>
              <ul className="mt-20">
                <li>
                  <Link to="/content/terms">Terms &amp; Condition</Link>
                </li>
                <li>
                  <Link to="/content/privacy">Privacy Policy</Link>
                </li>
                <li>
                  <Link to="/content/cookie-policy">Cookie Policy</Link>
                </li>
                <li>
                  <Link to="/content/faq-user">Faq's</Link>
                </li>
                <li>
                  <Link to="/content/returns">Returns</Link>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 col-sm-12 links">
              <h3 className="ff-thunder fc-purple">Selling With Us</h3>
              <ul className="mt-20">
                <li>
                  <Link to="/content/seller-terms">Terms &amp; Condition</Link>
                </li>
                <li>
                  <Link to="/content/why-join">Why Joining Olden Times</Link>
                </li>
                <li>
                  <a href={vendor_register} target="_blank">
                    Apply To Join Olden Times
                  </a>
                </li>
                <li>
                  <Link to="/content/faq-vendor">Faq's</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className=" footer-bar">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-sm-12 col-xs-12">
              <p>Copyright © 2020 Olden Times - All Rights Reserved.</p>
            </div>
            <div className="col-lg-6 col-sm-12 col-xs-12 text-right">
              <img src="img/icons/payment.png" className="img-fluid" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
