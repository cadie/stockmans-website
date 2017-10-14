import React from "react";
import { Col, Row, Container } from "../../components/Grid";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import Jumbotron from "../../components/Jumbotron";
import SpecialsCallout from "../../components/SpecialsCallout";


const Western = () =>
<div>
  <Container>
    <Nav />
  </Container>
  <SpecialsCallout></SpecialsCallout>
  <Jumbotron>
    <Container>
      <Row>
        <Col size="md-8">
          <h1>Western</h1>
          <p>No matter where your interests lie, we carry saddles and tack for Western rider. We offer a complete line of tack and saddles featuring many prominent manufacturers such as Big Horn, Circle Y and Tucker saddlery.</p>
          <p>Each discipline has a certain focus and ever-changing requirements, so let us know where your interests lie and our always helpful and knowledgeable staff will assist you in any way, from picking out the saddle that is right for you and your horse to making sure the tack you select is approved for use in competition.</p>
          <p>From bits to bridles to blankets, from saddles to spurs, our selection and quality truly makes Stockman's a one-stop shop for all Western components. If for some reason we don't have what you need in stock, our long-standing relationships with manufacturers allows us the ability to quickly custom order nearly any item that you may need.</p>
        </Col>
      </Row>
    </Container>
  </Jumbotron>
  <Footer />
</div>
export default Western;
