import React from "react";
import Navbar from "../Components/Navbar";
import Button from "../Components/Button";
import Footer from "../Components/Footer";
import "../stylesheets/Common/Cart.scss";
import Image1 from "../Images/shirt1.jpg";

function Cart() {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div className="cart">
        <div className="container">
          <div>
            <h1>Cart</h1>
          </div>
          <div className="cart__steps">
            <a>
              <span className="number">1</span>
              <p>SHOPPING CART</p>
            </a>
            <span>
              {/* <i class="fa fa-step-forward" aria-hidden="true"></i> */}
            </span>
            <a>
              <span className="number">2</span>
              <p>CHECKOUT DETAILS</p>
            </a>
            <span>
              {/* <i class="fa fa-step-forward" aria-hidden="true"></i> */}
            </span>
            <a>
              <span className="number">3</span>
              <p>ORDER COMPLETE</p>
            </a>
          </div>
          <div className="box__section">
            <div className="row">
              <div className="section1">
                <ul className="ul">
                  <li>Product</li>
                  <li>Price</li>
                  <li>Quantity</li>
                  <li>Subtotal</li>
                </ul>
                <ul className="ul1">
                  <li className="img__list">
                    <img src={Image1} />
                    T-Shirt Name 9-Black
                  </li>
                  <li>$28.00</li>
                  <li>
                    <Button type="submit" name="-" className="button__detail_sign"/>
                    <Button type="submit" name="1" className="button__detail_num" />
                    <Button type="submit" name="+" className="button__detail_sign" />
                  </li>
                  <li>$28.00</li>
                  <li>
                    <i className="fa fa-times-circle-o" aria-hidden="true"></i>
                  </li>
                </ul>
              </div>
              <div className="section2">
                <ul className="section2__ul">
                  <li>Card totals</li>
                  <hr />
                  <li>
                    Subtotal <span>$28.0</span>
                  </li>
                  <hr />
                  <li>
                    Total <span>$28.0</span>
                  </li>
                  <hr />
                  <li>Have a coupon?</li>
                  <li>
                    <Button
                      type="submit"
                      name="Proceed to checkout"
                      className="button__sectioncart"
                    />
                  </li>
                </ul>
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
export default Cart;
