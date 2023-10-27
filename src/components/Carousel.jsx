import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import slides from "../assets/dataImgslide";

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? 4 : currentSlide - 1);
  };

  const nextSlide = () => {
    setCurrentSlide(currentSlide === 4 ? 0 : currentSlide + 1);
  };

  const currentImg = slides[currentSlide].img;

  return (
    <div className="w-full h-full overflow-hidden">
      <div className="w-screen h-[650px] relative">
        <div
          style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
          className="w-[500vw] h-full flex transition-transform duration-700 overflow-hidden object-cover"
        >
          {slides.map((slide, index) => (
        <div key={slide.id} className="w-full h-full object-cover">
          <div className="absolute inset-0 bg-opacity-50">
            <div className="h-full mt-8 relative">
              <div className="flex gap-4 items-center">
                <button className="text-black border border-yellow rounded-lg px-4 py-2 text-xl cursor-pointer">
                  Donate Now
                </button>
                <button className="text-black border border-yellow rounded-lg px-4 py-2 text-xl cursor-pointer">
                  Watch Video
                </button>
              </div>
            </div>
          </div>
          <img
            src={slide.img}
            alt=""
            loading="priority"
            className={`w-screen h-full object-cover ${
              index === currentSlide ? "" : "hidden"
            }`}
              />
            </div>
          ))}
        </div>
        <div className="absolute flex flex-row justify-between left-0 right-0 mx-auto gap-8 bottom-44">
          <div
            className="w-14 h-12 border-[2px] border-yellow flex items-center justify-center hover:cursor-pointer hover:bg-yellow hover:text-white active:bg-yellow duration-300 text-2xl text-yellow"
            onClick={prevSlide}
          >
            <AiOutlineArrowLeft />
          </div>
          <div
            className="w-14 h-12 border-[2px] border-yellow flex items-center justify-center hover:cursor-pointer hover:bg-yellow hover:text-white active:bg-yellow duration-300 text-2xl text-yellow"
            onClick={nextSlide}
          >
            <AiOutlineArrowRight />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
