import React from "react";

const CartContext = React.createContext({
  items: [],
  totalAmount: null,
  onAdd: () => {},
  onSubtract: () => {},
});

export default CartContext;
