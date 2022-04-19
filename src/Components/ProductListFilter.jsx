import React from "react";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import { getUserCategories } from "../Apis/Category";
import { query_stale_time } from "../Helpers/Helpers";
import StarFilters from "./StarFilters";

export default function ProductListFilter({
  setSort,
  setMin,
  setMax,
  min,
  max,
  setRating,
}) {
  const { isLoading, data: categories } = useQuery(
    ["categories"],
    () => getUserCategories(),
    {
      staleTime: query_stale_time,
    }
  );

  return (
    <div id="accordion">
      <div className="side-bar">
        <div className="side-bar-header">
          <Link className="card-link" data-toggle="collapse" to="/products">
            All Categories
          </Link>
        </div>
        <div
          id="collapseOne"
          className="collapse show"
          data-parent="#accordion"
        >
          <div className="card-body">
            <ul>
              {categories?.data?.categories.map((category) => (
                <li>
                  <Link to={`/products/${category?._id}`}>
                    {category?.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="side-bar">
        <div className="side-bar-header">
          <Link
            className="collapsed card-link"
            data-toggle="collapse"
            to="#"
            onClick={() => setSort("")}
          >
            Sort By
          </Link>
        </div>
        <div id="collapseTwo" className="collapse show">
          <div className="card-body">
            <ul>
              <li>
                <Link to="#" onClick={() => setSort("-price")}>
                  Price High To Low
                </Link>
              </li>
              <li>
                <Link to="#" onClick={() => setSort("price")}>
                  Price Low To High
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="side-bar">
        <div className="side-bar-header">
          <Link
            className="collapsed card-link"
            data-toggle="collapse"
            to="#"
            onClick={() => {
              setMin("");
              setMax("");
            }}
          >
            Price Range
          </Link>
        </div>
        <div
          id="collapseThree"
          className="collapse show"
          data-parent="#accordion"
        >
          <div id="demo_0"></div>
          <div className="form-group multi-range">
            <div className="row">
              <div className="col-md-6 col-sm-3 col-xs-6">
                <label htmlFor="price-from">Min</label>
                <input
                  type="number"
                  name="fromPrice"
                  className="form-control range-from"
                  id="price-from"
                  value={min}
                  onChange={(e) => setMin(e.target.value)}
                />
              </div>
              <div className="col-md-6 col-sm-3 col-xs-6">
                <label htmlFor="price-to">Max</label>
                <input
                  type="number"
                  name="toPrice"
                  className="form-control range-to"
                  id="price-to"
                  value={max}
                  onChange={(e) => setMax(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="side-bar">
        <div className="side-bar-header">
          <Link
            className="collapsed card-link"
            data-toggle="collapse"
            to="#"
            onClick={() => setRating("")}
          >
            Search By Rating
          </Link>
        </div>
        <div
          id="collapseFour"
          className="collapse show"
          data-parent="#accordion"
        >
          <StarFilters setRating={setRating} />
        </div>
      </div>
    </div>
  );
}
