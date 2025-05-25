import react from "react";
import "./projectStyles.css";
import FadeAnimation from "../FadeAnimation/FadeAnimation";

const Projects = () => {
  const projectDetails = [
    {
      title: "Nippon Luxe",
      description: "This is a simple horizontal card component built with React.",
      imageUrl: "https://i.pinimg.com/736x/de/18/63/de186331cbae193d50f2801026101ea6.jpg",
      tags: ["JavaScript", "React", "CSS"],
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
                <div className="card-content">
                  <header className="card-header">{project.title}</header>
                  <div className="card-body">{project.description}</div>
                  <footer className="card-footer">
                    {project.tags.map((tag, index) => (
                      <span key={index} className="card-tag">
                        {tag}
                      </span>
                    ))}
                  </footer>
                </div>
              </div>
            ))}
          </div>
        </FadeAnimation>
      </FadeAnimation>
    </section>
  );
};

export default Projects;
