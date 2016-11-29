import React from "react";

export default class Main extends React.Component {
  constructor() {
    super();

    this.state = {
    };
  }
  render() {
    var showAbout = function(){
	console.log('g');
}
    return (
      <div className="main">
	<div className="left-vertical-text"><span onClick={showAbout}>{(this.about) ?　"close" : "about"}</span></div>
      <div className="right-vertical-text">1478282482@qq.com</div>
	<div className="name"　onClick={function(){console.log('d')}}>Joshua Edwards</div>
	<div className="post">DIGITAL DESIGNER</div>
      </div>
    );
  }
}
