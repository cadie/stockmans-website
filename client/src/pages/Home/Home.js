import React from "react";
import { Col, Row, Container } from "../../components/Grid";
import Jumbotron from "../../components/Jumbotron";
import Button from "../../components/Button";
import Card from "../../components/Card";
import BlackCallout from "../../components/BlackCallout";
import Carousel from "../../components/Carousel";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import AriatLogo from "./imgs/ariat-logo.png";
import MailingList from "../../components/MailingList";
import SpecialsCallout from "../../components/SpecialsCallout";



const Home = () =>
  <div>
    <Container>
      <Nav />
    </Container>
    <SpecialsCallout>
    </SpecialsCallout>
    <Jumbotron>
      <Container>
        <Col size="md-10 lg-7">
          <h1>CELEBRATING 70 YEARS</h1>
          <p>Family owned and operated for 70 years, Stockman's Harness & Saddle has earned the reputation of being a trustworthy and reliable source for English and Western tack. Featuring brands synonymous with quality and style, Stockman's offers value oriented pricing and customer service that's genuine and complete.</p>
          <Button link="about/">Learn More</Button>
        </Col>
      </Container>
    </Jumbotron>
    <Container>
      <Row>
        <Col size="md-4">
          <Card>
            <h2>ENGLISH</h2>
            <p>We proudly offer many of the world's finest brands catering to many disciplines including All-Purpose, Dressage, Hunter-Jumper and Eventing. Brands stocked include Albion, Barnsby, County, Pessoa,Prestige, Stubben and many more.</p>
            <Button link="english/">Details</Button>
          </Card>
        </Col>
        <Col size="md-4">
          <Card>
            <h2>WESTERN</h2>
            <p>No matter where your interests lie, we carry saddles and tack for Western rider. We offer a complete line of tack and saddles featuring many prominent manufacturers such as Big Horn, Circle Y and Tucker saddlery.</p>
            <Button link="western/">Details</Button>
          </Card>
        </Col>
        <Col size="md-4">
          <Card>
            <h2>REPAIR</h2>
            <p>As the only full service in-house leather and equipment repair shop in the greater Orlando Area, we can help you out with any level of repair and maintenance. We work on anything from show saddles to working ranch saddles.</p>
            <Button link="repair/">Details</Button>
          </Card>
        </Col>
      </Row>
    </Container>
    <BlackCallout>
      <Container>
        <Col size="md-12">
            <h2>THE TACK EXCHANGE</h2>
            <p>The Tack Exchange is filled with quality pre-owned, consigned and close-out merchandise consisting of Saddles, Tack, English Apparel, Stable Supplies and Accessories, giving Stockman's one of the largest used saddle and tack selections in Central Florida. We receive new consignment items on a weekly basis and always have something new to choose from. Be sure to check out our Tack Exchange page for an up to date list of our used saddle inventory.</p>
            <Button link="tack-exchange/">Used Saddles List</Button>
        </Col>
      </Container>
    </BlackCallout>
    <Carousel>
      <Col size="md-12">
        <h2 className="text-center">WE PROUDLY CARRY THESE BRANDS:</h2>
        <img src={AriatLogo} alt="Ariat"/>
      </Col>
    </Carousel>
    <MailingList />
    <Footer />
  </div>;

export default Home;
