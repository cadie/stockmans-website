import React from "react";
import { Col, Row, Container } from "../../components/Grid";
import Jumbotron from "../../components/Jumbotron";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import SpecialsCallout from "../../components/SpecialsCallout";

const Repair = () =>

<div>
  <Container>
    <Nav />
  </Container>
  <SpecialsCallout></SpecialsCallout>
  <Jumbotron>
    <Container>
      <Row>
        <Col size="md-8">
          <h1>Repair</h1>
          <p>As the only full service in-house leather and equipment repair shop in the greater Orlando Area, we can help you out with any level of repair and maintenance. We work on anything from show saddles to working ranch saddles, to give you added years of use from your investment.</p>
          <p>Stockman's Repair Shop can repair saddles, halters, bridles, keepers, girths, basically anything that goes on a horse that is made of leather. We reflock and do sheepskin replacement, repair trees, add or replace silver embellishments on Western show saddles, replace knee blocks and adjust your saddle, billet repair, replace or add breastplate rings, and replace worn stitching.</p>
          <p>We do leather maintenance, including conditioning and the oiling and dyeing of replacement parts to match. Our years of leatherwork experience allows us to do pattern tooling match on Western saddles.</p>
          <p>With our custom embroidery and engraving services, we can provide you your name (or your horse's name), barn logo or graphic on clothing, blankets, bridles, saddles or tack boxes.
          </p>
        </Col>
      </Row>
    </Container>
  </Jumbotron>
  <Footer />
</div>
export default Repair;
