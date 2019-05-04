import React from "react";
import "./App.css";
import Widget from "./containers/Widget/Widget";
import { Link } from "react-router-dom";
import { Route, BrowserRouter as Router } from "react-router-dom";
import Home from "./containers/Home/Home";
import Settings from "./containers/Settings/Settings";
export default class App extends React.Component {
  state = {
    topics: ["Paul Graham", "python"]
  };

  updateTopics = string => {
    this.setState({ topics: string.split("\n") });
  };

  render() {
    const widgets = [];
    this.state.topics.forEach((t, i) => {
      widgets.push(<Widget topic={t} key={i} />);
    });

    return (
      <div className="App">
        <Router>
          <header>
            <strong>Personalized Hacker News | </strong>
            <Link to="/settings">Settings</Link>
          </header>
          <Route
            exact
            path="/"
            render={props => <Home {...props} topics={this.state.topics} />}
          />
          <Route
            exact
            path="/settings"
            render={props => (
              <Settings {...props} updateTopics={this.updateTopics} />
            )}
          />
        </Router>
      </div>
    );
  }
}
