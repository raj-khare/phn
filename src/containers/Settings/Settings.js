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
      // let topics = this.state.topics;
      // if (topics.charAt(0) === ",") {
      //   topics = topics.slice(1);
      // }
      // if (topics.charAt(topics.length - 1) === ",") {
      //   topics = topics.slice(0, topics.length - 1);
      // }
      // if (topics === "") {
      //   this.props.updateTopics([]);
      //   return;
      // }
      // const tArray = topics.split(", ");
      // tArray.forEach((el, i) => {
      //   tArray[i] = el.trim();
      // });
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
