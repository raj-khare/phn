import React from "react";
import Widget from "../Widget/Widget";
export default class App extends React.Component {
  render() {
    const widgets = [];
    this.props.topics.forEach((t, i) => {
      widgets.push(<Widget topic={t} key={i} />);
    });

    return <div className="widgets">{widgets}</div>;
  }
}
