import React from "react";
import { Col, Row, Container } from "../../components/Grid";
import Jumbotron from "../../components/Jumbotron";
import SpecialsCallout from "../../components/SpecialsCallout";

const Contact = () =>

<div>
  <SpecialsCallout></SpecialsCallout>
  <Jumbotron>
    <Container>
      <Row>
        <Col size="md-8">
          <h1>Contact Us</h1>
        </Col>
      </Row>
    </Container>
  </Jumbotron>
  <Container>
    <h1>Phone</h1>
  </Container>
</div>

export default Contact;
