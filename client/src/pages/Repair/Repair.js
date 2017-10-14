import React from "react";
import { Col, Row, Container } from "../../components/Grid";
import Jumbotron from "../../components/Jumbotron";
import SpecialsCallout from "../../components/SpecialsCallout";
import ImageOne from "./img/repairimage1.jpg";
import ImageTwo from "./img/repairimage2.jpg";

const Repair = () =>

<div>
  <SpecialsCallout />
  <div className="repair-heading">
    <Container>
      <h1 className="text-center">REPAIR</h1>
      <p className="text-center">As the only full service in-house leather and equipment repair shop in the greater Orlando Area, we can help you out with any level of repair and maintenance. We work on anything from show saddles to working ranch saddles, to give you added years of use from your investment.</p>
    </Container>
  </div>
  <Container>
    <div className="repair-info-cards">
      <Row>
        <Col size="md-4">
          <h2 className="text-center">Saddles</h2>
          <p className="text-center">We reflock and do sheepskin replacement, repair trees, add or replace silver embellishments on Western show saddles, replace knee blocks and adjust your saddle, billet repair, replace or add breastplate rings, and replace worn stitching.</p>
        </Col>
        <Col size="md-4">
          <h2 className="text-center">Tack</h2>
          <p className="text-center">Stockman's Repair Shop can repair halters, bridles, keepers, girths, basically anything that goes on a horse that is made of leather. We also do leather maintenance, including conditioning and the oiling and dyeing of replacement parts to match. Our years of leatherwork experience allows us to do pattern tooling match on Western saddles. </p>
        </Col>
        <Col size="md-4">
          <h2 className="text-center">Other</h2>
          <p className="text-center">With our custom embroidery and engraving services, we can provide you your name (or your horse's name), barn logo or graphic on clothing, blankets, bridles, saddles or tack boxes.
          </p>
        </Col>
      </Row>
    </div>
  </Container>
  <div>
    <Container>
      <img className="repair-image-1" src={ImageOne} alt=""/>
      <img className="repair-image-2" src={ImageTwo} alt=""/>
    </Container>
  </div>
</div>
export default Repair;
