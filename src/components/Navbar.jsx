import React from "react";
import { withRouter } from "react-router-dom";

function Navbar() {
  return (
    <header>
      <nav class="navigation">
        <div class="logo-container">
          <a href="/">
            <img
              class="logo"
              src="https://www.raweng.com/v3/assets/bltaacb6b0c9b693c2d/bltc1a71705f49d391d/5de663548d1dce6ad6bed8bf/header-logo.svg?format=pjpg&width=220"
              alt=""
            />
          </a>
        </div>
        <div class="navigation-container">
          <ul>
            <li class="nav-item active">
              <a class="nav-link" href="/">
                Home
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#blog">
                Blogs
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="../blog-frontend/createBlog.html">
                Create Blog <i class="fa fa-plus" aria-hidden="true"></i>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/logout" id="logout">
                <i class="fa fa-sign-out" aria-hidden="true"></i>
              </a>
            </li>
            <li class="nav-item">
              <label id="switch" class="switch">
                <input type="checkbox" id="slider" />
                <span class="slider round"></span>
              </label>
            </li>
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

export default withRouter(Navbar);
