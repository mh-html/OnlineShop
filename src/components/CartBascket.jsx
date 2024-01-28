import React from "react";
//Utils
import { shortenTtile } from "../utils/ShortenTitle";
//Icons
import { TbShoppingBagMinus, TbShoppingBagPlus } from "react-icons/tb";
import { MdOutlineRemoveShoppingCart } from "react-icons/md";
//Hooks
import { useBascketCart } from "../hooks/useBascketCart";
import { notif } from "../utils/showNotif";

function CartBascket({ data }) {
  const { image, quantity, title, price } = data;
  const { dispatch } = useBascketCart();
  return (
    <div className="flex justify-between items-center border-2 border-tl dark:border-td rounded-md p-4 mb-4">
      <div className="size-12 overflow-hidden rounded-md">
        <img src={image} alt={title} className="size-full object-contain" />
      </div>
      <div className="text-tl dark:text-td text-base lg:text-xl">
        <h2 className="font-bold">{shortenTtile(title)}</h2>
        <p className="font-semibold">$ {price}</p>
      </div>
      <div className="text-tl dark:text-td flex">
        {quantity === 1 ? (
          <button
            className="border border-tl dark:border-td rounded-md"
            onClick={() => {
              dispatch({ type: "REMOVE_ITEM", payload: data });
              notif("error", shortenTtile(title));
          }}>
            <MdOutlineRemoveShoppingCart size={"22px"} />
          </button>
        ) : (
          <button
            className="border border-tl dark:border-td rounded-md"
            onClick={() => dispatch({ type: "DECREASE", payload: data })}>
            <TbShoppingBagMinus size={"22px"} />
          </button>
        )}

        <span className="mx-2 font-bold text-bd dark:text-bl">{quantity}</span>
        <button
          className="border border-tl dark:border-td rounded-md"
          onClick={() => dispatch({ type: "INCREASE", payload: data })}>
          <TbShoppingBagPlus size={"22px"} />
        </button>
      </div>
    </div>
  );
}

export default CartBascket;
