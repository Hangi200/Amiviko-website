import React, { useState } from 'react';
import { link } from 'react-router-dom';

function Navbar() {
  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          {/* <link to='/' className='navbar-logo'> */}
          AMIVIKO{" "}
          <img src={`${process.env.PUBLIC_URL}/images/amiviko-website/public/images/amiviko_logo-removebg-preview.png`} alt="Logo" />
          {/* </link> */}
        </div>
      </nav>
    </>
  );
}

export default Navbar
