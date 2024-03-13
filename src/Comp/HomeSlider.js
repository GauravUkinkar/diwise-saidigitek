import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination } from "swiper/modules";

export default function HomeSlider(props) {

  return (
    <>
    {props.data.map((data) =>{
       return(

    <>
      <Swiper
        spaceBetween={0}
        centeredSlides={true}
        autoplay={{
          delay: 250000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide className="slide1 sliden">
          {" "}
          <div className="overlay"></div>
          <div className="slide-under-container container">
            <div className="heading">{data.Home_slider1}</div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="slide2 sliden1"><div className="overlay"></div>
          <div className="slide-under-container container">
            <div className="heading">{data.Home_slider2} </div>
          </div></SwiperSlide>
        <SwiperSlide className="slide3 sliden2"><div className="overlay"></div>
          <div className="slide-under-container container">
            <div className="heading">{data.Home_slider3}</div>
          </div></SwiperSlide>
      </Swiper>
      </>
              );
            })}
    </>
  );
}
