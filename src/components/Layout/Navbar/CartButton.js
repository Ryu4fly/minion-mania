import React, { useContext } from "react";

import classes from "./CartButton.module.css";
import CartContext from "../../../store/cart-context";

const CartButton = (props) => {
  const ctx = useContext(CartContext);

  const { items } = ctx;

  const numOfItems = items.reduce((currentNum, item) => {
    return currentNum + item.amount;
  }, 0);

  return (
    <button className={classes["cart-button"]} onClick={props.onClick}>
      {props.text}
      <div className={classes["cart-counter"]}>{numOfItems}</div>
    </button>
  );
};

export default CartButton;
