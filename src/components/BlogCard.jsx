import React, { Component } from "react";
import { Card, CardText, CardBody, CardLink, CardTitle } from "reactstrap";

export default class BlogCard extends Component {
  render() {
    const blog = this.props.blog;
    return (
      <div>
        <Card>
          <CardBody>
            <CardTitle tag="h5">{blog.title}</CardTitle>
          </CardBody>
          <img width="100%" src={blog.imageUrl} alt={blog.title} />
          <CardBody>
            <CardText>{blog.content.substr(0, 100)}...</CardText>
            <CardLink href={`/blog/${blog.blogID}`}>Read More</CardLink>
          </CardBody>
        </Card>
      </div>
    );
  }
}
