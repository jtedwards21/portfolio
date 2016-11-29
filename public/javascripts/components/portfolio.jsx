import React from "react";
import ReactDOM from "react-dom";
import Main from "./main";
import Projects from "./projects";
import ReactCSSTransitionGroup from 'react-addons-css-transition-group' 

export default class Portfolio extends React.Component {
  constructor() {
    super();

    this.state = {
    };

    this.about = false;

　　　　this.main = true;

  }
  render() {
	//The proper way to set these heights will be with absolute positioning and then window.innerHeight/2
        //Then I need to get a black and white photo for the background
    
    return(
　　　　<div className="another-container">
    <div className="portfolio-page">	
      <div className="main-container">
        <ReactCSSTransitionGroup transitionName="dog" transitionEnterTimeout={500}>
        {(this.main) ? <Main /> : <Projects />}
        </ReactCSSTransitionGroup>
      </div>
    </div>
    <div className="down-arrow"　onClick={function(){console.log('g');}}><i className="fa fa-arrow-down"></i></div>
    </div>
    )
  }
}
