import React from "react";
import "../styles/Intro.css";
import Typist from "react-typist";
import "react-typist/dist/Typist.css";
import Email from "@material-ui/icons/Email";
import FadeInSection from "./FadeInSection";


class Intro extends React.Component {
  constructor() {
    super();
    this.state = {
      expanded: true,
      activeKey: "1",
      visible: true,
    };
    this.handleSelect = this.handleSelect.bind(this);
  }
  handleSelect(eventKey) {
    this.setState({
      activeKey: eventKey,
    });
  }
  render() {
    return (
      <div id="intro">
        {/* <FractalTree></FractalTree> */}
        <img alt="it me scott" src={"/assets/oden.png"} className="image-size" />
        <Typist avgTypingDelay={120}>
          <span className="intro-title">
            {"hi, "}
            <span className="intro-name">{"scott"}</span>
            {" here."}
          </span>
        </Typist>
        <FadeInSection>
          <div className="intro-subtitle">I bring ideas to life.</div>
          <div className="intro-desc">
            I'm a software engineer who enjoys creating functional and aesthetic products, 
            that help provide a seamless experience blending large-scale and high-impact design  
            with innovative solutions for future longevity.
          </div>
          <a
            href="mailto:scottadamr01@gmail.com"
            className="intro-contact"
          >
            <Email></Email>
            {" Say Hi! "}
          </a>
        </FadeInSection>
      </div>
    );
  }
}

export default Intro;
