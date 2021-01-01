import React, { Component } from "react";

export default class Home extends Component {
  render() {
    const style = {
      width: "100%",
    };
    return (
      <div className="body-container">
        <div className="card-container">
          <img
            src="https://www.w3schools.com/howto/img_avatar.png"
            alt="Avatar"
            className="image"
            style={style}
          />
          <div class="middle">
            <div class="text">John Doe</div>
          </div>
        </div>
      </div>
    );
  }
}
