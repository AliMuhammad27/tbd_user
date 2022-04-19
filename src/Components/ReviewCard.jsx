import moment from "moment";
import React from "react";
import StarRatings from "react-star-ratings";

export default function ReviewCard({ rating }) {
  return (
    <div className="reviewBx">
      <ul className="review-star">
        <StarRatings
          rating={rating?.rating}
          starRatedColor="#EFAA25"
          starHoverColor="#EFAA25"
          numberOfStars={5}
          name="rating"
          starDimension="18px"
          starSpacing="0px"
        />
      </ul>
      <div className="clearfix" />
      <h5 className="ff-thunder fc-purple mt-20">Product Review</h5>
      <p className="fc-lgray mb-0 mt-20">{rating?.comment}</p>
      <div className="d-flex flex-row mt-20">
        <div className="p-2 bd-highlight"></div>
        <div className="p-2 bd-highlight mt-4" style={{ width: "100%" }}>
          <p className="fc-orange ff-thunder mb-0">{rating?.user?.name}</p>
          <p className="fc-lgray">
            {moment(rating?.createdAt).format("LL | hh:mm a")}
          </p>
        </div>
      </div>
    </div>
  );
}
