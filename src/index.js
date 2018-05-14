import React, { Component } from "react";
import { render } from "react-dom";
import Layout1 from "./dashboard/layouts/layout1/Layout1";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Dashboard from "./dashboard/Dashboard";

class App extends Component {
  constructor() {
    super();
    this.state = {
      layouts: []
    };
    this.state.layouts.push(Layout1);
  }

  render() {
    return <Dashboard layouts={this.state.layouts} />;
  }
}

render(<App />, document.getElementById("root"));
