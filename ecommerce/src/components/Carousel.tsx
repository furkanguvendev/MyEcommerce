import React, { useEffect, useState } from "react";
/* import Picture1 from "../assets/homeslide1.png";
import Picture2 from "../assets/homeslide2.png";
import Picture3 from "../assets/homeslide3.png"; */
import { SlArrowRight, SlArrowLeft } from "react-icons/sl";
import "../styles/Carousel.css";
import { useNavigate } from "react-router-dom";

type Props = {
pictures: {
  picture1: {
    img: string;
    price: string;
  };
  picture2: {
    img: string;
    price: string;
  };
  picture3: {
    img: string;
    price: string;
  };
}
  text1: string;
  text2: {
    mobile: string;
    desktop: string;
  };
  text3: {
    mobile: string;
    desktop: string;
  };
  button: string;
}

/* const images = [Picture1, Picture2, Picture3]; */

export const Carousel: React.FC<Props> = ({
  pictures,
  text1,
  text2,
  text3,
  button,
}) => {

  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % Object.values(pictures).length);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + Object.values(pictures).length) % Object.values(pictures).length);
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
        className="carousel-button prev z-50"
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
        <h3 className="text-xl xl:text-2xl">{text1}</h3>
        <h1 className="text-4xl xl:text-7xl leading-tight mb-8">
          {(isMobile ? text2.mobile : text2.desktop).split("\n").map((line, i) => (
            <React.Fragment key={i}>
              {line}
              <br />
            </React.Fragment>
          ))}
        </h1>
        <p className="text-xl xl:text-2xl font-normal leading-relaxed">
          {(isMobile ? text3.mobile : text3.desktop).split("\n").map((line, i) => (
            <React.Fragment key={i}>
              {line}
              <br />
            </React.Fragment>
          ))}
        </p>
        <div>
          <p>{Object.values(pictures)[index].price}</p>
          <button onClick={()=> navigate("/shop/k/tisort/1")} className="bg-green-500 text-base xl:text-2xl w-44 xl:w-[300px] h-12 xl:h-20 mt-4 rounded-md">
            {button}
          </button>
        </div>
      </div>

      {/* Carousel Images */}
      <div
        className="carousel-track"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {/*         {images.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`Slide ${i}`}
            className="carousel-image"
          />
        ))} */}
        {Object.values(pictures).map((src, i) => (
          <img
            key={i}
            src={src.img}
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
        {Object.values(pictures).map((_, i) => (
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
