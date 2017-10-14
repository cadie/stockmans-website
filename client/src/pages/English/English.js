import React from "react";
import { Col, Row, Container } from "../../components/Grid";
import Jumbotron from "../../components/Jumbotron";
import Carousel from "../../components/Carousel";
import Card from "../../components/Card";
import Button from "../../components/Button";
import SpecialsCallout from "../../components/SpecialsCallout";
import AriatLogo from "./imgs/ariat.png";
import CharlesOwen from "./imgs/charlesowen.png";
import Kerrits from "./imgs/kerrits.png";
import Ovation from "./imgs/ovation.png";
import Pessoa from "./imgs/pessoa.png";
import Romph from "./imgs/romph.png";
import Tredstep from "./imgs/tredstep.png";
import Abetta from "./imgs/abetta.png";
import Bates from "./imgs/bates.png";

const English = () =>
  <div>
    <SpecialsCallout></SpecialsCallout>
    <Jumbotron>
      <Container>
        <Row>
          <Col size="md-12">
            <h1 className="text-center">ENGLISH</h1>
            <p className="text-center">Whether you are looking for saddles, tack, or apparel, we have it all! We proudly offer many of the world's finest brands catering to many disciplines including All-Purpose, Dressage, Hunter-Jumper and Eventing. Brands stocked include Albion, Barnsby, County, Pessoa,Prestige, Stubben
            and many more.</p>
          </Col>
        </Row>
      </Container>
    </Jumbotron>
    <Container>
      <Row>
        <Col size="md-4">
          <Card>
            <h2>SADDLES</h2>
            <p>We carry a wide variety of new and used english saddles and accessories. Our used saddles list can be found on the Tack Exchange page.</p>
          </Card>
        </Col>
        <Col size="md-4">
          <Card>
            <h2>APPAREL</h2>
            <p>Whether you are a weekend hacker or a Grand Prix show rider, Stockman's offers a broad range of recreational and show apparel. Shop from an inventory featuring many of the world's leading manufacturers and you'll find it easy to combine function with fashion and style.</p>
          </Card>
        </Col>
        <Col size="md-4">
          <Card>
            <h2>TACK</h2>
            <p>We carry a wide variety of english saddles and accessories. Check us out and see for yourself. Here is some more text to fill up more space. Hopefully this looks good!</p>
          </Card>
        </Col>
      </Row>
    </Container>
    <Carousel>
      <Col size="md-12">
        <h2 className="text-center brand-logos-header">WE PROUDLY CARRY THESE BRANDS:</h2>
        <img className="brand-logos-english" src={AriatLogo} alt="Ariat"/>
        <img className="brand-logos-english" src={CharlesOwen} alt="Charles Owen"/>
        <img className="brand-logos-english" src={Kerrits} alt="Kerrits"/>
        <img className="brand-logos-english" src={Ovation} alt="Ovation"/>
        <img className="brand-logos-english" src={Pessoa} alt="Pessoa"/>
        <img className="brand-logos-english" src={Romph} alt="Romph"/>
        <img className="brand-logos-english" src={Abetta} alt="Abetta"/>
        <img className="brand-logos-english-last" src={Bates} alt="Bates"/>
      </Col>
    </Carousel>
  </div>

export default English;
