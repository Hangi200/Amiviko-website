import React from 'react'
import './home.scss'
import video from '../../Assets/vid2.mp4'
import { GiPartyPopper } from "react-icons/gi";
import { FaFilter } from "react-icons/fa";
import { TfiFacebook } from "react-icons/tfi";
import { AiFillInstagram } from "react-icons/ai";
import { SiTiktok } from "react-icons/si";
import { FaListUl } from "react-icons/fa";
import { TbAppsFilled } from "react-icons/tb";


const Home = () => {
  return (
    <section className="home">
      <div className="overlay"></div>
      <video src={video} muted autoPlay loop type="video/mp4"></video>

      <div className="homeContent container">
        <div className="textDiv">
          <span className="smallText">Our Packages</span>
          <h1 className="homeTitle">Search Your Occasions</h1>
        </div>

        <div className="cardDiv grid">
          <div className="destinationInput">
            <label htmlFor="city">Book your occasion:</label>
            <div className="input flex">
              <input type="text" placeholder="Enter occasion name..." />
              <GiPartyPopper className='icon' />
            </div>
          </div>
          <div className="dateInput">
            <label htmlFor="date">Select your date:</label>
            <div className="input flex">
              <input type="date" />
            </div>
          </div>
          <div className="priceInput">
            <div className="label_total flex">
              <label htmlFor="price">Max price:</label>
              <h3 className="total">$5000</h3>
            </div>
            <div className="input flex">
              <input type="range" max="5000" min="1000" />
            </div>
          </div>
          <div className="searchOptions flex">
            <FaFilter className="icon" />
            <span>MORE FILTERS</span>
          </div>
        </div>
        <div className="homeFooterIcons flex">
          <div className="rightIcon">
            <TfiFacebook className="icon" />
            <AiFillInstagram className="icon" />
            <SiTiktok className="icon" />
          </div>
          <div className="leftIcon">
            <FaListUl className="icon" />
            <TbAppsFilled className="icon" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home
