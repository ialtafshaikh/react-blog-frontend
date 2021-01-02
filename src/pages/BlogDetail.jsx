import React, { Component } from "react";
import RelatedLinks from "../components/RelatedLinks";
import Cookies from "js-cookie";
import { endpoint } from "../endpoints";
import Navigation from "../components/Navbar";

export default class BlogDetail extends Component {
  constructor() {
    super();
    this.state = {
      blog: {},
    };
  }

  componentDidMount = () => {
    let myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer " + Cookies.get("jwt"));

    fetch(endpoint + this.props.match.params.id, {
      method: "GET",
      headers: myHeaders,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("blog:", data);
        this.setState({ blog: data });
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  renderNewBlog = (event) => {
    this.props.history.push("/blog/" + event.target.parentNode.id);
    this.setState({ blog: {} });
    let myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer " + Cookies.get("jwt"));
    fetch(endpoint + event.target.parentNode.id, {
      method: "GET",
      headers: myHeaders,
    })
      .then((response) => response.json())
      .then((data) => {
        this.setState({ blog: data });
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  render() {
    return Object.keys(this.state.blog).length === 0 ? (
      <p>Loading..</p>
    ) : (
      <div>
        <Navigation isLoggedIn={true} />
        <div className="container" id="blog">
          <div className="blog-detail">
            <div className="blog-container">
              <div className="blog-info">
                <h2 className="blog-title">{this.state.blog.title}</h2>
              </div>
              <div className="blog-img">
                <img src={this.state.blog.imageUrl} alt="img" />
              </div>
              <div className="blog-content">
                <p className="content">{this.state.blog.content}</p>
              </div>
            </div>
          </div>
          <RelatedLinks
            blog={this.state.blog}
            renderNewBlog={this.renderNewBlog}
          />
        </div>
      </div>
    );
  }
}
