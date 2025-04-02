import React from "react";
import "../styles/Intro.css";
import "../styles/Global.css";
import Typist from "react-typist-component";
import EmailIcon from "@mui/icons-material/Email";
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
        <img alt="it me scott" src={"src/assets/oden.png"} className="image-size" />
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
            I'm a software engineer who enjoys creating functional and aesthetic products, that help provide a seamless
            experience blending large-scale and high-impact design with innovative solutions for future longevity.
          </div>
          <a href="mailto:scottadamr01@gmail.com" className="intro-contact">
            <EmailIcon></EmailIcon>
            {" Say Hi! "}
          </a>
        </FadeInSection>
      </div>
    );
  }
}

export default Intro;
