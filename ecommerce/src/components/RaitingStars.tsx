import React from "react";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

type Props = {
  raiting: number;
};

const RaitingStars: React.FC<Props> = ({ raiting }) => {
  const average = raiting;

  const fullStars = Math.floor(average);
  const hasHalfStar = average - fullStars >= 0.25 && average - fullStars < 0.75;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <div className="flex items-center text-yellow-500 gap-2">
      {[...Array(fullStars)].map((_, idx) => (
        <FaStar key={`full-${idx}`} />
      ))}
      {hasHalfStar && <FaStarHalfAlt />}
      {[...Array(emptyStars)].map((_, idx) => (
        <FaRegStar key={`empty-${idx}`} />
      ))}
    </div>
  );
};

export default RaitingStars;
