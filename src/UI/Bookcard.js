import React, { Component } from "react";
import dertogadaCover from "../images/dertogada.jpeg";

export class Bookcard extends Component {
  render() {
    return (
      <div>
        <div className="main-container">
          <div className="book-image">
            <img src={dertogadaCover} />
          </div>
          <div className="book-info">
            <div className="book-description">
              <h1>Title</h1>
              <h2>Author</h2>
              <h4>This is book description bla bla bla</h4>
            </div>
            <div className="book-buttons">
              <button>Buy</button>
              <button>Read More</button>
              <button>like</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Bookcard;
