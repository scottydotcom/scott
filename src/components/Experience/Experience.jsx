import React, { useState } from "react";
import "./experienceStyles.css";
import Modal from "react-modal"; // Make sure to install react-modal
import { RiFilePaper2Fill } from "react-icons/ri";
import { IoDocumentText } from "react-icons/io5";

const Experience = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedExperience, setSelectedExperience] = useState(null);

  const experienceData = [
    {
      company: "LinkedIn",
      title: "Data Analytics Engineer Intern",
      duration: "JUL 2024 - JAN 2025",
      imageUrl: "src/components/assets/images/linkedin.png",
      description: [
        "Led project to integrate Git with organization’s web-based IDE to improve developer experience and productivity.",
        "Created a centralized folder structure for all projects to improve organization and accessibility, allowing developers to easily find and access their projects and collaborate more effectively.",
        "Refactored SQL, Python, and Bash scripts optimizing performance and maintainability for code migrations.",
        "Managed data pipelines for regional planning and forecasting, ensuring data accuracy and reliability that support stakeholders management resulting in a streamlined process.",
      ],
    },
    {
      company: "Code with Craig",
      title: "Front-End Freelance Developer",
      duration: "MAY 2024 - JAN 2025",
      imageUrl: "src/components/assets/images/cwc.png",
      description: [
        "Actively contributing to the development and enhancement of my Bootcamp instructor's website, focusing on creating clear and engaging examples of JavaScript, HTML, and CSS.",
        "Coordinated with the instructor to create a seamless and visually appealing site layout, improving user experience and navigation.",
        "Collaborated on redesigning and enhancing user interfaces for the Bootcamp instructor's website, ensuring improved accessibility and responsiveness.",
      ],
    },
  ];

  const openModal = (experience) => {
    setSelectedExperience(experience);
    setModalIsOpen(true);
  };
  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedExperience(null);
  };

  return (
    <section className="experience">
      <div className="section-header">/ experience</div>
      <div className="experience-content">
        {experienceData.map((exp, index) => (
          <div className="experience-card" key={index}>
            <img src={exp.imageUrl} alt="company image" className="company-image" />
            <div className="experienceCard-content">
              <header className="experienceCard-header">
                <span>{exp.company}</span>
                <div className="experience-iconContainer">
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      openModal(exp);
                    }}
                    className="experience-button-icon"
                  >
                    <IoDocumentText/>
                  </a>
                </div>
              </header>
              <div className="experienceCard-body">{exp.title}</div>
              <footer className="experienceCard-footer">{exp.duration}</footer>
            </div>
          </div>
        ))}
      </div>
      <Modal isOpen={modalIsOpen} onRequestClose={closeModal}>
        <div className="modal-content">
          <div className="modaltitle-Header">{selectedExperience?.title}</div>
          <div className="modal-company">{selectedExperience?.company}</div>
          <ul className="modal-list">
            {selectedExperience?.description.map((desc, index) => (
              <li key={index}>{desc}</li>
            ))}
          </ul>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              closeModal();
            }}
            className="modal-close-link"
          >
            Close
          </a>
        </div>
      </Modal>
    </section>
  );
};

export default Experience;
