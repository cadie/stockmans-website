import React from "react";
import "./Carousel.css";

const Carousel = ({ children }) =>
  <div className="brand-carousel">
    <div className="container">
      {children}
    </div>
  </div>;

  export default Carousel;
