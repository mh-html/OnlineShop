import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { BiCategory } from "react-icons/bi";
import { FaShoppingBag } from "react-icons/fa";

import useShoppingCarts from "../hooks/useShoppingCarts";
import { convertRatingToStar } from "../utils/ratingToStar";

function DetailsProduct() {
  const products = useShoppingCarts();
  const { id } = useParams();
  const { image, title, description, price, category, rating } =
    products[id - 1];

  return (
    <div className="container mx-auto mt-8 flex flex-col md:flex-row justify-evenly items-center gap-4 px-8 md:px-4">
      <div className="w-[300px] sm:w-auto flex-1 border-2 border-cyan-700 rounded-md overflow-hidden p-2">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>
      <div className="flex-[2_2_0%]">
        <h1 className="font-bold text-2xl text-cyan-700">{title}</h1>
        <p className="text-md font-semibold">{description}</p>
        <div className="flex justify-between items-center my-8 text-2xl font-bold text-cyan-700">
          <p>{price} $</p>
          <p className="flex items-center">
            <BiCategory />
            {category}
          </p>
        </div>
        <span className="text-amber-500 font-bold text-3xl">
          {rating.rate} {convertRatingToStar(rating.rate)}
        </span>
        <div className="flex justify-between items-center bg-cyan-700 rounded-md p-4 mt-10 text-white">
          <Link
            to="/store"
            className="border-2 border-white px-4 py-1 rounded-md flex items-center">
            <FaShoppingBag /> Go to shop
          </Link>
        </div>
      </div>
    </div>
  );
}

export default DetailsProduct;
