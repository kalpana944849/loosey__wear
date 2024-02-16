import React from "react";
import Pic1 from "../Images/Card1.jpg";
import Pic2 from "../Images/Card2.jpg";
import Pic3 from "../Images/Card3.jpg";
import Pic4 from "../Images/Card4.jpg";
import Card from "../Components/Card";
import Image1 from "../Images/shirt1.jpg";
import "../stylesheets/Common/Summer.scss";
import { useNavigate } from "react-router-dom";


function Summer() {
  const navigate = useNavigate();
  let Cards = [
    {
      icon: Pic1,
      gender: "MEN",
      orderName: "T-Shirt Name 10",
      price: "$33.00 – $36.00",
    },
    {
      icon: Pic2,
      gender: "WOMEN",
      orderName: "T-Shirt Name 9",
      price: "$23.00 – $28.00",
    },
    {
      icon: Pic3,
      gender: "MEN",
      orderName: "T-Shirt Name 8",
      price: "$21.00 – $25.00",
    },
    {
      icon: Pic4,
      gender: "WOMEN",
      orderName: "T-Shirt Name 7",
      price: "$36.00 – $39.00",
    },
  ];
  const redirectDetail = () => {
    navigate("/detail");
  };
  return (
    <div className="summer">
      <div style={{ textAlign: "center" }}>
        <p className="heading">SUMMER COLLECTION</p>
        <p>Popular T-Shirts</p>
      </div>
      <div className="row">
        {Cards.map((item) => (
          <div className="summer__cards ">
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
                    className="fa fa-shopping-basket"
                    aria-hidden="true"
                    onClick={redirectDetail}
                  ></i>
                </div>
                <div className="eye__icon">
                  <i className="fa fa-eye" aria-hidden="true"></i>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Summer;
