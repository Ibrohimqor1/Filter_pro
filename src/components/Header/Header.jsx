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
    <header>
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
          <img src="https://s3-media0.fl.yelpcdn.com/bphoto/hRhTbFoBiOcyaoNUy4LgLQ/1000s.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://www.ajwallpaper.com/cdn/shop/products/BARBER_SHOP-pic12.jpg?v=1582681620" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="data:image/jpeg;base64,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" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://cdn.shopify.com/s/files/1/0001/9211/8835/files/Happy_Barber_and_Customer_Men_s_Hairstyle_480x480.png?v=1621594670" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://s3-media0.fl.yelpcdn.com/bphoto/qobXAtokFEFtJNOH0zkQZQ/258s.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://d2zdpiztbgorvt.cloudfront.net/region1/us/440455/resource_photos/fe6f2cd1b6fb43968c416fa7ff065b-jbs-barber-spa-llc-saul-reyes-4c9bc92a4b734574afc21f0f75ee7f-booksy.jpeg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://s3-media0.fl.yelpcdn.com/bphoto/nGe9gwMxgmHKdGOuEtAgwQ/348s.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://images.squarespace-cdn.com/content/v1/5dfadab6665ed310c4686813/f3c46e6d-ba07-47d2-a5c6-76bedd2188ee/IMG_9955.jpg" />
        </SwiperSlide>
       
      </Swiper>
    </header>
  );
}
