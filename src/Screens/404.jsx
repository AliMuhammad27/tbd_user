import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="p-55-0">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            {/* <h1 class="display-1 ff-thunder fc-purple">404</h1> */}
            <img src="img/404.png" className="img-fluid" />
            <h1 className="display-4 fc-purple">Page not found</h1>
            <div className="mt-40">
              <Link to="/" className="btn-orange">
                GO TO HOMEPAGE
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
