import React, { useState } from "react";
import "./experienceStyles.css";
import FadeAnimation from "../FadeAnimation/FadeAnimation";
import Modal from "react-modal";

import { IoDocumentText, IoCloseCircle } from "react-icons/io5";

const Experience = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedExperience, setSelectedExperience] = useState(null);

  const experienceData = [
    {
      company: "LinkedIn",
      title: "Data Analytics Engineer Intern",
      duration: "JUL 2024 - JAN 2025",
      imageUrl: "/public//linkedin.png",
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
      imageUrl: "/public//cwc.png",
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
      <FadeAnimation>
        <div className="section-header">/ experience</div>
        <FadeAnimation delay="100ms">
          <div className="experience-content">
            {experienceData.map((workData, index) => (
              <div className="card" key={index}>
                <img src={workData.imageUrl} alt="Company image" className="card-image" />
                <div className="card-content">
                  <header className="card-header">
                    <span>{workData.company}</span>
                    <div className="icon-container">
                      <a
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          openModal(workData);
                        }}
                      >
                        <IoDocumentText />
                      </a>
                    </div>
                  </header>
                  <div className="card-body">{workData.title}</div>
                  <footer className="card-footer">
                    <span className="duration-tag">{workData.duration}</span>
                  </footer>
                </div>
              </div>
            ))}
          </div>
          <Modal isOpen={modalIsOpen} onRequestClose={closeModal}>
            <div className="modal-content">
              <FadeAnimation>
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
                  <IoCloseCircle className="close-button" />
                </a>
              </FadeAnimation>
            </div>
          </Modal>
        </FadeAnimation>
      </FadeAnimation>
    </section>
  );
};

export default Experience;