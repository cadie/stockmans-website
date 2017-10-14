import React, { Component } from "react";
import { Col, Row, Container } from "../../components/Grid";
import Jumbotron from "../../components/Jumbotron";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import API from "../../utils/API";

class TackExchange extends Component {
  state = {
    tackExchange: [],
    style: "",
    description: "",
    seat: "",
    tree: "",
    price: "",
    condition: ""
  };

  componentDidMount() {
    this.loadTackExchange();
  }

  loadTackExchange = () => {
    API.getTackExchange()
      .then(res =>
        this.setState({ tackExchange: res.data, style: "", description: "", seat: "", tree: "", price: "", condition: "" })
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
              <h1>Tack Exchange</h1>
            </Row>
          </Container>
        </Jumbotron>
        <Container>
          <Row>
            <Col size="md-12">
              {this.state.tackExchange.map(tackExchange => (
                <p>
                  {tackExchange.style}<br></br>
                  {tackExchange.description}<br></br>
                  {tackExchange.seat}<br></br>
                  {tackExchange.tree}<br></br>
                  {tackExchange.price}<br></br>
                  {tackExchange.condition}
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

export default TackExchange;
