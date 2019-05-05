import React from "react";
import Widget from "../Widget/Widget";

export default class Home extends React.Component {
  render() {
    const widgets = [<Widget key={0} />];
    this.props.topics.forEach((t, i) => {
      widgets.push(<Widget topic={t} key={i + 1} />);
    });

    return (
      <div>
        <div className="widgets">{widgets}</div>
      </div>
    );
  }
}
