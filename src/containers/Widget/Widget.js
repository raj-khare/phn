import React from "react";
import Post from "../../components/Post/Post";

export default class Widget extends React.Component {
  state = {
    content: []
  };

  async componentDidMount() {
    const response = await fetch(
      `https://hn.algolia.com/api/v1/search_by_date?tags=story&query=${
        this.props.topic
      }`
    );
    const data = await response.json();
    console.log(data);
    this.setState({ content: data.hits });
  }

  render() {
    const posts = [];
    this.state.content.forEach((el, i) => {
      posts.push(<Post post={el} key={i} n={i} />);
    });
    return (
      <div className="widget">
        <div className="topic">{this.props.topic}</div>
        <div className="content">{posts.length ? posts : "Loading..."}</div>
      </div>
    );
  }
}
