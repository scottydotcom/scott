import React from "react";
import "./introStyles.css";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';


const Intro = () => {
  return (
    <section className="intro">
      <div className="intro-content">
        <h1>hi, <span className="intro-name"> scott </span> here </h1>
        <h2>I turn visions into reality</h2>
        <p>I'm a 
          <span className="highlight"> creator</span>, 
          <span className="highlight"> problem solver</span>, and 
         <span className="highlight"> innovator</span>.</p>
      <div className="contact-box">
        <h3>Connect with me</h3>
        <div className="contact-icons">
          <a href="https://github.com/scottydotcom" target="_blank" rel="noopener noreferrer">
            <GitHubIcon fontSize="large" />
          </a>
          <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
            <LinkedInIcon fontSize="large" />
          </a>
          <a href="mailto:your.email@example.com">
            <EmailIcon fontSize="large" />
          </a>
        </div>
      </div>
      </div>
    </section>
  );
};

export default Intro;
