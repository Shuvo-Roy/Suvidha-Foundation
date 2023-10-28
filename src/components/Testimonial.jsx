import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./swiper.css";
import "swiper/css/pagination";
//import 'swiper/css/effect-coverflow';

import { Pagination,EffectCoverflow } from "swiper/modules";


import testimonial from "../assets/testimonial/testimonial";

export default function Testimonial() {

  return (
    <div className="w-5/6 m-auto mb-12">
      <div className="flex flex-col items-center justify-center">
        <h1  className="text-yellow text-4xl">Testimonial</h1>
        <p  className="text-yellow text-5xl">What people are talking about our charity activities</p>
      </div>
      <div>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        loop={true}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        {testimonial.map((testItem,index)=>(
            <SwiperSlide key={index}>
            <img src={testItem.img} alt="#"/>
          </SwiperSlide>
        ))}
          

        </Swiper>
      </div>
    </div>
  );
}
