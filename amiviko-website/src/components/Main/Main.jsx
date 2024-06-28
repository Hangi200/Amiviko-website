import React from "react";
import "./main.scss";
import img from '../../Assets/pic1.jpg'
import { FaLocationDot } from "react-icons/fa6";

const Data = [
  {
    id: 1,
    imgSrc: img,
    destTitle: "Friends Gathered",
    location: "Samaki Samaki",
    grade: "CULTURAL RELAX",
    fees: "$20",
    description: "This is friends gatherd occasion which can involve all people from different places,to enjoy,celebrate,drink,eat and also play games together.."
  },
];



const Main = () => {
  return (
    < section className="main container section" >
      <div className="secTitle">
        <h3 className="title">
          most Address Occasions
        </h3>
      </div>
      
      <div className="secContent grid">
        {
          Data.map(({id,imgSrc,destTitle,location,grade,fees,description }) => {
            return (
              <div key={id} className="singleDestination">
                <div className="imageDiv">
                  <img src={imgSrc} alt={destTitle} />
                </div>
                <div className="cardInfo">
                  <h4 className="destTitle"> {destTitle} </h4>
                  <span className="continent flex">
                    <FaLocationDot className="icon" />
                    <span className="name">{location} </span>
                  </span>

                  <div className="fees flex">
                    <div className="grade">
                      <span>{grade}<small>+</small></span>
                    </div>
                    <div className="price">
                      <h5>{fees}</h5>
                    </div>
                  </div>
                  <div className="desc">
                    <p>{ description}</p>
                  </div>
                  <button className="btn flex">
                    see more
                </button>
                </div>
              </div>
            );
          })
        }

      </div>

    </section >
  )
};

export default Main
