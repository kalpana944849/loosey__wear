import React from "react";
import Image1 from "../Images/cat-men.jpg";
import Image2 from "../Images/cat-women.jpg";
import "../stylesheets/Common/Category.scss";

function Category() {
  return (
    <div className="category">
      <div className="row">
        <div className="category__section1">
          <img src={Image1} />
          <div className="section1__centered">
            <h2 className="centered">
              MEN
              <p>5 PRODUCTS</p>
            </h2>
          </div>
        </div>

        <div className="category__section2">
          <img src={Image2} />
          <div className="section2__centered">
            <h2 className="centered">
              WOMEN
              <p>5 PRODUCTS</p>
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Category;
