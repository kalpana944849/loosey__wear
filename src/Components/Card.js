import React from "react";
import "../stylesheets/Common/Card.scss";

function Card(props) {
  return (
    <div className="card">
      <div className="card__image">
        <img src={props.icon} />
      </div>
      <div className="Details">
        <p className="gender">{props.gender}</p>
        <p className="orderName">{props.orderName}</p>
        <p className="price">{props.price}</p>
      </div>
    </div>
  );
}
export default Card;
