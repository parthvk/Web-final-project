import React, { Component } from "react";
import "./App.scss";

import Header from "../components/Header";
import Landing from "./Landing";
import MainContent from "./MainContent";

// Page for Search
class App extends Component {
  render() {
    return (
      <div className="App">
        <Landing />
        <Header />
        <MainContent />
      </div>
    );
  }
}

export default App;
