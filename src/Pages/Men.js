import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Card from "../Components/Card";
import "../stylesheets/Common/Men.scss";
import Pic1 from "../Images/Card3.jpg";
import Pic2 from "../Images/Card4.jpg";
import Pic3 from "../Images/Card6.jpg";
import Pic4 from "../Images/Card8.jpg";
import Pic5 from "../Images/Card9.jpg";

function Men() {
  let Cards = [
    {
      icon: Pic1,
      gender: "MEN",
      orderName: "T-Shirt Name 2",
      price: "$21.00 – $25.00",
    },
    {
      icon: Pic2,
      gender: "MEN",
      orderName: "T-Shirt Name 3",
      price: "$36.00 – $39.00",
    },
    {
      icon: Pic3,
      gender: "MEN",
      orderName: "T-Shirt Name 5",
      price: "$36.00 – $39.00",
    },
    {
      icon: Pic4,
      gender: "MEN",
      orderName: "T-Shirt Name 7",
      price: "$36.00 – $39.00",
    },
    {
      icon: Pic5,
      gender: "MEN",
      orderName: "T-Shirt Name 8",
      price: "$36.00 – $39.00",
    },
  ];
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div className="men">
        <div className="container">
          <div>
            <span>
              {" "}
              <a href="/">Home</a>/Shop
            </span>
            <h1>Men</h1>
            <p className="men__special">Showing all 5 results</p>
          </div>
          <div className="row">
            {Cards.map((item) => (
              <div className="men__cards">
                <Card
                  icon={item.icon}
                  gender={item.gender}
                  orderName={item.orderName}
                  price={item.price}
                />
                <div className="overlay__icons">
                  <div className="icons">
                    <div>
                      <i class="fa fa-shopping-basket" aria-hidden="true"></i>
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
      <div>
        <Footer />
      </div>
    </>
  );
}
export default Men;
