import react from "react";
import "./projectStyles.css";
import FadeAnimation from "../FadeAnimation/FadeAnimation";
import { FaGithubSquare } from "react-icons/fa";
import { TbBrowserMaximize } from "react-icons/tb";

const Projects = () => {
  const projectDetails = [
    {
      title: "Earths Realm",
      description: "A website that shows users parks & recreation all across America.",
      imageUrl: "src/components/assets/images/earth-realm.png",
      tags: ["JavaScript", "React", "CSS"],
      link: "https://github.com/scottydotcom/earths-realm",
      open: "https://earthsrealm.netlify.app/",
    },
    {
      title: "Project 2",
      description: "This is a simple horizontal card component built with React.",
      imageUrl: "https://i.pinimg.com/736x/de/18/63/de186331cbae193d50f2801026101ea6.jpg",
      tags: ["JavaScript", "React", "CSS"],
    },
    {
      title: "Project 3",
      description: "This is a simple horizontal card component built with React.",
      imageUrl: "https://i.pinimg.com/736x/de/18/63/de186331cbae193d50f2801026101ea6.jpg",
      tags: ["JavaScript", "React", "CSS"],
    },
    {
      title: "Project 4",
      description: "This is a simple horizontal card component built with React.",
      imageUrl: "https://i.pinimg.com/736x/de/18/63/de186331cbae193d50f2801026101ea6.jpg",
      tags: ["JavaScript", "React", "CSS"],
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
                <img src={project.imageUrl} alt="Card Image" className="card-image" />
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

//   <span>{project.title}</span>
//   <div className="icon-container">
//     {project.link && (
//       <a href={project.link} target="_blank" rel="noopener noreferrer" className="icon">
//         <FaGithubSquare />
//       </a>
//     )}
//     {project.open && (
//       <a href={project.open} target="_blank" rel="noopener noreferrer" className="icon">
//         <FaLinkedin />
//       </a>
//     )}
//   </div>
// </header>
