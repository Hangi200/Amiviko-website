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
            <h2 >Book with US</h2>
          </div>
          <div className="inputDiv flex">
            <input type="text" placeholder="Enter Email Address" />
            <button className="btn flex" type="submit">
              SEND <FiSend className="icon" />
            </button>
          </div>
        </div>
        <div className="footerCard flex">
          <div className="footerIntro flex">
            <div className="logoDiv">
              <a href="#" className="logo flex">
                <SiEventbrite className="icon" /> AMIVIKO.
              </a>
            </div>
            <div  className="footerParagraph">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse metus nulla, pellentesque a sem in, malesuada sodales
              nulla. Nam sit amet orci eget purus gravida facilisis a a nulla.
              Integer sit amet sapien nibh. Ut et faucibus ante. Maecenas
              vestibulum sapien in bibendum venenatis. Nunc quis est blandit,
              venenatis nisl id, aliquam tortor. Quisque faucibus dictum
              faucibus. Pellentesque vel risus purus. Morbi vel auctor eros.
              Aliquam placerat condimentum arcu, at condimentum tortor facilisis
              in. Nulla et diam feugiat, blandit eros sit amet, porta felis.
            </div>
            <div  className="footerSocials flex">
              <FaXTwitter className="icon" />

              <FaFacebookF className="icon" />
              <FaInstagram className="icon" />

              <FaTiktok className="icon" />
            </div>
          </div>
          <div className="footerLinks grid">
            <div
             
              data-aos-duration="4000"
              className="linkGroup"
            >
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
            <div
              
              
              className="linkGroup"
            >
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
