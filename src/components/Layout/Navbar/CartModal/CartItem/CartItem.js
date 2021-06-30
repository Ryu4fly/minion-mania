import React, { useContext } from "react";

import CartContext from "../../../../../store/cart-context";

import classes from "./CartItem.module.css";

const CartItem = (props) => {
  const ctx = useContext(CartContext);

  const addItemHandler = () => {
    const item = {
      id: props.id,
      amount: 1,
    };
    ctx.addItem(item);
  };

  const removeItemHandler = () => {
    ctx.removeItem(props.id);
  };

  return (
    <li className={classes.item}>
      <span className={classes.name}>{props.name}</span>
      <span className={classes.amount}>x {props.amount}</span>
      <span className={classes.price}>$5.00</span>
      <button
        className={`${classes.actions} ${classes.add}`}
        onClick={addItemHandler}
      >
        +
      </button>
      <button
        className={`${classes.actions} ${classes.subtract}`}
        onClick={removeItemHandler}
      >
        -
      </button>
    </li>
  );
};

export default CartItem;
