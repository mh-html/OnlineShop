import React from "react";

function Cart({ data: { image, title, price, category } }) {
  return (
    <div className="w-[300px] px-4 py-2 border border-white">
      <div className="w-full">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>
      <div className="flex justify-between items-center">
        <p>{price}</p>
        <p>{category}</p>
      </div>
    </div>
  );
}

export default Cart;
