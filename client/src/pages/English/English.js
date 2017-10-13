import React from "react";
import { Col, Row, Container } from "../../components/Grid";
import Jumbotron from "../../components/Jumbotron";
import Card from "../../components/Card";
import Button from "../../components/Button";
import SpecialsCallout from "../../components/SpecialsCallout";

const English = () =>
  <div>
    <SpecialsCallout></SpecialsCallout>
    <Jumbotron>
      <Container>
        <Row>
          <Col size="md-12">
            <h1 className="text-center">English</h1>
            <p className="text-center">Whether you are looking for saddles, tack, or apparel, we have it all! We proudly offer many of the world's finest brands catering to many disciplines
            including All-Purpose, Dressage, Hunter-Jumper and Eventing. Brands stocked include Albion, Barnsby, County, Pessoa,Prestige, Stubben
            and many more.</p>
          </Col>
        </Row>
      </Container>
    </Jumbotron>
    <Container>
      <Row>
        <Col size="md-4">
          <Card>
            <h2>Saddles</h2>
            <p>We carry a wide variety of english saddles and accessories. Check us out and see for yourself. Here is some more text to fill up more space. Hopefully this looks good!</p>
          </Card>
        </Col>
        <Col size="md-4">
          <Card>
            <h2>Apparel</h2>
            <p>We carry a wide variety of english saddles and accessories. Check us out and see for yourself. Here is some more text to fill up more space. Hopefully this looks good!</p>
          </Card>
        </Col>
        <Col size="md-4">
          <Card>
            <h2>Tack</h2>
            <p>We carry a wide variety of english saddles and accessories. Check us out and see for yourself. Here is some more text to fill up more space. Hopefully this looks good!</p>
          </Card>
        </Col>
      </Row>
    </Container>
  </div>

export default English;
