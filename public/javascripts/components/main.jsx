import React from "react";
import JQuery from "jquery";

export default class Main extends React.Component {
  constructor() {
    super();

    this.state = {
      about: false;
    };
  }
  
  render() {
    var showAbout = function(){
	console.log('g');
	if(this.state.about == false){
	this.setState(about: true);
	JQuery(".background").animate({
opacity: .5
}, 1000);
	JQuery(".about").show("slow");
}else{
	this.setState(about: false);
        
	JQuery(".background").animate({
opacity: 0
}, 1000);
	JQuery(".about").hide("slow");
}
        
}
    return (
      <div className="main">
	<div className="left-vertical-text"><span onClick={showAbout.bind(this)}>{(this.about) ?　"close" : "about"}</span></div>
      <div className="right-vertical-text"><span onClick={function(){window.location.href='mailto:1478282482@qq.com';}}>1478282482@qq.com</span></div>
	<div className="name"　onClick={function(){console.log('d')}}>Joshua Edwards</div>
	<div className="post">DIGITAL DESIGNER</div>
      </div>
    );
  }
}
