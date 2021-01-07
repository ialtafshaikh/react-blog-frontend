import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

function Navbar(props) {
  return (
    <header>
      <nav className="navigation">
        <div className="logo-container">
          <a href="/">
            <img
              className="logo"
              src="https://www.raweng.com/v3/assets/bltaacb6b0c9b693c2d/bltc1a71705f49d391d/5de663548d1dce6ad6bed8bf/header-logo.svg?format=pjpg&width=220"
              alt=""
            />
          </a>
        </div>
        <div className="navigation-container">
          <ul>
            <li className="nav-item active">
              <a className="nav-link" href="/">
                Home
              </a>
            </li>
            {props.isLoggedIn ? (
              <>
                <li className="nav-item">
                  <a className="nav-link" href="/">
                    Blogs
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/create">
                    Create Blog{" "}
                    <i className="fa fa-plus" aria-hidden="true"></i>
                  </a>
                </li>
                <li className="nav-item" onClick={props.logout}>
                  <a className="nav-link" href="##" id="logout">
                    <i className="fa fa-sign-out" aria-hidden="true"></i>
                  </a>
                </li>
              </>
            ) : (
              <li></li>
            )}
          </ul>
          <div id="ham">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </nav>
    </header>
  );
}

const mapStateToProps = (state) => {
  // console.log(state);
  return {
    isLoggedIn: state.loginReducer.isLoggedIn,
  };
};

export default connect(mapStateToProps)(withRouter(Navbar));
