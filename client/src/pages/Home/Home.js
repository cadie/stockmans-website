import React from "react";
import { Col, Row, Container } from "../../components/Grid";
import Jumbotron from "../../components/Jumbotron";
import Button from "../../components/Button";
import Card from "../../components/Card";
import BlackCallout from "../../components/BlackCallout";



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
    <Container>
      <Row>
        <Col size="md-4">
          <Card>
            <h2>English</h2>
            <p>We carry a wide variety of english saddles and accessories. Check us out and see for yourself. Here is some more text to fill up more space. Hopefully this looks good!</p>
            <Button link="english/">Details</Button>
          </Card>
        </Col>
        <Col size="md-4">
          <Card>
            <h2>Western</h2>
            <p>We carry a wide variety of english saddles and accessories. Check us out and see for yourself. Here is some more text to fill up more space. Hopefully this looks good!</p>
            <Button link="western/">Details</Button>
          </Card>
        </Col>
        <Col size="md-4">
          <Card>
            <h2>Repair</h2>
            <p>We carry a wide variety of english saddles and accessories. Check us out and see for yourself. Here is some more text to fill up more space. Hopefully this looks good!</p>
            <Button link="repair/">Details</Button>
          </Card>
        </Col>
      </Row>
    </Container>
    <BlackCallout>
      <Container>
        <Col size="md-12">
            <h2>The Tack Exchange</h2>
            <p>The Tack Exchange is filled with quality pre-owned, consigned and close-out merchandise consisting of Saddles, Tack, English Apparel, Stable Supplies and Accessories, giving Stockman's one of the largest used saddle and tack selections in Central Florida.</p>
            <Button link="tack-exchange/">Learn More</Button>
        </Col>
      </Container>
    </BlackCallout>

  </div>;

export default Home;
