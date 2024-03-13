import React from "react";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "../styles/gallery.scss";
import "swiper/css";
import "swiper/css/pagination";

function Gallery(props) {
  return (
    <>
       {props.data.map((data) =>{
     
     return(
  <>
      <div className="gallery-parent parent">
        <div className="gallery-container cont">
          <div className="election-section">
            {/* <span className="gallery-span">Elections Posts</span> */}
            <h3>{data.Gallery_election}</h3>

            <div className="gallery-line"></div>

            <div className="s-container">
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
                  spaceBetween: 5,
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
              <>
                <SwiperSlide className="bg-img-cover swiper-img2"></SwiperSlide>
                <SwiperSlide className="bg-img-cover swiper-img2"></SwiperSlide>
                <SwiperSlide className="bg-img-cover swiper-img2"></SwiperSlide>
                <SwiperSlide className="bg-img-cover swiper-img2"></SwiperSlide>
                <SwiperSlide className="bg-img-cover swiper-img2"></SwiperSlide>
              </>
            </Swiper>
            </div>
          </div>
        </div>
      </div>

      {/* marketing Section */}

      <div className="gallery-parent parent " style={{ background: "white" }}>
        <div className="gallery-container cont">
          <div className="marketing-section">
           
            <h3>{data.Gallery_marketing}</h3>

            <div className="gallery-line"></div>

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
                  spaceBetween: 5,
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
              <>
                <SwiperSlide className="bg-img-cover swiper-img3"></SwiperSlide>
                <SwiperSlide className="bg-img-cover swiper-img3"></SwiperSlide>
                <SwiperSlide className="bg-img-cover swiper-img3"></SwiperSlide>
                <SwiperSlide className="bg-img-cover swiper-img3"></SwiperSlide>
                <SwiperSlide className="bg-img-cover swiper-img3"></SwiperSlide>
              </>
            </Swiper>
          </div>
        </div>
      </div>

      {/* calender section */}

      <div className="gallery-parent parent">
        <div className="gallery-container cont">
          <div className="calender-section">
          
            <h3>{data.Gallery_calender}</h3>
            <div className="gallery-line"></div>
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
                  spaceBetween: 5,
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
              <>
                <SwiperSlide className="bg-img-cover swiper-img4"></SwiperSlide>
                <SwiperSlide className="bg-img-cover swiper-img4"></SwiperSlide>
                <SwiperSlide className="bg-img-cover swiper-img4"></SwiperSlide>
                <SwiperSlide className="bg-img-cover swiper-img4"></SwiperSlide>
                <SwiperSlide className="bg-img-cover swiper-img4"></SwiperSlide>
              </>
            </Swiper>
          </div>
        </div>
      </div>

      </>
              );
            })}
    </>
  );
}

export default Gallery;
