import React, { Component } from "react";
import Cookies from "js-cookie";
import { Row, Col } from "reactstrap";

import { endpoint } from "../endpoints";

import BlogCard from "../components/BlogCard";
import Navbar from "../components/Navbar";

export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      blogs: [],
      isLoggedIn: false,
      currentUser: {},
      loading: true,
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
      .then(({ blogs, currentUser }) => {
        this.setState({ isLoggedIn: true, currentUser: currentUser });
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
        this.setState({ blogs: blogs });
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  logout = (event) => {
    // Cookies.remove("jwt");
    // this.setState({ isLoggedIn: false });
    // this.props.history.push("/");
  };

  render() {
    return (
      <div>
        {this.state.loading ? (
          <div>Loading..</div>
        ) : (
          <>
            <Navbar isLoggedIn={this.state.isLoggedIn} logout={this.logout} />
            <div className="body-container">
              <Row>
                {this.state.blogs.map((blog) => {
                  return (
                    <Col sm="3" className="py-2">
                      <BlogCard blog={blog} key={blog.blogID} />
                    </Col>
                  );
                })}
              </Row>
            </div>
          </>
        )}
      </div>
    );
  }
}
