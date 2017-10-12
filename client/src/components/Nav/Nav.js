import React from "react";
import "./Nav.css";
import mainLogo from "./imgs/stockmans-logo.svg";
import { Link } from "react-router-dom";

const Nav = () =>
<nav className="navbar navbar-expand-lg navbar-light mr-auto">
  <a className="navbar-brand" href="index.html"><img alt="Stockmans" src={mainLogo} className="img-fluid"></img></a>
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
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Saddles
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <Link to="/english" className="dropdown-item">English</Link>
          <Link to="/western" className="dropdown-item">Western</Link>
        </div>
      </li>
      <li className={window.location.pathname === "/tack-exchange" ? "active nav-item" : "nav-item"}>
        <Link to="/tack-exchange" className="nav-link">Tack Exchange</Link>
      </li>
      <li className={window.location.pathname === "/specials" ? "active nav-item" : "nav-item"}>
        <Link to="/specials" className="nav-link">Specials</Link>
      </li>
      <li className={window.location.pathname === "/news-events" ? "active nav-item" : "nav-item"}>
        <Link to="/news-events" className="nav-link">News & Events</Link>
      </li>
      <li className={window.location.pathname === "/contact" ? "active nav-item" : "nav-item"}>
        <Link to="/contact" className="nav-link">Contact</Link>
      </li>

    </ul>
  </div>
</nav>;

export default Nav;
