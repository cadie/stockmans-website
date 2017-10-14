import React from "react";
import "./Jumbotron.css";

const Jumbotron = ({ children }) =>
  <div className={window.location.pathname === "/" ? "jumbotron home-jumbotron" : "jumbotron"}>
    {children}
  </div>;

export default Jumbotron;
