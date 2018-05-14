import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import React from "react";

export default class Dashboard extends React.Component {
  render() {
    const links = this.props.layouts.reduce((links, Current) => {
      links.push(
        <span key={Current.type.name}>
          <Link to={`/${Current.type.name}`}>{`${Current.type.name}`}</Link>
        </span>
      );
      return links;
    }, []);

    const routes = this.props.layouts.reduce((routes, current) => {
      routes.push(
        <Route exact path={`/${current.type.name}`} render={() => current} />
      );
      return routes;
    }, []);

    return (
      <Router>
        <div>
          {links}
          <div>{routes}</div>
        </div>
      </Router>
    );
  }
}
