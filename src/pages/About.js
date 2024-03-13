import React from "react";
import "../styles/about.scss";
import "../styles/facts.scss"
import TwoColSec from "../Comp/TwoColSec";
import Card_section from "../component/Card_section";
import BeforeFooter from "../component/BeforeFooter";
import { Link } from "react-router-dom";
import { FaFacebook } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import { FaTwitter } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";
import CountUp from 'react-countup';
import { FaYoutube } from "react-icons/fa6";
import revotu from "../Img/about/Revolutionising-Political-Marketing-trategies.jpg"
import card1img from "../Img/about/Innovative-Approach.webp"
import card2img from "../Img/about/Research-Oriented.webp"
import card3img from "../Img/about/Commitment-to-Excellence.webp"

function About(props) {
console.log(props.data)
  return (

    <>
         {props.data.map((data) =>{
        return(

<>
<div>
      <div className="about-parent parent">
        <div className="about-container container">
          <TwoColSec
            row=""
            secind={data.About_secind}
            bg={revotu}
            background="#ffffff"
            subheading={data.About_subheading}
            subdescription={data.About_subdescription}
            btn={data.Home_beforefooter_button}
          ></TwoColSec>
        </div>
      </div>

      <Card_section className="about-card"
      height="550px" 
      titles={data.About_titles}
      heading={data.About_heading}
      para=""
      card1={data.About_card1}
      card1para={data.Home_card1para}
      card2={data.About_card2}
      card2para={data.Home_card2para}
      card3={data.About_card3}
      card3para={data.Home_card3para}
      btntext=""
      bg="#ffffff" 
      mainbg="#f6f6f6" 
      img={card1img}
      img1={card2img }
      img2={card3img}
      />
      


    
    {/* -----------------Start fact section--------------------------- */}
    <div className="fact-parent parent">
                <div className="fact-container cont">
                  <div className="fact">
                    <span className="fact-span">{data.About_fact}</span>
                    <div className="underline"></div>
                  </div>
                  <h3 className="fact-text">{data.About_fact_text}</h3>
                  <div className="box-container">
                    <div className="box">
                      <span className="face-span"> <CountUp end={3} /> Billion+</span> 
                     <div className="brand">
                     <FaFacebook className="face-icon1" />
                      <h3 className="social-media-text">Facebook</h3>
                     </div>
                    </div>
                    <div className="box">
                      <span className="face-span"> <CountUp end={2} /> Billion+</span> 
                     <div className="brand">
                     <AiFillInstagram className="face-icon2" />
                      <h3 className="social-media-text">Instagram</h3>
                     </div>
                    </div>
                    <div className="box">
                      <span className="face-span"> <CountUp end={615}/> Million+</span> 
                     <div className="brand">
                     <FaTwitter className="face-icon3" />
                      <h3 className="social-media-text">Twitter</h3>
                     </div>
                    </div>
                    <div className="box">
                      <span className="face-span"> <CountUp end={1} /> Billion+</span> 
                     <div className="brand">
                     <BsLinkedin className="face-icon4" />
                      <h3 className="social-media-text">Linkedin</h3>
                     </div>
                    </div>
                    <div className="box">
                      <span className="face-span"> <CountUp end={2} />.<CountUp end={5} /> Billion+</span> 
                     <div className="brand">
                     <FaYoutube className="face-icon5" />
                      <h3 className="social-media-text">YouTube</h3>
                     </div>
                    </div>
                  </div>
                </div>
              </div>


      <BeforeFooter
      para1={data.About_beforefooter_para}
      button={data.Home_beforefooter_button}
      bg=""
      
      />
    </div>

    </>
              );
            })}



</>
  );
}

export default About;
