import React from "react";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import "../stylesheets/Common/Women.scss";
import Pic1 from "../Images/Card1.jpg";
import Pic2 from "../Images/Card2.jpg";
import Pic5 from "../Images/Card5.jpg";
import Pic7 from "../Images/Card7.jpg";
import Pic10 from "../Images/Card10.jpg";
import Card from "../Components/Card";
function Women() {
  let Cards = [
    {
      icon: Pic1,
      gender: "WOMEN",
      orderName: "T-Shirt Name 1",
      price: "$33.00 – $36.00",
    },
    {
      icon: Pic2,
      gender: "WOMEN",
      orderName: "T-Shirt Name 10",
      price: "$23.00 – $28.00",
    },
    {
      icon: Pic5,
      gender: "WOMEN",
      orderName: "T-Shirt Name 4",
      price: "$36.00 – $39.00",
    },
    {
      icon: Pic7,
      gender: "WOMEN",
      orderName: "T-Shirt Name 6",
      price: "$36.00 – $39.00",
    },
    {
      icon: Pic10,
      gender: "WOMEN",
      orderName: "T-Shirt Name 9",
      price: "$36.00 – $39.00",
    },
  ];
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div className="women">
        <div className="container">
          <div>
            <span>
              {" "}
              <a href="/">Home</a>/Shop
            </span>
            <h1>Women</h1>
            <p className="women__special">Showing all 5 results</p>
          </div>
          <div className="row">
            {Cards.map((item) => (
              <div className="women__cards">
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
export default Women;
