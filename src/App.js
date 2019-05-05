import React from "react";
import "./App.css";
import Home from "./containers/Home/Home";
import Settings from "./containers/Settings/Settings";
import { withCookies } from "react-cookie";

class App extends React.Component {
  constructor(props) {
    super(props);
    let topics = this.props.cookies.get("phn-topics") || [];

    this.state = {
      topics: topics,
      settingsVisible: !Boolean(topics.length)
    };
  }

  updateTopics = topics => {
    if (!topics.length) this.setState({ topics: [] }, this.setCookies);
    else this.setState({ topics: topics.split(",") }, this.setCookies);
  };

  updateSettingsVisibility = b => {
    this.setState({ settingsVisible: b });
  };

  setCookies = () => {
    let options = {
      path: "/",
      maxAge: 864000,
      domain: "phn.netlify.com",
      secure: true
    };
    this.props.cookies.set("phn-topics", this.state.topics, options);
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

export default withCookies(App);
