import React from "react";
import { Col, Row, Container } from "../../components/Grid";
import Jumbotron from "../../components/Jumbotron";
import SpecialsCallout from "../../components/SpecialsCallout";

const TackExchange = () =>
<div>
  <SpecialsCallout></SpecialsCallout>
  <Container>
    <Row>
      <Col size="md-12">
        <Jumbotron>
          <h1>Home Page</h1>
          <h1>
            <span role="img" aria-label="Face With Rolling Eyes Emoji">
              👨🏽‍🌾
            </span>
          </h1>
        </Jumbotron>
      </Col>
    </Row>
  </Container>;
</div>
export default TackExchange;
