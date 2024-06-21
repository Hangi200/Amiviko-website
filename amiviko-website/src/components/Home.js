// src/components/Home.js

import React from "react";
import "./Home.css";
import backgroundImage from "../components/event image.jpg"; // Adjust the path if needed

const Home = () => {
  return (
    <div className="home">
      <div className="content">
        <img src={backgroundImage} alt="Background" className="home-image" />
        <div className="text">
          <h1>Welcome to MyApp</h1>
          <p>Your journey begins here.</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
