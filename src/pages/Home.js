import React from "react";
import "../styles/home.scss";
import HomeSlider from "../Comp/HomeSlider";
import TwoColSec from "../Comp/TwoColSec";
import Card_section from "../component/Card_section"
import BeforeFooter from "../component/BeforeFooter"
import img1 from "../Img/home/VISION.webp"
import imgmission from "../Img/home/MISSION.webp"
import card1 from "../Img/home/Data-Support.webp"
import card2 from "../Img/home/Election-Campaign-Support.webp"
import card3 from "../Img/home/Social-Media-Support.webp";
import { Helmet } from 'react-helmet';


function Home(props) {
  const Data = [
    {
      secind: "asadasda",
      heading: "asdasda",
      desc: "asdasdaasdasdasdasdsa",
      btn: "read more",
    },
    {
      secind: "2",
      heading: "23112312a",
      desc: "asdasdaasdasdweqwadasfasdfaasdasdsa",
      btn: "click now",
    },
    {
      secind: "2",
      heading: "23112312a",
      desc: "asdasdaasdasdweqwadasfasdfaasdasdsa",
      btn: "",
    },
  ];

  return (
    <>
     {props.data.map((data) =>{
      
        return(

<>

<Helmet>
        <title></title>
        <meta name="keywords" content="" />
        <meta name="description" content="" />
        <link rel="canonical" href="https://sambhajipatilnilangekar.in/about" />
      </Helmet>

      <div className="nav-gap"></div>
      <div className="hero parent">

        <HomeSlider data={props.data} />

      </div> 

      {/* second section starts here */}
      

      <TwoColSec
        row=""
        secind={data.Home_secind}
        bg={img1}
        background="#ffffff"
        subheading={data.Home_subheading}
        subdescription={data.Home_subdescription}
        btn=""
      ></TwoColSec>

<TwoColSec
        row="row-reverse"
        secind={data.Home_titles}
        bg={imgmission}
        background="#f6f6f6"
        subheading={data.Home_heading}
        subdescription={data.Home_para}
        btn=""
      ></TwoColSec>


      {/* --------------------Third Section Starts Here---------------------- */}
     <Card_section 
      titles={data.Home_card_sectiontitle}
      heading={data.Home_card_sectionheading}
      para={data.Home_card_sectionpara}
      card1={data.Home_card1}
      card1para={data.Home_card1para}
      card2={data.Home_card2}
      card2para={data.Home_card2para}
      card3={data.Home_card3}
      card3para={data.Home_card3para}
      btntext={data.Home_know_more}
      bg="#f6f6f6" 
      mainbg="#ffffff" 
      img={card1}
      img1={card3}
      img2={card2}
      />





     {/* -----------------Fourth Section Start Here---------------------- */}
     <BeforeFooter
     para1={data.Home_beforefooter_para}
     para2={data.Home_beforefooter_para2}
     button={data.Home_beforefooter_button}
     bg=""
     
     
     />

     </>
              );
            })}

    </>  
  );
}

export default Home;
