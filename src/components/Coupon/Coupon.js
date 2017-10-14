import React from "react";
import "./Coupon.css";

const Coupon = props =>
  <div className="coupon-card text-center">
    <h3>{props.description}</h3>
    <p>{props.restrictions} {props.expiration}</p>
  </div>;

export default Coupon;
