import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

//pages
import Home from "../pages/Home";

//components
import Navigation from "../components/Navbar";

export default class Router extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Navigation />

          <Switch>
            <Route path="/" exact component={Home} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}
