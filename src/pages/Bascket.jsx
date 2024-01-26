import React from "react";
//Components
import CartBascket from "../components/CartBascket";
//Hooks
import { useBascketCart } from "../hooks/useBascketCart";
//Utils
import { calculatorTotal } from "../utils/calculatorTotalPrice";

function Bascket() {
  const { state } = useBascketCart();
  calculatorTotal(state);
  return (
    <div className="container mx-auto min-h-screen flex flex-col-reverse md:flex-row justify-between mt-4 py-2 gap-4 px-4 lg:px-48">
      <div className="border-2 border-tl dark:border-td rounded-md h-fit w-full md:w-1/3 p-4">
        <p className="font-semibold text-tl dark:text-td mb-4">
          Total : $ {state.totalAll.toFixed(2)}{" "}
        </p>
        <p className="text-xl text-tl dark:text-td">
          Quantity : {state.quantityAll}{" "}
        </p>
        <p className="text-xl text-tl dark:text-td">Status : Pending... </p>
      </div>
      <div className="w-full md:w-2/3">
        {state.bascketCart.map((product) => (
          <CartBascket key={product.id} data={product} />
        ))}
        {!state.bascketCart.length && (
          <p className="text-xl font-semibold text-bd dark:text-bl">Empity...</p>
        )}
      </div>
    </div>
  );
}

export default Bascket;
