import React from "react";
import styles from "./Settings.module.css";

export default class Settings extends React.Component {
  state = {
    topics: ""
  };

  handleChange = e => {
    this.setState({ topics: e.target.value }, () => {
      this.props.updateTopics(this.state.topics);
    });
  };

  render() {
    return (
      <div>
        <span>Enter topics of your choice: (Separated by newline)</span>
        <textarea
          className={styles.input}
          onChange={this.handleChange}
          value={this.state.topics}
        />
      </div>
    );
  }
}
