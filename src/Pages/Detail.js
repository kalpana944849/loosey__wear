import React from "react";
import Image1 from "../Images/Card1.jpg";
import Button from "../Components/Button";
import "../stylesheets/Common/Detail.scss";
import Image2 from "../Images/shirt1.jpg";
import Image3 from "../Images/Shirt2.jpg";
import Image4 from "../Images/Shirt3.jpg";
import Card from "../Components/Card";
import Pic1 from "../Images/Card3.jpg";
import Pic2 from "../Images/Card4.jpg";
import Pic3 from "../Images/Card3.jpg";
import Pic4 from "../Images/Card4.jpg";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
function Detail() {
  let Cards = [
    {
      icon: Pic1,
      gender: "MEN",
      orderName: "T-Shirt Name 8",
      price: "$33.00 – $36.00",
    },
    {
      icon: Pic2,
      gender: "MEN",
      orderName: "T-Shirt Name 4",
      price: "$23.00 – $28.00",
    },
    {
      icon: Pic3,
      gender: "MEN",
      orderName: "T-Shirt Name 6",
      price: "$21.00 – $25.00",
    },
    {
      icon: Pic4,
      gender: "MEN",
      orderName: "T-Shirt Name 2",
      price: "$36.00 – $39.00",
    },
  ];
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div className="detail">
        <div className="container">
          <div className="detail__section">
            <div className="row">
              <div className="detail__section__1">
                <img src={Image1} className="main__image" />
                <div>
                  <div className="row">
                    <div className="detail__section__1__a">
                      <img src={Image2} className="shirt"/>
                      <img src={Image3} className="last-image shirt"  />
                    </div>
                    <div className="detail__section__1__b">
                      <img src={Image4} className="shirt"/>
                    </div>
                  </div>
                </div>
              </div>
              <div className="detail__section__2">
                <p>MEN</p>
                <h1>T-Shirt Name 10</h1>
                <p>
                  <span>$33.00 – $36.00</span>& Free Shipping{" "}
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                  dapibus interdum eros. In blandit velit a lacus laoreet
                  dictum. Maecenas vel vulputate nulla. Ut nec enim vel tortor
                  aliquet varius.
                </p>
                <p style={{fontWeight:"bold"}}>Color</p>
                <Button type="submit" name="Black" className="button__detail" />
                <Button
                  type="submit"
                  name="Orange"
                  className="button__detail"
                />
                <Button type="submit" name="white" className="button__detail" />
                <hr />
                <Button
                  type="submit"
                  name="-"
                  className="button__detail_sign"
                />
                <Button type="submit" name="1" className="button__detail_num" />
                <Button
                  type="submit"
                  name="+"
                  className="button__detail_sign"
                />
                <Button
                  type="submit"
                  name="Add to cart"
                  className="button__detail__2"
                />
                <hr />
                <p>
                  <span>
                    SKU: <span>N/A </span>
                  </span>
                  <span>
                    Category:{" "}
                    <span style={{ color: "black", fontWeight: "bold" }}>
                      Men
                    </span>
                  </span>
                </p>
                <hr />
                <h3>
                  Description
                  <i class="fa fa-minus" aria-hidden="true"></i>
                </h3>
                <hr />
                <h6 style={{ color: "black" }}>ABOUT THE PRODUCT</h6>
                <p>
                  Our T-Shirts are lorem ipsum dolor sit amet, consectetur
                  adipiscing elit. Ut elit tellus, luctus nec ullamcorper
                  mattis, pulvinar dapibus leo.
                </p>
                <ul style={{ fontSize: "13px", color: "grey" }}>
                  <li>100% Cotton</li>
                  <li>260gsm</li>
                  <li>Breathable Fabric</li>
                </ul>
                <hr />
                <h6 style={{ color: "black" }}>SIZE & FIT</h6>
                <ul>
                  <li>Model is wearing size M and is 6'1"</li>
                  <li>Standard fit for a relaxed, easy feel</li>
                </ul>
                <hr />
                <h6>FREE DELIVERY & RETURNS</h6>
                <p>Free standard delivery on orders over $60.</p>
                <ul>
                  <li>
                    You can return your order for any reason, free of charge,
                    within 30 days
                  </li>
                  <li>We also offer a Free-of-Charge shipping label</li>
                </ul>
                <hr />
                <h3>
                  Additional Information
                  <i class="fa fa-plus" aria-hidden="true"></i>
                </h3>
                <hr />
                <h3>
                  Reviews(0)
                  <i class="fa fa-plus" aria-hidden="true"></i>
                </h3>
                <hr />
              </div>
            </div>
            <div style={{ marginTop: "40px" }}>
              <h2 >
                Related Products
              </h2>
              <div className="row">
                {Cards.map((item) => (
                  <div className="summer__cards">
                    <Card
                      icon={item.icon}
                      gender={item.gender}
                      orderName={item.orderName}
                      price={item.price}
                    />
                    <div className="overlay__icons">
                      <div className="icons">
                        <div>
                          <i
                            class="fa fa-shopping-basket"
                            aria-hidden="true"
                          ></i>
                        </div>
                        <div className="eye__icon">
                          <i class="fa fa-eye" aria-hidden="true"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}
export default Detail;
