import React, { Component } from "react";

import Navbar from "../components/Navbar";

import store from "../redux/store/store";
import { userActionTypes } from "../redux/constants/usersAction.types";
import usersActionCreator from "../redux/actions/usersAction.creator";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      loginError: "",
      // currentUser: {},
    };
  }

  setEmail = (event) => {
    this.setState({ email: event.target.value });
  };

  setPassword = (event) => {
    this.setState({ password: event.target.value });
  };

  login = (event) => {
    event.preventDefault();

    if (this.state.email === "" && this.state.password === "") {
      this.setState({ loginError: "email and password field empty" });
      return;
    }
    if (this.state.email === "") {
      this.setState({ loginError: "email field empty" });
      return;
    }

    if (this.state.password === "") {
      this.setState({ loginError: "password field empty" });
      return;
    }

    var formData = new FormData(event.target);

    var formObject = {};
    formData.forEach(function (value, key) {
      formObject[key] = value;
    });

    store.dispatch(
      usersActionCreator(userActionTypes.LOGIN_SUCCESS, {
        formObject: JSON.stringify(formObject),
      })
    );
  };

  render() {
    return (
      <>
        <Navbar />
        <div className="form-container">
          <h1 className="form-title">User Login Form</h1>
          {/* <p className="error">{this.props.error}</p> */}
          <form
            action=""
            method=""
            name="login"
            encType="application/x-www-form-urlencoded"
            onSubmit={this.login}
          >
            <label htmlFor="email">Email </label>
            <input
              type="email"
              name="email"
              onChange={this.setEmail}
              value={this.state.email}
            />
            <br />
            <label htmlFor="password">Password </label>
            <input
              type="password"
              name="password"
              onChange={this.setPassword}
              value={this.state.password}
            />
            <br />
            <input type="submit" className="loginbtn" value="Login" />
            <hr />
            <p>
              don't have an account?
              <a href="/signup">SignUp Here</a>.
            </p>
          </form>
        </div>
      </>
    );
  }
}

export default Login;
