import React from "react";
import Post from "../../components/Post/Post";

export default class Widget extends React.Component {
  state = {
    content: []
  };

  async componentDidMount() {
    const url = this.props.topic
      ? `http://hn.algolia.com/api/v1/search_by_date?query=${
          this.props.topic
        }&tags=story`
      : "http://hn.algolia.com/api/v1/search?tags=front_page";
    const response = await fetch(url);
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
        <div className="topic">
          {this.props.topic ? this.props.topic : "Home"}
        </div>
        <div className="content">{posts.length ? posts : "Loading..."}</div>
      </div>
    );
  }
}
