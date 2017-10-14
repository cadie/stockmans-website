import React from "react";
import { Col, Row, Container } from "../../components/Grid";
import Jumbotron from "../../components/Jumbotron";
import SpecialsCallout from "../../components/SpecialsCallout";
import StoreOne from "./imgs/store1.jpg";
import StoreTwo from "./imgs/store2.jpg";
import StoreThree from "./imgs/store3.jpg";
import StoreFour from "./imgs/store4.jpg";
import StoreFive from "./imgs/store5.jpg";
import StoreSix from "./imgs/store6.JPG";
import StoreSeven from "./imgs/store7.JPG";
import StoreEight from "./imgs/store8.JPG";
import OldAndNew from "./imgs/oldandnewstore.jpg";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";

const About = () =>

<div>
  <Container>
    <Nav />
  </Container>
  <SpecialsCallout>
  </SpecialsCallout>
  <div className="about-heading">
    <Container>
      <h1 className="text-center">About Us</h1>
      <p className="text-center">Family owned and operated for 70 years, Stockman's Harness & Saddle has earned the reputation of being a trustworthy and reliable source for English and Western tack. Featuring brands synonymous with quality and style, Stockman's offers value oriented pricing and customer service that's genuine and complete. </p>
    </Container>
  </div>
  <div className="body-text">
    <Container>
      <Row>
        <Col size="md-10">
          <h2>CELEBRATING 70 YEARS</h2>
          <p>Stockman's is truly a full service tack shop offering a full range of services that include custom tack alterations and repair, billet replacement, blanket repair, saddle fitting, flocking and much more. Embroidery and engraving services are also available for your convenience.</p>
          <p>The Tack Exchange, a division of Stockman's, is home to a large collection of pre-owned saddles, tack and apparel. Housed in its own building, The Tack Exchange features over 100 pre-owned saddles of varying types and sizes. A inventory list is always available for review.</p>
        </Col>
      </Row>
    </Container>
  </div>
  <Container>
    <img className="old-and-new" src={OldAndNew} alt="Old and New Store"/>
  </Container>
<Footer />
</div>;

export default About;
