
import "../styles/cardsection.scss";
import { Link } from "react-router-dom";
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

function Card_section(props) {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };
  return (



    <>
      <div className="card-parent parent" style={{ background: `${props.mainbg}` }}>
        <div className="card-container cont" style={{ background: `${props.cardbg}` }}>
          <div className="card-content-box">
            <div className="card-short-title">{props.titles}
              <div className="line"></div>
            </div>
            <h4 className="card-title">
              {props.heading}
            </h4>
            <div className="card-description">
              {props.para}
            </div>
          </div>
          <div className="card-box">
            <Swiper
              spaceBetween={30}
              slidesPerView={3}
              centeredSlides={false}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}

              breakpoints={{


                300: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },

                700: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                1200: {
                  slidesPerView: 3,
                  spaceBetween: 30,
                },
              }}
              navigation={true}
              modules={[Autoplay, Pagination, Navigation]}
              className="mySwiper"
            >
              <SwiperSlide>
              <div className="card about-card" style={{ background: `${props.bg}` ,height:`${props.height}` }}>
                  <div className="content-box">
                    <div className="img bg-img-cover" style={{ background: `url(${props.img})` }}>

                    </div>
                    <h3>{props.card1}</h3>
                    <p>{props.card1para}</p>
                  </div>
                  {props.btntext && (
                    <Link to="/social_media_support" onClick={scrollToTop} className="btn button">
                      {props.btntext}
                    </Link>
                  )}
                </div>



              </SwiperSlide>
              <SwiperSlide>
              <div className="card about-card" style={{ background: `${props.bg}` ,height:`${props.height}`}}>
                  <div className="content-box">
                    <div className="img bg-img-cover" style={{ background: `url(${props.img1})` }}>

                    </div>
                    <h3>{props.card2}</h3>
                    <p>{props.card2para}</p>
                  </div>
                  {props.btntext && (
                    <Link to="/social_media_support" onClick={scrollToTop} className="btn">
                      {props.btntext}
                    </Link>
                  )}
                </div>
              </SwiperSlide>
              
              <SwiperSlide>
                <div className="card about-card" style={{ background: `${props.bg}` ,height:`${props.height}` }}>
                  <div className="content-box">
                    <div className="img bg-img-cover" style={{ background: `url(${props.img2})` }}>

                    </div>
                    <h3>{props.card3}</h3>
                    <p>{props.card3para}</p>
                  </div>
                  {props.btntext && (
                    <Link to="/social_media_support" onClick={scrollToTop} className="btn">
                      {props.btntext}
                    </Link>
                  )}
                </div>
              </SwiperSlide>

            </Swiper>

          </div>

        </div>
      </div>

    </>
  );
}

export default Card_section;
