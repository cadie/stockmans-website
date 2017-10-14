import React, { Component } from "react";
import { Col, Row, Container } from "../../components/Grid";
import Jumbotron from "../../components/Jumbotron";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import API from "../../utils/API";

class Specials extends Component {
  state = {
    specials: [],
    description: "",
    restrictions: "",
    expiration: ""
  };

  componentDidMount() {
    this.loadSpecials();
  }

  loadSpecials = () => {
    API.getSpecials()
      .then(res =>
        this.setState({ specials: res.data, description: "", restrictions: "", expiration: "" })
      )
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        <Container>
          <Nav />
        </Container>
        <Jumbotron>
          <Container>
            <Row>
              <h1>Specials</h1>
            </Row>
          </Container>
        </Jumbotron>
        <Container>
          <Row>
            <Col size="md-12">
              {this.state.specials.map(special => (
                <p>
                  {special.description}, {special.restrictions}, {special.expiration}
                </p>
              ))}
            </Col>
          </Row>
        </Container>
        <Footer />
      </div>
    );
  }
}

export default Specials;
