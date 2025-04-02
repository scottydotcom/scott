import React from "react";
import "../styles/About.css";
import "../styles/Global.css";
import FadeInSection from "./FadeInSection";

class About extends React.Component {
  constructor() {
    super();
    this.state = {
      expanded: true,
      activeKey: "1"
    };
    this.handleSelect = this.handleSelect.bind(this);
  }
  handleSelect(eventKey) {
    this.setState({
      activeKey: eventKey
    });
  }
  render() {
    const one = (
      <p>
        I am a <b>Software Engineer</b> who indulges in creating user-centric applications,
        designing and developing unique stategies that
        unify viability with sophistication that balances intricacy and simplicity.
      </p>
    );
    const two = (
      <p>
        Outside of work, I watch anime, read books, play video games, and 
        explore architectural design concepts. I prioritize a healthy diet and fitness
        life style. As a self-proclaimed homebody, I appreciate the comfort of my space and
        love playing pool as well as seeking ways to enhance everyday life.
      </p>
    );

    const tech_stack = [
      "Javascript",
      "React.js",
      "Node.js",
      "SQL",
      "Python",
      "Postgresql"
    ];

    return (
      <div id="about">
        <FadeInSection>
          <div className="section-header ">
            <span className="section-title">/ about me</span>
          </div>
          <div className="about-content">
            <div className="about-description">
              {[one]}
              {"Here are some technologies I have been working with:"}
              <ul className="tech-stack">
                {tech_stack.map(function (tech_item, i) {
                  return (
                    <FadeInSection delay={`${i + 1}00ms`}>
                      <li>{tech_item}</li>
                    </FadeInSection>
                  );
                })}
              </ul>
              {[two]}
            </div>
            <div className="about-image">
              <img alt="it me scott" src={"/assets/me.jpg"} />
            </div>
          </div>
        </FadeInSection>
      </div>
    );
  }
}

export default About;