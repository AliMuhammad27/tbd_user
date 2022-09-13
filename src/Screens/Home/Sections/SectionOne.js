import React, { useEffect, useState } from "react";
import SlickGoTo from "./Carousel";

import Photo1 from "../../../assets/Picture.jpg";
import Photo2 from "../../../assets/Picture2.jpg";
import Photo3 from "../../../assets/Picture3.jpg";
import Photo4 from "../../../assets/Picture4.jpg";
import Photo5 from "../../../assets/ABOUT.US.jpg";
import Photo6 from "../../../assets/Picture6.jpg";

function SectionOne(props) {
  const [category, setCategory] = useState({});
  const [slideIndex, setSlideIndex] = useState(0);

  return (
    <section>
      <div className="container-fluid">
        <div
          className="row banner"
          style={{
            backgroundImage:
              slideIndex === 0
                ? `url(${Photo1})`
                : slideIndex === 1
                  ? `url(${Photo2})`
                  : slideIndex === 2
                    ? `url(${Photo3})`
                    : slideIndex === 3
                      ? `url(${Photo4})`
                      : slideIndex === 4
                        ? `url(${Photo5})`
                        : slideIndex === 5
                          ? `url(${Photo6})`
                          : null,
            transition: "background-image 0.2s ease-in-out",
          }}
        >
          <div className="container">
            <SlickGoTo
              category={category}
              setSlideIndex={setSlideIndex}
              slideIndex={slideIndex}
            />
          </div>
        </div>
      </div>
      {/* <div>
        <ul className="ul">
            <li><h2>Think Beyond Imagination</h2></li>
            <li><h2>One-Stop-Shop for All Your Needs</h2></li>
            <li><h2>The Best Ecommerce Store for Your Daily Needs</h2></li>
            <li><h2>Premium Quality Products at Affordable Prices</h2></li>
            <li><h2>24/7 Support & 100% Customer Satisfaction</h2></li>
            <li><h2>Let us Take Your Shopping Experience to the Next Level</h2></li>
        </ul>
      </div> */}
    </section>
  );
}

export default SectionOne;
