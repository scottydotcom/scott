import React from "react";
import "./introStyles.css";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import FadeAnimation from "../FadeAnimation/FadeAnimation";

const Intro = () => {
  return (
    <section className="intro">
      <div className="intro-content">
        <FadeAnimation>
          <h1>
            hi, <span className="intro-name"> scott </span> here
          </h1>
        </FadeAnimation>
        <FadeAnimation delay="100ms">
          <h2>I turn visions into reality</h2>
          <p>
            I'm a<span className="highlight"> creator</span>,<span className="highlight"> problem solver</span>, and
            <span className="highlight"> innovator</span>.
          </p>
        </FadeAnimation>
        <FadeAnimation delay="200ms">
          <div className="contact-box">
            {/* <FadeAnimation delay="300ms"> */}
            <h3>Connect with me</h3>
            <div className="contact-icons">
              <a href="https://github.com/scottydotcom" target="_blank" rel="noopener noreferrer">
                <GitHubIcon fontSize="large" />
              </a>
              <a href={import.meta.env.VITE_LINKEDIN_URL} target="_blank" rel="noopener noreferrer">
                <LinkedInIcon fontSize="large" />
              </a>
              <a href={`mailto:${import.meta.env.VITE_EMAIL}`}>
                <EmailIcon fontSize="large" />
              </a>
            </div>
            {/* </FadeAnimation> */}
          </div>
        </FadeAnimation>
      </div>
    </section>
  );
};

export default Intro;
