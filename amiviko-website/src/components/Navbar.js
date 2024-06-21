// src/components/Navbar.js

// import React from "react";
// import "./Navbar.css"; // We'll create this CSS file for styling


// const Navbar = () => {
//   return (
//     <nav className="navbar">
//       <div className="navbar-logo">
//         <a href="/">
//           <img src={`${process.env.PUBLIC_URL}/images/logo.png`} alt="Logo" />{" "}
//           Amiviko
//         </a>
//       </div>
//       <ul className="navbar-links">
//         <li>
//           <a href="/">Home</a>
//         </li>
//         <li>
//           <a href="/about">About</a>
//         </li>
//         <li>
//           <a href="/Booking">Booking</a>
//         </li>
//         <li>
//           <a href="/contact">Contact</a>
//         </li>
//         <li>
//           <a href="/Login">
//             <button className="navbar-button">Login</button>
//           </a>
//         </li>
//       </ul>
//     </nav>
//   );
// };

// export default Navbar;
import React from "react";
 // Adjust the path based on your directory structure
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <a href="/">
          <img src={`${process.env.PUBLIC_URL}/images/logo.png`} alt="Logo" />{" "}
        </a>
        <h2>Amiviko</h2>
      </div>
      <ul className="navbar-links">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <a href="/services">Services</a>
        </li>
        <li>
          <a href="/contact">Contact</a>
        </li>
      </ul>
      <button className="navbar-button">Login</button>
    </nav>
  );
};

export default Navbar;
