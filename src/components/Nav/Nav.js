import React from "react";
import "./Nav.css";
import mainLogo from "./imgs/stockmans-logo.svg";
import { Link } from "react-router-dom";

const Nav = () =>
<nav className="navbar navbar-expand-lg navbar-light mr-auto">
  <a className="navbar-brand" href="/"><img alt="Stockmans" src={mainLogo} className="img-fluid"></img></a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavDropdown">
    <ul className="navbar-nav ml-auto">
      <li className={window.location.pathname === "/" ? "active nav-item" : "nav-item"}>
        <Link to="/" className="nav-link">Home</Link>
      </li>
      <li className={window.location.pathname === "/about" ? "active nav-item" : "nav-item"}>
        <Link to="/about" className="nav-link">About</Link>
      </li>
      <li className={window.location.pathname === "/english" ? "active nav-item" : "nav-item"}>
        <Link to="/english" className="nav-link">English</Link>
      </li>
      <li className={window.location.pathname === "/western" ? "active nav-item" : "nav-item"}>
        <Link to="/western" className="nav-link">Western</Link>
      </li>
      <li className={window.location.pathname === "/tack-exchange" ? "active nav-item" : "nav-item"}>
        <Link to="/tack-exchange" className="nav-link">Tack Exchange</Link>
      </li>
      <li className={window.location.pathname === "/repair" ? "active nav-item" : "nav-item"}>
        <Link to="/repair" className="nav-link">Repair</Link>
      </li>
      <li className={window.location.pathname === "/specials" ? "active nav-item" : "nav-item"}>
        <Link to="/specials" className="nav-link">Specials</Link>
      </li>
      <li className={window.location.pathname === "/contact" ? "active nav-item" : "nav-item"}>
        <Link to="/contact" className="nav-link">Contact</Link>
      </li>

    </ul>
  </div>
</nav>;

export default Nav;
