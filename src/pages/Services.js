import React from "react";
import "../styles/services.scss";
import {Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import { EffectCards } from "swiper/modules";
import TwoColSec from "../Comp/TwoColSec";
import "swiper/css/pagination";
import List from "../component/List";
import { CiCircleCheck } from "react-icons/ci";
import BeforeFooter from "../component/BeforeFooter";
import be from "../Img/election-campaign/A-Wholesome-Win-Package.webp"
import tech from "../Img/election-campaign/Tech-And-Time-Are-The-Key.webp"
import booth from "../Img/election-campaign/Booth-Support-LAY-A.webp"



function Services(props) {

  return (
    <>
    {props.data.map((data) =>{
     
       return(
    <>
      <div className="nav-gap"></div>
      <div className="service-parent parent">
        <div className="service-container container">
          <div className="contain-img">
          <TwoColSec
            bg={be}
            row=""
            background=""
            subheading={data. Election_campaign_subheading}
            subdescription={data. Election_campaign_subdescription}
            btn=""
            secind={data.Election_campaign_secind}
          ></TwoColSec>
          </div>
          <TwoColSec
            bg={tech}
            row="row-reverse"
            background="#f6f6f6"
            subheading={data.Election_campaign_subheading1}
            subdescription={data. Election_campaign_subdescription1}
            btn=""
            secind={data.Election_campaign_secind1}
          >
             <div className="service-listfour">
            <List
              li1={data.Election_campaign_ul1_li1}
              li2={data.Election_campaign_ul1_li2}
              li3=""
              li4=""
              li5=""
              li6=""
              li7=""
            />
            </div>
          </TwoColSec>
          <TwoColSec
            bg={booth}
            row=""
            background=""
            subheading={data.Election_campaign_subheading2}
            subdescription={data.  Election_campaign_subdescription2}
            btn=""
            secind={data.Election_campaign_secind2}
          >
              <div className="service-listfour">
            <List
              li1={data.Election_campaign_ul2_li1}
              li2={data.Election_campaign_ul2_li2}
              li3=""
              li4=""
              li5=""
              li6=""
              li7=""
            />
            </div>
          </TwoColSec>
       

          {/* --------------------------Start campaign Swipper----------------------------- */}
          <div className="camp-parent parent">
        <div className="camp-container cont ">
          <div className="camp-left">
            <div className="camp-top bg-img-cover"></div>
            <div className="camp-bottom">
              <div className="line-text">
                <div className="line"></div>
                <div className="span-text">{data.Election_campaign_secind3}</div>
              </div>
              <h3>{data.Election_campaign_subheading3}</h3>
              <p>
                {data.Election_campaign_subdescription3}
              </p>
            </div>
          </div>

          <div className="camp-right">
            <Swiper
              effect={"cards"}
              grabCursor={true}
              modules={[EffectCards]}
              className="mySwiper"
            >
             
              <SwiperSlide>
              <div className="swiper-card1">
                <div className="card-img1 cimg1 bg-img-cover"></div>
                <div className="card-content">
                  <h4 className="card-h4">{data.  Election_campaign_ul3_li1}</h4>
                </div>
             
              </div>
              </SwiperSlide>

              <SwiperSlide>
              <div className="swiper-card1">
                <div className="card-img1 cimg2 bg-img-cover"></div>
                <div className="card-content">
                  <h4 className="card-h4">{data.  Election_campaign_ul3_li2}</h4>
                </div>
              </div>
              </SwiperSlide>

              <SwiperSlide>
              <div className="swiper-card1">
                <div className="card-img1 cimg3 bg-img-cover"></div>
                <div className="card-content">
                  <h4 className="card-h4">{data.  Election_campaign_ul3_li3}</h4>
                </div>
              </div>
              </SwiperSlide>

              <SwiperSlide>
              <div className="swiper-card1">
                <div className="card-img1 cimg4 bg-img-cover"></div>
                <div className="card-content">
                  <h4 className="card-h4">{data.  Election_campaign_ul3_li4}</h4>
                </div>
              </div>
              </SwiperSlide>

              <SwiperSlide>
              <div className="swiper-card1">
                <div className="card-img1 cimg5 bg-img-cover"></div>
                <div className="card-content">
                  <h4 className="card-h4">{data.  Election_campaign_ul3_li5}</h4>
                </div>
              </div>
              </SwiperSlide>

              <SwiperSlide>
              <div className="swiper-card1">
                <div className="card-img1 cimg6 bg-img-cover"></div>
                <div className="card-content">
                  <h4 className="card-h4">{data.  Election_campaign_ul3_li6}</h4>
                </div>
              </div>
              </SwiperSlide>

              <SwiperSlide>
              <div className="swiper-card1">
                <div className="card-img1 cimg7 bg-img-cover"></div>
                <div className="card-content">
                  <h4 className="card-h4">{data.  Election_campaign_ul3_li7}</h4>
                </div>
              </div>
              </SwiperSlide>

              <SwiperSlide>
              <div className="swiper-card1">
                <div className="card-img1 cimg8 bg-img-cover"></div>
                <div className="card-content">
                  <h4 className="card-h4">{data.  Election_campaign_ul3_li8}</h4>
                </div>
              </div>
              </SwiperSlide>

              <SwiperSlide>
              <div className="swiper-card1">
                <div className="card-img1 cimg9 bg-img-cover"></div>
                <div className="card-content">
                  <h4 className="card-h4">{data.  Election_campaign_ul3_li9}</h4>
                </div>
              </div>
              </SwiperSlide>
         
            </Swiper>
          </div>
        </div>
      </div>

      {/* ----------------------Swiper Cards---------------------- */}
      <div className="s-fact-parent parent">
      <div className="swiper-heading">
              <div className="line-text">
              <div className="line"></div>
              </div>
                <h2 className="card-title">{data. Election_campaign_subheading4}</h2>
              </div>
        <div className="s-container cont">

          <Swiper
            slidesPerView={3}
            spaceBetween={10}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              "@0.00": {
                slidesPerView: 1,
                spaceBetween: 5,
              },
              "@0.75": {
                slidesPerView: 2,
                spaceBetween: 10,
              },
              "@1.00": {
                slidesPerView: 3,
                spaceBetween: 10,
              },
              "@1.50": {
                slidesPerView: 3,
                spaceBetween: 10,
              },
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            <SwiperSlide className="slidess bg-img-cover"></SwiperSlide>
            <SwiperSlide className="slidess1 bg-img-cover"></SwiperSlide>
            <SwiperSlide className="slidess2 bg-img-cover"></SwiperSlide>
            <SwiperSlide className="slidess3 bg-img-cover"></SwiperSlide>
            <SwiperSlide className="slidess4 bg-img-cover"></SwiperSlide>
            {/* <SwiperSlide className="slidess5 bg-img-cover"></SwiperSlide> */}
          </Swiper>
        </div>
      </div>

      <BeforeFooter
     para1={data.Home_beforefooter_para}
     para2={data.Home_beforefooter_para2}
     button={data.Home_beforefooter_button}
     bg=""
     
     
     />
        </div>
      </div>
      </>
              );
            })}
    </>
  );
}

export default Services;