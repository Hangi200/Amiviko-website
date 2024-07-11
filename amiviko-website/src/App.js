// src/App.js

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar"
import Home from "./components/Home/Home";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import BookingPage from "./pages/BookingPage";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Home />
        <Main />
        <Footer />
        <Routes>
          <Route path="/" exact element={Home} />
          <Route path="/about" component={AboutPage} />
          <Route path="/contact" component={ContactPage} />
          <Route path="/booking" component={BookingPage} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
