import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import English from "./pages/English";
import Western from "./pages/Western";
import NewsEvents from "./pages/NewsEvents";
import Specials from "./pages/Specials";
import TackExchange from "./pages/TackExchange";
import Contact from "./pages/Contact";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import { Col, Row, Container } from "./components/Grid";
import "./styles.css";

const App = () =>
  <Router>
    <div>
      <Container>
        <Nav />
      </Container>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/english" component={English} />
        <Route exact path="/western" component={Western} />
        <Route exact path="/tack-exchange" component={TackExchange} />
        <Route exact path="/specials" component={Specials} />
        <Route exact path="/news-events" component={NewsEvents} />
        <Route exact path="/contact" component={Contact} />
        <Route component={NoMatch} />
      </Switch>
      <Footer />
    </div>
  </Router>;

export default App;
