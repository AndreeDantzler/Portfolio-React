import React from "react";
import "./components/Header/Header.css";
import "./components/Home/Home.css";
import "./components/Footer/Footer.css";
import "./components/About/About.css";
import "./components/Project/Project.css";
import "./components/Navigation/Navigation.css";
import Container from "react-bootstrap/Container";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Project from "./components/Project/Project";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Navigation from "./components/Navigation/Navigation";
import Home from "./components/Home/Home";


function App() {
  return (
  <Container>
    <Router>
    <Navigation/>
      <Header/>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/about-me" component={About}/>
            <Route path="/projects" component={Project}/>
            <Route path="/contact" component={Contact}/>
          </Switch>
      <Footer/>
    </Router>
  </Container>
  );
}

export default App;
