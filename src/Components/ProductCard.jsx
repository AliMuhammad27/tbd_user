import React from "react";
import { Link } from "react-router-dom";
import { image_url } from "../Util/connection_strings";
import StarRatings from "react-star-ratings";

export default function ProductCard({ product, lg }) {
  return (
    <div className={`col-lg-${lg ? lg : 4} col-sm-12 col-xs-12 mt-10 mb-10`}>
      <Link to="#"></Link>
      <div className="product">
        <Link to="#"></Link>
        <div className="product-image text-center">
          <Link to={`/product/${product?._id}`}>
            <img
              className="img-fluid "
              src={`${image_url}${product?.images[0]}`}
              style={{
                width: 255,
                height: 257,
              }}
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "img/products/p1.png";
              }}
            />
          </Link>
        </div>
        <div className="justify-content-between d-flex mt-10">
          <div className="text-left">
            <Link to={`/product/${product?._id}`}>
              <h5 className="ff-thunder mb-0">{product?.name}</h5>
            </Link>
            <p className="fc-orange mb-0">${product?.price}</p>
            <p>By: {product?.vendor?.storeName}</p>
          </div>
          <div className="text-right">
            <Link to="#"></Link>
            <ul className="review-star mt-20">
              <StarRatings
                rating={product?.avgRatings ? product?.avgRatings : 0}
                starRatedColor="#EFAA25"
                starHoverColor="#EFAA25"
                numberOfStars={5}
                name="rating"
                starDimension="18px"
                starSpacing="0px"
              />
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
