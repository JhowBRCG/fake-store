import { FaStar, FaRegStar } from "react-icons/fa";

const maxStars = 5;

export default function RatingStars({ rating }: { rating: number }) {
  const handleRatingStars = (rating: number) => {
    return Array.from({ length: maxStars }, (_, i) => {
      return i < Math.round(rating) ? (
        <FaStar key={i} className="text-[#FFBD1B]" />
      ) : (
        <FaRegStar key={i} />
      );
    });
  };

  return <div className="flex gap-1 text-sm">{handleRatingStars(rating)}</div>;
}
