import react from "react";
import "./projectStyles.css";
import FadeAnimation from "../FadeAnimation/FadeAnimation";
import { FaGithubSquare } from "react-icons/fa";
import { TbBrowserMaximize } from "react-icons/tb";

const Projects = () => {
  const projectDetails = [
    {
      title: "Midnight Koi",
      description: "Personal vscode theme designed to enhance coding focus visually.",
      imageUrl: "src/assets/images/koi.png",
      tags: ["JSON", "Node.js", "Yeoman"],
      link: "https://github.com/scottydotcom/midnight-koi",
      open: "",
    },
    {
      title: "Enso",
      description: "Discord bot thats positive affirmation to users.",
      imageUrl: "src/assets/images/enso.png",
      tags: ["JavaScript", "Node.js", "Discord.js"],
      link: "https://github.com/scottydotcom/Enso",
      open: "",
    },
    {
      title: "Quick Chat",
      description: "A blog that allows you to interact and talk with users in real-time.",
      imageUrl: "src/assets/images/QC.png",
      tags: ["JavaScript", "HTML", "CSS"],
      link: "https://github.com/scottydotcom/quickchat",
      open: "https://quickchatblog.netlify.app/",
    },
    {
      title: "Earths Realm",
      description: "A website that shows users parks & recreation all across America.",
      imageUrl: "src/assets/images/earth-realm.png",
      tags: ["JavaScript", "HTML", "CSS"],
      link: "https://github.com/scottydotcom/earths-realm",
      open: "https://earthsrealm.netlify.app/",
    },
  ];

  return (
    <section className="project">
      <FadeAnimation>
        <div className="section-header">/ projects</div>
        <FadeAnimation delay="100ms">
          <div className="project-content">
            {projectDetails.map((project, index) => (
              <div className="card" key={index}>
                <img src={project.imageUrl} alt="Project Image" className="card-image" />
                {/* <FadeAnimation delay="200ms"> */}
                <div className="card-content">
                  <header className="card-header">
                    <span>{project.title}</span>
                    <div className="icon-container">
                      {project.open && (
                        <a href={project.open} target="_blank" rel="noopener noreferrer" className="icon">
                          <TbBrowserMaximize />
                        </a>
                      )}
                      {project.link && (
                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="icon">
                          <FaGithubSquare />
                        </a>
                      )}
                    </div>
                  </header>
                  <div className="card-body">{project.description}</div>
                  <footer className="card-footer">
                    {project.tags.map((tag, index) => (
                      <span key={index} className="card-tag">
                        {tag}
                      </span>
                    ))}
                  </footer>
                </div>
                {/* </FadeAnimation> */}
              </div>
            ))}
          </div>
        </FadeAnimation>
      </FadeAnimation>
    </section>
  );
};

export default Projects;
