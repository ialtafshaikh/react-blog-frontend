import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class RelatedLinks extends Component {
  render() {
    return (
      <aside className="side-bar">
        <h2>Related Links</h2>
        <div className="related-link-container">
          {this.props.blog.links.map((link) => {
            return (
              <div
                className="related-link"
                onClick={this.props.renderNewBlog}
                id={link.blogID}
              >
                <img
                  src="https://lh3.googleusercontent.com/proxy/HT3iW2adGH7XPg1uajYeYm5dwBNTqCsXnvfF06cEdlRk8dbS6p5a1PSTYwpt6iaX0wIzg-fY0tE08or7eptoaqU9McD-ImDk4W751PzVWmoVkyDJ0rQ23zP7Z3JNNg"
                  alt=""
                />
                <p className="link-title">{link.blogID}</p>
              </div>
            );
          })}
        </div>
      </aside>
    );
  }
}

export default withRouter(RelatedLinks);
