import React, { useEffect, useState } from "react";
import { useMutation, useQuery } from "react-query";
import { Link } from "react-router-dom";
import ImagesSlick from "../../Components/ImagesSlick";
import LoadingView from "../../Components/LoadingView";
import ProductCard from "../../Components/ProductCard";
import ProductCardSkeleton from "../../Components/SkeletonCards/ProductCard";
import ReviewCard from "../../Components/ReviewCard";
import {
  addItemToCart,
  getFirstWordOfEveryLetter,
  query_stale_time,
} from "../../Helpers/Helpers";
import StarRatings from "react-star-ratings";
import { image_url } from "../../Util/connection_strings";
import {
  addItemWishlist,
  getProductDetailsLoggedIn,
  getProductDetails,
} from "../../Apis";
import Success from "../../Components/Modal.Success";
import Error from "../../Components/Modal.Error";
import { useRecoilValue } from "recoil";
import { userState } from "../../Recoil";
import Swal from "sweetalert2";
import Slider from "react-slick";
import moment from "moment";
import { addRating, editRating, getRatings } from "../../Apis/Rating";

const selected = {
  backgroundColor: "#F5722B",
  color: "white",
  cursor: "pointer",
};

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
};

export default function ProductDetails({ match }) {
  const user = useRecoilValue(userState);
  const [quantity, setQuantity] = useState(1);
  const [rating, setRating] = useState(0);
  const [selected_variation, setVariation] = useState({});
  const [comment, setComment] = useState("");
  const [review_id, setReviewId] = useState("");
  const [review_created_at, setReviewCreatedAt] = useState("");
  const { mutate } = useMutation((id) => addItemWishlist(id), {
    onSuccess: (res) => {
      Success(res?.data?.message);
      refetch();
    },
    onError: (err) => Error(err?.response?.data?.message),
  });

  const { mutate: add_rating_mutate } = useMutation(
    (data) => (review_id ? editRating(data) : addRating(data)),
    {
      onSuccess: (res) => {
        Success(res?.data?.message);
        refetch_ratings();
      },
      onError: (err) => Error(err?.response?.data?.message),
    }
  );

  const { isLoading, data, refetch } = useQuery(
    ["product", match?.params?.id, user],
    () =>
      match?.params?.id && user?._id
        ? getProductDetailsLoggedIn(match?.params?.id)
        : getProductDetails(match?.params?.id),
    { staleTime: query_stale_time }
  );

  const {
    isLoading: ratings_loading,
    data: ratings,
    refetch: refetch_ratings,
  } = useQuery(
    ["ratings", match?.params?.id],
    () => match?.params?.id && getRatings(match?.params?.id),
    { staleTime: query_stale_time }
  );

  useEffect(() => {
    if (data?.data?.product.my_rating) {
      setRating(data?.data?.product.my_rating?.rating);
      setComment(data?.data?.product.my_rating?.comment);
      setReviewId(data?.data?.product.my_rating?._id);
      setReviewCreatedAt(data?.data?.product.my_rating?.createdAt);
    }
  }, [data?.data?.product]);

  if (isLoading) return <LoadingView />;

  return (
    <>
      <section>
        <div className="container">
          <div className="row mt-40 ">
            {/* col-lg-6 PRODUCT IMAGE START */}
            <div className="col-lg-5 col-sm-12">
              <ImagesSlick images={data?.data?.product?.images} />
              {data?.data?.product?.is_wishlist ? (
                <i
                  className="fas fa-heart cart-orange-cstm"
                  style={{ color: "red" }}
                  onClick={() => mutate(data?.data?.product?._id)}
                />
              ) : (
                <i
                  className="far fa-heart cart-orange-cstm"
                  onClick={() => {
                    if (user?._id) mutate(data?.data?.product?._id);
                    else Swal.fire("Please Login First", "", "warning");
                  }}
                />
              )}
            </div>
            {/* col-lg-6 PRODUCT IMAGE END */}
            {/* col-lg-6 PRODUCT DETAILS start */}
            <div className="col-lg-4 col-sm-12">
              <h2 className="ff-thunder fc-purple">
                {data?.data?.product?.name}
              </h2>
              <div className="d-flex flex-row">
                <div className="p-2 bd-highlight">
                  <img
                    className="img-fluid img-testimonial"
                    src={`${image_url}${data?.data?.product?.vendor?.userImage}`}
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = "img/testimonial.jpg";
                    }}
                  />
                </div>
                <div className="p-2 bd-highlight mt-4">
                  <Link to={`/store/${data?.data?.product?.vendor?._id}`}>
                    <h5>{data?.data?.product?.vendor?.storeName}</h5>
                  </Link>
                </div>
              </div>
              <div className="d-flex flex-row">
                <div className="pl-2 pr-2  bd-highlight">
                  <ul className="review-star">
                    <StarRatings
                      rating={data?.data?.product?.avgRatings}
                      starRatedColor="#EFAA25"
                      starHoverColor="#EFAA25"
                      numberOfStars={5}
                      name="rating"
                      starDimension="18px"
                      starSpacing="0px"
                    />
                  </ul>
                </div>
                <div className="pl-2 pr-2  bd-highlight">
                  <p className="fc-gray">
                    {ratings?.data?.avg_rating ? ratings?.data?.avg_rating : 0}{" "}
                    Ratings &amp; {ratings?.data?.total_ratings_count} Reviews
                  </p>
                </div>
              </div>
              <div className="d-flex flex-row mb-3">
                <div className="pl-2 pr-2 bd-highlight">
                  <h2 className="ff-thunder fc-orange">
                    ${data?.data?.product?.price}
                  </h2>
                </div>
              </div>
              <div className="d-flex flex-row mb-3">
                {data?.data?.product?.variations?.colors?.length > 0 && (
                  <div className="pl-2 pr-2 bd-highlight">
                    <p className="ff-thunder fc-purple mb-0">Color:</p>
                    <div className="radio-toolbar">
                      {data?.data?.product?.variations?.colors?.map((color) => (
                        <>
                          <input
                            type="radio"
                            id={`radioApple${color?._id}`}
                            name="radioFruit"
                            onChange={() => {
                              setVariation({
                                ...selected_variation,
                                color,
                              });
                            }}
                            checked={
                              selected_variation?.color?._id === color?._id
                            }
                          />
                          <label
                            htmlFor={`radioApple${color?._id}`}
                            style={{
                              backgroundColor: color?.hex,
                            }}
                          />
                        </>
                      ))}
                    </div>
                  </div>
                )}
                <div className="pl-2 pr-2 bd-highlight mt-1">
                  <p className="ff-thunder fc-purple mb-0">Quantity:</p>
                  <div className="quantity buttons_added">
                    <input
                      type="button"
                      defaultValue="-"
                      className="minus btn-minus-cstm"
                      onClick={() => {
                        if (quantity > 1) setQuantity(quantity - 1);
                      }}
                    />
                    <input
                      type="number"
                      step={1}
                      min={1}
                      max
                      name="quantity"
                      title="Qty"
                      className="input-text qty text"
                      size={4}
                      pattern
                      inputMode
                      value={quantity}
                      onChange={(e) => {
                        if (
                          e.target.value >= 1 &&
                          e.target.value <= data?.data?.product?.stock
                        )
                          setQuantity(parseInt(e.target.value));
                      }}
                    />
                    <input
                      type="button"
                      defaultValue="+"
                      className="plus btn-plus-cstm"
                      onClick={() => {
                        if (parseInt(quantity) < data?.data?.product?.stock)
                          setQuantity(parseInt(quantity) + 1);
                      }}
                    />
                  </div>
                </div>
              </div>
              {data?.data?.product?.variations?.sizes?.length > 0 && (
                <div className="d-flex flex-row mb-3">
                  <div className="pl-2 pr-2 bd-highlight select-size">
                    <p className="ff-thunder fc-purple mb-0">Select Size:</p>
                    <ul>
                      {data?.data?.product?.variations?.sizes?.map((size) => (
                        <li
                          onClick={() => {
                            setVariation({
                              ...selected_variation,
                              size,
                            });
                          }}
                          style={
                            selected_variation?.size?._id === size?._id
                              ? selected
                              : { cursor: "pointer" }
                          }
                        >
                          <Link
                            to="#"
                            style={
                              selected_variation?.size === size?._id
                                ? selected
                                : {}
                            }
                          >
                            {getFirstWordOfEveryLetter(size?.name)}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
              <div className="d-flex flex-row mb-3">
                <div className="pl-2 pr-2 bd-highlight select-size">
                  <Link
                    to="#"
                    className="btn-orange"
                    onClick={() => {
                      if (
                        data?.data?.product?.variations &&
                        data?.data?.product?.variations?.sizes?.length > 0 &&
                        selected_variation?.size?._id === undefined
                      ) {
                        alert("Please Select a Size");
                      } else if (
                        data?.data?.product?.variations &&
                        data?.data?.product?.variations?.colors?.length > 0 &&
                        selected_variation?.color?._id === undefined
                      ) {
                        alert("Please Select a Color");
                      } else {
                        addItemToCart({
                          _id: data?.data?.product?._id,
                          quantity,
                          variations: selected_variation,
                        });
                      }
                    }}
                  >
                    <i className="fas fa-shopping-cart" /> Add To Cart
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="row mt-30">
            <div className="col-lg-12 mt-5">
              <h3 className="ff-thunder fc-purple">Product Description</h3>
              <p className="mt-2" style={{ whiteSpace: "pre-line" }}>
                {data?.data?.product?.specifications}
              </p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="row">
            {/* Col-lg-12 REVIEW TABS START */}
            <div className="col-lg-12 review-tabs">
              <ul className="nav nav-pills" role="tablist">
                <li className="nav-item">
                  <a
                    className="nav-link active ff-thunder fc-purple"
                    data-toggle="pill"
                    href="#reviews"
                  >
                    <h3>Reviews</h3>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" data-toggle="pill" href="#menu1">
                    <h3>More From Seller</h3>
                  </a>
                </li>
              </ul>
              {/* Tab panes */}
              <div className="tab-content">
                <div id="reviews" className="container tab-pane active">
                  <br />
                  <div className="row">
                    <div className="col-lg-6 col-sm-12">
                      <p className="ff-thunder fc-orange">
                        {ratings?.data?.avg_rating
                          ? ratings?.data?.avg_rating
                          : 0}{" "}
                        Stars
                      </p>
                      <ul className="review-star">
                        <StarRatings
                          rating={
                            ratings?.data?.avg_rating
                              ? ratings?.data?.avg_rating
                              : 0
                          }
                          starRatedColor="#EFAA25"
                          starHoverColor="#EFAA25"
                          numberOfStars={5}
                          name="rating"
                          starDimension="18px"
                          starSpacing="0px"
                        />
                      </ul>
                      <div className="clearfix" />
                      <p className="fc-lgray">
                        {ratings?.data?.avg_rating
                          ? ratings?.data?.avg_rating
                          : 0}{" "}
                        Ratings &amp; {ratings?.data?.total_ratings_count}{" "}
                        Reviews
                      </p>
                      {!user?._id ? (
                        <button className="btn-orange" type="button">
                          PLEASE LOGIN TO WRITE YOUR REVIEW
                        </button>
                      ) : (
                        <button
                          className="btn-orange"
                          type="button"
                          data-toggle="modal"
                          data-target="#exampleModalCenter1"
                        >
                          WRITE YOUR REVIEW
                        </button>
                      )}
                    </div>
                    <div className="col-lg-6 col-sm-12">
                      <div className="row mt-10">
                        <div className="col-lg-1 col-sm-12 pr-0 pl-0">
                          <small>1 STAR</small>
                        </div>
                        <div className="col-lg-10 col-sm-12 p-0 mt-1">
                          <div className="progress">
                            <div
                              className="progress-bar bg-warning"
                              style={{ width: `${ratings?.data?.one_star}%` }}
                            />
                          </div>
                        </div>
                        <div className="col-lg-1 col-sm-12 pr-0">
                          <small>{ratings?.data?.one_star}</small>
                        </div>
                      </div>
                      <div className="row mt-10">
                        <div className="col-lg-1 col-sm-12 pr-0 pl-0">
                          <small>2 STAR</small>
                        </div>
                        <div className="col-lg-10 col-sm-12 p-0 mt-1">
                          <div className="progress">
                            <div
                              className="progress-bar bg-warning"
                              style={{ width: `${ratings?.data?.two_star}%` }}
                            />
                          </div>
                        </div>
                        <div className="col-lg-1 col-sm-12 pr-0">
                          <small>{ratings?.data?.two_star}</small>
                        </div>
                      </div>
                      <div className="row mt-10">
                        <div className="col-lg-1 col-sm-12 pr-0 pl-0">
                          <small>3 STAR</small>
                        </div>
                        <div className="col-lg-10 col-sm-12 p-0 mt-1">
                          <div className="progress">
                            <div
                              className="progress-bar bg-warning"
                              style={{ width: `${ratings?.data?.three_star}%` }}
                            />
                          </div>
                        </div>
                        <div className="col-lg-1 col-sm-12 pr-0">
                          <small>{ratings?.data?.three_star}</small>
                        </div>
                      </div>
                      <div className="row mt-10">
                        <div className="col-lg-1 col-sm-12 pr-0 pl-0">
                          <small>4 STAR</small>
                        </div>
                        <div className="col-lg-10 col-sm-12 p-0 mt-1">
                          <div className="progress">
                            <div
                              className="progress-bar bg-warning"
                              style={{ width: `${ratings?.data?.four_star}%` }}
                            />
                          </div>
                        </div>
                        <div className="col-lg-1 col-sm-12 pr-0">
                          <small>{ratings?.data?.four_star}</small>
                        </div>
                      </div>
                      <div className="row mt-10">
                        <div className="col-lg-1 col-sm-12 pr-0 pl-0">
                          <small>5 STAR</small>
                        </div>
                        <div className="col-lg-10 col-sm-12 p-0 mt-1">
                          <div className="progress">
                            <div
                              className="progress-bar bg-warning"
                              style={{ width: `${ratings?.data?.five_star}%` }}
                            />
                          </div>
                        </div>
                        <div className="col-lg-1 col-sm-12 pr-0">
                          <small>{ratings?.data?.five_star}</small>
                        </div>
                      </div>
                    </div>
                    {ratings_loading ? (
                      <div className="row mt-3">
                        <div className="col-lg-4 mt-4">
                          <ProductCardSkeleton />
                        </div>
                        <div className="col-lg-4 mt-4">
                          <ProductCardSkeleton />
                        </div>
                        <div className="col-lg-4 mt-4">
                          <ProductCardSkeleton />
                        </div>
                      </div>
                    ) : (
                      <Slider
                        {...settings}
                        slidesToShow={
                          ratings?.data?.ratings?.length > 1 ? 3 : 1
                        }
                      >
                        {ratings?.data?.ratings?.map((rating) => (
                          <div
                            className={`col-lg-${
                              ratings?.data?.ratings?.length >= 3 ? 12 : 4
                            }`}
                          >
                            <ReviewCard rating={rating} />
                          </div>
                        ))}
                      </Slider>
                    )}
                  </div>
                </div>
                <div id="menu1" className="container tab-pane fade">
                  <br />
                  <div className="row">
                    {/* ============= product =============  */}
                    {data?.data?.more_seller_products?.map((product) => (
                      <ProductCard
                        product={product}
                        key={product?._id}
                        lg={3}
                      />
                    ))}
                    {/* ============= product =============  */}
                  </div>
                </div>
              </div>
            </div>
            {/* Col-lg-12 REVIEW TABS END */}
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="row mb-40 p-55-0">
            {/* Col-lg-12 REVIEW TABS START */}
            <div className="col-lg-12 bt-1 text-center">
              <h1 className="ff-thunder fc-purple mt-40">
                Recommended Products
              </h1>
              <p className="ff-thunder fc-orange">
                We Support Producers By Selling Handcrafted, Sustainable
                Products.
              </p>
            </div>
            {/* ============= product =============  */}
            {data?.data?.recommended_products?.map((product) => (
              <ProductCard product={product} key={product?._id} lg={3} />
            ))}
            {/* ============= product =============  */}
          </div>
        </div>
      </section>
      <div
        className="modal fade login-modal"
        id="exampleModalCenter1"
        tabIndex={-1}
        aria-labelledby="exampleModalCenterTitle"
        style={{ display: "none" }}
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content modal-cstm">
            <div className="modal-header modal-headerClose">
              {/*         <h5 class="modal-title" id="exampleModalLongTitle">Modal title</h5> */}
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body p-20-40">
              <div className="text-center">
                <h3 className="ff-thunder fc-purple"> ADD REVIEWS</h3>
              </div>
              <div className="d-flex flex-row mt-20 justify-content-center">
                <div className="p-2 bd-highlight"></div>
                <div className="p-2 bd-highlight">
                  <h5 className="fc-orange mb-0">{user?.name}</h5>
                  <p className="mb-0">
                    {moment(
                      review_created_at ? review_created_at : new Date()
                    ).format("LL | hh:mm a")}
                  </p>
                  <ul className="review-star">
                    <StarRatings
                      rating={rating}
                      starRatedColor="#EFAA25"
                      starHoverColor="#EFAA25"
                      numberOfStars={5}
                      name="rating"
                      starDimension="18px"
                      starSpacing="0px"
                      changeRating={(newRating, name) => {
                        setRating(newRating);
                      }}
                    />
                  </ul>
                </div>
              </div>
              <div className="text-left">
                <div className="row">
                  <div className="col mt-30">
                    <textarea
                      rows={5}
                      className="form-control textarea-cstm"
                      value={comment}
                      onChange={(e) => setComment(e.target.value)}
                    />
                  </div>
                </div>
              </div>
              <div className="text-center">
                <div className="row mb-20">
                  <div className="col mt-40 text-center mt-20">
                    <button
                      type="button"
                      className="btn-orange"
                      data-dismiss="modal"
                      aria-label="Close"
                      data-toggle="modal"
                      onClick={() =>
                        add_rating_mutate({
                          rating,
                          comment,
                          product: data?.data?.product?._id,
                          id: review_id,
                        })
                      }
                    >
                      SUBMIT
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
