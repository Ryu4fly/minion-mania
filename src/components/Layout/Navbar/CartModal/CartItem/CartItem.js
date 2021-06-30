import React from "react";

import classes from "./CartItem.module.css";

const CartItem = (props) => {
  return (
    <li className={classes.item}>
      <span className={classes.name}>{props.name}</span>
      <span className={classes.amount}>x {props.amount}</span>
      <span className={classes.price}>$5.00</span>
      <button className={`${classes.actions} ${classes.add}`}>+</button>
      <button className={`${classes.actions} ${classes.subtract}`}>-</button>
    </li>
  );
};

export default CartItem;
