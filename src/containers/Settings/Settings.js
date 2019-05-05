import React from "react";
import styles from "./Settings.module.css";

export default class Settings extends React.Component {
  state = {
    topics: ""
  };

  clean = s => {
    s = s.trim();
    if (s.charAt(0) === "," && s.charAt(s.length - 1) === ",")
      return s.slice(1, s.length - 1);
    if (s.charAt(0) === ",") return s.slice(1);
    if (s.charAt(s.length - 1) === ",") return s.slice(0, s.length - 1);
    return s;
  };

  handleChange = e => {
    this.setState({ topics: e.target.value });
  };

  handleSubmit = () => {
    let cleanedTopics = this.clean(this.state.topics);
    this.setState({ topics: cleanedTopics });
    this.props.updateTopics(cleanedTopics);
    this.props.updateSettingsVisibility(false);
  };

  render() {
    if (this.props.isVisible) {
      return (
        <div className={styles.modal}>
          <span>Enter topics of your choice: (Separated by comma)</span>
          <span>Python, JavaScript, Security, Blockchain etc.</span>
          <input
            type="text"
            className={styles.input}
            onChange={this.handleChange}
            value={this.state.topics}
          />
          <button onClick={this.handleSubmit} className="btn btn-white">
            Done
          </button>
        </div>
      );
    } else return null;
  }
}
