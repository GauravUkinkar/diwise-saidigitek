import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "../styles/gallery.scss";
import "swiper/css";
import "swiper/css/pagination";

import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Helmet } from 'react-helmet';


function Gallery(props) {
  return (
    <>
      {props.data.map((data) => {

        return (
          <>

         <Helmet>
        <title></title>
        <meta name="keywords" content="" />
        <meta name="description" content="" />
        <link rel="canonical" href="https://sambhajipatilnilangekar.in/about" />
      </Helmet>

            <div className="gallery-parent parent">
              <div className="gallery-container cont">
                <div className="election-section">
                  {/* <span className="gallery-span">Elections Posts</span> */}
                  <h3>{data.Gallery_election}</h3>

                  <div className="gallery-line"></div>

                  <div className="s-container">
                    <Swiper
                      slidesPerView={3}
                      spaceBetween={30}
                      pagination={{
                        clickable: true,

                      }}
                      autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                      }}

                      breakpoints={{
                        "@0.00": {
                          slidesPerView: 1,
                          spaceBetween: 10,
                        },
                        "@0.75": {
                          slidesPerView: 2,
                          spaceBetween: 20,
                        },
                        "@1.00": {
                          slidesPerView: 3,
                          spaceBetween: 10,
                        },
                        "@1.50": {
                          slidesPerView: 3,
                          spaceBetween: 20,
                        },
                      }}
                      modules={[Autoplay, Pagination, Navigation]}
                      // onAutoplayTimeLeft={onAutoplayTimeLeft}
                      className="mySwiper"
                    >
                      <>
                        <SwiperSlide className="bg-img-contain swiper-img11"></SwiperSlide>
                        <SwiperSlide className="bg-img-contain swiper-img12"></SwiperSlide>
                        <SwiperSlide className="bg-img-contain swiper-img13"></SwiperSlide>
                        <SwiperSlide className="bg-img-contain swiper-img14"></SwiperSlide>
                        <SwiperSlide className="bg-img-contain swiper-img15"></SwiperSlide>
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
                    spaceBetween={30}
                    pagination={{
                      clickable: true,
                    }}
                    autoplay={{
                      delay: 2500,
                      disableOnInteraction: false,
                    }}
                    breakpoints={{
                      "@0.00": {
                        slidesPerView: 1,
                        spaceBetween: 10,
                      },
                      "@0.75": {
                        slidesPerView: 2,
                        spaceBetween: 20,
                      },
                      "@1.00": {
                        slidesPerView: 3,
                        spaceBetween: 10,
                      },
                      "@1.50": {
                        slidesPerView: 3,
                        spaceBetween: 20,
                      },
                    }}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper"
                  >
                    <>
                      <SwiperSlide className="bg-img-contain  swiper-img21"></SwiperSlide>
                      <SwiperSlide className="bg-img-contain  swiper-img22"></SwiperSlide>
                      <SwiperSlide className="bg-img-contain  swiper-img23"></SwiperSlide>
                      <SwiperSlide className="bg-img-contain  swiper-img24"></SwiperSlide>
                      <SwiperSlide className="bg-img-contain  swiper-img25"></SwiperSlide>
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
                    spaceBetween={30}
                    pagination={{
                      clickable: true,
                    }}
                    autoplay={{
                      delay: 2500,
                      disableOnInteraction: false,
                    }}



                    breakpoints={{
                      "@0.00": {
                        slidesPerView: 1,
                        spaceBetween: 10,
                      },
                      "@0.75": {
                        slidesPerView: 2,
                        spaceBetween: 20,
                      },
                      "@1.00": {
                        slidesPerView: 3,
                        spaceBetween: 10,
                      },
                      "@1.50": {
                        slidesPerView: 3,
                        spaceBetween: 20,
                      },
                    }}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper"
                  >
                    <>
                      <SwiperSlide className="bg-img-contain swiper-img31"></SwiperSlide>
                      <SwiperSlide className="bg-img-contain swiper-img32"></SwiperSlide>
                      <SwiperSlide className="bg-img-contain swiper-img33"></SwiperSlide>
                      <SwiperSlide className="bg-img-contain swiper-img34"></SwiperSlide>
                      <SwiperSlide className="bg-img-contain swiper-img35"></SwiperSlide>
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
