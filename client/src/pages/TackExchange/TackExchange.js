import React, { Component } from "react";
import { Col, Row, Container } from "../../components/Grid";
import Jumbotron from "../../components/Jumbotron";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import SpecialsCallout from "../../components/SpecialsCallout";
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
    const tableStyle = {
      margin: '40px 0'
    };
    return (
      <div>
        <Container>
          <Nav />
        </Container>
        <SpecialsCallout />
        <Jumbotron>
          <Container>
              <h1 className="text-center">Tack Exchange</h1>
              <p className="text-center">The Tack Exchange is filled with quality pre-owned, consigned and close-out merchandise consisting of Saddles, Tack, English Apparel, Stable Supplies and Accessories, giving Stockman's one of the largest used saddle and tack selections in Central Florida.</p>
              <p className="text-center">We receive new consignment items on a weekly basis and always have something new to choose from.</p>
          </Container>
        </Jumbotron>
        <Container>
          <Row>
            <Col size="md-12">
              <table className="table table-striped" style={tableStyle}>
                <thead>
                  <tr>
                    <th>Style</th>
                    <th>Description</th>
                    <th>Seat</th>
                    <th>Tree</th>
                    <th>Price</th>
                    <th>Condition</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.tackExchange.map(tackExchange => (
                      <tr key={tackExchange._id}>
                        <td>{tackExchange.style}</td>
                        <td>{tackExchange.description}</td>
                        <td>{tackExchange.seat}</td>
                        <td>{tackExchange.tree}</td>
                        <td>{tackExchange.price}</td>
                        <td>{tackExchange.condition}</td>
                      </tr>
                  ))}
                </tbody>
              </table>
            </Col>
          </Row>
        </Container>
        <Footer />
      </div>
    );
  }
}

export default TackExchange;
