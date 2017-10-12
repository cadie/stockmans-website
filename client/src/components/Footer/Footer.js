import React from "react";
import "./Footer.css";
import { Col, Row, Container } from "../Grid";
import footerLogo from "./img/whitestockmanslogo.svg";
import Facebook from "./img/facebook.svg";
import Instagram from "./img/instagram.svg";
import AnniversaryBadge from "./img/70years.svg";

const Footer = () =>
    <footer>
      <Container>
        <Row>
          <Col size="lg-3">
            <a className="footer-logo" href="/"><img alt="Stockman's" src={footerLogo}></img></a>
            <p className="copyright">&copy; Copyright 2017 Stockman's Harness and Saddle Shop, Inc.</p>
          </Col>
          <Col size="lg-3">
            <p>
              <span className="hours-heading"><strong>Store Hours:</strong></span>
            </p>
            <p>
              Sunday & Monday - CLOSED
            </p>
            <p>
              Tuesday to Friday - 9:30 - 5:00
            </p>
            <p>
              Saturday - 9:30 - 5:00
            </p>
          </Col>
          <Col size="lg-2">
            <a className="social-media-icons" href="/"><img className="facebook" alt="Facebook" src={Facebook}></img></a>
            <a className="social-media-icons" href="/"><img className="instagram" alt="Instagram" src={Instagram}></img></a>
          </Col>
          <Col size="lg-3">
            <p>
              <span className="address-heading"><strong>Address:</strong></span>
            </p>
            <p>1820 Lee Road</p>
            <p>Orlando, FL 32810</p>
            <p>(407) 295 - 0331</p>
          </Col>
          <Col size="lg-1">
            <img alt="Stockman's" src={AnniversaryBadge} className="anniversary-badge"></img>
          </Col>
        </Row>
      </Container>
    </footer>

export default Footer;
