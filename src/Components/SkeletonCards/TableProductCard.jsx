import React from "react";
import "./TableProductCard.scss";

export default function TableProductCard() {
  return (
    <ul className="o-vertical-spacing o-vertical-spacing--l mt-3">
      <li className="blog-post o-media">
        <div className="o-media__figure">
          <span
            className="skeleton-box"
            style={{ width: "100px", height: "80px" }}
          />
        </div>
        <div className="o-media__body">
          <div className="o-vertical-spacing">
            <h3 className="blog-post__headline">
              <span className="skeleton-box" style={{ width: "100%" }} />
            </h3>
            <p>
              <span className="skeleton-box" style={{ width: "100%" }} />
              <span className="skeleton-box" style={{ width: "100%" }} />
            </p>
          </div>
        </div>
      </li>
    </ul>
  );
}
