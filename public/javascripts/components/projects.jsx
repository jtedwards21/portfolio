import React from "react";

export default class Projects extends React.Component {
  constructor() {
    super();

    this.state = {
    };
  }
  render() {
    return (
      <div className="main">
	<section className="project">
	  <div className="spacer s2"></div>
	  <div id="pin1">
	    <div className="title">Pomodoro Clock</div>
	  </div>
	  <div className="spacer s2"></div>
	</section>
	<section className="project">
	  <div className="spacer s2"></div>
	  <div id="pin1">
	    <div className="title">Calculator</div>
	  </div>
	  <div className="spacer s2"></div>
	</section>
	<script>
	  makeController();
	</script>
      </div>
    );
  }
}
