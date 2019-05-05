import React from "react";
import Post from "../../components/Post/Post";
import styles from "./Widget.module.css";

export default class Widget extends React.Component {
  state = {
    content: [],
    isLoading: true
  };

  fetchData = async () => {
    this.setState({ isLoading: true });
    const url = this.props.topic
      ? `https://hn.algolia.com/api/v1/search_by_date?query=${
          this.props.topic
        }&tags=story`
      : "https://hn.algolia.com/api/v1/search?tags=front_page";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ content: data.hits, isLoading: false });
  };

  componentDidMount() {
    this.fetchData();
  }

  componentDidUpdate(prevProps) {
    if (this.props.topic !== prevProps.topic) {
      this.fetchData();
    }
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
          {!this.state.isLoading ? posts : "Loading..."}
        </div>
      </div>
    );
  }
}
