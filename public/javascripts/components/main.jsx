import React from "react";
import JQuery from "jquery";

export default class Main extends React.Component {
  constructor() {
    super();

    this.state = {
    };
  }
  render() {
    var showAbout = function(){
	console.log('g');
	JQuery(".background").animate({
opacity: .5
}, 1000);
	JQuery(".about").show("slow");
 
}
    return (
      <div className="main">
	<div className="left-vertical-text"><span onClick={showAbout}>{(this.about) ?　"close" : "about"}</span></div>
      <div className="right-vertical-text"><span onClick={function(){window.location.href='mailto:1478282482@qq.com';}}>1478282482@qq.com</span></div>
	<div className="name"　onClick={function(){console.log('d')}}>Joshua Edwards</div>
	<div className="post">DIGITAL DESIGNER</div>
      </div>
    );
  }
}
