import React from "react";
import ReactDOM from "react-dom";
import Main from "./main";
import Projects from "./projects";

export default class Portfolio extends React.Component {
  constructor() {
    super();

    this.state = {
    };

    this.about = false;


  }
  render() {
    return(
    <div className="portfolio-page">
      <div className="left-vertical-text">{(this.about) ?　"about" : "close"}</div>
      <div className="right-vertical-text">1478282482@qq.com</div>
      <div className="down-arrow"></div>
      <div className="main-container">
        {(this.main) ? <Main /> : <Projects />}
      </div>
    </div>
    )
  }
}
