import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import BorderColor from "@mui/icons-material/BorderColor";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import "../styles/NavBar.css";
// import "../styles/Global.css";

class NavBar extends React.Component {
  render() {
    return (
      <Navbar fixed="top" className="bg-body-tertiary">
        <Container>
          {/* <Navbar.Brand href="#"></Navbar.Brand> */}
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#intro">Home</Nav.Link>
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#experience">Experience</Nav.Link>
              <Nav.Link href="#projects">Projects</Nav.Link>
            </Nav>
            <Nav className="ml-auto">
              <Nav.Link href="mailto:scottadamr01@gmail.com">
                <EmailIcon style={{ fontSize: 20 }}></EmailIcon>
              </Nav.Link>
              <Nav.Link href="https://github.com/scottydotcom" target="_blank">
                <GitHubIcon style={{ fontSize: 19 }}></GitHubIcon>
              </Nav.Link>
              <Nav.Link href="https://www.linkedin.com/in/scottadamr/" target="_blank">
                <LinkedInIcon style={{ fontSize: 21 }}></LinkedInIcon>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}

export default NavBar;
