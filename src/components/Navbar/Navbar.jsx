import React, { useState } from "react";
import { Link } from "react-scroll"; // Make sure to import Link from react-scroll
import "./navStyles.css";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("intro"); // Default active link

  const handleSetActive = (link) => {
    setActiveLink(link);
  };

  return (
    <nav className="navbar">
      <Link
        to="intro"
        smooth={true}
        duration={500}
        onClick={() => handleSetActive("intro")}
        className={activeLink === "intro" ? "active" : ""}
      >
        Home
      </Link>
      <Link
        to="about"
        smooth={true}
        duration={500}
        onClick={() => handleSetActive("about")}
        className={activeLink === "about" ? "active" : ""}
      >
        About
      </Link>
      <Link
        to="experience"
        smooth={true}
        duration={500}
        onClick={() => handleSetActive("experience")}
        className={activeLink === "experience" ? "active" : ""}
      >
        Experience
      </Link>
      <Link
        to="project"
        smooth={true}
        duration={500}
        onClick={() => handleSetActive("project")}
        className={activeLink === "project" ? "active" : ""}
      >
        Projects
      </Link>
    </nav>
  );
};

export default Navbar;