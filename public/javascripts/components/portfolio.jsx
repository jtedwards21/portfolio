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
    <div className="main-container">
      <div className="left-vertical-text">{(this.about) ?　"about" : "close"}</div>
      {(this.main) ? <Main /> : <Projects />}
      <div className="right-vertical-text">1478282482@qq.com</div>
    </div>
    )
  }
}
