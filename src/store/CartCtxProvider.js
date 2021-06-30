import React, { useReducer } from "react";

import CartContext from "./cart-context";

const defaultCartState = {
  items: [],
  totalCost: 0,
};

const cartReducer = (state, action) => {
  let updatedItems;

  if (action.type === "ADD") {
    const existingItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );

    const existingItem = state.items[existingItemIndex];

    if (existingItem) {
      const updatedItem = {
        ...existingItem,
        amount: existingItem.amount + action.item.amount,
      };
      updatedItems = [...state.items];
      updatedItems[existingItemIndex] = updatedItem;
    } else {
      updatedItems = state.items.concat(action.item);
    }
    return {
      items: updatedItems,
      totalCost: 0,
    };
  }

  if (action.type === "REMOVE") {
    const existingItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );
    const exisitingItem = state.items[existingItemIndex];

    const updatedItem = {
      ...exisitingItem,
      amount: exisitingItem.amount - 1,
    };

    if (updatedItem.amount >= 1) {
      updatedItems = [...state.items];
      updatedItems[existingItemIndex] = updatedItem;
    } else {
      updatedItems = state.items.filter((item) => item.id !== action.id);
    }
    return {
      items: updatedItems,
      totalCost: 0,
    };
  }
  return defaultCartState;
};

const CartCtxProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  const addItemHandler = (item) => {
    dispatchCartAction({ type: "ADD", item });
  };

  const removeItemHandler = (id) => {
    dispatchCartAction({ type: "REMOVE", id });
  };

  const cartContext = {
    items: cartState.items,
    totalCost: cartState.totalCost,
    addItem: addItemHandler,
    removeItem: removeItemHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartCtxProvider;
