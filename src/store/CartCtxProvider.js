import React from "react";

import CartContext from "./cart-context";

const CartCtxProvider = (props) => {
  return <CartContext.Provider>{props.children}</CartContext.Provider>;
};

export default CartCtxProvider;
