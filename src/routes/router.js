import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

//pages
import Home from "../pages/Home";
import Signup from "../pages/Signup";
import BlogDetail from "../pages/BlogDetail";

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
            <Route path="/blog/:id" exact component={BlogDetail} />
            <Route path="/signup" exact component={Signup} />
          </Switch>
          <Footer />
        </BrowserRouter>
      </div>
    );
  }
}
