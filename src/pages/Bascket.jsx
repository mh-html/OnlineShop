import React from "react";
//Components
import CartBascket from "../components/CartBascket";
//Hooks
import { useBascketCart } from "../hooks/useBascketCart";

function Bascket() {
  const { state } = useBascketCart();
  return (
    <div className="container mx-auto flex justify-between mt-4 py-2 gap-4">
      <div className="border-2 border-cyan-700 rounded-md h-64 w-1/3"></div>
      <div className="w-2/3">
        {state.bascketCart.map((product) => (
          <CartBascket key={product.id} data={product} />
        ))}
      </div>
    </div>
  );
}

export default Bascket;
