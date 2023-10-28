import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./swiper.css";
import { Pagination } from "swiper/modules";


import testimonial from "../assets/testimonial/testimonial";

export default function Testimonial() {

  return (
    <div className="w-5/6 m-auto mb-8">
      <div className="flex flex-col items-center justify-center">
        <h1  className="text-yellow text-4xl">Testimonial</h1>
        <p  className="text-yellow text-5xl">What people are talking about our charity activities</p>
      </div>
      <div>
        <Swiper
          slidesPerView={4}
          centeredSlides={true}
          spaceBetween={30}
          grabCursor={true}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper w-full h-full"
        >
        {testimonial.map((testItem,index)=>(
            <SwiperSlide className="flex items-center justify-center rounded-xl overflow-hidden" key={index}>
            <img src={testItem.img} alt="" className=" object-fit" />
          </SwiperSlide>
        ))}
          

        </Swiper>
      </div>
    </div>
  );
}
