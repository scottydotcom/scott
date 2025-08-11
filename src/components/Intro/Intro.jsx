import React from "react";
import "./introStyles.css";
import FadeAnimation from "../FadeAnimation/FadeAnimation";
import { FaGithubSquare, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Intro = () => {
  return (
    <section className="intro">
      <div className="intro-content">
        <FadeAnimation>
          <h1>
            <div className="image-container">
              <img src="tangerine.png" alt="" className="intro-image" />
            </div>
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
            <h3>Contact me</h3>
            <div className="contact-icons">
              <a href="https://github.com/scottydotcom" target="_blank" rel="noopener noreferrer">
                <FaGithubSquare />
              </a>
              <a href={import.meta.env.VITE_LINKEDIN_URL} target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
              </a>
              <a href={`mailto:${import.meta.env.VITE_EMAIL}`}>
                <FaEnvelope />
              </a>
            </div>
          </div>
        </FadeAnimation>
      </div>
    </section>
  );
};

export default Intro;