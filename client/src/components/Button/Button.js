import React from "react";
import "./Button.css";

const Button = ({ children, link, newTab }) =>
  <a className="btn" href={link} target={`${newTab ? "_blank" : "_self"}`}>
    {children}
  </a>;

export default Button;
