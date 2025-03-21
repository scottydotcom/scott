import React from "react";
import "../styles/Projects.css";
import FolderOpenRoundedIcon from "@material-ui/icons/FolderOpenRounded";
import FadeInSection from "./FadeInSection";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Carousel from "react-bootstrap/Carousel";
import ExternalLinks from "./ExternalLinks";

class Projects extends React.Component {
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
    const spotlightProjects = {
      "Quick Chat": {
        title: "quick chat",
        desc:
          "A blog that allows you to interact and talk with uers in real-time.",
        techStack: "JAVASCRIPT, RESTFUL API, HTML, CSS",
        link: "https://github.com/scottydotcom/quickchat",
        open: "https://quickchatblog.netlify.app/",
        image: "/assets/qc.png"
      },
      earthsrealm: {
        title: "earths realm",
        desc:
        "A website that shows users parks & recreation all across America.",
        techStack: "JAVASCRIPT, HTML, CSS",
        link: "https://github.com/scottydotcom/earths-realm",
        open: "https://earthsrealm.netlify.app/",
        image: "/assets/EarthsRealm.png"
      },
      "lfg": {
        title: "looking for group",
        desc:
          "Social media site for people to find others to do activities with.",
        techStack: "REACT.JS, NODE.JS, EXPRESS.JS, YELP FUSION, AXIOS, CSS",
        link: "https://github.com/scottydotcom/lfg",
        open: "https://lfgpls.herokuapp.com/",
        image: "/assets/lfg.png"
      },
      // PlaceHolder: {
      //   title: "PlaceHolder",
      //   desc:
      //     "PlaceHolder",
      //   techStack: "PlaceHolder",
      //   link: "",
      //   open: "",
      //   image: "/assets/"
      // }
    };
    const projects = {
      "VSCode theme": {
        desc:
          "My own vscode theme created giving a cozy zen vibe.",
        techStack: "Javascript / JSON",
        link: "",
        open: ""
      },
      "Enso": {
        desc:
          "Discord bot that gives positive messages to users.",
        techStack: "Javascript, Node.JS, Discord.JS v14+",
        link: "https://github.com/scottydotcom/Enso",
        open: ""
      },
      "Unseen Forces": {
        desc:
          "Pokemon theme memory game, flip cards to find matching pairs.",
        techStack: "Javascript, HTML, CSS",
        link:"https://github.com/scottydotcom/Pokemon-Memory-Game",
        open:"https://pokemonunown.netlify.app/"
      },
      // "Nippon Luxe": {
      //   desc:
      //     "Place Holder",
      //   techStack: "Place Holder",
      //   link: "",
      //   open: ""
      // },
      // "Game Centre": {
      //   desc:
      //     "Place Holder",
      //   techStack: "Place Holder",
      //   link: "",
      //   open: ""
      // },
      // "Place Holder": {
      //   desc:
      //     "Place Holder",
      //   techStack: "Place Holder",
      //   link: "",
      //   open: ""
      // }
    };

    return (
      <div id="projects">
        <div className="section-header ">
          <span className="section-title">/ projects</span>
        </div>
        <Carousel>
          {Object.keys(spotlightProjects).map((key, i) => (
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={spotlightProjects[key]["image"]}
                alt={key}
              />
              <div className="caption-bg">
                <Carousel.Caption>
                  <h3>{spotlightProjects[key]["title"]}</h3>
                  <p>
                    {spotlightProjects[key]["desc"]}
                    <p className="techStack">
                      {spotlightProjects[key]["techStack"]}
                    </p>
                  </p>
                  <ExternalLinks
                    githubLink={spotlightProjects[key]["link"]}
                    openLink={spotlightProjects[key]["open"]}
                  ></ExternalLinks>
                </Carousel.Caption>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
        <div className="project-container">
          <ul className="projects-grid">
            {Object.keys(projects).map((key, i) => (
              <FadeInSection delay={`${i + 1}00ms`}>
                <li className="projects-card">
                  <div className="card-header">
                    <div className="folder-icon">
                      <FolderOpenRoundedIcon
                        style={{ fontSize: 35 }}
                      ></FolderOpenRoundedIcon>
                    </div>
                    <ExternalLinks
                      githubLink={projects[key]["link"]}
                      openLink={projects[key]["open"]}
                    ></ExternalLinks>
                  </div>

                  <div className="card-title">{key}</div>
                  <div className="card-desc">{projects[key]["desc"]}</div>
                  <div className="card-tech">{projects[key]["techStack"]}</div>
                </li>
              </FadeInSection>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default Projects;