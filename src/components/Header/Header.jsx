import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { Pagination } from "swiper";

export default function App() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide><img src="https://dpw4tdh0of7va.cloudfront.net/wp-content/uploads/2020/01/family-drinking-water.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://dpw4tdh0of7va.cloudfront.net/wp-content/uploads/2020/01/family-drinking-water.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://dpw4tdh0of7va.cloudfront.net/wp-content/uploads/2020/01/family-drinking-water.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://dpw4tdh0of7va.cloudfront.net/wp-content/uploads/2020/01/family-drinking-water.jpg" alt="" /></SwiperSlide>
       
      </Swiper>
    </>
  );
}

