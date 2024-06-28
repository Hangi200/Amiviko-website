import React, {useState} from "react";
import './navbar.scss'
import { SiEventbrite } from "react-icons/si";
import { IoIosCloseCircle } from "react-icons/io";
import { TbGridDots } from "react-icons/tb";



const Navbar = () => {
  const [active, setActive] = useState("navBar");
  //function on toggle navBar
  const showNav = () => {
    setActive("navBar activeNavbar ");
  };

  //function on remove navBar
  const removeNavbar = () => {
    setActive("navBar");
  };

  return (
    <section className="navBarsection">
      <header className="header">
        <div className="logoDiv">
          <a href="" className="logo">
            <h2 className="head">
              <SiEventbrite className="icon" />
              Amiviko.
            </h2>
          </a>
        </div>

        <div className={active}>
          <ul className="navLists">
            <li className="navItem">
              <a href="#" className="navLink">
                Home
              </a>
            </li>
            <li className="navItem">
              <a href="#" className="navLink">
                About
              </a>
            </li>
            <li className="navItem">
              <a href="#" className="navLink">
                Contact
              </a>
            </li>
            <li className="navItem">
              <a href="#" className="navLink">
                Booking
              </a>
            </li>
            <button className="btn">
              <a href="#">BOOK NOW</a>
            </button>
          </ul>
          <div onClick={removeNavbar} className="closeNavbar">
            <IoIosCloseCircle className="icon" />
          </div>
        </div>
        <div onClick={showNav} className="toggleNavbar">
          <TbGridDots className="icon" />
        </div>
      </header>
    </section>
  );
};

export default Navbar;
