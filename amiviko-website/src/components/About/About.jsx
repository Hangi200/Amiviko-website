import React from 'react'
import './about.scss'
import img6 from "../../Assets/pic8.png";

function About() {
  return (
    <section className="about">
      <div className="about_section">
        <div className="section_one flex">
          <h4 className="section_title"> About Us</h4>
          <div className="footerParagraph ">
            Welcome to Amiviko, your premier destination for unforgettable
            events and experiences. We are passionate about creating moments
            that matter, blending creativity, meticulous planning, and
            exceptional service to bring your vision to life.
          </div>
          <div>
            <p>
              Amiviko empowers event planners with tools to create, manage, and
              promote events effortlessly.
            </p>
            <p>
              Discover events tailored to your interests. From concerts and
              conferences to community meetups.
            </p>
            <p>
              Showcase your services and spaces to a growing audience of
              organizers and participants, making it easier than ever to connect
              and collaborate.
            </p>
            <p>
              Amplify your brand by sponsoring events that align with your
              vision. Amiviko provides a platform to reach targeted audiences
              and measure your impact.
            </p>
          </div>
        </div>
        <div className="section_two">
          <img src={img6} alt="" className="w-100" />
        </div>
      </div>
    </section>
  );
}

export default About
  // <div className="secContent">
  //       <div className="contact flex">
  //         <div className="head">
  //           <h2>About Amiviko</h2>
  //         </div>
  //       </div>
  //       <div className="aboutParagraph ">
  //         <span>
  //           Welcome to Amiviko, your premier destination for unforgettable
  //           events and experiences.
  //         </span>
  //       <span>  We are passionate about creating moments that matter, blending
  //         creativity, meticulous planning, and exceptional service to bring your
  //         vision to life.</span>
  //       </div>
  //     </div>