import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "../Header/Header.css"
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";



// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";

export default function App() {
  return (
    <>
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      >
         <SwiperSlide><img src="http://filter-shop.kz/files/resized/slides/stakan-2.0.1067x400.center.center.png.webp" alt="" /></SwiperSlide>
        <SwiperSlide><img src="http://filter-shop.kz/files/resized/slides/korpusa.1067x400.center.center.png.webp" alt="" /></SwiperSlide>
       
       
        <SwiperSlide><img src="http://filter-shop.kz/files/resized/slides/avtomaty.1067x400.center.center.png.webp" alt="" /></SwiperSlide>
        <SwiperSlide><img src="http://filter-shop.kz/files/resized/slides/filtruyuschie.1067x400.center.center.png.webp" alt="" /></SwiperSlide>
        
   
      </Swiper>
    </>
  );
}
