import { useContext } from "react";
import { ShoppingCartContextProvider } from "../context/ShoppingCartContext";

function useShoppingCarts() {
  return useContext(ShoppingCartContextProvider);
}

export default useShoppingCarts;
