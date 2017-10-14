import React from "react";
import { Col, Row, Container } from "../../components/Grid";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import Jumbotron from "../../components/Jumbotron";
import Carousel from "../../components/Carousel";
import Card from "../../components/Card";
import Button from "../../components/Button";
import SpecialsCallout from "../../components/SpecialsCallout";
import AriatLogo from "../English/imgs/ariat.png";
import CharlesOwen from "../English/imgs/charlesowen.png";
import Kerrits from "../English/imgs/kerrits.png";
import Ovation from "../English/imgs/ovation.png";
import Pessoa from "../English/imgs/pessoa.png";
import Romph from "../English/imgs/romph.png";
import Tredstep from "../English/imgs/tredstep.png";
import Abetta from "../English/imgs/abetta.png";
import Bates from "../English/imgs/bates.png";

const Western = () =>
  <div>
      <Container>
        <Nav />
      </Container>
    <SpecialsCallout></SpecialsCallout>
    <Jumbotron>
      <Container>
        <Row>
          <Col size="md-12">
            <h1 className="text-center">WESTERN</h1>
            <p className="text-center">From bits to bridles to blankets, from saddles to spurs, our selection and quality truly makes Stockman's a one-stop shop for all Western components. If for some reason we don't have what you need in stock, our long-standing relationships with manufacturers allows us the ability to quickly custom order nearly any item that you may need.</p>
          </Col>
        </Row>
      </Container>
    </Jumbotron>
    <Container>
      <Row>
        <Col size="md-6">
          <Card>
            <h2>SADDLES</h2>
            <p>We carry a wide variety of new and used Western saddles and accessories. Our used saddles list can be found on the Tack Exchange page.</p>
          </Card>
        </Col>
        <Col size="md-6">
          <Card>
            <h2>TACK</h2>
            <p>We carry a wide variety of Western saddles and accessories. Check us out and see for yourself. Here is some more text to fill up more space. Hopefully this looks good!</p>
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
  </Jumbotron>
  <Footer />
  </div>

export default Western;
