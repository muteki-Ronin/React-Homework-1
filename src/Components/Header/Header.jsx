// CORE
import React, { Component } from "react";
// STYLE
import "./style.css";

class Header extends Component {
  render() {
    return (
      <nav className="light-blue lighten-1">
        <div className="nav-wrapper">
          <a href="https://github.com/muteki-Ronin/" className="brand-logo">
            HEADER
          </a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li>
              <a href="https://github.com/muteki-Ronin/React-Homework-1">Repo</a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Header;
