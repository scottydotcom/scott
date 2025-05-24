import React from "react";
import "./App.css";
import Intro from "./components/Intro/Intro";
import About from "./components/About/About";
import Projects from "./components/Project/Projects";

function App() {
  return (
    <div className="App">
      <Intro />
      <About />
      <Projects />
    </div>
  );
}

export default App;
