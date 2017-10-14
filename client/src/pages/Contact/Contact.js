import React from "react";
import { Col, Row, Container } from "../../components/Grid";
import Jumbotron from "../../components/Jumbotron";
import SpecialsCallout from "../../components/SpecialsCallout";
import Facebook from "./img/facebook_1.svg";
import Instagram from "./img/instagram.svg";

const Contact = () =>

<div>
  <SpecialsCallout></SpecialsCallout>
  <Container>
    <row className="contact-header">
      <h1 className="text-center">CONTACT US</h1>
    </row>
    <div className="col-md-6 contact-page-location">
      <h2>LOCATION</h2>
      <br/>
      <div>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.9363450395554!2d-81.41038288491812!3d28.601686382429996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88e770bdacc22029%3A0x4c6e62c2936cc5e3!2sStockman&#39;s+Harness+%26+Saddle+Shop!5e0!3m2!1sen!2sus!4v1507944792480" width="100%" height="450" frameborder="0" style={{border:0}} allowfullscreen></iframe>
      </div>
      <br/>
      <h5>Stockman's Harness and Saddle Shop, Inc.</h5>
      <br/>
      <p>1820 Lee Road</p>
      <p>Orlando, FL. 32810</p>
      <br/>
      <p>(407) 295-0331</p>
      <p>Stockmans@cfl.rr.com</p>
      <br/>
      <a href="https://www.facebook.com/Stockmans-Harness-Saddle-Shop-289230570985/" target="_blank"><img className="location-social-icons" src={Facebook} alt="Facebook"/></a>
      <a href="https://www.instagram.com/stockmansharness/" target="_blank"><img  className="location-social-icons" src={Instagram} alt="Instagram"/></a>
    </div>
  </Container>
</div>

export default Contact;
