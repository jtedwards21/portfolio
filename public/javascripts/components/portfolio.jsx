import React from "react";
import ReactDOM from "react-dom";
import Main from "./main";
import Projects from "./projects";
import JQuery from 'jquery';

export default class Portfolio extends React.Component {
  constructor() {
    super();

    this.state = {
    };

    this.about = false;

　　　　this.main = true;

  }
  showAbout(){
    console.log('g');
    JQuery(".background").animate({
opacity: .5
}, 1000, function(){
JQuery(".about").show("slow")
});
  }
  render() {
	//The proper way to set these heights will be with absolute positioning and then window.innerHeight/2
        //Then I need to get a black and white photo for the background
    return(
　　　　<div className="another-container">
      <div className="left-vertical-text"><span onClick={this.showAbout.bind(this)}>{(this.about) ?　"close" : "about"}</span></div>
      <div className="right-vertical-text">1478282482@qq.com</div>
    <div className="portfolio-page">	
      <div className="main-container">
        {(this.main) ? <Main /> : <Projects />}
      </div>
    </div>
    <div className="down-arrow"><i className="fa fa-arrow-down"></i></div>
    </div>
    )
  }
}
