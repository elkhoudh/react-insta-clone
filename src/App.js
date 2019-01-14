import React, { Component } from "react";
import Data from "./dummy-data";
import "./App.scss";

class App extends Component {
  state = {
    data: Data
  };
  render() {
    console.log(this.state);
    return (
      <div className="App">
        <h1>HELLOOO</h1>
      </div>
    );
  }
}

export default App;
