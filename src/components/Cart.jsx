import React from "react";
import { Link } from "react-router-dom";
import { TbListDetails } from "react-icons/tb";
import { MdAddShoppingCart } from "react-icons/md";

import { shortenTtile } from "../utils/ShortenTitle";

function Cart({ data: { id, image, title, price } }) {
  return (
    <div className="px-2 py-2 border-2 border-cyan-700 rounded-md text-cyan-700 bg-white">
      <div className="w-[215px] h-[250px] mx-auto overflow-hidden rounded-sm">
        <img src={image} alt={title} className="w-full h-full" />
      </div>
      <div className="flex justify-between items-center">
        <p className="font-bold py-2">{shortenTtile(title)}</p>
        <p className="font-bold text-gray-700">$ {price}</p>
      </div>
      <div className="flex justify-between items-center px-3">
        <button>
          <Link to={`/store/${id}`}>
            <TbListDetails size={"22px"} />
          </Link>
        </button>
        <button><MdAddShoppingCart size={"22px"} /></button>
      </div>
    </div>
  );
}

export default Cart;
