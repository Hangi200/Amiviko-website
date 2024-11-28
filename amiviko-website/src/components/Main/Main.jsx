import React,{useEffect} from "react";
import "./main.scss";
import img from '../../Assets/pic1.png'
import img2 from "../../Assets/pic2.png";
import img3 from "../../Assets/pic3.jpg";
import img4 from "../../Assets/pic4.jpeg";
import img5 from "../../Assets/pic4.jpg";
import img6 from "../../Assets/pic5.jpg";

// import img6 from "../../Assets/pic6.jpg"
import { FaLocationDot } from "react-icons/fa6";
import Aos from "aos";
import "aos/dist/aos.css";

const Data = [
  {
    id: 1,
    imgSrc: img,
    destTitle: "Friends Gathered",
    location: "Samaki Samaki Masaki",
    grade: "DATE",
    fees: "02/07/2023",
    description:
      "This is friends gathered occasion which can involve all people from different places,to enjoy,celebrate,drink,eat and also play games together..",
  },
  {
    id: 2,
    imgSrc: img2,
    destTitle: "Family Gathered",
    location: "Hotel Slipway",
    grade: "DATE",
    fees: "22/12/2023",
    description:
      "This is Family gathered occasion which can involve all people from different places,to enjoy,celebrate,drink,eat and also play games together..",
  },
  {
    id: 3,
    imgSrc: img3,
    destTitle: "Birthday Party",
    location: "Hyatt Regency",
    grade: "DATE",
    fees: "02/02/2024",
    description:
      "This is friends gathered occasion which can involve all people from different places,to enjoy,celebrate,drink,eat and also play games together..",
  },
  {
    id: 4,
    imgSrc: img4,
    destTitle: "Wedding party",
    location: "Serena Hotel",
    grade: "DATE",
    fees: "12/04/2024",
    description:
      "This is friends gathered occasion which can involve all people from different places,to enjoy,celebrate,drink,eat and also play games together..",
  },
  {
    id: 5,
    imgSrc: img5,
    destTitle: "Weekend Party",
    location: "Elemental Dar",
    grade: "DATE",
    fees: "15/05/2024",
    description:
      "This is friends gathered occasion which can involve all people from different places,to enjoy,celebrate,drink,eat and also play games together..",
  },
  {
    id: 6,
    imgSrc: img6,
    destTitle: "Night Club Party",
    location: "Havoc Nightspot",
    grade: "DATE",
    fees: "30/6/2024",
    description:
      "This is friends gathered occasion which can involve all people from different places,to enjoy,celebrate,drink,eat and also play games together..",
  }
];



const Main = () => {
  //lets create a react hook to add a scroll animation..
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <section className="main ">
      <div className="secTitle">
        <h3 data-aos="fade-right" className="title">
          most Address Occasions
        </h3>
      </div>

      <div className="secContent grid">
        {Data.map(
          ({ id, imgSrc, destTitle, location, grade, fees, description }) => {
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
                      <span>{grade} </span>
                    </div>
                    <div className="price">
                      <h6>{fees}</h6>
                    </div>
                  </div>
                  <div className="desc">
                    <p>{description}</p>
                  </div>
                  <button className="btn flex">see more</button>
                </div>
              </div>
            );
          }
        )}
      </div>
    </section>
  );
};

export default Main
