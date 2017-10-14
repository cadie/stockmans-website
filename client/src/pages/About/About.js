import React from "react";
import { Col, Row, Container } from "../../components/Grid";
import Jumbotron from "../../components/Jumbotron";
import SpecialsCallout from "../../components/SpecialsCallout";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";

const About = () =>

<div>
  <Container>
    <Nav />
  </Container>
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
    <Footer />
</div>;

export default About;
