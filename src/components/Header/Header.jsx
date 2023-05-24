import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "../Header/Header.css";

// import required modules
import { EffectCoverflow, Pagination } from "swiper";

export default function App() {
  return (
    <>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="https://www.filtershop.co.za/images/thumbs/0006767_domestic-water-filters_370.jpeg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://filtershop.co.za/images/thumbs/0006763_under-the-counter-water-filters-range_370.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://www.filtershop.co.za/images/thumbs/0007071_replacement-filters-and-membranes_370.jpeg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://filtershop.co.za/images/thumbs/0006764_complete-home-filters-range_370.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://filtershop.co.za/images/thumbs/0006768_borehole-river-water-solutions_370.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://filtershop.co.za/images/thumbs/0006763_under-the-counter-water-filters-range_370.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://www.filtershop.co.za/images/thumbs/0006349_portable-and-camping_370.jpeg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://www.filtershop.co.za/images/thumbs/0003879_pressure-tanks_370.jpeg" />
        </SwiperSlide>
       
      </Swiper>
    </>
  );
}
