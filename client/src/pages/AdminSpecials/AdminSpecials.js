import React, { Component } from "react";
import { Col, Row, Container } from "../../components/Grid";
import { Input, TextArea, FormBtn } from "../../components/Form";
import Jumbotron from "../../components/Jumbotron";
import DeleteBtn from "../../components/DeleteBtn";
import { Link } from "react-router-dom";
import API from "../../utils/API";
import "./AdminSpecials.css"

class AdminSpecials extends Component {
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

  deleteSpecials = id => {
    API.deleteSpecials(id)
      .then(res => this.loadSpecials())
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.description && this.state.restrictions && this.state.expiration) {
      API.saveSpecials({
        description: this.state.description,
        restrictions: this.state.restrictions,
        expiration: this.state.expiration
      })
        .then(res => this.loadSpecials())
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <div id="admin">
        <div className="app header-fixed sidebar-fixed aside-menu-fixed aside-menu-hidden">
          <header className="app-header navbar">
            <a className="navbar-brand" href="#"></a>
            <Link to="/" className="logout">Log Out</Link>
          </header>

          <div className="app-body">
            <div className="sidebar">
              <nav className="sidebar-nav">
                <ul className="nav">
                  <li className="nav-item">
                    <Link className="nav-link" to="/admin/specials">Specials</Link>
                    <Link className="nav-link" to="/admin/tack-exchange">Tack Exchange</Link>
                  </li>

                </ul>
              </nav>
              <button className="sidebar-minimizer brand-minimizer" type="button"></button>
            </div>

            <main className="main">

              <div className="modal fade" id="newListingModal" tabindex="-1" role="dialog" aria-hidden="true">
                <div className="modal-dialog" role="document">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title" id="exampleModalLabel">New Special</h5>
                      <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <div className="modal-body">
                      <form>
                        <Input
                          value={this.state.description}
                          onChange={this.handleInputChange}
                          name="description"
                          placeholder="Description"
                        />
                        <Input
                          value={this.state.restrictions}
                          onChange={this.handleInputChange}
                          name="restrictions"
                          placeholder="Restrictions"
                        />
                        <Input
                          value={this.state.expiration}
                          onChange={this.handleInputChange}
                          name="expiration"
                          placeholder="Expiration"
                        />
                        <FormBtn
                          disabled={!(this.state.description && this.state.restrictions && this.state.expiration)}
                          onClick={this.handleFormSubmit} data-dismiss="modal"
                        >
                          Add Special
                        </FormBtn>
                      </form>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <div className="col-lg-12">
                  <Row>
                    <div className="col-md-8"><h2>Specials</h2></div>
                    <div className="col-md-4">
                      <button type="button" data-toggle="modal" data-target="#newListingModal" className="float-right btn-success">Add</button>
                    </div>
                  </Row>
                  <div className="">
                    <div className="">
                      <table className="table table-striped">
                        <thead>
                          <tr>
                            <th>Description</th>
                            <th>Restrictions</th>
                            <th>Expiration</th>
                            <th></th>
                          </tr>
                        </thead>
                        <tbody>
                          {this.state.specials.map(special => (
                            <tr key={special._id}>
                              <td>{special.description}</td>
                              <td>{special.restrictions}</td>
                              <td>{special.expiration}</td>
                              <td><DeleteBtn onClick={() => this.deleteSpecials(special._id)} /></td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>

            </main>

          </div>

          <footer className="app-footer">
            <span>Stockman's Harness and Saddle Shop, Inc. © 2017</span>
          </footer>
        </div>
      </div>

);
}
}

export default AdminSpecials;
