import { React, useRef } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Intro from "./components/Intro/Intro";
import About from "./components/About/About";
import Experience from "./components/Experience/Experience";
import Projects from "./components/Project/Projects";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <About />
      <Experience />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
