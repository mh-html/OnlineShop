import React from "react";
//Utils
import { shortenTtile } from "../utils/ShortenTitle";
//Icons
import { TbShoppingBagMinus, TbShoppingBagPlus } from "react-icons/tb";
import { MdOutlineRemoveShoppingCart } from "react-icons/md";
//Hooks
import { useBascketCart } from "../hooks/useBascketCart";

function CartBascket({ data }) {
  const { image, quantity, title, rate, price } = data;
  const { dispatch } = useBascketCart();
  return (
    <div className="flex justify-between items-center border-2 border-cyan-700 rounded-md p-4">
      <div className="w-12 h-14 overflow-hidden rounded-md">
        <img src={image} alt={title} className="w-full h-full" />
      </div>
      <div className="text-cyan-800">
        <h2 className="font-bold text-xl">{shortenTtile(title)}</h2>
        <p className="font-semibold text-xl">$ {price}</p>
      </div>
      <div className="text-cyan-800">
        {quantity === 1 ? (
          <button
            onClick={() => dispatch({ type: "REMOVE_ITEM", payload: data })}>
            <MdOutlineRemoveShoppingCart size={"22px"} />
          </button>
        ) : (
          <button onClick={() => dispatch({ type: "DECREASE", payload: data })}>
            <TbShoppingBagMinus size={"22px"} />
          </button>
        )}

        <span className="mx-2 font-bold">{quantity}</span>
        <button onClick={() => dispatch({ type: "INCREASE", payload: data })}>
          <TbShoppingBagPlus size={"22px"} />
        </button>
      </div>
    </div>
  );
}

export default CartBascket;
