import React, {useState} from "react";
import './navbar.scss'
// import { SiEventbrite } from "react-icons/si";
import { IoIosCloseCircle } from "react-icons/io";
import { TbGridDots } from "react-icons/tb";
import { Link } from "react-router-dom";
import logo from "../../Assets/logo.svg";

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
            <img src={logo} alt=""  />
            {/* <h2 className="head">Amiviko.</h2> */}
          </a>
        </div>

        <div className={active}>
          <ul className="navLists">
            <li className="navItem">
              <Link to="/">
                <a href="#" className="navLink">
                  Home
                </a>
              </Link>
            </li>
            <li className="navItem">
              <Link to="AboutPage">
                <a href="AboutPage" className="navLink">
                  About
                </a>
              </Link>
            </li>
            <li className="navItem">
              <Link to="contact">
                <a href="#" className="navLink">
                  Contact
                </a>
              </Link>
            </li>
            <li className="navItem">
              <Link to="booking">
                <a href="#" className="navLink">
                  Booking
                </a>
              </Link>
            </li>

            <button className="btn" type="submit">
              Book Now
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
