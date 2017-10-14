import React, { Component } from "react";
import { Col, Row, Container } from "../../components/Grid";
import Jumbotron from "../../components/Jumbotron";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import SpecialsCallout from "../../components/SpecialsCallout";
import Coupon from "../../components/Coupon";
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
              <h1 className="text-center">Specials</h1>
              <p className="text-center">Check back weekly for new specials across all of our inventory.</p>
          </Container>
        </Jumbotron>
        <Container>
          <Row>
            <Col size="md-12">
              {this.state.specials.map(special => (
                <Coupon
                  key={special._id}
                  description={special.description}
                  restrictions={special.restrictions}
                  expiration={special.expiration}
                />
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
