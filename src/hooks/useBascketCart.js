import { useContext } from "react";
import { BascketCartContextProvider } from "../context/BascketCartContext";

const useBascketCart = () => {
  return useContext(BascketCartContextProvider);
};

export { useBascketCart };
