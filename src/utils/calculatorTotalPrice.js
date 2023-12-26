const calculatorTotal = (state) => {
  let total = 0,
    quantity = 0;

  state.bascketCart.forEach((product) => {
    total += product.price * product.quantity;
    quantity += product.quantity;
  });
  state.totalAll = total;
  state.quantityAll = quantity;
};

export { calculatorTotal };
