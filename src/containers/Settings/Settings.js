import React from "react";
import styles from "./Settings.module.css";
import { Link } from "react-router-dom";

export default class Settings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      topics: props.topics
    };
  }

  handleChange = e => {
    this.setState({ topics: e.target.value }, () => {
      this.props.updateTopics(this.state.topics);
    });
  };

  render() {
    return (
      <div className={styles.container}>
        <span>Enter topics of your choice: (Separated by comma)</span>
        <textarea
          className={styles.textarea}
          onChange={this.handleChange}
          value={this.state.topics}
        />
        <Link to="/" className={styles.btn}>
          Back
        </Link>
      </div>
    );
  }
}
