import React, { Component } from "react";
import Cookies from "js-cookie";
import { Row, Col } from "reactstrap";
import { connect } from "react-redux";

import { endpoint } from "../endpoints";

import BlogCard from "../components/BlogCard";
import Navbar from "../components/Navbar";

import store from "../redux/store/store";
import { userActionTypes } from "../redux/constants/usersAction.types";
import usersActionCreator from "../redux/actions/usersAction.creator";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      blogs: [],
      loading: false,
    };
  }
  componentDidMount = () => {
    store.dispatch(usersActionCreator(userActionTypes.AUTHORIZED));
    // let myHeaders = new Headers();
    // myHeaders.append("Authorization", "Bearer " + Cookies.get("jwt"));
    // fetch(endpoint, { headers: myHeaders, mode: "cors" })
    //   .then((response) => {
    //     if (response.ok) {
    //       return response.json();
    //     }
    //     this.props.history.push("/login");
    //     throw new Error("Please Login to continue");
    //   })
    //   .then(({ blogs, currentUser }) => {
    //     this.setState({ blogs: [...blogs] });
    //   })
    //   .catch((error) => {
    //     console.error("Error:", error);
    //   });
  };

  // loadBlogs = () => {
  //   let myHeaders = new Headers();
  //   myHeaders.append("Authorization", "Bearer " + Cookies.get("jwt"));
  //   fetch(endpoint, { headers: myHeaders, mode: "cors" })
  //     .then((response) => {
  //       if (response.ok) {
  //         return response.json();
  //       }
  //       throw new Error("Please Login to continue");
  //     })
  //     .then(({ blogs, currentUser }) => {
  //       this.setState({ blogs: blogs });
  //     })
  //     .catch((error) => {
  //       console.error("Error:", error);
  //     });
  // };

  logout = (event) => {
    // Cookies.remove("jwt");
    // this.setState({ isLoggedIn: false });
    // this.props.history.push("/");
  };

  render() {
    if (!Cookies.get("isLoggedIn") && !this.props.isLoggedIn) {
      this.props.history.push("/login");
    }
    return (
      <div>
        {this.state.loading ? (
          <>
            <Navbar />
            <div>Loading..</div>
          </>
        ) : (
          <>
            <Navbar />
            <div className="body-container">
              <Row>
                {this.props.blogs.map((blog) => {
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

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.loginReducer.isLoggedIn,
    blogs: state.blogReducer.blogs,
  };
};

export default connect(mapStateToProps)(Home);
