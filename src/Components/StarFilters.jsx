import React from "react";

export default function StarFilters({ setRating }) {
  return (
    <div className="card-body">
      <ul
        className="review-star"
        style={{ cursor: "pointer" }}
        onClick={() => setRating(5)}
      >
        <li>
          <span className="fa fa-star checked" />
        </li>
        <li>
          <span className="fa fa-star checked" />
        </li>
        <li>
          <span className="fa fa-star checked" />
        </li>
        <li>
          <span className="fa fa-star checked" />
        </li>
        <li>
          <span className="fa fa-star checked" />
        </li>
      </ul>
      <br />
      <ul
        className="review-star"
        style={{ cursor: "pointer" }}
        onClick={() => setRating(4)}
      >
        <li>
          <span className="fa fa-star checked" />
        </li>
        <li>
          <span className="fa fa-star checked" />
        </li>
        <li>
          <span className="fa fa-star checked" />
        </li>
        <li>
          <span className="fa fa-star checked" />
        </li>
        <li>
          <span className="fa fa-star" />
        </li>
      </ul>
      <br />
      <ul
        className="review-star"
        style={{ cursor: "pointer" }}
        onClick={() => setRating(3)}
      >
        <li>
          <span className="fa fa-star checked" />
        </li>
        <li>
          <span className="fa fa-star checked" />
        </li>
        <li>
          <span className="fa fa-star checked" />
        </li>
        <li>
          <span className="fa fa-star" />
        </li>
        <li>
          <span className="fa fa-star" />
        </li>
      </ul>
      <br />
      <ul
        className="review-star"
        style={{ cursor: "pointer" }}
        onClick={() => setRating(2)}
      >
        <li>
          <span className="fa fa-star checked" />
        </li>
        <li>
          <span className="fa fa-star checked" />
        </li>
        <li>
          <span className="fa fa-star" />
        </li>
        <li>
          <span className="fa fa-star" />
        </li>
        <li>
          <span className="fa fa-star" />
        </li>
      </ul>
      <br />
      <ul
        className="review-star"
        style={{ cursor: "pointer" }}
        onClick={() => setRating(1)}
      >
        <li>
          <span className="fa fa-star checked" />
        </li>
        <li>
          <span className="fa fa-star" />
        </li>
        <li>
          <span className="fa fa-star" />
        </li>
        <li>
          <span className="fa fa-star" />
        </li>
        <li>
          <span className="fa fa-star" />
        </li>
      </ul>
      <br />
      <ul
        className="review-star"
        style={{ cursor: "pointer" }}
        onClick={() => setRating(0)}
      >
        <li>
          <span className="fa fa-star" />
        </li>
        <li>
          <span className="fa fa-star" />
        </li>
        <li>
          <span className="fa fa-star" />
        </li>
        <li>
          <span className="fa fa-star" />
        </li>
        <li>
          <span className="fa fa-star" />
        </li>
      </ul>
    </div>
  );
}
