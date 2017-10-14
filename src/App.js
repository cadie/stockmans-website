import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import English from "./pages/English";
import Western from "./pages/Western";
import Specials from "./pages/Specials";
import TackExchange from "./pages/TackExchange";
import Repair from "./pages/Repair";
import Contact from "./pages/Contact";
import Admin from "./pages/Admin";
import AdminTackExchange from "./pages/AdminTackExchange";
import AdminSpecials from "./pages/AdminSpecials";
import NoMatch from "./pages/NoMatch";
import { Col, Row, Container } from "./components/Grid";
import "./styles.css";

const App = () =>
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/english" component={English} />
        <Route exact path="/western" component={Western} />
        <Route exact path="/tack-exchange" component={TackExchange} />
        <Route exact path="/repair" component={Repair} />
        <Route exact path="/specials" component={Specials} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/admin" component={Admin} />
        <Route exact path="/admin/tack-exchange" component={AdminTackExchange} />
        <Route exact path="/admin/specials" component={AdminSpecials} />
        <Route component={NoMatch} />
      </Switch>
    </div>
  </Router>;

export default App;
