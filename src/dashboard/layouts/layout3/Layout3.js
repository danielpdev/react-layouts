import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Home from "./Home";

export default class Layout3 extends Component {
  render() {
    return (
      <Router>
        <div>
          <ul>
            <li>
              <Link to={`/${this.constructor.name}/home`}>Home</Link>
            </li>
          </ul>
          <Route path={`/${this.constructor.name}/home`} component={Home} />
        </div>
      </Router>
    );
  }
}
