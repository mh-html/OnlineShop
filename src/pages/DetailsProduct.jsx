import { Link, useParams } from "react-router-dom";
import { BiCategory } from "react-icons/bi";
import { FaShoppingBag } from "react-icons/fa";

import useShoppingCarts from "../hooks/useShoppingCarts";
import { convertRatingToStar } from "../components/ratingToStar";

function DetailsProduct() {
  const products = useShoppingCarts();
  const { id } = useParams();
  const { image, title, description, price, category, rating } =
    products[id - 1];

  return (
    <div className="container mx-auto min-h-screen mt-8 flex flex-col md:flex-row justify-evenly items-start gap-4 px-8 md:px-4 lg:px-48">
      <div className="w-60 lg:w-72 flex-1 border-2 border-tl dark:text-td rounded-md overflow-hidden p-2">
        <img src={image} alt={title} className="size-full object-cover" />
      </div>
      <div className="flex-[2_2_0%]">
        <h1 className="font-bold text-sm md:text-xl text-tl dark:text-td">
          {title}
        </h1>
        <p className="text-xs md:text-base lg:text-lg font-semibold text-bd dark:text-bl">
          {description}
        </p>
        <div className="flex justify-between items-center my-4 lg:my-8 text-sm lg:text-2xl font-bold text-tl dark:text-td">
          <p>{price} $</p>
          <p className="flex items-center">
            <BiCategory />
            {category}
          </p>
        </div>
        <span className="text-amber-500 font-bold text-3xl text-tl dark:text-bl">
          {rating.rate} {convertRatingToStar(rating.rate)}
        </span>
        <div className="flex justify-between items-center bg-tl dark:text-td rounded-md p-4 mt-10 text-white">
          <Link
            to="/store"
            className="border-2 border-white text-white px-4 py-1 rounded-md flex items-center hover:animate-pulse">
            <FaShoppingBag /> Go to shop
          </Link>
        </div>
      </div>
    </div>
  );
}

export default DetailsProduct;
