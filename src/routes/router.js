import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

//pages
import Home from "../pages/Home";

//components
import Navigation from "../components/Navbar";
import Footer from "../components/Footer";

//sass
import "../sass/style.scss";

//css
import "../styles/form.css";
import "../styles/home.css";

export default class Router extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Navigation />

          <Switch>
            <Route path="/" exact component={Home} />
          </Switch>
          <Footer />
        </BrowserRouter>
      </div>
    );
  }
}
