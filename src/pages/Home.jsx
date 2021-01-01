import React, { Component } from "react";
import Cookies from "js-cookie";

import { endpoint, login } from "../endpoints";

import Login from "./Login";

export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      blogs: [],
      isLoggedIn: false,
      email: "",
      password: "",
      loginError: "",
    };
  }
  componentDidMount = () => {
    let myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer " + Cookies.get("jwt"));

    fetch(endpoint, { headers: myHeaders, mode: "cors" })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        // alert("Please Login to continue");
        throw new Error("Please Login to continue");
      })
      .then(({ todos, currentUser }) => {
        this.setState({ isLoggedIn: true });
        this.loadBlogs();
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  loadBlogs = () => {
    let myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer " + Cookies.get("jwt"));
    fetch(endpoint, { headers: myHeaders, mode: "cors" })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Please Login to continue");
      })
      .then(({ blogs, currentUser }) => {
        console.log(blogs);
        this.setState({ blogs: blogs });
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  setEmail = (event) => {
    this.setState({ email: event.target.value });
  };

  setPassword = (event) => {
    this.setState({ password: event.target.value });
  };
  setTaskName = (event) => {
    this.setState({ taskName: event.target.value });
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
    console.log(JSON.stringify(formObject));

    fetch(login, {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formObject),
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        if (data.status.status === "unsuccessful") {
          this.setState({ loginError: data.status.message });
          return;
        }
        Cookies.set("jwt", data.data[0]["jwt"]);
        this.setState({ isLoggedIn: true });
        this.loadTodos();
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  logout = (event) => {
    Cookies.remove("jwt");
    this.setState({ isLoggedIn: false });
  };

  render() {
    return (
      <div>
        {this.state.isLoggedIn ? (
          <div className="body-container">
            <h1>card</h1>
          </div>
        ) : (
          <Login
            login={this.login}
            setEmail={this.setEmail}
            email={this.state.email}
            password={this.state.password}
            setPassword={this.setPassword}
            error={this.state.loginError}
          />
        )}
      </div>
    );
  }
}
