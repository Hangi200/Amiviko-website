// src/App.js

import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <header className="App-header">
        <h1>Your Events With US</h1>
      </header>
    </div>
  );
}

export default App;
