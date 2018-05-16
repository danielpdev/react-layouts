import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import About from "./About";
import Home from "./Home";

export default class Layout1 extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Router>
        <div>
          <ul>
            <li>
              <Link to={`/${this.constructor.name}/home`}>Home</Link>
            </li>
            <li>
              <Link to={`/${this.constructor.name}/about`}>About</Link>
            </li>
          </ul>
          <Route path={`/${this.constructor.name}/home`} component={Home} />
          <Route path={`/${this.constructor.name}/about`} component={About} />
        </div>
      </Router>
    );
  }
}
