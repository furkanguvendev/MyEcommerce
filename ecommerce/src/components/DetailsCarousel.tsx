import React, { useState } from "react";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";

type Props = {
  pictures: string[];
  miniPictures: string[];
};

const DetailsCarousel: React.FC<Props> = ({ pictures, miniPictures }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevImage = () => {
    setCurrentIndex((prev) => (prev === 0 ? pictures.length - 1 : prev - 1));
  };

  const nextImage = () => {
    setCurrentIndex((prev) => (prev === pictures.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="w-[clamp(348px,30vw,702.89px)] max-w-3xl mx-auto">
      {/* Büyük Resim */}
      <div className="relative">
        <img
          src={pictures[currentIndex]}
          alt={`Slide ${currentIndex}`}
          className="w-full h-[clamp(277px,25vw,625.1px)] object-cover rounded-lg"
        />

        {/* Sol Buton */}
        <button
          onClick={prevImage}
          className="absolute top-1/2 left-2 transform -translate-y-1/2 p-2 rounded-full text-white"
        >
          <SlArrowLeft size={48} />
        </button>

        {/* Sağ Buton */}
        <button
          onClick={nextImage}
          className="absolute top-1/2 right-2 transform -translate-y-1/2 p-2 rounded-full text-white"
        >
          <SlArrowRight size={48} />
        </button>
      </div>

      {/* Thumbnail'lar */}
      <div className="flex  gap-2 mt-4">
        {miniPictures.map((img, idx) => (
          <img
            key={idx}
            src={img}
            alt={`Thumbnail ${idx}`}
            onClick={() => setCurrentIndex(idx)}
            className={`w-24 xl:w-32 aspect-[4/3] relative object-cover rounded-md cursor-pointer border-2 ${
              idx === currentIndex ? "border-neutral-500" : "border-transparent"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default DetailsCarousel;
