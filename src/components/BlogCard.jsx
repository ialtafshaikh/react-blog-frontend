import React, { Component } from "react";
import { Card, CardText, CardBody, CardLink, CardTitle } from "reactstrap";
import { Link } from "react-router-dom";

export default class BlogCard extends Component {
  render() {
    const blog = this.props.blog;
    return (
      <div>
        <Link to={`/blog/${blog.blogID}`}>
          <Card>
            <CardBody>
              <CardTitle tag="h5">{blog.title}</CardTitle>
            </CardBody>
            <img width="100%" src={blog.imageUrl} alt={blog.title} />
            <CardBody>
              <CardText>{blog.content.substr(0, 100)}...</CardText>
              <CardLink href="#">Card Link</CardLink>
            </CardBody>
          </Card>
        </Link>
      </div>
    );
  }
}
