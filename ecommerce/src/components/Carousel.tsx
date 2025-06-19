import React, { useEffect, useState } from "react";
import Picture1 from "../assets/homeslide1.png";
import Picture2 from "../assets/homeslide2.png";
import Picture3 from "../assets/homeslide3.png";
import { SlArrowRight, SlArrowLeft } from "react-icons/sl";
import "../styles/Carousel.css";

const images = [Picture1, Picture2, Picture3];

export const Carousel: React.FC = () => {
  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="carousel font-montserrat w-full h-screen xl:h-full relative overflow-hidden">
      {/* Previous Button */}
      <button
        className="carousel-button prev z-10"
        onClick={prevSlide}
        aria-label="Previous Slide"
      >
        <SlArrowLeft />
      </button>

      {/* Carousel Content */}
      <div
        className="absolute top-mobContent left-1/2 transform -translate-x-1/2 -translate-y-1/2
                   xl:top-content xl:left-auto xl:transform-none
                   z-10 text-white font-bold flex flex-col items-center xl:items-start
                   gap-4 xl:gap-11 text-center xl:text-left px-4 xl:px-72 w-full"
      >
        <h3 className="text-xl xl:text-2xl">SUMMER 2025</h3>
        <h1 className="text-4xl xl:text-7xl leading-tight mb-8">
          NEW <br className="block xl:hidden"/>
          COLLECTION
        </h1>
        <p className="text-xl xl:text-2xl font-normal leading-relaxed">
          We know how large object
          <br className="block xl:hidden" />
          will act,
          <br className="hidden xl:block" />
          but things on a
          <br className="block xl:hidden" />
          small scale.
        </p>
        <button className="bg-green-500 text-base xl:text-2xl w-44 xl:w-[300px] h-12 xl:h-20 mt-4 rounded-md">
          SHOP NOW
        </button>
      </div>

      {/* Carousel Images */}
      <div
        className="carousel-track"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {images.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`Slide ${i}`}
            className="carousel-image"
          />
        ))}
      </div>

      {/* Next Button */}
      <button
        className="carousel-button next z-10"
        onClick={nextSlide}
        aria-label="Next Slide"
      >
        <SlArrowRight />
      </button>
      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 hidden xl:flex gap-2 z-20">
        {images.map((_, i) => (
            <div
            key={i}
            className={`w-20 h-3 bg-white transition-all duration-300 ${
                index === i ? "opacity-100" : "opacity-50"
            }`}
            />
        ))}
        </div>
    </div>
  );
};
