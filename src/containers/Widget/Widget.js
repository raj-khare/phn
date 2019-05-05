import React from "react";
import Post from "../../components/Post/Post";
import styles from "./Widget.module.css";

export default class Widget extends React.Component {
  state = {
    content: []
  };

  async componentDidMount() {
    const url = this.props.topic
      ? `https://hn.algolia.com/api/v1/search_by_date?query=${
          this.props.topic
        }&tags=story`
      : "https://hn.algolia.com/api/v1/search?tags=front_page";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ content: data.hits });
  }

  render() {
    const posts = [];
    this.state.content.forEach((el, i) => {
      posts.push(<Post post={el} key={i} n={i} />);
    });
    return (
      <div className={styles.widget}>
        <div className={styles.topic}>
          {this.props.topic ? this.props.topic : "Home"}
        </div>
        <div className={styles.content}>
          {posts.length ? posts : "Loading..."}
        </div>
      </div>
    );
  }
}
