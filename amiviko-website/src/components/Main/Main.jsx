import React,{useEffect} from "react";
import "./main.scss";
import img from '../../Assets/pic1.jpg'
import img2 from "../../Assets/pic2.jpg";
import img3 from "../../Assets/pic3.jpg";
import img4 from "../../Assets/pic4.jpg";
import { FaLocationDot } from "react-icons/fa6";
import Aos from "aos";
import "aos/dist/aos.css";

const Data = [
  {
    id: 1,
    imgSrc: img,
    destTitle: "Friends Gathered",
    location: "Samaki Samaki",
    grade: "COST",
    fees: "$20",
    description:
      "This is friends gathered occasion which can involve all people from different places,to enjoy,celebrate,drink,eat and also play games together..",
  },
  {
    id: 2,
    imgSrc: img2,
    destTitle: "Weekend Party",
    location: "Havoc Nightspot",
    grade: "COST",
    fees: "$40",
    description:
      "This is friends gathered occasion which can involve all people from different places,to enjoy,celebrate,drink,eat and also play games together..",
  },
  {
    id: 3,
    imgSrc: img3,
    destTitle: "Weekend Party",
    location: "Havoc Nightspot",
    grade: "COST",
    fees: "$40",
    description:
      "This is friends gathered occasion which can involve all people from different places,to enjoy,celebrate,drink,eat and also play games together..",
  },
  {
    id: 4,
    imgSrc: img4,
    destTitle: "Weekend Party",
    location: "Havoc Nightspot",
    grade: "COST",
    fees: "$40",
    description:
      "This is friends gathered occasion which can involve all people from different places,to enjoy,celebrate,drink,eat and also play games together..",
  },
  {
    id: 4,
    imgSrc: img4,
    destTitle: "Weekend Party",
    location: "Havoc Nightspot",
    grade: "COST",
    fees: "$40",
    description:
      "This is friends gathered occasion which can involve all people from different places,to enjoy,celebrate,drink,eat and also play games together..",
  },
  {
    id: 4,
    imgSrc: img4,
    destTitle: "Weekend Party",
    location: "Havoc Nightspot",
    grade: "COST",
    fees: "$40",
    description:
      "This is friends gathered occasion which can involve all people from different places,to enjoy,celebrate,drink,eat and also play games together..",
  },
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
              <div data-aos="fade-up" key={id} className="singleDestination">
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
                      <span>
                        {grade}
                        <small>+</small>
                      </span>
                    </div>
                    <div className="price">
                      <h5>{fees}</h5>
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
