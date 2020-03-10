import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      shows: ["friends", "house", "full house", "bachelor"]
    };
  }

  render() {
    let showsToDisplay = this.state.shows.map((element, index) => {
      return <h2 key={index}>{element}</h2>;
    });

    return <div className="App">{showsToDisplay}</div>;
  }
}

export default App;
