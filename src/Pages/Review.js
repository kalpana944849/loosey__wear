import React from "react";
import "../stylesheets/Common/Review.scss";

function Review() {
  return (
    <div className="review">
      <div className="review__section">
        <h2>Reviews</h2>
        <a href="#">
          “ Very good quality T-shirts and lorem ipsum dolor sit amet,
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua quis ipsum! ”
        </a>
        <div className="review__star">
          <i class="fa fa-star" aria-hidden="true"></i>
          <i class="fa fa-star" aria-hidden="true"></i>
          <i class="fa fa-star" aria-hidden="true"></i>
          <i class="fa fa-star" aria-hidden="true"></i>
          <i class="fa fa-star" aria-hidden="true"></i>
        </div>
        <h6>JANE OLIVER</h6>
      </div>
    </div>
  );
}
export default Review;
