import React from "react";
import { shortenTtile } from "../utils/ShortenTitle";

function Cart({ data: { image, title, price, category } }) {
  return (
    <div className="px-4 py-2 border-2 border-cyan-700 rounded-md bg-cyan-700">
      <div className="w-[215px] h-[250px] mx-auto object-cover overflow-hidden rounded-sm">
        <img src={image} alt={title} className="w-full h-full" />
      </div>
      <p className="border-b-2 border-white text-white font-semibold py-2">{shortenTtile(title)}</p>
      <div className="flex justify-between items-center">
        <p className="text-white">{price} $</p>
        <p className="text-white">{category}</p>
      </div>
    </div>
  );
}

export default Cart;
