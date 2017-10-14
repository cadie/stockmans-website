import React, { Component } from "react";
import { Col, Row, Container } from "../../components/Grid";
import { Input, TextArea, FormBtn } from "../../components/Form";
import Jumbotron from "../../components/Jumbotron";
import DeleteBtn from "../../components/DeleteBtn";
import { Link } from "react-router-dom";
import API from "../../utils/API";
import "../AdminSpecials/AdminSpecials.css"

class AdminTackExchange extends Component {
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

  deleteTackExchange = id => {
    API.deleteTackExchange(id)
      .then(res => this.loadTackExchange())
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
    if (this.state.style && this.state.description && this.state.seat && this.state.tree && this.state.price && this.state.condition) {
      API.saveTackExchange({
        style: this.state.style,
        description: this.state.description,
        seat: this.state.seat,
        tree: this.state.tree,
        price: this.state.price,
        condition: this.state.condition
      })
        .then(res => this.loadTackExchange())
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
                      <h5 className="modal-title" id="exampleModalLabel">New Tack Exchange Listing</h5>
                      <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <div className="modal-body">
                      <form>
                        <Input
                          value={this.state.style}
                          onChange={this.handleInputChange}
                          name="style"
                          placeholder="Style"
                        />
                        <Input
                          value={this.state.description}
                          onChange={this.handleInputChange}
                          name="description"
                          placeholder="Description"
                        />
                        <Input
                          value={this.state.seat}
                          onChange={this.handleInputChange}
                          name="seat"
                          placeholder="Seat"
                        />
                        <Input
                          value={this.state.tree}
                          onChange={this.handleInputChange}
                          name="tree"
                          placeholder="Tree"
                        />
                        <Input
                          value={this.state.price}
                          onChange={this.handleInputChange}
                          name="price"
                          placeholder="Price"
                        />
                        <Input
                          value={this.state.condition}
                          onChange={this.handleInputChange}
                          name="condition"
                          placeholder="Condition"
                        />
                        <FormBtn
                          disabled={!(this.state.style && this.state.description && this.state.seat && this.state.tree && this.state.price && this.state.condition)}
                          onClick={this.handleFormSubmit} data-dismiss="modal"
                        >
                          Add Tack Exchange Listing
                        </FormBtn>
                      </form>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <div className="col-lg-12">
                  <Row>
                    <div className="col-md-8"><h2>Tack Exchange</h2></div>
                    <div className="col-md-4">
                      <button type="button" data-toggle="modal" data-target="#newListingModal" className="float-right btn-success">Add</button>
                    </div>
                  </Row>
                  <div className="">
                    <div className="">
                      <table className="table table-striped">
                        <thead>
                          <tr>
                            <th>Style</th>
                            <th>Description</th>
                            <th>Seat</th>
                            <th>Tree</th>
                            <th>Price</th>
                            <th>Condition</th>
                            <th></th>
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
                              <td><DeleteBtn onClick={() => this.deleteTackExchange(tackExchange._id)} /></td>
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

export default AdminTackExchange;
