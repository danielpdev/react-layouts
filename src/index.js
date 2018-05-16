import React, { Component } from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Layout1 from "./dashboard/layouts/layout1/Layout1";
import Layout2 from "./dashboard/layouts/layout2/Layout2";
import Layout3 from "./dashboard/layouts/layout3/Layout3";

import Dashboard from "./dashboard/Dashboard";

class App extends Component {
  constructor() {
    super();
    this.state = {
      layouts: []
    };
  }

  componentDidMount() {
    this.setState({
      layouts: [<Layout1 />, <Layout2 />, <Layout3 />]
    });
  }

  render() {
    return <Dashboard layouts={this.state.layouts} />;
  }
}

render(<App />, document.getElementById("root"));
