import React, { Component } from "react";
import { Col, Row, Container } from "../../components/Grid";
import Jumbotron from "../../components/Jumbotron";
<<<<<<< HEAD
import SpecialsCallout from "../../components/SpecialsCallout";

const TackExchange = () =>
<div>
  <SpecialsCallout></SpecialsCallout>
  <Container>
    <Row>
      <Col size="md-12">
=======
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
>>>>>>> 75ec622d9db91ff1f29d9fc4c0dcdba7859310ab
        <Jumbotron>
          <Container>
            <Row>
              <h1>Tack Exchange</h1>
            </Row>
          </Container>
        </Jumbotron>
<<<<<<< HEAD
      </Col>
    </Row>
  </Container>;
</div>
=======
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
      </div>
    );
  }
}

>>>>>>> 75ec622d9db91ff1f29d9fc4c0dcdba7859310ab
export default TackExchange;
