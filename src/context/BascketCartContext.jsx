import React, { createContext, useReducer } from "react";
const initialState = {
  bascketCart: [],
  totalAll: 0,
  quantityAll: 0,
};
export const BascketCartContextProvider = createContext(null);

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      const isItemForAdd = state.bascketCart.findIndex(
        (product) => product.id === action.payload.id
      );

      if (isItemForAdd === -1) {
        const newProduct = { ...action.payload, quantity: 1 };
        return {
          ...state,
          bascketCart: [...state.bascketCart, newProduct],
        };
      } else return state;

    case "REMOVE_ITEM":
      const updatedBasket = state.bascketCart.filter(
        (product) => product.id !== action.payload.id
      );

      return { ...state, bascketCart: updatedBasket };

    case "INCREASE":
      const increasedCart = state.bascketCart.map((product) =>
        product.id === action.payload.id
          ? { ...product, quantity: product.quantity + 1 }
          : product
      );

      return { ...state, bascketCart: increasedCart };
    case "DECREASE":
      const decreasedCart = state.bascketCart.map((product) =>
        product.id === action.payload.id && product.quantity > 0
          ? { ...product, quantity: product.quantity - 1 }
          : product
      );

      return { ...state, bascketCart: decreasedCart };
    default:
      return state;
  }
};

function BascketCartContext({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <BascketCartContextProvider.Provider value={{ state, dispatch }}>
      {children}
    </BascketCartContextProvider.Provider>
  );
}

export default BascketCartContext;
