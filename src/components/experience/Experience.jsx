import React from "react";
import "./experienceStyles.css";

const Experience = () => {
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
      imageUrl: "src/components/assets/images/code-with-craig.png",
      description: [
        "Actively contributing to the development and enhancement of my Bootcamp instructor's website, focusing on creating clear and engaging examples of JavaScript, HTML, and CSS.",
        "Coordinated with the instructor to create a seamless and visually appealing site layout, improving user experience and navigation.",
        "Collaborated on redesigning and enhancing user interfaces for the Bootcamp instructor's    website, ensuring improved accessibility and responsiveness.",
        "Collaborated on redesigning and enhancing user interfaces for the Bootcamp instructor's website, ensuring improved accessibility and responsiveness.",
        "Coordinated with the instructor to create a seamless and visually appealing site layout, improving user experience and navigation.",
      ],
    },
  ];

  return (
    <section className="experience">
      <div className="section-header">/ experience</div>
      <div className="experience-content">
        {experienceData.map((exp, index) => (
          <div className="experience-card" key={index}>
            <img src={exp.imageUrl} alt="company image" className="company-image" />
            <div className="experience-card">
              <header className="experience-header">
                <span>{exp.title}</span>
              </header>
              <div className="experience-body">{exp.company}</div>
              <footer className="experience-footer">{exp.duration}</footer>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;

//   <section className="experience">
//     <div className="section-header">/ experience</div>
//     <div className="experience-content">
//     {/* <img src={project.imageUrl} alt="Card Image" className="card-image" /> */}
//       {experienceData.map((exp, index) => (
//         <div className="card" key={index}>
//           <header className="card-header">
//             <span>{exp.title}</span>
//           </header>
//           <div className="card-body">{exp.company}</div>
//           <footer className="card-footer">{exp.duration}</footer>
//           <ul className="card-description">
//             {exp.description.map((desc, descIndex) => (
//               <li key={descIndex}>{desc}</li>
//             ))}
//           </ul>
//         </div>
//       ))}
//     </div>
//   </section>
// );
