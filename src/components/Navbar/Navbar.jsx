import React from 'react';
import { Link } from 'react-scroll';
import './navStyles.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="intro" smooth={true} duration={500}>Intro</Link>
      <Link to="about" smooth={true} duration={500}>About</Link>
      <Link to="experience" smooth={true} duration={500}>Experience</Link>
      <Link to="project" smooth={true} duration={500}>Projects</Link>
    </nav>
  );
}

export default Navbar;