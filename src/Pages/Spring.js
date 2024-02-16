import React from "react";
import Image1 from "../Images/spring.jpg";
import Button from "../Components/Button";
import "../stylesheets/Common/Spring.scss";

function Spring() {
  return (
    <div className="spring">
      <div className="spring__section">
        <div className="row">
          <div className="spring__section1">
            <img src={Image1} />
          </div>
          <div className="spring__section2">
            <div className="spring__section2__text">
              <h6>WOMEN</h6>
              <h2>Spring Summer Collection</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut id
                leo tempor, congue justo at, lobortis orci. Aliquam venenatis
                dui lectus, eu convallis turpis convallis et. Pellentesque.
              </p>
              <Button
                type="submit"
                name="See Whole Collection"
                className="button__section"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Spring;
