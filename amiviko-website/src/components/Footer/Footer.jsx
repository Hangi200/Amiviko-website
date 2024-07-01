import React from "react";
import "./footer.scss";
import video2 from '../../Assets/vid2.mp4';

const Footer = () => {
  return (
    <section className="footer">
      <div className="videoDiv">
        <video src="{video2}"loop autoPlay muted type="video/mp4"></video>
      </div>

      <div className="secContent container">
        <div className="contactDiv flex">
          <div className="text">
            <small>KEEP IN TOUCH</small>
            <h2>Book with US</h2>
            </div>
        </div>
      </div>
    </section>
  )
  
};

export default Footer;
