import React from "react";
import "./App.css";
import Home from "./containers/Home/Home";
import Settings from "./containers/Settings/Settings";
export default class App extends React.Component {
  state = {
    topics: [],
    settingsVisible: true
  };

  updateTopics = topics => {
    if (!topics.length) this.setState({ topics: [] });
    else this.setState({ topics: topics.split(",") });
  };

  updateSettingsVisibility = b => {
    this.setState({ settingsVisible: b });
  };

  render() {
    return (
      <div className="App">
        <header>
          <strong>Personalized Hacker News</strong>
          <button
            onClick={() => this.updateSettingsVisibility(true)}
            className="btn"
          >
            settings
          </button>
        </header>
        <Settings
          isVisible={this.state.settingsVisible}
          updateTopics={this.updateTopics}
          topics={this.state.topics}
          updateSettingsVisibility={this.updateSettingsVisibility}
        />
        <Home topics={this.state.topics} />
      </div>
    );
  }
}
