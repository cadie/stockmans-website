import React from "react";
import { Col, Row, Container } from "../../components/Grid";
import Jumbotron from "../../components/Jumbotron";
import SpecialsCallout from "../../components/SpecialsCallout";

const About = () =>

<div>
  <SpecialsCallout>
  </SpecialsCallout>
    <Container>
      <Row>
        <Col size="md-12">
            <h1>Home Page</h1>
            <h1>
              <span role="img" aria-label="Face With Rolling Eyes Emoji">
                👨🏽‍🌾
              </span>
            </h1>
        </Col>
      </Row>
    </Container>
</div>;

export default About;
