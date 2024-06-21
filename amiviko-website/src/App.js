// src/App.js

import React from "react";
import Navbar from "./components/Navbar";
import "./App.css";

function App() {
  return (
    <div className="App">
      {/* <img src={`${process.env.PUBLIC_URL}/images/logo.png`} alt="Logo" />{" "} */}
      <Navbar />
      <header className="App-header">
        <h1>Your Events With US</h1>
      </header>
    </div>
  );
}

export default App;
