import React from "react";
import Image1 from "../Images/section3.jpg";
import Image2 from "../Images/section3.2.jpeg";
import "../stylesheets/Common/Basecollection.scss";
import Button from "../Components/Button";

function BaseCollection() {
  return (
    <div className="baseCollection">
      <div className="row img__Center">
        <div className="baseCollection__section1">
          <img src={Image1} />
          <div className="baseCollection__section1__text">
            <h6>MEN</h6>
            <h2>The base collection - Ideal every day.</h2>
            <Button type="submit" name="Shop Now" className="button__sectionBase"/>
          </div>
        </div>
        <div className="baseCollection__section2">
          <img src={Image2} />
        </div>
      </div>
    </div>
  );
}
export default BaseCollection;
