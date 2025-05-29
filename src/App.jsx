import React from "react";
import "./App.css";
import Intro from "./components/Intro/Intro";
import About from "./components/About/About";
import Experience from "./components/experience/Experience";
import Projects from "./components/Project/Projects";

function App() {
  return (
    <div className="App">
      <Intro />
      <About />
      <Experience />
      <Projects />
    </div>
  );
}

export default App;
