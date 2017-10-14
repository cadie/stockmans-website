import React from "react";
import { Col, Row, Container } from "../../components/Grid";
import Jumbotron from "../../components/Jumbotron";
import "./Admin.css";
import Logo from "./imgs/stockmans-logo.svg";
import { Link } from "react-router-dom";

const Contact = () =>

<div>
    <Container>
      <Row>
        <form className="form-signin">
          <h2 className="form-signin-heading"><img src={Logo} alt="Stockmans Admin"></img></h2>
          <label htmlFor="inputEmail" className="sr-only">Username</label>
          <input type="email" id="inputEmail" className="form-control" placeholder="Username" required autofocus />
          <label htmlFor="inputPassword" className="sr-only">Password</label>
          <input type="password" id="inputPassword" className="form-control" placeholder="Password" required />
          <Link to="/admin/tack-exchange" className="nav-link btn btn-lg btn-primary btn-block">Sign In</Link>
          <p className="small text-center"><a href="mailto:brycestockman@gmail.com">Contact IT</a> to request a new password.</p>
        </form>
      </Row>
    </Container>
</div>

export default Contact;
