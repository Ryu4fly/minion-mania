import React from "react";

const CartContext = React.createContext({
  items: [],
  totalCost: null,
  addItem: (item) => {},
  removeItem: (id) => {},
});

export default CartContext;
