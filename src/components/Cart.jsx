//Package
import { Link } from "react-router-dom";
import { TbListDetails } from "react-icons/tb";
//Icons
import { MdAddShoppingCart, MdOutlineRemoveShoppingCart } from "react-icons/md";
import { TbShoppingBagPlus } from "react-icons/tb";
import { TbShoppingBagMinus } from "react-icons/tb";
//Utils
import { shortenTtile } from "../utils/ShortenTitle";
//Hooks
import { useBascketCart } from "../hooks/useBascketCart";

function Cart({ data }) {
  const { id, image, title, price } = data;
  const { state, dispatch } = useBascketCart();
  const inBascket = state.bascketCart.find((p) => p.id === id);

  return (
    <div className="p-2 border-2 border-cyan-700 rounded-md text-cyan-700 bg-white">
      <div className="size-40 lg:size-56 mx-auto overflow-hidden rounded-sm">
        <img src={image} alt={title} className="size-full object-contain" />
      </div>
      <div className="flex justify-between items-center *:font-bold text-xs lg:text-lg">
        <p className="py-2">{shortenTtile(title)}...</p>
        <p className="text-gray-700">$ {price}</p>
      </div>
      <div className="flex justify-between items-center px-2">
        <button>
          <Link to={`/store/${id}`}>
            <TbListDetails size={"22px"} />
          </Link>
        </button>
        <div className="flex items-center">
          {!!inBascket && (
            <>
              {inBascket.quantity === 1 ? (
                <button
                  onClick={() =>
                    dispatch({ type: "REMOVE_ITEM", payload: data })
                  }>
                  <MdOutlineRemoveShoppingCart size={"22px"} />
                </button>
              ) : (
                <button
                  onClick={() => dispatch({ type: "DECREASE", payload: data })}>
                  <TbShoppingBagMinus size={"22px"} />
                </button>
              )}

              <span className="mx-2 font-bold text-[14px]">{inBascket.quantity}</span>
            </>
          )}
          {!inBascket ? (
            <button
              onClick={() => dispatch({ type: "ADD_ITEM", payload: data })}>
              <MdAddShoppingCart size={"22px"} />
            </button>
          ) : (
            <button
              onClick={() => dispatch({ type: "INCREASE", payload: data })}>
              <TbShoppingBagPlus size={"22px"} />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Cart;
