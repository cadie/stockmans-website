import React from "react";
import "./Card.css";

const Card = ({ children }) =>
  <div className="info-cards">
    {children}
  </div>;

export default Card;
