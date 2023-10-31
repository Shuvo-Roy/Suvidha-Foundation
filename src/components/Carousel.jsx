import React, { useState } from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import slides from "../assets/dataImgslide";

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const prevSlide = () => {
    setCurrentSlide((currentSlide - 1 + slides.length) % slides.length);
  };

  const nextSlide = () => {
    setCurrentSlide((currentSlide + 1) % slides.length);
  };

  return (
    <div className="w-5/6 m-auto">
      <div className="overflow-hidden relative my-8 w-full h-5/6">
      <div className="flex transition ease-out duration-500" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
        {slides.map((slide) => {
          return <img src={slide.img} className="rounded-xl"/>;
        })}
      </div>
      <div className="absolute top-0 h-full w-full flex justify-between items-center p-4">
        <div className="text-yellow border text-4xl" onClick={prevSlide}>
          <AiOutlineArrowLeft />
        </div>
        <div className="text-yellow border text-4xl" onClick={nextSlide}>
          <AiOutlineArrowRight />
        </div>
      </div>
    </div>
    </div>
  );
};

export default Carousel;
