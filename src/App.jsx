import React from "react";
import Intro from "./components/Intro"
import NavBar from "./components/NavBar";
import "./App.css";

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Intro></Intro>
    </div>
  );
}

export default App;
