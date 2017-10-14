import React from "react";
import { Col, Row, Container } from "../../components/Grid";
import { Link } from "react-router-dom";
import "./AdminSpecials.css";

const Contact = () =>
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

          <div>
            <div className="col-lg-12">
              <div className="card">
                <div className="card-header">
                  <i className="fa fa-align-justify"></i> Tack Exchange
                </div>
                <div className="card-body">
                  <table className="table table-striped">
                    <thead>
                      <tr>
                        <th>Username</th>
                        <th>Date registered</th>
                        <th>Role</th>
                        <th>Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Yiorgos Avraamu</td>
                        <td>2012/01/01</td>
                        <td>Member</td>
                        <td>
                          <span className="badge badge-success">Active</span>
                        </td>
                      </tr>
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

export default Contact;
