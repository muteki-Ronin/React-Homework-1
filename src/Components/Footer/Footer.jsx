// CORE
import React, { Component } from "react";
// STYLE
import "./style.css";

class Footer extends Component {
  render() {
    return (
      <footer className="page-footer light-blue lighten-1">
        <div className="footer-copyright">
          <h5>FOOTER</h5>
          <div className="container">
            © {new Date().getFullYear()} Copyright Text
            <a
              className="grey-text text-lighten-4 right"
              href="https://github.com/muteki-Ronin/React-Homework-1"
            >
              Repo
            </a>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
