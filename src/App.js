import React from "react";
import "./App.css";
import { Link } from "react-router-dom";
import { Route, BrowserRouter as Router } from "react-router-dom";
import Home from "./containers/Home/Home";
import Settings from "./containers/Settings/Settings";
export default class App extends React.Component {
  state = {
    topics: []
  };

  updateTopics = topics => {
    this.setState({ topics });
  };

  render() {
    return (
      <div className="App">
        <Router>
          <header>
            <strong>Personalized Hacker News &nbsp;&nbsp;</strong>
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
              <Settings
                {...props}
                updateTopics={this.updateTopics}
                topics={this.state.topics}
              />
            )}
          />
        </Router>
      </div>
    );
  }
}
