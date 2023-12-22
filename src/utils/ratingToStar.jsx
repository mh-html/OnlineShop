import { FaStar, FaRegStarHalf, FaRegStar } from "react-icons/fa6";

const convertRatingToStar = (rating) => {
  const stars = [];
  const roundedRating = Math.round(rating * 2) / 2;
  for (let i = 0; i < 5; i++) {
    if (i < Math.floor(roundedRating)) {
      stars.push(<FaStar key={i} />);
    } else if (i < roundedRating) {
      stars.push(<FaRegStarHalf key={i} />);
    } else {
      stars.push(<FaRegStar key={i} />);
    }
  }

  return <div className="flex items-center text-lg">{stars}</div>;
};

export { convertRatingToStar };
