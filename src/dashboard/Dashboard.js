import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import React from "react";

export default class Dashboard extends React.Component {
  render() {
    const links = this.props.layouts.reduce((links, Current) => {
      const Component = () => <Current />;
      const element = (
        <span key="">
          <Link to={`/${Component().type.name}`}>{`${
            Component().type.name
          }`}</Link>
          <Route
            exact
            path={`/${Component().type.name}`}
            component={Component}
          />
        </span>
      );
      links.push(element);
      return links;
    }, []);

    return (
      <Router>
        <div>{links}</div>
      </Router>
    );
  }
}
