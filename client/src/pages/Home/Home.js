import React from "react";
import { Col, Row, Container } from "../../components/Grid";
import Jumbotron from "../../components/Jumbotron";
import Button from "../../components/Button";

const Home = () =>
  <div>
    <Jumbotron>
      <Container>
        <Col size="md-10 lg-7">
          <h1>Celebrating 70 Years</h1>
          <p>Family owned and operated for 70 years, Stockman's Harness & Saddle has earned the reputation of being a trustworthy and reliable source for English and Western tack. Featuring brands synonymous with quality and style, Stockman's offers value oriented pricing and customer service that's genuine and complete.</p>
          <Button link="about/">Learn More</Button>
        </Col>
      </Container>
    </Jumbotron>
    <Container fluid>
      <Row>
        <Col size="md-12">

        </Col>
      </Row>
    </Container>
  </div>;

export default Home;
