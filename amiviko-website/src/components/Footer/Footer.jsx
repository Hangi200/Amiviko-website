import React,{useEffect} from "react";
import "./footer.scss";
// import video2 from '../../Assets/vid1.mp4'
import { FiSend } from "react-icons/fi";
import { SiEventbrite } from "react-icons/si";
import { FaFacebookF } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FiChevronRight } from "react-icons/fi";
import logo from "../../Assets/logo.svg";
import Aos from "aos";
import "aos/dist/aos.css";

const Footer = () => {
  //lets create a react hook to add a scroll animation..
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <section className="footer">
      {/* <div className="videoDiv">
        <video src={video2} loop autoPlay muted type="video/mp4"></video>
      </div> */}
      <div className="secContent container">
        <div className="contactDiv flex">
          <div className="text">
            <small>KEEP IN TOUCH</small>
            <h2>Book with US</h2>
          </div>
          <div className="inputDiv flex">
            <input
              type="text"
              placeholder="Enter Email Address"
              className="input"
            />
            <button className="btn flex" type="submit">
              SEND <FiSend className="icon" />
            </button>
          </div>
        </div>
        <div className="footerCard flex">
          <div className="footerIntro flex">
            <div className="logoDiv">
              <p className="logo flex">
                {/* <img src={logo} alt="" className="icon" /> */} Amiviko.
              </p>
            </div>
            <div className="footerParagraph ">
              Welcome to Amiviko, your premier destination for unforgettable
              events and experiences. We are passionate about creating moments
              that matter, blending creativity, meticulous planning, and
              exceptional service to bring your vision to life.
            </div>
            <div className="footerSocials flex">
              <FaXTwitter className="icon"/>

              <FaFacebookF className="icon"/>
              <FaInstagram className="icon"/>

              <FaTiktok className="icon"/>
            </div>
          </div>
          <div className="footerLinks flex">
            <div data-aos-duration="4000" className="linkGroup">
              <span className="groupTitle">OUR TEAM</span>

              <li className="footerList flex">
                <FiChevronRight className="icon" />
                BeyVim
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Helmic
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Viyu
              </li>
            </div>
            <div className="linkGroup">
              <span className="groupTitle">OUR PARTNERS</span>

              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Rentcars
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Etsav Group
              </li>

              <li className="footerList flex">
                <FiChevronRight className="icon" />
                Hotels
              </li>
            </div>
            <div className="linkGroup1">
              <span className="groupTitle">OUR LOCATION</span>

              <li className="footerlist1 flex">
                {/* <FiChevronRight className="icon" /> */}
                Haile Selassie Road,
              </li>

              <li className="footerlist1 flex">
                {/* <FiChevronRight className="icon" /> */}
                Sky Mall Masaki,
              </li>

              <li className="footerlist1 flex">
                {/* <FiChevronRight className="icon" /> */}
                Dar es salaam Tanzania.
              </li>
            </div>
          </div>
          <div className="footerDiv flex">
            <small>BEST EVENT WEBSITE THEME</small>
            <small>COPYRIGHTS RESERVED-AMIVIKO 2024</small>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
