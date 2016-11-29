import React from "react";

export default class Main extends React.Component {
  constructor() {
    super();

    this.state = {
    };
  }
  render() {
    return (
      <div className="main">
	<div className="name">Joshua Edwards</div>
	<div className="post">DIGITAL DESIGNER</div>
	<div className="down-arrow"><i className="fa fa-arrow-down"></i></div>
      </div>
    );
  }
}
