import React, { Component } from "react";
import { Col, Row, Container } from "../../components/Grid";
import Jumbotron from "../../components/Jumbotron";
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
      </div>
    );
  }
}

export default Specials;
